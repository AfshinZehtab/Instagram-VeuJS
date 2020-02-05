import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'


Vue.use(Vuex)


export const store = new Vuex.Store({

	state: {

		getUserInfos: [],
		posts: [],
		alerts: []

	},
	mutations: {
		user(state, username) {
			var url = "https://www.instagram.com/" + username + "/?__a=1";

			axios.get(url)

				.then(function (res) {
					router.push('/posts');
					
					// Profile Infos
					state.getUserInfos = { ...state.getUserInfos, fullname: res.data.graphql.user.full_name };
					state.getUserInfos = { ...state.getUserInfos, bio: res.data.graphql.user.biography };
					state.getUserInfos = { ...state.getUserInfos, img: res.data.graphql.user.profile_pic_url_hd };
					state.getUserInfos = { ...state.getUserInfos, followers: res.data.graphql.user.edge_followed_by.count };
					state.getUserInfos = { ...state.getUserInfos, following: res.data.graphql.user.edge_follow.count };
					state.getUserInfos = { ...state.getUserInfos, posts: res.data.graphql.user.edge_owner_to_timeline_media.count };

					// Posts Infos
					state.posts = { ...state.posts, postsInfos: res.data.graphql.user.edge_owner_to_timeline_media.edges };

				})
				.catch(function (res) {
					state.alerts = { ...state.alerts, error: 'This username not found!' };
					if (res.status == 422)
						res.body.errors.forEach(function(e) {
						alert(e);
					});
				})
		}
	}
    
});
