import './App.css';
import { Provider } from "react-redux";
import Store from './redux/Store';
import Home from './screens/Home';
import Add from './screens/Add';
import Edit from './screens/Edit';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Provider store={Store}>
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Add">
          <Add />
        </Route>
        <Route path="/Edit/:id">
          <Edit />
        </Route>
      </Router>
    </Provider>
  );
}

export default App;
