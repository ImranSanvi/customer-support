
import './App.css'
  import { ToastContainer} from 'react-toastify';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import TicketCard from './Components/TicketCard/TicketCard';


const fetchTickets = async () =>{
  const res = await fetch('/Ticket.json')
  return res.json()
}

const ticketsPromise = fetchTickets()

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-[#f5f5f5]'>
        <Navbar></Navbar>

        <Banner></Banner>

        <TicketCard ticketsPromise={ticketsPromise}></TicketCard>
      </div>

      <ToastContainer />
    </>
  )
}

export default App
