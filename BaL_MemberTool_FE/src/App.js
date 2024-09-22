import './App.css';
import './MemberOverview'
import { MenuBar } from './MenuBar';

function App() {
  return (
    <div className="App">
      <div className="container">
        <MenuBar />
        <header className="App-header">
          <h1>Willkommen zur App!</h1>
        </header>
      </div>
    </div>
  );
}

export default App;
