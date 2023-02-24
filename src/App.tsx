import data from'./data/data.json';
import * as SC from './styles/global/GlobalStyles';
import { Card, Search } from './components';
import { Welcome } from './interfaces/interfaces';
import './App.css';
function App() {

  return (
      <SC.container>
      <Search />
      <SC.cards>
        {
          data.map((item: Welcome) => {
            return (
              <Card {...item } key={item.first_name}/>
            )
          })
        }
      </SC.cards>
    </SC.container>
    
  )
}

export default App
