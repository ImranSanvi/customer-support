import React from 'react';

//   {
//     "id": 1014,
//     "title": "Missing translation for 'Pricing' page in German",
//     "description": "When selecting the German language, the 'Pricing' page content remains entirely in English. All other pages seem correctly translated.",
//     "customer": "Mu Industrial",
//     "priority": "Low",
//     "status": "Open",
//     "createdAt": "2025-10-17"
//   }


const Ticket = ({ticket}) => {
    console.log(ticket)
    return (
        <div className='p-3 md:p-5 bg-white rounded-[5px] space-y-4 md:space-y-7'>
            <div className='flex justify-between items-center'>
                <h1 className='font-medium text-[18px]'>{ticket.title}</h1>
                <button className='bg-[#0B5E06]/60 rounded-[10px] p-2 flex justify-between items-center gap-2'><span className='w-3 h-3 rounded-full bg-green-900'></span>{ticket.status}</button>
            </div>
            <p className='font-normal text-[16px] text-[#627382] '>{ticket.description}</p>
            <div className='flex flex-col md:flex-row justify-between items-center'>
                <h1 className='font-normal text-[16px] text-[#627382] '>#{ticket.id}</h1>
                <p className='font-normal text-[16px] text-[#F83044]'>{ticket.priority}</p>
                <h1 className='font-normal text-[16px] text-[#627382]'>{ticket.customer}</h1>
                <p className='font-normal text-[16px] text-[#627382]'>{ticket.createdAt}</p>
            </div>
        </div>
    );
};

export default Ticket;