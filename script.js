function check(){
    if(document.getElementById("dd").value== "" || document.getElementById("mm").value== "" || document.getElementById("yy").value== ""){
       error();
    }  else{daysOld();}
}


    function daysOld() {
    var dd = document.getElementById("dd").value;
    var mm = document.getElementById("mm").value;
    var yy = document.getElementById("yy").value;
    date1 = "'" + mm + '/' + dd + '/' + yy + "'";
    dt1 = new Date(date1);
    dt2 = new Date();
    resultInDays = Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24))
    document.getElementById("result").style.display = "inline";
    return document.getElementById("msg").innerHTML = 'You Are '+ resultInDays +' Days Old';
    }

    function error(){
        document.getElementById("result").style.display = "inline";
        document.getElementById("msg").innerHTML = "You Had One Job";
    }

    function reset(){
        document.getElementById("result").style.display = "none";
        document.getElementById("dd").value = NaN;
        document.getElementById("mm").value = NaN;
        document.getElementById("yy").value = NaN;
    }