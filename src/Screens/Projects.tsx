import { Arrow }  from '../Components/icons'
import { motion } from 'motion/react'

export default function Projects() {

    const projects = [
        {
            title: "Local fileserver",
            image: require("../assets/fileserver.png"),
            description: "File server to provide cloud storage facility over LAN",
            technologies: [
                "Python",
                "Dart",
                "Software Architecture"
            ],
            codeLink: "https://github.com/mandar-bhide/local-fileserver",
        },
        {
            title: "Grant Thornton Audit Challenge",
            image: require("../assets/audit.png"),
            description: "5th position in Grant Thornton audit challenge 2023",
            technologies: [
                "Financial Analysis",
                "Due Diligence",
                "Auditing"
            ],
            codeLink: "https://docs.google.com/document/d/1_jE9AkhskUXKYpJR-ETrg7h1TKfIZOtcnC8gmKQbkEI/edit",
        },
        {
            title: "Stock price prediction",
            image: require("../assets/stock.png"),
            description: "One-day ahead prediction of closing price of specific stock using technical indicators and deep learning techniques.",
            technologies: [
                "Python",
                "Tensorflow",
                "Equity Analysis"
            ],
            codeLink: "https://github.com/mandar-bhide/stock-prediction",
        },        
    ]
    const isMobile = window.screen.availWidth < 768;
    console.log(window.screen.availWidth)
    return <motion.div className="col" style={{color:'#000',display:'flex',alignItems:'start',justifyContent:'center',backgroundColor:'#fff',padding:isMobile?'4rem 2rem':'4rem 10rem'}} initial={{opacity:0}} animate={{opacity:1,transition:{duration:2,delay:4}}}>
        <h1>Selected Work</h1>
        <p style={{fontSize:'1.1em',margin:'10px 0px',fontWeight:400}}>Turning problems into working solutions.</p>
        <div style={{content:'',width:'1rem',height:'2rem'}}></div>
        {
            projects.map((el)=> <div className="desktop-row-mobile-col" >
                <img src={el.image} alt={el.title} style={{width:'12rem',height:'12rem',borderRadius:'10px'}}/>
                <div style={{content:'',width:'4rem',height:'1rem'}}></div>
                <div className="col" style={{alignItems:'start'}}>
                    <h3 style={{fontWeight:'600'}}>{el.title}</h3>
                    <p style={{color:'#9f9f9f',fontSize:'0.85em',fontWeight:'500',margin:'0.5em 0',width:isMobile?'90vw':'45vw'}}>{el.description}</p>
                    <div style={{content:'',width:'1rem',height:'1rem'}}></div>
                    <ul className='list-horizontal'>
                        {
                            el.technologies.map((tech,index)=>{
                                return <li key={index} style={{backgroundColor:'#f2f1f1',borderRadius:'8px',padding:'8px 10px',fontSize:'0.8em'}}>{tech}</li>
                            })
                        }                                
                    </ul>
                    <div style={{content:'',width:'1rem',height:'1rem'}}></div>
                    <a href={el.codeLink} target="_blank" style={{margin:'10px',marginLeft:0,display:'flex',alignItems:'center',backgroundColor:'#1C1E21',padding:'10px 12px',borderRadius:'8px',color:'#fff'}}>View Project &nbsp; <Arrow color="#fff" size={20}/></a>
                </div>
                <div style={{content:'',width:'9rem',height:0}}></div>
            </div>)
        }
    </motion.div>
}

