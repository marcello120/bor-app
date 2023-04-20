import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import WaveTester from '@/components/WaveTester';
import WaveForm from '@/components/WaveForm';
import AnimTester from '@/components/AnimTester';
import LoginForm from '@/components/LoginForm';
import { Button } from 'react-bootstrap';



export default function Home() {




  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossOrigin="anonymous" />

        <Button variant='secondary' href='./wave_tester' >WaveTester</Button>
        <Button variant='secondary' href='./build_a_bor' >BuildABor</Button>
        <Button variant='secondary' href='./bor_tinder' >BorTinder</Button>
        <Button variant='secondary' href='./login' >Login</Button>

        <WaveForm></WaveForm>
        {/* <WaveTester></WaveTester> */}
        {/* <AnimTester></AnimTester> */}
        {/* <LoginForm></LoginForm> */}
      
    </>
  )
}
