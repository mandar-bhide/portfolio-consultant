import kplogo from '../assets/kp.png'
import { motion } from 'motion/react'

export default function Experience() {
    const isMobile = window.screen.availWidth < 768;
    return <motion.div className="col" style={{color:'#000',display:'flex',alignItems:'start',justifyContent:'center',backgroundColor:'#fff',padding:isMobile?'4rem 2rem':'4rem 10rem'}} initial={{opacity:0}} animate={{opacity:1,transition:{duration:2,delay:4}}}>
        <h1>Experience</h1>
        <p style={{fontSize:'1.1em',margin:'10px 0px',fontWeight:400}}>Theories tested. Systems optimized.</p>
        <div style={{content:'',width:'1rem',height:'2rem'}}></div>
        <div className="desktop-row-mobile-col" style={{padding:'2rem 0'}}>
            <img src={kplogo} alt="Kirtane & Pandit LLP Chartered Accountants" style={{width:'10rem',height:'10rem',border:'1px solid #d4d4d4',borderRadius:'0.5rem'}}/>
            <div style={{content:'',width:'6rem',height:'1rem'}}></div>
            <div className="col">
                <h3 style={{fontWeight:'600'}}>Kirtane & Pandit LLP</h3>
                <p style={{color:'#9f9f9f',fontSize:'0.85em',fontWeight:'500',margin:'0.5em 0'}}>Audit Assistant • 2024-2025</p>
                <ul className='list'>
                    <li>Participated in Internal audits of 10+ organizations across 4+ sectors</li>
                    <li>Conducted RPT review of entities in a large Indian conglomerate.</li>
                    <li>Developed comprehensive light-weight ITGC audit framework.</li>
                    <li>Engineered script-driven audits.</li>
                </ul>
            </div>
            <div style={{content:'',width:'9rem',height:0}}></div>
        </div>
    </motion.div>
}
