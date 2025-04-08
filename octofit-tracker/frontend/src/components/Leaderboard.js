import React, { useEffect, useState } from 'react';

function Leaderboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://literate-orbit-4gwjxpqqj9v37x74-8000.app.github.dev/api/leaderboard/')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching leaderboard data:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="display-4 text-center">Leaderboard</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.rank}</td>
              <td>{item.username}</td>
              <td>{item.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;