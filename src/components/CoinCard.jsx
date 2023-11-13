const CoinCard = ({ tokenPrice, btcPrice }) => {
  return (
    <li className="flex items-center justify-center text-xl gap-4">
      <img
        className="w-9 inline-block"
        src={`./images/${tokenPrice.market.substring(4).toLowerCase()}.png`}
      />
      <span className="inline-block w-12 ml-2 font-black">
        {tokenPrice.market.substring(4)}
      </span>
      <span className="ml-2 font-black">
        ₩{" "}
        {tokenPrice.market.substring(0, 3) === "BTC"
          ? (tokenPrice.trade_price * btcPrice).toFixed(2)
          : tokenPrice.trade_price.toLocaleString()}
      </span>
    </li>
  );
};
export default CoinCard;
