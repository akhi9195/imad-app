//counter code
var button = document.getElementById('counter');

button.onclick = function() {

alert("he");
    //create a request object
    var request = new XMLHttpRequest();

    //capture the response and store it in inner html
    request.onreaadystatechange = function () {
        alert("hello");
      if (request.readyState == 4) {
         //take some action
        if(request.status == 200 || request.status == 304)
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

