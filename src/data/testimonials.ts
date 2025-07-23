export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
  projectType: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    company: 'Green Valley Consulting',
    role: 'Founder & CEO',
    content: 'Working with YourName was an absolute pleasure. They delivered a stunning website that perfectly captures our brand and has significantly increased our online inquiries. The attention to detail and professionalism was outstanding.',
    rating: 5,
    projectType: 'Business Website'
  },
  {
    id: '2',
    name: 'Michael Chen',
    company: 'TechStart Solutions',
    role: 'Marketing Director',
    content: 'Our landing page conversion rate increased by 40% after YourName redesigned it. The page loads incredibly fast and looks amazing on all devices. Highly recommend for any business serious about results.',
    rating: 5,
    projectType: 'Landing Page'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    company: 'Artisan Crafts Co.',
    role: 'Owner',
    content: 'The ecommerce site YourName built for us has transformed our business. Online sales have tripled, and managing orders is so much easier now. The design is beautiful and our customers love the shopping experience.',
    rating: 5,
    projectType: 'Ecommerce'
  },
  {
    id: '4',
    name: 'David Thompson',
    company: 'Thompson Architecture',
    role: 'Principal Architect',
    content: 'YourName created a portfolio website that truly showcases our work. The image galleries are stunning and the site has helped us win several new projects. Professional, reliable, and talented.',
    rating: 5,
    projectType: 'Portfolio'
  },
  {
    id: '5',
    name: 'Lisa Park',
    company: 'FitLife Gym',
    role: 'General Manager',
    content: 'Our new website has been a game-changer for member sign-ups. YourName understood our needs perfectly and delivered exactly what we wanted. The booking system works flawlessly.',
    rating: 5,
    projectType: 'Business Website'
  },
  {
    id: '6',
    name: 'James Wilson',
    company: 'DataFlow Analytics',
    role: 'CTO',
    content: 'The custom dashboard YourName developed has streamlined our data analysis process. The visualizations are clear and the interface is intuitive. Excellent technical skills and communication.',
    rating: 5,
    projectType: 'Web Application'
  }
];

export const getTestimonialsByProjectType = (projectType: string): Testimonial[] => {
  return testimonials.filter(testimonial => 
    testimonial.projectType.toLowerCase().includes(projectType.toLowerCase())
  );
};

export const getFeaturedTestimonials = (count: number = 3): Testimonial[] => {
  return testimonials.slice(0, count);
};