import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from "./Components/Header"
import Filter from './Components/Filter'
import Countries from './Components/Countries'
import Country from './Components/Country'

function App() {
  return (
    <Router>
      <>
      <Header />
      <Route exact path="/">
        <Filter />
        <Countries />
      </Route>
      <Route exact path="/countries/:name" children={<Country />}></Route>
      </>
    </Router>
  );
}

export default App;
