import React, { useState } from "react";
import { useReach, useClasses } from "../../hooks";

const FundAccount = () => {
    const { user, standardUnit, defaultFundAmt, fundAccount, skipFundAccount } = useReach();
    const [amount, setAmount] = useState({ amt: defaultFundAmt });

    return (
        <div className={ useClasses() }>
            <h2 className={ useClasses() }>Fund account</h2>
            <h3 className={ useClasses() }>Balance: { user.balance } { standardUnit }</h3>

            <h4 className={ useClasses() }>
                Would you like to fund your account with additional { standardUnit }?
                <br />
                (This only works on certain DevNets)
            </h4>
            <input
                className={ useClasses() }
                type="number"
                placeholder={ defaultFundAmt }
                onChange={ (e) => setAmount({ amt: e.currentTarget.value }) }
            />
            <button onClick={ () => fundAccount(amount) } className={ useClasses() }>Fund Account</button>
            <button onClick={ () => skipFundAccount() } className={ useClasses() }>Skip</button>
        </div>
    );
};

export default FundAccount;