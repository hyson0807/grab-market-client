import React from "react";
import "./index.css";
import axios from "axios";
import { Link } from "react-router-dom";

function MainPage() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(function () {
    axios
      .get(
        "https://97c952c5-3f51-424f-952b-839dd62d082b.mock.pstmn.io/products"
      )
      .then(function (result) {
        const products = result.data.products;
        setProducts(products);
      })
      .catch(function (error) {
        console.error("에러발생 :", error);
      });
  }, []);

  return (
    <div>
      <div id="header">
        <div id="header-area1">
          <img src="images/icons/logo.png" alt="" />
        </div>
      </div>

      <div id="body">
        <div id="banner">
          <img src="images/banners/banner1.png" alt="" />
        </div>

        <h1>판매되는 상품들</h1>

        <div id="product-list">
          {products.map(function (product, index) {
            return (
              <div className="product-card" key={index}>
                <Link className="product-link" to={"/products/" + index}>
                  <div>
                    <img
                      className="product-img"
                      src={product.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="product-contents">
                    <span className="product-name">{product.name}</span>
                    <span className="product-price">{product.price}</span>
                    <div className="product-seller">
                      <img
                        className="product-avatar"
                        src="images/icons/avatar.png"
                        alt=""
                      />
                      <span>{product.seller}</span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div id="footer"></div>
    </div>
  );
}

export default MainPage;
