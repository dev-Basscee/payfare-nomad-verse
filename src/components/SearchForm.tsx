
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon, Plane, Hotel, Car } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

const SearchForm = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState("flights");
  
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [returnDate, setReturnDate] = useState<Date | undefined>(
    new Date(new Date().setDate(new Date().getDate() + 7))
  );
  const [passengers, setPassengers] = useState(1);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (tab === "flights") {
      navigate("/flights", { 
        state: { from, to, date, returnDate, passengers } 
      });
    } else {
      // For demo purposes, we'll just navigate to flights
      navigate("/flights");
    }
  };
  
  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden">
      <Tabs defaultValue="flights" className="w-full" onValueChange={setTab}>
        <TabsList className="w-full bg-gray-50 p-1 grid grid-cols-3">
          <TabsTrigger value="flights" className="data-[state=active]:bg-white rounded-md py-3">
            <Plane className="h-4 w-4 mr-2" />
            Flights
          </TabsTrigger>
          <TabsTrigger value="accommodations" className="data-[state=active]:bg-white rounded-md py-3">
            <Hotel className="h-4 w-4 mr-2" />
            Accommodations
          </TabsTrigger>
          <TabsTrigger value="transportation" className="data-[state=active]:bg-white rounded-md py-3">
            <Car className="h-4 w-4 mr-2" />
            Transportation
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="flights" className="p-4 md:p-6">
          <form onSubmit={handleSearch}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
                <Input 
                  placeholder="City or Airport" 
                  value={from} 
                  onChange={(e) => setFrom(e.target.value)}
                  required
                  className="bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
                <Input 
                  placeholder="City or Airport" 
                  value={to} 
                  onChange={(e) => setTo(e.target.value)}
                  required
                  className="bg-gray-50"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Departure</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className="w-full justify-start text-left font-normal bg-gray-50"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Return</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className="w-full justify-start text-left font-normal bg-gray-50"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {returnDate ? format(returnDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={returnDate}
                      onSelect={setReturnDate}
                      initialFocus
                      disabled={(date) => date < new Date()}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Passengers</label>
                <Input 
                  type="number"
                  min="1"
                  max="10"
                  value={passengers}
                  onChange={(e) => setPassengers(parseInt(e.target.value))}
                  className="bg-gray-50"
                />
              </div>
            </div>
            
            <div className="mt-6">
              <Button 
                type="submit" 
                className="w-full bg-payfare-600 hover:bg-payfare-700 text-white py-6"
                size="lg"
              >
                Search Flights
              </Button>
            </div>
          </form>
        </TabsContent>
        
        <TabsContent value="accommodations" className="p-4 md:p-6">
          <form onSubmit={handleSearch}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                <Input 
                  placeholder="City or Region" 
                  className="bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
                <select className="w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm">
                  <option value="">Any Type</option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="villa">Villa</option>
                  <option value="hotel">Hotel</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Check In</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className="w-full justify-start text-left font-normal bg-gray-50"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      <span>Pick a date</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Check Out</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className="w-full justify-start text-left font-normal bg-gray-50"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      <span>Pick a date</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                <Input 
                  type="number"
                  min="1"
                  defaultValue="2"
                  className="bg-gray-50"
                />
              </div>
            </div>
            
            <div className="mt-6">
              <Button 
                type="submit" 
                className="w-full bg-payfare-600 hover:bg-payfare-700 text-white py-6"
                size="lg"
              >
                Search Accommodations
              </Button>
            </div>
          </form>
        </TabsContent>
        
        <TabsContent value="transportation" className="p-4 md:p-6">
          <form onSubmit={handleSearch}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Pick-up Location</label>
                <Input 
                  placeholder="Airport or Address" 
                  className="bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Drop-off Location</label>
                <Input 
                  placeholder="Airport or Address" 
                  className="bg-gray-50"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className="w-full justify-start text-left font-normal bg-gray-50"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      <span>Pick a date</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                <select className="w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm">
                  <option value="">Select time</option>
                  <option value="00:00">12:00 AM</option>
                  <option value="01:00">1:00 AM</option>
                  <option value="02:00">2:00 AM</option>
                  <option value="03:00">3:00 AM</option>
                  <option value="04:00">4:00 AM</option>
                  <option value="05:00">5:00 AM</option>
                  <option value="06:00">6:00 AM</option>
                  <option value="07:00">7:00 AM</option>
                  <option value="08:00">8:00 AM</option>
                  <option value="09:00">9:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="13:00">1:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                  <option value="17:00">5:00 PM</option>
                  <option value="18:00">6:00 PM</option>
                  <option value="19:00">7:00 PM</option>
                  <option value="20:00">8:00 PM</option>
                  <option value="21:00">9:00 PM</option>
                  <option value="22:00">10:00 PM</option>
                  <option value="23:00">11:00 PM</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Type</label>
                <select className="w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm">
                  <option value="">Any Vehicle</option>
                  <option value="economy">Economy</option>
                  <option value="standard">Standard</option>
                  <option value="luxury">Luxury</option>
                  <option value="suv">SUV</option>
                  <option value="van">Van</option>
                </select>
              </div>
            </div>
            
            <div className="mt-6">
              <Button 
                type="submit" 
                className="w-full bg-payfare-600 hover:bg-payfare-700 text-white py-6"
                size="lg"
              >
                Search Transportation
              </Button>
            </div>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SearchForm;
