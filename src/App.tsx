import './styles/App.css';
import ProfileCard from './components/ProfileCard';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import BackToTop from './components/BackToTop';
import DownloadCVButton from './components/DownloadCV';
import HeroTitle from './components/HeroTitle';
import ContactForm from './components/ContactForm';
import ContactLink from './components/ContactLink';
import StatusBadge from './components/StatusBadge';
import Navigation from './components/Navigation';
import { Mail, MapPinned, Phone, Link, FolderGit2 } from 'lucide-react';
import Gmail from './assets/icons/gmail-icon.svg?react';
import GitHub from './assets/icons/github-icon.svg?react';
import LinkedIn from './assets/icons/linkedin-square-icon.svg?react';
import X from './assets/icons/x-social-media-black-icon.svg?react';
import WhatsApp from './assets/icons/wa-whatsapp-icon.svg?react';
import ScrollDownIndicator from './components/ScrollDown';
import NavIndicator from './components/NavIndicator';
import WebDev from './assets/Web Dev Course.jfif';
import Python from './assets/Python Course.jfif';
import UnnLogo from './assets/UNN logo.jfif';


function App() {

  return (
    <div id="main-scroll-container"
      className="font-sans h-dvh w-full max-h-dvh max-w-dvw bg-mobile-bg md:bg-tablet-bg lg:bg-laptop-bg bg-cover bg-center bg-no-repeat snap-y snap-mandatory scroll-smooth overflow-auto scrollbar-none text-white"
    >
      <div className="fixed top-10 left-0 w-full h-fit z-50 px-5 md:p-2 flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-mono font-bold tracking-wide backdrop-blur-md pl-3 md:pl-10 text-transparent [-webkit-text-stroke:1px_white]">CEEKAY</h1>

        <StatusBadge />
      </div>

      <Navigation />

      <Section id="home" className="my-auto h-dvh flex items-center justify-center transition ease-in-out duration-500">

        <div id="intro-text" className="text-center">

          <h1 className="text-[clamp(2.5rem,10vw,4.5rem)] text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-blue-500 font-bold tracking-tight">
            Chibuike Ihieri
          </h1>

          <HeroTitle />

          <p className="text-[clamp(1rem,3vw,1.2rem)] mt-4 lg:px-4 backdrop:blur-md py-2 italic md:w-[80%] mx-auto">
            I create responsive, user-friendly web applications that meet the needs of clients and users alike.
          </p>

          <div id="intro-buttons" className="mt-6 justify-content space-y-4 space-x-4">

            <button value="View Projects" className="rounded-lg bg-blue-500/15 px-4 py-2 border border-blue-400 hover:bg-linear-to-br hover:from-blue-700 hover:to-grey-900"><a href="#projects" className="flex items-center gap-2"><FolderGit2 className="w-5 h-5" /> View Projects</a></button>

            <button value="Get in Touch" className="rounded-lg bg-cyan-500/15 px-4 py-2 border border-green-400 hover:bg-linear-to-br hover:from-green-700 hover:to-grey-900"><a href="#contact" className="flex items-center gap-2"><Link className="w-5 h-5" /> Get in Touch</a></button>

            <DownloadCVButton />

          </div>

        </div>

        <div className="absolute top-3/4 right-5 -translate-y-1/2">
          <NavIndicator />
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <ScrollDownIndicator />
        </div>

      </Section>

      <Section id="about" className="h-dvh my-auto flex items-center justify-center space-y-4 lg:space-x-10 lg:flex-row flex-col">

        <ProfileCard />

        <div id="about-text" className="lg:w-[60%]">
          <h2 className="font-roboto text-[clamp(1.5rem,6vw,2.5rem)] text-center font-bold mb-4">Who am I ?</h2>
          <p className="text-lg md:text-xl">
            I'm Chibuike Ihieri, a <span className="font-semibold">Software Engineer</span> specialized in <span className="font-semibold">web development</span>, and a graduate of <span className="font-semibold">Computer Science</span> from the <span className="font-semibold">University of Nigeria</span>.</p>

          <p className="text-lg md:text-xl mt-2 md:mt-3">I'm passionate about building quality software applications that solve real-world problems as well as provide pleasant user experiences. I enjoy converting beatiful UIs into functional web applications.</p>

          <p className="text-lg md:text-xl mt-2 md:mt-3">Apart from coding, I also enjoy movies, video games, watching youtube videos, and attending tech events. I believe in continuous self-improvement, and networking which drives me to be a better developer and person every day.
          </p>
        </div>
      </Section>

      <Section id="skills" className="h-dvh my-auto flex-col md:content-center content-end justify-center items-center">
        <div className="text-center">
          <p className="font-oswald text-md md:text-lg font-thin mb-2">— SKILLS & CERTIFICATION —</p>
          <h2 className="font-roboto text-3xl font-bold mb-3">Skills</h2>
          <p className="text-lg md:text-xl">
            Here are the set of tools and technologies I've gained proficiency in through my experience in web development.
          </p>
        </div>

        <div className="lg:w-[85vw] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-2 mt-3">
          <div className="bg-purple-600/20 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl text-center font-semibold border-b mb-2">Frontend</h3>
            <ul className="list-inside flex gap-2 flex-wrap">
              <li>» React</li>
              <li>» Tailwind CSS</li>
              <li>» JavaScript</li>
              <li>» TypeScript</li>
            </ul>
          </div>

          <div className="bg-blue-600/20 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl text-center font-semibold border-b mb-2">Backend</h3>
            <ul className="list-inside flex gap-2 flex-wrap">
              <li>» Node.js</li>
              <li>» Express.js</li>
              <li>» Python</li>
              <li>» Postgres</li>
              <li>» SQL</li>
            </ul>
          </div>

          <div className="bg-blue-600/20 lg:bg-purple-600/20 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl text-center font-semibold border-b mb-2">Tools</h3>
            <ul className="list-inside flex gap-2 flex-wrap">
              <li>» Git & GitHub</li>
              <li>» Docker</li>
              <li>» Render</li>
            </ul>
          </div>

          <div className="bg-purple-600/20 lg:bg-blue-600/20 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl text-center font-semibold border-b mb-2">Other Skills</h3>
            <ul className="list-inside flex gap-2 flex-wrap">
              <li>» Responsive Design</li>
              <li>» UI/UX Design Principles</li>
            </ul>
          </div>
        </div>

        <hr className="mt-3 lg:w-[80%] mx-auto" />
        <hr className="mt-1 lg:w-[80%] mx-auto" />

        <div className="mt-2 text-center">
          <h2 className="font-roboto text-3xl font-bold mb-4 flex w-fit mx-auto items-center gap-2">
            Certifications
          </h2>
          <div className="bg-grey-500 flex justify-center gap-2 md:gap-3">
            <div className="flex-col w-[30%]  lg:w-[20%] items-center">
              <img
                src={WebDev}
                alt="Profile"
                className="size-20 w-full md:h-40 mb-1"
              />
              <p className="text-md md:text-xl">The Complete Full-Stack Web Development Bootcamp</p>
            </div>

            <div className="flex-col w-[30%] lg:w-[20%] items-center">
              <img
                src={Python}
                alt="Profile"
                className="size-20 w-full md:h-40 mb-1"
              />
              <p className="text-md md:text-xl">100 Days of Code™: The Complete Python Pro Bootcamp</p>
            </div>

            <div className="flex-col w-[30%] lg:w-[20%] items-center">
              <img
                src={UnnLogo}
                alt="Profile"
                className="size-20 w-full md:h-40 mb-1"
              />
              <p className="text-md md:text-xl">B.Sc Computer Science (Hons)</p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="projects" className="h-dvh my-auto flex-col content-center justify-center">
        <div className="text-center">
          <p className="font-oswald text-md font-thin mb-2">— PORTFOLIO —</p>
          <h2 className="font-roboto text-3xl font-bold mb-4">View My Work</h2>
          <p className="text-lg md:text-lg">
            Here are some of the projects I have worked on. Each project showcases my skills in web development and my ability to create efficient solutions.
          </p>
        </div>

        <ProjectCard />
      </Section>

      <Section id="contact" className="h-dvh my-auto relative flex-col content-center justify-center">
        <div className="text-center mt-4">
          <p className="font-oswald text-md font-thin mb-2">— LET'S TALK —</p>
          <h2 className="font-roboto text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg md:w-2/3 mx-auto">
            Have a question or want to work together?<br /> Feel free to reach out to me for any inquiries, freelance, contract or full-time opportunities.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-around md:w-[80vw] mx-auto my-5 gap-2 lg:gap-10">
          <div id="contact-details" className="flex flex-wrap md:flex-col items-center md:items-start justify-center gap-4 text-sm md:text-xl w-fit mb-2 bg-blue-400/10 p-1 md:p-4 rounded-lg backdrop-blur-md border border-blue-400">
            <div className="flex items-center gap-2 ">
              <Mail className="size-7 md:size-10 border-2 rounded-lg p-1" />
              <div className="flex flex-col">
                <span className="font-bold">Email:</span>
                <span>cihieri01@gmail.com</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="size-7 md:size-10 border-2 rounded-lg p-1" />
              <div className="flex flex-col">
                <span className="font-bold">Phone:</span>
                <span>+234 904 484 1046</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <MapPinned className="size-7 md:size-10 border-2 rounded-lg p-1" />
              <div className="flex flex-col">
                <span className="font-bold">Location:</span>
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>

        <div className="flex flex-wrap justify-center items-center gap-2 mx-auto">
          <ContactLink address="mailto:cihieri01@gmail.com" svg={<Gmail />} />
          <ContactLink address="https://github.com/C-e-e-k-a-y" svg={<GitHub />} />
          <ContactLink address="https://www.linkedin.com/in/chibuike-ihieri/" svg={<LinkedIn />} />
          <ContactLink address="https://twitter.com/ChibzTimmy" svg={<X />} />
          <ContactLink address="https://wa.me/2349044841046" svg={<WhatsApp />} />
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
