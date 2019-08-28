import * as React from 'react';
import { HashRouter, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
class IRoute extends React.Component{
    public render(){
        return(
          <HashRouter>
               <App>
                 <Route path='/' component={Home}  />
                {/* <Route path='/' render={()=>
                <Switch>
                <Route path='/home' component={Home}>
                </Switch>
                }/>  */}
               </App>
          </HashRouter>
        )
    }
}
export default IRoute;