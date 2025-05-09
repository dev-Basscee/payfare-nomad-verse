
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Plane, 
  Hotel, 
  Car, 
  Settings, 
  ChevronLeft, 
  ChevronRight,
  History,
  Home,
  LogIn,
  User,
  Wallet,
  Calendar,
  Map
} from "lucide-react";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  
  // Menu items for logged in users
  const privateItems = [
    { icon: Home, label: "Dashboard", path: "/dashboard" },
    { icon: Plane, label: "My Flights", path: "/dashboard/flights" },
    { icon: Hotel, label: "My Accommodations", path: "/dashboard/accommodations" },
    { icon: Car, label: "Airport Pickup", path: "/dashboard/taxi" },
    { icon: Calendar, label: "Bookings", path: "/dashboard/history" },
    { icon: Wallet, label: "Rewards", path: "/dashboard/rewards" },
    { icon: Settings, label: "Settings", path: "/dashboard/settings" }
  ];
  
  // Authentication menu items
  const authItems = isLoggedIn 
    ? [] // No auth items needed if logged in
    : [
        { icon: LogIn, label: "Sign In", path: "/login" },
        { icon: User, label: "Sign Up", path: "/signup" }
      ];
  
  // Public menu items
  const publicItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Plane, label: "Flights", path: "/flights" },
    { icon: Hotel, label: "Accommodations", path: "/accommodations" },
    { icon: Car, label: "Transportation", path: "/transportation" }
  ];
  
  // Combine menu items based on auth status
  const menuItems = isLoggedIn 
    ? privateItems
    : [...publicItems, ...authItems];
  
  return (
    <aside 
      className={cn(
        "bg-payfare-700 text-white h-[calc(100vh-4rem)] transition-all duration-300 sticky top-16",
        collapsed ? "w-20" : "w-64"
      )}
    >
      <div className="p-4 flex justify-end">
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-full hover:bg-payfare-600 transition-colors"
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>
      
      <nav className="mt-6">
        <ul className="space-y-2 px-3">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path} 
                className={cn(
                  "flex items-center p-3 rounded-xl transition-all duration-200",
                  location.pathname === item.path 
                    ? "bg-gradient-to-r from-payfare-500 to-blue-600 shadow-lg" 
                    : "hover:bg-payfare-600"
                )}
              >
                <item.icon className={cn("h-5 w-5", collapsed ? "mx-auto" : "mr-3")} />
                {!collapsed && <span>{item.label}</span>}
              </Link>
            </li>
          ))}
          
          {isLoggedIn && (
            <li className="mt-8">
              <button 
                onClick={() => {
                  localStorage.removeItem("isLoggedIn");
                  window.location.href = "/";
                }}
                className={cn(
                  "flex items-center p-3 rounded-xl w-full transition-all duration-200 text-red-400 hover:bg-red-900/30",
                )}
              >
                <LogIn className={cn("h-5 w-5", collapsed ? "mx-auto" : "mr-3")} />
                {!collapsed && <span>Logout</span>}
              </button>
            </li>
          )}
        </ul>
      </nav>
      
      {!collapsed && (
        <div className="absolute bottom-8 left-0 right-0 px-6">
          <div className="p-4 rounded-xl bg-payfare-800 border border-payfare-600">
            <p className="text-sm text-gray-300 mb-2">Powered by</p>
            <div className="flex items-center">
              <div className="h-6 w-6 rounded-full bg-gradient-to-r from-payfare-500 to-blue-500 flex items-center justify-center mr-2">
                <Map className="h-3 w-3 text-white" />
              </div>
              <span className="font-semibold text-white">PayFare</span>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
