//counter code
var button = document.getElementById('counter');

button.onclick = function() {

    //create a request object
    var request = new XMLHttpRequest();

    //capture the response and store it in inner html
    request.onreadystatechange = function () {
        // alert("hello");
      if (request.readyState === XMLHttpRequest.DONE) {
         //take some action
        if(request.status === 200)
        {
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
        }
    }
    
};

//make request
request.open('GET', 'http://akhi9195.imad.hasura-app.io/counter', true);
request.send(null);
};

var nameInput = document.getElementById('name');
var name = nameInput.value;

var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    
    var names =['name1','name2','name3'];
    var list = '';
    
    for(i=0;i<names.length;i++){
        list+= '<li>'+names[i]+'</li>'
    }
    
    var ul = document.getElementById('nameList');
    ul.innerHTML = list;
}