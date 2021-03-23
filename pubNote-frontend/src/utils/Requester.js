import axios from 'axios';
// import nock from 'nock';

export default {
	loadBannerList: function () {
		axios.get('./api/event/bannerList')
			.then({} => {

		})
	}
}