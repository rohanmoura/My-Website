export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  startingPrice: string;
  deliveryTime: string;
  slug: string;
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Landing Pages',
    description: 'High-converting landing pages designed to turn visitors into customers. Perfect for marketing campaigns, product launches, and lead generation.',
    features: [
      'Mobile-responsive design',
      'Fast loading speeds',
      'SEO optimized',
      'Contact forms integration',
      'Analytics setup',
      'A/B testing ready'
    ],
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Vercel'],
    startingPrice: '$500',
    deliveryTime: '3-5 days',
    slug: 'landing-pages'
  },
  {
    id: '2',
    title: 'Business Websites',
    description: 'Professional websites that build trust and credibility for your business. Complete with all the pages you need to establish your online presence.',
    features: [
      'Multi-page website',
      'Content management',
      'Contact forms',
      'Google Maps integration',
      'Social media links',
      'Professional design'
    ],
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'CMS Integration'],
    startingPrice: '$1,200',
    deliveryTime: '1-2 weeks',
    slug: 'business-websites'
  },
  {
    id: '3',
    title: 'Ecommerce',
    description: 'Complete online stores with payment processing, inventory management, and customer accounts. Built to drive sales and grow your business.',
    features: [
      'Product catalog',
      'Shopping cart',
      'Payment processing',
      'Order management',
      'Customer accounts',
      'Admin dashboard'
    ],
    technologies: ['Next.js', 'Stripe', 'Database', 'Authentication'],
    startingPrice: '$2,500',
    deliveryTime: '2-4 weeks',
    slug: 'ecommerce'
  },
  {
    id: '4',
    title: 'Web Applications',
    description: 'Custom web applications tailored to your specific business needs. From simple tools to complex systems.',
    features: [
      'Custom functionality',
      'User authentication',
      'Database integration',
      'API development',
      'Admin panels',
      'Third-party integrations'
    ],
    technologies: ['Next.js', 'Node.js', 'Database', 'APIs'],
    startingPrice: '$3,000',
    deliveryTime: '3-6 weeks',
    slug: 'web-apps'
  },
  {
    id: '5',
    title: 'Portfolios',
    description: 'Stunning portfolio websites to showcase your work and attract new clients. Perfect for creatives, freelancers, and professionals.',
    features: [
      'Project galleries',
      'About page',
      'Contact forms',
      'Blog integration',
      'Testimonials',
      'Resume/CV section'
    ],
    technologies: ['Next.js', 'Tailwind CSS', 'CMS', 'Image Optimization'],
    startingPrice: '$800',
    deliveryTime: '1 week',
    slug: 'portfolios'
  },
  {
    id: '6',
    title: 'Dashboards',
    description: 'Data visualization and management interfaces for your business. Turn complex data into actionable insights.',
    features: [
      'Data visualization',
      'Real-time updates',
      'User management',
      'Export functionality',
      'Custom reports',
      'Mobile responsive'
    ],
    technologies: ['Next.js', 'Charts.js', 'Database', 'APIs'],
    startingPrice: '$2,000',
    deliveryTime: '2-3 weeks',
    slug: 'dashboards'
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};