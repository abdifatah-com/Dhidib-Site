"use client";

import { useEffect } from "react";
import { CheckCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  type?: "volunteer" | "contact";
}

export default function SuccessModal({ 
  isOpen, 
  onClose, 
  title, 
  message,
  type = "contact"
}: SuccessModalProps) {
  useEffect(() => {
    if (isOpen) {
      // Auto-close after 4 seconds
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const defaultContent = {
    volunteer: {
      title: "Application Submitted Successfully! 🎉",
      message: "Thank you for your interest in volunteering with Dhidib Foundation! We'll review your application and get back to you within 2-3 business days."
    },
    contact: {
      title: "Message Sent Successfully! ✨",
      message: "Thank you for reaching out! We've received your message and will respond to you as soon as possible."
    }
  };

  const content = defaultContent[type];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
        >
          <X className="h-5 w-5 text-gray-500" />
        </button>

        {/* Content */}
        <div className="p-8 text-center">
          {/* Success Icon */}
          <div className="mx-auto w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
            <CheckCircle className="h-12 w-12 text-white" />
          </div>

          {/* Title */}
          <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
            {title || content.title}
          </h3>

          {/* Message */}
          <p className="text-gray-600 leading-relaxed mb-6">
            {message || content.message}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              onClick={onClose}
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Got it!
            </Button>
            
            {type === "volunteer" && (
              <Button 
                variant="outline"
                onClick={() => {
                  onClose();
                  // Scroll to programs section
                  const programsSection = document.getElementById('programs');
                  if (programsSection) {
                    programsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-xl font-medium transition-all duration-200"
              >
                View Programs
              </Button>
            )}
          </div>

          {/* Auto-close indicator */}
          <div className="mt-6 text-xs text-gray-400">
            This message will auto-close in a few seconds
          </div>
        </div>
      </div>
    </div>
  );
}