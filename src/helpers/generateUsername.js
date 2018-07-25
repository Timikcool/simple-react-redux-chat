export default function generateUsername() {
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'https://api.codetunnel.net/random-nick', false);
	console.log('// mb should be async but sync used cuz of Redux Store');
	xhr.send(`{"theme":"wreckit"}`);
	if (xhr.status !== 200) {
		let animals = ['Собака', 'Кошка', 'Лошадь', 'Курица', 'Акула', 'Змея', 'Свинья', 'Лев', 'Индейка', 'Волк', 'Паук', 'Кролик', 'Утка', 'Петух', 'Боров', 'Карп', 'Тигр', 'Панда', 'Пантера'];
		return (animals[Math.floor(Math.random() * animals.length)]);
	} else {
		return (JSON.parse(xhr.responseText).nickname); 
	}
}