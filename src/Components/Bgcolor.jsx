import React, { useState } from 'react';
const Bgcolor = () => {
    const [color, setColor] = useState('black');
    return (
        <div className='h-screen w-full flex justify-center items-center pb-10 transition-all duration-500' 
             style={{ backgroundColor: color }}>
                <div className='bg-white p-4 rounded-xl flex gap-4 shadow-lg'>
                <button 
                    onClick={() => setColor('red')}
                    className='outline-none p-4 px-6 py-2 rounded-full text-white font-semibold shadow-sm active:scale-95 transition-transform'
                    style={{ backgroundColor: 'red' }}>Red
                </button>
                <button 
                    onClick={() => setColor('green')}
                    className='outline-none px-6 py-2 rounded-full text-white font-semibold shadow-sm active:scale-95 transition-transform'
                    style={{ backgroundColor: 'green' }}>
                    Green</button>
                <button 
                    onClick={() => setColor('blue')}
                    className='outline-none p-4 px-6 py-2 rounded-full text-white font-semibold shadow-sm active:scale-95 transition-transform'
                    style={{ backgroundColor: 'blue' }}>
                    Blue</button>
                    <button 
                    onClick={() => setColor('purple')}
                    className='outline-none px-6 py-2 rounded-full text-white font-semibold shadow-sm active:scale-95 transition-transform'
                    style={{ backgroundColor: 'purple' }}>
                    Purple</button>
                    <button 
                    onClick={() => setColor('gray')}
                    className='outline-none px-6 py-2 rounded-full text-white font-semibold shadow-sm active:scale-95 transition-transform'
                    style={{ backgroundColor: 'Gray' }}>
                    Gray</button>

            </div>
        </div>
    );
};

export default Bgcolor;
