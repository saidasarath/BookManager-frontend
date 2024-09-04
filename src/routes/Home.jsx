import React from 'react'
import Hero from '../components/Hero'
import t1 from "../assets/1.jpg"
function Home() {
  return (
    <Hero
    cname="hero"
    heroimg={t1}
    title="Book Manager"
    btntext="my Books"
    url="/mybooks"
    btnclass="show"/>
  )
}

export default Home