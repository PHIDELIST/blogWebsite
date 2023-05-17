import React from 'react'
import './hello.css'


 function hello({name,content}) {

  return (
    <> 
    
    
    <div class="container-main">		
    
     
				<article>
					<h1>{name}</h1>
					<p>{content}</p>
					
					<a class="learn-btn" href="">Learn More</a>	
				</article>
			</div>
      
    </>
  )
}
 export default hello;