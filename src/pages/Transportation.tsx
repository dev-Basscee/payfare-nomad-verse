
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CarTaxiFront, CheckCircle } from "lucide-react";

const Transportation = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  useEffect(() => {
    document.title = "Airport Taxi Services | PayFare";
  }, []);

  const handleBookTaxi = () => {
    if (isLoggedIn) {
      navigate('/dashboard/taxi');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-payfare-800 text-white">
      <Navbar />
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-grow"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
                Book Your Airport Taxi
              </h1>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-xl text-gray-300 mb-10">
                Our decentralized taxi booking platform connects you directly with drivers.
                Enjoy transparent pricing and seamless blockchain-powered payments.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative h-64 w-64 mx-auto mb-10"
            >
              <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20"></div>
              <div className="relative bg-gradient-to-br from-payfare-700 to-payfare-600 h-64 w-64 rounded-full flex items-center justify-center">
                <CarTaxiFront className="h-20 w-20" />
              </div>
            </motion.div>
            
            <div className="space-y-6">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="glass-card p-8"
              >
                <h2 className="text-2xl font-semibold mb-4">Our Airport Pickup Services</h2>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-gray-300">Available at Murtala Muhammed International Airport (Lagos)</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-gray-300">Available at Nnamdi Azikiwe International Airport (Abuja)</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-gray-300">Available at Port Harcourt International Airport</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-gray-300">Available at Mallam Aminu Kano International Airport</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button 
                    onClick={handleBookTaxi}
                    variant="gradient"
                    size="lg"
                    className="relative overflow-hidden"
                  >
                    Book Your Taxi Now
                  </Button>
                  {!isLoggedIn && (
                    <Link to="/signup">
                      <Button variant="outline" size="lg">
                        Sign Up For Benefits
                      </Button>
                    </Link>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default Transportation;
