
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { User, Mail, Lock, Wallet, Key, Shield, CreditCard, Plane } from "lucide-react";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate signup
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Account created successfully!");
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
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
                <Plane className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white">PayFare</h1>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Join PayFare Today</h2>
            <p className="text-gray-300">
              Payfare helps travelers and hosts connect directly, cutting out middlemen and fees.
              Experience transparent, decentralized travel booking across Nigeria.
            </p>
          </div>
          
          <div className="mt-10 space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Wallet className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <h3 className="font-medium text-white">Web3 Authentication</h3>
                <p className="text-sm text-gray-400">Connect with your Sui wallet or use zkLogin</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <CreditCard className="h-5 w-5 text-green-400" />
              </div>
              <div>
                <h3 className="font-medium text-white">No Hidden Fees</h3>
                <p className="text-sm text-gray-400">Transparent pricing with blockchain verification</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                <Shield className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <h3 className="font-medium text-white">Secure Booking</h3>
                <p className="text-sm text-gray-400">End-to-end decentralized travel experiences</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-auto">
          <p className="text-center text-xs text-gray-500">
            Powered by PayFare — decentralizing travel across Nigeria
          </p>
        </div>
      </motion.div>
      
      {/* Signup Form */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-3/5 lg:w-2/3 p-6 sm:p-10 md:p-16 flex items-center justify-center"
      >
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
            <p className="text-gray-300">Join the decentralized travel revolution</p>
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
              <span className="flex-shrink mx-4 text-gray-400 text-sm">or signup with email</span>
              <div className="flex-grow border-t border-payfare-600"></div>
            </div>
            
            <form onSubmit={handleSignup} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-200">Full Name</Label>
                <div className="relative">
                  <div className="absolute left-3 top-3 text-gray-400">
                    <User size={20} />
                  </div>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="pl-10 bg-payfare-800 border-payfare-600 text-white rounded-xl"
                    placeholder="John Smith"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-200">Email address</Label>
                <div className="relative">
                  <div className="absolute left-3 top-3 text-gray-400">
                    <Mail size={20} />
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
                <Label htmlFor="password" className="text-gray-200">Password</Label>
                <div className="relative">
                  <div className="absolute left-3 top-3 text-gray-400">
                    <Lock size={20} />
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
                <p className="text-xs text-gray-500">Password must be at least 8 characters</p>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-payfare-500 to-blue-600 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-300"
                disabled={isLoading}
              >
                {isLoading ? "Creating Account..." : "Create Account"}
              </Button>
            </form>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-300">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-400 hover:underline font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;
