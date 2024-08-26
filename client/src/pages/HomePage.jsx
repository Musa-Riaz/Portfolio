import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import WorkProcess from '../components/WorkProcess'
import WhatIDo from '../components/WhatIDo'
const HomePage = () => {
  return (
    <Layout>
        <Hero />
        <WorkProcess />
        <WhatIDo />
    </Layout>
  )
}

export default HomePage
