import React from "react";
import { useStateValue } from "./StateProvider";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";

function Subtotal() {
  const [{ basket }] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        value={getBasketTotal(basket)}
        decimalScale={2}
        suffix={"€"}
        displayType={"text"}
        thousandSeparator={true}
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
          </>
        )}
      />
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gif
      </small>
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
