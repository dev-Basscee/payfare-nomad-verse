
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DashboardLayout from "@/components/DashboardLayout";
import BookingForm from "@/components/taxi/BookingForm";
import BookingSummary from "@/components/taxi/BookingSummary";

const TaxiPage = () => {
  const [pickup, setPickup] = useState("John F. Kennedy International Airport (JFK)");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [passengers, setPassengers] = useState("1");
  const [vehicleType, setVehicleType] = useState("sedan");
  
  useEffect(() => {
    document.title = "Airport Pickup Service | PayFare";
  }, []);
  
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Airport Pickup Service</h1>
          <p className="text-gray-600 mt-1">Book a comfortable ride from the airport to your destination</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
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
            />
          </div>
          
          <div>
            <BookingSummary
              pickup={pickup}
              destination={destination}
              date={date}
              time={time}
              passengers={passengers}
              vehicleType={vehicleType}
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TaxiPage;
