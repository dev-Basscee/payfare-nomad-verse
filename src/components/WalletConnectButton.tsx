
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const WalletConnectButton = () => {
  const [connected, setConnected] = useState<boolean>(false);
  const [walletAddress, setWalletAddress] = useState<string>("");
  const navigate = useNavigate();
  
  const handleConnect = async () => {
    try {
      // This is a placeholder for zkLogin integration
      // In a real implementation, this would use Sui's zkLogin SDK
      console.log("Initiating zkLogin flow...");
      
      // Simulate successful connection
      setTimeout(() => {
        const mockAddress = "0x" + Math.random().toString(16).slice(2, 12);
        setWalletAddress(mockAddress);
        setConnected(true);
        localStorage.setItem("isLoggedIn", "true");
        toast.success("Wallet connected successfully!");
        navigate("/");
      }, 1000);
    } catch (error) {
      console.error("Wallet connection failed:", error);
      toast.error("Failed to connect wallet. Please try again.");
    }
  };
  
  const handleZkLogin = () => {
    toast.info("Redirecting to zkLogin...");
    setTimeout(() => {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    }, 1500);
  };
  
  const handleDisconnect = () => {
    setConnected(false);
    setWalletAddress("");
    localStorage.removeItem("isLoggedIn");
    toast.info("Wallet disconnected");
    navigate("/");
  };
  
  if (!connected) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            className="bg-gradient-to-r from-payfare-500 to-blue-600 text-white hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-300 hover:-translate-y-1"
            size="default"
          >
            Connect
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-payfare-800 border border-payfare-600 text-white">
          <DropdownMenuItem className="cursor-pointer hover:bg-payfare-600" onClick={handleConnect}>
            Connect Wallet
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer hover:bg-payfare-600" onClick={handleZkLogin}>
            Use zkLogin
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="border-payfare-500 text-blue-400 hover:bg-payfare-600">
          {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-payfare-800 border border-payfare-600 text-white">
        <DropdownMenuItem className="cursor-pointer hover:bg-payfare-600" onClick={() => navigate("/dashboard")}>
          Dashboard
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer hover:bg-payfare-600" onClick={() => navigate("/dashboard/settings")}>
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer text-red-400 hover:bg-payfare-600" onClick={handleDisconnect}>
          Disconnect
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default WalletConnectButton;
