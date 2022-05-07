<template>
	<div class="login">
		<form>
			<input v-model="pseudo" type="text" class="text"/>
			<span class="text-primary">Pseudo</span>
			
			<br />

			<br />

			<input v-model="email" type="text" class="text"/>
			<span  class="text-primary">Email</span>

			<br />

			<br />

			<input v-model="password" type="password" class="text"/>
			<span  class="text-primary">password</span>
			<br />

			<br />

			<input v-model="confirmPassword" type="password" class="text"/>
			<span  class="text-primary">Confirm password</span>
			<p class="text-danger">{{mdpError}}</p>
			<p class="text-danger">{{emailOrPseudoError}}</p>
			<p class="text-danger">{{errorChamp}}</p>
			<button @click="enregistrer" class="signin">register</button>
			<button @click="connecter" class="signin">Sign In</button>
		</form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				pseudo: "",
				email: "",
				password: "",
				confirmPassword: "",
				mdpError : "",
				errorChamp: "",
				emailOrPseudoError: ""

			}
		},
		methods: {
			connecter() {
				window.location.href = "/?#/login"
			},
			enregistrer() {
				const pseudo = this.pseudo;
				const email = this.email;
				const mdp = this.password;
				const confirmMdp = this.confirmPassword;
				if(mdp == confirmMdp && email) {
					this.mdpError = "";
					const objetRegister = {pseudo, email, mdp}
					fetch("http://localhost:3000/register", {
						method: "POST",
						headers: {
							"Accept": "application/json",
							"Content-type" : "application/json"
						},
						body: JSON.stringify(objetRegister)
					})
					.then(res => res.json())
					.then((data) => {
						console.log(data)
						if(data.message) {
							window.location.href = "/#/"
						}
						else {
							this.emailOrPseudoError = data.error
						}
					})
				}
				else if(email == "" || pseudo == "" || mdp == "" || confirmMdp == "") {
					this.errorChamp = "Champs manquants"
				}
				else if(mdp != confirmMdp) {
					this.mdpError = "Les mots de passes ne correspondent pas"
				}
			}
		}
	}
</script>

<style scoped>

.login {
	width: 1300px;
	height: 1000px;
	margin: auto;
	padding: 60px 60px;
	background: url(https://picsum.photos/id/1004/5616/3744) no-repeat center center #505050;
	background-size: cover;
	box-shadow: 0px 30px 60px -5px #000;
}

form {
	padding-top: 200px;
}

.active {
	border-bottom: 2px solid #1161ed;
}

.nonactive {
	color: rgba(255, 255, 255, 0.2);
}

h2 {
	padding-left: 12px;
	font-size: 22px;
	text-transform: uppercase;
	padding-bottom: 5px;
	letter-spacing: 2px;
	display: inline-block;
	font-weight: 100;
}

h2:first-child {
	padding-left: 0px;
}

span {
	text-transform: uppercase;
	font-size: 12px;
	opacity: 0.4;
	display: inline-block;
	position: relative;
	top: -65px;
	transition: all 0.5s ease-in-out;
}

.text {
	border: none;
	width: 50%;
	padding: 10px 20px;
	display: block;
	height: 30px;
	border-radius: 20px;
	background: rgba(255, 255, 255, 0.1);
	border: 2px solid rgba(255, 255, 255, 0);
	overflow: hidden;
	margin: auto;
	transition: all 0.5s ease-in-out;
}

.text:focus {
	outline: 0;
	border: 2px solid rgba(255, 255, 255, 0.5);
	border-radius: 20px;
	background: rgba(0, 0, 0, 0);
}

.text:focus+span {
	opacity: 0.6;
}

input[type="text"],
input[type="password"] {
	font-family: 'Montserrat', sans-serif;
	color: #fff;
}



input {
	display: inline-block;
	padding-top: 20px;
	font-size: 14px;
}

h2,
span,
.custom-checkbox {
	margin-left: 20px;
}

.custom-checkbox {
	-webkit-appearance: none;
	background-color: rgba(255, 255, 255, 0.1);
	padding: 8px;
	border-radius: 2px;
	display: inline-block;
	position: relative;
	top: 6px;
}

.custom-checkbox:checked {
	background-color: rgba(17, 97, 237, 1);
}

.custom-checkbox:checked:after {
	content: '\2714';
	font-size: 10px;
	position: absolute;
	top: 1px;
	left: 4px;
	color: #fff;
}

.custom-checkbox:focus {
	outline: none;
}

label {
	display: inline-block;
	padding-top: 10px;
	padding-left: 5px;
}

.signin {
	background-color: #1161ed;
	color: #FFF;
	width: 50%;
	margin: auto;
	padding: 10px 20px;
	display: block;
	height: 39px;
	border-radius: 20px;
	margin-top: 30px;
	transition: all 0.5s ease-in-out;
	border: none;
	text-transform: uppercase;
}

.signin:hover {
	background: #4082f5;
	box-shadow: 0px 4px 35px -5px #4082f5;
	cursor: pointer;
}

.signin:focus {
	outline: none;
}

hr {
	border: 1px solid rgba(255, 255, 255, 0.1);
	top: 85px;
	position: relative;
}

a {
	text-align: center;
	display: block;
	top: 120px;
	position: relative;
	text-decoration: none;
	color: rgba(255, 255, 255, 0.2);
}
</style>
