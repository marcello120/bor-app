import BorTinderPage from '@/components/BorTinderPage'
import React, {useEffect} from 'react'

const bor_tinder = () => {

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
      <BorTinderPage></BorTinderPage>
    </div>
  )
}

export default bor_tinder