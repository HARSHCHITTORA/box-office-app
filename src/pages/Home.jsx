import React, { useState } from 'react'
import MainPage from '../components/MainPage'

function Home() {
    const [input,setInput]=useState('')

    const onInputChange=(ev)=>{
        setInput(ev.target.value)
        // console.log(ev.target.value)
    }
    const onSearch=()=>{
        // https://api.tvmaze.com/search/shows?q=man
    
        fetch(`https://api.tvmaze.com/search/shows?q=${input}`).then(r=>r.json()).then(result=>{
            console.log(result)
        })
    }
const onKeyDown=(ev)=>{
    if(ev.keyCode===13)
    {
        onSearch()
    }
    // console.log(ev.keyCode)
}

  return (
    <MainPage>
        <input type="text" onChange={onInputChange} onKeyDown={onKeyDown} value={input}/>
        <button type='button' onClick={onSearch}>Search</button>
    </MainPage>
  )

  }
export default Home