'use client'
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';


const Header: React.FC = () => {

  const { theme, setTheme } = useTheme();
  
  return (
    <header className='h-10 flex justify-around items-center'>
          <h1>
            <Link href={`/`}>RetroDash</Link>
          </h1>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
              <SunIcon className="h-3 w-3 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-3 w-3 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
          </Button>
    </header>
  );
}

export default Header;