// import React from "react";
// import Style from './Home.module.css';
import RecitersScreen from './../RecitersScreen/RecitersScreen';
import ChaptersScreen from './../ChaptersScreen/ChaptersScreen';
import PlayerScreen from './../PlayerScreen/PlayerScreen';
import axios from 'axios';
import { useEffect, useState } from 'react';



const  Home = () => {
    const [reciters , setRreciters] = useState([])
    const [chapters , setChapters] = useState([])
    const [recitersDetail , setRecitersDetail] = useState(null)
    const [chapterDetail , setChapterDetail] = useState(null)
    useEffect(() => {
        async function fetchData(){
            const {
                data: { reciters },
        } = await axios.get(`https://mp3quran.net/api/_english.php`)
        setRreciters(reciters)
        }
        fetchData()
    },[])

    useEffect(() => {
        async function fetchData(){
            const {data: chapters } = await axios.get(`https://api.quran.com/api/v4/chapters`)
            setChapters(chapters)
        }
        reciters && reciters.length > 0 && fetchData()
    },[reciters])
    
    const reciterHandler = (reciter) =>{
        setRecitersDetail(reciter)
    }
    const chapterHandler = (chapter) =>{
        setChapterDetail(chapter)
    }
    return <>
        <div className=" container">
            <div className="row p-5 vh-100">
                <div className="col-lg-4 col-md-4 col-sm-12 col-12 scroll ">
                    <RecitersScreen reciters={ reciters } reciterHandler={reciterHandler}/>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-12 col-12 scroll ">
                    <ChaptersScreen chapters={chapters && chapters.chapters} chapterHandler={chapterHandler}/>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-12 col-12 scroll ">
                    <PlayerScreen recitersDetail={recitersDetail} chapterDetail={chapterDetail}/>
                </div>

            </div>
        </div>
    </>
}

export default Home