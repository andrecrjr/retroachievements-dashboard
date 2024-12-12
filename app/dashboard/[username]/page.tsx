
import { StatsGrid } from '@/components/dashboard/stats-grid';
import { RecentGames } from '@/components/dashboard/recent-games';
import { DashboardHeader } from '@/components/dashboard/header';
import { fetchUserSummary, fetchRecentGames } from '@/lib/api/retro';

export type Props = {
    params: Promise<{[key:string]:string | string[] | undefined}>
    searchParams: Promise<{[key:string]:string | string[] | undefined}>
}

export default async function DashboardPage({ params }: Props) {
  const {username} = await params
  let user =username as string
  
  const [summaryData, gamesData] = await Promise.all([
          fetchUserSummary(user),
          fetchRecentGames(user),
        ]);

  return (
    <div className="container mx-auto py-8">
      <DashboardHeader username={user} motto={summaryData.Motto} />
      <div className="mt-8">
        <StatsGrid userSummary={summaryData} />
      </div>
      <div className="mt-8">
        <RecentGames games={gamesData} user={user} />
      </div>
    </div>
  );
}