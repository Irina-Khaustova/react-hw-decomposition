import './App.css';
import Header from './components/Header/HeaderLinks';
import Form from './components/Form/Form';
import Advertisment from './components/Advertisment/Advertisment';
import UsefulLinks from './components/UsefulLinks/UsefulLinks';
import LinkBar from './components/LinkBar/LinkBar';

function App() {
  return (
    <div className="App">
      <Header className="App-header">  </Header>
      <LinkBar className="news"></LinkBar>
      <Form className="form-search"></Form>
      <p className='text-example'>Энайдется всё. Например фаза луны"</p>
      <Advertisment className="advertisment"></Advertisment>
      <UsefulLinks className="useful-links"></UsefulLinks>
    </div>
  );
}

export default App;
