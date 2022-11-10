import React, { useEffect, useState } from 'react'
import './MeMeList.css';
import { getListMeme } from './service/MemeService';
import Carousel from 'react-bootstrap/Carousel';

const MeMeList = () => {
    const [listMeme, setListMeMe] = useState([])
    const [listMemeButton, setListMeMeButton] = useState([])

    const [check, setCheck] = useState(false);

    useEffect(() => {
        getListMeme().then((data) => {
            setListMeMe(data.data.memes)
        })
    }, [])
    useEffect(() => {
        if (check) {
            getListMeme().then((data) => {
                setListMeMeButton(data.data.memes)
            })
        }
        else{
            setListMeMeButton([])
        }
    }, [check])

    function checkClick() {
        if (check)
            setCheck(false)
        else setCheck(true)
    }



    if (!listMeme) return <p>No data</p>
    return (
        <>


            <Carousel>
                {listMeme.map((obj) => (
                    <Carousel.Item
                        style={{ objectFit: "cover", height: "75vh" }}>
                        <img
                            className=" w-100 h-100"
                            src={obj.url}
                            alt="First slide"
                            style={{
                                objectFit: "contain"
                            }}

                        />
                    </Carousel.Item>
                ))}
            </Carousel>

            <button type="button" style={{marginLeft:"50%" , marginTop:"50px"}} onClick={checkClick} class="btn btn-primary">OnClick</button>

            <Carousel>
                {listMemeButton.map((obj) => (
                    <Carousel.Item
                        style={{ objectFit: "cover", height: "75vh" }}>
                        <img
                            className=" w-100 h-100"
                            src={obj.url}
                            alt="First slide"
                            style={{
                                objectFit: "contain"
                            }}

                        />
                    </Carousel.Item>
                ))}
            </Carousel>

        </>
    )
}
export default MeMeList;