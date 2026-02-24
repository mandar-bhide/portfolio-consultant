import { motion } from 'motion/react'
import { Arrow } from '../Components/icons'

export default function Landing() {
    return <div style={{height:"100vh",display: 'flex',flexDirection: 'column',alignItems: 'center',justifyContent: 'center'}}>
        <motion.video 
            style={{position:'absolute',objectFit:'cover',zIndex:-1,height:"100vh",width:"100%",overflow:'hidden'}} autoPlay loop muted playsInline
            initial={{opacity:0}}
            animate={{opacity:1,transition:{duration:2,delay:4}}}
        >
            <source src="/landing.mp4"/>
            <source src="/landing.webm"/>
        </motion.video>
        <motion.h1
            style={{fontSize:'3em',zIndex:1}}
            initial={{y:"100%",opacity:0}}
            animate={{y:0,opacity:1,transition:{duration:2,delay:4}}}            
            >Hi! I am Mandar.</motion.h1>
        <br/>
        <motion.p
            style={{fontSize:'1.4em',textAlign:'center',zIndex:1}}
            initial={{opacity:0}}
            animate={{y:0,opacity:1,transition:{duration:1.5,delay:6}}}
            >Computer Engineer turned Management Accountant</motion.p>
        <div style={{content:'',width:'1rem',height:'4rem'}}></div>

        <motion.a 
            className='resume-button' href="/Resume.pdf" target="_blank"
            initial={{opacity:0}}
            animate={{y:0,opacity:1,transition:{duration:1.5,delay:7}}}
            >
            View Resume &nbsp; 
            <i className='bx bx-right-arrow-alt' style={{fontSize:'2em'}}></i>
        </motion.a>
    </div>
}

