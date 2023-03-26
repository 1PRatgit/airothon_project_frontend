import React from 'react'

export const About = () => {
  return (
    <div className="mb-3 col col-11 mx-auto">
      
        <div className='container mb-3'>
          <br/>
          <h4>
          About Keeper App.
          </h4>
          This is todos list application using react.<br/><br/>

          As a user, You can,

          <ul class="list-group list-group-flush">
            <li class="list-group-item">1. Read a list of tasks</li>
            <li class="list-group-item">2. Add a task using the mouse or keyboard.</li>
            <li class="list-group-item">3. add a discription of task.</li>
            <li class="list-group-item">4. Delete any task when completed</li>
          </ul>
          <br/>

          <h5>The project has been divided into 5 steps.</h5>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">1. Create react app</li>
            <li class="list-group-item">2. Design a UI and create various componens as header, footer, about, todos, todoitems. </li>
            <li class="list-group-item">3. Create functionalities such as add, delete and display tasks using useState() hook.</li>
            <li class="list-group-item">4. Add about page using routers</li>
            <li class="list-group-item">5. Deploy project using github</li>
          </ul>

        </div>
    </div>
  )
}
