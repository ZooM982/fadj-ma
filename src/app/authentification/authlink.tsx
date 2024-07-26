"use client"
import { usePathname } from 'next/navigation';

const links = [
  { name: "Connection", href: "/authentification/connection", },
  { name: "Inscription", href: "/authentification/inscription", },
];

export default function Authlinks() {
  const pathname = usePathname(); 

  const isActive = (href="authentification/") => {
    return pathname === href || (pathname === 'Connection' && href === links[0].href);
  };

  return (
    <>
      {links.map((link) => {
        return (
          <a
            key={link.name}
            href={link.href}
            className={`flex h-[46px] rounded-md w-[253px] border items-center ${isActive(link.href)
              ? 'bg-[#a7dbf5] text-[#000]' 
              : 'hover:bg-[#a7dbf5] hover:text-[#000]'
          }`}>
            <button className="ml-3 text-[14px] rounded-md  h-12 w-full  hover:text-[#fff]md:flex-none">{link.name}</button>
          </a>
        );
      })}
    </>
  );
}
