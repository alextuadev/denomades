
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../../context/DataProvider';
import '../../styles/app.css';
import { formatMoney } from '../../utils';


export default function Activity({ data, addCart }) {

  const { cart, setCart, currencies, baseCurrency } = useContext(AppContext);

  const addElementCart = (data) => {
    let elements = cart;
    elements.push(data);
    setCart(elements)
  }

  const convertMoney = (currency, price) => {
    let change = `${currency}${baseCurrency}`;
    let nPrice = price * currencies[change];
    return `${baseCurrency} ${formatMoney(nPrice)}`
  }

  const classContainer = addCart ? "col-md-6 col-lg-6 col-xl-4" : "col-lg-9";

  return (
    <div key={data.id} className={classContainer} mb-md-4 pb-1 >
      <div className="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
        <div className="position-relative mb-2">
          <a href="#" className="d-block gradient-overlay-half-bg-gradient">
            <img className="card-img-top" src={data.imageUrl} alt="img" />
          </a>

          <div className="position-absolute price">
            <div className="px-3 pb-2">
              <h2 className="h5 text-white mb-0 font-weight-bold"> {convertMoney(data.currency, data.price)}</h2>
            </div>
          </div>
        </div>
        <div className="card-body px-4 py-2">
          <a href="#" className="d-block">
            <div className="mb-1 d-flex align-items-center text-gray-1">{data.city}</div>
          </a>
          <span className="card-title font-weight-bold mb-0 text-dark">{data.name}</span>

          {addCart &&
            <p>{data.description}</p>
          }
          {addCart &&
            <div className="my-2">
              <div className="d-inline-flex align-items-center text-lh-1 text-primary">

                <button
                  onClick={() => addElementCart(data)}
                  className="btn btn-primary d-flex align-items-center justify-content-center  height-60 w-100 mb-xl-0 mb-lg-1 transition-3d-hover font-weight-bold" type="button" >Agregar al carrito</button>

              </div>
            </div>
          }

        </div>
      </div>
    </div >
  );
}

Activity.propTypes = {
  data: PropTypes.object.isRequired,
};
