import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
import './App.css';
import Auth from './Auth/Auth';
// import React, { Component } from 'react';
// import { Navbar, Button } from 'react-bootstrap';
// import './App.css';



// class App extends Component {
//   goTo(route) {
//     this.props.history.replace(`/${route}`)
//   }

//   login() {
//     this.props.auth.login();
//   }

//   logout() {
//     this.props.auth.logout();
//   }

//   render() {
//     const { isAuthenticated } = this.props.auth;

//     return (
//       <div>
//         <Navbar fluid>
//           <Navbar.Header>
//             <Navbar.Brand>
//               <a href="#">Auth0 - React</a>
//             </Navbar.Brand>
//             <Button
//               bsStyle="primary"
//               className="btn-margin"
//               onClick={this.goTo.bind(this, 'home')}
//             >
//               Home
//             </Button>
//             {
//               !isAuthenticated() && (
//                   <Button
//                     bsStyle="primary"
//                     className="btn-margin"
//                     onClick={this.login.bind(this)}
//                   >
//                     Log In
//                   </Button>
//                 )
//             }
//             {
//               isAuthenticated() && (
//                   <Button
//                     bsStyle="primary"
//                     className="btn-margin"
//                     onClick={this.logout.bind(this)}
//                   >
//                     Log Out
//                   </Button>
//                 )
//             }
//           </Navbar.Header>
//         </Navbar>
//       </div>
//     );
//   }
// }


const App = () => (

  
  <Router>

    <div>

      <Navbar />

      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
      {/* <Route exact path="/profile" component={Profile} /> */}
      {/* <Route exact path="/journal" component={Journal} /> */}
      {/* <Route exact path="/settings" component={Settings} /> */}

      <Footer />

    </div>

  </Router>

);

const auth = new Auth();
auth.login();

export default App;
