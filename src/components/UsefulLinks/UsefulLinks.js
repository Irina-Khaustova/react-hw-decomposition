/**
 * Блок ссылок под рекламой
 * @param {object} links - список ссылок
 */

import UsefulLink from "./UsefulLink";

function UsefulLinks(links) {
    return (
        links.map(el => <UsefulLink className="useful-link">el</UsefulLink>)
    );
  }
  
  export default UsefulLinks; 