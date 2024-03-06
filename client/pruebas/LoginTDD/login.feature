Feature: Iniciar sesión en la aplicación

  Scenario: Iniciar sesión con credenciales válidas
    Given estoy en la página de inicio de sesión
    When ingreso un nombre de usuario válido y una contraseña válida
    And hago clic en el botón "Iniciar Sesión"
    Then debería ser redirigido a la página principal

  Scenario: Iniciar sesión con credenciales inválidas
    Given estoy en la página de inicio de sesión
    When ingreso un nombre de usuario inválido o una contraseña inválida
    And hago clic en el botón "Iniciar Sesión"
    Then debería ver un mensaje de error
    And no debería ser redirigido a la página principal
