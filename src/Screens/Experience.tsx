import kplogo from '../assets/kp.png'
import rsmlogo from '../assets/rsm.png'
import { motion } from 'motion/react'

export default function Experience() {
    const isMobile = window.screen.availWidth < 768;

    var experience = [
        {
            company: "RSM Astute Consulting",
            role: "Sr Officer (IT & Systems Assurance)",
            fromto: "May 2026 - PRESENT",
            logo: rsmlogo,
            alt: "RSM Astute Consulting Pvt Ltd"
        },
        {
            company: "Kirtane & Pandit LLP",
            role: "Audit Assistant (Risk Advisory)",
            fromto: "July 2024 - October 2025",        
            logo: kplogo,
            alt: "Kirtane & Pandit LLP Chartered Accountants"
        },
    ]

    return <motion.div className="col" style={{color:'#000',display:'flex',alignItems:'start',justifyContent:'center',backgroundColor:'#fff',padding:isMobile?'4rem 2rem':'4rem 10rem'}} initial={{opacity:0}} animate={{opacity:1,transition:{duration:2,delay:4}}}>
        <h1>Experience</h1>
        <p style={{fontSize:'1.1em',margin:'10px 0px',fontWeight:400}}>Theories tested. Systems optimized.</p>
        <div style={{content:'',width:'1rem',height:'2rem'}}></div>
        {
            experience.map((exp)=><div className="desktop-row-mobile-col" style={{padding:'2rem 0'}}>
            <img src={exp.logo} alt={exp.alt} style={{width:'10rem',height:'10rem',border:'1px solid #d4d4d4',borderRadius:'0.5rem'}}/>
            <div style={{content:'',width:'5rem',height:'0.2rem'}}></div>
            <div className="col" style={{justifyContent:'center',margin:"1.5rem 0"}}>
                <h3 style={{fontWeight:'600'}}>{exp.company}</h3>
                <p style={{color:'#3e3e3e',fontSize:'0.85em',fontWeight:'500',margin:'0.5em 0'}}>{exp.role}</p>
                <div style={{content:'',width:'1rem',flexGrow:1}}></div>
                <p style={{color:'#3e3e3e',fontSize:'0.85em',fontWeight:'500',margin:'0.5em 0'}}>{exp.fromto}</p>
            </div>
        </div>)
        }
    </motion.div>
}
