import React, { useState } from 'react'
import MainPage from '../components/MainPage'

import {apiGet} from '../misc/confg'

function Home() {
    const [input,setInput]=useState('')
    const [results,setResult]=useState(null)

    const onInputChange=(ev)=>{
        setInput(ev.target.value)
        // console.log(ev.target.value)
    }
    const onSearch=()=>{
        // https://api.tvmaze.com/search/shows?q=man

        apiGet(`/search/shows?q=${input}`).then(result=>{
            setResult(result)
            console.log(result)
        })
    
        // fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
        // .then(r=>r.json())
        // .then(result=>{
        //     setResult(result)
        //     console.log(result)
        // })
    }
const onKeyDown=(ev)=>{
    if(ev.keyCode===13)
    {
        onSearch()
    }
    // console.log(ev.keyCode)
}
const renderResults=()=>{
    if(results && results.length===0)
    {
        return<div>No result</div>
    }
    if(results && results.length>0){
            return <div>{results.map((item)=><div key={item.show.id}>{item.show.name}</div>)}</div>
    }
    return null;
}
  return (
    <MainPage>
        <input type="text" onChange={onInputChange} onKeyDown={onKeyDown} value={input}/>
        <button type='button' onClick={onSearch}>Search</button>
        {renderResults()}
    </MainPage>
  )

  }
export default Home