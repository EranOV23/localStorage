$("#submit").click( () => {
	event.preventDefault();
	checkOnLocal();
});


let checkOnLocal = () => {
	
	let $name = $("#name").val();
	
	if(localStorage.getItem($name)===null){
		console.log("get Data from form")
		saveOnLocal();
		createUserPage();
	} else {
		console.log("get Data from Local Storage")
		renderUserPage(localStorage.getItem($name))
	}
}

let saveOnLocal = () => {
	let key = $("#name").val();
	let stringKey = `
		<div class="Details">	
			<h3>${$("#name").val()}</h3>
			<ul>
				<li>URL: ${$("#url").val()}</li>
				<li>Rate: ${$("#rate").val()}</li>
			</ul>
		</div>
	`
	localStorage.setItem(key, stringKey);
}


let createUserPage = () => { 
	let $userDetails = $(`
		<div class="Details">	
			<h3>${$("#name").val()}</h3>
			<ul>
				<li>URL: ${$("#url").val()}</li>
				<li>Rate: ${$("#rate").val()}</li>
			</ul>
		</div>
	`)

	renderUserPage($userDetails);
}


let renderUserPage = (userDetails) => {
	$(".Details").remove();
	$("#userPage").append(userDetails);
}
