import axios from "utils/axios";

import { GetMarketsRequest, GetMarketsResponse } from "./coins.types";

export class CoinsService {
  private static prefix = "/coins";

  static getMarkets(params: GetMarketsRequest) {
    return axios.get<GetMarketsResponse>(this.prefix + "/markets", {
      params,
    });
  }
}
