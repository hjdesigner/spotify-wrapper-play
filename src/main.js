import spotify from './Spotify';
import renderAlbumInfo from './AlbumInfo';
import renderAlbumTracks from './AlbumTrack';
import searchEnterTrigger from './searchEnterTrigger';


searchEnterTrigger();

const album = spotify.album.getAlbum('6peEdPVO73WtgGah5sEhX4');
const albumInfo = document.getElementById('album-info');
const albumTracks = document.getElementById('album-tracks');

album
	.then(data => renderAlbumInfo(data, albumInfo))
	.then(data => renderAlbumTracks(data.tracks.items, albumTracks));
