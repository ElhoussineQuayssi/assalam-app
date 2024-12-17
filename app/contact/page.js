"use client"

import Footer from '@/components/HomeComponents/Footer';
import Navbar from '@/components/HomeComponents/Navbar';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission logic (e.g., sending it to an API)
    alert('Form submitted!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <Navbar/>
      <div className="min-h-screen flex flex-row justify-center items-center bg-gray-100 gap-10">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg flex-1">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">Nom complet</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Votre Nom"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Votre Email"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-600">Votre Message</label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                rows="5"
                placeholder="Votre Message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Confirmer
            </button>
          </form>
        </div>
        <div className='flex-1 max-w-md h-full flex flex-col border border-slate-300 bg-slate-50'>
          <div className='p-4 text-center'>
            <h2 className='text-3xl font-bold text-center text-gray-800 '>Contact Info</h2>
          </div>
          <div className='p-4 text-center'>
            <h1 className='font-bold underline'>Telephone</h1>
            <p>0614324565</p>
          </div>
          <div className='p-4 text-center'>
            <h1 className='font-bold underline'>Email</h1>
            <p>contact@assalam.com</p>
          </div>
          <div className='p-4 text-center'>
            <h1 className='font-bold underline'>Address</h1>
            <p>Rue de la Paix, 1234 Paris, France</p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
