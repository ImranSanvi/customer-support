import React from 'react';
import { toast } from 'react-toastify';

const TaskStatus = ({cartTicket, selectedTickets, setSelectedTickets, countProgress, setCountProgress, resolveTickets, setResolveTickets, countResolve, setCountResolve}) => {

    const handleCompleteBtn = (complete) => {
        const updatedTicket = selectedTickets.filter(ticket => ticket.id !== complete.id)
        setSelectedTickets(updatedTicket)
        countProgress--;
        setCountProgress(countProgress)
        countResolve++;
        setCountResolve(countResolve)

        setResolveTickets([...resolveTickets, complete])
        toast("The Task is completed")
    }
    return (
        <div className='bg-white rounded-[5px] p-3 flex flex-col gap-4 mt-4'>
            <h1 className='font-medium text-[18px] text-[#001931] '>{cartTicket.title}</h1>
            <button onClick={()=> handleCompleteBtn(cartTicket)} className='font-semibold text-[16px] text-white bg-[#02A53B] p-3 rounded-[5px] '>Complete</button>
        </div>
    );
};

export default TaskStatus;