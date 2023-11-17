import React, { useState } from 'react'
import Image from './Image/kk.jpeg'
import ReactPlayer from 'react-player'
const Body = () => {
    // const bodyStyle = {
    //     backgroundColor:'rgb(255,192,254)' 
    // }
    const [likes, setLikes] = useState(0) // likes=15
    function count() {
        setLikes(likes + 1);  //(15+1)
    }
    const [text, setText] = useState('')
    function reset() {
        setText('')
    }




    

    /*const [fruits] = useState([
        { fruit: 'water melon' },
        { fruit: 'apple' },
        {fruit:'mango'}
    ])*/

    return (
        <div>
            <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <img src={Image} alt="images" style={{ height: '200px', width: '300px'}}/> <br />
                <p style={{backgroundColor:'hsla(0, 100%, 50%, 0.5)'}}>It is better to live your own destiny imperfectly than to live an imitation of somebody else's life with perfection.</p>
                <p>likes: {likes}</p>
                
                {/* destructuring */}
                <button onClick={count} variant="contained"  style={{color:'ActiveBorder',backgroundColor:'green'}}>like</button>
            </div>
            <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <label htmlFor="Name">Name : </label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <p>onutput : {text}</p>
                <button onClick={reset} style={{color:'ActiveBorder',backgroundColor:'green'}}>Reset</button>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                {/* pass down url link in url attribuite */}
                <ReactPlayer url={'https://www.youtube.com/watch?v=5Eqb_-j3FDA'} height={500} width={900} controls />
                {/* <div>
                    <p>Dandelions by Ruth B. </p>
                </div> */}
            </div>
        </div>
    )
}
export default Body