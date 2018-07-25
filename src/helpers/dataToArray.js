export default function dataToArray(obj){
	let array = [];
	for(const key in obj){
		let message = {key:key, text:obj[key].text, author:obj[key].author}
		array.push(message);
	}
	return array;
}
