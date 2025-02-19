import { useState } from "react";
import { Eye, X, Search, Filter } from "lucide-react";

const users = [
  {
    id: 1,
    name: "John Doe",
    image: "https://via.placeholder.com/50",
    employment: "Software Engineer",
    income: "$80,000",
    dob: "1995-06-15",
    loanPurpose: "Personal Loan",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    contact: "123-456-7890",
    email: "john.doe@example.com",
    address: "123 Main St, Cityville",
    creditScore: 750,
    employer: "TechCorp",
    nationality: "American",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "https://via.placeholder.com/50",
    employment: "Doctor",
    income: "$120,000",
    dob: "1990-04-25",
    loanPurpose: "Education Loan",
    details: "Vestibulum ac diam sit amet quam vehicula elementum.",
    contact: "987-654-3210",
    email: "jane.smith@example.com",
    address: "456 Side St, Townsville",
    creditScore: 800,
    employer: "MediCare",
    nationality: "Canadian",
  },
];

export default function AdminPanel() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const filteredUsers = users.filter((user) => {
    return (
      user.name.toLowerCase().includes(search.toLowerCase()) &&
      (filter ? user.loanPurpose === filter : true)
    );
  });

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-gray-200 p-5 space-y-6">
        <h2 className="text-xl font-bold">Dashboard</h2>
        <ul className="space-y-4">
          <li className="cursor-pointer hover:text-white">Employees</li>
          <li className="cursor-pointer hover:text-white">Loans</li>
          <li className="cursor-pointer hover:text-white">Settings</li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-800 text-gray-100 flex flex-col items-center">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-white tracking-wider">
          Admin Panel - Registered Users
        </h1>

        {/* Search & Filter Section */}
        <div className="flex space-x-4 mb-4 w-full max-w-4xl">
          <div className="flex items-center bg-gray-700 p-2 rounded-lg flex-1">
            <Search className="text-gray-400 mr-2" size={18} />
            <input
              type="text"
              placeholder="Search by name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent outline-none flex-1 text-white"
            />
          </div>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-gray-700 p-2 rounded-lg text-white"
          >
            <option value="">All Loans</option>
            <option value="Personal Loan">Personal Loan</option>
            <option value="Education Loan">Education Loan</option>
          </select>
        </div>

        {/* Users Table */}
        <div className="bg-gray-700 shadow-lg rounded-xl p-6 w-full max-w-6xl border border-gray-600">
          <table className="w-full text-left border-collapse text-gray-100 shadow-md rounded-xl">
            <thead className="bg-gray-600 text-white text-lg">
              <tr>
                <th className="p-4">Image</th>
                <th className="p-4">Name</th>
                <th className="p-4">Employment</th>
                <th className="p-4">Income</th>
                <th className="p-4">Loan Purpose</th>
                <th className="p-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-600">
                  <td className="p-4 text-center">
                    <img
                      src={user.image}
                      alt={user.name}
                      className="w-12 h-12 rounded-full border border-gray-400"
                    />
                  </td>
                  <td className="p-4">{user.name}</td>
                  <td className="p-4">{user.employment}</td>
                  <td className="p-4 text-green-400">{user.income}</td>
                  <td className="p-4 text-blue-400">{user.loanPurpose}</td>
                  <td className="p-4 text-center">
                    <button
                      className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
                      onClick={() => setSelectedUser(user)}
                    >
                      <Eye size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* User Details Modal */}
      {selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-opacity-10 p-4">
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl text-gray-100 w-full max-w-lg relative">
            <button
              className="absolute top-3 right-3 text-gray-300 hover:text-white"
              onClick={() => setSelectedUser(null)}
            >
              <X size={20} />
            </button>
            <div className="flex flex-col items-center">
              <img
                src={selectedUser.image}
                alt={selectedUser.name}
                className="w-24 h-24 rounded-full border-4 border-gray-500"
              />
              <h2 className="mt-3 text-xl font-semibold text-white">
                {selectedUser.name}
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
              <p>
                <strong>Employment:</strong> {selectedUser.employment}
              </p>
              <p>
                <strong>Income:</strong> {selectedUser.income}
              </p>
              <p>
                <strong>Loan Purpose:</strong> {selectedUser.loanPurpose}
              </p>
              <p>
                <strong>Email:</strong> {selectedUser.email}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
