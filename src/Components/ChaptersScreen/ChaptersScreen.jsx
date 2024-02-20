import { useState } from "react"

const ChaptersScreen = ({chapters , chapterHandler}) => {
    const[activeId , setActiveId] = useState('')
    return <>
    <div className="min-vh-100 shadow-lg bg-red p-3">
        <h1 className=" text-center fw-bold fs-5">Chapters</h1> <hr />
        <ul className=" list-group text-end">
            {chapters && chapters.length > 0 ? (
                chapters.map(chapter =>(
                    <div key={chapter.id}>
                        <li onClick={(e) => {
                            chapterHandler(chapter)
                            setActiveId(chapter.id)
                        }} className={`list-group-item bg-transparent border-0 py-0 d-flex justify-content-between curser fs-6 ${activeId === chapter.id && 'active'}`}>
                            <span>{chapter.id}</span>
                            <span>{chapter.name_arabic}</span>{' '}
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
    </>
}

export default ChaptersScreen