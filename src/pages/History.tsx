import { useEffect } from "react";
import { motion } from "framer-motion";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plane, Hotel, Car, CircleDollarSign, Wallet, CalendarCheck } from "lucide-react";

const History = () => {
  useEffect(() => {
    document.title = "Activity History | PayFare";
  }, []);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Activity History</h1>
          <p className="text-gray-600 mt-1">View all your past activities and transactions</p>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All Activity</TabsTrigger>
            <TabsTrigger value="flights">Flights</TabsTrigger>
            <TabsTrigger value="accommodation">Accommodation</TabsTrigger>
            <TabsTrigger value="transportation">Transportation</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <div className="space-y-4">
              <Card className="rounded-2xl">
                <CardHeader className="pb-2">
                  <div className="flex items-center">
                    <div className="rounded-full bg-blue-100 p-2 mr-3">
                      <Plane className="h-4 w-4 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">Flight Booked</CardTitle>
                    <div className="ml-auto text-sm text-gray-500">July 10, 2025</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="pl-10">
                    <div className="flex justify-between mb-1">
                      <p className="font-medium">SFO → JFK</p>
                      <p className="font-medium text-payfare-600">120 SUI</p>
                    </div>
                    <p className="text-sm text-gray-500">SkyWave Airlines • July 15, 2025</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="rounded-2xl">
                <CardHeader className="pb-2">
                  <div className="flex items-center">
                    <div className="rounded-full bg-green-100 p-2 mr-3">
                      <Hotel className="h-4 w-4 text-green-600" />
                    </div>
                    <CardTitle className="text-lg">Accommodation Booked</CardTitle>
                    <div className="ml-auto text-sm text-gray-500">July 8, 2025</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="pl-10">
                    <div className="flex justify-between mb-1">
                      <p className="font-medium">Ocean View Villa</p>
                      <p className="font-medium text-payfare-600">600 SUI</p>
                    </div>
                    <p className="text-sm text-gray-500">Bali, Indonesia • July 15-20, 2025</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="rounded-2xl">
                <CardHeader className="pb-2">
                  <div className="flex items-center">
                    <div className="rounded-full bg-amber-100 p-2 mr-3">
                      <Car className="h-4 w-4 text-amber-600" />
                    </div>
                    <CardTitle className="text-lg">Airport Pickup Scheduled</CardTitle>
                    <div className="ml-auto text-sm text-gray-500">July 8, 2025</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="pl-10">
                    <div className="flex justify-between mb-1">
                      <p className="font-medium">JFK Airport to Downtown Hotel</p>
                      <p className="font-medium text-payfare-600">45 SUI</p>
                    </div>
                    <p className="text-sm text-gray-500">Premium Sedan • July 15, 2025 at 3:30 PM</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="rounded-2xl">
                <CardHeader className="pb-2">
                  <div className="flex items-center">
                    <div className="rounded-full bg-purple-100 p-2 mr-3">
                      <Wallet className="h-4 w-4 text-purple-600" />
                    </div>
                    <CardTitle className="text-lg">Funds Added</CardTitle>
                    <div className="ml-auto text-sm text-gray-500">July 5, 2025</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="pl-10">
                    <div className="flex justify-between mb-1">
                      <p className="font-medium">Wallet Deposit</p>
                      <p className="font-medium text-payfare-600">+1,000 SUI</p>
                    </div>
                    <p className="text-sm text-gray-500">Transaction ID: 0x8a72b...f921</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="rounded-2xl">
                <CardHeader className="pb-2">
                  <div className="flex items-center">
                    <div className="rounded-full bg-blue-100 p-2 mr-3">
                      <CircleDollarSign className="h-4 w-4 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">Account Created</CardTitle>
                    <div className="ml-auto text-sm text-gray-500">July 1, 2025</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="pl-10">
                    <p className="text-sm text-gray-500">Welcome to PayFare! Your account was successfully created.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="flights">
            <div className="space-y-4">
              <Card className="rounded-2xl">
                <CardHeader className="pb-2">
                  <div className="flex items-center">
                    <div className="rounded-full bg-blue-100 p-2 mr-3">
                      <Plane className="h-4 w-4 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">Flight Booked</CardTitle>
                    <div className="ml-auto text-sm text-gray-500">July 10, 2025</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="pl-10">
                    <div className="flex justify-between mb-1">
                      <p className="font-medium">SFO → JFK</p>
                      <p className="font-medium text-payfare-600">120 SUI</p>
                    </div>
                    <p className="text-sm text-gray-500">SkyWave Airlines • July 15, 2025</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-2xl">
                <CardHeader className="pb-2">
                  <div className="flex items-center">
                    <div className="rounded-full bg-blue-100 p-2 mr-3">
                      <Plane className="h-4 w-4 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">Flight Booked</CardTitle>
                    <div className="ml-auto text-sm text-gray-500">June 15, 2025</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="pl-10">
                    <div className="flex justify-between mb-1">
                      <p className="font-medium">JFK → LAX</p>
                      <p className="font-medium text-payfare-600">85 SUI</p>
                    </div>
                    <p className="text-sm text-gray-500">OceanAir • July 22, 2025</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Other tab contents would be similar */}
          <TabsContent value="accommodation">
            <div className="space-y-4">
              <Card className="rounded-2xl">
                <CardHeader className="pb-2">
                  <div className="flex items-center">
                    <div className="rounded-full bg-green-100 p-2 mr-3">
                      <Hotel className="h-4 w-4 text-green-600" />
                    </div>
                    <CardTitle className="text-lg">Accommodation Booked</CardTitle>
                    <div className="ml-auto text-sm text-gray-500">July 8, 2025</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="pl-10">
                    <div className="flex justify-between mb-1">
                      <p className="font-medium">Ocean View Villa</p>
                      <p className="font-medium text-payfare-600">600 SUI</p>
                    </div>
                    <p className="text-sm text-gray-500">Bali, Indonesia • July 15-20, 2025</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="transportation">
            <div className="space-y-4">
              <Card className="rounded-2xl">
                <CardHeader className="pb-2">
                  <div className="flex items-center">
                    <div className="rounded-full bg-amber-100 p-2 mr-3">
                      <Car className="h-4 w-4 text-amber-600" />
                    </div>
                    <CardTitle className="text-lg">Airport Pickup Scheduled</CardTitle>
                    <div className="ml-auto text-sm text-gray-500">July 8, 2025</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="pl-10">
                    <div className="flex justify-between mb-1">
                      <p className="font-medium">JFK Airport to Downtown Hotel</p>
                      <p className="font-medium text-payfare-600">45 SUI</p>
                    </div>
                    <p className="text-sm text-gray-500">Premium Sedan • July 15, 2025 at 3:30 PM</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="payments">
            <div className="space-y-4">
              <Card className="rounded-2xl">
                <CardHeader className="pb-2">
                  <div className="flex items-center">
                    <div className="rounded-full bg-purple-100 p-2 mr-3">
                      <Wallet className="h-4 w-4 text-purple-600" />
                    </div>
                    <CardTitle className="text-lg">Funds Added</CardTitle>
                    <div className="ml-auto text-sm text-gray-500">July 5, 2025</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="pl-10">
                    <div className="flex justify-between mb-1">
                      <p className="font-medium">Wallet Deposit</p>
                      <p className="font-medium text-payfare-600">+1,000 SUI</p>
                    </div>
                    <p className="text-sm text-gray-500">Transaction ID: 0x8a72b...f921</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default History;
