const App = {
	data() {
		return {
			placeholder: "Add new note",
			title: "List",
			inputValue: '',
			notes: []
		}
	},
	methods: {
		addToNotes(){
			if(this.inputValue === '') return;
			this.notes.push(this.inputValue);
			this.inputValue = '';
		},
		removeNote(index){
			this.notes.splice(index, 1);
		}
	},
	computed: {
		doubleCount(){
			return this.notes.length * 2;
		}
	},
	watch: {
		inputValue(value){
			if(value.length > 49){
				this.inputValue = '';
			}
		}
	}
}

Vue.createApp(App).mount('#app');