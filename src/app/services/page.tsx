import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services - Professional Support Services | Dhidib Foundation",
  description: "Discover Dhidib Foundation's professional support services including personal care, community participation, and support coordination to help individuals thrive.",
};
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  User,
  Users2,
  ClipboardList,
  Home,
  Stethoscope,
  CheckCircle,
  ArrowRight,
  Phone,
  Clock,
  Heart,
  Shield,
  Star
} from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "personal-care",
      icon: User,
      title: "Personal Care",
      description: "Compassionate assistance with daily living activities to help you maintain independence and dignity.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: [
        "Personal hygiene and grooming assistance",
        "Dressing and undressing support",
        "Mobility assistance and transfers",
        "Medication reminders and assistance",
        "Meal preparation and feeding support",
        "Continence management"
      ],
      pricing: "From $45/hour",
      availability: "24/7 available"
    },
    {
      id: "community-participation",
      icon: Users2,
      title: "Community Participation",
      description: "Support to engage with your community and participate in social, recreational, and educational activities.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: [
        "Social outings and community events",
        "Recreational activities and hobbies",
        "Educational and skill development programs",
        "Transportation to community activities",
        "Group activities and peer support",
        "Cultural and religious participation"
      ],
      pricing: "From $35/hour",
      availability: "Flexible scheduling"
    },
    {
      id: "support-coordination",
      icon: ClipboardList,
      title: "Support Coordination",
      description: "Help navigating your NDIS plan and connecting with the right services to achieve your goals.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: [
        "NDIS plan review and optimization",
        "Service provider connections",
        "Goal setting and planning",
        "Budget management and tracking",
        "Regular plan monitoring",
        "Advocacy and support"
      ],
      pricing: "From $55/hour",
      availability: "Business hours"
    },
    {
      id: "household-tasks",
      icon: Home,
      title: "Household Tasks",
      description: "Assistance with cleaning, meal preparation, and home maintenance to keep your living space comfortable.",
      image: "https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: [
        "General house cleaning",
        "Meal planning and preparation",
        "Grocery shopping assistance",
        "Laundry and ironing",
        "Home maintenance tasks",
        "Garden and yard care"
      ],
      pricing: "From $40/hour",
      availability: "Flexible scheduling"
    },
    {
      id: "allied-health",
      icon: Stethoscope,
      title: "Allied Health & Therapy",
      description: "Professional therapy services including physiotherapy, occupational therapy, speech therapy, and psychology.",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: [
        "Physiotherapy and exercise programs",
        "Occupational therapy assessments",
        "Speech and language therapy",
        "Psychology and counseling services",
        "Dietitian and nutrition support",
        "Specialized equipment assessments"
      ],
      pricing: "From $65/hour",
      availability: "By appointment"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "We meet with you to understand your needs, goals, and preferences.",
      icon: Heart
    },
    {
      step: "2",
      title: "Service Planning",
      description: "We develop a personalized service plan tailored to your NDIS plan and goals.",
      icon: ClipboardList
    },
    {
      step: "3",
      title: "Service Delivery",
      description: "Our qualified team provides the services according to your plan.",
      icon: User
    },
    {
      step: "4",
      title: "Review & Adjust",
      description: "We regularly review your progress and adjust services as needed.",
      icon: Star
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "NDIS Registered",
      description: "Fully registered provider with comprehensive insurance and quality assurance."
    },
    {
      icon: Users2,
      title: "Qualified Team",
      description: "Experienced professionals with relevant qualifications and ongoing training."
    },
    {
      icon: Heart,
      title: "Person-Centered",
      description: "Services tailored to your individual needs, preferences, and goals."
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Services available 24/7 with flexible scheduling to meet your needs."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive NDIS support services designed to help you achieve your goals, 
              maintain independence, and live your best life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link href="/resources">Learn About NDIS</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Service Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of NDIS support services to meet your diverse needs and goals.
            </p>
          </div>
          
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={service.id} id={service.id} className="scroll-mt-20">
                  <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <CardContent className="p-0">
                      {/* Service Image Header */}
                      <div className="relative h-48 bg-gradient-to-r from-blue-50 to-green-50 overflow-hidden">
                        <img 
                          src={service.image} 
                          alt={`${service.title} service`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        
                        {/* Service Icon Overlay */}
                        <div className="absolute top-4 left-4 w-16 h-16 bg-white/90 rounded-2xl flex items-center justify-center shadow-lg">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                        
                        {/* Pricing Badge */}
                        <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                          {service.pricing}
                        </div>
                      </div>
                      
                      {/* Service Content */}
                      <div className="p-8">
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-lg mb-4">
                              {service.description}
                            </p>
                            <div className="flex items-center space-x-2 text-sm text-gray-500">
                              <Clock className="h-4 w-4" />
                              <span>{service.availability}</span>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">What's Included:</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {service.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-start space-x-3">
                                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-600">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              How Our Services Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our simple, transparent process ensures you receive the right support at the right time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                      {step.step}
                    </div>
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Icon className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We&apos;re committed to providing the highest quality disability support services with a focus on your wellbeing and independence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Icon className="h-10 w-10 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Service Areas
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We provide services across the greater Sydney metropolitan area, ensuring you have access to quality support close to home.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Greater Sydney Area</h3>
                    <p className="text-gray-600">Services available across all Sydney metropolitan regions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Flexible Travel</h3>
                    <p className="text-gray-600">We can travel to your location for convenience</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Remote Support</h3>
                    <p className="text-gray-600">Some services available via phone or video call</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl flex items-center justify-center">
                <div className="text-center space-y-6 p-8">
                  <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center mx-auto">
                    <Home className="h-16 w-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800">Convenient Service Delivery</h3>
                  <p className="text-gray-600 max-w-sm">
                    We come to you, whether at home, in the community, or at our facilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Contact us today to discuss your needs and discover how our services can help you achieve your goals. 
              We offer a free consultation to help you get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us Today
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
                <Link href="/about">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Learn About Us
                </Link>
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-8 text-blue-100 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>No Obligation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Quick Response</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}