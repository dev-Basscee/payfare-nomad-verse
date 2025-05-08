
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Car } from "lucide-react";

const Transportation = () => {
  useEffect(() => {
    document.title = "Taxi Services | PayFare";
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
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-[#1A1F2C] mb-6">
              Book Your Airport Taxi
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              Our decentralized taxi booking platform connects you directly with drivers.
              Enjoy transparent pricing and seamless blockchain-powered payments.
            </p>
            
            <div className="relative h-64 w-64 mx-auto mb-10">
              <div className="absolute inset-0 bg-payfare-100 rounded-full animate-ping opacity-20"></div>
              <div className="relative bg-[#1A1F2C] text-white h-64 w-64 rounded-full flex items-center justify-center">
                <Car className="h-20 w-20" />
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Access Taxi Services in Your Dashboard</h2>
                <p className="text-gray-600 mb-6">
                  Our taxi pickup service is available for all registered users. Schedule airport pickups, 
                  city transfers, and more through your personalized dashboard.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link to="/dashboard/taxi">
                    <Button className="bg-[#1A1F2C] hover:bg-[#065d88] text-white">
                      Book in Dashboard
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button variant="outline" className="border-payfare-500 text-[#1A1F2C]">
                      Sign Up Now
                    </Button>
                  </Link>
                </div>
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
