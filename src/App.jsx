
import './App.css'
  import { ToastContainer} from 'react-toastify';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import TicketCard from './Components/TicketCard/TicketCard';
import { Suspense, useState } from 'react';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Footer/Footer';


const fetchTickets = async () =>{
  const res = await fetch('/Ticket.json')
  return res.json()
}

const ticketsPromise = fetchTickets()

function App() {
  
  const [countProgress, setCountProgress] = useState(0)
  const [selectedTickets, setSelectedTickets] = useState([])
    const [countResolve, setCountResolve] = useState(0)
  const [resolveTickets, setResolveTickets] = useState([])


  return (
    <>
      <div className='bg-[#f5f5f5]'>
        <Navbar></Navbar>

        <Banner countProgress={countProgress} countResolve={countResolve}></Banner>

        <div className='flex flex-col md:flex-row gap-5 mx-[40px] md:mx-[80px] pb-8 md:pb-16'>
          <Suspense fallback={<div className='flex justify-center items-center'><span className="loading loading-dots loading-xl"></span></div>}>
            <TicketCard ticketsPromise={ticketsPromise} countProgress={countProgress} setCountProgress={setCountProgress} selectedTickets={selectedTickets} setSelectedTickets={setSelectedTickets}></TicketCard>

            <Cart selectedTickets={selectedTickets} setSelectedTickets={setSelectedTickets} resolveTickets={resolveTickets} setResolveTickets={setResolveTickets} countProgress={countProgress} setCountProgress={setCountProgress} countResolve={countResolve} setCountResolve={setCountResolve}></Cart>
            
          </Suspense>
        </div>

      </div>

      <Footer></Footer>

      <ToastContainer />
    </>
  )
}

export default App
