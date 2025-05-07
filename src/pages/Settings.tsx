
import { useEffect, useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

const Settings = () => {
  const [name, setName] = useState("John Smith");
  const [email, setEmail] = useState("john.smith@example.com");
  const [phone, setPhone] = useState("+1 (555) 123-4567");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  
  useEffect(() => {
    document.title = "Account Settings | PayFare";
  }, []);
  
  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Simulate saving
    setTimeout(() => {
      setIsSaving(false);
      toast.success("Profile updated successfully");
    }, 1000);
  };
  
  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      toast.error("New passwords do not match");
      return;
    }
    
    setIsSaving(true);
    
    // Simulate saving
    setTimeout(() => {
      setIsSaving(false);
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      toast.success("Password changed successfully");
    }, 1000);
  };
  
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-1">Manage your account settings and preferences</p>
        </div>
        
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="payment">Payment</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile">
            <Card className="rounded-2xl shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Profile Information</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSaveProfile} className="space-y-6">
                  <div className="flex items-center space-x-6">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <Button
                        type="button" 
                        size="sm"
                        variant="ghost"
                        className="absolute bottom-0 right-0 bg-white rounded-full w-8 h-8 p-0 shadow-md"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3Z"/>
                          <path d="m14 10-3 3-1.5-1.5"/>
                        </svg>
                        <span className="sr-only">Change Picture</span>
                      </Button>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Profile Picture</h3>
                      <p className="text-sm text-gray-500">JPG, PNG or GIF. 1MB max size.</p>
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="sm"
                        className="mt-2"
                      >
                        Upload new image
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="rounded-xl py-6"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="rounded-xl py-6"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="rounded-xl py-6"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="language">Preferred Language</Label>
                      <select
                        id="language"
                        className="flex h-12 w-full rounded-xl border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      >
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="pt-6 flex justify-end">
                    <Button
                      type="submit"
                      className="bg-payfare-600 hover:bg-payfare-700 text-white"
                      disabled={isSaving}
                    >
                      {isSaving ? "Saving..." : "Save Changes"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="security">
            <Card className="rounded-2xl shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Change Password</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleChangePassword} className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input
                        id="current-password"
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className="rounded-xl py-6"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input
                        id="new-password"
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="rounded-xl py-6"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input
                        id="confirm-password"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="rounded-xl py-6"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="pt-4 flex justify-end">
                    <Button
                      type="submit"
                      className="bg-payfare-600 hover:bg-payfare-700 text-white"
                      disabled={isSaving}
                    >
                      {isSaving ? "Changing..." : "Change Password"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
            
            <Card className="rounded-2xl shadow-lg mt-8">
              <CardHeader>
                <CardTitle className="text-xl">Two-Factor Authentication</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">Authenticator App</h3>
                    <p className="text-sm text-gray-500">Use an authenticator app to generate one-time security codes.</p>
                  </div>
                  <Button variant="outline">Set Up</Button>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">SMS Authentication</h3>
                    <p className="text-sm text-gray-500">Use your phone number to receive security codes via SMS.</p>
                  </div>
                  <Button variant="outline">Set Up</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications">
            <Card className="rounded-2xl shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Notification Preferences</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-medium">Email Notifications</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="booking-confirmation">Booking Confirmations</Label>
                        <input
                          type="checkbox"
                          id="booking-confirmation"
                          defaultChecked
                          className="h-6 w-6 rounded border-gray-300 text-payfare-600 focus:ring-payfare-500"
                        />
                      </div>
                      
                      <div className="flex justify-between">
                        <Label htmlFor="booking-reminders">Booking Reminders</Label>
                        <input
                          type="checkbox"
                          id="booking-reminders"
                          defaultChecked
                          className="h-6 w-6 rounded border-gray-300 text-payfare-600 focus:ring-payfare-500"
                        />
                      </div>
                      
                      <div className="flex justify-between">
                        <Label htmlFor="special-offers">Special Offers</Label>
                        <input
                          type="checkbox"
                          id="special-offers"
                          className="h-6 w-6 rounded border-gray-300 text-payfare-600 focus:ring-payfare-500"
                        />
                      </div>
                      
                      <div className="flex justify-between">
                        <Label htmlFor="newsletter">Newsletter</Label>
                        <input
                          type="checkbox"
                          id="newsletter"
                          className="h-6 w-6 rounded border-gray-300 text-payfare-600 focus:ring-payfare-500"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-6 border-t">
                    <h3 className="font-medium">Push Notifications</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="push-booking">Booking Updates</Label>
                        <input
                          type="checkbox"
                          id="push-booking"
                          defaultChecked
                          className="h-6 w-6 rounded border-gray-300 text-payfare-600 focus:ring-payfare-500"
                        />
                      </div>
                      
                      <div className="flex justify-between">
                        <Label htmlFor="push-promotions">Promotions</Label>
                        <input
                          type="checkbox"
                          id="push-promotions"
                          className="h-6 w-6 rounded border-gray-300 text-payfare-600 focus:ring-payfare-500"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-6 flex justify-end">
                    <Button
                      type="button"
                      className="bg-payfare-600 hover:bg-payfare-700 text-white"
                      onClick={() => toast.success("Notification preferences saved")}
                    >
                      Save Preferences
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="payment">
            <Card className="rounded-2xl shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Payment Methods</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-4 border rounded-xl flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-8 bg-blue-100 rounded flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700">
                          <rect width="20" height="14" x="2" y="5" rx="2" />
                          <line x1="2" x2="22" y1="10" y2="10" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Sui Wallet</p>
                        <p className="text-sm text-gray-500">Connected • 0x1234...5678</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">Disconnect</Button>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-xl flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-8 bg-blue-900 rounded flex items-center justify-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 14L12 7L15 14L12 21L9 14Z" fill="#A3BFFA" />
                          <path d="M12 7L15 14L12 21L9 14L12 7Z" fill="#7F9CF5" />
                          <path d="M9 14L12 7L15 14L12 21L9 14Z" stroke="#7F9CF5" strokeWidth="0.2" />
                          <path d="M15 3L18 10L15 14L12 7L15 3Z" fill="#7F9CF5" />
                          <path d="M12 7L15 3L18 10L15 14L12 7Z" fill="#667EEA" />
                          <path d="M15 3L18 10L15 14L12 7L15 3Z" stroke="#667EEA" strokeWidth="0.2" />
                          <path d="M6 10L9 14L12 7L9 3L6 10Z" fill="#A3BFFA" />
                          <path d="M9 3L12 7L9 14L6 10L9 3Z" fill="#7F9CF5" />
                          <path d="M6 10L9 3L12 7L9 14L6 10Z" stroke="#7F9CF5" strokeWidth="0.2" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Ethereum Wallet</p>
                        <p className="text-sm text-gray-500">Connected • 0xabcd...ef12</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">Disconnect</Button>
                    </div>
                  </div>
                  
                  <Button
                    variant="outline"
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" x2="12" y1="8" y2="16" />
                      <line x1="8" x2="16" y1="12" y2="12" />
                    </svg>
                    Connect New Wallet
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
