import './App.scss';
import {Pages} from './components'

function App() {
  return <div>
    <div className='desk'>SCROLL DOWN TO OPEN</div>
    <div className='drawer'>
      <div className='main'>
        <Pages />
      </div>
    </div>
    <div className='block-1'></div>
    <div className='block-2'></div>
  </div>    
}

export default App;
