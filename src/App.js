import { lazy, Suspense } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import * as ROUTES from './constants/routes'
// allow us to split bundle into chunks
const Login=lazy(()=>import('./pages/Login'))
function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading ...</p>}>

    
      <Switch>
        <Route path={ROUTES.LOGIN} component={Login}>
         
        </Route>
      </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
