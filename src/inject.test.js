import { strict as assert } from 'assert';

import inject from './inject.js';

export default () => {
  assert.deepEqual(
    inject({
      injection: { _type: {}, id: {} },
      query: {
        _args: { a: 1 },
        _from: 'foo',
        a: {
          id: { _from: 'noOverride' },
          name: {},
          b: {
            id: {}
          }
        }
      }
    }),
    {
      _type: {},
      _args: { a: 1 },
      _from: 'foo',
      id: {},
      a: {
        _type: {},
        id: { _from: 'noOverride' },
        name: { _type: {}, id: {} },
        b: {
          _type: {},
          id: {}
        }
      }
    }
  );
};