/**
 * Блок с ссылками над формой поиска
 * @param {object} props - список ссылок
 */

function LinkBar(props) {
    return (
      <div className="link-bar-container">
        <div className="link-bar">{props}</div>
      </div>
    );
  }
  
  export default LinkBar;