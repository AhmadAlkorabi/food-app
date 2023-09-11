import React from 'react'
import { useState, useEffect } from 'react'
import styled from "styled-components"
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './trending.css'
const Trending = () => {
    const [trend, setTrend] = useState([])
    useEffect(() => {
        fetch(`https://api.spoonacular.com/recipes/random?number=18&apiKey=666af7a6a69b4a4b9b82a4b6f0ac822b`)
            .then(res => res.json())
            .then(json => {
                if (json.recipes) {
                    setTrend(json.recipes)
                }
            })
    }, [])


    return (
        <div className='container'>
            <h2>Trending</h2>
            <div className='cards'>
                
            {trend.map((e) => 
            (
                <Link to={'/Info/'+ e.id}>
                    <motion.div
                        whileHover={{scale:1.1}}
                        className='card' key={e.id}>
                        <p>{e.title}</p>
                        <img src={e.image} />
                </motion.div>
                </Link>
            ))}
            </div>
        </div>
  )
}


export default Trending
