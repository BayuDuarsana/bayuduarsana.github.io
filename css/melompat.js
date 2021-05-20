//Splice (indexawal,maudihapusberapa,elemenk1,elemenke2,.....)
//var arr = ["sandhika","galih","meisya"];
//arr.splice(0,3,"iwil","naah");
//console.log(arr.join("-"));

//5. slice (indeksawal,indeksakhir)
//var arr = ["sandhika","galih","meisya"];
//var arr2 = arr.slice(1,2);
//console.log(arr2.join("-"));

//6. foreach
// var arr = ["sandhika","galih","meisya"];
var angka = [1,2,3,4,5,6,7];
var angka2 = angka.map(function(e) {
    return e * 2;
});

console.log(angka2);