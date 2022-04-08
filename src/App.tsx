import { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./components/pages/Landing";
import Navbar from "./components/modules/Navbar";
import Contacts from "./components/pages/private/Contacts";
import Perfil from "./components/pages/private/Perfil";
import Post from "./components/pages/private/Post";
import User from "./components/pages/private/User";
import ProtectedRoute from "./components/pages/private/assets/PrivateRoute";
import Form from "./components/pages/private/Form";
import Status from "./components/pages/private/Status";

function App() {
  return (
    <div className=" bg-black flex m-0 p-2 justify-center items-center w-screen h-screen">
      <Switch>
        <Route exact path="/" component={Landing} />
        <ProtectedRoute exact path="/form" component={Form} />
        <Fragment>
          <div className="bg-gray-700 flex flex-col rounded-xl p-3 h-full w-full max-w-md">
            <div className="no-scrollbar bg-slate-500 h-full w-full overflow-x-auto">
              <ProtectedRoute exact path="/post" component={Post} />
              <ProtectedRoute exact path="/contacts" component={Contacts} />
              <ProtectedRoute exact path="/contact/:id" component={User} />
              <ProtectedRoute exact path="/status" component={Status} />
              <ProtectedRoute exact path="/perfil" component={Perfil} />
            </div>
            <Navbar />
          </div>
        </Fragment>
      </Switch>
    </div>
  );
}

export default App;
