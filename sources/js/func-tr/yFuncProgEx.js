var users = [
	{type: 'admin', name: 'Ivan Ivanov'},
	{type: 'admin', name: 'Irina Sokolova'},
	{type: 'user', name: 'Tatiana Petrenko'},
	{type: 'moderator', name: 'Vasyl Vasylenko'},
	{type: 'user', name: 'Petya Pirov'},
	{type: 'user', name: 'Boris Ignatiev'}
];

//Filter
// let isAdmin = user => user.type == 'admin';
// let admins = users.filter(isAdmin);
// console.log(admins);


//MAP
// var userNames = users.map(user => `User ${user.name} is ${user.type}`)
// console.log(userNames)


//Filter + Map
// var adminsName = users
// 	.filter(isAdmin)
// 	.map(user => user.name);
// console.log(adminsName)



//++++++++++++++++++++++++++++++
//REDUCE SIMPLE
var orders = [
	{id: 1, amount: 200},
	{id: 2, amount: 100},
	{id: 3, amount: 250},
	{id: 4, amount: 90}
];

// var totalAmount = orders.reduce((total, order) => total + order.amount, 0);
//
// console.log(totalAmount)

//REDUCE ARRAY of ARRAYs
var arrayOfArrays = [[0, 1, 2], [1, 3], [4, 0]];

// var resultArray = arrayOfArrays.reduce((result, subArr) => result.concat(subArr), []);
// console.log(resultArray);


//REDUCE!!
// var userTypeCounts = users.reduce((counts, user) => {
// 	counts[user.type] = (counts[user.type] || 0) + 1;
// 	return counts;
// }, {});
// console.log(userTypeCounts);



//=========================================
//Иммутабельные данные - Нужно избаляться от ссылок на объекты
// var arr = [1,2,3];
// console.log(arr);
// var arr2 = [...arr, 5];
// console.log(arr2);



//==========================================
//KАРРИНГ
// function sum(...args){
// 	return args.reduce((result, item) => result + item, 0)
// }
//
// const partialSum = sum.bind(null, 1,2,3);
// console.log(partialSum(5,6,7))



// var add = a => b => a + b;
// console.log(add(1)(2));


//Карринг исп для разбиения на стадии
// var add = a => b => c => a + b + c;
// var add2 = add(2);
// var add2and4 = add2(4);

// console.log(add2and4(4));
// console.log(add2and4(3));
// console.log(add2and4(7));




//=======================================
//Применение рекурсии в структуре каталогов
var commentsTree = [
	{
		id: 1,
		text: 'Recursion is fun!',
		comments: [
			{
				id: 2,
				text: 'Yes, indeed!',
				comments: [
					{
						id: 3,
						text: 'Yaaazzz!',
						comments: [
							{
								id: 11,
								text: 'Hui',
							},
							{
								id: 13,
								text: 'Shopa'
							}
						]
					}
				]
			},
			{
				id: 9,
				text: 'True'
			}
		]
	},
	{
		id: 4,
		text: 'Function programming is cool!',
		comments: [
			{
				id: 5,
				text:'Yep'
			}
		]
	}
];

var countComments = comments => {
	return comments.reduce(
		(count, comment) => (
			comment.comments
			? count + 1 + countComments(comment.comments)
			: count + 1
		),
		0
	)
}

// console.log(countComments(commentsTree));
