/**
 * Блок Header
 */

import NewsContainer from "../NewsContainer/NewsContainer";
import HeaderLinks from "./HeaderLinks";
import CurrencyBox from "./CurrencyBox";

function Header(props) {
    return (
      <div className="header">
        <div className="header-links">
          <HeaderLinks className="header-link"></HeaderLinks>
          <div className="header-time">'time'</div>
        </div>
        <div className="header-container">
          <div className="header-container-news">
            <NewsContainer className="news-container">{props.news}</NewsContainer>
            <CurrencyBox className="currensy-box" currencies={props.currencies}></CurrencyBox>
          </div>
          <div className="quots">
            <img className="image">{props.image}</img>
            <a href="">{props.href}</a>
            <div className="text">'text'</div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Header;