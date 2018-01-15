
import React from 'react';
import {TabRouter,LogicStack,DrawerRouter,} from './Router';
import Search from './components/Search'
import Searcher from './components/Searcher'
import GoPpt1 from './components/GoPpt1'

class App extends React.Component {

  render() {
    return (
      <DrawerRouter />
    );
  }
}
export default App;