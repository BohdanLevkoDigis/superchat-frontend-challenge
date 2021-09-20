import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LinkCreation from "./Pages/LinkCreation/LinkCreation";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LinkCreation} />
      </Switch>
    </Router>
  );
}

export default App;
