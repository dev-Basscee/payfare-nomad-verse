
import { useEffect } from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import PropertyCard from "@/components/PropertyCard";
import FlightCard from "@/components/FlightCard";

const Index = () => {
  useEffect(() => {
    document.title = "PayFare - Decentralized Travel Booking Platform";
  }, []);

  // Sample data for featured properties
  const featuredProperties = [
    {
      id: 1,
      name: "Ocean View Villa",
      location: "Bali, Indonesia",
      price: "120",
      rating: 4.8,
      reviews: 64,
      imageUrl: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80",
      amenities: ["Pool", "Wi-Fi", "Kitchen", "Air conditioning"],
      capacity: 4,
    },
    {
      id: 2,
      name: "Mountain Retreat",
      location: "Aspen, Colorado",
      price: "180",
      rating: 4.9,
      reviews: 42,
      imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80",
      amenities: ["Fireplace", "Mountain view", "Sauna", "Parking"],
      capacity: 6,
    },
    {
      id: 3,
      name: "Downtown Loft",
      location: "New York, USA",
      price: "95",
      rating: 4.7,
      reviews: 89,
      imageUrl: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80",
      amenities: ["Wi-Fi", "Gym", "Workspace", "City view"],
      capacity: 2,
    },
  ];

  // Sample flight deals
  const flightDeals = [
    {
      id: 1,
      airline: "SkyWave Airlines",
      flightNumber: "SW 1234",
      departureTime: "09:45",
      departureAirport: "LAX",
      arrivalTime: "15:30",
      arrivalAirport: "JFK",
      duration: "5h 45m",
      price: "120",
    },
    {
      id: 2,
      airline: "OceanAir",
      flightNumber: "OA 5678",
      departureTime: "14:20",
      departureAirport: "SFO",
      arrivalTime: "22:15",
      arrivalAirport: "MIA",
      duration: "4h 55m",
      price: "85",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      
      <main className="flex-grow">
        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Why Choose PayFare?</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Experience the future of travel booking with blockchain technology that puts travelers and property owners first.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="rounded-full bg-payfare-100 p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-payfare-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Secure & Transparent</h3>
                  <p className="text-gray-600">
                    Smart contracts on the Sui blockchain ensure secure, transparent transactions with immutable records.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="rounded-full bg-payfare-100 p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-payfare-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Lower Fees</h3>
                  <p className="text-gray-600">
                    Eliminating intermediaries means more value for travelers and better revenue for property owners.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="rounded-full bg-payfare-100 p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-payfare-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">All-in-One Booking</h3>
                  <p className="text-gray-600">
                    Seamlessly book flights, accommodations, and transportation in a single transaction.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Featured Properties */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Featured Properties</h2>
                <p className="mt-2 text-lg text-gray-600">
                  Discover amazing places to stay around the world.
                </p>
              </div>
              <button className="text-payfare-600 font-medium hover:text-payfare-800">
                View all properties →
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProperties.map((property) => (
                <PropertyCard key={property.id} {...property} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Flight Deals */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Featured Flight Deals</h2>
                <p className="mt-2 text-lg text-gray-600">
                  Explore our best flight offers with transparent pricing.
                </p>
              </div>
              <button className="text-payfare-600 font-medium hover:text-payfare-800">
                View all flights →
              </button>
            </div>
            
            <div className="space-y-4">
              {flightDeals.map((flight) => (
                <FlightCard key={flight.id} {...flight} />
              ))}
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">How PayFare Works</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Simple, secure, and transparent travel booking on the blockchain.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-payfare-600 rounded-full mx-auto flex items-center justify-center text-white text-xl font-semibold">
                    1
                  </div>
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-payfare-200"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Connect Wallet</h3>
                <p className="text-gray-600">
                  Connect your Sui wallet to access the platform securely.
                </p>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-payfare-600 rounded-full mx-auto flex items-center justify-center text-white text-xl font-semibold">
                    2
                  </div>
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-payfare-200"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Search & Select</h3>
                <p className="text-gray-600">
                  Find and choose your ideal flights, accommodations, and transportation.
                </p>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-payfare-600 rounded-full mx-auto flex items-center justify-center text-white text-xl font-semibold">
                    3
                  </div>
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-payfare-200"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Smart Contract Booking</h3>
                <p className="text-gray-600">
                  Confirm your booking through secure smart contracts with transparent terms.
                </p>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">
                  <div className="w-16 h-16 bg-payfare-600 rounded-full mx-auto flex items-center justify-center text-white text-xl font-semibold">
                    4
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Travel & Enjoy</h3>
                <p className="text-gray-600">
                  Receive your booking NFT and enjoy your seamless travel experience.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-payfare-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience the Future of Travel?</h2>
            <p className="text-lg text-payfare-100 mb-8 max-w-3xl mx-auto">
              Join PayFare today and be part of the decentralized travel revolution.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-8 py-3 bg-payfare-500 hover:bg-payfare-600 rounded-lg font-medium transition-colors">
                Explore Properties
              </button>
              <button className="px-8 py-3 bg-transparent border border-payfare-300 hover:bg-payfare-800 rounded-lg font-medium transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
