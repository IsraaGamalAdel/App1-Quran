import { useState } from 'react'
import{ FaUserCircle } from 'react-icons/fa'

const RecitersScreen = ({reciters , reciterHandler}) => {
    const[activeId , setActiveId] = useState('')
    return <>
    <div className="min-vh-100 shadow-lg bg-red p-3">
        <h1 className=" text-center fw-bold fs-5">Reciters</h1> <hr />
        <ul className=" list-group text-start">
        {reciters && reciters.length > 0 ? (
            reciters.map((reciter) => (
            <div key={reciter.id}>
                <li onClick={(e) => {
                    reciterHandler(reciter) 
                    setActiveId(reciter.id) 
                    }} 
                    className={`list-group-item bg-transparent border-0 py-0 fs-6 ps-0 curser ${reciter.id===activeId && 'active'}`}>
                    <FaUserCircle className=' fs-3 me-3'/>
                    <span>{reciter.name}</span>{' '}
                </li>
                <hr />
            </div>
            ))
        ) : (
            <div className=' text-center'>
                <span className=' spinner-border'></span>
            </div>
        )}
        </ul>
    </div>

    {/* <div className=" min-vh-100 shadow-lg bg-red p-3">
        <h1 className="fs-5 fw-bold text-center ">Reciters</h1>
        <hr />
        <div>
            <div className=" d-flex align-items-center py-0 curser">
                <FaUserCircle className=' fs-3'/>{' '}
                <span className="fs-6 ">Abdelbari Al-Toubayti</span>
                <br />
            </div>{' '}
            <hr />
        </div>
    </div> */}
    </>
}

export default RecitersScreen