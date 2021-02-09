import { makeLoadLastRankingController } from "../factories"

import { Request, Response } from "express"
import { Controller } from "@/presentation/contracts"

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const { body, statusCode } = await controller.handle()

    return res.status(statusCode).json(body)
  }
}