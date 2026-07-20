import './styles/App.css';
// import Navbar from './components/Navbar';
import introBg from './assets/intro-bg.png';
import ProfileCard from './components/ProfileCard';


function App() {

  return (
    <div
      className="border-box h-screen bg-fixed bg-cover bg-center bg-no-repeat snap-y snap-mandatory overflow-y-scroll scroll-smooth overflow-auto scrollbar-none p-8 md:p-[5%] text-white"
      style={{ backgroundImage: `url(${introBg})` }}
    >

      <div id="home" className="my-auto h-screen snap-start flex items-center justify-center">

          <div id="intro-text" className="text-center lg:w-[60%]">

            <h1 className="text-4xl font-bold md:text-6xl tracking-tight">
            Chibuike Ihieri
            </h1>

            <p className="text-xl mt-2 font-semibold">
              Web Developer
            </p>

            <p className="text-lg mt-4 lg:px-4">
              I create responsive, beautiful, and user-friendly web applications that meet the needs of clients and users alike.
            </p>

            <div id="intro-buttons" className="mt-6 justify-content space-y-4 space-x-4 lg:space-y-0">

              <button value="View Projects" className="rounded-lg bg-blue-500 px-4 py-2 hover:bg-blue-600">View Projects</button>

              <button value="Get in Touch" className="rounded-lg bg-green-500 px-4 py-2 hover:bg-green-600">Get in Touch</button>
              
              <button value="Download CV" className="rounded-lg bg-yellow-500 px-4 py-2 hover:bg-yellow-600">Download CV</button>

            </div>

          </div>
        
      </div>
      
      <div id="about" className="h-screen my-auto flex items-center justify-center snap-start space-y-4 lg:space-x-10 lg:flex-row flex-col">

        <ProfileCard />

        <div id="about-text" className="lg:w-[60%]">
          <h2 className="text-3xl text-center font-bold mb-4">Who am I ?</h2>
          <p className="text-lg">
            I'm Chibuike, also commonly known as Ceekay. A <span className="font-semibold">Software Engineer</span> specialized in <span className="font-semibold">web development</span>. I'm highly enthusiastic about building quality software applications that solve real-world problems as well as provide pleasant user experiences. I enjoy converting beatiful user interfaces into functional web applications and continuously learning new technologies to enhance my skills. <br /> <br />
            Apart from coding, I also enjoy movies, video games, watching youtube videos, and attending tech events. I believe in continuous self-improvement, and networking which drives me to be a better developer and person every day.
          </p>
        </div>
      </div>

      <div id="projects" className="h-screen my-auto flex items-center justify-center snap-start">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
          <p className="text-lg">
            Here are some of the projects I have worked on. Each project showcases my skills in web development and my ability to create efficient solutions.
          </p>
        </div>
      </div>

      <div id="contact" className="h-screen my-auto flex items-center justify-center snap-start">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <p className="text-lg">
            Feel free to reach out to me for any inquiries or collaborations. I am always open to discussing new projects and opportunities.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
