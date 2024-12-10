'use client';

import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

interface DashboardHeaderProps {
  username: string;
  motto?: string;
}

export function DashboardHeader({ username, motto }: DashboardHeaderProps) {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center justify-between space-y-2">
      <div className='grid md:grid-cols-2'>
        <h2 className="text-3xl font-bold tracking-tight capitalize">{username}{"'s"} Dashboard</h2>
        {motto && <p className="text-muted-foreground italic pl-3">{motto}</p>}
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}