
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import WalletConnectButton from "./WalletConnectButton";
import { Plane } from "lucide-react";

const Navbar = () => {
  return (
    <header className="py-4 px-6 lg:px-8 border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative h-8 w-8 rounded-full bg-gradient-to-r from-payfare-500 to-payfare-700 flex items-center justify-center">
              <Plane className="text-white h-5 w-5" />
            </div>
            <span className="font-bold text-xl text-payfare-900">PayFare</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 ml-10">
            <Link to="/" className="text-gray-600 hover:text-payfare-700 transition-colors">Home</Link>
            <Link to="/flights" className="text-gray-600 hover:text-payfare-700 transition-colors">Flights</Link>
            <Link to="/accommodations" className="text-gray-600 hover:text-payfare-700 transition-colors">Accommodations</Link>
            <Link to="/transportation" className="text-gray-600 hover:text-payfare-700 transition-colors">Taxi</Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/help" className="text-gray-600 hover:text-payfare-700 transition-colors hidden md:block">Help</Link>
          <WalletConnectButton />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
