import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Link, HashRouter, Redirect } from 'react-router-dom';
import Show from './Components/Show'

render(
  <HashRouter>
    <main className='app'>
      <Route path='/*' component={Show} />
    </main>
  </HashRouter>,
  document.getElementById('root')
)
