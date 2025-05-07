
import { useState } from "react";
import { Users } from "lucide-react";

interface VehicleOptionProps {
  vehicle: {
    id: string;
    name: string;
    capacity: string;
    price: number;
    image: string;
  };
  isSelected: boolean;
  onSelect: (id: string) => void;
}

const VehicleOption = ({ vehicle, isSelected, onSelect }: VehicleOptionProps) => {
  return (
    <div
      className={`border rounded-xl p-3 cursor-pointer transition-all duration-200 ${
        isSelected
          ? "border-payfare-600 bg-payfare-50 ring-2 ring-payfare-200"
          : "hover:border-payfare-300"
      }`}
      onClick={() => onSelect(vehicle.id)}
    >
      <div className="flex items-center">
        <div className="w-16 h-12 rounded-lg overflow-hidden mr-3 bg-gray-100">
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="font-medium">{vehicle.name}</p>
          <div className="flex items-center text-sm text-gray-500">
            <Users size={12} className="mr-1" />
            <span>Up to {vehicle.capacity} passengers</span>
          </div>
        </div>
        <div className="ml-auto">
          <div className="font-semibold text-payfare-700">{vehicle.price} SUI</div>
        </div>
      </div>
    </div>
  );
};

export default VehicleOption;
