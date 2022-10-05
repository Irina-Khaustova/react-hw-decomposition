/**
 * Элемент блока ссылок в Header
 * @param {object} news - список ссылок 
 */

function HeaderLink(news) {
    return (
      <div className="news">
        <img className="image-news"></img>
        <p className="news-text"></p>
      </div>
    );
  }
  
  export default HeaderLink;
