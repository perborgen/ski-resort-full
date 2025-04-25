import React from 'react';
import saharaSki from './assets/sahara-ski.jpg';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-yellow-100 via-orange-200 to-blue-100">
      {/* Hero Section */}
      <header className="relative flex-1 flex flex-col items-center justify-center text-center px-4 py-12">
        <img
          src={saharaSki}
          alt="Sahara Ski Resort"
          className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none select-none"
        />
        <div className="relative z-10 max-w-xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
            Sahara Ski Resort
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 font-medium drop-shadow">
            Experience the thrill of skiing on the golden dunes of the Sahara. Where the sun meets the snow!
          </p>
          <a
            href="#book"
            className="inline-block px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg shadow-lg transition"
          >
            Book Your Adventure
          </a>
        </div>
      </header>

      {/* Features Section */}
      <section className="relative z-10 bg-white/80 backdrop-blur-md rounded-t-3xl shadow-2xl px-4 py-10 mt-[-3rem]">
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl mb-2">🏂</div>
            <h2 className="text-xl font-bold mb-1">Desert Skiing</h2>
            <p className="text-gray-700">Carve your way down sun-kissed dunes on real snow.</p>
          </div>
          <div>
            <div className="text-4xl mb-2">🌅</div>
            <h2 className="text-xl font-bold mb-1">Unreal Sunsets</h2>
            <p className="text-gray-700">Witness breathtaking sunsets over endless sands and snow.</p>
          </div>
          <div>
            <div className="text-4xl mb-2">🏜️</div>
            <h2 className="text-xl font-bold mb-1">Luxury Oasis</h2>
            <p className="text-gray-700">Relax in our 5-star oasis after a day of adventure.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="book" className="px-4 py-12 bg-gradient-to-t from-blue-100 via-orange-100 to-yellow-50 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">Ready for the coolest adventure in the hottest place?</h2>
        <p className="mb-6 text-gray-600 max-w-md mx-auto">
          Book your stay at Sahara Ski Resort and make memories that will last a lifetime. Limited spots available for the season!
        </p>
        <a
          href="#"
          className="inline-block px-8 py-3 rounded-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold text-lg shadow-lg transition"
        >
          Reserve Now
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-6 text-sm">
        &copy; {new Date().getFullYear()} Sahara Ski Resort. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
