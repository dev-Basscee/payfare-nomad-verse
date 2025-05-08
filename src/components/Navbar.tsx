
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
            <div className="relative h-8 w-8 rounded-full bg-gradient-to-r from-[#1A1F2C] to-[#065d88] flex items-center justify-center">
              <Plane className="text-white h-5 w-5" />
            </div>
            <span className="font-bold text-xl text-[#1A1F2C]">PayFare</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 ml-10">
            <Link to="/" className="text-gray-600 hover:text-[#065d88] transition-colors">Home</Link>
            <Link to="/flights" className="text-gray-600 hover:text-[#065d88] transition-colors">Flights</Link>
            <Link to="/accommodations" className="text-gray-600 hover:text-[#065d88] transition-colors">Accommodations</Link>
            <Link to="/transportation" className="text-gray-600 hover:text-[#065d88] transition-colors">Taxi</Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <WalletConnectButton />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
