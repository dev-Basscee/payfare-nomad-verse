import { motion } from "framer-motion";
import SearchForm from "./SearchForm";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-payfare-900 to-payfare-700 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            Travel Without <span className="text-payfare-300">Limits</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl mx-auto text-gray-100"
          ><em>
            The first Sui decentralized travel booking platform built on blockchain technology.
            Book flights, accommodations, and taxi services seamlessly.</em>
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <SearchForm />
        </motion.div>
        
        <div className="flex justify-center mt-8 space-x-4">
          <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
            <div className="w-6 h-6 rounded-full bg-payfare-300 flex items-center justify-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-payfare-900">
                <path d="m2 15 10-10 10 10" />
                <path d="M15 15v4a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-4" />
              </svg>
            </div>
            <span className="text-sm">2,500+ Properties</span>
          </div>
          
          <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
            <div className="w-6 h-6 rounded-full bg-payfare-300 flex items-center justify-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-payfare-900">
                <path d="M12 2l10 10-10 10-10-10z" />
              </svg>
            </div>
            <span className="text-sm">Blockchain Secured</span>
          </div>
          
          <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
            <div className="w-6 h-6 rounded-full bg-payfare-300 flex items-center justify-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-payfare-900">
                <path d="M5 22h14" />
                <path d="M5 2h14" />
                <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
                <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
              </svg>
            </div>
            <span className="text-sm">Low Fees</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
