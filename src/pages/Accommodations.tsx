
import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Accommodations = () => {
  useEffect(() => {
    document.title = "Accommodations - Coming Soon | PayFare";
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
              Accommodations Coming Soon
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              We're working hard to bring you the best decentralized accommodation booking experience.
              Check back soon for access to thousands of properties around the world.
            </p>
            <div className="relative h-64 w-64 mx-auto">
              <div className="absolute inset-0 bg-payfare-100 rounded-full animate-ping opacity-20"></div>
              <div className="relative bg-payfare-600 text-white h-64 w-64 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 22h14" />
                  <path d="M5 2h14" />
                  <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
                  <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
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

export default Accommodations;
