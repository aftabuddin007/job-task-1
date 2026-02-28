import React, { useEffect, useState } from 'react';
import Loading from '../../Component/Loading';

const User = () => {

      const [data, setData] = useState(null);
      const [loading, setLoading] = useState(true);
useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://task-api-eight-flax.vercel.app/api/users");
      const result = await res.json();
      setData(result);
    //   console.log(data)
    setLoading(false)
    };
    fetchData();
  }, []);

if(loading){
  return <Loading></Loading>
}

    return (
        <div>
            {/* https://task-api-eight-flax.vercel.app/api/users */}

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
              {data?.map(user => (
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

export default User;