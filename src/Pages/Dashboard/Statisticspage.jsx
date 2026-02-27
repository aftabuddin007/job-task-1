import React, { useEffect, useState } from 'react';

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
      <div className='flex flex-col lg:flex-row justify-between gap-6 '>
      {/* analytics chart */}
        <div>
        <h2 className="text-xl font-semibold mb-2">Analytics</h2>
        <div className="overflow-x-auto">
          <table className="table w-full border">
            <thead>
              <tr>
                <th>Date</th>
                <th>Views</th>
                <th>Clicks</th>
                <th>Conversions</th>
              </tr>
            </thead>
            <tbody>
              {data.analytics.map(item => (
                <tr key={item.date}>
                  <td>{item.date}</td>
                  <td>{item.views}</td>
                  <td>{item.clicks}</td>
                  <td>{item.conversions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* product */}
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


    </div>
  <div className="shadow-lg rounded-xl p-4 bg-gradient-to-br from-yellow-100 to-yellow-200">
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