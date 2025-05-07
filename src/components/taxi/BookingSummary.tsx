
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { vehicleOptions } from "./BookingForm";

interface BookingSummaryProps {
  pickup: string;
  destination: string;
  date: string;
  time: string;
  passengers: string;
  vehicleType: string;
}

const BookingSummary = ({
  pickup,
  destination,
  date,
  time,
  passengers,
  vehicleType
}: BookingSummaryProps) => {
  return (
    <Card className="rounded-2xl shadow-lg sticky top-24">
      <CardHeader>
        <CardTitle className="text-xl">Booking Summary</CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {pickup && destination && (
          <div>
            <h3 className="text-sm font-medium text-gray-500">Route</h3>
            <div className="mt-1 space-y-2">
              <div className="flex">
                <div className="mr-3 mt-1">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                </div>
                <div>
                  <p className="font-medium">{pickup}</p>
                  <p className="text-xs text-gray-500">Pickup location</p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-3 ml-1 h-8">
                  <div className="h-full w-[1px] bg-gray-300"></div>
                </div>
              </div>
              <div className="flex">
                <div className="mr-3 mt-1">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                </div>
                <div>
                  <p className="font-medium">{destination || "Your destination"}</p>
                  <p className="text-xs text-gray-500">Drop-off location</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div>
          <h3 className="text-sm font-medium text-gray-500">Pickup Details</h3>
          <p className="mt-1 font-medium">
            {date ? (
              <>
                {new Date(date).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric',
                  year: 'numeric'
                })}
                {time && ` at ${time}`}
              </>
            ) : (
              "Select date and time"
            )}
          </p>
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-gray-500">Vehicle</h3>
          <p className="mt-1 font-medium">
            {vehicleOptions.find(v => v.id === vehicleType)?.name || "Select a vehicle"}
          </p>
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-gray-500">Passengers</h3>
          <p className="mt-1 font-medium">{passengers}</p>
        </div>
        
        <div className="border-t pt-4 mt-4">
          <div className="flex justify-between items-center">
            <span className="font-medium">Total Price</span>
            <span className="text-xl font-bold text-payfare-700">
              {vehicleOptions.find(v => v.id === vehicleType)?.price || 0} SUI
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1">Includes all taxes and fees</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingSummary;
