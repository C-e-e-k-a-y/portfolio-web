import Button from "./Button"
import Icon from "./Icons";
import HomeIcon from '../assets/icons/home-icon.svg?react';
import MyLogo from '../assets/logo.jpg';
import FacebookLogo from '../assets/facebook-logo.png';
import TwitterLogo from '../assets/twitter.png';
import LinkedInLogo from '../assets/linkedin.png';

export default function Navbar() {
  return (
    <nav className="group max-h-[calc(100vh-2rem)] fixed left-5 top-1/2 transform -translate-y-1/2 z-50 w-16 hover:w-34 bg-red-500 backdrop-blur-sm px-4 py-3 flex flex-col justify-between items-center rounded-xl shadow-md outline-1 outline-gray-300 transition-all duration-500 ease-in-out">
      <div className="mb-4 flex w-full justify-center">
        <img src={MyLogo} alt="Logo" className="w-9 h-9 group-hover:w-15 group-hover:h-15 rounded-full object-cover"/>
      </div>

      <div className="flex w-full flex-col">
        <Button value="Home" icon={<HomeIcon className="w-6 h-6 inline"/>} />
        <Button value="About" icon={<HomeIcon className="w-6 h-6 inline"/>} />
        <Button value="Projects" icon={<HomeIcon className="w-6 h-6 inline"/>} />
        <Button value="Contact" icon={<HomeIcon className="w-6 h-6 inline"/>} />
      </div>

      <div className="flex w-full flex-col mt-4 space-y-4 items-center ">
        <Icon href="https://facebook.com" src={FacebookLogo} alt="Facebook Icon" />
        <Icon href="https://twitter.com" src={TwitterLogo} alt="Twitter Icon" />
        <Icon href="https://linkedin.com" src={LinkedInLogo} alt="LinkedIn Icon" />
      </div>
      
    </nav>
  );
}