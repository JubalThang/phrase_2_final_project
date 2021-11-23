
import '../App.css';
import NavBar from './NavBar';
import 'semantic-ui-css/semantic.min.css'
import Home from './Home'
import { Route, Switch } from 'react-router';
import Products from './Products';
import Favorites from './Favorites';
import { useEffect, useState } from 'react';
import NewCake from './NewCake';

function App() {
  const [cakes, setCakes] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/cakes')
      .then(res => res.json())
      .then(cakeData => setCakes(cakeData.map(d => Object.assign(d, { favorite: false }))))
      .catch(err => console.error('Error fetching cakes: ', err))
  }, [])


  function onAddFavorite(id) {
    setCakes(cakes.map(cake => cake.id === id ? { ...cake, favorite: !cake.favorite } : cake))
  }

  function addNewCake(cake) {
    // setCakes([...cakes, cake])
    fetch('http://localhost:3000/cakes', {
      method : 'POST',
      headers : {
        'Content-type' : 'application/json'
      },
      body : JSON.stringify(cake)
    })
    .then(res => res.json())
    .then(cakeData => setCakes([...cakes, cakeData]))
    
  }

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/' >
          <Home />
        </Route>
        <Route path='/products'>
          <Products cakes={cakes} addFav={onAddFavorite} />
        </Route>
        <Route path='/favorites'>
          <Favorites favoriteCakes={cakes.filter(cake => cake.favorite)} />
        </Route>
        <Route path='/makeyourown'>
          <NewCake onAddNewCake={addNewCake}/>
        </Route>
        <Route>
          <h1>404 not found!</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
