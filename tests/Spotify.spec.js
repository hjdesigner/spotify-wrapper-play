import { expect } from 'chai';
import spotify from '../src/Spotify';

describe('Spotify.spec.js', () => {
  it('should be a object', () => {
    expect(spotify).to.be.a('object');
  });
  it('should have search methods', () => {
    expect(spotify.search).to.exist;
  });
  it('should have album methods', () => {
    expect(spotify.album).to.exist;
  });
});