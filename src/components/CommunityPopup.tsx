"use client";

import { useEffect, useState } from "react";
import { X, Users, Star, Calendar, Heart, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CommunityPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onRemindLater: () => void;
}

export default function CommunityPopup({ 
  isOpen, 
  onClose, 
  onRemindLater 
}: CommunityPopupProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Small delay for smooth animation
      setTimeout(() => setIsVisible(true), 100);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleJoinCommunity = () => {
    window.open('https://chat.whatsapp.com/Fgvqg2jnjyvEdoKadCycbQ?mode=ems_copy_t', '_blank');
    onClose();
  };

  const handleRemindLater = () => {
    onRemindLater();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className={`relative bg-white rounded-3xl shadow-2xl max-w-lg w-full mx-4 transform transition-all duration-300 ${
        isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
      }`}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 z-10"
        >
          <X className="h-5 w-5 text-gray-500" />
        </button>

        {/* Content */}
        <div className="p-8 text-center">
          {/* Header with Icon */}
          <div className="mx-auto w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
            <Users className="h-12 w-12 text-white" />
          </div>

          {/* Title */}
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
            Join Dhidib Community! 🎉
          </h2>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-6 text-lg">
            Connect with like-minded youth, access exclusive privileges, and be part of our private events and volunteering opportunities!
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-xl">
              <Star className="h-6 w-6 text-blue-500" />
              <span className="text-sm font-medium text-blue-700">Exclusive Events</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-xl">
              <Heart className="h-6 w-6 text-green-500" />
              <span className="text-sm font-medium text-green-700">Volunteering</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-xl">
              <Calendar className="h-6 w-6 text-purple-500" />
              <span className="text-sm font-medium text-purple-700">Private Events</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-xl">
              <Users className="h-6 w-6 text-orange-500" />
              <span className="text-sm font-medium text-orange-700">Community</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleJoinCommunity}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              <Users className="mr-2 h-5 w-5" />
              Join Community
            </Button>
            
            <Button 
              onClick={handleRemindLater}
              variant="outline"
              className="border-gray-300 text-gray-600 hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 flex items-center justify-center"
            >
              <Clock className="mr-2 h-5 w-5" />
              Remind Me Later
            </Button>
          </div>

          {/* Footer Note */}
          <div className="mt-6 text-xs text-gray-400">
            Join our WhatsApp community to stay connected! 💬
          </div>
        </div>
      </div>
    </div>
  );
}