
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const WalletConnectButton = () => {
  const [connected, setConnected] = useState<boolean>(false);
  const [walletAddress, setWalletAddress] = useState<string>("");
  
  const handleConnect = () => {
    // Simulate wallet connection
    const mockAddress = "0x" + Math.random().toString(16).slice(2, 12);
    setWalletAddress(mockAddress);
    setConnected(true);
    toast.success("Wallet connected successfully!");
  };
  
  const handleDisconnect = () => {
    setConnected(false);
    setWalletAddress("");
    toast.info("Wallet disconnected");
  };
  
  if (!connected) {
    return (
      <Button 
        onClick={handleConnect}
        className="bg-payfare-600 hover:bg-payfare-700 text-white"
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
        <DropdownMenuItem className="cursor-pointer" onClick={() => toast.info("Profile coming soon")}>
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer" onClick={() => toast.info("My Bookings coming soon")}>
          My Bookings
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer text-red-500" onClick={handleDisconnect}>
          Disconnect
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default WalletConnectButton;
