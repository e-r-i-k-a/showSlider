import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Show from './Components/Show'

render(
  <Router>
    <main className='app'>
      <Route
        path='/*'
        component={({location}) => <Show query={location.search}/>} />
    </main>
  </Router>,
  document.getElementById('root')
)
