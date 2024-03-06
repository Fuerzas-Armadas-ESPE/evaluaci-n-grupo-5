Feature: Registro en la aplicación

  Scenario: Registro exitoso con datos válidos
    Given estoy en la página de registro
    When ingreso un nombre de usuario válido, una dirección de correo electrónico válida, una contraseña válida y confirmo la contraseña
    And hago clic en el botón "Submit"
    Then debería ser redirigido a la página principal

  Scenario: Registro fallido con datos inválidos
    Given estoy en la página de registro
    When ingreso un nombre de usuario inválido, una dirección de correo electrónico inválida, una contraseña inválida o no confirmo la contraseña
    And hago clic en el botón "Submit"
    Then debería ver un mensaje de error
    And no debería ser redirigido a la página principal
