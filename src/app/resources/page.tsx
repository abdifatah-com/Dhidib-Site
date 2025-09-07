"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import dynamic from "next/dynamic";

// Dynamic import for BlogModal to reduce initial bundle size
const BlogModal = dynamic(() => import("@/components/BlogModal"), {
  ssr: false,
});
import { 
  ExternalLink,
  Download,
  ArrowRight,
  CheckCircle,
  Users,
  HelpCircle,
  Lightbulb,
  Target,
  Globe,
  Heart,
  Star
} from "lucide-react";

export default function Resources() {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBlogClick = (blog: unknown) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBlog(null);
  };
  const guides = [
    {
      title: "Youth Leadership Development Guide",
      description: "Learn essential leadership skills and how to become an effective leader in your community.",
      icon: Users,
      type: "Guide",
      length: "8 min read",
      category: "Leadership",
      pdfUrl: "/pdfs/youth-leadership-development-guide.pdf"
    },
    {
      title: "Digital Skills for the Modern World",
      description: "Master essential digital skills including social media, online safety, and digital creativity.",
      icon: Lightbulb,
      type: "Guide",
      length: "10 min read",
      category: "Technology",
      pdfUrl: "/pdfs/digital-skills-modern-world.pdf"
    },
    {
      title: "Community Service Project Planning",
      description: "Step-by-step guide to planning and executing successful community service projects.",
      icon: Target,
      type: "Guide",
      length: "12 min read",
      category: "Community",
      pdfUrl: "/pdfs/community-service-project-planning.pdf"
    },
    {
      title: "Building Inclusive Communities",
      description: "Learn how to create welcoming spaces that celebrate diversity and inclusion.",
      icon: Heart,
      type: "Guide",
      length: "6 min read",
      category: "Inclusion",
      pdfUrl: "/pdfs/building-inclusive-communities.pdf"
    },
    {
      title: "Career Exploration and Planning",
      description: "Discover your interests, explore career paths, and plan for your future success.",
      icon: Star,
      type: "Guide",
      length: "9 min read",
      category: "Career",
      pdfUrl: "/pdfs/career-exploration-planning.pdf"
    },
    {
      title: "Volunteer Management Best Practices",
      description: "Effective strategies for recruiting, training, and managing volunteers in community projects.",
      icon: Users,
      type: "Guide",
      length: "7 min read",
      category: "Volunteering",
      pdfUrl: "/pdfs/volunteer-management-best-practices.pdf"
    }
  ];

  const blogs = [
    {
      title: "The Power of Youth Leadership in Community Development",
      description: "Discover how young leaders are transforming communities through innovative approaches and collaborative action.",
      icon: Users,
      type: "Blog Post",
      readTime: "5 min read",
      category: "Leadership",
      date: "December 2024",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      content: `Youth leadership is not just about age—it's about vision, passion, and the courage to take action. At Dhidib Foundation, we've witnessed firsthand how young leaders are revolutionizing community development through innovative approaches and collaborative action.

The Traditional vs. Modern Approach

Traditionally, community development was seen as the responsibility of established institutions and older generations. However, today's youth are proving that leadership knows no age limit. Young people bring fresh perspectives, digital fluency, and an innate understanding of contemporary challenges that older generations might miss.

What Makes Youth Leadership Unique?

1. Innovation and Creativity: Young leaders approach problems with fresh eyes and aren't constrained by "how things have always been done."

2. Digital Native Advantage: Today's youth understand technology and social media in ways that can amplify community impact and reach.

3. Peer Influence: Young leaders can connect with and inspire their peers in ways that adults cannot.

4. Long-term Vision: Young leaders think about the future because they will live in it longer than anyone else.

Real Impact Stories

In our programs, we've seen young leaders:

• Organize community clean-up initiatives that engaged over 200 volunteers
• Create digital literacy programs that reached underserved populations
• Establish mentorship networks connecting experienced professionals with students
• Launch social enterprises that address local needs while creating employment

The Collaborative Advantage

One of the most powerful aspects of youth leadership is its collaborative nature. Young leaders understand that real change happens when people work together. They're natural networkers, building bridges between different community groups, age demographics, and social circles.

Building the Next Generation of Leaders

At Dhidib Foundation, we believe in investing in youth leadership development through:

• Leadership training programs that build both hard and soft skills
• Mentorship opportunities connecting young people with experienced leaders
• Project-based learning that allows youth to tackle real community challenges
• Recognition and celebration of youth achievements

The Future is Bright

As we look to the future, we're excited about the potential of youth leadership to create more inclusive, innovative, and sustainable communities. The young leaders of today are not just preparing to lead tomorrow—they're leading today, and their impact is already being felt across our communities.

Join us in supporting and celebrating youth leadership. Together, we can create a world where every young person has the opportunity to lead, innovate, and make a positive difference in their community.`
    },
    {
      title: "Building Digital Skills for the Future Workforce",
      description: "Learn about essential digital competencies that young people need to succeed in today's technology-driven world.",
      icon: Lightbulb,
      type: "Blog Post",
      readTime: "7 min read",
      category: "Technology",
      date: "November 2024",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      content: `The digital revolution has transformed every aspect of our lives, and the workforce is no exception. For young people entering the job market, digital skills are no longer optional—they're essential for success in virtually every field.

Essential Digital Skills for Today's Workforce

1. Digital Literacy: Basic computer skills, internet navigation, and understanding of digital tools and platforms.

2. Data Analysis: The ability to collect, analyze, and interpret data to make informed decisions.

3. Digital Communication: Effective use of email, video conferencing, and collaboration tools.

4. Cybersecurity Awareness: Understanding how to protect personal and professional information online.

5. Social Media Management: Using social platforms for professional networking and brand building.

6. Cloud Computing: Working with cloud-based tools and understanding cloud storage and collaboration.

7. Basic Programming: Even non-technical roles benefit from understanding how software works.

8. Digital Marketing: Understanding online advertising, SEO, and content creation.

The Benefits of Digital Skills

Young people with strong digital skills enjoy:

• Better job prospects and higher earning potential
• Increased productivity and efficiency
• Greater flexibility in work arrangements
• Enhanced creativity and innovation capabilities
• Better communication and collaboration abilities

Our Digital Skills Programs

At Dhidib Foundation, we offer comprehensive digital skills training that includes:

• Hands-on workshops covering essential software and tools
• Project-based learning that applies skills to real-world scenarios
• Industry partnerships that provide insights into current workplace needs
• Certification programs that validate skills for employers
• Mentorship from professionals in technology and digital fields

The Future of Work

As automation and artificial intelligence continue to evolve, the nature of work is changing rapidly. However, these changes also create new opportunities for those with the right skills. By investing in digital skills development now, young people can position themselves for success in an increasingly digital world.

Getting Started

If you're a young person looking to build your digital skills, start with:

• Taking online courses in areas that interest you
• Practicing with free software and tools
• Seeking mentorship from professionals in your field of interest
• Participating in digital skills workshops and programs
• Building a portfolio of digital projects

At Dhidib Foundation, we're here to support your digital skills journey. Our programs are designed to be accessible, practical, and relevant to today's job market. Together, we can prepare for a future where digital skills are the foundation of success.`
    },
    {
      title: "Creating Inclusive Spaces: A Guide for Community Organizations",
      description: "Explore practical strategies for building welcoming and inclusive environments that celebrate diversity.",
      icon: Heart,
      type: "Blog Post",
      readTime: "6 min read",
      category: "Inclusion",
      date: "October 2024",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      content: `Inclusion isn't just a buzzword—it's a fundamental principle that transforms communities and organizations. At Dhidib Foundation, we believe that truly inclusive spaces are where everyone feels valued, respected, and empowered to contribute their unique perspectives and talents.

Understanding True Inclusion

Inclusion goes beyond simply welcoming diverse people into a space. It's about creating an environment where everyone can thrive, regardless of their background, identity, or circumstances. This means actively working to remove barriers, challenge biases, and ensure that all voices are heard and valued.

Practical Strategies for Building Inclusive Spaces

1. Start with Leadership Commitment: Inclusion must be championed from the top through words, actions, and resource allocation.

2. Conduct Regular Assessments: Evaluate your organization's inclusivity through surveys, policy reviews, and participation analysis.

3. Provide Training and Education: Invest in ongoing education on unconscious bias, cultural competency, and inclusive communication.

4. Create Clear Policies: Develop and communicate clear policies that support inclusion and accessibility.

5. Design for Accessibility: Ensure your spaces and programs are accessible to people with different abilities.

6. Foster Open Communication: Create channels for open, honest communication and feedback.

7. Celebrate Diversity: Actively celebrate and highlight the diversity within your community.

8. Address Conflicts Constructively: When conflicts arise, address them in ways that promote understanding and growth.

The Long-term Impact

Creating truly inclusive spaces is an ongoing journey, not a destination. The benefits compound over time as trust builds, relationships deepen, and the community becomes stronger and more resilient. At Dhidib Foundation, we've seen how inclusive practices transform not just individual experiences, but entire communities.`
    },
    {
      title: "From Volunteer to Leader: Personal Growth Stories",
      description: "Inspiring stories from community members who started as volunteers and grew into leadership roles.",
      icon: Star,
      type: "Blog Post",
      readTime: "8 min read",
      category: "Personal Growth",
      date: "September 2024",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      content: `Every leader has a beginning, and often that beginning starts with a simple act of service. At Dhidib Foundation, we've had the privilege of witnessing countless volunteers transform into confident leaders who are making a real difference in their communities.

The Journey from Service to Leadership

The path from volunteer to leader isn't always linear, but it's always transformative. It begins with a desire to help, grows through experience and learning, and culminates in the ability to inspire and guide others toward a common goal.

Real Stories of Transformation

Sarah's Story: From Shy Volunteer to Program Director
Sarah joined our organization as a quiet, reserved volunteer who wanted to help with our youth programs. Through our mentorship program, she was paired with an experienced program coordinator who recognized her potential. With gentle encouragement and opportunities to take on small leadership roles, Sarah gradually stepped out of her comfort zone. Today, she leads our entire youth development program, mentoring new volunteers and inspiring young people to discover their own potential.

Ahmed's Transformation: Building Community Through Service
Ahmed came to us as a university student looking for volunteer opportunities. Starting with our community clean-up initiatives, he quickly demonstrated natural leadership abilities. He organized his fellow students, coordinated with local businesses, and helped expand our environmental programs. Ahmed now serves on our board of directors and has launched his own social enterprise focused on sustainable community development.

The Common Threads

While each story is unique, there are common elements that contribute to successful volunteer-to-leader transitions:

• Supportive Environment: A culture that encourages growth and provides opportunities for advancement
• Mentorship: Experienced leaders who recognize potential and provide guidance
• Gradual Responsibility: Opportunities to take on increasing levels of responsibility
• Recognition and Feedback: Regular acknowledgment of contributions and constructive feedback
• Skill Development: Access to training and development opportunities
• Trust and Autonomy: The freedom to try new approaches and learn from experiences

Creating Opportunities for Growth

At Dhidib Foundation, we've learned that creating pathways from volunteer to leader requires intentional effort. We identify potential leaders early, provide targeted development opportunities, create clear advancement pathways, and foster a culture of learning and continuous improvement.

The Ripple Effect

When volunteers become leaders, the impact extends far beyond their individual growth. They become role models for other volunteers, bring fresh perspectives to organizational challenges, and often become advocates for the organization's mission in the broader community.

Your Leadership Journey

If you're a volunteer wondering about your own leadership potential, consider what aspects of your volunteer work energize you most, where you naturally take initiative, and what challenges or opportunities you see that others might miss. Remember, leadership isn't about having all the answers—it's about being willing to ask the right questions, take initiative, and support others in achieving common goals.`
    },
    {
      title: "The Impact of Mentorship on Youth Development",
      description: "Understanding how mentorship relationships can shape young people's futures and community outcomes.",
      icon: Target,
      type: "Blog Post",
      readTime: "6 min read",
      category: "Mentorship",
      date: "August 2024",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      content: `Mentorship is one of the most powerful tools for youth development, yet its impact is often underestimated. At Dhidib Foundation, we've seen firsthand how meaningful mentorship relationships can transform young people's lives and create lasting positive change in communities.

The Science of Mentorship

Research consistently shows that young people with mentors are more likely to:

• Graduate from high school and pursue higher education
• Develop stronger social and emotional skills
• Avoid risky behaviors and make better life choices
• Build confidence and self-esteem
• Develop career aspirations and professional networks
• Give back to their communities as adults

What Makes Mentorship Effective?

Not all mentorship relationships are created equal. Effective mentorship requires:

1. Consistency: Regular, reliable contact between mentor and mentee
2. Trust: A safe, supportive relationship built on mutual respect
3. Relevance: Mentorship that addresses the mentee's specific needs and goals
4. Duration: Long-term relationships that allow for deep connection and growth
5. Structure: Clear expectations and goals for the relationship

Types of Mentorship

At Dhidib Foundation, we recognize that different young people need different types of support:

• Academic Mentorship: Focuses on educational achievement, study skills, and career planning
• Career Mentorship: Provides exposure to different professions and helps develop professional skills
• Life Skills Mentorship: Addresses personal development, decision-making, and life management
• Peer Mentorship: Connects young people with slightly older peers who can relate to their experiences
• Community Mentorship: Links youth with community leaders and role models

The Mentor's Journey

Being a mentor is a rewarding but significant commitment. Effective mentors listen more than they talk, share their experiences and lessons learned, provide guidance without making decisions for their mentees, celebrate successes and support through challenges, maintain appropriate boundaries while building trust, and continue learning and growing themselves.

The Community Impact

The impact of mentorship extends far beyond individual relationships. Communities with strong mentorship programs benefit from higher graduation rates, reduced crime and risky behaviors among youth, increased civic engagement, stronger social networks, and economic development through better-prepared workforce.

The Future of Mentorship

As we look to the future, we're excited about the potential of technology to enhance mentorship relationships while maintaining the personal connection that makes mentorship so powerful. However, we believe that the core of effective mentorship will always be the personal relationship between mentor and mentee.

At Dhidib Foundation, we're always looking for dedicated mentors and eager mentees. Together, we can create a community where every young person has the support they need to reach their full potential.`
    },
    {
      title: "Sustainable Community Projects: Lessons Learned",
      description: "Key insights from successful community projects that have created lasting positive change.",
      icon: Globe,
      type: "Blog Post",
      readTime: "9 min read",
      category: "Community",
      date: "July 2024",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      content: `Sustainability in community development isn't just about environmental impact—it's about creating projects that continue to benefit communities long after the initial implementation. At Dhidib Foundation, we've learned valuable lessons about what makes community projects truly sustainable and impactful.

Defining Sustainable Community Projects

A sustainable community project is one that continues to operate and provide benefits over time, builds local capacity and ownership, adapts to changing community needs, creates lasting positive change, generates ongoing resources and support, and empowers community members to take leadership.

The Foundation of Sustainability

Our experience has taught us that sustainable projects are built on several key foundations:

1. Community Ownership: The most sustainable projects are those that the community truly owns, with community members involved in planning from the beginning and local leaders taking responsibility for project success.

2. Local Capacity Building: Sustainable projects build local capacity rather than creating dependency through training local people to manage and maintain the project, developing local leadership and organizational skills, and building local knowledge and expertise.

3. Resource Diversification: Projects that rely on a single source of funding or support are vulnerable. Sustainable projects develop multiple funding streams, create local revenue generation opportunities, build partnerships with various organizations, and develop volunteer and community support networks.

4. Adaptive Management: Sustainable projects can adapt to changing circumstances through regular monitoring and evaluation, flexible planning and implementation, responsiveness to community feedback, and ability to modify approaches based on lessons learned.

Case Study: The Community Garden Initiative

One of our most successful sustainable projects is the Community Garden Initiative. We worked with community members to identify the need for fresh, affordable food and the desire for a community gathering space. Local residents formed a garden committee and took responsibility for day-to-day management. We provided training in gardening, composting, and community organizing, but local leaders took ownership of the knowledge and skills. The garden generates income through produce sales, receives donations from local businesses, and has developed partnerships with schools and health organizations. Five years later, the garden is still thriving, has expanded to serve more families, and has inspired similar projects in neighboring communities.

Key Lessons Learned

Through our experience with sustainable community projects, we've learned several important lessons:

1. Start Small, Think Big: Begin with manageable projects that can demonstrate success and build community confidence.

2. Invest in Relationships: Sustainable projects are built on strong relationships between community members, organizations, and stakeholders.

3. Focus on Process, Not Just Outcomes: The process of community engagement and capacity building is as important as the final project.

4. Celebrate Successes: Regularly celebrate achievements and milestones to build community pride and momentum.

5. Learn from Failures: Not every project will be successful, but every project provides learning opportunities.

6. Plan for Transition: From the beginning, plan for how the project will transition from external support to community ownership.

The Ripple Effect

Sustainable community projects create ripple effects that extend far beyond their initial scope. They inspire similar projects in other communities, build confidence and capacity for future initiatives, create networks and partnerships that support other efforts, demonstrate what's possible when communities work together, and create lasting positive change that benefits future generations.

At Dhidib Foundation, we're committed to applying these lessons to all our community development work. We believe that sustainable projects are the key to creating lasting positive change in communities.`
    }
  ];

  const externalResources = [
    {
      title: "Youth.gov - Federal Youth Development Resources",
      description: "Comprehensive resources for youth development programs and initiatives.",
      url: "https://youth.gov",
      icon: ExternalLink,
      category: "Government"
    },
    {
      title: "UNESCO Youth Development",
      description: "Global resources and best practices for youth empowerment and development.",
      url: "https://en.unesco.org/themes/youth",
      icon: ExternalLink,
      category: "International"
    },
    {
      title: "National Youth Leadership Council",
      description: "Resources for service-learning and youth leadership development.",
      url: "https://nylc.org",
      icon: ExternalLink,
      category: "Leadership"
    },
    {
      title: "Youth Service America",
      description: "Tools and resources for youth-led community service projects.",
      url: "https://ysa.org",
      icon: ExternalLink,
      category: "Service"
    },
    {
      title: "Digital Youth Network",
      description: "Resources for digital literacy and creative technology education.",
      url: "https://digitalyouthnetwork.org",
      icon: ExternalLink,
      category: "Technology"
    },
    {
      title: "Community Tool Box",
      description: "Comprehensive guide to community development and organizing.",
      url: "https://ctb.ku.edu",
      icon: ExternalLink,
      category: "Community"
    }
  ];

  const faqs = [
    {
      question: "How can I get involved with Dhidib Foundation?",
      answer: "There are many ways to get involved! You can volunteer, participate in our programs, become a community partner, or support us through donations. Visit our Get Involved page to learn more about opportunities."
    },
    {
      question: "What age groups do you serve?",
      answer: "Our programs serve youth ages 10-25, with specific programs tailored to different age groups. We also welcome volunteers and supporters of all ages."
    },
    {
      question: "Do I need experience to volunteer?",
      answer: "No experience is required! We provide training and support for all volunteers. We value enthusiasm, commitment, and a desire to make a difference more than prior experience."
    },
    {
      question: "How can I start a program in my community?",
      answer: "We'd love to help you bring our programs to your community! Contact us to discuss partnership opportunities and how we can work together to serve youth in your area."
    },
    {
      question: "What makes Dhidib Foundation different?",
      answer: "We focus on youth empowerment through skill development, community service, and inclusive programming. Our approach is collaborative, innovative, and centered on the needs and aspirations of young people."
    },
    {
      question: "How can I support your mission financially?",
      answer: "You can support us through one-time donations, monthly giving, or by sponsoring specific programs. Visit our Get Involved page to learn about different ways to contribute."
    }
  ];

  const supportContacts = [
    {
      title: "Program Information",
      phone: "+252 634 833 630",
      email: "info@dhidib.org",
      description: "Questions about our programs and how to participate",
      hours: "Saturday to Thursday, 8am to 5pm"
    },
    {
      title: "Volunteer Coordination",
      phone: "+252 634 833 630",
      email: "info@dhidib.org",
      description: "Information about volunteering opportunities",
      hours: "Saturday to Thursday, 8am to 5pm"
    },
    {
      title: "Partnership Inquiries",
      phone: "+252 634 833 630",
      email: "info@dhidib.org",
      description: "Business and community partnership opportunities",
      hours: "Saturday to Thursday, 8am to 5pm"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-gray-900">
              Resources & <span className="text-primary">Learning</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Access guides, reports, and resources to support youth development, community building, 
              and positive change. Everything you need to make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/get-involved">
                  Get Involved
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link href="#guides">Browse Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
              Getting Started with Youth Development
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              New to youth development or community service? Follow these steps to begin your journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-lg font-heading font-semibold text-gray-900 mb-3">Explore Your Interests</h3>
                <p className="text-gray-600 leading-relaxed">
                  Discover what you&apos;re passionate about and how you want to make a difference in your community.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-lg font-heading font-semibold text-gray-900 mb-3">Join Our Programs</h3>
                <p className="text-gray-600 leading-relaxed">
                  Participate in our skill-building programs and connect with like-minded peers.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-lg font-heading font-semibold text-gray-900 mb-3">Take Action</h3>
                <p className="text-gray-600 leading-relaxed">
                  Apply your skills through community service projects and leadership opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  4
                </div>
                <h3 className="text-lg font-heading font-semibold text-gray-900 mb-3">Lead & Inspire</h3>
                <p className="text-gray-600 leading-relaxed">
                  Become a mentor and help other young people discover their potential and make a difference.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section id="guides" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
              Learning Guides
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive guides to help you develop skills, plan projects, and make a positive impact in your community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, index) => {
              const Icon = guide.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <Icon className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                            {guide.type}
                          </span>
                          <span className="text-sm text-gray-500">{guide.length}</span>
                        </div>
                        <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
                          {guide.category}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-gray-900 mb-3">{guide.title}</h3>
                        <p className="text-gray-600 leading-relaxed mb-4">{guide.description}</p>
                    <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Link href={guide.pdfUrl} target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 h-4 w-4" />
                      Download Guide
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
              Educational Blogs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Read our latest insights, stories, and educational content to learn about youth development, community building, and making a positive impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => {
              const Icon = blog.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <Icon className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                            {blog.type}
                          </span>
                          <span className="text-sm text-gray-500">{blog.readTime}</span>
                        </div>
                        <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded mb-3 block w-fit">
                          {blog.category}
                        </span>
                        <h3 className="text-lg font-heading font-semibold text-gray-900 mb-3">{blog.title}</h3>
                        <p className="text-gray-600 leading-relaxed mb-4">{blog.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">{blog.date}</span>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="group-hover:bg-primary group-hover:text-white transition-colors duration-300"
                            onClick={() => handleBlogClick(blog)}
                          >
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* External Resources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
              External Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Valuable resources from trusted organizations working in youth development and community building.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {externalResources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <Icon className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
                            {resource.category}
                          </span>
                        </div>
                        <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">{resource.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">{resource.description}</p>
                        <Button asChild variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                          <a href={resource.url} target="_blank" rel="noopener noreferrer">
                            Visit Resource
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about our programs, volunteering, and how to get involved.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-gray-900 mb-3">{faq.question}</h3>
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Contacts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
              Need Help? Contact Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team is here to help you get involved, learn more about our programs, or answer any questions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportContacts.map((contact, index) => (
              <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Phone className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">{contact.title}</h3>
                  <p className="text-2xl font-bold text-primary mb-2">{contact.phone}</p>
                  <p className="text-sm text-gray-600 mb-2">{contact.email}</p>
                  <p className="text-gray-600 text-sm mb-2">{contact.description}</p>
                  <p className="text-gray-500 text-xs">{contact.hours}</p>
                </CardContent>
              </Card>
            ))}
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
              Join our community of changemakers. Whether you want to participate in programs, volunteer, 
                or support our mission, we&apos;re here to help you get started.
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

      {/* Blog Modal */}
      <BlogModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        blog={selectedBlog}
      />
    </div>
  );
}