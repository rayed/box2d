

var MainClass = Class.extend({


	keyState: {},

	entities: [],
	factory: {}, 

	start: function() {
		console.log('Main Start');
		this.canvas = document.getElementById('my_canvas2');
		this.ctx = this.canvas.getContext('2d');
		this.init_input();
	},

    spawnEntity: function (typename) {
        if (typename in this.factory) {
            var e =  new (this.factory[typename])();
            this.entities.push(e);
			return e;
        } 
    },


	// Inputs
	init_input: function () {
		this.keyState = {};
		this.canvas.addEventListener('mousemove', this.mousemove);
		this.canvas.addEventListener('keydown', this.keydown);
		this.canvas.addEventListener('keyup', this.keyup);
		this.keyState[65] = true;
		this.keyState['65'] = true;
		console.log('X: '+this.keyState[65]);
		console.log('X: '+this.keyState['65']);
	},

	mousemove: function(event) {
		var x = event.offsetX;
		var y = event.offsetY;
		console.log('X: '+x+' '+y);
	},

	keydown: function(event) {
		main.keyState[event.keyCode] = true;
		console.log('KeyCode: '+event.keyCode);
	},

	keyup: function(event) {
		main.keyState[event.keyCode] = false;
	},

});

main = new MainClass();

