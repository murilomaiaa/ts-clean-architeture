import { RankingScore } from "@/domain/entities";

export interface LastRankingLoader {
  execute: () => Promise<RankingScore[]>
}