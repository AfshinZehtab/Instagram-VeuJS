<template>
	<dir id="user-info">
		<div class="row user-info__top">
			<div class="col">
				<img :src="getUserInfos.img">
			</div>
			<div class="row col profile-info">
				<dir>
					<h4 class="fullname">{{getUserInfos.fullname}}</h4>
					<p class="bio">{{getUserInfos.bio}}</p>
				</dir>
				<div class="profile-info__bottom">
					<ul>
						<li class="followers">{{getUserInfos.followers}}</li>
						<li class="following">{{getUserInfos.following}}</li>
						<li class="posts">{{getUserInfos.posts}}</li>
					</ul>
				</div>
			</div>
		</div>

		<div id="posts">
			<ul class="">
				<li class="row" v-for="post in posts.postsInfos">
					<img class="col" :src="post.node.display_url">
				</li>
			</ul>
		</div>
	</dir>
</template>

<script>

export default {

  name: 'posts',


	computed: {
		getUserInfos() {
			if (this.$store.state.getUserInfos.fullname == null) {
				this.$router.push('/login')
			} else {
				return this.$store.state.getUserInfos;
			}
		},

		posts() {
			return this.$store.state.posts;
		}
	}
}
</script>

<style lang="css" scoped>

	#user-info {
		margin: 0 auto;
		padding: 0;
	}

	.user-info__top img {
		border-radius: 50%;
		box-shadow: 0px 0px 15px #000;
		width: 30%;
	}

	.profile-info__bottom {
		margin: 0 auto;
	}
	
	.profile-info ul li {
		display: inline-block;
		text-decoration: none;
	    margin: 0 30px;
	}

	#posts {
	    margin-top: 100px;
	}

	#posts ul li {
		display: inline;
	}

	#posts ul li img {
		width: 25%;
		height: auto;
		margin: 5px;
	}

</style>