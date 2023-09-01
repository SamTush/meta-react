import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import GitHub from './components/GitHubCards';
import Pro from './components/Pro';
import General from './components/General';
import { BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path='/' component={Main} />
        <Route path='/github' component={GitHub} />
        <Route path='/pro' component={Pro} />
        <Route path='/general' component={General} />
      </BrowserRouter>
    </div>
  );
}

export default App;
