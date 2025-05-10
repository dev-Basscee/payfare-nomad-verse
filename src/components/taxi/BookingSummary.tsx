
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Clock, Calendar, MapPin, Users, Car, Lock, Edit } from "lucide-react";
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
  const [isBooked, setIsBooked] = useState(false);
  const [isEditable, setIsEditable] = useState(true);
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);

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
    setIsBooked(true);
    setTimeRemaining(40 * 60); // 40 minutes in seconds
    toast.success("Booking confirmed! Your driver will meet you at the airport.", {
      description: "Payment of " + price + " USDC has been processed successfully.",
      duration: 5000,
    });
  };

  const handleEditBooking = () => {
    toast.info("You can edit your booking details now.", {
      description: "Your changes will be saved automatically.",
      duration: 3000,
    });
  };

  // Timer effect for 40-minute edit window
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isBooked && timeRemaining !== null && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev !== null && prev > 0) {
            return prev - 1;
          }
          return 0;
        });
      }, 1000);
    } else if (timeRemaining === 0) {
      setIsEditable(false);
      toast.info("Your booking is now immutable.", {
        description: "No further changes can be made to this booking.",
        duration: 5000,
      });
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isBooked, timeRemaining]);

  // Format the remaining time
  const formatTime = (seconds: number | null) => {
    if (seconds === null) return "--:--";
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
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
              <span className="text-white">{price - 10} USDC</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-400">Booking fee</span>
              <span className="text-white">10 USDC</span>
            </div>
            <div className="flex justify-between font-bold text-lg mt-4">
              <span>Total</span>
              <span className="text-blue-400">{price} USDC</span>
            </div>
          </div>
          
          {isBooked ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-t border-payfare-600 pt-4">
                <div className="flex items-center">
                  {isEditable ? (
                    <Edit className="h-5 w-5 text-blue-400 mr-2" />
                  ) : (
                    <Lock className="h-5 w-5 text-blue-400 mr-2" />
                  )}
                  <span className={isEditable ? "text-blue-400" : "text-gray-400"}>
                    {isEditable ? "Booking can be edited" : "Booking is immutable"}
                  </span>
                </div>
                {isEditable && (
                  <span className="text-gray-400">
                    Time left: <span className="text-blue-400">{formatTime(timeRemaining)}</span>
                  </span>
                )}
              </div>
              
              <Button 
                onClick={handleEditBooking}
                disabled={!isEditable}
                className={`w-full ${
                  isEditable
                    ? "bg-gradient-to-r from-payfare-500 to-blue-600 hover:shadow-[0_0_70px_rgba(59,130,246,0.5)] transition-all duration-300 hover:-translate-y-1"
                    : "bg-gray-700 cursor-not-allowed"
                }`}
              >
                {isEditable ? "Edit Booking" : "Booking Finalized"}
              </Button>
            </div>
          ) : (
            <Button 
              onClick={handleConfirmPayment}
              className="w-full bg-gradient-to-r from-payfare-500 to-blue-600 hover:shadow-[0_0_70px_rgba(59,130,246,0.5)] transition-all duration-300 hover:-translate-y-1 rounded-full"
            >
              Confirm and Pay with USDC
            </Button>
          )}
        </>
      )}
    </div>
  );
};

export default BookingSummary;
