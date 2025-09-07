# Dhidib Foundation Website

A modern, professional, and fully responsive website for Dhidib Foundation, a youth empowerment and community development organization built with Next.js, Tailwind CSS, TypeScript, and ShadCN/UI.

## 🚀 Features

- **Modern Design**: Clean, minimalist design with calming color palette (blues, greens, whites, yellow accents)
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Professional Typography**: Poppins (headings) and Lato (body) fonts for a friendly, inclusive feel
- **Smooth Animations**: Hover effects and transitions throughout the site
- **SEO Optimized**: Proper metadata and semantic HTML structure
- **Accessibility**: Built with accessibility best practices (WCAG compliance)
- **Community-Focused**: Diverse, welcoming imagery and inclusive messaging

## 📄 Pages

1. **Home Page** - Hero section, mission teaser, programs overview, testimonials, and CTA
2. **About Page** - Mission, vision, values, team introduction, timeline, and achievements
3. **Programs Page** - Detailed program cards with features and impact metrics
4. **Get Involved Page** - Volunteer opportunities, donation options, and partnership information
5. **Resources Page** - Learning guides, reports, external resources, and FAQ
6. **Contact Page** - Contact form, location info, business hours, and FAQ
7. **404 Page** - Helpful navigation and fun facts about the organization

## 🛠️ Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework for styling
- **ShadCN/UI** - Modern UI components (Button, Card, Input, Textarea)
- **Lucide React** - Beautiful, customizable icons
- **Poppins & Lato Fonts** - Professional, friendly typography

## 🎨 Design Features

- **Color Palette**: Calming blues, greens, whites with yellow accents for hope & growth
- **Rounded Corners**: Soft, welcoming design with balanced whitespace
- **Community Imagery**: Diverse people, youth, volunteers in stock image placeholders
- **Interactive Elements**: Hover animations and smooth section transitions
- **Card-Based Layouts**: Clean, organized content presentation
- **Consistent Iconography**: Meaningful icons throughout the site

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/abdifatah-com/Dhidib-Site.git
cd Dhidib-Site
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

## 🎯 Key Sections

### Home Page
- Hero banner: "Empowering Youth, Building Communities"
- About teaser with mission statement
- Programs overview with interactive cards
- Why Dhidib Foundation highlights
- Testimonials/stories carousel
- Call-to-action: "Be part of the change"

### Programs
- Youth Skills Development
- Digital & Creative Training
- Volunteering & Community Service
- Educational Support
- Advocacy & Awareness Campaigns

### Get Involved
- Volunteer sign-up form
- Donation information and options
- Partnership opportunities
- Community engagement

### Resources
- Learning guides and tutorials
- Annual reports and research
- External youth development resources
- Frequently asked questions

## 🔧 Customization

### Colors
The color scheme can be customized in `src/app/globals.css`:
```css
:root {
  --dhidib-blue: 201 96% 32%;
  --dhidib-green: 142 76% 36%;
  --dhidib-yellow: 45 93% 47%;
  --dhidib-white: 0 0% 100%;
}
```

### Content
All content is easily editable in the respective page components:
- `src/app/page.tsx` - Home page
- `src/app/about/page.tsx` - About page
- `src/app/programs/page.tsx` - Programs page
- `src/app/get-involved/page.tsx` - Get Involved page
- `src/app/resources/page.tsx` - Resources page
- `src/app/contact/page.tsx` - Contact page
- `src/app/not-found.tsx` - 404 page

### Components
Reusable components are located in `src/components/`:
- `Header.tsx` - Navigation header with Dhidib Foundation branding
- `Footer.tsx` - Site footer with social links and contact info
- `ui/` - ShadCN/UI components (Button, Card, Input, Textarea)

### Branding
Update the organization information in:
- `src/app/layout.tsx` - Site metadata and title
- `src/components/Header.tsx` - Logo and navigation
- `src/components/Footer.tsx` - Contact information and social links

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Deployment Options
- **Netlify**: Connect GitHub repository
- **AWS Amplify**: Deploy from Git repository
- **Railway**: Deploy with zero configuration

## 🎨 Design System

### Typography
- **Headings**: Poppins (300, 400, 500, 600, 700, 800)
- **Body Text**: Lato (300, 400, 700)
- **Font Classes**: `.font-heading` and `.font-body`

### Color Usage
- **Primary**: Blue (#1e40af) - Main brand color
- **Accent**: Green (#16a34a) - Secondary actions
- **Yellow**: (#eab308) - Hope and growth accents
- **Neutral**: Gray scale for text and backgrounds

### Components
- **Cards**: Rounded corners, soft shadows, hover effects
- **Buttons**: Primary, secondary, outline variants
- **Forms**: Clean inputs with proper validation states
- **Navigation**: Sticky header with mobile-responsive menu

## 🔧 Development

### Project Structure
```
src/
├── app/                 # Next.js App Router pages
│   ├── about/          # About page
│   ├── programs/       # Programs page
│   ├── get-involved/   # Get Involved page
│   ├── resources/      # Resources page
│   ├── contact/        # Contact page
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   ├── not-found.tsx   # 404 page
│   └── globals.css     # Global styles
├── components/         # Reusable components
│   ├── ui/            # ShadCN/UI components
│   ├── Header.tsx     # Site header
│   └── Footer.tsx     # Site footer
└── lib/               # Utility functions
    └── utils.ts       # Helper functions
```

### Adding New Pages
1. Create a new folder in `src/app/`
2. Add a `page.tsx` file
3. Update navigation in `Header.tsx` and `Footer.tsx`
4. Add any new components to `src/components/`

### Styling Guidelines
- Use Tailwind CSS utility classes
- Follow the established color palette
- Maintain consistent spacing and typography
- Ensure responsive design for all screen sizes
- Test accessibility with screen readers

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions about this website template, please contact:
- Email: info@dhidib.org
- Phone: +252 634 833 630
- Website: [Dhidib Foundation](https://www.dhidib.org)
- Location: Hargeisa Jigjiga-yar, near Papa Rotti, Hargeisa, Somalia

## 🌟 Mission

Dhidib Foundation is dedicated to empowering young people with the skills, opportunities, and support they need to create lasting change in their communities. This website serves as a platform to connect with youth, volunteers, partners, and supporters who share our vision of building a brighter future together.

---

Built with ❤️ for youth empowerment and community development
