
import React from "react";
import { Button } from "@/components/ui/button";
import { Clock, Calendar, MapPin, Users, Car } from "lucide-react";
import { toast } from "sonner";

interface BookingSummaryProps {
  pickup: string;
  destination: string;
  date: string;
  time: string;
  passengers: string;
  vehicleType: string;
}

const BookingSummary: React.FC<BookingSummaryProps> = ({
  pickup,
  destination,
  date,
  time,
  passengers,
  vehicleType,
}) => {
  // Function to calculate estimated price
  const calculatePrice = () => {
    // Base prices by vehicle type
    const basePrices = {
      sedan: 50,
      suv: 75,
      luxury: 120,
      van: 100,
    };
    
    // Get base price or default to sedan price
    const basePrice = basePrices[vehicleType as keyof typeof basePrices] || basePrices.sedan;
    
    // Add passenger factor
    const passengerCount = parseInt(passengers) || 1;
    const passengerFactor = passengerCount > 2 ? (passengerCount - 2) * 10 : 0;
    
    // Total price
    return basePrice + passengerFactor;
  };

  const handleConfirmPayment = () => {
    toast.success("Booking confirmed! Your driver will meet you at the airport.", {
      description: "Payment of " + price + " SUI has been processed successfully.",
      duration: 5000,
    });
  };

  const price = calculatePrice();
  
  const isComplete = pickup && destination && date && time && passengers && vehicleType;
  
  return (
    <div className="space-y-6">
      {!isComplete ? (
        <div className="text-center py-6">
          <p className="text-gray-400">Complete your booking details to see a summary</p>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-400">Pickup</p>
                <p className="text-white">{pickup}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-400">Destination</p>
                <p className="text-white">{destination}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Calendar className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-400">Date</p>
                <p className="text-white">{date}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Clock className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-400">Time</p>
                <p className="text-white">{time}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Users className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-400">Passengers</p>
                <p className="text-white">{passengers}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Car className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-400">Vehicle Type</p>
                <p className="text-white">{vehicleType.charAt(0).toUpperCase() + vehicleType.slice(1)}</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-payfare-600 pt-4">
            <div className="flex justify-between mb-2">
              <span className="text-gray-400">Base fare</span>
              <span className="text-white">{price - 10} SUI</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-400">Booking fee</span>
              <span className="text-white">10 SUI</span>
            </div>
            <div className="flex justify-between font-bold text-lg mt-4">
              <span>Total</span>
              <span className="text-blue-400">{price} SUI</span>
            </div>
          </div>
          
          <Button 
            onClick={handleConfirmPayment}
            className="w-full bg-gradient-to-r from-payfare-500 to-blue-600 hover:shadow-[0_0_70px_rgba(59,130,246,0.5)] transition-all duration-300 hover:-translate-y-1"
          >
            Confirm and Pay
          </Button>
        </>
      )}
    </div>
  );
};

export default BookingSummary;
