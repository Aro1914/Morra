import React from "react";
import { useReach, useClasses } from "../../hooks";

const DeployerOrAttacher = () => {
    const { selectDeployer, selectAttacher } = useReach();

    return (
        <div className={ useClasses() }>
            <h2 className={ useClasses() }>Please select a role</h2>
            <div className={ useClasses() }>
                <button onClick={ () => selectDeployer() } className={ useClasses() } title="Set the wager, deploy the contract">Deployer</button>
                <span className={ useClasses() }>Set the wager, deploy the contract</span>
            </div>
            <div className={ useClasses() }>
                <button onClick={ () => selectAttacher() } className={ useClasses() } title="Attach to the Deployer's contract">Attacher</button>
                <span className={ useClasses() }>Attach to the Deployer's contract</span>
            </div>
        </div>
    );
};

export default DeployerOrAttacher;