
import { useEffect } from "react";
import { motion } from "framer-motion";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, Hotel, Car, CircleDollarSign } from "lucide-react";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard | PayFare";
  }, []);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back to your travel dashboard</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-2">
                  <Plane className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">My Flights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-800">2</div>
                <p className="text-sm text-gray-500">Upcoming flights</p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="rounded-full bg-green-100 p-3 w-12 h-12 flex items-center justify-center mb-2">
                  <Hotel className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Accommodations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-800">1</div>
                <p className="text-sm text-gray-500">Booked stays</p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="rounded-full bg-amber-100 p-3 w-12 h-12 flex items-center justify-center mb-2">
                  <Car className="h-6 w-6 text-amber-600" />
                </div>
                <CardTitle className="text-lg">Pick-up Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-800">1</div>
                <p className="text-sm text-gray-500">Scheduled pickups</p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="rounded-full bg-purple-100 p-3 w-12 h-12 flex items-center justify-center mb-2">
                  <CircleDollarSign className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Total Spent</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-800">452 SUI</div>
                <p className="text-sm text-gray-500">This month</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="rounded-2xl shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Plane className="mr-2 h-5 w-5 text-payfare-600" />
                Upcoming Flights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-xl">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium">SFO → JFK</p>
                      <p className="text-sm text-gray-500">July 15, 2025 • SkyWave Airlines</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-payfare-600">120 SUI</p>
                      <p className="text-xs text-gray-500">Confirmed</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 border rounded-xl">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium">JFK → LAX</p>
                      <p className="text-sm text-gray-500">July 22, 2025 • OceanAir</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-payfare-600">85 SUI</p>
                      <p className="text-xs text-gray-500">Confirmed</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="rounded-2xl shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Hotel className="mr-2 h-5 w-5 text-payfare-600" />
                Booked Accommodations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-4 border rounded-xl">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium">Ocean View Villa</p>
                    <p className="text-sm text-gray-500">July 15-20, 2025 • Bali, Indonesia</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-payfare-600">600 SUI</p>
                    <p className="text-xs text-gray-500">5 nights</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
