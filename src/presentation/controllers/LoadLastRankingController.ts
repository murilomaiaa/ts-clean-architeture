import { LastRankingLoader } from "@/domain/usecases";
import { Controller, HttpResponse, ok, serverError } from "@/presentation/contracts";
import { RankingScoreViewModel } from "../viewModels";

export class LoadLastRankingController implements Controller {
  constructor(
    private readonly lastRankingLoader: LastRankingLoader
  ) { }

  public async handle(): Promise<HttpResponse<RankingScoreViewModel[]>> {
    try {
      const ranking = await this.lastRankingLoader.execute()
      const viewModels = RankingScoreViewModel.mapCollection(ranking)
      return ok(viewModels)
    } catch (error) {
      return serverError(error.message)
    }
  }
}