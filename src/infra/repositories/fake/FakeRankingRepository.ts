import { LoadLastRankingRepository } from "@/data/contracts";
import { RankingScoreDTO } from "@/data/dtos";
import { ranking } from './dataSources'

export class FakeRankingRepository implements LoadLastRankingRepository {
  public async loadLastRanking(): Promise<RankingScoreDTO[]> {
    return ranking.map(item => ({
      player: item.user,
      score: item.score,
      matchDate: new Date(item.date),
      heroes: item.heroes
    }))
  }
}