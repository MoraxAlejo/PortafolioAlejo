
import { LeftCart } from "./LeftCart"


export const Projects = () => {
  return (
    <>
    <div className='projects'>
    <h1>These are some of my projects</h1>
    
    <LeftCart img ={'/img/Shower.png'} icon = {'../img/next.svg'}  proyect = {"Wheater App"} text = 
    {"A weather app programmed with Next Js which has the ability to measure the climate of the city in which it is located and also with the ability to search the weather of almost all cities in the world registered in a wheater api"}
    link = {'https://proyecto-final-lvl2.vercel.app/'} />
    
    <LeftCart img={'/img/tarea.svg'} icon ={'../img/html.svg'}  icon2={'../img/css.svg'} icon3 = {'../img/js.svg'}  proyect = {"Todo-List App"} text = 
    {"An app capable of creating tasks, crossing out tasks which were completed, separating tasks into Actives, Completed and All where all tasks appear both completed and active. Also with the option to delete the finished tasks. Clearly programmed with html, css and javascript "}
    link = {'https://todo-list-theta-neon.vercel.app/'} />
    

    <LeftCart img={'../img/group.svg'} icon ={'../img/html.svg'}  icon2={'../img/css.svg'} icon3 = {'../img/js.svg'} icon4 = {'../img/php.svg'}  proyect = {"Mini Social Media"} text = 
    {"A website which allows you to enter a dashboard to view the information of a profile and also modify data such as profile picture, username, password, and biography. Because it is linked to a database, I can not upload it to a host so I leave here the link of my repository."}
    link = {'https://github.com/MoraxAlejo/MiniProyectoLvl3'} />

<LeftCart img={'../img/school.svg'} icon ={'../img/html.svg'} icon2={'../img/css.svg'} icon3 = {'../img/js.svg'} icon4 = {'../img/php.svg'} framework = {'TailwindCSS'}  proyect = {"University Plataform"} text = 
    {"A complete platform for a university with the ability to identify roles, validate password and users, change profile of a student and teacher, enroll a student to a course, with an administrator view to make a teacher linked to a course and many more functions with CRUD views. The repository of the platform is here "}
    link = {'https://github.com/MoraxAlejo/ProyectoFinal3erNivel'} />

    <LeftCart img={'../img/firetruck.svg'} icon ={'../img/html.svg'}  icon2={'../img/css.svg'} icon3 = {'../img/js.svg'} icon4 = {'../img/php.svg'}  proyect = {"RETROGRIV"} text = 
    {"project made for a fire department in Cartagena Colombia which was part of my learning process. It is technically a platform made for firefighters and practitioners similar to a platform for a university. With the same functionalities of an admin, teacher and student. It has logins by roles, and registration to courses "}
    link = {'https://github.com/MoraxAlejo/retrogriv'} />

     
    </div>
    </>
  )
}
