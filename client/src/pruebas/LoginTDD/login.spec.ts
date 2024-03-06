import { defineFeature, loadFeature } from 'jest-cucumber';
import axios from 'axios';

// Cargamos la característica desde el archivo .feature
const feature = loadFeature('C:\\Users\\richa\\OneDrive\\Escritorio\\3Parcial\\Web\\mern-crud-auth\\client\\src\\pruebas\\LoginTDD\\login.feature');

// Mock de axios para simular las solicitudes HTTP
jest.mock('axios');

defineFeature(feature, (test) => {
  let responseStatus: number;
  let errorMessage: string;

  test('Iniciar sesión con credenciales válidas', ({ given, when, and, then }) => {
    given('estoy en la página de inicio de sesión', () => {
      // Aquí puedes inicializar el entorno de prueba si es necesario
    });

    when('ingreso un nombre de usuario válido y una contraseña válida', () => {
      // Aquí asumimos que se ingresan credenciales válidas en este paso
    });

    and('hago clic en el botón "Iniciar Sesión"', async () => {
      const credentials = {
        username: 'testuser',
        password: 'password123',
      };

      // Simulamos la respuesta del servidor para la solicitud POST
      (axios.post as jest.MockedFunction<typeof axios.post>).mockResolvedValueOnce({ status: 200 });

      // Realizamos la solicitud POST para el login
      const response = await axios.post('/auth/login', credentials);
      responseStatus = response.status;
    });

    then('debería ser redirigido a la página principal', () => {
      expect(responseStatus).toEqual(200);
    });
  });

  test('Iniciar sesión con credenciales inválidas', ({ given, when, and, then }) => {
    given('estoy en la página de inicio de sesión', () => {
      // Aquí puedes inicializar el entorno de prueba si es necesario
    });

    when('ingreso un nombre de usuario inválido o una contraseña inválida', () => {
      // Aquí asumimos que se ingresan credenciales inválidas en este paso
    });

    and('hago clic en el botón "Iniciar Sesión"', async () => {
      const invalidCredentials = {
        username: 'invaliduser',
        password: 'invalidpassword',
      };

      // Simulamos la respuesta del servidor para la solicitud POST con un error
      (axios.post as jest.MockedFunction<typeof axios.post>).mockRejectedValueOnce({ response: { data: 'Credenciales inválidas' } });

      try {
        // Realizamos la solicitud POST para el login con credenciales inválidas
        await axios.post('/auth/login', invalidCredentials);
      } catch (error: any) {
        errorMessage = error.response.data;
      }
    });

    then('debería ver un mensaje de error', () => {
      expect(errorMessage).toEqual('Credenciales inválidas');
    });

    then('no debería ser redirigido a la página principal', () => {
      // Puedes agregar expectaciones adicionales aquí si es necesario
    });
  });
});
