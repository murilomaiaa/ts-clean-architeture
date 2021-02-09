import { RankingScore } from "@/domain/entities"

type Player = {
  name: string
  country: string
}

type Hero = {
  name: string
  level: number
}

export class RankingScoreViewModel {
  constructor(
    private player: Player,
    private score: number,
    private matchDate: string,
    private heroes: Hero[],
  ) { }

  public static map(entity: RankingScore): RankingScoreViewModel {
    return {
      ...entity,
      matchDate: entity.matchDate.toISOString()
    }
  }
  public static mapCollection(entities: RankingScore[]): RankingScoreViewModel[] {
    return entities.map(this.map)
  }
}
