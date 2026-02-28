import React, { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Rectangle,
} from 'recharts';
import Loading from '../../Component/Loading';
const AnimatedShape = (props) => {
  return (
    <>
      <Rectangle {...props} fill="transparent" />
      <Rectangle
        {...props}
        style={{
          transform: props.isActive ? undefined : `scaleX(85%)`,
          transformOrigin: `${props.x}px center`,
          transition: 'all 0.2s ease-out',
          pointerEvents: 'none',
        }}
      />
    </>
  );
};
const Analytics = () => {
 const [data, setData] = useState([]);
 const [loading, setLoading] = useState(true);
useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://task-api-eight-flax.vercel.app/api/analytics");
      const result = await res.json();
      setData(result);
      // console.log(result)
setLoading(false)
    };
    fetchData();
  }, []);

if(loading){
  return <Loading></Loading>
}


    return (
        <div>
             <div className="flex-1 shadow-lg rounded-xl p-4 bg-gradient-to-br from-blue-50 to-indigo-100">
                      <h2 className="text-xl font-bold mb-4 text-indigo-800">Analytics</h2>
                      <ResponsiveContainer width="100%" height={300}>
                        <BarChart
                          data={data}
                          barCategoryGap={8}
                          margin={{ top: 10, right: 20, left: 0, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" stroke="#c7d2fe" />
                          <XAxis dataKey="date" tick={{ fontSize: 11, fill: '#4338ca' }} />
                          <YAxis tick={{ fontSize: 11, fill: '#4338ca' }} />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: '#eef2ff',
                              borderColor: '#818cf8',
                              borderRadius: '8px',
                              fontSize: '12px',
                            }}
                          />
                          <Legend wrapperStyle={{ fontSize: '12px', color: '#4338ca' }} />
                          <Bar
                            dataKey="views"
                            fill="#6366f1"
                            radius={[4, 4, 0, 0]}
                            activeBar={<AnimatedShape fill="#4f46e5" />}
                          />
                          <Bar
                            dataKey="clicks"
                            fill="#a78bfa"
                            radius={[4, 4, 0, 0]}
                            activeBar={<AnimatedShape fill="#7c3aed" />}
                          />
                          <Bar
                            dataKey="conversions"
                            fill="#c4b5fd"
                            radius={[4, 4, 0, 0]}
                            activeBar={<AnimatedShape fill="#8b5cf6" />}
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
        </div>
    );
};

export default Analytics;