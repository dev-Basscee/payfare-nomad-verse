
import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Transportation = () => {
  useEffect(() => {
    document.title = "Taxi Services - Coming Soon | PayFare";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-grow bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-payfare-900 mb-6">
              Taxi Services Coming Soon
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              We're building a decentralized taxi booking platform to connect you directly with drivers.
              Enjoy transparent pricing and seamless blockchain-powered payments soon.
            </p>
            <div className="relative h-64 w-64 mx-auto">
              <div className="absolute inset-0 bg-payfare-100 rounded-full animate-ping opacity-20"></div>
              <div className="relative bg-payfare-600 text-white h-64 w-64 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="16" height="16" x="4" y="4" rx="2" />
                  <path d="M4 12h16" />
                  <path d="M12 4v16" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default Transportation;
