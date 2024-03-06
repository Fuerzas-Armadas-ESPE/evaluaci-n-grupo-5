import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage', // Directorio donde se generará el reporte de cobertura
  collectCoverageFrom: ['src/**/*.ts'], // Archivos que Jest incluirá en el reporte de cobertura
  moduleFileExtensions: ['ts', 'js', 'json', 'node'], // Extensiones de archivo que Jest reconocerá
  testMatch: [
    "**/*.spec.ts"
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  }
};

export default config;
