Feature: Crear y editar tareas en la aplicación

  Scenario: Crear una nueva tarea
    Given estoy en la página para crear una nueva tarea
    When ingreso el título de la tarea, la descripción, la fecha y los temas
    And hago clic en el botón "Guardar"
    Then debería ser redirigido a la lista de tareas
    And debería ver la nueva tarea en la lista

  Scenario: Editar una tarea existente
    Given estoy en la página para editar una tarea existente
    When modifico el título de la tarea, la descripción, la fecha o los temas
    And hago clic en el botón "Guardar"
    Then debería ser redirigido a la lista de tareas
    And debería ver los cambios reflejados en la tarea editada

  Scenario: Intentar crear una tarea con temas duplicados
    Given estoy en la página para crear una nueva tarea
    When ingreso el título de la tarea, la descripción, la fecha y temas duplicados
    And hago clic en el botón "Guardar"
    Then debería ver un mensaje de error indicando temas duplicados
    And no debería ser redirigido a la lista de tareas
