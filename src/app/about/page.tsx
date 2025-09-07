import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Our Mission & Team | Dhidib Foundation",
  description: "Learn about Dhidib Foundation's mission to empower youth and build communities. Meet our dedicated team and discover our values of inclusivity, empowerment, innovation, and collaboration.",
};
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Heart, 
  Users, 
  Target, 
  Award,
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Zap,
  Lightbulb,
  Handshake
} from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Users,
      title: "Inclusivity",
      description: "We create welcoming spaces where diversity is celebrated and every voice is heard and valued."
    },
    {
      icon: Zap,
      title: "Empowerment",
      description: "We provide young people with the tools, confidence, and opportunities to reach their full potential."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace new ideas and creative solutions to address the evolving needs of youth and communities."
    },
    {
      icon: Handshake,
      title: "Collaboration",
      description: "We work together with youth, families, and communities to create lasting positive change."
    }
  ];

  const team = [
    {
      name: "Amir Mowlid",
      role: "Founder",
      description: "Visionary leader and founder of Dhidib Foundation, dedicated to empowering youth and building stronger communities through innovative programs and collaborative partnerships.",
      image: "/team/amir-mowlid.jpeg",
      bgColor: "from-blue-100 to-cyan-100",
      accentColor: "blue"
    },
    {
      name: "Abdirisak Arte",
      role: "Co-founder",
      description: "Co-founder bringing strategic vision and operational excellence to Dhidib Foundation, ensuring sustainable growth and meaningful impact in youth development.",
      image: "/team/abdirisak-arte.jpeg",
      bgColor: "from-green-100 to-emerald-100",
      accentColor: "green"
    },
    {
      name: "Abdifatah Faisal",
      role: "Board Member",
      description: "Board member providing strategic guidance and oversight, contributing expertise in governance and organizational development to advance our mission.",
      image: "/team/abdifatah-faisal.jpeg",
      bgColor: "from-purple-100 to-violet-100",
      accentColor: "purple"
    }
  ];

  const milestones = [
    {
      year: "July 2025",
      title: "Foundation Established",
      description: "Dhidib Foundation was founded on July 7, 2025, with a vision to empower youth and build stronger communities."
    },
    {
      year: "August 2025",
      title: "First Programs Launched",
      description: "Launched our initial Knowledge Sessions and Skill Exchanges programs to engage youth in learning and development."
    },
    {
      year: "September 2025",
      title: "Community Engagement",
      description: "Expanded our reach with Networking Nights and Foundation Forums, building stronger community connections."
    },
    {
      year: "October 2025",
      title: "Digital Programs",
      description: "Introduced Online Trainings and Youth Leadership programs, expanding our digital presence and impact."
    },
    {
      year: "November 2025",
      title: "Growing Impact",
      description: "Celebrated reaching 29+ youth participants across 6+ programs in 2+ communities."
    },
    {
      year: "December 2025",
      title: "Future Vision",
      description: "Looking ahead to continued growth and expanded programs in 2026 and beyond."
    }
  ];

  const achievements = [
    {
      number: "29+",
      label: "Youth Empowered",
      description: "Young people who have participated in our programs"
    },
    {
      number: "6+",
      label: "Programs Launched",
      description: "Comprehensive programs and initiatives"
    },
    {
      number: "2+",
      label: "Communities Reached",
      description: "Communities impacted by our work"
    },
    {
      number: "100%",
      label: "Youth-Led",
      description: "Organization led by and for young people"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-gray-900">
              About <span className="text-primary">Dhidib Foundation</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are a youth-focused organization dedicated to empowering young people with the skills, 
              opportunities, and support they need to create lasting change in their communities.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Mission */}
            <Card className="text-center group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Target className="h-10 w-10 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-2xl font-heading">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To empower young people with the skills, opportunities, and support they need to create lasting change in their communities.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="text-center group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-20 h-20 bg-green-100 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500 group-hover:scale-110 transition-all duration-300">
                  <Star className="h-10 w-10 text-green-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-2xl font-heading">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  A future where every youth has the tools and confidence to shape a brighter tomorrow.
                </p>
              </CardContent>
            </Card>

            {/* Values */}
            <Card className="text-center group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-20 h-20 bg-purple-100 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-500 group-hover:scale-110 transition-all duration-300">
                  <Heart className="h-10 w-10 text-purple-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-2xl font-heading">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Inclusivity, Empowerment, Innovation, and Collaboration guide everything we do. We believe in the power of youth to create positive change.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values Detail */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
              What We Stand For
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values shape every program and interaction, ensuring we create meaningful impact in the lives of young people.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <Icon className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">{value.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From our founding to today, here are the key milestones that have shaped our organization and impact.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-accent rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="group hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg flex-shrink-0 z-10"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our passionate and experienced team is dedicated to empowering youth and building stronger communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <CardContent className="p-0">
                  {/* Header with gradient background */}
                  <div className={`h-32 bg-gradient-to-br ${member.bgColor} flex items-center justify-center relative overflow-hidden`}>
                    {/* Background pattern */}
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2210%22%20cy%3D%2210%22%20r%3D%222%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
                    
                    {/* Avatar */}
                    <div className="relative z-10">
                      <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                        <Image 
                          src={member.image} 
                          alt={`${member.name} - ${member.role}`}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                    </div>
                    
                    {/* Floating elements */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <Award className="h-4 w-4 text-white" />
                    </div>
                    <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <Star className="h-3 w-3 text-white fill-current" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-4">{member.role}</p>
                    <p className="text-gray-600 leading-relaxed">{member.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to youth empowerment and the positive impact we&apos;ve made in our communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-primary mb-2">{achievement.number}</div>
                  <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">{achievement.label}</h3>
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
                Why Choose Dhidib Foundation?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We&apos;re more than just a youth organization – we&apos;re your partners in creating positive change and building stronger communities.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-semibold text-gray-900">Proven Impact</h3>
                    <p className="text-gray-600">Over 5,000 youth empowered and 200+ community projects completed.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-semibold text-gray-900">Inclusive Community</h3>
                    <p className="text-gray-600">Welcoming environment that celebrates diversity and ensures every voice matters.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-semibold text-gray-900">Innovation Focus</h3>
                    <p className="text-gray-600">Cutting-edge programs that adapt to the changing needs of youth and communities.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-semibold text-gray-900">Collaborative Approach</h3>
                    <p className="text-gray-600">Working together with youth, families, and communities for lasting change.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl flex items-center justify-center">
                <div className="text-center space-y-6 p-8">
                  <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center mx-auto">
                    <Globe className="h-16 w-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-semibold text-gray-800">Building Tomorrow Together</h3>
                  <p className="text-gray-600 max-w-sm">
                    We measure our success by the positive impact we create in young people&apos;s lives and communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
              Join Our Mission
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Be part of the change. Whether you&apos;re a young person looking to grow, a volunteer wanting to make a difference, 
              or a partner ready to collaborate, we welcome you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Link href="/get-involved">
                  <Users className="mr-2 h-5 w-5" />
                  Get Involved
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
                <Link href="/programs">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  View Programs
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
    </div>
  );
}