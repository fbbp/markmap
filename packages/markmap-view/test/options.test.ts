import { expect, test } from 'vitest';
import { deriveOptions } from '../src/util';

test('deriveOptions preserves layout', () => {
  const opts = deriveOptions({ layout: 'radial' });
  expect(opts.layout).toBe('radial');
});
