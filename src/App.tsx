import './styles/App.css';
// import Navbar from './components/Navbar';
import introBg from './assets/intro-bg.png';
import ProfileCard from './components/ProfileCard';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import BackToTop from './components/BackToTop';

function App() {

  return (
    <div id="main-scroll-container"
      className="max-h-screen max-w-screen bg-cover bg-center bg-no-repeat snap-y snap-mandatory scroll-smooth overflow-auto scrollbar-none text-white"
      style={{ backgroundImage: `url(${introBg})` }}
    >

      <Section id="home" className="my-auto h-screen flex items-center justify-center transition ease-in-out duration-500">

          <div id="intro-text" className="text-center xl:w-[60%]">

            <h1 className="text-[clamp(2.5rem,10vw,4.5rem)] font-bold tracking-tight">
            Chibuike Ihieri
            </h1>

            <p className="text-[clamp(1.5rem,6vw,2.5rem)] mt-2 font-semibold">
              Web Developer
            </p>

            <p className="text-[clamp(1rem,3vw,1.5rem)] mt-4 lg:px-4">
              I create responsive, beautiful, and user-friendly web applications that meet the needs of clients and users alike.
            </p>

            <div id="intro-buttons" className="mt-6 justify-content space-y-4 space-x-4 lg:space-y-0">

              <button value="View Projects" className="rounded-lg bg-blue-500 px-4 py-2 hover:bg-blue-600">View Projects</button>

              <button value="Get in Touch" className="rounded-lg bg-green-500 px-4 py-2 hover:bg-green-600">Get in Touch</button>
              
              <button value="Download CV" className="rounded-lg bg-yellow-500 px-4 py-2 hover:bg-yellow-600">Download CV</button>

            </div>

          </div>
        
      </Section>
      
      <Section id="about" className="h-screen my-auto flex items-center justify-center space-y-4 lg:space-x-10 lg:flex-row flex-col">

        <ProfileCard />

        <div id="about-text" className="lg:w-[60%]">
          <h2 className="text-[clamp(1.5rem,6vw,2.5rem)] text-center font-bold mb-4">Who am I ?</h2>
          <p className="text-lg">
            I'm Chibuike Ihieri, a <span className="font-semibold">Software Engineer</span> specialized in <span className="font-semibold">web development</span>. I'm highly enthusiastic about building quality software applications that solve real-world problems as well as provide pleasant user experiences. I enjoy converting beatiful user interfaces into functional web applications and continuously learning new technologies to enhance my skills. <br /> <br />
            Apart from coding, I also enjoy movies, video games, watching youtube videos, and attending tech events. I believe in continuous self-improvement, and networking which drives me to be a better developer and person every day.
          </p>
        </div>
      </Section>

      <Section id="skills" className="h-screen my-auto flex-col content-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          <p className="text-lg">
            I have a diverse set of skills that I have acquired through my experience in web development. Here are some of the technologies and tools I am proficient in:
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="list-disc list-inside">
              <li>React</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="list-disc list-inside">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Postgres</li>
              <li>SQL</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-2">Tools & Platforms</h3>
            <ul className="list-disc list-inside">
              <li>Git & GitHub</li>
              <li>Docker</li>
              <li>Vercel</li>
              <li>Render</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-2">Other Skills</h3>
            <ul className="list-disc list-inside">
              <li>Problem Solving</li>
              <li>Responsive Design</li>
              <li>UI/UX Design Principles</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="projects" className="h-screen my-auto flex-col content-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">View My Work</h2>
          <p className="text-lg">
            Here are some of the projects I have worked on. Each project showcases my skills in web development and my ability to create efficient solutions.
          </p>
        </div>

        <ProjectCard />
      </Section>

      <Section id="contact" className="h-screen my-auto relative flex-col content-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg">
            Have a question or want to work together?<br /> Feel free to reach out to me for any inquiries, freelance, contract or full-time opportunities.
          </p>
        </div>

        <form className="mt-6 flex flex-col items-center space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            name="name" autoComplete="off"
            className="bg-gray-800 text-white placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:ring-2 hover:ring-blue-500 w-[80%] md:w-[50%] h-10 rounded-md p-4"
          />
          <input
            type="email"
            placeholder="Your Email"
            name="email" autoComplete="off"
            className="bg-gray-800 text-white placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:ring-2 hover:ring-blue-500 w-[80%] md:w-[50%] h-10 rounded-md p-4"
          />
          <textarea
            placeholder="Your Message"
            name="message" autoComplete="off"
            rows={2}
            className="bg-gray-800 text-white placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-[80%] md:w-[50%] resize-none rounded-md p-4 hover:ring-2 hover:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="rounded-lg bg-blue-500 px-4 py-2 hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 flex justify-center space-x-4">
          <a href="mailto:cihieri01@gmail.com" className="text-blue-500 hover:text-blue-700 rounded-full p-2 bg-gray-800 hover:bg-gray-700">
            <i className="fas fa-envelope"></i> Email Me
          </a>
          <a href="https://github.com/C-e-e-k-a-y" className="text-blue-500 hover:text-blue-700 rounded-full p-2 bg-gray-800 hover:bg-gray-700">
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href="https://www.linkedin.com/in/chibuike-ihieri/" className="text-blue-500 hover:text-blue-700 rounded-full p-2 bg-gray-800 hover:bg-gray-700">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://twitter.com/cihieri" className="text-blue-500 hover:text-blue-700 rounded-full p-2 bg-gray-800 hover:bg-gray-700">
            <i className="fab fa-twitter"></i> Twitter
          </a>
        </div>

        <div className="text-center absolute bottom-4 left-0 right-0">
          <p className="text-lg">
            &copy; {new Date().getFullYear()} Chibuike Ihieri
          </p>
        </div>
      </Section>

      <BackToTop containerId="main-scroll-container" />
    </div>
  )
}

export default App
