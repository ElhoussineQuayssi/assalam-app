"use client";

import { useState } from "react";

const AdminPage = () => {
  const [projects, setProjects] = useState([]);
  const [news, setNews] = useState([]);
  const [users, setUsers] = useState([]);

  const [formData, setFormData] = useState({});
  const [currentSection, setCurrentSection] = useState("projects");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (section) => {
    // Example API call logic (update with your API endpoint)
    fetch(`/api/${section}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (section === "projects") setProjects([...projects, data]);
        if (section === "news") setNews([...news, data]);
        if (section === "users") setUsers([...users, data]);
        setFormData({});
      })
      .catch((error) => console.error("Error:", error));
  };

  const handleDelete = (id, section) => {
    // Example API call logic (update with your API endpoint)
    fetch(`/api/${section}/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        if (section === "projects") setProjects(projects.filter((p) => p.id !== id));
        if (section === "news") setNews(news.filter((n) => n.id !== id));
        if (section === "users") setUsers(users.filter((u) => u.id !== id));
      })
      .catch((error) => console.error("Error:", error));
  };

  const renderSection = () => {
    const items =
      currentSection === "projects"
        ? projects
        : currentSection === "news"
        ? news
        : users;

    return (
      <div className="p-4 bg-white shadow rounded-md">
        <h2 className="text-2xl font-bold mb-4 capitalize">{currentSection}</h2>
        <table className="table w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">ID</th>
              <th className="p-2">Name</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="p-2">{item.id}</td>
                <td className="p-2">{item.name}</td>
                <td className="p-2">
                  <button 
                    onClick={() => handleDelete(item.id, currentSection)} 
                    className="btn btn-error btn-sm">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 className="text-lg font-semibold mt-6">Add New {currentSection.slice(0, -1)}</h3>
        <form
          className="mt-4 flex items-center gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(currentSection);
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name || ""}
            onChange={handleInputChange}
            className="input input-bordered w-full max-w-xs"
          />
          <button type="submit" className="btn btn-primary">Add</button>
        </form>
      </div>
    );
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white p-4 transition-all duration-300 ${
          isSidebarCollapsed ? "w-16" : "w-64"
        }`}
      >
        <button
          className="mb-6 text-gray-400 hover:text-white"
          onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        >
          {isSidebarCollapsed ? "☰" : "Collapse"}
        </button>

        {!isSidebarCollapsed && (
          <nav className="space-y-4">
            <button
              onClick={() => setCurrentSection("projects")}
              className={`block w-full text-left py-2 px-3 rounded ${
                currentSection === "projects" ? "bg-gray-600" : "hover:bg-gray-700"
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setCurrentSection("news")}
              className={`block w-full text-left py-2 px-3 rounded ${
                currentSection === "news" ? "bg-gray-600" : "hover:bg-gray-700"
              }`}
            >
              Actualités
            </button>
            <button
              onClick={() => setCurrentSection("users")}
              className={`block w-full text-left py-2 px-3 rounded ${
                currentSection === "users" ? "bg-gray-600" : "hover:bg-gray-700"
              }`}
            >
              Users
            </button>
          </nav>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-50">
        <h1 className="text-3xl font-bold mb-6 capitalize">{currentSection}</h1>
        {renderSection()}
      </div>
    </div>
  );
};

export default AdminPage;
