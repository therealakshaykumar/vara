'use client'
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<null | number>(null);
  const faqs = [
    { q: "How much profit can you get in a Month?", a: "Profit margins vary based on your portfolio allocation, but our average user sees a 12% annual return distributed monthly." },
    { q: "How do I get started with Finance company?", a: "Simply click 'Get Started', create an account, and link your primary funding source. Our AI handles the rest." },
    { q: "Is there a minimum deposit required?", a: "No, you can start with as little as $10. We believe financial freedom should be accessible to everyone." },
    { q: "Can I withdraw my funds at any time?", a: "Yes, our FlexGuard feature ensures your liquidity is always maintained with instant withdrawals." }
  ];

  return (
    <div className="py-20 max-w-3xl mx-auto px-6">
       <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-slate-900 mb-4">Frequently Asked <br/><i className="font-serif italic text-[#BA3C5E]">Questions</i></h2>
          <p className="text-slate-500 text-sm">Have questions about our finance service? We offer wide range of services form better to give best service in the town.</p>
       </div>

       <div className="space-y-4">
          {faqs.map((item, idx) => (
             <div 
               key={idx} 
               className={`border rounded-2xl transition-all duration-300 overflow-hidden ${openIndex === idx ? 'bg-slate-50 border-indigo-100' : 'bg-white border-slate-100'}`}
             >
                <button 
                  onClick={() => setOpenIndex(idx === openIndex ? -1 : idx)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center"
                >
                   <span className={`font-medium ${openIndex === idx ? 'text-indigo-900' : 'text-slate-700'}`}>{item.q}</span>
                   {openIndex === idx ? <ChevronUp size={20} className="text-indigo-600"/> : <ChevronDown size={20} className="text-slate-400"/>}
                </button>
                <div className={`px-6 text-slate-500 text-sm transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                   {item.a}
                </div>
             </div>
          ))}
       </div>
    </div>
  );
};

export default FAQ;