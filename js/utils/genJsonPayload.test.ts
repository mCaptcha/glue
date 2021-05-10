import genJsonPayload from './genJsonPayload';

'use strict';

const payload = {
  username: 'Jhon',
};

const value = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(payload),
};

it('getFromUrl workds', () => {
  expect(genJsonPayload(payload)).toEqual(value);
});
