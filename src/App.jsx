
import './App.css'
  import { ToastContainer} from 'react-toastify';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import TicketCard from './Components/TicketCard/TicketCard';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-[#f5f5f5]'>
        <Navbar></Navbar>

        <Banner></Banner>

        <TicketCard></TicketCard>
      </div>

      <ToastContainer />
    </>
  )
}

export default App
