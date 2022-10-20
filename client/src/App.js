import { Route } from 'react-router-dom';
import Create from './components/create/create';
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';
import './App.css';

function App() {
  return (
    <>
      <Route path="/" render={(match) => <Navbar match={match} />} />
      <Route exact path="/" render={(match) => <Home match={match} />} />
      <Route
        exact
        path="/create"
        render={(match) => <Create match={match} />}
      />
    </>
  );
}

export default App;
