handleForm =(e)=>{
    e.preventDefault()
    var form = document.getElementById("form-login")
    var formData = new FormData(form)
    var data ={}
    formData.entries().forEach(element => {
        data[element[0]] = element[1]
    });  
    creatPost(data)
}
creatPost=async(data)=>{
    var url = "https://jsonplaceholder.typicode.com/posts"
    var option = {
        method : "POST",
        body : JSON.stringify(data)
    }
    var request = await fetch(url,option)
    console.log(request);
}