import { RankingScore } from "@/domain/entities";
import { LastRankingLoader } from "@/domain/usecases";
import { LoadLastRankingRepository } from "@/data/contracts";
import { RankingUnavailableError } from "@/domain/errors";

import { injectable, inject } from 'tsyringe'

@injectable()
export class LastRankingLoaderService implements LastRankingLoader {
  constructor(
    @inject('LoadLastRankingRepository')
    private loadLastRankingRepository: LoadLastRankingRepository
  ) { }

  public async execute(): Promise<RankingScore[]> {
    if (new Date().getHours() > 21) {
      throw new RankingUnavailableError()
    }

    return this.loadLastRankingRepository.loadLastRanking()
  }
}