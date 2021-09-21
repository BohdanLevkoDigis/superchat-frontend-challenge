import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CardPage } from "./Pages/CardPage/CardPage";
import LinkCreation from "./Pages/LinkCreation/LinkCreation";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LinkCreation} />
        <Route path="/:linkId" component={CardPage} />
      </Switch>
    </Router>
  );
}

export default App;
