import axios from "axios";
import { useEffect, useState } from "react";
import CoinCard from "./components/CoinCard";
import Slider from "react-slick";

const App = () => {
  const [coinPrices, setCoinPrices] = useState();
  const getCoinPrices = async () => {
    const response = await axios.get(
      "https://api.upbit.com/v1/ticker?markets=KRW-BTC,KRW-ETH,KRW-MATIC,BTC-ASTR,KRW-EOS"
    );

    console.log(response);
    setCoinPrices(response.data);
  };

  useEffect(() => {
    getCoinPrices();
  }, []);
  return (
    <div className="bg-purple-400 min-h-screen flex flex-col justify-center items-center">
      {coinPrices ? (
        <ul className="w-96">
          <Slider
            autoplay={true}
            autoplaySpeed={2000}
            arrows={false}
            dots={true}
          >
            {coinPrices.map((v, i) => {
              return (
                <CoinCard
                  key={i}
                  tokenPrice={v}
                  btcPrice={coinPrices[0].trade_price}
                />
              );
            })}
          </Slider>
        </ul>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default App;
