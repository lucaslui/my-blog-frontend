import React, { useState } from 'react'

import Header from './presentation/layout/header/Header'
import Sidebar from './presentation/layout/sidebar/Sidebar'
import Footer from './presentation/layout/footer/Footer'
import Content from './presentation/layout/content/Content'

import './App.css'

export default function App() {

  const [sidebarOpened, setSidebarOpened] = useState(false);

  function toggleSidebar() {
    setSidebarOpened(!sidebarOpened);
  };
  
  return (   
    <div className="container">
      <Header toggleSidebar={toggleSidebar} sidebarOpened={sidebarOpened} />
      <Sidebar toggleSidebar={toggleSidebar} sidebarOpened={sidebarOpened} />
      <Content/>          
      <Footer/>
    </div >
  )
}