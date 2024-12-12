
import { StatsGrid } from '@/components/dashboard/stats-grid';
import { RecentGames } from '@/components/dashboard/recent-games';
import { DashboardHeader } from '@/components/dashboard/header';
import { fetchUserSummary, fetchRecentGames } from '@/lib/api/retro';

export type Props = {
  params:Promise<{
    username: string
  }>
}

export default async function DashboardPage({ params }: Props) {
  const {username} = await params
  
  const [summaryData, gamesData] = await Promise.all([
          fetchUserSummary(username),
          fetchRecentGames(username),
        ]);

  return (
    <div className="container mx-auto py-8">
      <DashboardHeader username={username} motto={summaryData.Motto} />
      <div className="mt-8">
        <StatsGrid userSummary={summaryData} />
      </div>
      <div className="mt-8">
        <RecentGames games={gamesData} user={username} />
      </div>
    </div>
  );
}