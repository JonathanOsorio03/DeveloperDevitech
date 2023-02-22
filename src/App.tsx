import  { Welcome,data } from '../public/data/data.json'
function App() {

  return (
    <div >
      {
        data.map((item:Welcome) => {
          return (
            <div key={item.first_name}>
              <img src={item.picture} alt="img" />
              <h1>{item.first_name}</h1>
            </div>
          )
        })
      }
    </div>
  )
}

export default App
