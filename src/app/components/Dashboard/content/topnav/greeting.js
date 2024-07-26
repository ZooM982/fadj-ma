import { useState, useEffect } from 'react';
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

function Greeting() {
  const [date, setDate] = useState(new Date());
  const [hour] = useState(date.getHours());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000); 
    return () => clearInterval(intervalId);
  }, []);

  const greeting = hour < 18 ? 'Bonjour' : 'Bonsoir';
  const icon = hour < 18 ? <span className='sun'> <MdSunny /> </span>: <span className='moon'><FaMoon /></span>;

  return (
    <div className='grid'>
      <div className='flex w-1/2 ml-auto'>
        <span className='mr-3 my-auto text-[14px]'>{icon}</span>
        <p className='float-right'>{greeting}</p>
      </div>
      <div className='float-left'>
        <p className='flex'>
          {new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }).format(date)}
          &nbsp;&nbsp;
          {date.getHours().toString().padStart(2, '0')}:{date.getMinutes().toString().padStart(2, '0')}:{date.getSeconds().toString().padStart(2, '0')}
        </p>
      </div>
    </div>
  );
}

export default Greeting;