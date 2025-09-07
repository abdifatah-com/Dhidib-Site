"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import dynamic from "next/dynamic";

// Dynamic import for SuccessModal to reduce initial bundle size
const SuccessModal = dynamic(() => import("@/components/SuccessModal"), {
  ssr: false,
});
import { 
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Users,
  Heart
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('form_type', 'contact_form');

      const response = await fetch('https://getform.io/f/bqoemxxb', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        setShowSuccessModal(true);
        // Reset form after modal closes
        setTimeout(() => {
          setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        }, 100);
      } else {
        alert("There was an error submitting your message. Please try again.");
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert("There was an error submitting your message. Please try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Ready to join our community or learn more about our programs? Contact us today to start your journey with Dhidib Foundation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-heading">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+252 634 833 630"
                          />
                        </div>
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                            Subject *
                          </label>
                          <Input
                            id="subject"
                            name="subject"
                            type="text"
                            required
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="What's this about?"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your interests, questions, or how you'd like to get involved..."
                          rows={6}
                        />
                      </div>
                      
                      <Button type="submit" className="w-full" size="lg">
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </Button>
                    </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-base sm:text-lg text-gray-600 mb-8">
                  We&apos;re here to help you get involved and make a difference. Reach out to us through any of the channels below.
                </p>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">Phone</h3>
                        <p className="text-gray-600 mb-2">+252 634 833 630</p>
                        <p className="text-sm text-gray-500">Monday - Friday: 9:00 AM - 5:00 PM</p>
                        <p className="text-sm text-gray-500">Saturday: 10:00 AM - 2:00 PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">Email</h3>
                        <p className="text-gray-600 mb-2">info@dhidib.org</p>
                        <p className="text-sm text-gray-500">We respond within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">Office Address</h3>
                        <p className="text-gray-600 mb-2">
                          Hargeisa Jigjiga-yar<br />
                          near Papa Rotti<br />
                          Hargeisa, Somalia
                        </p>
                        <p className="text-sm text-gray-500">By appointment only</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">Business Hours</h3>
                        <div className="text-gray-600 space-y-1">
                          <p>Saturday - Thursday: 8:00 AM - 5:00 PM</p>
                          <p>Friday: Closed</p>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">Program activities may have different schedules</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900">
              Find Us
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Visit our office or get directions to our location
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-blue-100 via-white to-green-100 flex items-center justify-center relative overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-green-50/80"></div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-30"></div>
              
              {/* Map Elements */}
              <div className="absolute top-8 left-8 w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center animate-pulse">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <div className="absolute top-16 right-12 w-8 h-8 bg-green-200 rounded-full flex items-center justify-center animate-pulse" style={{animationDelay: '1s'}}>
                <Users className="h-4 w-4 text-green-600" />
              </div>
              <div className="absolute bottom-12 left-16 w-6 h-6 bg-yellow-200 rounded-full flex items-center justify-center animate-pulse" style={{animationDelay: '2s'}}>
                <Heart className="h-3 w-3 text-yellow-600" />
              </div>
              
              {/* Main Content */}
              <div className="relative z-10 text-center space-y-6">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto shadow-xl">
                    <MapPin className="h-12 w-12 text-white" />
                  </div>
                  {/* Floating elements */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce">
                    <Users className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{animationDelay: '1s'}}>
                    <Heart className="h-3 w-3 text-red-500" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-gray-800">Find Our Office</h3>
                  <p className="text-gray-600 max-w-md leading-relaxed px-4">
                    Our office is located in Hargeisa, Somalia, in the Jigjiga-yar area near Papa Rotti, easily accessible and welcoming to all community members.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="shadow-lg">
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                      <MapPin className="mr-2 h-4 w-4" />
                      Get Directions
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="shadow-lg">
                    <a href="tel:+252634833630">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Quick answers to common questions about our programs and how to get involved
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-heading">How can I get involved with Dhidib Foundation?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  There are many ways to get involved! You can volunteer, participate in our programs, become a community partner, or support us through donations. Visit our Get Involved page to learn more.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-heading">What age groups do you serve?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our programs serve youth ages 10-25, with specific programs tailored to different age groups. We also welcome volunteers and supporters of all ages.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-heading">Do I need experience to volunteer?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  No experience is required! We provide training and support for all volunteers. We value enthusiasm, commitment, and a desire to make a difference more than prior experience.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-heading">How can I start a program in my community?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We&apos;d love to help you bring our programs to your community! Contact us to discuss partnership opportunities and how we can work together to serve youth in your area.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed px-4">
              Join our community of changemakers. Whether you want to participate in programs, volunteer, 
                or support our mission, we&apos;re here to help you get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <a href="tel:+252634833630">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us Now
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
                <a href="mailto:info@dhidib.org">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </a>
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-blue-100 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Open to All</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Flexible Commitment</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Make Real Impact</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      <SuccessModal 
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        type="contact"
      />
    </div>
  );
}