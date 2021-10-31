import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Home from './Pages/Home/Home/Home';
import NewService from './Pages/Home/NewService/NewService';
import Services from './Pages/Home/Services/Services';
import ManageOrders from './Pages/ManageOrders/ManageOrders';
import MyOrders from './Pages/MyOrders/MyOrders';
import OrdersPlace from './Pages/OrdersPlace/OrdersPlace';
import Footer from './Pages/Shared/Footer/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Shared/Login/Login/Login';
import PrivateRoute from './Pages/Shared/Login/PrivateRoute/PrivateRote';
import PageNotFound from './Pages/PageNotFound/PageNotFound';


function App() {
  return (
    // all route here
    <div className="">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <PrivateRoute path="/ordersPlace/:id">
              <OrdersPlace />
            </PrivateRoute>
            <Route path="/myOrders">
              <MyOrders />
            </Route>
            <Route path="/manage">
              <ManageOrders />
            </Route>
            <Route path="/newService">
              <NewService />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="*">
              <PageNotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
