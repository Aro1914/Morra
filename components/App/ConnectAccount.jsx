import React from "react"
import { useReach, useClasses } from "../../hooks";

const ConnectAccount = () => {
    const { connectAccount } = useReach();

    return (
        <div className={useClasses()}>
            <div className={useClasses()}>
            <span className={useClasses()}>Please wait while we connect your account. If this takes more than a few seconds, there may be something wrong.</span>
            </div>
            <div className={useClasses()}>
                <button className={useClasses()} onClick={connectAccount}>
                    Connect Algo Wallet
                </button>
            </div>
        </div>
    )
}

export default ConnectAccount;