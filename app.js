let createApp = () => {

	let $html = $(`
		<main>
			<form>
				<h2>My From</h2>
				<input placeholder=' Name' id='name'>
				<input placeholder=' Url' id='url'>
				<input placeholder=' Rating' id='rate'>
				<button id='submit'>Add</button>
			</form>
			<div id='userPage'>
				<h2>User Details</h2>
			</div>
		</main>
		<div class="clear">
			<button id="clear">Clear Storage</button>
		</div>

	`)

	renderApp($html);
}


let renderApp = (html) => {
	$("body").append(html);
}

createApp();

$("#clear").click( () => {
	event.preventDefault();
	localStorage.clear();
});