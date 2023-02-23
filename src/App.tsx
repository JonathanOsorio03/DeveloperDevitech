import data from'./data/data.json';
import './App.css';
import { Card, Search } from './components';
import { Welcome } from './interfaces/interfaces';
function App() {

  return (
    <div className='container'>
      <Search />
      <div className='cards'>
        {
          data.map((item: Welcome) => {
            return (
              <Card {...item } key={item.first_name}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default App
