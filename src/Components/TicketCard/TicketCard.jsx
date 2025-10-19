import React from 'react';

const TicketCard = ({ticketsPromise}) => {
    console.log(ticketsPromise)
    return (
        <div className='px-[80px]'>
            <h1 className='font-semibold text-[24px] text-[#34485A] '>Customer Tickets</h1>
        </div>
    );
};

export default TicketCard;