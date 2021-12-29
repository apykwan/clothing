import { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.actions';
import './App.css';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();   
    // const { setCurrentUser } = this.props;
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=> {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);

    //     userRef.onSnapshot(snapShot => {
    //       setCurrentUser({
    //         currentUser: {
    //           id: snapShot.id,
    //           ...snapShot.data()
    //         }
    //       });
    //     })
    //   } else {
    //     setCurrentUser(userAuth);
    //   }
    // });
  }

  componentWillUmount() {
    this.unsubscribeFromAuth();
  }

  render () {
    return (
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" exact component={CheckoutPage} />
          <Route 
            path="/signin" 
            exact  
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </>
    );  
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mpaDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps,mpaDispatchToProps)(App);
