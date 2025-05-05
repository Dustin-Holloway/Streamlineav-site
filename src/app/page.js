"use client"; // If you're using the App Router in Next.js 13+

import { useEffect } from "react";

export default function Home() {
  // Optional: enable smooth scrolling in all browsers
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <main className="bg-gray-100 min-h-screen">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <span className="text-xl font-bold text-blue-600">StreamlineAV</span>
          <div className="space-x-4">
            <a href="#about" className="text-gray-700 hover:text-blue-600">
              About
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600">
              Services
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative h-screen pt-16 bg-cover bg-center bg-no-repeat flex items-center justify-center text-white text-center px-4"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 z-0"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to StreamlineAV
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Seamless audio-visual and smart home solutions designed for the way
            you live.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white text-center">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">
          About StreamlineAV
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
          At StreamlineAV, we specialize in transforming everyday spaces into
          intelligent, immersive environments. From home theaters and surround
          sound to smart lighting, security, and automation, we bring
          cutting-edge technology together to enhance comfort, convenience, and
          connection.
          <br />
          <br />
          Founded in 2017, StreamlineAV is built on over 20 years of hands-on
          experience in home entertainment, networking, and smart systems. As a
          local business owner, I’m committed to delivering personalized service
          with a focus on quality, reliability, and long-term relationships.
          Every project is approached with care, attention to detail, and a
          passion for helping clients create homes that truly work for them.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">
          Our Services
        </h2>
        <ul className="text-gray-700 max-w-2xl mx-auto space-y-2">
          <li>- Home Theater Installation</li>
          <li>- Conference Room AV Systems</li>
          <li>- Smart Home Integration</li>
          <li>- Custom Audio Solutions</li>
        </ul>
      </section>

      {/* Contact Section */}

      <section
        id="contact"
        className="h-screen flex items-center justify-center bg-white"
      >
        <div className="max-w-xl px-4 text-center">
          <h3 className="text-3xl font-semibold mb-4">Get In Touch</h3>
          <p className="mb-6 text-gray-700">
            We'd love to hear from you. Whether you're seeking a partner in
            people strategy or just want to say hello — reach out!
          </p>
          <a
            href="mailto:streamlineav@outlook.com"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
