import { motion } from 'motion/react'
import { React, Typescript } from '../Components/icons'

export default function Contact() {
    return <motion.div className="col" style={{color:'#fff',display:'flex',alignItems:'center',backgroundColor:'#000003',padding:'8rem 0 2rem 0'}} initial={{opacity:0}} animate={{opacity:1,transition:{duration:2,delay:4}}}>
        <h1>Let's Talk!</h1>
        <p style={{fontSize:'1.1em',margin:'10px 0px',fontWeight:400}}>The right conversation changes everything.</p>
        <div className="row" style={{fontSize:'2em'}}>
            <a href="https://www.instagram.com/_enclick_" rel='noreferrer' target="_blank" style={{margin:'1.5rem'}}><i className="bx bxl-instagram"></i></a>
            <a href="https://github.com/mandar-bhide" rel='noreferrer' target="_blank" style={{margin:'1.5rem'}}><i className="bx bxl-github"></i></a>
            <a href="https://www.linkedin.com/in/mandar-bhide/" rel='noreferrer' target="_blank" style={{margin:'1.5rem'}}><i className="bx bxl-linkedin-square"></i></a>
            <a href="https://dribbble.com/mandar_bhide" rel='noreferrer' target="_blank" style={{margin:'1.5rem'}}><i className="bx bxl-dribbble"></i></a>
            <a href="mailto:mandarbhide62@gmail.com" rel='noreferrer' target="_blank" style={{margin:'1.5rem'}}><i className="bx bx-envelope"></i></a>
        </div>
        <div style={{content:'',width:'1rem',height:'2rem'}}></div>

        <div className="desktop-row-mobile-col" style={{alignItems:'center',justifyContent:'center'}}>
            <a href="https://github.com/mandar-bhide/portfolio-consultant" rel='noreferrer' target="_blank" style={{margin:'1rem 2rem'}}>Source</a>
            <a href="https://mandar-bhide.github.io/portfolio-react" rel='noreferrer' target="_blank" style={{margin:'1rem 2rem'}}>Previous Version</a>
            <a href="https://www.instagram.com/entweak" rel='noreferrer' target="_blank" style={{margin:'1rem 2rem'}}>Project Entweak</a>
        </div>

        <div style={{content:'',width:'1rem',height:'4rem'}}></div>
        <div className="row" style={{alignItems:'center',justifyContent:'center'}}>
            Made with <i className='bx bxs-heart' style={{color:'red',marginInline:'5px'}}></i> in &nbsp;<React size={15}/> &nbsp; with &nbsp;<Typescript size={15}/>
        </div>
    </motion.div>
}