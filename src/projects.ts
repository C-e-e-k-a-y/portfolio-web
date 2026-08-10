interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  projectUrl: string;
}

const projects: Project[] = [
  { id: 1, title: 'E-Commerce Platform', category: 'Next.js / Tailwind', image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800', projectUrl: 'https://example.com/project1' },
  { id: 2, title: 'AI Analytics Dashboard', category: 'React / TypeScript', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800', projectUrl: 'https://example.com/project2' },
  { id: 3, title: 'Social Media App', category: 'React Native / Firebase', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800', projectUrl: 'https://example.com/project3' },
  { id: 4, title: 'Portfolio Website', category: 'Framer Motion / Tailwind', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800', projectUrl: 'https://example.com/project4' },
];

export default projects;