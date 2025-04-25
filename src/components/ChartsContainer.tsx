import React, { useState, useEffect } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    CartesianGrid,
    Tooltip,
    Rectangle,
    ResponsiveContainer,
} from 'recharts';

/**
 * @description Interface for the data object.
 */
interface DataItem {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

export const ChartsContainer = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://run.mocky.io/v3/2fcafb4f-cd0a-4b67-8211-0b9ee56fe335');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
        setError(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
        setError(true);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data.</div>;
  }

  return (
    <>
      <ResponsiveContainer height={300}>
        <BarChart
          data={data}
          
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          data-testid="bar-chart"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" data-testid="x-axis" />
          <Tooltip data-testid="tooltip" />
          <Bar
            dataKey="uv"
            
            fill="#B3CDAD"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
            data-testid="bar"
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};