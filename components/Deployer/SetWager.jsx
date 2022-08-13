import React from "react";
import { useReach, useClasses } from "../../hooks";

const SetWager = () => {
    const { handleWager, defaultWager, standardUnit, setWager } = useReach();
    return (
        <div className={ useClasses() }>
            <label className={ useClasses() } htmlFor="wager">
                <input
                    type="number"
                    placeholder={ defaultWager }
                    onChange={ (e) => setWager(e.currentTarget.value) }
                />
                <span className={ useClasses() }>{ standardUnit }</span>
            </label>
            <button onClick={ () => handleWager() }>Set Wager</button>
        </div>
    );
};

export default SetWager;