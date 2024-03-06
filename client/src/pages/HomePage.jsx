import { Link } from "react-router-dom";

function HomePage() {
  return (
  <section className="bg-red-500 flex justify-center items-center">
    <header className="bg-zinc-800 p-10">
      <h1 className="text-5xl py-2 font-bold">Course RJ</h1>
      <p className="text-md text-slate-400">
      <b>Bienvenido al Sistema de Gestión de Cursos para Docentes</b><br></br><br></br>

      En la actualidad, la educación enfrenta constantes desafíos y cambios que requieren de herramientas 
      eficaces para su gestión. Entendiendo esta necesidad, hemos desarrollado una solución pensada específicamente 
      para los docentes: un sistema integral de gestión de cursos que simplifica y enriquece la experiencia educativa, 
      tanto para educadores como para estudiantes, está diseñado para facilitar a los docentes la organización y 
      administración de sus cursos. Con un enfoque centrado en la eficiencia y la simplicidad, este sistema ofrece 
      una gama de características diseñadas para mejorar la gestión del aprendizaje.
      </p>

      <Link
        className="bg-zinc-500 text-white px-4 py-2 rounded-md mt-4 inline-block"
        to="/register"
      >
        Empieza ya!
      </Link>
    </header>
  </section>
  );
}

export default HomePage;
