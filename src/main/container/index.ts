import { LoadLastRankingRepository } from '@/data/contracts'
import { LastRankingLoaderService } from '@/data/services'
import { LastRankingLoader } from '@/domain/usecases'
import { FakeRankingRepository } from '@/infra/repositories/fake'
import { container } from 'tsyringe'

container.registerSingleton<LoadLastRankingRepository>(
  'LoadLastRankingRepository',
  FakeRankingRepository
)

container.registerSingleton<LastRankingLoader>(
  'LastRankingLoader',
  LastRankingLoaderService
)