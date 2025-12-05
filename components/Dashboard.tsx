import { 
  Menu, X, Phone, Mail, ArrowRight, ChevronDown, ChevronUp, 
  TrendingUp, Shield, PieChart, Activity, DollarSign, Users, 
  Layers, BarChart3, CheckCircle2 
} from 'lucide-react';

const DashboardPreview = () => {
  return (
    <div className="py-12 bg-slate-50/50" id="data">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Card 1: Asset Gen */}
        <div className="bg-white p-8 rounded-[32px] shadow-sm hover:shadow-md transition-shadow">
           <h3 className="text-lg font-bold text-slate-900 mb-1">Secure Retirement</h3>
           <p className="text-slate-500 text-sm mb-8">Our application downloads reach to 50 thousand.</p>
           
           <div className="bg-slate-50 rounded-2xl p-6 relative overflow-hidden">
              <div className="flex justify-between items-start mb-6">
                 <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Asset Generated</div>
                    <div className="text-3xl font-bold text-slate-900">128,7K</div>
                 </div>
                 <div className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
                   <TrendingUp size={12} /> +3.4%
                 </div>
              </div>
              
              {/* Line Chart Graphic */}
              <div className="h-32 w-full flex items-end gap-1 relative">
                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                   <path d="M0,80 C20,70 40,90 60,60 S100,20 140,40 S200,80 240,30 S300,10 320,0" 
                         fill="none" stroke="#6366f1" strokeWidth="3" className="drop-shadow-lg" />
                   <path d="M0,80 C20,70 40,90 60,60 S100,20 140,40 S200,80 240,30 S300,10 320,0 V120 H0 Z" 
                         fill="url(#grad1)" opacity="0.2" />
                   <defs>
                     <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                       <stop offset="0%" style={{stopColor:'#6366f1', stopOpacity:1}} />
                       <stop offset="100%" style={{stopColor:'#6366f1', stopOpacity:0}} />
                     </linearGradient>
                   </defs>
                </svg>
              </div>
           </div>
        </div>

        {/* Card 2: Investment Split */}
        <div className="bg-white p-8 rounded-[32px] shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold text-slate-900 mb-1">Invest with Potential</h3>
            <p className="text-slate-500 text-sm mb-8">FlexGuard includes a Performance Lock feature for your Future.</p>

            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <div>
                        <div className="text-xs text-slate-400">Total Opportunities</div>
                        <div className="text-2xl font-bold">6,4K <span className="text-sm font-normal text-green-500">+3.4%</span></div>
                    </div>
                    <select className="bg-slate-50 border-none text-xs rounded-lg p-2 text-slate-600">
                        <option>Last 7 Days</option>
                    </select>
                </div>
                
                {/* Progress Bars */}
                <div className="space-y-3">
                   <div className="flex justify-between text-xs font-medium text-slate-600">
                      <span>Asset Received</span>
                      <span>1,1K <span className="text-green-500">+3.4%</span></span>
                   </div>
                   <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500 w-[65%] rounded-full"></div>
                   </div>

                   <div className="flex justify-between text-xs font-medium text-slate-600 pt-2">
                      <span>Spending</span>
                      <span>2,3K <span className="text-green-500">+11.4%</span></span>
                   </div>
                   <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-coral-400 w-[45%] rounded-full"></div>
                   </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPreview;