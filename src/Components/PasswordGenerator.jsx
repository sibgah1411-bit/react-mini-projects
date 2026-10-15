import React, { useCallback, useEffect, useRef, useState } from'react';
const PasswordGenerator= () => {
    const[length, setLength] = useState(8);
    const[numberAllowed, setNumberAllowed] = useState(false);
    const[charAllowed, setCharAllowed] = useState(false);
    const[password, setPassword] = useState('');
    const PasswordGenerator = useCallback (() => {
        let pass= ""
        let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if(numberAllowed) str += "0123456789"
        if(charAllowed) str += "!@#$%^&*(){}?~"
        for(let i=1; i <= length; i++ ){
            let char = Math.floor(Math.random() * str.length+1)
            pass += str.charAt(char)
        }
        setPassword(pass)
        },[length, numberAllowed, charAllowed, setPassword])
        useEffect(()=>{
            PasswordGenerator()
        },[length, numberAllowed, charAllowed, PasswordGenerator])
        const passwordRef= useRef(null)
        const cpoyToClipboard= useCallback(() =>{
            passwordRef.current?.select();
            window.navigator.clipboard.writeText(password)
            alert("Password copied to clipboard!");
        },[password])

    return(
        <div className='h-screen w-full flex justify-center items-center pb-10'>
        <div className='bg-gray-700 max-w-md rounded-lg shadow-md p-4 gap-4 px-6 py-4 my-8'>
         <h1 className='font-bold text-xl text-white text-center my-3'>Password Generator</h1>
         <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input
            type= 'text'
            value= {password}
            ref= {passwordRef}
            placeholder='Password....'
            className='w-full py-1 px-3 bg-white'
            readOnly
            />
            <button className='bg-blue-700 text-white outline-none px-3 py-0.5 shrink-0'
            onClick={cpoyToClipboard}>Copy</button>
         </div>
         <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
                <input
                type= 'range'
                min={6}
                max={100}
                value={length}
                className= 'cursor-pointer'
                onChange= {(e) =>{setLength(e.target.value)}}/>
                <label className='text-white'>Length:{length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
                <input
                type='checkbox'
                defaultChecked={numberAllowed}
                id='numberInput'
                onChange={(e) =>{setNumberAllowed((prev)=> !prev);}}/>
                <label htmlFor='numberInput'
                className='text-white'>Numbers</label>
            </div>
            <div className='flex items-center gap-x-1'>
                <input
                type='checkbox'
                defaultChecked={charAllowed}
                id='charInput'
                onChange={(e) =>{setCharAllowed((prev)=> !prev);}}/>
                <label htmlFor='charInput'
                className='text-white'>Characters</label>
            </div>
         </div>
        </div>
        </div>
    )
}
export default PasswordGenerator;