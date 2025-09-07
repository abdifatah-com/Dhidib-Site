import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Home,
  Users,
  BookOpen,
  Mail,
  ArrowRight,
  Search,
  MapPin,
  Heart
} from "lucide-react";

export default function NotFound() {
  const quickLinks = [
    {
      title: "Home",
      description: "Return to our homepage to explore our mission and programs",
      href: "/",
      icon: Home
    },
    {
      title: "Programs",
      description: "Discover our youth development and community programs",
      href: "/programs",
      icon: Users
    },
    {
      title: "Get Involved",
      description: "Learn how you can volunteer, donate, or partner with us",
      href: "/get-involved",
      icon: Heart
    },
    {
      title: "About Us",
      description: "Learn more about our mission, vision, and team",
      href: "/about",
      icon: BookOpen
    },
    {
      title: "Resources",
      description: "Access guides, reports, and learning materials",
      href: "/resources",
      icon: BookOpen
    },
    {
      title: "Contact",
      description: "Get in touch with our team for questions or support",
      href: "/contact",
      icon: Mail
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            {/* 404 Illustration */}
            <div className="relative mx-auto w-64 h-64">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                <div className="text-8xl font-bold text-primary/30">404</div>
              </div>
              <div className="absolute top-8 right-8 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center animate-bounce">
                <Search className="h-6 w-6 text-yellow-500" />
              </div>
              <div className="absolute bottom-8 left-8 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center animate-bounce" style={{animationDelay: '1s'}}>
                <MapPin className="h-4 w-4 text-green-500" />
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-gray-900">
                Page Not Found
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Oops! The page you&apos;re looking for doesn&apos;t exist. But don&apos;t worry - there are plenty of ways to explore our mission and get involved.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/">
                  <Home className="mr-2 h-5 w-5" />
                  Go Home
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link href="/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
              Explore Our Website
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are some popular pages to help you find what you&apos;re looking for.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quickLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Icon className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <CardTitle className="text-xl font-heading">{link.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {link.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Link href={link.href}>
                        Visit Page
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
              Need Help Finding Something?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              If you can&apos;t find what you&apos;re looking for, our team is here to help. 
              Contact us and we&apos;ll point you in the right direction.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Link href="/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Support
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
                <Link href="/get-involved">
                  <Users className="mr-2 h-5 w-5" />
                  Get Involved
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
              While You&apos;re Here...
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Did you know? Here are some interesting facts about Dhidib Foundation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
                <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">Youth Empowered</h3>
                <p className="text-gray-600 text-sm">Young people who have participated in our programs</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-primary mb-2">200+</div>
                <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">Community Projects</h3>
                <p className="text-gray-600 text-sm">Community service initiatives completed</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">Community Partners</h3>
                <p className="text-gray-600 text-sm">Organizations working with us for positive change</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Even though this page wasn&apos;t found, you can still join our mission to empower youth and build stronger communities.
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
          </div>
        </div>
      </section>
    </div>
  );
}