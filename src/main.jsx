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
    <Hello name ="Above the cloud" content="Next, we need to create an A record for your domain name that points to your EC2 instance. This can be done from your domain registrar's website. " />
    <Hello name = "Activate the Cloud" content="Now that my domain name is pointing to my AWS EC2 Instance. I can go ahead and configure the server with all the necessary tools I'll need such as Apache and Certbot." />
    <Hello name = "Lets instrument it." content=" Deploying Zabbix on your Application Server for Monitoring. A config file for your site is very important because Certbot will need to correct it. So using the command" />
    <Footer />
    </div>
    <Sidebar />
    </div>

  </React.StrictMode>,
)
