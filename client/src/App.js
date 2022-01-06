import { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import ErrorBoundary from './components/error-boundary/error-boundary.component';
import ErrorPage from './components/error-boundary/error-boundary.page';
import Spinner from './components/spinner/spinner.component';
import Header from './components/header/header.component';
import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.actions';
import { GlobalStyle } from './global.styles';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(checkUserSession());  
  }, [dispatch, currentUser]);

  return (
    <>
      <GlobalStyle />
      <Header />   
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route 
              path="/checkout" 
              exactt 
              render={() => currentUser ?  <CheckoutPage /> : <Redirect to="/signin" />}
            />
            <Route 
              path="/signin" 
              exact  
              render={() => currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />}
            />
            <Route path="*" component={ErrorPage} />
          </Switch>
        </Suspense> 
      </ErrorBoundary>
      
    </>
  );  
};

export default App;
