import { LastRankingLoaderService } from "@/data/services";
import { FakeRankingRepository } from "@/infra/repositories/fake";
import { Controller } from "@/presentation/contracts";
import { LoadLastRankingController } from "@/presentation/controllers";
import { container } from "tsyringe";

export const makeLoadLastRankingController = (): Controller => {
  const controller = container.resolve(LoadLastRankingController)
  return controller
}