import React from 'react'
import { Link } from 'react-router-dom'

export default function Front() {
  return (
    <div>
      <nav><h1>My Portfolio</h1></nav>


      <div className='para'>
        <img src="./imgs/imran.jpg" alt="" />
        <p>
          Kashif Imran is an ambitious 18-year-old with a passion for technology and web development. He completed his intermediate education in ICS from Educators Science College, where he built a strong foundation in computer science and programming. Now, he is learning web development at Quaid College, Lahore, focusing on the skills needed to create websites and applications. <br /> <br />

          Kashif is determined to build a successful career in web development after completing his course. He loves learning new things, solving problems, and working on creative projects. He believes that technology can make a big difference in the world and wants to contribute to this change through his work. With his dedication and hard work, Kashif is excited to grow and achieve his goals in the tech industry.
        </p>
      </div>
      <div className='bttn'>






        <Link to="Exp">
          <button>Experience</button>
        </Link>





        <Link to="Cont">
          <button>Contact Us</button>
        </Link>








      </div>




    </div>
  )
}
