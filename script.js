$(document).ready(function () {

    // let persons = ["Mark Jason", "Frenzo", "Emman", "Teme"];

    // let person = {
    //     name: "Mark Jason",
    //     age: 25,
    //     address: "Salvacion N. Samar",
    // };

    // console.log(person.name)
    // console.log(person.age)
    // console.log(person.address)
    // persons.forEach(person => {
    //     console.log(person)
    // });
    // console.log(persons[3])

    // let personDetails = [
    //     {
    //         name: "Mark Jason",
    //         age: 25,
    //         address: "Salvacion N. Samar",
    //     },
    //     {
    //         name: "Frenzo",
    //         age: 20,
    //         address: "Dalakit N. Samar",
    //     },
    //     {
    //         name: "Emman",
    //         age: 24,
    //         address: "San Jose N. Samar",
    //     }
    // ];

    // personDetails.forEach(person => {
    //     console.log(person.name)
    // });



    $.get("https://jsonplaceholder.typicode.com/todos", function (response) {
        $(".Users").html("")
        response.forEach(user => {
            // console.log(person.email)
            $(".Users").append(`
            
            <div>
                <div class"Users" >
                    <h1 style="color:blue;  background-color: red; padding:20px; margin:10px;border-radius: 20px;">${user.userId} </h1>
                </div>
                 <div class"Users" >
                    <h1 style="color:blue;  background-color: black; padding:20px; margin:10px;border-radius: 20px;">${user.id} </h1>
                </div>
                <div class"Users">
                    <h1 style="color:blue;  background-color: yellow;padding:20px; margin:10px;border-radius: 20px;">${user.title} </h1>
                </div>                    
            </div>
            `)
            // console.log(Users)

        });
    })



})
