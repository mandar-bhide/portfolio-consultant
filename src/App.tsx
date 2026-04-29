import Landing from './Screens/Landing';
import LoadingAnimation from './Components/LoadingAnimation'
import Education from './Screens/Education';
import { useEffect, useState } from 'react';
import Experience from './Screens/Experience';
import Projects from './Screens/Projects';
import Contact from './Screens/Contact';

export default function App(){
    const [isLoading,setLoading] = useState(true);
    useEffect(()=>{
        if(isLoading){
            document.body.style.overflow = "hidden";
        }else{
            document.body.style.overflow = "auto";
        }
        const timer = setTimeout(()=>{
            setLoading(false);
        },5000)
        return () => {
            clearTimeout(timer);
            document.body.style.overflow = "auto";
        };
    },[isLoading])
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return <div style={{overflowX:'hidden'}}>
        <LoadingAnimation/>
        <Landing/>
        <Experience/>
        <Education/>
        <Projects/>
        <Contact/>
    </div>
}