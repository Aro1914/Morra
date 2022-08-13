import React from "react";
import { useClasses } from "../../hooks";

const Wrapper = ({ children }) => {
    return (
        <div className={ useClasses() }>
            <h2 className={ useClasses() }>Deployer (Alice)</h2>
            <div className={ useClasses() }>
                { children }
            </div>
        </div>
    );
};

export default Wrapper;