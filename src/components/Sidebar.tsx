
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Plane, 
  Hotel, 
  Car, 
  Settings, 
  ChevronLeft, 
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  
  const menuItems = [
    { icon: Plane, label: "My Flights", path: "/dashboard/flights" },
    { icon: Hotel, label: "Accommodation", path: "/dashboard/accommodations" },
    { icon: Car, label: "Pick-Up Service", path: "/dashboard/taxi" },
    { icon: Settings, label: "Settings", path: "/dashboard/settings" }
  ];
  
  return (
    <aside 
      className={cn(
        "bg-[#1A1F2C] text-white h-[calc(100vh-4rem)] transition-all duration-300 sticky top-16",
        collapsed ? "w-20" : "w-64"
      )}
    >
      <div className="p-4 flex justify-end">
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-full hover:bg-white/10 transition-colors"
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
                    ? "bg-payfare-600 text-white" 
                    : "hover:bg-white/10"
                )}
              >
                <item.icon className={cn("h-5 w-5", collapsed ? "mx-auto" : "mr-3")} />
                {!collapsed && <span>{item.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
