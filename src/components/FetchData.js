import React, { useEffect, useState } from 'react';
import axios from 'axios'

import { Link } from 'react-router-dom';
const FetchData = ({cat}) => {
    const [newsData, setNewsData] = useState([]);
    const fetchData = async () => {
        try {
            const response = await axios.get(
               cat
               ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=741f4b2b9af2485f89938cd0fc29a515`
               : `https://newsapi.org/v2/top-headlines?country=in&apiKey=741f4b2b9af2485f89938cd0fc29a515`)

            // console.log(response.data.articles)

            setNewsData(response.data.articles)

        } catch (error) {
            console.log(error)
        }


    }

    useEffect(() => {
        fetchData()
    }, [cat])
    return (
        <>
            <div className="container my-4">
                <h3>
                    <u>  TOP HEADLINS </u>
                </h3>

                <div className='my-3 d-flex justify-content-center align-items-center flex-column container' style={{minHeight:"100vh"}}>
                    {
                        newsData
                            ?
                                newsData.map((item, index)=>{
                                    return(
                                        <>
                                        <div key={index} className='container my-3 p-3' style={{ borderRadius:"10px" ,width:"600px", boxShadow:"2px 2px 10px silver", }}>
                                            <h2>{item.title}</h2>

                                            <img src={item.urlToImage} alt="image not found" className='image-fluid' style={{width:"auto" , height:"300px", objectFit:"cover"}}/>
                                            <p>{item.description}</p>
                                            <p>{item.content}</p>
                                            <Link className='btn btn-info' to={item.url} target='_blank'>view more</Link>
                                        </div>
                                        </>
                                    )
                                })
                            
                            : "Loading...."
                    }
                </div>
            </div>
        </>
    );
}

export default FetchData;
