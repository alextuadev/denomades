
import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Activity from '../../components/activity';


export default function ActivityPage() {
  const [activities, setActivity] = useState([]);
  const [error, setError] = useState(false);


  async function getActivities() {
    try {
      const response = await fetch('https://denomadesapi.herokuapp.com/activities');
      let activities = await response.json()
      setActivity(activities);
      setLoading(false);
    } catch (e) {
      setError(true)
      setLoading(false);
      console.warn("error", e)
    }
  }

  useEffect(() => getActivities(), []);

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
            <h2>Actividades</h2>
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