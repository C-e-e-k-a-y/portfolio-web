interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  projectUrl: string;
}

const projects: Project[] = [
  { id: 1, title: 'Academic Chat Forum', category: 'React / TypeScript', image: 'Academic-Chat-Forum.png', projectUrl: 'https://github.com/C-e-e-k-a-y/Academic-Chat-Forum' },
  { id: 2, title: 'DevConnect', category: 'React / Django', image: 'DevConnect.png', projectUrl: 'https://github.com/C-e-e-k-a-y/DevConnect' },
];

export default projects;