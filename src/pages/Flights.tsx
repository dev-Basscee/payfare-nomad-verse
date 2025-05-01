
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FlightCard from "@/components/FlightCard";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { format } from "date-fns";

const Flights = () => {
  const location = useLocation();
  const searchParams = location.state || {};
  
  const { from, to, date, passengers } = searchParams;
  
  useEffect(() => {
    document.title = `Flights from ${from || 'anywhere'} to ${to || 'anywhere'} - PayFare`;
  }, [from, to]);
  
  // Sample flight data - in a real app this would come from an API
  const [flights, setFlights] = useState([
    {
      id: 1,
      airline: "SkyWave Airlines",
      flightNumber: "SW 1234",
      departureTime: "08:45",
      departureAirport: from || "LAX",
      arrivalTime: "14:30",
      arrivalAirport: to || "JFK",
      duration: "5h 45m",
      price: "115",
      stops: 0
    },
    {
      id: 2,
      airline: "OceanAir",
      flightNumber: "OA 5678",
      departureTime: "10:20",
      departureAirport: from || "LAX",
      arrivalTime: "16:15",
      arrivalAirport: to || "JFK",
      duration: "5h 55m",
      price: "98",
      stops: 0
    },
    {
      id: 3,
      airline: "Mountain Express",
      flightNumber: "ME 9012",
      departureTime: "12:15",
      departureAirport: from || "LAX",
      arrivalTime: "20:30",
      arrivalAirport: to || "JFK",
      duration: "8h 15m",
      price: "85",
      stops: 1
    },
    {
      id: 4,
      airline: "Global Airways",
      flightNumber: "GA 3456",
      departureTime: "14:50",
      departureAirport: from || "LAX",
      arrivalTime: "23:05",
      arrivalAirport: to || "JFK",
      duration: "8h 15m",
      price: "75",
      stops: 1
    },
    {
      id: 5,
      airline: "City Hopper",
      flightNumber: "CH 7890",
      departureTime: "18:30",
      departureAirport: from || "LAX",
      arrivalTime: "00:45",
      arrivalAirport: to || "JFK",
      duration: "6h 15m",
      price: "125",
      stops: 0
    },
  ]);
  
  // Filters
  const [priceRange, setPriceRange] = useState<number[]>([50, 200]);
  const [selectedAirlines, setSelectedAirlines] = useState<string[]>([]);
  const [stopFilter, setStopFilter] = useState<number[]>([]);
  
  // All available airlines
  const airlines = Array.from(new Set(flights.map(flight => flight.airline)));
  
  // Filter flights based on selected filters
  const filteredFlights = flights.filter(flight => {
    const matchesPrice = parseInt(flight.price) >= priceRange[0] && parseInt(flight.price) <= priceRange[1];
    const matchesAirline = selectedAirlines.length === 0 || selectedAirlines.includes(flight.airline);
    const matchesStops = stopFilter.length === 0 || stopFilter.includes(flight.stops);
    return matchesPrice && matchesAirline && matchesStops;
  });
  
  // Sort options
  const [sortBy, setSortBy] = useState("price");
  
  // Sort flights based on selected option
  const sortedFlights = [...filteredFlights].sort((a, b) => {
    if (sortBy === "price") {
      return parseInt(a.price) - parseInt(b.price);
    } else if (sortBy === "duration") {
      // This is a simplified example - in a real app we would parse the duration properly
      return a.duration.localeCompare(b.duration);
    } else if (sortBy === "departure") {
      return a.departureTime.localeCompare(b.departureTime);
    }
    return 0;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Search Summary */}
      <div className="bg-payfare-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-2xl font-bold mb-2">
            Flights from {from || "anywhere"} to {to || "anywhere"}
          </h1>
          <p>
            {date ? format(new Date(date), "MMMM d, yyyy") : "Any date"} • {passengers || 1} passenger{passengers > 1 ? "s" : ""}
          </p>
        </div>
      </div>
      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
                <h2 className="text-xl font-semibold mb-6">Filters</h2>
                
                {/* Price Range Filter */}
                <div className="mb-8">
                  <h3 className="font-medium text-gray-900 mb-4">Price Range (SUI)</h3>
                  <Slider
                    defaultValue={priceRange}
                    min={50}
                    max={200}
                    step={5}
                    onValueChange={setPriceRange}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{priceRange[0]} SUI</span>
                    <span>{priceRange[1]} SUI</span>
                  </div>
                </div>
                
                {/* Airline Filter */}
                <div className="mb-8">
                  <h3 className="font-medium text-gray-900 mb-4">Airlines</h3>
                  <div className="space-y-2">
                    {airlines.map((airline) => (
                      <div key={airline} className="flex items-center">
                        <Checkbox 
                          id={`airline-${airline}`}
                          checked={selectedAirlines.includes(airline)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedAirlines([...selectedAirlines, airline]);
                            } else {
                              setSelectedAirlines(selectedAirlines.filter(a => a !== airline));
                            }
                          }}
                        />
                        <label htmlFor={`airline-${airline}`} className="ml-2 text-sm font-medium">
                          {airline}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Stops Filter */}
                <div className="mb-8">
                  <h3 className="font-medium text-gray-900 mb-4">Stops</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Checkbox 
                        id="stops-0"
                        checked={stopFilter.includes(0)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setStopFilter([...stopFilter, 0]);
                          } else {
                            setStopFilter(stopFilter.filter(s => s !== 0));
                          }
                        }}
                      />
                      <label htmlFor="stops-0" className="ml-2 text-sm font-medium">
                        Non-stop
                      </label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox 
                        id="stops-1"
                        checked={stopFilter.includes(1)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setStopFilter([...stopFilter, 1]);
                          } else {
                            setStopFilter(stopFilter.filter(s => s !== 1));
                          }
                        }}
                      />
                      <label htmlFor="stops-1" className="ml-2 text-sm font-medium">
                        1 Stop
                      </label>
                    </div>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    setPriceRange([50, 200]);
                    setSelectedAirlines([]);
                    setStopFilter([]);
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            </div>
            
            {/* Flight Results */}
            <div className="lg:w-3/4">
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600">
                  {sortedFlights.length} {sortedFlights.length === 1 ? "flight" : "flights"} found
                </p>
                
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <select 
                    className="border rounded-md p-1 text-sm"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="price">Lowest price</option>
                    <option value="duration">Shortest duration</option>
                    <option value="departure">Earliest departure</option>
                  </select>
                </div>
              </div>
              
              {sortedFlights.length > 0 ? (
                <div className="space-y-4">
                  {sortedFlights.map((flight) => (
                    <FlightCard key={flight.id} {...flight} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">No flights found</h3>
                  <p className="text-gray-600 mb-4">Try adjusting your filters to see more results.</p>
                  <Button onClick={() => {
                    setPriceRange([50, 200]);
                    setSelectedAirlines([]);
                    setStopFilter([]);
                  }}>
                    Reset Filters
                  </Button>
                </div>
              )}
              
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Flights;
