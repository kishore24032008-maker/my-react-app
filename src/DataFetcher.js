import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Side effect: Fetching data on component mount
    console.log('Fetching data...');
    
    const timer = setTimeout(() => {
      setData({ id: 1, name: 'John Doe', role: 'Developer' });
      setLoading(false);
    }, 1500);

    // 2. Cleanup function: Clears the timer if component unmounts
    return () => {
      console.log('Cleaning up DataFetcher effect...');
      clearTimeout(timer);
    };
  }, []); // Empty dependency array = runs only on mount

  return (
    <div style={{ padding: '10px' }}>
      <h2>Lesson 13: Data Fetcher (useEffect)</h2>
      {loading ? (
        <p>Loading user data...</p>
      ) : (
        <div>
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Role:</strong> {data.role}</p>
        </div>
      )}
    </div>
  );
}

export default DataFetcher;