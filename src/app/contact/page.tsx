"use client";
import { useState } from "react";
import axios from "axios";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    // console.log(formData);

    try {
      const response = await axios.post("/api/send-email", formData);

      if (response.status === 200) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br  relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute w-96 h-96 bg-blue-400/30 rounded-full blur-3xl -top-68 left-28 animate-pulse "></div>
      <div className="absolute w-96 h-96 bg-purple-200/20 rounded-full blur-3xl -bottom-18 -right-48 animate-pulse delay-700 "></div>
      
      <div className="w-full max-w-md p-8 rounded-2xl shadow-2xl  backdrop-blur-sm  border-[1px] border-neutral-700 relative z-10 hover:shadow-blue-500/10 transition-all duration-500">
        <h1 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent animate-gradient">Contact <span className="font-thin">Me</span></h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-transparent rounded-lg border border-gray-700/20 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none group-hover:border-blue-300"
            />
          </div>
          <div className="group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-700/30 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none group-hover:border-blue-300"
            />
          </div>
          <div className="group">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-transparent rounded-lg border border-gray-700/30 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none min-h-[150px] resize-y group-hover:border-blue-300"
            />
          </div>
          <button 
            type="submit"
            className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
          >
            <span className="relative z-10">Send Message</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </form>
        <p className="mt-4 text-center text-lg font-medium text-gray-400">{status}</p>
      </div>
    </div>
  );
}
