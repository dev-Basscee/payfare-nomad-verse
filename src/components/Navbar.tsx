
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import WalletConnectButton from "./WalletConnectButton";
import { Plane } from "lucide-react";

const Navbar = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  
  return (
    <header className="py-4 px-6 lg:px-8 border-b border-payfare-600 bg-payfare-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative h-10 w-10 rounded-full bg-gradient-to-r from-payfare-500 to-blue-500 flex items-center justify-center animate-pulse">
              <Plane className="text-white h-6 w-6" />
            </div>
            <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">PayFare</span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          {!isLoggedIn && (
            <Link to="/login">
              <Button variant="outline" className="border-payfare-500 text-white hover:bg-payfare-600">
                Sign In
              </Button>
            </Link>
          )}
          <WalletConnectButton />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
