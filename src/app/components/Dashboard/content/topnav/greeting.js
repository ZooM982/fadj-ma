import { useState, useEffect } from 'react';
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

function Greeting() {
  const [date, setDate] = useState(new Date());
  const [hour] = useState(date.getHours());
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000); 
    return () => clearInterval(intervalId);
  }, []);

  const greeting = hour < 18 ? 'Bonjour' : 'Bonsoir';
  const icon = hour < 18 ? <span className='sun'> <MdSunny /> </span>: <span className='moon'><FaMoon /></span>;

  return (
    <div className='flex md:grid'>
      <div className='flex md:w-1/2 md:ml-auto ml-2'>
        <span className='mr-3 my-auto text-[14px]'>{icon}</span>
        <p className='float-left md:float-right'>{greeting}</p>
      </div>
      <div className='ml-auto md:ml-0 me-3 md:me-0 float-right md:float-left'>
        <p className='flex'>
          {new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }).format(date)}
          &nbsp;&nbsp;
          {isHydrated 
            ? `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}` 
            : '...'}
        </p>
      </div>
    </div>
  );
}

export default Greeting;
