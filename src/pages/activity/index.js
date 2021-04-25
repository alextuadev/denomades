
import React, { useRef, useState, useEffect, useContext } from 'react';
import Activity from '../../components/activity';
import { AppContext } from '../../context/DataProvider';
import { getActivities, getCurrencies } from '../../services/api';

export default function ActivityPage() {
  const [activities, setActivity] = useState([]);
  const [error, setError] = useState(false);

  const { setBaseCurrency, setCurrencies } = useContext(AppContext);

  async function fillCurrencies() {
    const response = await getCurrencies();
    let currencies = await response.json();
    setCurrencies(currencies);
  }

  async function fillActivities() {
    try {
      const response = await getActivities();
      let activities = await response.json()
      setActivity(activities);
      setLoading(false);
    } catch (e) {
      setError(true)
      setLoading(false);
      console.warn("error", e)
    }
  }
  const baseCurrency = (currency) => {
    console.log(currency);
    setBaseCurrency(currency);
  }

  useEffect(() => fillActivities(), []);
  useEffect(() => fillCurrencies(), []);

  const [isLoading, setLoading] = useState(true);

  return (
    <div className="row mt-5">

      {isLoading &&
        <div className="container-loading">
          <div className="spinner-border" role="status">
            <span className="sr-only">Cargando las actividades...</span>
          </div>
          <div className="d-block mt-1">Cargando las actividades...</div>
        </div>
      }

      {(!isLoading && !error) &&
        <>
          <div className="col-12 mb-4">
            <div className="containerTitle">
              <h2>Actividades</h2>
              <div className="containerCurencies">
                <ul className="currency">
                  <li onClick={() => baseCurrency('CLP')}>CLP</li>
                  <li onClick={() => baseCurrency('USD')}>USD</li>
                </ul>
              </div>
            </div>
          </div>
          {activities.map(data => (
            <Activity
              key={data.id}
              data={data}
              addCart={true} />
          ))}
        </>
      }
      {(!isLoading && error) &&
        <h3 className="text-center">Ocurrio un error al cargar las actividades, intenta nuevamente </h3>
      }

    </div>
  );
}