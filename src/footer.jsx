import React from 'react'
import './footer.css'
import Foot from './assets/client-databiz.svg'
import Foot2 from './assets/client-audiophile.svg'
import Foot3 from './assets/client-meet.svg'
import Foot4 from './assets/client-meet.svg'


function footer() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  return (
    <>
    <footer id='footer'>	
          <h1>I hate CORS but it's the only way to get the data</h1>
					<h1>@ {date}</h1>
	</footer>
    </>
  )
}
export default footer
