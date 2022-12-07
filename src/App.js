import './App.css';
import { Header } from './components/header/Header';
//******************COMPONENTES DEL JUEGO AKINATOR*********** */
import { Home } from './components/Home/Home';
// import { FormPersonaje } from './components/proyectos/escuela/materias/01_algoritmos/proyectos/akinator/forms/FormPersonaje';
// import FormPersonaje from './Router/escuela/materias/algoritmos/proyectos/akinatorRoutes';
import { FormHobbie } from './components/proyectos/escuela/materias/01_algoritmos/proyectos/akinator/forms/FormHobbie';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Game } from "./components/proyectos/escuela/materias/01_algoritmos/proyectos/akinator/Game";
//******************FIN DE LOS COMPONENTES DEL JUEGO AKINATOR*********** */

/******************COMPONENTES DEL CASOS COVID*********** */
import { ListaPaises } from './components/proyectos/escuela/materias/01_algoritmos/proyectos/covid/ListaPaises';
/******************FIN COMPONENTES CASOS COVID*********** */
/******************COMPONENTES DE LOS EJERCICIOS DE ALGORITMOS*********** */
import { ExerciseSection } from './components/proyectos/escuela/materias/01_algoritmos/ejercicios/ExerciseSection';
import { Conversiones } from './components/proyectos/escuela/materias/01_algoritmos/ejercicios/conversiones/Conversiones';
/******************FIN COMPONENTES DE LOS EJERCICIOS DE ALGORITMOS*********** */


import { Error } from './components/Error/Error';

const btnHome = () => {
  window.location.href = "/"
}
function App() {
  return (
    <>
    <Header btnHome={btnHome}/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* RUTAS AKINATOR */}
          
          <Route path='proyectos-uaq/materia/algoritmos/akinator/jugar' element={<Game btnHome={btnHome} />} />
          {/* <Route path='proyectos-uaq/materia/algoritmos/akinator/crear-nuevo-personaje' element={<FormPersonaje btnHome={btnHome} />} /> */}
          <Route path='proyectos-uaq/materia/algoritmos/akinator/crear-hobbie' element={<FormHobbie />} />
          {/*RUTAS CASOS COVID  */}
          <Route path='proyectos-uaq/materia/algoritmos/covid/casos-covid' element={<ListaPaises />} />
          {/* RUTAS PARA EJERCICIOS ALGORITMOS */}
          <Route path='proyectos-uaq/materia/algoritmos/ejercicios' element={<ExerciseSection/>}/>
          <Route path='proyectos-uaq/materia/algoritmos/ejercicios/conversiones' element={<Conversiones/>}/>
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
