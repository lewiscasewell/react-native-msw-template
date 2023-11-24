import {setupServer} from 'msw/node';
import handlers from 'src/testUtils/handlers';

export const server = setupServer(...handlers);
