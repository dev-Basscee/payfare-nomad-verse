
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import WalletConnectButton from "./WalletConnectButton";
import { Plane, Bell, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const DashboardNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="py-4 px-6 lg:px-8 border-b bg-white sticky top-0 z-50 h-16">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/dashboard" className="flex items-center space-x-2">
            <div className="relative h-8 w-8 rounded-full bg-gradient-to-r from-payfare-500 to-payfare-700 flex items-center justify-center">
              <Plane className="text-white h-5 w-5" />
            </div>
            <span className="font-bold text-xl text-payfare-900">PayFare</span>
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100 relative">
            <Bell className="h-5 w-5 text-gray-600" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>
          
          <WalletConnectButton />
          
          <button className="md:hidden p-2 rounded-full hover:bg-gray-100" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute left-0 right-0 p-4 border-b shadow-lg">
          <ul className="space-y-3">
            <li><Link to="/dashboard/flights" className="block p-2 hover:bg-gray-100 rounded">My Flights</Link></li>
            <li><Link to="/dashboard/accommodations" className="block p-2 hover:bg-gray-100 rounded">Accommodation</Link></li>
            <li><Link to="/dashboard/taxi" className="block p-2 hover:bg-gray-100 rounded">Pick-Up Service</Link></li>
            <li><Link to="/dashboard/settings" className="block p-2 hover:bg-gray-100 rounded">Settings</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default DashboardNavbar;
