import { 
  Menu, X, Phone, Mail, ArrowRight, ChevronDown, ChevronUp, 
  TrendingUp, Shield, PieChart, Activity, DollarSign, Users, 
  Layers, BarChart3, CheckCircle2 
} from 'lucide-react';

const Features = () => {
  return (
    <div className="py-20 max-w-7xl mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-20 animate-fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Built for forward-looking finance teams and achieve your goals
        </h2>
        <p className="text-slate-500">
          Our professional team works to secure your financial future with smart logic.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Feature 1 */}
        <div className="group relative bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 border border-slate-50">
           <div className="h-48 bg-blue-50 rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-blue-100/50 transform rotate-6 scale-110 translate-y-8 rounded-3xl"></div>
              {/* Abstract Illustration */}
              <div className="relative z-10 w-24 h-24">
                 <div className="absolute bottom-0 left-4 w-8 h-20 bg-indigo-500 rounded-t-full"></div>
                 <div className="absolute bottom-0 right-4 w-8 h-16 bg-coral-400 rounded-t-full"></div>
                 <div className="absolute top-2 right-0 bg-white p-2 rounded-lg shadow-md">
                   <Mail className="text-blue-500 w-4 h-4" />
                 </div>
              </div>
           </div>
           <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">Smart Management</h3>
           <p className="text-slate-500 text-sm leading-relaxed">
             Efficiently manage your assets with our automated tools designed for modern needs.
           </p>
           <div className="mt-4 flex gap-2">
             <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
               <DollarSign size={16} />
             </div>
             <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
               <CheckCircle2 size={16} />
             </div>
           </div>
        </div>

        {/* Feature 2 (Center) */}
        <div className="group relative bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 border border-slate-50 translate-y-0 md:-translate-y-8 shadow-xl">
           <div className="h-48 bg-yellow-50 rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-yellow-200/50 rounded-full blur-xl"></div>
              <div className="relative z-10 flex gap-4 items-end">
                <div className="w-8 h-12 bg-blue-500 rounded-t-lg"></div>
                <div className="w-8 h-20 bg-indigo-600 rounded-t-lg relative">
                   <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow text-[10px] font-bold">128%</div>
                </div>
                <div className="w-8 h-16 bg-blue-400 rounded-t-lg"></div>
              </div>
           </div>
           <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">Data Analysis</h3>
           <p className="text-slate-500 text-sm leading-relaxed">
             Real-time analytics to help you make informed decisions about your future.
           </p>
           <button className="mt-6 w-full py-2 border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
             View Report
           </button>
        </div>

        {/* Feature 3 */}
        <div className="group relative bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 border border-slate-50">
           <div className="h-48 bg-purple-50 rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden">
               {/* Abstract Walking Character */}
               <div className="relative w-20 h-full flex items-center justify-center">
                  <div className="w-16 h-24 bg-purple-200 rounded-2xl rotate-12 flex items-center justify-center">
                     <Users className="text-purple-600 w-8 h-8" />
                  </div>
               </div>
           </div>
           <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">Secure Collaboration</h3>
           <p className="text-slate-500 text-sm leading-relaxed">
             Work together with your team in a secure environment with role-based access.
           </p>
        </div>
      </div>
    </div>
  );
};

export default Features;