import { defineFeature, loadFeature } from 'jest-cucumber';
import axios from 'axios';

// Cargamos la característica desde el archivo .feature
const feature = loadFeature('C:\\Users\\richa\\OneDrive\\Escritorio\\3Parcial\\Web\\mern-crud-auth\\client\\src\\pruebas\\RegisterTDD\\register.feature');

// Mock de axios para simular las solicitudes HTTP
jest.mock('axios');

defineFeature(feature, (test) => {
  let responseStatus: number;
  let errorMessage: string;

  test('Registro exitoso con datos válidos', ({ given, when, and, then }) => {
    given('estoy en la página de registro', () => {
      // No es necesario realizar acciones adicionales aquí, ya que estamos en la página de registro
    });

    when('ingreso un nombre de usuario válido, una dirección de correo electrónico válida, una contraseña válida y confirmo la contraseña', () => {
      // Simular entrada de datos válidos
    });

    and('hago clic en el botón "Submit"', async () => {
      const validData = {
        username: 'testuser',
        email: 'test@example.com',
        password: 'password123',
        confirmPassword: 'password123',
      };

      // Simular respuesta del servidor para la solicitud POST
      (axios.post as jest.MockedFunction<typeof axios.post>).mockResolvedValueOnce({ status: 200 });

      // Realizar la solicitud POST para el registro
      const response = await axios.post('/auth/register', validData);
      responseStatus = response.status;
    });

    then('debería ser redirigido a la página principal', () => {
      expect(responseStatus).toEqual(200);
    });
  });

  test('Registro fallido con datos inválidos', ({ given, when, and, then }) => {
    given('estoy en la página de registro', () => {
      // No es necesario realizar acciones adicionales aquí, ya que estamos en la página de registro
    });

    when('ingreso un nombre de usuario inválido, una dirección de correo electrónico inválida, una contraseña inválida o no confirmo la contraseña', () => {
      // Simular entrada de datos inválidos
    });

    and('hago clic en el botón "Submit"', async () => {
      const invalidData = {
        username: '',
        email: 'invalid-email',
        password: 'pass',
        confirmPassword: 'differentPassword',
      };

      // Simular respuesta del servidor para la solicitud POST con un error
      (axios.post as jest.MockedFunction<typeof axios.post>).mockRejectedValueOnce({ response: { data: 'Datos de registro inválidos' } });

      try {
        // Realizar la solicitud POST para el registro con datos inválidos
        await axios.post('/auth/register', invalidData);
      } catch (error: any) {
        errorMessage = error.response.data;
      }
    });

    then('debería ver un mensaje de error', () => {
      expect(errorMessage).toEqual('Datos de registro inválidos');
    });

    then('no debería ser redirigido a la página principal', () => {
      // Puedes agregar expectativas adicionales aquí si es necesario
    });
  });
});
