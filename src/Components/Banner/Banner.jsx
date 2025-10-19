
import React from 'react';
import vector1 from '../../assets/vector1.png'

const Banner = () => {
    return (
        <div className='p-[40px] md:p-[80px] flex flex-col md:flex-row justify-between items-center gap-4 md:gap-7' >
            <div className="w-[100%] md:w-[708px] p-[40px] md:p-[80px] bg-cover bg-center bg-no-repeat rounded-[10px] text-white" style={{backgroundImage: `linear-gradient(125.07deg, rgba(99, 46, 227, 0.8), rgba(159, 98, 242, 0.8)), url(${vector1})`,
                backgroundBlendMode: "overlay",
            }}>
                <div className="flex flex-col justify-center items-center">
                    <p className="font-normal text-[24px]">In-Progress</p>
                    <h1 className="font-semibold text-[60px]">0</h1>
                </div>
            </div>


            <div className="w-[100%] md:w-[708px] p-[40px] md:p-[80px] bg-cover bg-center bg-no-repeat rounded-[10px] text-white" style={{backgroundImage: `linear-gradient(90.00deg, rgba(84, 207, 103.68001556396484, 1),rgba(0, 130, 122.20001220703125, 1) 100%), url(${vector1})`,
                backgroundBlendMode: "overlay",
            }}>
                <div className="flex flex-col justify-center items-center">
                    <p className="font-normal text-[24px]">Resolved</p>
                    <h1 className="font-semibold text-[60px]">0</h1>
                </div>
            </div>

        </div>
    );
};

export default Banner;