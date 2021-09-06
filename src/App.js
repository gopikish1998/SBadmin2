import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import Users from './Users';
import Products from './Products';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Createuser from './Createuser';
import EditUser from './EditUser';
import CreateProduct from './CreateProduct';
import EditProduct from './EditProduct';

function App() {
  return (
    <div id="wrapper">
      <Router>
      <Sidebar/>
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
            <Topbar/>
        <div class="container-fluid">
            <Switch>
              <Route path="/" component={Dashboard} exact="true"/>
              <Route path="/products" component={Products} exact="true"/>
              <Route path="/create-product" component={CreateProduct} exact="true"/>
              <Route path="/products/edit/:id" component={EditProduct} exact="true"/>             
              <Route path="/users" component={Users} exact="true"/>
              <Route path="/create-user" component={Createuser} exact="true"/>
              <Route path="/users/edit/:id" component={EditUser} exact="true"/> 
            </Switch>
        </div>
        </div>
      </div>
      </Router>
    </div>
  );
}

export default App;
