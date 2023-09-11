import React from 'react'
import { useEffect,useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import styled from "styled-components"
import '@splidejs/react-splide/css';
import '@splidejs/splide/css';
import { Link } from 'react-router-dom';
const SliderFood = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`https://api.spoonacular.com/recipes/random?tags=vegetarian&number=10&apiKey=666af7a6a69b4a4b9b82a4b6f0ac822b`)
            .then(res => res.json())
            .then(json => {
                if (json.recipes){
                    setData(json.recipes)}
                
                
            })


    }, [])


    return (
        <div className='container'>
            <Warrper>
                <h3>Our Vegetarian Picks</h3>
                <Splide options={{
                    perPage: 2,
                    gap: '4px',
                    arrows: false,
                    pagination: false,
                    drag: "free",

                }}>
                    {data.map((e) => {
                        return (
                            <SplideSlide >
                            <Link to={'/Info/'+ e.id}>
                                <Card key={e.id}>
                                    <p>{e.title}</p>
                                    <img src={e.image} />
                                </Card>
                            </Link>
                                </SplideSlide>
                        )
                    })}
                </Splide>
            </Warrper>
        </div>
  )
}
const Warrper = styled.div`
margin: 4rem 0rem
`
const Card = styled.div`
border-radius: 2rem;
overflow: hidden;
min-height: 25rem;
position:relative;
width:100%;
height:100%;

img{
    position:absolute
    width:100%;
    height:100%;
    left:0;
    border-radius: 2rem;

}
p{
    position:absolute;
    bottom:0%;
    z-index:10;
    left:50%;
    transform: translate(-50%, 0%);
    width: 100%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    text-align: cetner;
    height: 40%;
    overflow:hidden;
    }
`
export default SliderFood