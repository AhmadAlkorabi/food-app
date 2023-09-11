import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { BsSearch } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components"
const SerachBar = (props) => {


    const [search, setSearch] = useState('')
    const navigate = useNavigate()
    const submiting = (e) => {
        e.preventDefault();
        navigate('/search/' + search);
    }
    return (
        <FormStyled>
            <div>
                <BsSearch className='text-white fs-5'/>
                <input type='text' onChange={(e) => setSearch(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            return navigate('/search/' + search);
                        }
                        
                    }}
                    value={search} />
            </div>
        </FormStyled>
    )
}

const FormStyled = styled.div`
margin:0rem 20rem;
position:relative;

div{
    width: 100%;
    position: relative;
}

input{
    border:none;
    background: linear-gradient(35deg , #494949 , #313131);
    font-size:1.5rem;
    color:white;
    padding: 1rem 4rem;
    border:none;
    border-radius:1rem;
    outline:none;
width:100%;
}

svg{
    position:absolute;
    top:50%;
    left:0%;
    transform:translate(100% , -50%); 
}
`
    // < Form className = ' d-flex w-25 m-auto bg-light ' >
    //         <Form.Control
                
    //             type="text"
    //             placeholder='Serach'
    //             id="inputSearch"
    //             onChange={(e) => {
                    
    //                 setSearch(e.target.value)
                    
                        
    //             }}
    //             />
    //         <Link variant="outline-success" className='btn btn-danger'  to={'/search/'+ search}>Search</Link>
            
    //         </ >
export default SerachBar