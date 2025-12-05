import { 
  Menu, X, Phone, Mail, ArrowRight, ChevronDown, ChevronUp, 
  TrendingUp, Shield, PieChart, Activity, DollarSign, Users, 
  Layers, BarChart3, CheckCircle2 
} from 'lucide-react';

const BoostSection = () => {
  return (
    <div className="py-20 max-w-7xl mx-auto px-6 bg-slate-50 rounded-[60px] my-12">
       <div className="flex flex-col md:flex-row items-center justify-between gap-12 px-4 md:px-12">
          <div className="md:w-1/2">
             <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
               Boost your business financially today
             </h2>
             <p className="text-slate-500 mb-8 max-w-md">
               Eleifend feugiat auctor pharetra ridiculus. Imperdiet vel turpis nam amet varius dignissim tellus volutpat.
             </p>
             <button className="bg-slate-900 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-slate-800 transition-all hover:gap-4">
               Get Started <ArrowRight size={18} />
             </button>
          </div>

          <div className="md:w-1/2 relative flex justify-center">
             {/* Decorative Cards */}
             <div className="relative w-80 h-80">
                {/* Back Card */}
                <div className="absolute top-0 right-0 w-56 h-72 bg-[#FFD166] rounded-[32px] transform rotate-12 flex flex-col items-center pt-8 shadow-lg">
                    <div className="w-20 h-20 bg-white rounded-full mb-4 border-4 border-[#FFD166]"></div>
                    <div className="w-32 h-4 bg-white/50 rounded-full mb-2"></div>
                    <div className="w-24 h-4 bg-white/50 rounded-full"></div>
                </div>
                {/* Front Card */}
                <div className="absolute top-10 left-4 w-56 h-72 bg-[#EF476F] rounded-[32px] transform -rotate-6 flex flex-col items-center pt-8 shadow-xl">
                     <div className="w-20 h-20 bg-white rounded-full mb-4 border-4 border-[#EF476F] overflow-hidden">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" />
                     </div>
                     <div className="w-32 h-4 bg-white/30 rounded-full mb-2"></div>
                     <div className="w-24 h-4 bg-white/30 rounded-full"></div>
                     
                     <div className="mt-8 w-full px-6 space-y-2">
                        <div className="flex items-center gap-2 text-white/80">
                           <div className="w-4 h-4 bg-blue-500 rounded flex items-center justify-center text-[10px]">✓</div>
                           <span className="text-xs">Verified Profile</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/80">
                           <div className="w-4 h-4 bg-blue-500 rounded flex items-center justify-center text-[10px]">✓</div>
                           <span className="text-xs">Premium Member</span>
                        </div>
                     </div>
                </div>
                {/* Center Main Card */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-80 bg-[#118AB2] rounded-[32px] shadow-2xl flex flex-col items-center pt-8 z-10 hover:-translate-y-4 transition-transform duration-500">
                     <div className="w-24 h-24 bg-white rounded-2xl mb-4 p-1">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka" alt="avatar" className="bg-slate-100 rounded-xl" />
                     </div>
                     <h4 className="text-white font-bold text-lg">Alex Morgan</h4>
                     <p className="text-white/60 text-sm mb-6">Finance Director</p>
                     
                     <div className="w-full bg-white/10 flex-1 rounded-t-[32px] p-6 backdrop-blur-sm">
                        <div className="flex justify-between text-white/80 text-sm mb-2">
                          <span>Progress</span>
                          <span>84%</span>
                        </div>
                        <div className="w-full bg-black/20 h-2 rounded-full overflow-hidden">
                           <div className="bg-white h-full w-[84%] rounded-full"></div>
                        </div>
                     </div>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
};

export default BoostSection