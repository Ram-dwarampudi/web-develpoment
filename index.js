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