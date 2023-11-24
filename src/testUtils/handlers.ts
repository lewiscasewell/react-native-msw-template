import {HttpResponse, http} from 'msw';
import {API_URL} from 'src/Constants';
import currencies from 'mocks/currencies.json';

const handlers = [
  http.get(API_URL, () => {
    return HttpResponse.json(currencies, {status: 200});
  }),
];

export default handlers;
