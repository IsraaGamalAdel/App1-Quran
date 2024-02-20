import ReactPlayer from "react-player";

const PlayerScreen = ({recitersDetail , chapterDetail}) => {
    const audioLink = ( reciter , number) => {
        return reciter + '/' + ('00' + number).slice(-3)+'.mp3'
    }
    return <>
    <div className="min-vh-100 shadow-lg bg-red p-3">
        <h1 className=" text-center fw-bold fs-5">Player</h1> <hr />
        {recitersDetail !==null && chapterDetail!==null ? (
        <ul className=" list-group  text-endt">
            <div>
                <li className=" list-group-item bg-transparent border-0 text-light py-0 fs-6 ps-0 curser d-flex justify-content-between">
                    <span>Reciter:</span>
                    <span className="fs-6">{recitersDetail.name}</span>
                </li>
                <hr />
                <li className=" list-group-item bg-transparent border-0 text-light py-0 fs-6 ps-0 curser d-flex justify-content-between">
                    <span>Chapter In Arabic:</span>
                    <span>{chapterDetail.name_arabic}</span>
                </li>
                <hr />
                <li className=" list-group-item bg-transparent border-0 text-light py-0 fs-6 ps-0 curser d-flex justify-content-between">
                    <span>Chapter In English:</span>
                    <span>{chapterDetail.name_complex}</span>
                </li>
                <hr />
                <li className=" list-group-item bg-transparent border-0 text-light py-0 fs-6 ps-0 curser d-flex justify-content-between">
                    <span>Revelation Place:</span>
                    <span>{chapterDetail.revelation_place}</span>
                </li>
                <hr />
                <li className=" list-group-item bg-transparent border-0 text-light py-0 fs-6 ps-0 curser d-flex justify-content-between">
                    <span>Translated Name:</span>
                    <span>{chapterDetail.translated_name.name}</span>
                </li>
                <hr />

                <ReactPlayer 
                    url={audioLink(recitersDetail.Server , chapterDetail.id)} 
                    controls={true} 
                    playing={true} 
                    width='100%' 
                    height='50px' 
                />
            </div>
        </ul>
        ) : ''}
        
    </div>
    </>
}

export default PlayerScreen