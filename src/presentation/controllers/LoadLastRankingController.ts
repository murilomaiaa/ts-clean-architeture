import { LastRankingLoader } from "@/domain/usecases";
import { Controller, HttpResponse, ok, serverError } from "@/presentation/contracts";
import { inject, injectable } from "tsyringe";
import { RankingScoreViewModel } from "../viewModels";

@injectable()
export class LoadLastRankingController implements Controller {
  constructor(
    @inject('LastRankingLoader')
    private readonly lastRankingLoader: LastRankingLoader
  ) { }

  public async handle(): Promise<HttpResponse<RankingScoreViewModel[]>> {
    try {
      const ranking = await this.lastRankingLoader.execute()
      const viewModels = RankingScoreViewModel.mapCollection(ranking)
      return ok(viewModels)
    } catch (error) {
      return serverError(error)
    }
  }
}