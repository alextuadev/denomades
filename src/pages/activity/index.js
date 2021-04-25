
import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Activity from '../../components/activity';


export default function ActivityPage() {
  const [activities, setActivity] = useState([]);


  async function getActivities() {
    try {
      const response = await fetch('https://denomadesapi.herokuapp.com/activities');
      let activities = await response.json()
      console.log(activities);
      setActivity(activities);
      setLoading(false);
    } catch (e) {
      console.warn("error", e)
    }
  }

  useEffect(() => getActivities(), []);

  const [isLoading, setLoading] = useState(true);

  return (
    <div className="row mt-5">

      {isLoading &&
        <div className="spinner-border" role="status">
          <span className="sr-only">Cargango las actividades...</span>
        </div>
      }

      {!isLoading &&
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

    </div>
  );
}