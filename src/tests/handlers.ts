import {HttpResponse, http} from 'msw';
import {API_URL} from '../Constants';
import currencies from '../../__mocks__/currencies.json';
const handlers = [
  http.get(API_URL, () => {
    return HttpResponse.json(currencies, {status: 200});
  }),
];

export default handlers;
