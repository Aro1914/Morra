import React from "react";
import { useClasses } from "../../hooks";

const Wrapper = ({ children }) => {
    return (
        <div className={ useClasses() }>
            <div className={ useClasses() }>
                <header className={ useClasses() } id='root'>
                    <h1 className={ useClasses() }>Morra 🤗</h1>
                    <div className={ useClasses() }>{ children }</div>
                </header>
            </div>
        </div>
    );
};

export default Wrapper;