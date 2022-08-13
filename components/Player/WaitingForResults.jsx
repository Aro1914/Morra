import React from "react";
import { useClasses } from "../../hooks";

const WaitingForResults = () => {
    return (
        <div className={ useClasses() }>
            <h3 className={ useClasses() }>Waiting for results...</h3>
        </div>
    );
};

export default WaitingForResults;