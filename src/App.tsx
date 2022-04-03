import { Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";

function App() {
  return (
    <div className=" bg-black m-0 p-2 flex justify-center items-center w-screen h-screen">
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
    </div>
  );
}

export default App;
