import {server} from './src/tests/setupTestServer';

beforeEach(() => server.listen({onUnhandledRequest: 'error'}));
afterEach(() => {
  server.resetHandlers();
  jest.clearAllMocks();
  jest.clearAllTimers();
});
afterAll(() => {
  server.close();
});
