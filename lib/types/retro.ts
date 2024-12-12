export type Games = Game[]
export interface Game{
  GameID: number
  ConsoleID: number
  ConsoleName: string
  Title: string
  ImageIcon: string
  ImageTitle: string
  ImageIngame: string
  ImageBoxArt: string
  LastPlayed: string
  AchievementsTotal: number
  NumPossibleAchievements: number
  PossibleScore: number
  NumAchieved: number
  ScoreAchieved: number
  NumAchievedHardcore: number
  ScoreAchievedHardcore: number
}


export interface IUserSummary {
  User: string
  MemberSince: string
  LastActivity: LastActivity
  RichPresenceMsg: string
  LastGameID: number
  ContribCount: number
  ContribYield: number
  TotalPoints: number
  TotalSoftcorePoints: number
  TotalTruePoints: number
  Permissions: number
  Untracked: number
  ID: number
  UserWallActive: number
  Motto: string
  Rank: number
  RecentlyPlayedCount: number
  RecentlyPlayed: RecentlyPlayed[]
  Awarded: Awarded
  RecentAchievements: RecentAchievements
  LastGame: LastGame
  UserPic: string
  TotalRanked: number
  Status: string
}

export interface LastActivity {
  ID: number
  timestamp: string
  lastupdate: string
  activitytype: any
  User: string
  data: any
  data2: any
}

export interface RecentlyPlayed {
  GameID: number
  ConsoleID: number
  ConsoleName: string
  Title: string
  ImageIcon: string
  ImageTitle: string
  ImageIngame: string
  ImageBoxArt: string
  LastPlayed: string
  AchievementsTotal: number
}

export interface Awarded {
 [record : string]: AwardUser
}

export interface AwardUser {
  NumPossibleAchievements: number
  PossibleScore: number
  NumAchieved: number
  ScoreAchieved: number
  NumAchievedHardcore: number
  ScoreAchievedHardcore: number
}

export interface RecentAchievements {
  [id: string]: Achievements
}

export interface Achievements {
  [id: string]: RecentGameAchievement
}[]

export interface RecentGameAchievement {
  ID: number
  GameID: number
  GameTitle: string
  Title: string
  Description: string
  Points: number
  Type: any
  BadgeName: string
  IsAwarded: string
  DateAwarded: string
  HardcoreAchieved: number
}

export interface LastGame {
  ID: number
  Title: string
  ConsoleID: number
  ConsoleName: string
  ForumTopicID: number
  Flags: number
  ImageIcon: string
  ImageTitle: string
  ImageIngame: string
  ImageBoxArt: string
  Publisher: string
  Developer: string
  Genre: string
  Released: string
  IsFinal: number
}

export interface UserGameDetail {
  ID: number
  Title: string
  ConsoleID: number
  ForumTopicID: number
  Flags: any
  ImageIcon: string
  ImageTitle: string
  ImageIngame: string
  ImageBoxArt: string
  Publisher: string
  Developer: string
  Genre: string
  Released: string
  ReleasedAtGranularity: string
  IsFinal: number
  RichPresencePatch: string
  GuideURL: any
  ConsoleName: string
  ParentGameID: any
  NumDistinctPlayers: number
  NumAchievements: number
  Achievements: AchievementsUserGameDetail
  NumAwardedToUser: number
  NumAwardedToUserHardcore: number
  NumDistinctPlayersCasual: number
  NumDistinctPlayersHardcore: number
  UserCompletion: string
  UserCompletionHardcore: string
  HighestAwardKind: string
  HighestAwardDate: string
}

export interface AchievementsUserGameDetail {
  [gameId:string]: DetailGameAchievement
}[]

export interface DetailGameAchievement {
  ID: number
  NumAwarded: number
  NumAwardedHardcore: number
  Title: string
  Description: string
  Points: number
  TrueRatio: number
  Author: string
  DateModified: string
  DateCreated: string
  BadgeName: string
  DisplayOrder: number
  MemAddr: string
  type: string
  DateEarnedHardcore: string
  DateEarned: string
}
