import { nonce } from './nonce';

describe('nonce', () => {
  it('should work', () => {
    expect(nonce().isOk()).toEqual(true);
    expect(nonce().unwrap().length).toEqual(12);
  });
});
