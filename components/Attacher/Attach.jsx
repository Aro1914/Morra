import React, { useState } from "react";
import { useReach, useClasses } from "../../hooks";

const Attach = () => {
    const [ctcInfoStr, setCtcInfoStr] = useState("");
    const { attach } = useReach();

    return (
        <div className={ useClasses() }>
            <h2 className={ useClasses() }>Please paste the contract info to attach to:</h2>
            <div className={ useClasses() }>
                <textarea
                    spellCheck="false"
                    className={ useClasses() }
                    onChange={ (e) => setCtcInfoStr(e.currentTarget.value) }
                    placeholder="Enter contract info"
                />
                <button className={ useClasses() } disabled={ !ctcInfoStr } onClick={ () => attach(ctcInfoStr) }>
                    Attach
                </button>
            </div>
        </div>

    );
};

export default Attach;