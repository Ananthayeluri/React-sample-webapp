import React from 'react';
import {BrowserRouter as Router, Route,Switch,} from 'react-router-dom';
import './App.css';
import {HomePage} from './components/HomePage';
import ArticleList from './components/ArticleList';
import AboutPage from './components/AboutUs';
import NavBar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
   
    <Router>
    <div className="App">
    <NavBar />
    <Switch>
     <Route exact path="/" component={HomePage} />
     <Route path = "/articles" component={ArticleList} />
     <Route path = "/login" component={AboutPage} />
     </Switch>
    </div>
    </Router>
    
  );
}

export default App;
