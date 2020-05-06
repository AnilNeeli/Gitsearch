
function user(){

let name=document.getElementById("user").value;
const url=`https://api.github.com/users/${name}`;
fetch(url).then(res=>{
  if (!res.ok){
      alert("no such user exist");
  }
  else{
     return res.json();
  }
}).then(data=>{
     var tb1=document.getElementById("tabel1");
var row1=tb1.insertRow();
var cel1=row1.insertCell(0);
var cel2=row1.insertCell(1);
var cel3=row1.insertCell(2);
var cel4=row1.insertCell(3);
cel1.innerHTML=`<a href=${data.html_url} target="_blank"> ${name} </a>`;
var img = document.createElement('img');
            img.src = data.avatar_url;
             img.setAttribute("width", "75");
            img.setAttribute("height", "75");
            cel2.appendChild(img);
cel3.innerHTML=data.public_repos;

fetch(data.followers_url)
            .then((response)=> {
                if (!response.ok) {
                    alert("something went wrng")
                }
                return response.json();
            })
            .then((data)=> {
            var followers = [];
                data.forEach((obj)=>{
                    followers.push(obj.login);
            })
            if (followers.length===0)
            cel4.innerHTML=0;
            else{
                  flw=""
                  followers.forEach((el)=>{
                      flw += `<a href=https://github.com/${el} target="_blank">${el}</a> </br>`;
                  })
                  cel4.innerHTML=flwList;
            }

   })
})
document.getElementById("user").value=""


}