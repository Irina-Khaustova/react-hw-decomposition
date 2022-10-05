/**
 * Блок с новостями в Header
 * @param {object} news - список новостей
 */

import News from "News.js";

function NewsContainer(news) {
    return (
      news.map(el => <News className="news">
      </News>)
    );
  }
  
  export default NewsContainer;