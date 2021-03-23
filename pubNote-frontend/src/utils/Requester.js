import axios from 'axios';
// import nock from 'nock';

async function loadBannerList() {
	try {
		return await axios.get('./api/event/bannerList');
	} catch (error) {
		console.log("Cannot Load bannerList")
	}
}

export default {
	loadBannerList: loadBannerList,
}