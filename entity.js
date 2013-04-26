

EntityClass = Class.extend({
		'pos': {x:0, y:0},
		'size': {x:0, y:0},
		update: function () {
		}
});

PersonClass = EntityClass.extend({
});

main.factory['Person'] = PersonClass;
