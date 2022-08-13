import React, { useState } from "react";
import { useReach, useClasses } from "../../hooks";



const PickAndGuess = () => {
    const { playable, choices, makeDecision } = useReach();
    const [currentChoices, setCurrentChoices] = useState({});
    const [chosen, setChosen] = useState(false);
    const [possibleFingers, setPossibleFingers] = useState([0, 1, 2, 3, 4, 5]);

    const onChoosing = (choice) => {
        if (!chosen) {
            const possibleOutcomes = [];
            let outcomes = choice;
            while (outcomes <= 10) {
                possibleOutcomes[outcomes - choice] = outcomes;
                outcomes++;
            }
            setPossibleFingers(possibleOutcomes);
            setCurrentChoices({ fingers: choice });
            setChosen(true);
        } else {
            setCurrentChoices({ ...currentChoices, guess: choice });
            makeDecision(currentChoices.fingers, currentChoices.guess);
        }
    };

    const Fingers = ({ outcome }) => {
        return (
            <div className={ useClasses() }>
                <button onClick={ () => onChoosing(outcome) } className={ useClasses() }>{ outcome }</button>
            </div>
        );
    };

    return (
        <div className={ useClasses() }>
            <h3 className={ useClasses() }>{ choices ? "It was a tie! Pick again." : "" }</h3>
            <h3 className={ useClasses() }>{ !playable ? "Please wait..." : !chosen ? "Pick your choice of fingers" : "Guess the total fingers played" }</h3>

            <div className={ useClasses() }>
                { playable &&
                    possibleFingers.map((el, i) => <Fingers outcome={ el } key={ i } />)
                }
            </div>
        </div>
    );
};

export default PickAndGuess;