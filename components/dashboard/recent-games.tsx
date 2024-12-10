'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Game, Games } from "@/lib/types/retro";
import Image from "next/image";

interface RecentGamesProps {
  games: Games;
}

export function RecentGames({ games }: RecentGamesProps) {
  if (!games || games.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Recently Played Games</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">No recent games found</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recently Played Games</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {games.map((game) => (
            <div
              key={game.GameID}
              className="flex items-center space-x-4 rounded-md border p-4"
            >
              <div className="relative h-12 w-12 flex-shrink-0">
                <img
                  src={`${process.env.NEXT_PUBLIC_RETRO_IMAGE}${game.ImageIcon}`}
                  alt={game.Title}
                  className="rounded-md object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium leading-none truncate">
                  {game.Title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {game.ConsoleName}
                </p>
                <p className="text-xs text-muted-foreground">
                  You got {game.NumAchieved} {game.NumAchieved > 1 ? "achievements" : "achievement"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}