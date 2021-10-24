const App = {
	data(){
		return{
			myHtml: '<h1>Vue 3 App</h1>',
			title: 'I am root'
		}
	}
}

Vue.createApp(App).mount('#app');