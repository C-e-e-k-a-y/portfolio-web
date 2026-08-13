import introPic from '../assets/intro-pic.png';

export default () => {
  return (
    // Outer Wrapper: Provides padding so the offset elements don't get cut off
    <div id="about-image" className="relative size-60 md:size-80 lg:w-fit lg:size-100 lg:max-h-[80vh]">

      {/* 1. Offset Border Layer */}
      <div className="absolute lg:-inset-1 lg:translate-x-3 lg:translate-y-3 bg-linear-to-br from-cyan-500 via-blue-500 to-purple-500 lg:bg-none border-2 border-blue-500/70 rounded-3xl pointer-events-none h-full w-full lg:rounded-none" />

      {/* 2. Main Image Container */}
      <div className="flex relative z-10 w-full h-full items-center justify-center">
        <img
          src={introPic}
          alt="Profile"
          className="h-[95%] w-[95%] lg:h-full lg:w-full object-cover rounded-3xl lg:rounded-none object-top"
        />
      </div>

      {/* 3. Floating Experience Badge */}
      <div className="absolute -left-6 bottom-10 z-20 bg-linear-to-r from-blue-600 to-cyan-400 text-white p-2 rounded-lg shadow-lg">
        <h3 className="text-md font-bold tracking-wide">1+ Years</h3>
        <p className="text-xs font-medium text-cyan-100 uppercase tracking-wider">Experience</p>
      </div>

    </div>
  );
}