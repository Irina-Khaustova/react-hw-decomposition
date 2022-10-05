/**
 * Блок с курсами валют в Header
 * @param {object} currencies - список валют с курсом 
 */

function CurrencyBox(currencies) {
    return (
      currencies.map(el => <div className="currency">'el'</div>)
    );
  }
  
  export default CurrencyBox;