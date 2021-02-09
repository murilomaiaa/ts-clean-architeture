import { LastRankingLoaderService } from "@/data/services";
import { FakeRankingRepository } from "@/infra/repositories/fake";
import { Controller } from "@/presentation/contracts";
import { LoadLastRankingController } from "@/presentation/controllers";

export const makeLoadLastRankingController = (): Controller => {
  const repository = new FakeRankingRepository()
  const loader = new LastRankingLoaderService(repository)
  const controller = new LoadLastRankingController(loader)
  return controller
}