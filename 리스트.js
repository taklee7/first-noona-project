function categoryChange(e) {
	var good_a = ["지수", "제니", "로제", "리사"];
	var good_b = ["빅토리아", "엠버", "루나", "크리스탈"];
	var good_c = ["LE", "하니", "정화", "혜린", "솔지"];
	var target = document.getElementById("good");

	if(e.value == "a") var d = good_a;
	else if(e.value == "b") var d = good_b;
	else if(e.value == "c") var d = good_c;

	target.options.length = 0;

	for (x in d) {
		var opt = document.createElement("option");
		opt.value = d[x];
		opt.innerHTML = d[x];
		target.appendChild(opt);
	}	
}
        
