export default function scrollControl(){

	let messagesDiv = document.querySelector('.dummyForScroll');
	messagesDiv ? messagesDiv.scrollIntoView({ behavior: "smooth" }) : console.log('nope');
	return
}