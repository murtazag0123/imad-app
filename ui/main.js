//counter code
var button=document.getElementById('counter');

button.onclick=function(){
    
    //Create a request object
        var request = new XMLHttpRequest();
        
    // capture the response and store it in a variable
         request.onreadystatechange = function () {
             if (request.readystate===XMLHttpRequest.DONE){
                 // we want to take some action
                 if(request.status===200){
                    var counter = request.responseText;
                    var span=document.getElementById('count');
                    span.innerHTML=counter.toString();
                 }
             }
             // not done yet
         };
    
    //make the request
    request.open('GET','http://murtazag0123.imad.hasura-app.io/counter',true);
    request.send(null);

};