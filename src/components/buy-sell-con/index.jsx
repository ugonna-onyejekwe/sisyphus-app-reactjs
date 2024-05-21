import { useState } from "react";

export const Buy_sell_con = () => {
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [total, setTotal] = useState("0.00");

  const updateTotal = () => {
    if (amount === "" && price === "") {
      setTotal(0.0);
    } else if (amount === "") {
      setTotal(Number(price) * 1);
    } else {
      setTotal(Number(price) * Number(amount));
    }
  };
  return (
    <div className="buy_sell_section">
      <div className="nav">
        <p className="active">buy</p>
        <p>sell</p>
      </div>
      <div className="sub_nav">
        <p className="active">limit</p>
        <p>market</p>
        <p>stop-limit</p>
      </div>

      <div className="input_wrapper">
        <div className="input_box">
          <input
            type="number"
            value={price}
            placeholder="Limit price"
            className="price"
            onChange={(e) => {
              setPrice(e.target.value);
              updateTotal();
            }}
          />
          <p>0.00usd</p>
        </div>

        <div className="input_box">
          <input
            type="number"
            value={amount}
            placeholder="Amount"
            className="amount"
            onChange={(e) => {
              setAmount(e.target.value);
              updateTotal();
            }}
          />
          <p>0.00usd</p>
        </div>
      </div>
      <div className="check_input">
        <input type="checkbox" />
        <p>post only</p>
      </div>

      <div className="total">
        <p>total</p>
        <p className="total_con">{total}</p>
      </div>

      <button>buy btc</button>
    </div>
  );
};
