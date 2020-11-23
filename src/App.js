import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Section from './Components/Section'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <div>
        <Section></Section>
      </div>
    </div>
  );
}

export default App;
