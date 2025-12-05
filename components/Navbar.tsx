"use client"
import { useState } from 'react';
import { 
  Menu, X, Phone, Mail, ArrowRight, ChevronDown, ChevronUp, 
  TrendingUp, Shield, PieChart, Activity, DollarSign, Users, 
  Layers, BarChart3, CheckCircle2 
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between py-6 px-4 md:px-12 max-w-7xl mx-auto w-full">
      {/* Logo */}
      <div className="flex items-center gap-2">
        {/* <div className="w-8 h-8 bg-coral-500 rounded-lg flex items-center justify-center transform rotate-12">
           <div className="w-4 h-4 bg-white rounded-full opacity-50"></div>
        </div> */}
        <img src="/icon.svg" alt="logo" className='w-5 h-5' />
        <span className="text-xl font-bold bg-linear-to-r from-[#EFBF04] to-[#BA3C5E] bg-clip-text text-transparent tracking-tight">Vara</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
        <a href="#" className="hover:text-slate-900 transition-colors">Home</a>
        <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
        <a href="#service" className="hover:text-slate-900 transition-colors">Service</a>
        <a href="#data" className="hover:text-slate-900 transition-colors">Data</a>
        <a href="#clients" className="hover:text-slate-900 transition-colors">Clients</a>
      </div>

      {/* Actions */}
      <div className="hidden md:flex items-center gap-4">
        <button className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors text-slate-700">
          <Phone size={18} />
        </button>
        <button className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors text-slate-700">
          <Mail size={18} />
        </button>
        <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-transform hover:scale-105">
          Let's Talk
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-slate-700">
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-xl z-50 p-6 flex flex-col gap-4 md:hidden border-b border-slate-100">
          <a href="#" className="text-slate-700 font-medium">Home</a>
          <a href="#about" className="text-slate-700 font-medium">About</a>
          <a href="#service" className="text-slate-700 font-medium">Service</a>
          <button className="bg-slate-900 text-white w-full py-3 rounded-xl font-semibold mt-2">
            Let's Talk
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;