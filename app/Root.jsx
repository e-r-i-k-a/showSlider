import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Show from './Components/Show'

render(
  <Router>
    <main className = 'app'>
        {/* <Show pathname={location.pathname}/> */}
        <Route component={Show}/>
        {/* <Route path='/show:query' component={Show}/> */}
        {/* component={({location}) =>
         <Show query={location.search}/>}
        /> */}
    </main>
  </Router>,
  document.getElementById('root')
)
