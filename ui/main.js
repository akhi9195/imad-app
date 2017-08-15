var button = document.getElementById('counter');

   button.onclick = function(){

var request = new XMLHttprequest();

 request.onreaadystatechange = function(){
    if(request.readyState ===XMLHttprequest.DONE)
    {
        //take some action
        if(request.status === 200)
        {
            var counter= request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
        }
    }
    
};

//make request
request.open('GET','http://akhi9195.imad.hasura-app.io/counter',true);
request.send(null);
};

