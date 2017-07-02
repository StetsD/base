var obj = {
	value: 1,
	increment: function () {
		this.value += 1;
		return this;
	},
	add: function (v) {
		this.value += v;
		return this;
	},
	shout: function () {
		alert(this.value);
	}
};

// цепочка из вызовов методов
obj.increment().add(3).shout(); // 5
// то же самое, но методы вызываются по одному
obj.increment();
obj.add(3);
obj.shout(); // 5