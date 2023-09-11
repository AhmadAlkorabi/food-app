import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
const Cards = () => {
    const param = useParams()
    
    const [data, setData] = useState([])


    useEffect(() => {
        fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=666af7a6a69b4a4b9b82a4b6f0ac822b&query=${param.name}&number=12`)
            .then(res => res.json())
            .then(json => {
                if (json.results)
                    setData(json.results)
            })
    }, [param.name])
    console.log( data);
    console.log('asdf');
    return (
        <div className='cards mt-4'>
            { data.length != 0 ?  
                data.map((e) => {
                    return (
                        <Link to={'/Info/' + e.id}>
                        <div className='card'>
                        <img src={e.image} />
                        <p>{e.title}</p>
                            </div>  
                        </Link>
                )
                }) :
                <h1> there is no recipes </h1>
        }
        </div>
    )
}


export default Cards