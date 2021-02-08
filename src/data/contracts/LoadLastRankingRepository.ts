import { RankingScoreDTO } from "@/data/dtos";

export interface LoadLastRankingRepository {
  loadLastRanking: () => Promise<RankingScoreDTO[]>
}