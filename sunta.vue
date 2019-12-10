Vue.component('todo-item', {
  props: ['data'],
  template: 'corp-table'
})
var app = new Vue({
  	el: '#app',	
	 data: {
     	data: [], id:'',info:[],
		year : new Date().getFullYear(),
		month: new Date().getUTCMonth() +1 , 
		day : new Date().getDate(),
		 options : [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020]
  		},
	 mounted: function () {
		console.log(this.day)
		 axios.get('http://archive.sunta-sudan.org/api/'+this.id+'/'+this.year+'/'+this.month+'/'+this.day)
		 .then(res=> (this.data = res.data.data))
		} ,
	methods : {
		showDtat(){
			axios.get('http://archive.sunta-sudan.org/api/'+this.id+'/'+this.year+'/'+this.month)
		 .then(res=> (this.info = res.data.data))

		}
	}
  })