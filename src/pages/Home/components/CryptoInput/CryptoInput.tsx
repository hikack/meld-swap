import { ChangeEventHandler } from "react";
import classes from "./CryptoInput.module.scss";
import { CoinSelect } from "components/CoinSelect/CoinSelect";
import { Coin } from "types/coin";

interface Props {
  label: string;
  amount: number;
  coin: Coin | null;
  fillInitially?: boolean;
  handleCoinChange: (coin: Coin) => void;
  handleInputChange: ChangeEventHandler<HTMLInputElement>;
}

export const CryptoInput: React.FC<Props> = ({
  coin,
  label,
  amount,
  fillInitially,
  handleCoinChange,
  handleInputChange,
}) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.row}>
        <p className={classes.label}>{label}</p>
        {coin && (
          <p className={classes.balance}>
            Balance: 0.00 {coin.symbol.toUpperCase()}
          </p>
        )}
      </div>
      <div className={classes.row}>
        <input
          step="0.01"
          type="number"
          value={amount}
          className={classes.input}
          onChange={handleInputChange}
        />
        <CoinSelect
          value={coin}
          fillInitially={fillInitially}
          onChange={handleCoinChange}
        />
      </div>
    </div>
  );
};
