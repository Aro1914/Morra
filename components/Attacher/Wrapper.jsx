import React from "react";
import { useClasses } from "../../hooks";

const Wrapper = ({ children }) => {
    return (
        <div className={ useClasses() }>
            <h2 className={ useClasses() }>Attacher (Bob) </h2>
            { children }
        </div>
    );
};

export default Wrapper;