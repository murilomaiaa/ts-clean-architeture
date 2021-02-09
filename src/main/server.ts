import app from '@/main/config/app'
import { env } from '@/main/config/env'

const port = env.port
app.listen(port, () => console.log(`server running at http://localhost:${port}`))