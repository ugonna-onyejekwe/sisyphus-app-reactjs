import { Buy_sell_con } from "../../components/buy-sell-con";
import { Order_book } from "../../components/order-book";
import "./style.css";

export const Home = () => {
  return (
    <div className="main_wrapper container">
      {/* <!-- chart section --> */}
      <div className="chart_section"></div>

      {/* <!-- order book section --> */}
      <Order_book />

      {/* <!-- buy & sell section --> */}
      <Buy_sell_con />
    </div>
  );
};
