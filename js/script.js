var conteiner_add = document.querySelector(".add");
var kvests = document.querySelector(".kvests");
var add_name = document.querySelector(".add__name");
var add_ward = document.querySelector(".add__ward");
var add_button = document.querySelector(".add__button");
var remove_button = document.querySelector(".remove__button");
var create_button = document.querySelector(".create__button");
var complete_btn = document.querySelectorAll(".button");
var skill_names = document.querySelectorAll(".list__skill_name");
var selects = document.querySelectorAll(".select__category");
var characters = document.querySelectorAll(".character");
var skills = document.querySelectorAll(".list__skill");
var skills_btn = document.querySelector(".skills__button");
for(let i=0;i < characters.length;i++){
	let opinion = document.createElement("option");
	opinion.innerHTML = characters[i].querySelector(".list__item").innerHTML;
	opinion.value = characters[i].querySelector(".list__item").innerHTML;
	for(let j = 0;j < selects.length;j++){
		selects[j].appendChild(opinion);
	}
}
for(let i=0;i < skill_names.length;i++){
	let opinion = document.createElement("option");
	opinion.innerHTML = skill_names[i].innerHTML;
	opinion.value = skill_names[i].innerHTML;
	for(let j = 0;j < selects.length;j++){
		selects[j].appendChild(opinion);
	}
}
create_button.onclick = function (){
	var kvest = document.querySelectorAll(".task");
	complete_btn = document.querySelectorAll(".button");
	let wards = document.querySelectorAll(".add__ward");
	let task = document.createElement("div");
	let task__name = document.createElement("h3");
	let task__wards = document.createElement("ul");
	let button = document.createElement("button");
	task.className = "task";
	task__name.className = "task__name";
	task__name.innerHTML = add_name.value;
	task__wards.className = "task__wards";
	button.className = "button";
	button.innerHTML = "Завершить"; 
	task.appendChild(task__name);
	task.appendChild(task__wards);
	task.appendChild(button);
	selects = document.querySelectorAll(".select__category");

	for(let i = 0; i < wards.length; i++){
		let ward__name = document.createElement("strong");
		ward__name.className = "select-skill";
		let expa = document.createElement("strong");
		expa.innerHTML = "xp";
		let task__wards_ward = document.createElement("li");
		task__wards_ward.className = "task__wards_ward";
		let count__ward = document.createElement("span");
		count__ward.className = "expa";
		ward__name.innerHTML = selects[i].value+ " : ";
		count__ward.innerHTML = wards[i].value;
		task__wards_ward.appendChild(ward__name);
		task__wards.appendChild(task__wards_ward);
		task__wards_ward.appendChild(count__ward);
		task__wards_ward.appendChild(expa);
	}
	kvests.appendChild(task);
	complete_btn = document.querySelectorAll(".button");

	for(let i = 0;i < complete_btn.length;i++){
		complete_btn[i].onclick = function (e) {
			let target = e.target;
			let skill_name = target.parentNode.querySelectorAll(".select-skill");
			let skill_expa = target.parentNode.querySelectorAll(".expa");
			for(let j = 0;j < skill_name.length;j++){
				let word = skill_name[j].innerHTML
				word = word.substring(0, word.length - 3);
				for(let d = 0; d < characters.length;d++){
					let character = characters[d].querySelector(".list__item");
					if (character.innerHTML == word ) {
						let count = characters[d].querySelector(".list__item_count");
						let new__inner = parseInt(count.innerHTML)+ parseInt(skill_expa[j].innerHTML);
						count.innerHTML = new__inner;
					}
				}
				skills = document.querySelectorAll(".list__skill");
				for(let d = 0; d < skills.length;d++){
					let skill = skills[d].querySelector(".list__skill_name");
					if (skill.innerHTML == word ) {
						let count = skills[d].querySelector(".current_expa");
						let fill = skills[d].querySelector(".fill");
						let new__inner = parseInt(count.innerHTML)+ parseInt(skill_expa[j].innerHTML);
						count.innerHTML = new__inner;
						let need_expa = skills[d].querySelector(".need_expa");
						for(let i = 0; i < 10;i++){
							let number_count = parseInt(count.innerHTML);
							let number_need_expa = parseInt(need_expa.innerHTML);
								if(number_count >= number_need_expa){
									let level = skills[d].querySelector(".skill-level");
									let new__level = parseInt(level.innerHTML)+1;
									level.innerHTML = new__level;
								 	count.innerHTML -= need_expa.innerHTML;
								 	need_expa.innerHTML *= 2;
							}
						}
						let del = parseFloat(need_expa.innerHTML)/100;
						let add = parseFloat(count.innerHTML) / del ;
						fill.style.width = add + "%"; 
					}
				}
			}
			target.parentNode.remove();
		}
	}
}
add_button.onclick = function (){
	let add__form = document.querySelector(".add__form");
	clone = add__form.cloneNode(true);
	conteiner_add.insertBefore(clone,add_button);
}
remove_button.onclick = function (){
	let wards = document.querySelectorAll(".add__form");
	let count = wards.length-1;
	if(count > 0){
		wards[count].remove();
	}

}
skills_btn.onclick = function () {
	let name = document.createElement("input");
	let create = document.createElement("button");
	let skills__add = document.createElement("div");
	let skills = document.querySelector(".skills");
	skills__add.className = "skills__add";
	create.className = "skill__add";
	name.className = "skills__add-name";
	name.placeholder = "name";
	create.innerHTML = "Добавть";
	skills__add.appendChild(name);
	skills__add.appendChild(create);
	skills.appendChild(skills__add);
	let creates = document.querySelectorAll(".skill__add");
	for(let i = 0 ; i < creates.length; i++){
		creates[i].onclick = function (e) {
			let name__inner = e.target.parentNode.querySelector(".skills__add-name");
			let li = document.createElement("li");
			let chair = document.createElement("span");
			let chair__two = document.createElement("span");
			let strong = document.createElement("strong");
			let span_current = document.createElement("span");
			let need_expa = document.createElement("span");
			let div = document.createElement("div");
			chair.innerHTML = "-";
			chair__two.innerHTML = "/";
			li.className = "list__skill";
			strong.className = "list__skill_name";
			strong.innerHTML = name__inner.value;
			let span = document.createElement("span");
			span_current.className = "current_expa";
			span_current.innerHTML = "0";
			let fill = document.createElement("div");
			fill.className = "fill";
			need_expa.className = "need_expa";
			need_expa.innerHTML = "100";
			span.className = "skill-level";
			span.innerHTML = "1";
			div.className = "experiance";
			let list = document.querySelector(".list-skill");
			li.appendChild(strong);
			li.appendChild(chair);
			li.appendChild(span);
			div.appendChild(span_current);
			div.appendChild(chair__two);
			div.appendChild(fill);
			div.appendChild(need_expa);
			li.appendChild(div);
			list.appendChild(li);
			let opinion = document.createElement("option");
			opinion.innerHTML = name__inner.value;
			opinion.value = name__inner.value;
			for(let j = 0; i <selects.length;i++){
					selects[j].appendChild(opinion)
			}
			e.target.parentNode.remove();
		}
	}
}