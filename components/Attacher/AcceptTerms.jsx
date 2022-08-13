import React, { useState } from "react";
import { useReach, useClasses } from "../../hooks";

const AcceptTerms = () => {
    const [disabled, setDisabled] = useState(false);
    const { wager, standardUnit, termsAccepted } = useReach();

    return (
        <div className={ useClasses() }>
            <h2 className={ useClasses() }>The terms of the game are:</h2>
            <h3 className={ useClasses() }>
                Wager: { wager } { standardUnit }
                Winner takes all <br />
                We play until a winner is discerned
            </h3>

            <button
                className={ useClasses() }
                disabled={ disabled }
                onClick={ () => {
                    setDisabled(true);
                    termsAccepted();
                } }>
                Accept terms and pay wager
            </button>
        </div>
    );
};

export default AcceptTerms;