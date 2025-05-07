
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
        toast.success("Wallet connected successfully!");
        navigate("/home");
      }, 1000);
    } catch (error) {
      console.error("Wallet connection failed:", error);
      toast.error("Failed to connect wallet. Please try again.");
    }
  };
  
  const handleDisconnect = () => {
    setConnected(false);
    setWalletAddress("");
    toast.info("Wallet disconnected");
    navigate("/");
  };
  
  if (!connected) {
    return (
      <Button 
        onClick={handleConnect}
        className="bg-payfare-600 hover:bg-payfare-700 text-white"
        size="default"
      >
        Connect Wallet
      </Button>
    );
  }
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="border-payfare-500 text-payfare-700">
          {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem className="cursor-pointer" onClick={() => navigate("/dashboard")}>
          Dashboard
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer" onClick={() => navigate("/dashboard/settings")}>
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer text-red-500" onClick={handleDisconnect}>
          Disconnect
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default WalletConnectButton;
