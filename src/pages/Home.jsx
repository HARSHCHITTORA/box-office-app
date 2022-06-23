import React, { useState } from 'react'
import ActorGrid from '../components/actor/ActorGrid'
import CustomRadio from '../components/CustomRadio'
import MainPage from '../components/MainPage'
import ShowGrid from '../components/show/ShowGrid'

import {apiGet} from '../misc/confg'
import { RadioInputsWrapper, SearchButtonWrapper, SearchInput } from './Home.styles'

function Home() {
    const [input,setInput]=useState('')
    const [results,setResult]=useState(null)
    const [searchOption,setSearchOption]=useState("shows")

    const isShowsSearch=searchOption==="shows";

    const onInputChange=(ev)=>{
        setInput(ev.target.value)
        // console.log(ev.target.value)
    }

    // useEffect(()=>{
    //     console.log('use effect run')
    //     return ()=>{
    //         console.log('exit')
    //     }
    // },[searchOption])


    const onSearch=()=>{
        // https://api.tvmaze.com/search/shows?q=man

        apiGet(`/search/${searchOption}?q=${input}`).then(result=>{
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
            // return <div>{results.map((item)=><div key={item.show.id}>{item.show.name}</div>)}</div>
            //---------------------------------------------------------------------------------------------------
            // return results[0].show?
            // <div>{results.map((item)=><div key={item.show.id}>{item.show.name}</div>)}</div>
            // :<div>{results.map((item)=><div key={item.person.id}>{item.person.name}</div>)}</div>
            //---------------------------------------------------------------------------------------------------

            return results[0].show?(<ShowGrid data={results}/>):(<ActorGrid data={results}/>)
   
        }
    return null;
}

const onRadioChange=(ev)=>{
    setSearchOption(ev.target.value)
}
// console.log(searchOption)
  return (
    <MainPage>
        {/* <input  */}
        <SearchInput
        type="text" 
        placeholder='search for something'
        onChange={onInputChange} 
        onKeyDown={onKeyDown} 
        value={input}/>

        <RadioInputsWrapper>
            <div>

            {/* <label htmlFor='shows-search'> */}
            <CustomRadio
                label="Shows"
                // <input 
                id="shows-search" 
                type='radio' 
                value="shows" 
                checked={isShowsSearch}
                onChange={onRadioChange}/>
            {/* </label> */}
            </div>
            <div>

            {/* <label htmlFor='actors-search'> */}
            <CustomRadio
                label="Actors"
                // {/* <input  */}
                id="actors-search" 
                type='radio'
                value="people"
                checked={!isShowsSearch}
                 onChange={onRadioChange}/>
            {/* </label> */}
            </div>
        </RadioInputsWrapper>

         <SearchButtonWrapper>

        <button type='button' onClick={onSearch}>Search</button>
        {renderResults()}
         </SearchButtonWrapper>
    </MainPage>
  )

  }
export default Home