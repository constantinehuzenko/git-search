import { UserPage } from "./components/user";
import { Home } from "./components/Home";
import { Link, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Link to={`/`}>
        <h1>Home</h1>
      </Link>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users/:id" component={UserPage} />
      </Switch>
    </>
  );
};

export default App;
