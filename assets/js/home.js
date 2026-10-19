

let search=document.getElementById('search');

search.onclick=function(){

  let typeofhosing=document.getElementById('typeofhousing').value;
  let city=document.getElementById('city').value;
  window.location.href='listings.html?typeofhosing='+typeofhosing+'&city='+city;

}
