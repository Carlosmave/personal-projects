function getartwork(){
    link1 = "http://is5.mzstatic.com/image/thumb/";
    link3 = "/source/100000x100000-999.jpg";

           
           //var c1=document.getElementById("texto1").innerHTML;
           //var c2=toString(c1);
           
    
           //t1=document.getElementById("texto1");
           //t1=document.getElementById("texto1").value;
           //link2=t1.value;
           //link11=link2.toString();
           //link12=link11.
           
           
           //document.getElementById("texto2").value= link2;
           //t1.value=null;
           

           var c1=document.getElementById("combobox").value;
           if(c1=="movie"){
           var str = document.getElementById("texto1").value;//"Hello world!";
           var res = str.substring(30);
           var resp = res.substring(0, res.length-19);
           document.getElementById("texto2").value= resp;
           }else{
              document.getElementById("texto2").value="work"
           }
           
           
           
    
    
       }



