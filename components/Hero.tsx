import { ArrowRight, PieChart, Activity} from 'lucide-react';

const Hero = () => {
  return (
    <div className="px-4 md:px-8 pb-12 w-full max-w-7xl mx-auto">
      <div className="bg-[#eff6ff] rounded-[40px] md:rounded-[60px] p-8 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between min-h-[600px]">
        
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-100/50 to-transparent pointer-events-none rounded-r-[60px]" />

        {/* Left Content */}
        <div className="z-10 w-full md:w-1/2 space-y-6 md:pr-12 animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-slate-600 shadow-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Get $50 Reward on first login
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-[1.15]">
            You can Control <br/> 
            All your finance <br/> 
            through <span className="bg-linear-to-r from-[#EFBF04] to-[#BA3C5E] bg-clip-text text-transparent">Dhanova</span>
          </h1>
          
          <p className="text-slate-500 text-lg md:max-w-md leading-relaxed">
            We will take your banking to the next level. Enjoy our one click app with advanced features and security.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-[#BA3C5E] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#fa5252] transition-all hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2 group">
              Get Started
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Illustration (CSS Art/Composition) */}
        <div className="w-full md:w-1/2 relative mt-12 md:mt-0 flex justify-center perspective-1000">
          <div className="relative w-80 h-80 md:w-96 md:h-96 animate-float">
            {/* The Coin/Card "Surfboard" */}
            <div className="absolute bottom-10 left-0 right-0 h-32 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl transform -rotate-12 shadow-2xl flex items-center justify-center border-b-8 border-orange-600">
               <div className="text-white/20 font-bold text-6xl select-none">GOLD</div>
            </div>
            
            {/* Character Abstract */}
            <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2">
                {/* Body */}
                <div className="w-24 h-32 bg-indigo-600 rounded-2xl relative shadow-xl">
                   {/* Shirt Detail */}
                   <div className="absolute top-0 w-full h-full rounded-2xl overflow-hidden">
                       <div className="w-full h-full bg-indigo-500 rounded-bl-[80px]"></div>
                   </div>
                   {/* Arms */}
                   <div className="absolute top-4 -left-8 w-10 h-24 bg-indigo-400 rounded-full transform rotate-45 -z-10"></div>
                   <div className="absolute top-4 -right-8 w-10 h-24 bg-indigo-400 rounded-full transform -rotate-45 -z-10"></div>
                </div>
                {/* Head */}
                <div className="w-20 h-24 bg-slate-800 rounded-3xl absolute -top-20 left-2 shadow-lg border-b-4 border-slate-900/50">
                    <div className="absolute top-6 left-4 w-2 h-2 bg-white rounded-full"></div>
                    <div className="absolute top-6 right-4 w-2 h-2 bg-white rounded-full"></div>
                    <div className="absolute bottom-6 left-6 w-8 h-3 bg-red-400 rounded-full"></div>
                </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-0 right-0 bg-white p-3 rounded-xl shadow-lg animate-bounce delay-100">
                <PieChart className="text-blue-500" size={24} />
            </div>
            <div className="absolute bottom-0 left-0 bg-white p-3 rounded-xl shadow-lg animate-bounce delay-300">
                <Activity className="text-green-500" size={24} />
            </div>
          </div>
          
          {/* Decorative Squiggles */}
          <svg className="absolute top-10 right-10 w-12 h-12 text-blue-300" viewBox="0 0 100 100">
             <path d="M10,50 Q25,25 50,50 T90,50" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;