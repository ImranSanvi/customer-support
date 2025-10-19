import React, { use } from 'react';
import Ticket from '../../Ticket/Ticket';

const TicketCard = ({ticketsPromise}) => {

    const ticketsData = use(ticketsPromise)
    return (
        <div className='px-[40px] md:px-[80px] w-[75%]'>
            <h1 className='font-semibold text-[24px] text-[#34485A] mb-5 '>Customer Tickets</h1>
            <div className='grid md:grid-cols-2 gap-5'>
                {
                    ticketsData.map(ticket => (<Ticket key={ticket.id} ticket={ticket}></Ticket>))
                }
            </div>
        </div>
    );
};

export default TicketCard;