import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'


function App() {
  return (
    <Router>
        <ul>
          <li>Home</li>
          <li>Contato</li>
        </ul>
        <Switch>
          <Route patch="/">
            <Home />
          </Route>
          <Route exact patch="/company">
            <Company />
          </Route>
        <Route exact patch="/contact">
          <Contact />
        </Route>
        <Route exact patch="/newproject">
          <NewProject />
        </Route>
        </Switch>
        <p>Footer</p>

    </Router>
  
  )
}

export default App;
