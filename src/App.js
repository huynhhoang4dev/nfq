import React, { Suspense } from 'react';
import './App.css';
import './reset.css';
import './responsive.css';
import NasaSearchContainer from './containers/NasaSearchContainer';
import SearchContainer from './containers/SearchContainer';
import Search from './components/Search';
import Filter from './components/Filter';
import Sort from './components/Sort';
// import CollectionContainer from './containers/CollectionContainer';
const CollectionContainer = React.lazy( () => import('./containers/CollectionContainer') );

import { BrowserRouter as Router, Route } from 'react-router-dom';

const TopOperations = () => {
  return (
    <>
      <Search />
      <Filter />
      <Sort />
    </>
  )
}

export default () => {
  return (
    <Router>
      <div className="container">
      <Suspense fallback={<div>Loading ...</div>}>
      <Route path="/" exact component={CollectionContainer} />
      </Suspense>
        
        <Route path="/nasa-search" component={NasaSearchContainer} />
        <Route path="/edit" component={TopOperations} />
        <Route path="/video" component={TopOperations} />
      </div>
    </Router>   
  );

}
