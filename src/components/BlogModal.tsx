"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  X, 
  Calendar, 
  Clock, 
  User, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Share2,
  Heart
} from "lucide-react";

interface BlogModalProps {
  isOpen: boolean;
  onClose: () => void;
  blog: {
    title: string;
    description: string;
    category: string;
    readTime: string;
    date: string;
    icon: any;
    content: string;
    image: string;
  } | null;
}

export default function BlogModal({ isOpen, onClose, blog }: BlogModalProps) {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !blog) return null;

  const Icon = blog.icon;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: blog.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      // You could add a toast notification here
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-4xl max-h-[90vh] mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                {blog.category}
              </span>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="hover:bg-gray-100"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-140px)]">
          <div className="px-6 py-8">
            {/* Blog Header */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4 leading-tight">
                {blog.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>Abdifatah, Board Member @ Dhidib</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{blog.readTime}</span>
                </div>
              </div>

              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                {blog.description}
              </p>

              {/* Blog Image */}
              <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Blog Content */}
            <div className="prose prose-lg max-w-none">
              <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                {blog.content}
              </div>
            </div>

            {/* Author Section */}
            <Card className="mt-12 bg-gradient-to-r from-primary/5 to-blue-50 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                    A
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-heading font-semibold text-gray-900 mb-1">
                      Abdifatah
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      Board Member @ Dhidib Foundation
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Passionate about youth empowerment and community development. 
                      Dedicated to creating opportunities for young people to thrive 
                      and make a positive impact in their communities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media Links */}
            <div className="mt-8 p-6 bg-gray-50 rounded-xl">
              <h4 className="text-lg font-heading font-semibold text-gray-900 mb-4">
                Connect with Dhidib Foundation
              </h4>
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center space-x-2 hover:bg-blue-50 hover:border-blue-300"
                  onClick={() => window.open('https://facebook.com/dhidibfoundation', '_blank')}
                >
                  <Facebook className="h-4 w-4 text-blue-600" />
                  <span>Facebook</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center space-x-2 hover:bg-blue-50 hover:border-blue-300"
                  onClick={() => window.open('https://twitter.com/dhidibfoundation', '_blank')}
                >
                  <Twitter className="h-4 w-4 text-blue-400" />
                  <span>Twitter</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center space-x-2 hover:bg-pink-50 hover:border-pink-300"
                  onClick={() => window.open('https://instagram.com/dhidibfoundation', '_blank')}
                >
                  <Instagram className="h-4 w-4 text-pink-600" />
                  <span>Instagram</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center space-x-2 hover:bg-blue-50 hover:border-blue-300"
                  onClick={() => window.open('https://linkedin.com/company/dhidibfoundation', '_blank')}
                >
                  <Linkedin className="h-4 w-4 text-blue-700" />
                  <span>LinkedIn</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsLiked(!isLiked)}
              className={`flex items-center space-x-2 ${
                isLiked ? 'text-red-500' : 'text-gray-600'
              }`}
            >
              <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
              <span>{isLiked ? 'Liked' : 'Like'}</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleShare}
              className="flex items-center space-x-2 text-gray-600"
            >
              <Share2 className="h-4 w-4" />
              <span>Share</span>
            </Button>
          </div>
          <Button onClick={onClose} className="bg-primary hover:bg-primary/90">
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}