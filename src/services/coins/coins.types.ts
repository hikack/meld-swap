import { Coin } from "types/coin";

export interface GetMarketsRequest {
  vs_currency: string;
  ids?: string;
  category?: string;
  order?: string;
  per_page?: number;
  page?: number;
  sparkline?: boolean;
  price_change_percentage?: string;
}

export type GetMarketsResponse = Array<Coin>;
