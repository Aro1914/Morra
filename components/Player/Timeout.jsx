import React from "react";
import { useClasses } from "../../hooks";

const Timeout = () => {
    return ( 
        <div className={ useClasses() }>
            <h3>There's been a timeout. (Someone took too long.)</h3>
        </div>
    )
};

export default Timeout;