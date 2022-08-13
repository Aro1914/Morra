import React from "react";
import { useClasses, useReach } from "../../hooks";

const Done = () => {
    const { outcome, total } = useReach();

    return (
        <div className={ useClasses() }>
            <h2 className={ useClasses() }>
                Thank you for playing.
            </h2>
            <h3 className={ useClasses() }>{ outcome } because because the total was { total }</h3>
        </div>
    );
};

export default Done;