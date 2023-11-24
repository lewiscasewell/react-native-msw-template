import {server} from './src/tests/setupTestServer';

beforeEach(() => server.listen({onUnhandledRequest: 'error'}));
afterEach(() => {
  jest.clearAllMocks();
  jest.clearAllTimers();
  server.resetHandlers();
});
afterAll(() => {
  server.close();
});
