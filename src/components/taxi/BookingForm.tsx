
import React from "react";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, Users, Car } from "lucide-react";

export interface BookingFormProps {
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
  airports: { value: string; label: string }[];
  destinationOptions: string[];
}

const BookingForm: React.FC<BookingFormProps> = ({
  pickup,
  setPickup,
  destination,
  setDestination,
  date,
  setDate,
  time,
  setTime,
  passengers,
  setPassengers,
  vehicleType,
  setVehicleType,
  airports,
  destinationOptions,
}) => {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(
    date ? new Date(date) : undefined
  );

  const handleDateChange = (newDate: Date | undefined) => {
    if (newDate) {
      setDate(format(newDate, "yyyy-MM-dd"));
      setSelectedDate(newDate);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <label htmlFor="pickup" className="block text-sm text-gray-300">Airport Pickup</label>
        <Select value={pickup} onValueChange={setPickup}>
          <SelectTrigger className="bg-payfare-800 border-payfare-600 focus:ring-payfare-500">
            <SelectValue placeholder="Select airport" />
          </SelectTrigger>
          <SelectContent className="bg-payfare-800 border-payfare-600 text-white">
            {airports.map((airport) => (
              <SelectItem key={airport.value} value={airport.value} className="hover:bg-payfare-700">
                {airport.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1">
        <label htmlFor="destination" className="block text-sm text-gray-300">Destination</label>
        <Select value={destination} onValueChange={setDestination}>
          <SelectTrigger className="bg-payfare-800 border-payfare-600 focus:ring-payfare-500">
            <SelectValue placeholder="Select destination" />
          </SelectTrigger>
          <SelectContent className="bg-payfare-800 border-payfare-600 text-white">
            {destinationOptions.map((option) => (
              <SelectItem key={option} value={option} className="hover:bg-payfare-700">
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <label htmlFor="date" className="block text-sm text-gray-300">Date</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal bg-payfare-800 border-payfare-600",
                  !date && "text-gray-400"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(new Date(date), "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-payfare-800 border-payfare-600">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={handleDateChange}
                initialFocus
                className="p-3 pointer-events-auto bg-payfare-800 text-white"
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-1">
          <label htmlFor="time" className="block text-sm text-gray-300">Time</label>
          <Select value={time} onValueChange={setTime}>
            <SelectTrigger className="bg-payfare-800 border-payfare-600 focus:ring-payfare-500">
              <SelectValue placeholder="Select time" />
            </SelectTrigger>
            <SelectContent className="bg-payfare-800 border-payfare-600 text-white">
              {["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", 
                "06:00", "07:00", "08:00", "09:00", "10:00", "11:00",
                "12:00", "13:00", "14:00", "15:00", "16:00", "17:00",
                "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"].map((timeOption) => (
                <SelectItem key={timeOption} value={timeOption} className="hover:bg-payfare-700">
                  {timeOption}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <label htmlFor="passengers" className="block text-sm text-gray-300">Passengers</label>
          <Select value={passengers} onValueChange={setPassengers}>
            <SelectTrigger className="bg-payfare-800 border-payfare-600 focus:ring-payfare-500">
              <SelectValue placeholder="Passengers">
                <div className="flex items-center">
                  <Users className="mr-2 h-4 w-4" />
                  <span>{passengers}</span>
                </div>
              </SelectValue>
            </SelectTrigger>
            <SelectContent className="bg-payfare-800 border-payfare-600 text-white">
              {["1", "2", "3", "4", "5", "6"].map((num) => (
                <SelectItem key={num} value={num} className="hover:bg-payfare-700">
                  {num} {parseInt(num) === 1 ? "passenger" : "passengers"}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1">
          <label htmlFor="vehicleType" className="block text-sm text-gray-300">Vehicle Type</label>
          <Select value={vehicleType} onValueChange={setVehicleType}>
            <SelectTrigger className="bg-payfare-800 border-payfare-600 focus:ring-payfare-500">
              <SelectValue placeholder="Vehicle type">
                <div className="flex items-center">
                  <Car className="mr-2 h-4 w-4" />
                  <span>{vehicleType.charAt(0).toUpperCase() + vehicleType.slice(1)}</span>
                </div>
              </SelectValue>
            </SelectTrigger>
            <SelectContent className="bg-payfare-800 border-payfare-600 text-white">
              <SelectItem value="sedan" className="hover:bg-payfare-700">Sedan</SelectItem>
              <SelectItem value="suv" className="hover:bg-payfare-700">SUV</SelectItem>
              <SelectItem value="luxury" className="hover:bg-payfare-700">Luxury</SelectItem>
              <SelectItem value="van" className="hover:bg-payfare-700">Van</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button 
        type="submit" 
        className="w-full bg-gradient-to-r from-payfare-500 to-blue-600 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-300 hover:-translate-y-1"
      >
        Book Your Ride
      </Button>
    </div>
  );
};

export default BookingForm;
