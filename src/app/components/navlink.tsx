"use client"


import { usePathname } from 'next/navigation';
import { TfiViewGrid } from 'react-icons/tfi';
import { FaTablets } from 'react-icons/fa';

const links = [
  {
    name: "Tableau de board",
    href: "/Admin/dashboard",
    icon: <TfiViewGrid />,
  },
  { name: "Medicaments", href: "/Admin/medocs", icon: <FaTablets /> },
];

export default function NavLinks() {
  const pathname = usePathname(); 

  
  const isActive = (href="Admin/") => {
    return pathname === href || (pathname === 'Tableau de board"' && href === links[0].href);
  };

  return (
    <div className='flex justify-between md:grid'>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className={`flex w-[50%] md:w-full h-[48px] items-center p-3 text-sm font-medium ${
            isActive(link.href)
              ? 'bg-[#009099] text-[#fff]' 
              : 'hover:bg-[#009099] hover:text-[#fff]'
          } `}
        >
          <span className="ml-5 text-[24px]">{link.icon}</span>
          <p className="hidden md:block ml-3 text-[14px]">{link.name}</p>
        </a>
      ))}
    </div>
  );
}
