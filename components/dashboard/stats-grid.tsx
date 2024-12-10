/* eslint-disable @next/next/no-img-element */
'use client';

import { Trophy, Gamepad2, Medal, Users } from 'lucide-react';
import { StatsCard } from './stats-card';
import { IUserSummary } from '@/lib/types/retro';

interface StatsGridProps {
  userSummary: IUserSummary | null;
}

export function StatsGrid({ userSummary }: StatsGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <img src={`${"https://media.retroachievements.org/"}${userSummary?.UserPic}`} 
        width={75} height={75} fetchPriority='high' className='self-center mx-auto' />
      <StatsCard
        title="Total Points"
        value={userSummary?.TotalPoints || 0}
        icon={<Trophy className="h-4 w-4 text-muted-foreground" />}
      />
      <StatsCard
        title="Games Played"
        value={userSummary?.RecentlyPlayedCount || 0}
        icon={<Gamepad2 className="h-4 w-4 text-muted-foreground" />}
      />
      <StatsCard
        title="True Points"
        value={userSummary?.TotalTruePoints || 0}
        icon={<Medal className="h-4 w-4 text-muted-foreground" />}
      />
      <StatsCard
        title="Softcore Points"
        value={userSummary?.TotalSoftcorePoints || 0}
        icon={<Medal className="h-4 w-4 text-muted-foreground" />}
      />
      <StatsCard
        title="Rank"
        value={`#${userSummary?.TotalRanked || 0}`}
        icon={<Users className="h-4 w-4 text-muted-foreground" />}
      />
    </div>
  );
}