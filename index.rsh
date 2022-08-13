/* eslint-disable no-array-constructor */
/* eslint-disable eqeqeq */
/* eslint-disable no-loop-func */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'reach 0.1';

const [isOutcome, B_WINS, A_WINS, DRAW] = makeEnum(3);

const winner = (aGuess, aFin, bGuess, bFin) => {
  const total = aFin + bFin;
  return total == aGuess && total != bGuess ? 1 : total == bGuess && total != aGuess ? 0 : 2;
};

const common = {
  ...hasRandom,
  pickAndGuess: Fun([], Array(UInt, 2)),
  declareWinner: Fun([UInt, UInt], Null),
  informTimeout: Fun([], Null),
};

export const main = Reach.App(() => {
  const A = Participant('Alice', {
    // Specify Alice's interact interface here
    ...common,
    deadline: UInt,
    wager: UInt,
  });
  const B = Participant('Bob', {
    // Specify Bob's interact interface here
    ...common,
    acceptWager: Fun([UInt], Null),
  });
  init();
  // The first one to publish deploys the contract

  const informTimeout = () => {
    each([A, B], () => {
      interact.informTimeout();
    });
  };

  A.only(() => {
    const deadline = declassify(interact.deadline);
    const wager = declassify(interact.wager);
  });
  A.publish(deadline, wager).pay(wager);
  commit();

  B.interact.acceptWager(wager);
  B.pay(wager).timeout(relativeTime(deadline), () => closeTo(A, informTimeout));

  var [outcome, total] = [DRAW, 0];
  invariant(balance() == 2 * wager && isOutcome(outcome));
  while (outcome == DRAW) {
    commit();
    A.only(() => {
      const [_fingersAlice, _guessAlice] = interact.pickAndGuess();
      const [_aFinCommit, _aFinSalt] = makeCommitment(interact, _fingersAlice);
      const aFinCommit = declassify(_aFinCommit);
      const [_aGuessCommit, _aGuessSalt] = makeCommitment(interact, _guessAlice);
      const aGuessCommit = declassify(_aGuessCommit);
    });
    A.publish(aFinCommit, aGuessCommit).timeout(relativeTime(deadline), () => closeTo(B, informTimeout));
    commit();

    unknowable(B, A(_fingersAlice, _aFinSalt));
    unknowable(B, A(_guessAlice, _aGuessSalt));
    B.only(() => {
      const [fingersBob, guessBob] = declassify(interact.pickAndGuess());
    });
    B.publish(fingersBob, guessBob).timeout(relativeTime(deadline), () => closeTo(A, informTimeout));
    commit();

    A.only(() => {
      const fingersAlice = declassify(_fingersAlice);
      const aFinSalt = declassify(_aFinSalt);
      const guessAlice = declassify(_guessAlice);
      const aGuessSalt = declassify(_aGuessSalt);
    });
    A.publish(fingersAlice, guessAlice, aFinSalt, aGuessSalt).timeout(relativeTime(deadline), () => closeTo(B, informTimeout));
    checkCommitment(aFinCommit, aFinSalt, fingersAlice);
    checkCommitment(aGuessCommit, aGuessSalt, guessAlice);

    [outcome, total] = [winner(guessAlice, fingersAlice, guessBob, fingersBob), fingersAlice + fingersBob];
    continue;
  }

  assert(outcome == A_WINS || outcome == B_WINS);
  outcome == A_WINS ? transfer(balance()).to(A) : transfer(balance()).to(B);
  commit();

  each([A, B], () => {
    interact.declareWinner(outcome, total);
  });

  // write your program here
  exit();
});
