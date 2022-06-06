import { useEffect, useState, /*useRef*/ } from "react";

//useRef indagar un poco más, es muy útil


const ScrollAnimation = () =>{

    const [background, setBackgorund] = useState('pink')

    useEffect(() =>{
        const handleScroll= () =>{
            const div = document.getElementById('scroll-color')
            const { y } = div.getBoundingClientRect();
            
            const backgroundColor = y <= 0 ? 'orange' : 'pink'
            setBackgorund(backgroundColor);
        }

        window.addEventListener('scroll', handleScroll)

        return () =>{
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return(
        <div>
            <div id='scroll-color' style={{height: '180vh', background}}>
                <h1>Scrollear para cambiar el color de fondo</h1>
            </div>
        </div>
    )


}


export default ScrollAnimation;