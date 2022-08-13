import React from "react";
import { useClasses } from "../../hooks";

const Attaching = () => {
    return (
        <div className={ useClasses() }>Attaching, please wait...</div>
    );
};

export default Attaching;