import { http, HttpResponse } from "msw";
import {wines} from "../array";
export const handlers = [
  http.get("/api/cart", () => {
    return HttpResponse.json({
      items: [wines],
      total: 0,
    });
  }),
];

 