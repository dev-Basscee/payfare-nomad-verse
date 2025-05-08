
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Plane, Hotel, Car, History, Settings, Wallet, BarChart3 } from "lucide-react";

const Home = () => {
  useEffect(() => {
    document.title = "Home | PayFare";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#1A1F2C]">Welcome to PayFare</h1>
            <p className="mt-2 text-lg text-gray-600">Your decentralized travel companion</p>
          </div>
          
          {/* Quick Actions */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link to="/flights" className="block">
                <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow hover:translate-y-[-4px] transition-transform border border-gray-100">
                  <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Plane className="h-6 w-6 text-payfare-600" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">Book Flight</h3>
                  <p className="text-sm text-gray-500 mt-1">Find and book your next flight</p>
                </div>
              </Link>
              
              <Link to="/accommodations" className="block">
                <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow hover:translate-y-[-4px] transition-transform border border-gray-100">
                  <div className="rounded-full bg-green-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Hotel className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">Book Stay</h3>
                  <p className="text-sm text-gray-500 mt-1">Find the perfect accommodation</p>
                </div>
              </Link>
              
              <Link to="/dashboard/taxi" className="block">
                <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow hover:translate-y-[-4px] transition-transform border border-gray-100">
                  <div className="rounded-full bg-amber-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Car className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">Book Taxi</h3>
                  <p className="text-sm text-gray-500 mt-1">Schedule your airport pickup</p>
                </div>
              </Link>
              
              <Link to="/dashboard" className="block">
                <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow hover:translate-y-[-4px] transition-transform border border-gray-100">
                  <div className="rounded-full bg-purple-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <BarChart3 className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">Dashboard</h3>
                  <p className="text-sm text-gray-500 mt-1">View all your bookings</p>
                </div>
              </Link>
            </div>
          </div>
          
          {/* Recent Activity */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
            <Card className="rounded-2xl shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <History className="mr-2 h-5 w-5 text-payfare-600" />
                  Activity History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-xl">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-medium">Flight Booked</p>
                        <p className="text-sm text-gray-500">SFO → JFK • July 15, 2025</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-payfare-600">120 SUI</p>
                        <p className="text-xs text-gray-500">2 days ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-xl">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-medium">Accommodation Confirmed</p>
                        <p className="text-sm text-gray-500">Ocean View Villa • Bali, Indonesia</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-payfare-600">600 SUI</p>
                        <p className="text-xs text-gray-500">3 days ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-xl">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-medium">Taxi Booked</p>
                        <p className="text-sm text-gray-500">Airport pickup • JFK to Manhattan</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-payfare-600">45 SUI</p>
                        <p className="text-xs text-gray-500">5 days ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Balance and Settings */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card className="rounded-2xl shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Wallet className="mr-2 h-5 w-5 text-payfare-600" />
                  Wallet Balance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900 mb-2">2,458 SUI</div>
                <p className="text-sm text-gray-500">Available for bookings</p>
                <Button className="mt-4 bg-[#1A1F2C] hover:bg-[#065d88] text-white">
                  Add Funds
                </Button>
              </CardContent>
            </Card>
            
            <Card className="rounded-2xl shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="mr-2 h-5 w-5 text-payfare-600" />
                  Account Settings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 mb-4">Manage your account preferences and profile</p>
                <Link to="/dashboard/settings">
                  <Button variant="outline" className="border-payfare-500 text-[#1A1F2C]">
                    View Settings
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
