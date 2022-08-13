import React from "react";
import { useClasses } from "../../hooks";

const WaitingForTurn = () => {
    return (
        <div className={ useClasses() }>
            <h2 className={ useClasses() }>Waiting for the other players...</h2>
            <span className={ useClasses() }>Do you have your hand ready?</span>
        </div>
    );
};

export default WaitingForTurn;