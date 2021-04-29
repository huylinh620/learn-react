import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Upload from './pages/Upload'

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path='/' component={Home} />
        <Route path='/upload' component={Upload} />
      </Switch>
    </HashRouter>
  )
}

export default App

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
