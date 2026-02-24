export function Arrow({color,size}:{color:string,size:number}) {
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
        <path d="M14.43 5.92969L20.5 11.9997L14.43 18.0697" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.01 12H20.33" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.5 12H6.97" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
}

export function React({size}:{size:number}){
    return <i className="devicon-react-original colored" style={{width:size,height:size}}></i>
}

export function Typescript({size}:{size:number}){
    return <i className="devicon-typescript-plain colored" style={{width:size,height:size}}></i>
}
