
import { LeftCart } from '../../componentes/LeftCart'
import { Perfil } from '../../componentes/Perfil'
import './App.css'

function App() {
 

  return (
    <div className='total'>
    <Perfil />
    <div className='projects'>
    <h1>These are some of my projects</h1>
    
    <LeftCart img ={'/img/Shower.png'} icon = {'../img/next.svg'}  proyect = {"Wheater App"} text = 
    {"A weather app programmed with Next Js which has the ability to measure the climate of the city in which it is located and also with the ability to search the weather of almost all cities in the world registered in a wheater api"}
    link = {'https://proyecto-final-lvl2.vercel.app/'} />
    
    <LeftCart img={'/img/tarea.svg'} icon ={'../img/html.svg'}  icon2={'../img/css.svg'} icon3 = {'../img/js.svg'}  proyect = {"Todo-List App"} text = 
    {"An app capable of creating tasks, crossing out tasks which were completed, separating tasks into Actives, Completed and All where all tasks appear both completed and active. Also with the option to delete the finished tasks. Clearly programmed with html, css and javascript "}
    link = {'https://todo-list-theta-neon.vercel.app/'} />
    </div>
    </div>
  )
}

export default App
