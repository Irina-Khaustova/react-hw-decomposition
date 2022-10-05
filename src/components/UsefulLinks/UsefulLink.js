/**
 * Элемент блока ссылок под блоком рекламы
 * @param {object} props - список ссылок
 */

function UsefulLink(props) {
    return (
      <div>
        <h2 className="useful-link-heading">{props.heading}</h2>
        <div className="useful-link">{props.links}</div>
      </div>
      );
  }
  
  export default UsefulLink;