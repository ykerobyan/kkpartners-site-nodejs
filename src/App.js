import React from "react";
import "./index.css";

export default function HomePage() {
  return (
    <div className="font-sans text-gray-800">
      <header className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/1600x900')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">KK Partners</h1>
          <p className="text-lg md:text-2xl max-w-2xl">Quantitative Research, Algorithmic Trading, and Data Science Solutions</p>
        </div>
      </header>
    </div>
  );
}