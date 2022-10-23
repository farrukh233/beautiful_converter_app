import React from "react";
import "./CurrencyInput.css";
const CurrencyInput = props => {
  return (
    <div className='group'>
      <input
        type='text'
        value={props.amount}
        onChange={e => props.onAmountChange(e.target.value)}
      />
      <select
        value={props.currency}
        onChange={e => props.onCurrencyChange(e.target.value)}>
        {props.currencies.map(currency => (
          <option value={currency}>{currency}</option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyInput;
