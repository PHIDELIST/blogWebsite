import React from 'react'
import './hello.css'

 function hello({name}) {

  return (
    <> 
    
    
    <div class="container-main">		
    
     
				<article>
					<h1>{name}</h1>
					<p class="content">Get your team in sync, no matter your location. Streamline processes, 
						create team rituals, and watch productivity soar.</p>
					<a class="learn-btn" href="">Learn More</a>	
				</article>
			</div>
      
    </>
  )
}
 export default hello;