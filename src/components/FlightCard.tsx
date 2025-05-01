
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { Plane } from "lucide-react";

interface FlightCardProps {
  airline: string;
  flightNumber: string;
  departureTime: string;
  departureAirport: string;
  arrivalTime: string;
  arrivalAirport: string;
  duration: string;
  price: string;
  logoUrl?: string;
}

const FlightCard = ({
  airline,
  flightNumber,
  departureTime,
  departureAirport,
  arrivalTime,
  arrivalAirport,
  duration,
  price,
  logoUrl,
}: FlightCardProps) => {
  const handleBookNow = () => {
    toast.success("Flight selected for booking");
  };

  return (
    <Card className="mb-4 border hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          {/* Airline Info */}
          <div className="flex items-center">
            {logoUrl ? (
              <img src={logoUrl} alt={airline} className="w-10 h-10 rounded-full mr-3" />
            ) : (
              <div className="w-10 h-10 rounded-full bg-payfare-100 flex items-center justify-center mr-3">
                <Plane className="h-5 w-5 text-payfare-700" />
              </div>
            )}
            <div>
              <p className="font-medium">{airline}</p>
              <p className="text-sm text-gray-500">{flightNumber}</p>
            </div>
          </div>

          {/* Flight Times */}
          <div className="flex items-center flex-1 justify-center">
            <div className="text-center md:text-right">
              <p className="font-bold text-lg">{departureTime}</p>
              <p className="text-sm text-gray-600">{departureAirport}</p>
            </div>
            
            <div className="mx-4 flex flex-col items-center">
              <div className="relative h-0.5 bg-gray-300 w-16 md:w-24">
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-gray-300 rounded-full"></div>
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-gray-300 rounded-full"></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">{duration}</p>
            </div>
            
            <div className="text-center md:text-left">
              <p className="font-bold text-lg">{arrivalTime}</p>
              <p className="text-sm text-gray-600">{arrivalAirport}</p>
            </div>
          </div>

          {/* Price & Book */}
          <div className="flex flex-col items-center md:items-end">
            <p className="mb-2">
              <span className="font-bold text-lg text-payfare-800">{price}</span>
              <span className="text-sm text-gray-500"> SUI</span>
            </p>
            <Button onClick={handleBookNow} className="bg-payfare-600 hover:bg-payfare-700">Book Now</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FlightCard;
