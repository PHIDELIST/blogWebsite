import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './main.css'
import Hello from './hello.jsx'
import Navbar from './navbar.jsx'
import Footer from './footer.jsx'
import Sidebar from './sidebar.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    < Navbar title ="Delphi Devs" />
    <div id='main'>
    <div id='body'>
    <Hello name ="Above the cloud"/>
    <Hello name = "Activate the Cloud"/>
    <Hello name = "Lets instrument it."/>
    <Footer />
    </div>
    <Sidebar />
    </div>

  </React.StrictMode>,
)
