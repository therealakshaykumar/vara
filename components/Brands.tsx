const Brands = () => {
  const brands = [
    { name: 'amazon', label: 'Amazon' },
    { name: 'apple', label: 'Apple' },
    { name: 'youtube', label: 'YouTube' },
    { name: 'figma', label: 'Figma' },
    { name: 'chrome', label: 'Google' },
    { name: 'twitter', label: 'X' }, // Using 'X' for generic match
  ];

  return (
    <div className="py-12 max-w-7xl mx-auto px-6">
      <div className="text-center mb-8">
         <h3 className="text-sm font-bold text-slate-400 tracking-wider uppercase">Our Partners and Clients</h3>
      </div>
      <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
        {brands.map((brand, idx) => (
          <div key={idx} className="flex items-center gap-2 text-xl font-bold text-slate-700 cursor-default hover:text-black transition-colors">
            {/* Simple simulated logos using Lucide or text */}
             {brand.label === 'YouTube' && <div className="w-8 h-6 bg-red-600 rounded-lg flex items-center justify-center"><div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[8px] border-l-white border-b-[4px] border-b-transparent ml-1"></div></div>}
             {brand.label === 'Google' && <span className="font-extrabold text-slate-600">G</span>}
             {brand.label === 'Apple' && <div className="w-6 h-7 bg-slate-800 rounded-md mask-apple"></div>}
            <span>{brand.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;