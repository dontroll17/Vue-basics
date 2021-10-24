const App = {
	data(){
		return{
			myHtml: '<h1>Vue 3 App</h1>',
			title: 'I am root',
			person: {
				firstName: "first",
				lastName: "last",
				age: 20
			}
		}
	}
}

Vue.createApp(App).mount('#app');