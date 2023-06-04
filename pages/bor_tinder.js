import BorTinderPage from '@/components/BorTinderPage'
import React, {useEffect} from 'react'
import { wines } from '../data/wines'

const bor_tinder = ({wines}) => {


  return (
    <div style={{overflow:'hidden'}}>
      <BorTinderPage wines = {wines} ></BorTinderPage>
      
    </div>
  )
}

export async function getServerSideProps() {
  
  // Fetch data from external API
  const res = await fetch(process.env.HOME_URL + "/api/getXrandom")
  let data = await res.json()

  if(data == null || data == undefined){
    data = wines;
  }
  
  // Pass data to the page via props
  return { props: { wines : data } }
}

export default bor_tinder