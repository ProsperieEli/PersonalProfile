import React from "react";
import { Link } from "react-router-dom";
export default function Home() {

  return(
  <>
  <h1>Elijah Prosperie. Software Engineer.
  </h1>

  <p>A graduate from Alchemy Code Labs. I am a developer who concentrates on ensuring projects are maintained even after completion. Keeping the quality always up to standards.
    </p>
  <h1>
    Education.
  </h1>
  <p>
    Coming from Alchemy Code Labs. I have worked on approximately 100 different projects in the span of a six-month period. These ranging from front-end, back-end and even full-stack projects.
    Finishing his classes in March of 2022.
  </p>
  <h1>
    Skillset.
  </h1>
  <p>
    <ul>
      <li>JavaScript.</li>
        <li>React.</li>
        <li>CSS.</li>
<li>Node.js.</li>
 <li>PostgressSQL.</li>
    </ul>
  </p>
  <h1>Self-Taught:</h1>
  <ul>
    <li>Python.</li>
    <li>C++.</li>
  </ul>
    {<Link to="Projects"> <button>Projects</button></Link>}
 
  </>)
}
