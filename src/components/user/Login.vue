<template class="row">
	<div id="user" class="col-4 offset-4">
		<h2>Search an Account</h2>
		<div class="form-group">
			<input type="text" class="form-control" placeholder="Enter your username" v-model="username">
		</div>
		<div class="form-group">
			<!-- <input type="password" name="password" class="form-control" placeholder="Enter password"  > -->
			<span class="error">{{alerts.error}}</span>
		</div>
		<button class="btn btn-primary" @click="login">Search</button>

	</div>
</template>

<script>

export default {

  name: 'login',

	data: function() {
		return {
			username: ''
		}
	},
	methods: {
		login: function() {
			this.$store.commit('user', this.username)
		}
	},
	computed: {
		alerts() {
			return this.$store.state.alerts;
		}
	}
}
</script>

<style lang="css" scoped>
	
	#user {
	    height: -webkit-fill-available;
        margin-top: 30%;
	}

	.error {
		color: red;
		font-weight: 700;
		position: absolute;
	    top: -50px;
	    left: 26%;
	}
</style>