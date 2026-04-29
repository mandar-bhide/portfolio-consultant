import { motion } from 'motion/react'

export default function Education(){
    const education = [
        {
            institute:"ICMAI",
            degree:"Cost and Management Accountant",
            fromTo:"2022-2025"
        },
        {
            institute:"Savitribai Phule Pune University",
            degree:"Bachelors in Engineering (Computer Engineering)",
            fromTo:"2018-2022"
        },
    ]

    const isMobile = window.screen.availWidth < 768;
    
    return <motion.div className="desktop-row-mobile-col" style={{color:'#fff',display:'flex',alignItems:isMobile?'start':'center',backgroundColor:'#000003',padding:'5rem 0'}} initial={{opacity:0}} animate={{opacity:1,transition:{duration:2,delay:4}}}>
        <div style={{display:'flex',flexDirection:'column',alignItems:'start',justifyContent:'start',margin:isMobile?'40px 30px':'40px 0px'}}>
            <h1>Background</h1>
            <p style={{fontSize:'1.1em',margin:'10px 0px',fontWeight:400}}>Not just degrees. Mental models.</p>
        </div>
        <div className="col education-list">
            {
                education.map((el,index)=><div className="row" key={index} style={{justifyContent:'space-between',alignItems:'center'}}>
                    <div className="col" style={{alignItems:'start',margin:'2rem'}}>
                        <h3 style={{color:'#f1f1f1',fontWeight:'600'}}>{el.degree}</h3>
                        <div style={{content:' ',height:'10px'}}></div>
                        <p style={{color:'#d5d5d5',fontSize:'0.9em'}}>{el.institute}</p>
                    </div>
                    <p style={{margin:'1rem',marginLeft:'3rem',color:'#d5d5d5',whiteSpace:'nowrap'}}>{el.fromTo}</p>                    
                </div>)
            }
        </div>
    </motion.div>
}

