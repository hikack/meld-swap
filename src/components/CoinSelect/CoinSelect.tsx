import { MouseEvent, useEffect, useState } from "react";
import classes from "./CoinSelect.module.scss";
import { CoinsService } from "services/coins/coins.service";
import { Coin } from "types/coin";
import { AiOutlineCaretDown } from "react-icons/ai";
import { Card } from "components/Card/Card";

interface Props {
  value: Coin | null;
  fillInitially?: boolean;
  onChange: (coin: Coin) => void;
}

export const CoinSelect: React.FC<Props> = ({
  value,
  fillInitially = false,
  onChange,
}) => {
  const [coinsList, setCoinsList] = useState<Coin[]>([]);
  const [showList, setShowList] = useState(false);

  const handleCloseList = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setShowList(false);
  };

  const handleSelectCoin = (e: MouseEvent<HTMLDivElement>, coin: Coin) => {
    e.stopPropagation();
    onChange(coin);
    setShowList(false);
  };

  const fetchCoins = async () => {
    try {
      const { data } = await CoinsService.getMarkets({ vs_currency: "usd" });
      setCoinsList(data);

      if (fillInitially && data.length) {
        onChange(data[0]);
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.wrapper} onClick={() => setShowList(true)}>
      {value ? (
        <>
          <img
            className={classes.coinIcon}
            src={value.image}
            alt={value.name}
          />
          {value.name}
        </>
      ) : (
        "Select"
      )}
      <AiOutlineCaretDown className={classes.downIcon} />
      {showList && (
        <div className={classes.coinsListWrapper} onClick={handleCloseList}>
          <Card className={classes.coinsList}>
            {coinsList.map((item) => (
              <div
                className={classes.item}
                key={item.id}
                onClick={(e) => handleSelectCoin(e, item)}
              >
                <div className={classes.itemTitle}>
                  <img
                    className={classes.itemIcon}
                    src={item.image}
                    alt={item.name}
                  />
                  <p className={classes.itemSymbol}>
                    {item.symbol.toUpperCase()}
                  </p>
                </div>
                <p className={classes.itemPrice}>
                  {item.current_price.toLocaleString("en-US")}$
                </p>
              </div>
            ))}
          </Card>
        </div>
      )}
    </div>
  );
};
