import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "../components/ui";

function CourseAccessPage() {
  const { taskId } = useParams();
  const [topics, setTopics] = useState([]);
  const [newTopicTitle, setNewTopicTitle] = useState('');
  const [newTopicContent, setNewTopicContent] = useState('');
  const [courseCompleted, setCourseCompleted] = useState(false); // Estado para controlar si el curso fue completado
  const [showAddTopicForm, setShowAddTopicForm] = useState(false); // Controlar la visualización del formulario para añadir temas

  const handleAddTopic = () => {
    const newTopic = { title: newTopicTitle, content: newTopicContent };
    setTopics([...topics, newTopic]);
    setNewTopicTitle(''); // Limpiar el campo de título
    setNewTopicContent(''); // Limpiar el campo de contenido
    setShowAddTopicForm(false); // Ocultar el formulario después de añadir un tema
  };

  const markCourseAsCompleted = () => {
    setCourseCompleted(true); // Marcar el curso como completado
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Añade Temas a tu Curso</h1>
      <p>La información se mostrará aquí debajo</p>
      <Button onClick={markCourseAsCompleted}>Marcar tarea como hecha</Button>
      {courseCompleted && <p>Curso completado satisfactoriamente</p>}
      <Button onClick={() => setShowAddTopicForm(true)}>Agregar nuevo tema</Button>
      {showAddTopicForm && (
        <div className="mt-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Título del tema</label>
            <input
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm text-black"
              type="text"
              value={newTopicTitle}
              onChange={(e) => setNewTopicTitle(e.target.value)}
              placeholder="Introduce el título del tema"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Contenido del tema</label>
            <textarea
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm text-black"
              value={newTopicContent}
              onChange={(e) => setNewTopicContent(e.target.value)}
              placeholder="Introduce el contenido del tema"
            ></textarea>
          </div>
          <Button onClick={handleAddTopic}>Guardar tema</Button>
        </div>
      )}
      <Link to="/tasks">Volver</Link>
    </div>
  );
}

export default CourseAccessPage;
