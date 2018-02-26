str.forEach(function(item){
	var otdelniyDiv = '<div class="imege1">' + '<h2>' + item.name + '</h2>' + '<h6>' + item.dicription + '</h6>' + '<img src="' + item.img + '"/>' + '<br>' + '<imege1>' + item.price + '$</imege1>' + '<br>' + '<h5>' + item.presence + '</h5>' + '<button class="btn btn-warning">' + item.add + '</button>'
	data.innerHTML += otdelniyDiv
})

btn.onclick = function(){
	var min = parseInt(inp1.value,10);
	var max = parseInt(inp2.value,10);
	if(max<min){
		max = Infinity
	}
	var arr = str.filter(function(item){
		return (item.price>=min && item.price <= max)
	})
	data.innerHTML = ''
	arr.forEach(function(item){
		var otdelniyDiv = '<div class="imege1">' + '<h2>' + item.name + '</h2>' + '<img src="' + item.img + '"/>' + '<br>' + '<imege1>' + item.price + '$</imege1>'
		data.innerHTML += otdelniyDiv
	})
}

function fun1() {
    var rng=document.getElementById('r1'); 
    var p=document.getElementById('one'); 
    p.innerHTML=rng.value;
}
    btn2.onclick = function(){
        data.innerHTML = ''
        str.sort(function(a,b){
            if(a.name > b.name){
                return 1
            }else{
                return -1
            }
        })
    str.forEach(function(item, i){
            var otdelniyDiv = '<div class="imege1">' + '<h2>' + item.name + '</h2>' + '<h6>' + item.dicription + '</h6>' + '<img src="' + item.img + '"/>' + '<br>' + '<imege1>' + item.price + '$</imege1>' + '<br>' + '<h5>' + item.presence + '</h5>' + '<button class="btn btn-warning">' + item.add + '</button>'
    data.innerHTML += otdelniyDiv
        })
    }
     inp3.oninput  = (function(){
        var searchReq = this.value;
        data.innerHTML = ''
        otherStr = str.filter(function(item){
            return item.name.toUpperCase().indexOf(searchReq.toUpperCase()) >-1
        })
        otherStr.forEach(function(item, i){
             var otdelniyDiv = '<div class="imege1">' + '<h2>' + item.name + '</h2>' + '<h6>' + item.dicription + '</h6>' + '<img src="' + item.img + '"/>' + '<br>' + '<imege1>' + item.price + '$</imege1>' + '<br>' + '<h5>' + item.presence + '</h5>' + '<button class="btn btn-warning">' + item.add + '</button>'
            data.innerHTML += otdelniyDiv
        })
    })
    btn3.onclick = function(){
        data.innerHTML = ''
        str.sort(function(y,n){
            if(n.presence > y.presence){
                return 1
            }else{
                return -1
            }
        })
        str.forEach(function(item, i){
            var otdelniyDiv = '<div class="imege1">' + '<h2>' + item.name + '</h2>' + '<h6>' + item.dicription + '</h6>' + '<img src="' + item.img + '"/>' + '<br>' + '<imege1>' + item.price + '$</imege1>' + '<br>' + '<h5>' + item.presence + '</h5>' + '<button class="btn btn-warning">' + item.add + '</button>'
	   data.innerHTML += otdelniyDiv
        })
    }
     btn4.onclick = function(){
        data.innerHTML = ''
        str.sort(function(n,y){
            if(n.presence > y.presence){
                return 1
            }else{
                return -1
            }
        })
        str.forEach(function(item, i){
            var otdelniyDiv = '<div class="imege1">' + '<h2>' + item.name + '</h2>' + '<h6>' + item.dicription + '</h6>' + '<img src="' + item.img + '"/>' + '<br>' + '<imege1>' + item.price + '$</imege1>' + '<br>' + '<h5>' + item.presence + '</h5>' + '<button class="btn btn-warning">' + item.add + '</button>'
	data.innerHTML += otdelniyDiv
        })
    }