import React, { useEffect, useState } from 'react';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('https://literate-orbit-4gwjxpqqj9v37x74-8000.app.github.dev/api/activities/')
      .then(response => response.json())
      .then(data => setActivities(data))
      .catch(error => console.error('Error fetching activities:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="display-4 text-center">Activities</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Activity</th>
            <th>Duration</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {activities.map(activity => (
            <tr key={activity._id}>
              <td>{activity.activity_type}</td>
              <td>{activity.duration}</td>
              <td>
                <button className="btn btn-primary btn-sm">Edit</button>
                <button className="btn btn-danger btn-sm ms-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Activities;