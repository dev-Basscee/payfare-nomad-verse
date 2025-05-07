
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DashboardLayout from "@/components/DashboardLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Hotel,
  Search,
  MapPin,
  Star,
  Users,
  Filter,
} from "lucide-react";
import { toast } from "sonner";

// Hotel interface
interface Hotel {
  id: number;
  name: string;
  location: string;
  price: number;
  image: string;
  rating: number;
  amenities: string[];
}

// Sample data
const hotels: Hotel[] = [
  {
    id: 1,
    name: "Grand Marina Hotel",
    location: "New York, USA",
    price: 120,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80",
    rating: 4.8,
    amenities: ["Free WiFi", "Pool", "Spa", "Restaurant", "Gym"],
  },
  {
    id: 2,
    name: "Sunset Beach Resort",
    location: "Miami, USA",
    price: 150,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80",
    rating: 4.5,
    amenities: ["Beach Access", "Pool", "Bar", "Restaurant"],
  },
  {
    id: 3,
    name: "Mountain View Lodge",
    location: "Denver, USA",
    price: 95,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80",
    rating: 4.2,
    amenities: ["Free WiFi", "Mountain View", "Breakfast", "Parking"],
  },
  {
    id: 4,
    name: "City Center Suites",
    location: "Chicago, USA",
    price: 110,
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80",
    rating: 4.6,
    amenities: ["Free WiFi", "City View", "Gym", "Restaurant"],
  },
];

const AccommodationsPage = () => {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("1");
  const [priceRange, setPriceRange] = useState("200");
  const [rating, setRating] = useState("0");
  const [filteredHotels, setFilteredHotels] = useState<Hotel[]>(hotels);
  const [showFilters, setShowFilters] = useState(false);
  
  useEffect(() => {
    document.title = "Accommodations | PayFare";
  }, []);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Filter hotels based on search criteria
    // This is a simple implementation - in a real app, this would query an API
    const filtered = hotels.filter(hotel => {
      return (
        (!location || hotel.location.toLowerCase().includes(location.toLowerCase())) &&
        hotel.price <= parseInt(priceRange) &&
        hotel.rating >= parseInt(rating)
      );
    });
    
    setFilteredHotels(filtered);
    toast.success(`Found ${filtered.length} accommodations matching your criteria`);
  };
  
  const handleBooking = (hotelId: number) => {
    toast.success("Booking request sent! Check your email for confirmation.");
  };
  
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Find Accommodations</h1>
          <p className="text-gray-600 mt-1">Discover and book your perfect stay</p>
        </div>
        
        <Card className="rounded-2xl shadow-lg overflow-hidden">
          <CardContent className="p-6">
            <form onSubmit={handleSearch} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <Label htmlFor="location" className="mb-1 block">Location</Label>
                  <div className="relative">
                    <Input
                      id="location"
                      placeholder="City or hotel name"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="pl-10 rounded-xl py-6"
                    />
                    <MapPin className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="check-in" className="mb-1 block">Check In</Label>
                  <Input
                    id="check-in"
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="rounded-xl py-6"
                  />
                </div>
                
                <div>
                  <Label htmlFor="check-out" className="mb-1 block">Check Out</Label>
                  <Input
                    id="check-out"
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="rounded-xl py-6"
                  />
                </div>
                
                <div>
                  <Label htmlFor="guests" className="mb-1 block">Guests</Label>
                  <div className="relative">
                    <Input
                      id="guests"
                      type="number"
                      min="1"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="pl-10 rounded-xl py-6"
                    />
                    <Users className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center gap-2"
                  >
                    <Filter size={16} />
                    {showFilters ? "Hide Filters" : "Show Filters"}
                  </Button>
                </div>
                
                <Button type="submit" className="bg-payfare-600 hover:bg-payfare-700 text-white space-x-2">
                  <Search size={16} />
                  <span>Search Accommodations</span>
                </Button>
              </div>
              
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t"
                >
                  <div>
                    <Label htmlFor="price-range" className="mb-1 block">Max Price per Night (SUI)</Label>
                    <div className="flex items-center gap-4">
                      <Input
                        id="price-range"
                        type="range"
                        min="50"
                        max="500"
                        step="10"
                        value={priceRange}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="flex-1"
                      />
                      <span className="w-16 text-right font-medium">{priceRange} SUI</span>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="rating-filter" className="mb-1 block">Minimum Rating</Label>
                    <div className="flex items-center gap-4">
                      <Input
                        id="rating-filter"
                        type="range"
                        min="0"
                        max="5"
                        step="0.5"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        className="flex-1"
                      />
                      <div className="flex items-center gap-1 w-16">
                        <Star size={16} className="text-amber-500 fill-amber-500" />
                        <span className="font-medium">{rating}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </form>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHotels.map((hotel) => (
            <motion.div 
              key={hotel.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
                    <Star size={14} className="text-amber-500 fill-amber-500 mr-1" />
                    <span className="font-medium text-sm">{hotel.rating}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-lg">{hotel.name}</h3>
                      <div className="flex items-center text-gray-500">
                        <MapPin size={14} className="mr-1" />
                        <span className="text-sm">{hotel.location}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-payfare-700">{hotel.price} SUI</div>
                      <div className="text-xs text-gray-500">per night</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 my-3">
                    {hotel.amenities.slice(0, 3).map((amenity, index) => (
                      <span key={index} className="bg-gray-100 text-gray-800 rounded-full px-2 py-1 text-xs">
                        {amenity}
                      </span>
                    ))}
                    {hotel.amenities.length > 3 && (
                      <span className="bg-gray-100 text-gray-800 rounded-full px-2 py-1 text-xs">
                        +{hotel.amenities.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <Button
                    onClick={() => handleBooking(hotel.id)}
                    className="w-full bg-payfare-600 hover:bg-payfare-700 text-white mt-4"
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {filteredHotels.length === 0 && (
          <div className="text-center py-12">
            <Hotel className="h-12 w-12 mx-auto text-gray-400" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">No accommodations found</h3>
            <p className="mt-1 text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default AccommodationsPage;
