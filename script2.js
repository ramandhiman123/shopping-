
 
    // function dis(){
    //     let abc=new XMLHttpRequest();
    //     abc.onreadystatechange = function () {
    //         if(abc.readyState == 4  && abc.status == 200 ){
    //             document.getElementById("demo").innerHTML = abc.responseText;
    //             // var xyz=abc.responseText;
    //             // var xyz1 = JSON.parse(xyz);
       

    //             // console.log(abc.responseJSON );
    //         }
    //         else if(abc.readyState == 4 && abc.status == 404){
    //             document.getElementById("demo").innerHTML="file not found";
    //         }
    //      };
    //     abc.open("GET","cart.html",true);
    //     abc.send();
    // }   
    

 
    async function fetchdisplaydata(){
        const productid =newURLSearchParams 
        (window.location.search).get('id');
        const response =  await fetch(`https://fakestoreapi.com/products ${productid}`);
        
        const product = await response.json();
        console.log(product, productid);

    } 
    fetchdisplaydata();