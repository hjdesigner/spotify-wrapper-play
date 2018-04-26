import spotify from './Spotify';
import renderAlbums from './AlbumList';


const searchInput = document.getElementById('search-input');
const searchForm = document.getElementById('seach-form');
const albumList = document.getElementById('album-list');

export default function searchEnterTrigger() {
	searchForm.addEventListner('submit', (e) => {
		e.preventDefault();
		spotify.search.albums(searchInput.value)
			.then(data => renderAlbums(data.albums.items, albumList)); 
	});
};
