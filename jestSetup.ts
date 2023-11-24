import {server} from 'src/testUtils/setupTestServer';

beforeEach(() => server.listen({onUnhandledRequest: 'error'}));
afterEach(() => {
  jest.clearAllMocks();
  jest.clearAllTimers();
  server.resetHandlers();
});
afterAll(() => {
  server.close();
});
