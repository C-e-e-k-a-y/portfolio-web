import introPic from '../assets/intro-pic.png';

export default () => {
  return (
    // Outer Wrapper: Provides padding so the offset elements don't get cut off
    <div id="about-image" className="relative h-60 w-60 lg:h-100 lg:w-fit lg:max-w-[40%] lg:max-h-[70vh]">
      
      {/* 1. Offset Border Layer (Shifted down and right using top/left offsets) */}
      <div className="absolute lg:-inset-1 lg:translate-x-5 lg:translate-y-5 border-2 border-indigo-500/30 rounded-3xl pointer-events-none h-full w-full lg:rounded-none" />

      {/* 2. Main Image Container */}
      <div className="flex relative z-10 w-full h-full items-center justify-center">
        <img
          src={introPic}
          alt="Profile"
          className="h-[95%] w-[95%] lg:h-full lg:w-full object-cover rounded-3xl lg:rounded-none object-top"
        />
      </div>

      {/* 3. Floating Experience Badge (Overlapping bottom-left corner) */}
      <div className="absolute -left-6 bottom-10 z-20 bg-linear-to-r from-blue-600 to-cyan-400 text-white p-2 rounded-lg shadow-lg">
        <h3 className="text-md font-bold tracking-wide">1+ Years</h3>
        <p className="text-xs font-medium text-cyan-100 uppercase tracking-wider">Experience</p>
      </div>

    </div>
  );
}