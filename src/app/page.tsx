"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import dynamic from "next/dynamic";
import { useCommunityPopup } from "@/hooks/useCommunityPopup";

// Dynamic import for CommunityPopup to reduce initial bundle size
const CommunityPopup = dynamic(() => import("@/components/CommunityPopup"), {
  ssr: false,
});
import { 
  Heart, 
  Users, 
  Star, 
  ArrowRight,
  CheckCircle,
  MessageCircle,
  Lightbulb,
  HandHeart,
  BookOpen,
  Megaphone,
  GraduationCap,
  Target,
  Globe,
  Zap
} from "lucide-react";

export default function HomePage() {
  const { isOpen, closePopup, remindLater } = useCommunityPopup();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Amina Hassan",
      role: "Youth Participant",
      content: "Dhidib Foundation gave me the confidence and skills I needed to pursue my dreams. The mentorship program changed my life completely.",
      rating: 5,
      bgColor: "from-blue-100 to-cyan-100"
    },
    {
      name: "Mohamed Ali",
      role: "Volunteer",
      content: "Volunteering with Dhidib has been incredibly rewarding. Seeing the impact we make in young people's lives is amazing.",
      rating: 5,
      bgColor: "from-green-100 to-emerald-100"
    },
    {
      name: "Fatima Ahmed",
      role: "Community Partner",
      content: "The collaboration with Dhidib Foundation has brought positive change to our neighborhood. Their programs are transformative.",
      rating: 5,
      bgColor: "from-yellow-100 to-orange-100"
    },
    {
      name: "Omar Jama",
      role: "Youth Participant",
      content: "Through Dhidib's programs, I learned valuable leadership skills and connected with amazing mentors who guided my career path.",
      rating: 5,
      bgColor: "from-purple-100 to-violet-100"
    },
    {
      name: "Khadija Mohamed",
      role: "Volunteer",
      content: "Being part of Dhidib Foundation's volunteer team has been life-changing. We're building a better future for our community together.",
      rating: 5,
      bgColor: "from-pink-100 to-rose-100"
    },
    {
      name: "Ahmed Ibrahim",
      role: "Community Partner",
      content: "Dhidib Foundation's innovative approach to youth development has transformed our community. Their impact is truly remarkable.",
      rating: 5,
      bgColor: "from-indigo-100 to-blue-100"
    },
    {
      name: "Halima Abdi",
      role: "Youth Participant",
      content: "The digital skills training at Dhidib opened doors I never knew existed. Now I'm pursuing my passion in technology.",
      rating: 5,
      bgColor: "from-teal-100 to-cyan-100"
    },
    {
      name: "Yusuf Hassan",
      role: "Volunteer",
      content: "Every day with Dhidib Foundation brings new opportunities to make a difference. The youth we work with inspire us all.",
      rating: 5,
      bgColor: "from-emerald-100 to-green-100"
    }
  ];

  // Auto-slide testimonials every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const programs = [
    {
      icon: GraduationCap,
      title: "Youth Skills Development",
      description: "Empowering young people with essential life skills, leadership training, and career development opportunities.",
      href: "/programs#youth-skills"
    },
    {
      icon: Lightbulb,
      title: "Digital & Creative Training",
      description: "Modern technology skills, creative arts, and digital literacy programs for the next generation.",
      href: "/programs#digital-creative"
    },
    {
      icon: HandHeart,
      title: "Volunteering & Community Service",
      description: "Building stronger communities through meaningful volunteer opportunities and service projects.",
      href: "/programs#volunteering"
    },
    {
      icon: BookOpen,
      title: "Educational Support",
      description: "Academic assistance, tutoring, and educational resources to help youth succeed in their studies.",
      href: "/programs#educational-support"
    },
    {
      icon: Megaphone,
      title: "Advocacy & Awareness Campaigns",
      description: "Raising awareness about important issues and empowering youth to become advocates for change.",
      href: "/programs#advocacy"
    }
  ];

  const whyDhidib = [
    {
      icon: Target,
      title: "Proven Impact",
      description: "29+ youth empowered, 6+ programs launched, and 2+ communities reached with measurable results."
    },
    {
      icon: Users,
      title: "Inclusive Community",
      description: "Welcoming environment that celebrates diversity and ensures every voice is heard and valued."
    },
    {
      icon: Zap,
      title: "Innovation Focus",
      description: "Creative solutions for modern challenges with continuous learning and development."
    },
    {
      icon: Globe,
      title: "Collaborative Approach",
      description: "Building strong support networks and working together to create lasting positive change."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 leading-tight">
                  Empowering Youth,{" "}
                  <span className="text-primary">Building Communities</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                  We provide young people with the skills, opportunities, and support they need to create lasting change in their communities. 
                  Join us in building a brighter future together.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8 py-6">
                  <Link href="/get-involved">
                    Join Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>29+ Youth Empowered</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>6+ Programs Launched</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>2+ Communities Reached</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 via-white to-green-100 rounded-3xl overflow-hidden shadow-2xl">
                {/* Background Image */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-green-50/80"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-20"></div>
                
                {/* Main Content */}
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center space-y-8 p-8">
                    {/* Hero Image */}
                    <div className="relative">
                      <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center mx-auto shadow-xl overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
                          alt="Diverse group of young people working together"
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                      {/* Floating elements */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center animate-pulse">
                        <Heart className="h-4 w-4 text-yellow-500 fill-current" />
                      </div>
                      <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center animate-pulse">
                        <Users className="h-3 w-3 text-green-500" />
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-3xl font-heading font-bold text-gray-800">Building Together</h3>
                      <p className="text-gray-600 max-w-sm leading-relaxed">
                        Our diverse community of youth, volunteers, and partners working together to create positive change.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-28 h-28 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Star className="h-14 w-14 text-yellow-500 fill-current" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{animationDelay: '1s'}}>
                <Globe className="h-12 w-12 text-green-500" />
              </div>
              
              {/* Additional floating elements */}
              <div className="absolute top-1/4 -left-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center animate-pulse">
                <CheckCircle className="h-8 w-8 text-blue-500" />
              </div>
              <div className="absolute bottom-1/4 -right-4 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center animate-pulse" style={{animationDelay: '2s'}}>
                <Zap className="h-6 w-6 text-green-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Teaser Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900">
                  Our Mission
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                  To empower young people with the skills, opportunities, and support they need to create lasting change in their communities.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Youth-Centered Approach</h3>
                    <p className="text-gray-600">Every program is designed with young people&apos;s needs and aspirations at the center.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Community Impact</h3>
                    <p className="text-gray-600">Building stronger communities through collaborative action and shared purpose.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Inclusive Environment</h3>
                    <p className="text-gray-600">Welcoming space where diversity is celebrated and every voice matters.</p>
                  </div>
                </div>
              </div>
              <Button asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-green-100 via-emerald-50 to-blue-100 rounded-3xl overflow-hidden shadow-2xl">
                {/* Background Image */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/80 to-blue-50/80"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-20"></div>
                
                {/* Main Content */}
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center space-y-8 p-8">
                    {/* Mission Image */}
                    <div className="relative">
                      <div className="w-36 h-36 bg-white rounded-full flex items-center justify-center mx-auto shadow-xl overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
                          alt="Young people working together on community project"
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                      {/* Floating elements */}
                      <div className="absolute -top-3 -right-3 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center animate-pulse">
                        <Heart className="h-5 w-5 text-blue-500 fill-current" />
                      </div>
                      <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center animate-pulse" style={{animationDelay: '1s'}}>
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-3xl font-heading font-bold text-gray-800">Our Vision</h3>
                      <p className="text-gray-600 max-w-sm leading-relaxed">
                        A future where every youth has the tools and confidence to shape a brighter tomorrow.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-8 -right-8 w-20 h-20 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Target className="h-10 w-10 text-blue-500" />
              </div>
              <div className="absolute bottom-8 -left-8 w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{animationDelay: '1.5s'}}>
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900">
              Our Programs
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Comprehensive programs designed to empower youth and strengthen communities through skill development, education, and service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Icon className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <CardTitle className="text-xl font-heading">{program.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {program.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Link href={program.href}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/programs">View All Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Dhidib */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
              Why Dhidib Foundation?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We&apos;re committed to creating meaningful impact through proven programs, inclusive communities, and innovative approaches.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyDhidib.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center space-y-4 group">
                  <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-10 w-10 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
              Stories of Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from the youth, volunteers, and community partners who are part of our journey.
            </p>
          </div>
          
          {/* Auto-sliding testimonials */}
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
            {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 p-12">
                  <div className="max-w-4xl mx-auto text-center">
                  {/* Avatar */}
                    <div className="flex justify-center mb-8">
                      <div className={`w-24 h-24 bg-gradient-to-br ${testimonial.bgColor} rounded-full flex items-center justify-center shadow-lg`}>
                        <div className="text-3xl font-bold text-white">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </div>
                    </div>
                    </div>
                    
                    {/* Name and Role */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                        {testimonial.name}
                      </h3>
                      <p className="text-lg text-gray-500">{testimonial.role}</p>
                  </div>
                  
                  {/* Rating */}
                    <div className="flex justify-center items-center space-x-1 mb-8">
                    {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                    <blockquote className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                    "{testimonial.content}"
                  </blockquote>
                  
                  {/* Quote Icon */}
                    <div className="mt-8 text-primary opacity-20">
                      <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 pb-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-primary scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
              Be Part of the Change
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Join our community of changemakers. Whether you&apos;re a young person looking to grow, a volunteer wanting to make a difference, 
              or a partner ready to collaborate, we welcome you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Link href="/get-involved">
                  <Users className="mr-2 h-5 w-5" />
                  Join Our Community
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
                <Link href="/contact">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Get In Touch
                </Link>
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-8 text-blue-100 text-sm">
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

      {/* Community Popup */}
      <CommunityPopup 
        isOpen={isOpen}
        onClose={closePopup}
        onRemindLater={remindLater}
      />
    </div>
  );
}