import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Programs - Youth Development & Community Building | Dhidib Foundation",
  description: "Explore Dhidib Foundation's comprehensive programs including Knowledge Sessions, Skill Exchanges, and Community Projects designed to empower youth and strengthen communities.",
};
import { 
  GraduationCap,
  Lightbulb,
  BookOpen,
  Megaphone,
  ArrowRight,
  CheckCircle,
  Users,
  Clock,
  Target,
  Star,
  MessageCircle,
  Globe
} from "lucide-react";

export default function ProgramsPage() {
  const programs = [
    {
      id: "knowledge-sessions",
      icon: BookOpen,
      title: "Knowledge Sessions",
      description: "Interactive workshops and learning opportunities for skill development.",
      longDescription: "Our Knowledge Sessions provide interactive workshops, seminars, and training programs designed to equip young people with essential skills and knowledge for personal and professional growth.",
      features: [
        "Interactive workshops and seminars",
        "Skill-based training programs",
        "Peer learning opportunities",
        "Expert-led sessions",
        "Practical hands-on activities",
        "Certification programs"
      ],
      duration: "2-8 weeks",
      ageRange: "Ages 15-30",
      participants: "100+ participants",
      bgColor: "from-blue-100 to-cyan-100"
    },
    {
      id: "skill-exchanges",
      icon: Users,
      title: "Skill Exchanges",
      description: "Peer-to-peer learning and skill sharing opportunities.",
      longDescription: "Our Skill Exchanges program facilitates peer-to-peer learning, mentoring relationships, and skill sharing among young people, creating a supportive community of learners and teachers.",
      features: [
        "Peer-to-peer mentoring",
        "Skill sharing workshops",
        "Cross-cultural learning",
        "Community knowledge transfer",
        "Collaborative projects",
        "Leadership development"
      ],
      duration: "Ongoing",
      ageRange: "Ages 16-30",
      participants: "80+ active members",
      bgColor: "from-green-100 to-emerald-100"
    },
    {
      id: "networking-nights",
      icon: Globe,
      title: "Networking Nights",
      description: "Connect with young professionals and build meaningful relationships.",
      longDescription: "Networking Nights provide opportunities for young people to connect with professionals, build meaningful relationships, and explore career opportunities in a supportive environment.",
      features: [
        "Professional networking events",
        "Career guidance sessions",
        "Industry connections",
        "Mentorship opportunities",
        "Job placement support",
        "Professional development"
      ],
      duration: "Monthly events",
      ageRange: "Ages 18-30",
      participants: "50+ attendees per event",
      bgColor: "from-purple-100 to-pink-100"
    },
    {
      id: "foundation-forums",
      icon: Megaphone,
      title: "Foundation Forums",
      description: "Platform for discussing solutions and community challenges.",
      longDescription: "Foundation Forums create a platform for young people to discuss community challenges, brainstorm solutions, and engage in meaningful dialogue about issues that matter to them.",
      features: [
        "Community problem-solving discussions",
        "Solution-oriented workshops",
        "Policy dialogue sessions",
        "Community engagement",
        "Advocacy training",
        "Social impact projects"
      ],
      duration: "Bi-weekly sessions",
      ageRange: "Ages 16-30",
      participants: "60+ active participants",
      bgColor: "from-yellow-100 to-orange-100"
    },
    {
      id: "online-trainings",
      icon: Lightbulb,
      title: "Online Trainings",
      description: "Digital learning resources and e-learning opportunities.",
      longDescription: "Our Online Trainings program provides accessible digital learning resources, e-learning courses, and online educational opportunities for young people who prefer flexible learning schedules.",
      features: [
        "E-learning courses and modules",
        "Digital skill development",
        "Online mentorship programs",
        "Virtual workshops and seminars",
        "Self-paced learning options",
        "Digital certification programs"
      ],
      duration: "Flexible scheduling",
      ageRange: "Ages 15-30",
      participants: "200+ online learners",
      bgColor: "from-indigo-100 to-blue-100"
    },
    {
      id: "youth-leadership",
      icon: GraduationCap,
      title: "Youth Leadership",
      description: "Developing future community leaders through comprehensive leadership training.",
      longDescription: "Our Youth Leadership program focuses on developing the next generation of community leaders through comprehensive training, mentorship, and hands-on leadership opportunities.",
      features: [
        "Leadership development training",
        "Community project management",
        "Mentorship programs",
        "Public speaking and communication",
        "Team building and collaboration",
        "Social impact initiatives"
      ],
      duration: "6-12 months",
      ageRange: "Ages 18-30",
      participants: "30+ leadership fellows",
      bgColor: "from-red-100 to-rose-100"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 leading-tight">
              Our <span className="text-primary">Programs</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Comprehensive programs designed to empower youth and strengthen communities through skill development, 
              education, and meaningful service opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/get-involved">
                  Join a Program
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <div key={program.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''} px-4 lg:px-0`}>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 bg-gradient-to-br ${program.bgColor} rounded-2xl flex items-center justify-center`}>
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900">
                          {program.title}
                        </h2>
                      </div>
                      <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                        {program.longDescription}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-5 w-5 text-primary" />
                        <span className="text-sm text-gray-600">{program.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-5 w-5 text-primary" />
                        <span className="text-sm text-gray-600">{program.ageRange}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Target className="h-5 w-5 text-primary" />
                        <span className="text-sm text-gray-600">{program.participants}</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-heading font-semibold text-gray-900">Program Features:</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {program.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button asChild>
                      <Link href="/get-involved">
                        Join This Program
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className={`aspect-square bg-gradient-to-br ${program.bgColor} rounded-3xl overflow-hidden shadow-2xl`}>
                      {/* Background Image */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-transparent"></div>
                      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-30"></div>
                      
                      {/* Main Content */}
                      <div className="relative z-10 h-full flex items-center justify-center">
                        <div className="text-center space-y-8 p-8">
                          {/* Program Icon */}
                          <div className="relative">
                            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto shadow-xl">
                              <Icon className="h-16 w-16 text-primary" />
                            </div>
                            {/* Floating elements */}
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center animate-pulse">
                              <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            </div>
                            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center animate-pulse">
                              <CheckCircle className="h-3 w-3 text-green-500" />
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <h3 className="text-2xl font-heading font-bold text-gray-800">{program.title}</h3>
                            <p className="text-gray-600 max-w-sm leading-relaxed">
                              {program.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                      <Star className="h-12 w-12 text-yellow-500 fill-current" />
                    </div>
                    <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{animationDelay: '1s'}}>
                      <Users className="h-10 w-10 text-green-500" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white">
              Ready to Get Started?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed px-4">
              Join one of our programs and start your journey of growth, learning, and community impact. 
              Our team is here to help you find the perfect program for your interests and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Link href="/get-involved">
                  <Users className="mr-2 h-5 w-5" />
                  Join a Program
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
                <Link href="/contact">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Ask Questions
                </Link>
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-blue-100 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>No Application Fee</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Flexible Scheduling</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Ongoing Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}