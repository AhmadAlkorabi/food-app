import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import SerachBar from './components/SerachBar';
import { BiFoodMenu } from "react-icons/bi";
import {motion} from 'framer-motion'
import Pages from './Pages';
function App() {

  return (
    <div className='App container'>
      <BrowserRouter>
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{type:'spring', stiffness:200}}
        ><Link className='icon container text-black  h1' to='/'><BiFoodMenu /></Link></motion.div>
        <SerachBar />
        <Pages/>
      </BrowserRouter>
    </div>
  );
}

export default App;
// 87f91a96f0fe4912afd0614df29aa1e9
// 666af7a6a69b4a4b9b82a4b6f0ac822b
// 7568d0452edd4e848ee3a250f5cb48d2