"use client"
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@/components/ui/tooltip";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { UserGameDetail } from '@/lib/types/retro';

type Props = {
  gameData: UserGameDetail
}
export function RetroAchievementsGamePage({ 
  gameData 
}: Props) {

  const achievements = Object.values(gameData.Achievements || {})
    .sort((a, b) => a.DisplayOrder - b.DisplayOrder);

  const earnedAchievements = achievements.filter(a => a.DateEarned);
  const completionRate = (earnedAchievements.length / achievements.length) * 100;

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader className="flex flex-row items-center space-x-4">
          <img 
            src={`${process.env.NEXT_PUBLIC_RETRO_IMAGE}${gameData.ImageIcon}`}
            alt={gameData.Title} 
            className="w-16 h-16 rounded-lg"
          />
          <div>
            <CardTitle>{gameData.Title}</CardTitle>
            <CardDescription className="flex items-center space-x-2">
              <span>{gameData.ConsoleName}</span>
              <span className="text-xs text-muted-foreground">
                {gameData.Released}
              </span>
            </CardDescription>
          </div>
        </CardHeader>
        
        <CardContent>
          <div className="mb-6 grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Total Achievements</p>
              <p className="font-semibold">
                {earnedAchievements.length} / {achievements.length}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Points</p>
              <p className="font-semibold">
                {earnedAchievements.reduce((sum, a) => sum + a.Points, 0)} / 
                {achievements.reduce((sum, a) => sum + a.Points, 0)}
              </p>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <span>Completion Progress</span>
              <span>{completionRate.toFixed(2)}%</span>
            </div>
            <Progress 
              value={completionRate} 
              className="h-2"
            />
          </div>

          <div className="space-y-4">
            {achievements.map((achievement) => (
              <div 
                key={achievement.ID} 
                className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-accent/10 transition-colors"
              >
                <img 
                  src={`${process.env.NEXT_PUBLIC_RETRO_IMAGE}/Badge/${achievement.BadgeName}${!achievement.DateEarned && '_lock' || ""}.png`} 
                  alt={achievement.Title} 
                  className={`w-12 h-12 rounded`}
                  loading='lazy'
                />

                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium leading-none truncate">
                        {achievement.Title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {achievement.Description}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-semibold">
                        {achievement.Points} pts
                      </span>
                      <Badge 
                        variant={achievement.DateEarned ? 'default' : 'secondary'}
                        title={`Rarity: ${achievement.TrueRatio}`}
                      >
                        {achievement.DateEarned 
                          ? `Earned ${new Date(achievement.DateEarned).toLocaleDateString()}` 
                          : 'Unearned'}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-sm text-muted-foreground">
            <div className="grid grid-cols-2 gap-2">
              <p>Publisher: {gameData.Publisher}</p>
              <p>Developer: {gameData.Developer}</p>
              <p>Genre: {gameData.Genre}</p>
              <p>Total Players: {gameData.NumDistinctPlayers}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default RetroAchievementsGamePage;