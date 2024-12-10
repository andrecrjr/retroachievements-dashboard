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
 [record : string]: N15758
}

export interface N15758 {
  NumPossibleAchievements: number
  PossibleScore: number
  NumAchieved: number
  ScoreAchieved: number
  NumAchievedHardcore: number
  ScoreAchievedHardcore: number
}

export interface RecentAchievements {
  "15758": N157582
}

export interface N157582 {
  "293505": N293505
  "293526": N293526
}

export interface N293505 {
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

export interface N293526 {
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
