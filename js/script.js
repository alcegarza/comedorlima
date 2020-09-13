function upload() {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  var img = document.getElementById("finput");
  // alert(img.files[0].name);
  var all = "./images/" + img.files[0].name;
  alert(all)
  // ctx.drawImage(all,10,10);
  return all
 
}