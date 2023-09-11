import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import styled from "styled-components"
import { motion } from 'framer-motion'
import './info.css'
const Info = () => {
  const params = useParams()
    const [details, setDetails] = useState({})
    const [activeTab, setActiveTab] = useState('instructions')
    useEffect(() => {
      fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=666af7a6a69b4a4b9b82a4b6f0ac822b`)
            .then(res => res.json())
            .then(json => {
                console.log(json);
                setDetails(json)
            })
    }, [params.name])
  return (
    <DetailsWrraper >
      <motion.div className='a'>
      <div>
        <h2>{details.title}</h2>
        <img src={ details.image} alt='' />
      </div>
      <In>
        <Button className={activeTab === 'instructions' ? "active" : ""} onClick={() => setActiveTab('instructions')}>Instruction</Button>
        <Button className={activeTab === 'ingredients' ? "active" : ""} onClick={() => setActiveTab('ingredients')}>Ingredients</Button>
        {activeTab === 'instructions' && (
          <Wrap>
            <h5 dangerouslySetInnerHTML={{ __html: details.instructions }}></h5>
          </Wrap>
        )}
        {activeTab === 'ingredients' && (
          <ul>
            {
              details.extendedIngredients.map((e) => (
                <li key={e.id}>{e.original}</li>
              ))
            }
          </ul>
        )}
        
        </In>
      </motion.div>
    </DetailsWrraper>
  
  )
}
const DetailsWrraper = styled.div`
margin-top :1rem;
display: flex;
justify-content: space-around;
flex:wrap;
::-webkit-scrollbar{
  display: none;
}
.a{
  display: flex;
    flex-direction: row;
    gap:40px;

}
.active{
  background: linear-gradient(53deg , #494949 , #313131 );
  color:white;
}

h2{
  margin-bottom:2rem;
  overflow-wrap: break-word;

}
li{
  font-size:1.2rem;
  line-height:2.5rem;
  overflow-wrap: break-word;
  ::-webkit-scrollbar{
  display: none;
}
}
ul{
  width:500px;
  height:400px;
  overflow: scroll;
  margin-top:2rem;
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  overflow-wrap: break-word;
  ::-webkit-scrollbar{
  display: none;
}
}

`
const Wrap = styled.div`
width:500px;
  height:400px;
  over-flow:hidden;
padding-top:2rem;
::-webkit-scrollbar{
  display: none;
}
h5{
  overflow: scroll;
    height: 500px;
     scrollbar-width:none;
    overflow-y: scroll;
}
`
const Button = styled.button`
padding: 1rem 2rem;
color:#313131;
background: white;
border: 2px solid black;
margin-right: 2rem;
font-weight: 600;
`
const In = styled.div`
`
export default Info