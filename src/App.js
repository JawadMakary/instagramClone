import { lazy, Suspense } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import * as ROUTES from './constants/routes'
import userContext from './context/user';
import useAuthListener from './hooks/use-auth-listener';
// allow us to split bundle into chunks
const Login=lazy(()=>import('./pages/Login'))
const Signup=lazy(()=>import('./pages/Signup'))
const NotFound=lazy(()=>import('./pages/NotFound'))
const Dashboard=lazy(()=>import('./pages/Dashboard'))
function App() {
  const {user}=useAuthListener()
  return (
    <userContext.Provider value={{user}}>

    <Router>
      <Suspense fallback={<p>Loading ...</p>}>
      <Switch>
        <Route path={ROUTES.LOGIN} component={Login} />  
        <Route path={ROUTES.SIGN_UP} component={Signup} />    
        <Route path={ROUTES.NOT_FOUND} component={NotFound} />
        <Route path={ROUTES.DASHBOARD} component={Dashboard} />
        </Switch>
      </Suspense>
    </Router>
    </userContext.Provider>

  );
}

export default App;
