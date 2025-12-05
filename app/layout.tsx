import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dhanova – Smart Finance Solutions for Secure Wealth Growth",
  description:
    "Dhanova is a modern finance platform offering investment insights, wealth management tools, and secure financial planning solutions. Grow, manage, and track your money with confidence.",
  keywords: [
    "Dhanova finance",
    "finance platform",
    "wealth management",
    "investment tools",
    "financial planning",
    "personal finance",
    "money management",
    "investment insights",
    "secure finance",
    "budgeting tools",
  ],
  openGraph: {
    title: "Dhanova – Smart Finance Solutions for Your Wealth",
    description:
      "Manage and grow your wealth with Dhanova. Access investment tools, financial planning insights, and secure money management features.",
    url: "https://Dhanova.com", // replace with your real domain
    siteName: "Dhanova",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhanova – Smarter Finance for Everyone",
    description:
      "A modern platform offering investment insights, wealth tools, and financial management solutions.",
  },
  authors: [{ name: "Dhanova Team" }],
};


const customStyles = `
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
  .animate-fade-up {
    animation: fadeUp 0.8s ease-out forwards;
  }
  .animate-float {
    animation: float 4s ease-in-out infinite;
  }
  .delay-100 { animation-delay: 0.1s; }
  .delay-200 { animation-delay: 0.2s; }
  .delay-300 { animation-delay: 0.3s; }
  
  /* Smooth Scroll Behavior */
  html { scroll-behavior: smooth; }
  
  /* Hide scrollbar for cleaner look in some containers */
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        <style>{customStyles}</style>
        {children}
      </body>
    </html>
  );
}
