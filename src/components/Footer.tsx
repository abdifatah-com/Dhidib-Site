import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Phone, 
  Mail, 
  MapPin,
  Clock,
  Heart
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Get Involved", href: "/get-involved" },
    { name: "Contact", href: "/contact" },
  ];

  const programs = [
    { name: "Youth Skills Development", href: "/programs#youth-skills" },
    { name: "Digital & Creative Training", href: "/programs#digital-creative" },
    { name: "Volunteering & Community Service", href: "/programs#volunteering" },
    { name: "Educational Support", href: "/programs#educational-support" },
    { name: "Advocacy & Awareness Campaigns", href: "/programs#advocacy" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/dhidibfoundation" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/dhidib_foun?igsh=MW9zZjc1c3Fxb2Y0MA%3D%3D&utm_source=qr" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/dhidib-foundation" },
    { name: "Email", icon: Mail, href: "mailto:info@dhidib.org" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src="/dhl.Jpg" 
                  alt="Dhidib Foundation Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold">Dhidib Foundation</h3>
                <p className="text-sm text-gray-400">Empowering Youth</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Empowering young people with the skills, opportunities, and support they need to create lasting change in their communities. 
              Building a brighter future together.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={social.name}
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-white hover:bg-gray-800"
                    asChild
                  >
                    <a href={social.href} aria-label={social.name}>
                      <Icon className="h-5 w-5" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Programs</h4>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.name}>
                  <Link
                    href={program.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+252 634 833 630</p>
                  <p className="text-sm text-gray-400">Available Sat-Thu</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">info@dhidib.org</p>
                  <p className="text-sm text-gray-400">We respond within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Hargeisa Jigjiga-yar</p>
                  <p className="text-gray-300">near Papa Rotti, Hargeisa, Somalia</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Sat-Thu: 8:00 AM - 5:00 PM</p>
                  <p className="text-gray-300">Fri: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} Dhidib Foundation. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Empowering Youth, Building Communities
              </p>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>for our community</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}