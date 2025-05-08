
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import Flights from "./pages/Flights";
import Accommodations from "./pages/Accommodations";
import Transportation from "./pages/Transportation";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import TaxiPage from "./pages/Taxi";
import Settings from "./pages/Settings";
import Home from "./pages/Home";
import History from "./pages/History";

const queryClient = new QueryClient();

// This would normally come from an auth provider
const isLoggedIn = () => {
  // Mock implementation - would actually check authentication state
  return localStorage.getItem("isLoggedIn") === "true";
};

// Protected route component
const ProtectedRoute = ({ children }) => {
  if (!isLoggedIn()) {
    // Redirect to login if not logged in
    return <Navigate to="/login" replace />;
  }
  return children;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Index />} />
            <Route path="/flights" element={<Flights />} />
            <Route path="/accommodations" element={<Accommodations />} />
            <Route path="/transportation" element={<Transportation />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            {/* Protected routes - redirect to login if not authenticated */}
            <Route path="/home" element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } />
            
            {/* Dashboard routes - all protected */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/flights" element={
              <ProtectedRoute>
                <Flights />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/accommodations" element={
              <ProtectedRoute>
                <Accommodations />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/taxi" element={
              <ProtectedRoute>
                <TaxiPage />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/history" element={
              <ProtectedRoute>
                <History />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/settings" element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            } />
            
            {/* Catch all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
