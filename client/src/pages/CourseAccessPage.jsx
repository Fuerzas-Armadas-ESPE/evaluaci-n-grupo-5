import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "../components/ui";

function CourseAccessPage() {
  const { taskId } = useParams();
  const [topics, setTopics] = useState([]);
  const [newTopicTitle, setNewTopicTitle] = useState('');
  const [newTopicContent, setNewTopicContent] = useState('');

  const handleAddTopic = () => {
    const newTopic = { title: newTopicTitle, content: newTopicContent };
    setTopics([...topics, newTopic]);
    // Luego deberías limpiar los campos o manejarlo de otra manera
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Título del Curso</h1>
      <p>Descripción del curso aquí...</p>
      <Button onClick={() => {}}>Marcar tarea como hecha</Button>
      <div>
        <input
          type="text"
          value={newTopicTitle}
          onChange={(e) => setNewTopicTitle(e.target.value)}
          placeholder="Título del tema"
        />
        <textarea
          value={newTopicContent}
          onChange={(e) => setNewTopicContent(e.target.value)}
          placeholder="Contenido del tema"
        ></textarea>
        <Button onClick={handleAddTopic}>Agregar más temas</Button>
      </div>
      <Link to="/donde-quieras-volver">Volver</Link>
    </div>
  );
}

export default CourseAccessPage;
