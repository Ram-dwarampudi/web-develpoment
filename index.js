var user=[
    {
        "name":"John Doe",
        "gender":"Male",
        "image":"john.png"
    },
    {
        "name":"Jane Doe",
        "gender":"Female",
        "image":"jane.png"
    }
]

var index=0;

function toggle(){
    if(index==0){
        index=1;
    }
    else index=0;

    document.getElementById("user-name").innerText=user[index].name;
    document.getElementById("user-gender").innerText=user[index].gender;
    document.getElementById("user-image").src=user[index].image;
}

function randon(){
    fetch("https://randomuser.me/api")
        .then(function(rawData){
            return rawData.json();
        })
        .then(function(jsonData){
            var user= jsonData.results[0];
            var gender=user.gender;
            var fullName=user.name.title+" "+user.name.first+" "+user.name.last;

            document.getElementById("user-name").innerText=fullName;
            document.getElementById("user-gender").innerText=gender;
            document.getElementById("user-image").src=user.picture.large;
        })
}