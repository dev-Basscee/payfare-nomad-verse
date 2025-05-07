
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Login successful!");
      window.location.href = "/dashboard";
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Welcome Panel */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="md:w-1/2 bg-[#1A1F2C] text-white flex flex-col justify-center p-8 md:p-16"
      >
        <div className="max-w-md mx-auto">
          <div className="flex items-center mb-6">
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-payfare-400 to-payfare-600 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
              </svg>
            </div>
            <h1 className="text-2xl font-bold ml-2">PayFare</h1>
          </div>
          
          <h2 className="text-4xl font-bold mb-4">Welcome Back</h2>
          <p className="text-gray-300 mb-6">
            Access your travel bookings, manage reservations, and discover exclusive deals with PayFare's decentralized travel platform.
          </p>
          
          <div className="mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <div className="h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                  <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Seamless Bookings</h3>
                <p className="text-sm text-gray-400">Book flights, accommodations and more in one place</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 mb-4">
              <div className="h-12 w-12 rounded-full bg-green-500/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Lower Fees</h3>
                <p className="text-sm text-gray-400">Save with blockchain-powered transactions</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 rounded-full bg-amber-500/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Secure & Transparent</h3>
                <p className="text-sm text-gray-400">Smart contracts ensure safe, transparent bookings</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Login Form */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="md:w-1/2 bg-white flex flex-col justify-center p-8 md:p-16"
      >
        <div className="max-w-md mx-auto w-full">
          <div className="text-center md:text-left mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Sign In</h2>
            <p className="text-gray-600">Enter your details to access your account</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="your@email.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded-xl py-6"
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password">Password</Label>
                <Link to="/forgot-password" className="text-sm text-payfare-600 hover:underline">
                  Forgot Password?
                </Link>
              </div>
              <Input 
                id="password" 
                type="password" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="rounded-xl py-6"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-payfare-600 hover:bg-payfare-700 text-white py-6"
              disabled={isLoading}
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </Button>
            
            <div className="relative flex items-center justify-center">
              <div className="border-t border-gray-200 flex-grow"></div>
              <div className="px-4 text-gray-500 text-sm">or continue with</div>
              <div className="border-t border-gray-200 flex-grow"></div>
            </div>
            
            <Button 
              type="button" 
              variant="outline" 
              className="w-full flex items-center justify-center space-x-2 py-6"
            >
              <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M43.611 20.083H42V20H24V28H35.303C33.654 32.657 29.223 36 24 36C17.373 36 12 30.627 12 24C12 17.373 17.373 12 24 12C27.059 12 29.842 13.154 31.961 15.039L37.618 9.382C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24C4 35.045 12.955 44 24 44C35.045 44 44 35.045 44 24C44 22.659 43.862 21.35 43.611 20.083Z" fill="#FFC107"/>
                <path d="M6.306 14.691L12.877 19.51C14.655 15.108 18.961 12 24 12C27.059 12 29.842 13.154 31.961 15.039L37.618 9.382C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691Z" fill="#FF3D00"/>
                <path d="M24 44C29.166 44 33.86 42.023 37.409 38.808L31.219 33.57C29.1436 35.1484 26.6075 36.0026 24 36C18.798 36 14.381 32.683 12.717 28.054L6.19501 33.079C9.50501 39.556 16.227 44 24 44Z" fill="#4CAF50"/>
                <path d="M43.611 20.083H42V20H24V28H35.303C34.5142 30.2164 33.0934 32.1532 31.216 33.571L31.219 33.569L37.409 38.807C36.971 39.205 44 34 44 24C44 22.659 43.862 21.35 43.611 20.083Z" fill="#1976D2"/>
              </svg>
              <span>Continue with Google</span>
            </Button>
          </form>
          
          <div className="text-center mt-6">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link to="/signup" className="text-payfare-600 hover:underline font-medium">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
