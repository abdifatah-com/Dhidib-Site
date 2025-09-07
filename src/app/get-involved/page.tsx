"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SuccessModal from "@/components/SuccessModal";
import { 
  Users,
  Heart,
  Handshake,
  DollarSign,
  ArrowRight,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Clock,
  Star,
  Target,
  Globe,
  Zap
} from "lucide-react";

export default function GetInvolvedPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    interests: "",
    availability: "",
    experience: "",
    message: ""
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('age', formData.age);
      formDataToSend.append('interests', formData.interests);
      formDataToSend.append('availability', formData.availability);
      formDataToSend.append('experience', formData.experience);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('form_type', 'volunteer_application');

      const response = await fetch('https://getform.io/f/bqoemxxb', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        setShowSuccessModal(true);
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          age: "",
          interests: "",
          availability: "",
          experience: "",
          message: ""
        });
      } else {
        alert("There was an error submitting your form. Please try again.");
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert("There was an error submitting your form. Please try again.");
    }
  };

  const volunteerOpportunities = [
    {
      icon: Users,
      title: "Youth Mentoring",
      description: "Guide and support young people in their personal and professional development.",
      timeCommitment: "2-4 hours/week",
      requirements: "Background check, training provided"
    },
    {
      icon: Heart,
      title: "Community Service",
      description: "Participate in local community projects and service initiatives.",
      timeCommitment: "Flexible",
      requirements: "No experience needed"
    },
    {
      icon: Handshake,
      title: "Program Support",
      description: "Help facilitate workshops, events, and program activities.",
      timeCommitment: "3-6 hours/week",
      requirements: "Relevant skills or willingness to learn"
    },
    {
      icon: Globe,
      title: "Outreach & Advocacy",
      description: "Spread awareness about our mission and engage with the community.",
      timeCommitment: "2-3 hours/week",
      requirements: "Good communication skills"
    }
  ];

  const partnershipTypes = [
    {
      icon: Target,
      title: "Corporate Partnerships",
      description: "Partner with us to create meaningful impact in your community through employee volunteering, sponsorships, and collaborative programs.",
      benefits: ["Employee engagement", "Community impact", "Brand alignment", "Tax benefits"]
    },
    {
      icon: Star,
      title: "Educational Partnerships",
      description: "Collaborate with schools, universities, and educational institutions to expand our reach and impact.",
      benefits: ["Student engagement", "Research opportunities", "Curriculum integration", "Mutual learning"]
    },
    {
      icon: Zap,
      title: "Community Organizations",
      description: "Join forces with other nonprofits and community groups to amplify our collective impact.",
      benefits: ["Resource sharing", "Expanded reach", "Collaborative programs", "Network building"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 leading-tight">
              Get <span className="text-primary">Involved</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join our community of changemakers. Whether you&apos;re looking to volunteer, partner with us, 
              or support our mission, there are many ways to make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
              Volunteer Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Make a meaningful impact in your community by volunteering with Dhidib Foundation. 
              We have opportunities for everyone, regardless of experience or availability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {volunteerOpportunities.map((opportunity, index) => {
              const Icon = opportunity.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Icon className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <CardTitle className="text-xl font-heading">{opportunity.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {opportunity.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{opportunity.timeCommitment}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4" />
                        <span>{opportunity.requirements}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Volunteer Form */}
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl font-heading text-center">Volunteer Application</CardTitle>
              <CardDescription className="text-center">
                Fill out the form below to express your interest in volunteering with us.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      onChange={handleInputChange}
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
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+252 634 833 630"
                    />
                  </div>
                  <div>
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
                      Age Range
                    </label>
                    <Input
                      id="age"
                      name="age"
                      type="text"
                      value={formData.age}
                      onChange={handleInputChange}
                      placeholder="e.g., 25-35"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="interests" className="block text-sm font-medium text-gray-700 mb-2">
                    Areas of Interest
                  </label>
                  <Input
                    id="interests"
                    name="interests"
                    type="text"
                    value={formData.interests}
                    onChange={handleInputChange}
                    placeholder="e.g., Youth mentoring, Community service, Event planning"
                  />
                </div>

                <div>
                  <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
                    Availability
                  </label>
                  <Input
                    id="availability"
                    name="availability"
                    type="text"
                    value={formData.availability}
                    onChange={handleInputChange}
                    placeholder="e.g., Weekends, Evenings, Flexible"
                  />
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                    Relevant Experience
                  </label>
                  <Textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    placeholder="Tell us about any relevant experience, skills, or background..."
                    rows={3}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Anything else you'd like us to know?"
                    rows={3}
                  />
                </div>

                <div className="text-center">
                  <Button type="submit" size="lg" className="px-8 py-6">
                    Submit Application
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
              Support Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your financial support helps us continue our programs and reach more young people in need. 
              Every contribution makes a difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500 group-hover:scale-110 transition-all duration-300">
                  <DollarSign className="h-8 w-8 text-green-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl font-heading">One-Time Donation</CardTitle>
                <CardDescription>
                  Make a single contribution to support our programs and initiatives.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline">
                  Donate Now
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 group-hover:scale-110 transition-all duration-300">
                  <Heart className="h-8 w-8 text-blue-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl font-heading">Monthly Support</CardTitle>
                <CardDescription>
                  Become a monthly donor and provide consistent support for our programs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline">
                  Set Up Monthly Giving
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500 group-hover:scale-110 transition-all duration-300">
                  <Target className="h-8 w-8 text-purple-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl font-heading">Sponsor a Program</CardTitle>
                <CardDescription>
                  Sponsor a specific program or initiative and see the direct impact of your support.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-heading font-bold text-gray-900">
                How Your Donation Helps
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">$50</div>
                  <p className="text-gray-600">Provides supplies for one youth workshop</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">$150</div>
                  <p className="text-gray-600">Sponsors one youth for a month of programs</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">$500</div>
                  <p className="text-gray-600">Funds a community service project</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us as a partner to create meaningful impact in your community. 
              We work with organizations of all sizes to amplify our collective reach.
            </p>
          </div>

          <div className="space-y-12">
            {partnershipTypes.map((partnership, index) => {
              const Icon = partnership.icon;
              return (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-2xl font-heading font-bold text-gray-900">
                          {partnership.title}
                        </h3>
                      </div>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {partnership.description}
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="text-lg font-heading font-semibold text-gray-900">Benefits:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {partnership.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button asChild>
                      <Link href="/contact">
                        Explore Partnership
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="aspect-square bg-gradient-to-br from-blue-100 via-white to-green-100 rounded-3xl overflow-hidden shadow-2xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-green-50/80"></div>
                      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-20"></div>
                      
                      <div className="relative z-10 h-full flex items-center justify-center">
                        <div className="text-center space-y-8 p-8">
                          <div className="relative">
                            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto shadow-xl">
                              <Icon className="h-16 w-16 text-primary" />
                            </div>
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center animate-pulse">
                              <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <h3 className="text-2xl font-heading font-bold text-gray-800">{partnership.title}</h3>
                            <p className="text-gray-600 max-w-sm leading-relaxed">
                              Join us in creating positive change through strategic partnerships.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Whether you want to volunteer, donate, or partner with us, we&apos;re here to help you get started. 
              Contact us today to learn more about how you can be part of our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Link href="/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Us
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
                <Link href="/programs">
                  <Users className="mr-2 h-5 w-5" />
                  View Programs
                </Link>
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-8 text-blue-100 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>+252 634 833 630</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>info@dhidib.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Hargeisa, Somalia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      <SuccessModal 
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        type="volunteer"
      />
    </div>
  );
}