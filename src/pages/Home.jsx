import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'

function Home() {
  return (
    <div>
        <Main />
        <Row rowId='1' title='UpComing' fetchUrl={requests.requestUpcoming} />
        <Row rowId='2' title='Horror' fetchUrl={requests.requestHorror} />
        <Row rowId='3'  title='Trending' fetchUrl={requests.requestTrending} />
        <Row rowId='4' title='TopRated' fetchUrl={requests.requestTopRated} />
      
    </div>
  )
}

export default Home
