
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DashboardLayout from "@/components/DashboardLayout";
import BookingForm from "@/components/taxi/BookingForm";
import BookingSummary from "@/components/taxi/BookingSummary";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin, Users, CarFront } from "lucide-react";

const TaxiPage = () => {
  const [pickup, setPickup] = useState("Murtala Muhammed International Airport (LOS)");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [passengers, setPassengers] = useState("1");
  const [vehicleType, setVehicleType] = useState("sedan");
  
  useEffect(() => {
    document.title = "Airport Pickup Service | PayFare";
  }, []);
  
  // Nigerian airport options
  const airports = [
    { value: "Murtala Muhammed International Airport (LOS)", label: "Murtala Muhammed International Airport (LOS)" },
    { value: "Nnamdi Azikiwe International Airport (ABV)", label: "Nnamdi Azikiwe International Airport (ABV)" },
    { value: "Port Harcourt International Airport (PHC)", label: "Port Harcourt International Airport (PHC)" },
    { value: "Mallam Aminu Kano International Airport (KAN)", label: "Mallam Aminu Kano International Airport (KAN)" },
  ];

  // Nigerian destination options based on airport
  const destinationOptions = {
    "Murtala Muhammed International Airport (LOS)": [
      "Ikeja, Lagos",
      "Victoria Island, Lagos",
      "Lekki, Lagos",
      "Ikoyi, Lagos",
      "Surulere, Lagos"
    ],
    "Nnamdi Azikiwe International Airport (ABV)": [
      "Central Business District, Abuja",
      "Maitama, Abuja",
      "Wuse, Abuja",
      "Garki, Abuja",
      "Asokoro, Abuja"
    ],
    "Port Harcourt International Airport (PHC)": [
      "GRA, Port Harcourt",
      "Trans Amadi, Port Harcourt",
      "Rumuokoro, Port Harcourt",
      "Woji, Port Harcourt",
      "Rumuola, Port Harcourt"
    ],
    "Mallam Aminu Kano International Airport (KAN)": [
      "Nasarawa GRA, Kano",
      "Bompai, Kano",
      "Fagge, Kano",
      "Sabon Gari, Kano",
      "Kofar Mata, Kano"
    ],
  };
  
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-white">Airport Pickup Service</h1>
          <p className="text-gray-300 mt-1">Book a comfortable ride from the airport to your destination</p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-payfare-700 border-payfare-600 text-white">
              <CardHeader className="border-b border-payfare-600">
                <CardTitle className="text-xl">Booking Information</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <BookingForm 
                  pickup={pickup}
                  setPickup={setPickup}
                  destination={destination}
                  setDestination={setDestination}
                  date={date}
                  setDate={setDate}
                  time={time}
                  setTime={setTime}
                  passengers={passengers}
                  setPassengers={setPassengers}
                  vehicleType={vehicleType}
                  setVehicleType={setVehicleType}
                  airports={airports}
                  destinationOptions={destinationOptions[pickup] || []}
                />
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-payfare-700 border-payfare-600 text-white sticky top-24">
              <CardHeader className="border-b border-payfare-600">
                <CardTitle className="text-xl">Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <BookingSummary
                  pickup={pickup}
                  destination={destination}
                  date={date}
                  time={time}
                  passengers={passengers}
                  vehicleType={vehicleType}
                />
              </CardContent>
            </Card>

            <div className="mt-6">
              <Card className="bg-gradient-to-br from-blue-600 to-blue-800 text-white border-none">
                <CardContent className="pt-6 pb-6">
                  <h3 className="text-lg font-semibold mb-4">Why Book With PayFare</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium">Real-time Tracking</h4>
                        <p className="text-sm text-blue-200">Monitor your driver's location</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium">Meet & Greet</h4>
                        <p className="text-sm text-blue-200">Driver waits at arrivals with namecard</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <Users className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium">Local Drivers</h4>
                        <p className="text-sm text-blue-200">Professional and knowledgeable</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <CarFront className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium">Vehicle Choices</h4>
                        <p className="text-sm text-blue-200">Select from our range of vehicles</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TaxiPage;
