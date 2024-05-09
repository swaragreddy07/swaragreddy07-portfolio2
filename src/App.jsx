import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link, useNavigate}  from 'react-router-dom';
import Home from './Home.jsx'
import Smart from "./Smart.jsx"
import Blog from "./Blog.jsx"
import Pressbook from "./Pressbook.jsx"
import Canvas from "./Canvas.jsx"
import Sample from "./Sample.jsx"
import H5P from "./H5P.jsx"
function App() {
  return (
    <Router>
        <Routes>
        <Route exact path='/' Component={Home}/>
        <Route exact path='/smart' Component={Smart}/>
        <Route exact path='/blog' Component={Blog}/>
        <Route exact path='/Recipes' Component={Pressbook}/>
        <Route exact path='/canvas' Component={Canvas}/>
        <Route exact path='/sample' Component={Sample}/>
        <Route exact path='/movies' Component={H5P}/>
        </Routes>
      
    </Router>
  )
}

export default App