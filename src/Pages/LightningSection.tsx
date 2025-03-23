import React, { useEffect, useRef } from 'react';

const LightningSection = () => {
  const videoRefs = {
    active: useRef(null),
    idle: useRef(null),
    popup: useRef(null)
  };

  useEffect(() => {
    // Function to ensure videos play
    const playVideos = () => {
      Object.values(videoRefs).forEach(ref => {
        if (ref.current) {
          ref.current.play().catch(err => console.log('Video play error:', err));
        }
      });
    };

    // Play videos once component is mounted
    playVideos();

    // Setup event listeners for user interaction to enable autoplay
    const events = ['click', 'touchstart'];
    events.forEach(event => document.addEventListener(event, playVideos));

    return () => {
      events.forEach(event => document.removeEventListener(event, playVideos));
    };
  }, []);

  return (
    <section className="lightning safe-padding w-full overflow-hidden">
      <div className="relative mx-auto max-w-[1600px] pb-[400px]  xl:pb-[320px] lg:max-w-[1000px] lg:pb-12 lg:px-10 md:px-8 md:max-w-none md:pl-[120px] sm:pl-8 sm:pb-8 xs:pl-4 xs:pr-4">
        {/* Heading - Responsive font sizes */}
        <h2 className="relative z-20 inline-block max-w-[1200px] bg-home-lightning-title pb-12 font-title md:text-[128px] font-medium leading-[0.9] -tracking-wide [mask-image:radial-gradient(100px_100px_at_77.8%_86%,transparent_50%,transparent_94%,black_90%)] xl:max-w-4xl xl:bg-home-lightning-title-xl xl:text-[120px] lg:max-w-2xl lg:bg-home-lightning-title-lg lg:text-[100px] md:max-w-xl md:bg-home-lightning-title-md  md:[mask-image:radial-gradient(60px_90px_at_78.1%_82%,transparent_100%,black)] sm:min-w-[300px] sm:max-w-lg sm:bg-home-lightning-title-sm sm:text-[60px] sm:[mask-image:radial-gradient(70px_80px_at_93.6%_73%,transparent_97%,black)] xs:text-[44px] xs:pb-6 text-white">
          Lightning fast. Edge&nbsp;ready.
        </h2>

        {/* Video container - Responsive sizing */}
        <div className="relative ml-40 mt-[-140px] aspect-[1.181818] w-[1400px] xl:ml-32 xl:mt-[-130px] xl:w-[1100px] lg:ml-12 lg:mt-[-120px] lg:w-full lg:max-w-[900px] md:ml-10 md:w-[800px] sm:ml-2 sm:mt-[-100px] sm:w-[650px] xs:ml-0 xs:mt-[-80px] xs:w-full">
          {/* Active video - Responsive adjustments */}
          <VideoContainer 
            ref={videoRefs.active} 
            sources={[
              { src: "https://neon.tech/videos/pages/home/lightning/active.mp4?updated=20240510192048", type: "video/mp4" },
              { src: "https://neon.tech/videos/pages/home/lightning/active.webm?updated=20240510192048", type: "video/webm" }
            ]}
            width="100%"
            height="auto"
            className="absolute"
          />

          {/* Idle video - Responsive adjustments */}
          <VideoContainer 
            ref={videoRefs.idle} 
            sources={[
              { src: "https://neon.tech/videos/pages/home/lightning/idle.mp4?updated=20240510192048", type: "video/mp4" },
              { src: "https://neon.tech/videos/pages/home/lightning/idle.webm?updated=20240510192048", type: "video/webm" }
            ]}
            width="100%"
            height="auto"
            className="relative transition-opacity duration-500"
          />

          {/* Popup video - Responsive positioning */}
          <div className="absolute bottom-[9.5%] left-[52.6%] w-[45%] sm:bottom-[8%] sm:left-[50%] xs:w-[48%]">
            <VideoContainer 
              ref={videoRefs.popup} 
              sources={[
                { src: "https://neon.tech/videos/pages/home/lightning/popup.mp4?updated=20240510192048", type: "video/mp4" },
                { src: "https://neon.tech/videos/pages/home/lightning/popup.webm?updated=20240510192048", type: "video/webm" }
              ]}
              width="100%"
              height="auto"
              className="relative md:w-[100%] w-10"
            />
          </div>
        </div>

        {/* Text content - Responsive margins and font sizes */}
        <p className="relative z-10 ml-40 mt-[-450px] max-w-[500px] font-light tracking-extra-tight text-gray-new-70 text-lg xl:ml-32 xl:mt-[-400px] xl:leading-snug lg:-mt-72 lg:ml-12 lg:max-w-[400px] md:ml-10 sm:ml-2 sm:mt-[-300px] sm:max-w-[320px] xs:ml-0 xs:mt-[-240px] xs:max-w-[280px] xs:text-base">
          <span className="font-medium text-gray-new-94">The Neon serverless driver</span>, designed for fast queries over HTTP
        </p>

        {/* Code example - Responsive styling */}
        <code className="relative z-10 ml-40 mt-8 flex max-w-lg flex-col gap-y-5 text-sm leading-dense text-gray-new-50 [mask-image:radial-gradient(110%_110%_at_29%_52%,rgba(0,0,0,.85),rgba(0,0,0,.8)_35%,transparent_96%)] xl:ml-32 xl:max-w-[300px] lg:ml-12 lg:max-w-[450px] lg:gap-y-4 md:ml-10 sm:ml-2 sm:max-w-[380px] xs:ml-0 xs:max-w-full xs:text-xs xs:gap-y-3 xs:mt-4 overflow-x-auto">
          <span>import {'{'} neon {'}'} from '@neondatabase/serverless';</span>
          <span>const sql = neon('postgresql://usr:pass@proj.us-east-2.aws.neon.tech/db');</span>
          <span>const posts = await sql('SELECT * FROM posts');</span>
        </code>

        {/* CTA link - Responsive sizing */}
        <a 
          className="text-white transition-colors duration-200 hover:text-primary-2 relative z-10 ml-40 mt-10 flex w-fit items-center text-lg font-medium leading-none tracking-[-0.03em] xl:ml-32 lg:ml-12 md:ml-10 sm:ml-2 sm:mt-6 sm:text-lg xs:ml-0 xs:mt-4 xs:text-base group inline-flex w-fit items-center gap-3" 
          href="/docs/serverless/serverless-driver"
        >
          <span>Get the Serverless Driver</span>
          <ArrowIcon width={24} height={12} className="sm:w-[20px] sm:h-[10px] xs:w-[16px] xs:h-[8px]" />
        </a>

        {/* Camera image - Responsive positioning */}
        <img 
          alt="" 
          loading="lazy" 
          width="220" 
          height="20" 
          decoding="async" 
          data-nimg="1" 
          className="absolute top-[280px] z-10 h-20 w-auto xl:top-[220px] xl:h-16 lg:left-[750px] lg:right-auto lg:top-[170px] lg:h-14 md:left-[600px] md:h-12 sm:left-[450px] sm:top-[120px] sm:h-10 xs:left-auto xs:right-2 xs:top-[80px] xs:h-8" 
          style={{ color: "transparent" }} 
          srcSet="https://neon.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fphone-camera.27658a1d.png&w=384&q=100&dpl=dpl_7AxAMRkmDCFnVSbrSF69b3SfYmKd" 
          src="https://neon.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fphone-camera.27658a1d.png&w=384&q=100&dpl=dpl_7AxAMRkmDCFnVSbrSF69b3SfYmKd" 
        />
      </div>
    </section>
  );
};

// Reusable video container component with improved responsive handling
const VideoContainer = React.forwardRef(({ sources, width, height, className = "" }, ref) => (
  <div className={`overflow-hidden [mask-image:radial-gradient(120%_120%_at_45%_-10%,black_77%,transparent_90%)] ${className}`}>
    <div className="relative w-full" style={{ paddingBottom: "84.64%" }}>
      <video 
        ref={ref}
        className="absolute inset-0 w-full h-full object-cover" 
        autoPlay 
        muted
        loop 
        playsInline 
        style={{ opacity: 1 }}
      >
        {sources.map((source, index) => (
          <source key={index} src={source.src} type={source.type} />
        ))}
      </video>
    </div>
  </div>
));

// Arrow icon component with configurable size
const ArrowIcon = ({ width = 16, height = 8, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={width} 
    height={height} 
    fill="none" 
    viewBox="0 0 16 8" 
    className={`-mb-px shrink-0 transition-transform duration-200 group-hover:translate-x-[3px] ${className}`}
  >
    <path 
      stroke="currentColor" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="1.4" 
      d="M1 4h14m0 0-3-3m3 3-3 3"
    />
  </svg>
);

export default LightningSection;