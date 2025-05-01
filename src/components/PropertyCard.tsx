
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Users } from "lucide-react";

interface PropertyCardProps {
  name: string;
  location: string;
  price: string;
  rating: number;
  reviews: number;
  imageUrl: string;
  amenities: string[];
  capacity: number;
}

const PropertyCard = ({
  name,
  location,
  price,
  rating,
  reviews,
  imageUrl,
  amenities,
  capacity,
}: PropertyCardProps) => {
  const handleViewDetails = () => {
    toast.info("Property details coming soon!");
  };

  return (
    <Card className="overflow-hidden hover-scale">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" 
        />
        <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-xs font-medium">
          ★ {rating} ({reviews})
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-lg">{name}</h3>
            <p className="text-gray-600 text-sm">{location}</p>
          </div>
          <p>
            <span className="font-semibold text-payfare-800">{price}</span>
            <span className="text-sm text-gray-500"> SUI</span>
          </p>
        </div>
        
        <div className="flex items-center mt-3 text-sm">
          <Users className="h-4 w-4 text-gray-400 mr-1" /> 
          <span>{capacity} guests</span>
        </div>
        
        <div className="mt-3">
          <div className="flex flex-wrap gap-1">
            {amenities.slice(0, 3).map((amenity, index) => (
              <span key={index} className="text-xs bg-gray-100 rounded-full px-2 py-1">
                {amenity}
              </span>
            ))}
            {amenities.length > 3 && (
              <span className="text-xs bg-gray-100 rounded-full px-2 py-1">
                +{amenities.length - 3} more
              </span>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={handleViewDetails} 
          className="w-full bg-payfare-600 hover:bg-payfare-700"
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
