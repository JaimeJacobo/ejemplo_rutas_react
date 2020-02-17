import React from 'react'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const Routes = ()=>{
  return(
    <div>
        <Route path='/' exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
    </div>
  )
}



export default Routes


