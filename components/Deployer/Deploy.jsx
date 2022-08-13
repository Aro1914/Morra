import React from "react";
import { useReach, useClasses } from "../../hooks";

const Deploy = () => {
    const { deploy, wager, standardUnit } = useReach();

    return (
        <div className={ useClasses() }>
            <h3 className={ useClasses() }>Wager (must be paid to deploy) <strong>{ wager }</strong>{ standardUnit }</h3>
            <button
                className={ useClasses() }
                onClick={ () => deploy() }
            >
                Deploy
            </button>
        </div>
    );
};

export default Deploy;