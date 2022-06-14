import React from 'react'
import Navs from './Navs'
import Title from './Title'
function MainPage({children}) {
  return (
    <div>
        <Title title="Box office" subtitle="Are you looking for movie or an actor"/>
         <Navs />
        {children}
    </div>
  )
}

export default MainPage