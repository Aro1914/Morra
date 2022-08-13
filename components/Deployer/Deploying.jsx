import React from "react";
import { useClasses } from "../../hooks";

const Deploying = () => {
    return (
        <div className={ useClasses() }>
            <h2 className={ useClasses() }>Deploying... please wait.</h2>
        </div>
    );
};

export default Deploying;