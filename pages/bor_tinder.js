import BorTinderPage from '@/components/BorTinderPage'
import React, {useEffect} from 'react'

const bor_tinder = ({wines}) => {

  useEffect(() => {
    // Hide the URL address bar of the browser on page load
    const hideAddressBar = () => {
      if (window.innerHeight <= 650) {
        window.scrollTo(0, 1);
      }
    };
    hideAddressBar();

    // Hide the URL address bar of the browser on scroll
    window.addEventListener('scroll', hideAddressBar);

    return () => {
      // Remove the event listener when the component is unmounted
      window.removeEventListener('scroll', hideAddressBar);
    };
  }, []);
  return (
    <div style={{overflow:'hidden'}}>
      <BorTinderPage wines = {wines} ></BorTinderPage>
    </div>
  )
}

export async function getServerSideProps() {
  
  // Fetch data from external API
  const res = await fetch(process.env.HOME_URL + "/api/getXrandom")
  const data = await res.json()

  // Pass data to the page via props
  return { props: { wines : data } }
}

export default bor_tinder