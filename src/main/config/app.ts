import { setupRoutes } from '@/main/config/routes'
import { setupApolloServer } from './apolloServer'

import express from 'express'

const app = express()
setupRoutes(app)
setupApolloServer(app)

export default app;