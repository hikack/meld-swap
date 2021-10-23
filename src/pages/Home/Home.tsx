import { Card } from "components/Card/Card";
import classes from "./Home.module.scss";
import { Button } from "components/Button/Button";
import toast from "react-hot-toast";
import { CryptoInput } from "./components/CryptoInput/CryptoInput";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { SwapIcon } from "./components/SwapIcon/SwapIcon";
import { Coin } from "types/coin";

export const Home: React.FC = () => {
  const [fromAmount, setFromAmount] = useState(0);
  const [toAmount, setToAmount] = useState(0);

  const [fromCoin, setFromCoin] = useState<Coin | null>(null);
  const [toCoin, setToCoin] = useState<Coin | null>(null);

  const handleSwap = () => {
    toast.success("Swap has been completed successfully!");
  };

  const handleChangeTransactionDirection = () => {
    const amount = fromAmount;
    setFromAmount(toAmount);
    setToAmount(amount);

    const coin = fromCoin;
    setFromCoin(toCoin);
    setToCoin(coin);
  };

  const handleFromInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFromAmount(parseFloat(e.target.value));
  };

  const handleToInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setToAmount(parseFloat(e.target.value));
  };

  const handleFromCoinChange = useCallback((coin: Coin) => {
    setFromCoin(coin);
  }, []);

  const handleToCoinChange = useCallback((coin: Coin) => {
    setToCoin(coin);
  }, []);

  useEffect(() => {
    if (fromCoin && toCoin) {
      setToAmount(
        parseFloat(
          (
            (fromAmount * fromCoin.current_price) /
            toCoin.current_price
          ).toFixed(3)
        )
      );
    }
  }, [fromAmount, fromCoin, toCoin]);

  return (
    <div className={classes.container}>
      <Card className={classes.card}>
        <h2 className={classes.swap}>MELD SWAP</h2>
        <CryptoInput
          fillInitially
          coin={fromCoin}
          label="From"
          amount={fromAmount}
          handleCoinChange={handleFromCoinChange}
          handleInputChange={handleFromInputChange}
        />

        <SwapIcon onClick={handleChangeTransactionDirection} />

        <CryptoInput
          coin={toCoin}
          label="To"
          amount={toAmount}
          handleCoinChange={handleToCoinChange}
          handleInputChange={handleToInputChange}
        />
        <Button onClick={handleSwap} disabled={!fromCoin || !toCoin}>
          Swap
        </Button>
      </Card>
    </div>
  );
};
