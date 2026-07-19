import './styles/App.css';
// import Navbar from './components/Navbar';
import introBg from './assets/intro-bg.png';
import introPic from './assets/intro-pic.png';


function App() {

  return (
    <div
      className="border-box h-screen bg-fixed bg-cover bg-center bg-no-repeat snap-y snap-mandatory overflow-y-scroll scroll-smooth overflow-auto scrollbar-none p-10"
      style={{ backgroundImage: `url(${introBg})` }}
    >

      <div id="home" className="my-auto h-screen relative snap-start flex items-center justify-center space-y-4 lg:space-x-10 lg:flex-row flex-col-reverse">

          <div id="intro-text" className="text-center lg:w-[60%]">

            <h1 className="text-4xl font-bold text-white md:text-6xl tracking-tight">
            Chibuike Ihieri
            </h1>

            <p className="text-xl text-white mt-2 font-semibold">
              Web Developer
            </p>

            <p className="text-lg text-white mt-4 text-start lg:px-4">
              A <strong className="font-semibold">software engineer</strong> specialized in web development. I create responsive and user-friendly applications that meet the needs of clients and users alike.
            </p>

            <div id="intro-buttons" className="mt-6 justify-content space-y-4 space-x-4 lg:space-y-0">

              <button value="View Projects" className="rounded-lg bg-blue-500 text-white px-4 py-2 hover:bg-blue-600">View Projects</button>

              <button value="Get in Touch" className="rounded-lg bg-green-500 text-white px-4 py-2 hover:bg-green-600">Get in Touch</button>
              
              <button value="Download CV" className="rounded-lg bg-yellow-500 text-white px-4 py-2 hover:bg-yellow-600">Download CV</button>

            </div>

          </div>

          <div id="intro-image" className="lg:h-100 h-40 w-40 rounded-full lg:rounded-none p-1 bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 lg:max-w-[40%] lg:max-h-[70vh] lg:w-fit">
            <img src={introPic} alt="My Portrait" className=" h-full w-full object-cover rounded-full lg:rounded-none object-top"/>
          </div>
        
      </div>
      
      <div id="about" className="h-screen my-auto flex items-center justify-center snap-start">
        <div className="text-center">
          <h2 className="text-3xl text-white font-bold mb-4">About Me</h2>
          <p className="text-lg text-white">
            I am a passionate web developer with experience in building responsive and user-friendly applications. I enjoy solving complex problems and continuously learning new technologies to enhance my skills.
          </p>
        </div>
      </div>

      <div id="projects" className="h-screen my-auto flex items-center justify-center snap-start">
        <div className="text-center">
          <h2 className="text-3xl text-white font-bold mb-4">Projects</h2>
          <p className="text-lg text-white">
            Here are some of the projects I have worked on. Each project showcases my skills in web development and my ability to create efficient solutions.
          </p>
        </div>
      </div>

      <div id="contact" className="h-screen my-auto flex items-center justify-center snap-start">
        <div className="text-center">
          <h2 className="text-3xl text-white font-bold mb-4">Contact Me</h2>
          <p className="text-lg text-white">
            Feel free to reach out to me for any inquiries or collaborations. I am always open to discussing new projects and opportunities.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
