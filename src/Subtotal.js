import React, { useState } from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";
function Subtotal() {
  const history = useHistory();
  const [{ basket }, state, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong>{value}</strong>
            </p>

            <small className="subtotal__gift">
              <input type="checkbox" />
              This Order Contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeprator={true}
        prefix={"$"}
      />
      <button className="chekout__button" onClick={e=> history.push('/payment')}>Proceed To checkout</button>
    </div>
  );
}

export default Subtotal;
