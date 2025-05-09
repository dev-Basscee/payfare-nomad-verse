
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { User, Key, Wallet } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Mock login functionality
    setTimeout(() => {
      localStorage.setItem("isLoggedIn", "true");
      setIsLoading(false);
      toast.success("Login successful!");
      navigate("/"); // Redirect to landing page after login
    }, 1500);
  };

  const handleWalletConnect = () => {
    toast.info("Connecting wallet...");
    setTimeout(() => {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    }, 1200);
  };

  const handleZkLogin = () => {
    toast.info("Redirecting to zkLogin...");
    setTimeout(() => {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    }, 1200);
  };

  return (
    <div className="flex min-h-screen bg-payfare-700">
      {/* Sidebar */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="hidden md:flex md:w-2/5 lg:w-1/3 bg-payfare-800 flex-col p-10 justify-between"
      >
        <div>
          <div className="mb-8">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-payfare-500 to-blue-500 flex items-center justify-center">
                <Wallet className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white">PayFare</h1>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Welcome back to PayFare!</h2>
            <p className="text-gray-300">
              Plan smarter trips with blockchain-powered transparency.
              Securely connect your wallet for seamless travel experiences.
            </p>
          </div>
        </div>
        
        <div className="mt-auto">
          <div className="p-6 rounded-xl glass-card">
            <p className="text-sm text-gray-300 mb-4">
              "Payfare has revolutionized how I travel across Nigeria.
              From Lagos to Abuja, my bookings are always secure and transparent."
            </p>
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <div className="ml-3">
                <p className="text-sm font-medium text-white">Oluwaseun A.</p>
                <p className="text-xs text-gray-400">Frequent Traveler</p>
              </div>
            </div>
          </div>
          
          <p className="text-center text-xs text-gray-500 mt-8">
            Powered by PayFare — your gateway to fair, decentralized travel.
          </p>
        </div>
      </motion.div>
      
      {/* Login Form */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-3/5 lg:w-2/3 p-6 sm:p-10 md:p-16 flex items-center justify-center"
      >
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Sign in to PayFare</h2>
            <p className="text-gray-300">Access your decentralized travel dashboard</p>
          </div>
          
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <Button 
                onClick={handleWalletConnect}
                variant="outline" 
                className="w-full border-payfare-500 hover:bg-payfare-600 text-white"
              >
                <Wallet className="mr-2 h-4 w-4" />
                <span>Connect Wallet</span>
              </Button>
              
              <Button 
                onClick={handleZkLogin}
                variant="outline" 
                className="w-full border-payfare-500 hover:bg-payfare-600 text-white"
              >
                <Key className="mr-2 h-4 w-4" />
                <span>zkLogin</span>
              </Button>
            </div>
            
            <div className="relative flex items-center">
              <div className="flex-grow border-t border-payfare-600"></div>
              <span className="flex-shrink mx-4 text-gray-400 text-sm">or continue with email</span>
              <div className="flex-grow border-t border-payfare-600"></div>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-200">Email address</Label>
                <div className="relative">
                  <div className="absolute left-3 top-3 text-gray-400">
                    <User size={20} />
                  </div>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-10 bg-payfare-800 border-payfare-600 text-white rounded-xl"
                    placeholder="name@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="password" className="text-gray-200">Password</Label>
                  <Link to="/forgot-password" className="text-sm text-blue-400 hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <div className="absolute left-3 top-3 text-gray-400">
                    <Key size={20} />
                  </div>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="pl-10 bg-payfare-800 border-payfare-600 text-white rounded-xl"
                    placeholder="••••••••"
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-payfare-500 to-blue-600 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-300"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign in"}
              </Button>
            </form>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-300">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-400 hover:underline font-medium">
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
