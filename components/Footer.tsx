const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-400 py-12 text-center text-sm">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <img src="/icon.svg" alt="logo" className='w-5 h-5' />
                    <span className="text-xl font-bold bg-linear-to-r from-[#EFBF04] to-[#BA3C5E] bg-clip-text text-transparent tracking-tight">Vara</span>
                </div>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
                <div>
                    &copy; {new Date().getFullYear()} Vara Inc. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer;