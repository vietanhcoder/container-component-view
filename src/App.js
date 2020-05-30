import React, { lazy, Suspense, memo, useEffect } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';

import db from './firebase';

const Layout = lazy(() => import('./containers/Layout'));
const Login = lazy(() => import('./modules/Login/containers/Login'));

const App = () => {
  useEffect(() => {
    db.collection('gurus')
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        console.log(data); // array of cities objects
      });
  }, []);

  return (
    <HashRouter>
      <Suspense fallback={<div />}>
        <Switch>
          <Route exact path="/login" name="Login Page" render={(props) => <Login {...props} />} />
          <Route path="/" name="Home" render={(props) => <Layout {...props} />} />
        </Switch>
      </Suspense>
    </HashRouter>
  );
};

export default memo(App);

// https://medium.com/technest/how-to-connect-firebase-cloud-firestore-to-your-react-app-1118fd182c60
