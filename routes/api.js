var workOutSelector = "";
var apiUrl = "https://api.api-ninjas.com/v1/exercises?muscle=";
var apiKey = "wP5vqzkikC7Gw3IK1nXbDg==bQIOoLezyk0YDbm4";

function exercises(workOutSelector) {
    fetch(apiUrl + workOutSelector , {
        method: "GET",
        headers: {
            "X-Api-Key": apiKey,
            "Content-Type": "application/json",
        },
    })
        .then(function (response) {
            if (!response.ok) {
                throw new Error(
                    "Request failed with status: " + response.status
                );
            }
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            workouts(data);
            return data;
        })
        .catch(function (error) {
            console.error("Error: " + error.message);
        });
}

exercises(workOutSelector);

function workouts(data) {
    var main = document.querySelector("main.cards");
    main.innerHTML = "";

    main.setAttribute("class", "w-full md:w-1/3 mb-4 z-10 mt-5");
    for (var i = 0; i < data.length; i++) {
        console.log(i);
        
        var div = document.createElement("div");
        div.setAttribute( "class","bg-blue-700 p-4 rounded-2xl shadow-lg" );
        main.appendChild(div);

        var img = document.createElement("img");
        img.setAttribute("class", "w-fit h-fit object-cover rounded-t-2xl");
            img.setAttribute("src","../images/bicep curl.gif" );
        img.setAttribute("alt", "Picture of workout");
        div.appendChild(img);

        var div2 = document.createElement("div");
        div2.setAttribute("class", "text-white p-4");
        div.appendChild(div2);

        var h2 = document.createElement("h2");
        h2.setAttribute("class", "text-2xl font-semibold");
        // switches between park name and campground name depending on the data
            h2.textContent = data[i].name;
        div2.appendChild(h2);

        var p = document.createElement("p");
        p.setAttribute("class", "text-sm mt-2");
        p.textContent = data[i].instructions;
        div.appendChild(p);

        var div3 = document.createElement("div");
        div3.setAttribute("class", "bg-blue-600 text-center p-2 rounded-b-2xl");
        div.appendChild(div3);

        var a = document.createElement("a");
        a.setAttribute("href", "#");
        a.setAttribute("class", "text-white hover:underline");
        a.textContent = "Learn More";
        div3.appendChild(a)

        var button = document.createElement("button");
        button.setAttribute("data-exercise", data[i].name);
        button.setAttribute("class", "bg-blue-800 text-white px-4 py-2 rounded-full mt-2 inline-block hover:bg-blue-900");
        button.textContent = "Add to Plan";
        div3.appendChild(button)
   }

}

document.querySelector('main').addEventListener('click',(event)=>{
    if (event.target.hasAttribute("data-exercise")) {
        console.log(event.target.getAttribute("data-exercise"))
    }
}) 

function myWorkoutPlan (namesOfWorkouts){
    var main = document.querySelector("main.cards");
    main.setAttribute("class", "w-full md:w-1/3 mb-4 z-10 mt-5");
    
    for (var i = 0; i < data.length; i++) {
        console.log(i);
        
        var div = document.createElement("div");
        div.setAttribute( "class","bg-blue-700 p-4 rounded-2xl shadow-lg" );
        main.appendChild(div);

        var img = document.createElement("img");
        img.setAttribute("class", "w-fit h-fit object-cover rounded-t-2xl");
            img.setAttribute("src","../images/bicep curl.gif" );
        img.setAttribute("alt", "Picture of workout");
        div.appendChild(img);

        var div2 = document.createElement("div");
        div2.setAttribute("class", "text-white p-4");
        div.appendChild(div2);

        var h2 = document.createElement("h2");
        h2.setAttribute("class", "text-2xl font-semibold");
        // switches between park name and campground name depending on the data
            h2.textContent = data[i].name;
        div2.appendChild(h2);
    }


}