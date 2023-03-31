<input type="text" id="result" readonly  class="textView" name="textView"></input>

function insert(num){
    document.form.textView.value =  document.form.textView.value+num;
}

function C(){
    document.form.textView.value = "";
}

function del(){
    var x = document.form.textView.value;
    document.form.textView.value = x.substring(0, x.length-1)
}

function equal(){
   var x = document.form.textView.value;
   if(x == ""){
         alert('Masukkan angka terlebih dahulu')
   }
   if(x){
        document.form.textView.value = eval(x);
   }
}