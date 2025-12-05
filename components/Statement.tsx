const StatementSection = () => {
    return (
        <div className="py-20 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Stay updated with monthly statements</h2>
                <p className="text-slate-500 mb-8 leading-relaxed">
                    FlexGuard includes a Performance Lock feature which gives clients the flexibility to End Date for your Future.
                </p>
                
                <div className="flex gap-4">
                     <div className="flex items-center gap-2">
                         <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                         <span className="text-sm text-slate-600">Spending</span>
                     </div>
                     <div className="flex items-center gap-2">
                         <div className="w-3 h-3 rounded-full bg-orange-300"></div>
                         <span className="text-sm text-slate-600">Allocation</span>
                     </div>
                </div>
            </div>

            <div className="bg-white p-8 rounded-[40px] shadow-lg border border-slate-100">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <div className="text-xs text-slate-400 uppercase">Accenture Analysis</div>
                        <div className="text-3xl font-bold text-slate-900">12,3K</div>
                    </div>
                    <div className="text-right">
                       <div className="text-xs text-slate-400">Spending</div>
                       <div className="text-sm font-bold text-slate-900">2,3K <span className="bg-green-100 text-green-700 text-[10px] px-1 rounded">+11.4%</span></div>
                    </div>
                </div>

                {/* Bar Chart CSS */}
                <div className="flex justify-between items-end h-40 gap-4">
                    {[40, 70, 50, 85, 60, 90, 45].map((h, i) => (
                        <div key={i} className="w-full bg-slate-50 rounded-t-xl relative group">
                            <div 
                                style={{ height: `${h}%` }} 
                                className={`w-full absolute bottom-0 rounded-t-xl transition-all duration-500 group-hover:opacity-80 ${i % 2 === 0 ? 'bg-purple-300' : 'bg-orange-300'}`}
                            ></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default StatementSection;