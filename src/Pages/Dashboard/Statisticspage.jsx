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

const Statisticspage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://task-api-eight-flax.vercel.app/api/dashboard");
      const result = await res.json();
      setData(result);
    };
    fetchData();
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      {/* Overview Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(data.overview).map(([key, value]) => (
          <div className="stat shadow rounded-xl bg-base-100" key={key}>
            <div className="stat-title capitalize">
              {key.replace(/([A-Z])/g, ' $1')}
            </div>
            <div className="stat-value">
              {key === "revenue" ? `$${value.toLocaleString()}` : value}
              {key === "growth" && "%"}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-6 mt-6">
        {/* Analytics Bar Chart */}
        <div className="flex-1 shadow-lg rounded-xl p-4 bg-gradient-to-br from-blue-50 to-indigo-100">
          <h2 className="text-xl font-bold mb-4 text-indigo-800">Analytics</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={data.analytics}
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

        {/* Products Table */}
        <div className="flex-1 shadow-lg rounded-xl p-4 bg-gradient-to-br from-pink-100 to-pink-200 mb-15">
          <h2 className="text-xl font-bold mb-4 text-pink-800">Products</h2>
          <div className="overflow-x-auto">
            <table className="table w-full border border-pink-300">
              <thead className="bg-pink-300 text-pink-900">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Sales</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                {data.products.map(product => (
                  <tr key={product.id} className="hover:bg-pink-100">
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>${product.price.toFixed(2)}</td>
                    <td>{product.sales}</td>
                    <td>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          product.category === "subscription"
                            ? "bg-green-200 text-green-800"
                            : "bg-purple-200 text-purple-800"
                        }`}
                      >
                        {product.category}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="shadow-lg rounded-xl p-4 bg-gradient-to-br from-yellow-100 to-yellow-200 mt-6">
        <h2 className="text-xl font-bold mb-4 text-yellow-800">Users</h2>
        <div className="overflow-x-auto">
          <table className="table w-full border border-yellow-300">
            <thead className="bg-yellow-300 text-yellow-900">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Join Date</th>
              </tr>
            </thead>
            <tbody>
              {data.users.map(user => (
                <tr
                  key={user.id}
                  className="hover:bg-yellow-100 transition-colors duration-200"
                >
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td
                    className={`font-semibold ${
                      user.status === "active" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {user.status}
                  </td>
                  <td>{user.joinDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Statisticspage;