
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DashboardLayout from "@/components/DashboardLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Car,
  Calendar,
  Clock,
  MapPin,
  Users,
} from "lucide-react";
import { toast } from "sonner";

const TaxiPage = () => {
  const [pickup, setPickup] = useState("John F. Kennedy International Airport (JFK)");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [passengers, setPassengers] = useState("1");
  const [vehicleType, setVehicleType] = useState("sedan");
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    document.title = "Airport Pickup Service | PayFare";
  }, []);
  
  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate booking process
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Your pickup has been booked successfully!");
    }, 1500);
  };
  
  // Vehicle type options
  const vehicleOptions = [
    { id: "sedan", name: "Sedan", capacity: "1-3", price: 25, image: "https://images.unsplash.com/photo-1577494251483-1a2a75388bbe?auto=format&fit=crop&q=80" },
    { id: "suv", name: "SUV", capacity: "1-5", price: 35, image: "https://images.unsplash.com/photo-1572776685600-aca8c3456159?auto=format&fit=crop&q=80" },
    { id: "luxury", name: "Luxury", capacity: "1-3", price: 50, image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&q=80" },
    { id: "taxi", name: "Taxi", capacity: "1-4", price: 20, image: "https://images.unsplash.com/photo-1604556369143-081ea6824711?auto=format&fit=crop&q=80" },
  ];
  
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Airport Pickup Service</h1>
          <p className="text-gray-600 mt-1">Book a comfortable ride from the airport to your destination</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="rounded-2xl shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Car className="mr-2 h-5 w-5 text-payfare-600" />
                  Book Your Pickup
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleBooking} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="pickup" className="mb-1 block">Pickup Location (Airport)</Label>
                      <div className="relative">
                        <Input
                          id="pickup"
                          value={pickup}
                          onChange={(e) => setPickup(e.target.value)}
                          placeholder="Enter airport name"
                          className="pl-10 rounded-xl py-6"
                        />
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
                          placeholder="Enter hotel or address"
                          className="pl-10 rounded-xl py-6"
                          required
                        />
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
                        <div
                          key={vehicle.id}
                          className={`border rounded-xl p-3 cursor-pointer transition-all duration-200 ${
                            vehicleType === vehicle.id
                              ? "border-payfare-600 bg-payfare-50 ring-2 ring-payfare-200"
                              : "hover:border-payfare-300"
                          }`}
                          onClick={() => setVehicleType(vehicle.id)}
                        >
                          <div className="flex items-center">
                            <div className="w-16 h-12 rounded-lg overflow-hidden mr-3 bg-gray-100">
                              <img
                                src={vehicle.image}
                                alt={vehicle.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <p className="font-medium">{vehicle.name}</p>
                              <div className="flex items-center text-sm text-gray-500">
                                <Users size={12} className="mr-1" />
                                <span>Up to {vehicle.capacity} passengers</span>
                              </div>
                            </div>
                            <div className="ml-auto">
                              <div className="font-semibold text-payfare-700">{vehicle.price} SUI</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-payfare-600 hover:bg-payfare-700 text-white py-6"
                    disabled={isLoading}
                  >
                    {isLoading ? "Booking..." : "Book Pickup"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div>
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
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TaxiPage;
