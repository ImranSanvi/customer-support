import React, { use} from 'react';
import Ticket from '../../Ticket/Ticket';

const TicketCard = ({ticketsPromise, countProgress, setCountProgress, selectedTickets, setSelectedTickets}) => {

    const ticketsData = use(ticketsPromise)
    return (
        <div className='md:w-[75%]'>
            <h1 className='font-semibold text-[24px] text-[#34485A] mb-5 '>Customer Tickets</h1>
            <div className='grid md:grid-cols-2 gap-5'>
                {
                    ticketsData.map(ticket => (<Ticket key={ticket.id} ticket={ticket} countProgress={countProgress} setCountProgress={setCountProgress} selectedTickets={selectedTickets} setSelectedTickets={setSelectedTickets}></Ticket>))
                }
            </div>
        </div>
    );
};

export default TicketCard;