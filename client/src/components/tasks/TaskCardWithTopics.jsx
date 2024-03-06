import React from "react";
import { useTasks } from "../../context/tasksContext";
import { Button, Card } from "../ui";
import { Link } from "react-router-dom"; // Asumiendo que estás usando react-router para la navegación

export function TaskCardWithTopics({ task }) {
  const { deleteTask } = useTasks();

  const handleDelete = () => {
    deleteTask(task._id);
  };

  return (
    <div>
      <header className="flex justify-between">
      </header>
      <Card>
        <h1 className="text-2xl font-bold">{task.title}</h1>

        <p className="text-slate-300">{task.description}</p>
        {/* format date */}
        <p>
          {task.date &&
            new Date(task.date).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
        </p>
        {/* Display topics */}
        <div className="flex flex-wrap mt-2">
          {task.topics && task.topics.length > 0 &&
            task.topics.map((topic, index) => (
              <span
                key={index}
                className="bg-gray-200 rounded-full px-2 py-1 text-sm text-gray-700 mr-2 mb-2"
              >
                {topic}
              </span>
            ))
          }
        </div>
        <div>
          <Button onClick={handleDelete}>Eliminar</Button>
          {/* Cambio el ButtonLink por Link de react-router-dom con un estilo de botón */}
          <Link to={`/courses/${task._id}`} className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Acceder al curso</Link>
        </div>
      </Card>
      
    </div>
  );
}
