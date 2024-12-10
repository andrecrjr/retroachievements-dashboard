import { Game, Games, IUserSummary } from '@/lib/types/retro';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://retroachievements.org/API';

export async function fetchUserSummary(username: string): Promise<IUserSummary> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/API_GetUserSummary.php?&y=${process.env.API_KEY}&u=${username}`
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user summary:', error);
    throw error;
  }
}

export async function fetchRecentGames(username: string): Promise<Games> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/API_GetUserRecentlyPlayedGames.php?y=${process.env.API_KEY}&u=${username}&c=10`
    );
    
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching recent games:', error);
    throw error;
  }
}