
import { useState } from "react";
import { CarTaxiFront, Calendar, Clock, MapPin, Users } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import VehicleOption from "./VehicleOption";
import { toast } from "sonner";

// Define vehicle options
const vehicleOptions = [
  { id: "sedan", name: "Sedan", capacity: "1-3", price: 25, image: "https://images.unsplash.com/photo-1577494251483-1a2a75388bbe?auto=format&fit=crop&q=80" },
  { id: "suv", name: "SUV", capacity: "1-5", price: 35, image: "https://images.unsplash.com/photo-1572776685600-aca8c3456159?auto=format&fit=crop&q=80" },
  { id: "luxury", name: "Luxury", capacity: "1-3", price: 50, image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&q=80" },
  { id: "taxi", name: "Taxi", capacity: "1-4", price: 20, image: "https://images.unsplash.com/photo-1604556369143-081ea6824711?auto=format&fit=crop&q=80" },
];

// Nigerian airports list
const nigerianAirports = [
  "Murtala Muhammed International Airport (LOS)",
  "Nnamdi Azikiwe International Airport (ABV)",
  "Port Harcourt International Airport (PHC)",
  "Mallam Aminu Kano International Airport (KAN)",
  "Akanu Ibiam International Airport (ENU)",
  "Margaret Ekpo International Airport (CBQ)",
  "Sadiq Abubakar III International Airport (SKO)",
];

interface BookingFormProps {
  pickup: string;
  setPickup: (value: string) => void;
  destination: string;
  setDestination: (value: string) => void;
  date: string;
  setDate: (value: string) => void;
  time: string;
  setTime: (value: string) => void;
  passengers: string;
  setPassengers: (value: string) => void;
  vehicleType: string;
  setVehicleType: (value: string) => void;
}

const BookingForm = ({ 
  pickup, setPickup, 
  destination, setDestination, 
  date, setDate, 
  time, setTime, 
  passengers, setPassengers, 
  vehicleType, setVehicleType 
}: BookingFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate booking process
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Your pickup has been booked successfully!");
    }, 1500);
  };

  return (
    <Card className="rounded-2xl shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl flex items-center">
          <CarTaxiFront className="mr-2 h-5 w-5 text-payfare-600" />
          Book Your Pickup
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleBooking} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="pickup" className="mb-1 block">Pickup Location (Airport)</Label>
              <div className="relative">
                <select
                  id="pickup"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="w-full pl-10 rounded-xl py-3 border border-gray-300"
                >
                  {nigerianAirports.map((airport) => (
                    <option key={airport} value={airport}>{airport}</option>
                  ))}
                </select>
                <MapPin className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
              </div>
            </div>
            
            <div>
              <Label htmlFor="destination" className="mb-1 block">Destination</Label>
              <div className="relative">
                <Input
                  id="destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Enter hotel or address in Nigeria"
                  className="pl-10 rounded-xl py-6"
                  required
                  list="nigerian-destinations"
                />
                <datalist id="nigerian-destinations">
                  <option value="Eko Hotels & Suites, Victoria Island, Lagos" />
                  <option value="Transcorp Hilton, Abuja" />
                  <option value="Four Points by Sheraton, Victoria Island, Lagos" />
                  <option value="Sheraton Abuja Hotel, Abuja" />
                  <option value="Ibom Hotel & Golf Resort, Uyo" />
                  <option value="The Wheatbaker, Ikoyi, Lagos" />
                  <option value="Radisson Blu Anchorage Hotel, Victoria Island, Lagos" />
                </datalist>
                <MapPin className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="date" className="mb-1 block">Pickup Date</Label>
                <div className="relative">
                  <Input
                    id="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="pl-10 rounded-xl py-6"
                    required
                  />
                  <Calendar className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="time" className="mb-1 block">Pickup Time</Label>
                <div className="relative">
                  <Input
                    id="time"
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="pl-10 rounded-xl py-6"
                    required
                  />
                  <Clock className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
                </div>
              </div>
            </div>
            
            <div>
              <Label htmlFor="passengers" className="mb-1 block">Number of Passengers</Label>
              <div className="relative">
                <Input
                  id="passengers"
                  type="number"
                  min="1"
                  max="10"
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                  className="pl-10 rounded-xl py-6"
                />
                <Users className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <Label className="block">Vehicle Type</Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {vehicleOptions.map((vehicle) => (
                <VehicleOption
                  key={vehicle.id}
                  vehicle={vehicle}
                  isSelected={vehicleType === vehicle.id}
                  onSelect={setVehicleType}
                />
              ))}
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-[#1A1F2C] hover:bg-[#065d88] text-white py-6"
            disabled={isLoading}
          >
            {isLoading ? "Booking..." : "Book Pickup"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default BookingForm;
export { vehicleOptions, nigerianAirports };
