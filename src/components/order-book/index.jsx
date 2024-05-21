export const Order_book = () => {
  return (
    <div className="order_book_section">
      <div className="nav">
        <p className="active">order book</p>
        <p>recent trades</p>
      </div>

      {/* <!-- filter section --> */}
      <div className="filter_section">
        <div className="menu_section">
          {/* <!-- Menu 1 --> */}
          <div className="menu active">
            <div className="bar red"></div>
            <div className="bar"></div>
            <div className="bar green"></div>
          </div>

          {/* <!-- Menu 2 --> */}
          <div className="menu">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar green"></div>
          </div>

          {/* <!-- Menu 3 --> */}
          <div className="menu">
            <div className="bar green"></div>
            <div className="bar"></div>
            <div className="bar red"></div>
          </div>
        </div>

        <div className="select_section">
          10 <i className="bx bx-chevron-down"></i>
        </div>
      </div>

      {/* <!--orders section  --> */}
      <div className="order_section">
        <div className="header">
          <h4>price (USDT)</h4>
          <h4>amount (BTC)</h4>
          <h4>total</h4>
        </div>
        <div className="wrapper lost">
          {/* <!-- box 1 --> */}
          <div className="box">
            <p>30484.93</p>
            <p>30484.93</p>
            <p>30484.93</p>
          </div>

          {/* <!-- box 2 --> */}
          <div className="box">
            <p>30484.93</p>
            <p>30484.93</p>
            <p>30484.93</p>
          </div>

          {/* <!-- box 3--> */}
          <div className="box">
            <p>30484.93</p>
            <p>30484.93</p>
            <p>30484.93</p>
          </div>

          {/* <!-- box 4 --> */}
          <div className="box">
            <p>30484.93</p>
            <p>30484.93</p>
            <p>30484.93</p>
          </div>

          {/* <!-- box 5 --> */}
          <div className="box">
            <p>30484.93</p>
            <p>30484.93</p>
            <p>30484.93</p>
          </div>
        </div>
        <div className="price_range">
          <h3>36,641.20</h3>
          <i className="bx bxs-up-arrow-alt"></i>
          <h3>36,641.20</h3>
        </div>
        <div className="wrapper profit">
          {/* <!-- box 1 --> */}
          <div className="box">
            <p>30484.93</p>
            <p>30484.93</p>
            <p>30484.93</p>
          </div>

          {/* <!-- box 2 --> */}
          <div className="box">
            <p>30484.93</p>
            <p>30484.93</p>
            <p>30484.93</p>
          </div>

          {/* <!-- box 3--> */}
          <div className="box">
            <p>30484.93</p>
            <p>30484.93</p>
            <p>30484.93</p>
          </div>

          {/* <!-- box 4 --> */}
          <div className="box">
            <p>30484.93</p>
            <p>30484.93</p>
            <p>30484.93</p>
          </div>

          {/* <!-- box 5 --> */}
          <div className="box">
            <p>30484.93</p>
            <p>30484.93</p>
            <p>30484.93</p>
          </div>
        </div>
      </div>
    </div>
  );
};
