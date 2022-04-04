import { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import Navbar from "./components/pages/modules/Navbar";
import Contacts from "./components/private/Contacts";
import Perfil from "./components/private/Perfil";
import Post from "./components/private/Post";
import User from "./components/private/User";

function App() {
  return (
    <div className=" bg-black flex m-0 p-2 justify-center items-center w-screen h-screen">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Fragment>
          <div className="bg-gray-700 flex flex-col rounded-xl p-3 h-full w-full max-w-md">
            <div className="no-scrollbar bg-yellow-200 h-full w-full overflow-x-auto">
              <Route exact path="/post" component={Post} />
              <Route exact path="/contacts" component={Contacts} />
              <Route exact path="/contacts/id" component={User} />
              <Route exact path="/perfil" component={Perfil} />
            </div>
            <Navbar />
          </div>
        </Fragment>
      </Switch>
    </div>
  );
}

export default App;
