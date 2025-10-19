
import './App.css'
  import { ToastContainer} from 'react-toastify';
import Navbar from './Components/Navbar/Navbar';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>

      <ToastContainer />
    </>
  )
}

export default App
