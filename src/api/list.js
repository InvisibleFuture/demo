var thread = 'http://xiaoyaozj.com/list'

export default {
	thread(fid) {
		fetch(`http://xiaoyaozj.com/index-1-1.htm?page=${page}&ajax=1`)
		.then(response => response.json())
		.then(data => {
			console.log(data.message)
			if(page==1) this.rblist = []
				if(data.message.length == 0) this.pages = page
					data.message = this.conversion(data.message)
				this.rblist = this.rblist.concat(data.message)
				this.value = 'hotrb'
				this.scrolllock = false
			})
	}
	post(tid) {}
	user(gid) {}
}
