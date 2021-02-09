import { HttpResponse } from "./Http";

export interface Controller {
  handle: () => Promise<HttpResponse>
}