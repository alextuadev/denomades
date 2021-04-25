
import React, { useRef, useContext, useState, useEffect } from 'react';
import { AppContext } from '../../context/DataProvider';
import Activity from '../../components/activity';

export default function Cart() {

  const { cart } = useContext(AppContext);

  const [isLoading, setLoading] = useState(true);
  const [baseCurrency, setBaseCurrency] = useState("CLP");
  const [totalCart, setTotalCart] = useState(0);

  const formatMoney = money => {
    return (money).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }

  async function getCurrencies() {
    console.log("elemtns on cart", cart)
    try {
      const response = await fetch('https://denomadesapi.herokuapp.com/currencies');
      let currencies = await response.json();
      let change = 'CLPCLP';
      let nPrice;
      let total = 0;

      cart.map(el => {
        change = `${el.currency}${baseCurrency}`;
        nPrice = el.price * currencies[change];

        total += nPrice;
      })
      console.log("total taol", total)
      setTotalCart(total);


      setLoading(false);
    } catch (e) {
      console.warn("error", e)
    }
  }

  useEffect(() => getCurrencies(), []);

  return (
    <div className="row mt-5">
      <div className="col-md-9">
        {cart.map(data => (
          <Activity
            key={data.id}
            data={data}
            addCart={false} />
        ))}
      </div>

      <div className="col-md-3">
        <h2>Total a pagar</h2>
        {baseCurrency} {formatMoney(totalCart)}
        <button className="btn btn-primary d-flex align-items-center justify-content-center  transition-3d-hover font-weight-bold" type="button" >Ir a pagar</button>
      </div>

    </div>
  );
}