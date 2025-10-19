
import './App.css'
  import { ToastContainer} from 'react-toastify';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import TicketCard from './Components/TicketCard/TicketCard';
import { Suspense } from 'react';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Footer/Footer';


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

        <div className='flex flex-col md:flex-row gap-5 pb-8 md:pb-16'>
          <Suspense fallback={<div className='flex justify-center items-center'><span className="loading loading-dots loading-xl"></span></div>}><TicketCard ticketsPromise={ticketsPromise}></TicketCard></Suspense>

          <Cart></Cart>
        </div>

      </div>

      <Footer></Footer>

      <ToastContainer />
    </>
  )
}

export default App
