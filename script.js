const inputVal = document.getElementsByClassName('inputVal')[0];
const addTaskBtn = document.getElementsByClassName('btn')[0];
const form = document.querySelector('.form');
const clearTasksBtn = document.querySelector('.clearTasks');

form.addEventListener('submit', () => {
	if (inputVal.value.trim() != 0) {
		let localItems = JSON.parse(localStorage.getItem('localItem'));

		//check for items in localStorage
		if (localItems === null) {
			taskList = [];
		} else {
			taskList = localItems;
		}

		// push input value to taskList array
		taskList.push(inputVal.value);

		// set taskList array in localStorage
		localStorage.setItem('localItem', JSON.stringify(taskList));
	}

	showItem();
});

function showItem() {
	let localItems = JSON.parse(localStorage.getItem('localItem'));

	// check for localItem array in localStorage
	if (localItems === null) {
		taskList = [];
	} else {
		taskList = localItems;
	}

	let html = '';
	let itemShow = document.querySelector('.todoList');

	taskList.forEach((data, index) => {
		html += `
			<div class="todoList-item mb-2">
				<p class="pText font-lg">${data}</p>
				<button onClick="deleteItem(${index})" class="deleteTask">x</button>
			</div>
		`;
	});

	itemShow.innerHTML = html;
}

showItem();

function deleteItem(index) {
	let localItems = JSON.parse(localStorage.getItem('localItem'));

	console.log('deleete');
	// get part of the taskList array starting with the index and deleting 1 item
	taskList.splice(index, 1);

	// set taskList in localStorage as 'localItem'
	localStorage.setItem('localItem', JSON.stringify(taskList));

	showItem();
}

// clear localStorage
clearTasksBtn.addEventListener('click', () => {
	localStorage.clear();

	showItem();
});
