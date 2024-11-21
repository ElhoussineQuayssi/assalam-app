"use client";
// pages/admin.js
import { useState } from 'react';

const Admin = () => {
  const [news, setNews] = useState([]);
  const [projects, setProjects] = useState([]);

  const handleAddNews = () => {
    // Add news logic
  };

  const handleUpdateNews = (id) => {
    // Update news logic
  };

  const handleDeleteNews = (id) => {
    // Delete news logic
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Admin Panel</h1>
      
      {/* Add New News Section */}
      <section>
        <h2 className="text-2xl mb-2">Manage News</h2>
        <button onClick={handleAddNews} className="bg-blue-500 text-white p-2 rounded">
          Add News
        </button>
        <div>
          {news.map((item) => (
            <div key={item.id} className="flex justify-between p-2 border">
              <span>{item.title}</span>
              <div>
                <button onClick={() => handleUpdateNews(item.id)}>Edit</button>
                <button onClick={() => handleDeleteNews(item.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      {/* Repeat similar layout and logic for projects */}
    </div>
  );
};

export default Admin;
