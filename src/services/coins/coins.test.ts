import axios from "../../utils/axios";
import { CoinsService } from "./coins.service";

describe("coins service", () => {
  test("should get markets coins", async () => {
    axios.get = jest.fn().mockResolvedValue({ data: [] });

    const { data } = await CoinsService.getMarkets({ vs_currency: "usd" });

    expect(axios.get).toBeCalledWith("/coins/markets", {
      params: {
        vs_currency: "usd",
      },
    });
    expect(data).toBeInstanceOf(Array);
  });
});
