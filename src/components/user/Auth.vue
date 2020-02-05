<template>
	<div id="auth">
		<div class="container">
			<div class="row">
				<div class="auth-header col-12">
					<h1>Welcome to Instagram Vue JS</h1>
				</div>
				<transition name="fade">
					<router-view/>
				</transition>		
			</div>
		</div>
	</div>
</template>

<script>

export default {

  name: 'auth',

}

</script>

<style lang="css" scoped>

	/*#auth {
		background: linear-gradient(to bottom right, #86ffc4, #a269ff);
	}*/

	.container {
		height: auto;
	}

	.auth-header {
		margin: 3rem auto;
	}
</style>