
var workOutSelector = "exercises";
var apiUrl = "https://exercisedb.p.rapidapi.com/";
var apiUrlEnd = "?limit=12"
var apiKey = "39930ead85msh18dba88b34eaf58p1d635ajsne69f59bc6bb0";

function exercises(workOutSelector, number, ) {
    console.log(apiUrl + workOutSelector + apiUrlEnd)
    fetch(apiUrl + workOutSelector + apiUrlEnd , {
        method: "GET",
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
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
            
            if (number == 1) {
                 workouts(data);
            }
            if (number == 2) {
                myWorkoutPlan(data);
            }
        })
        .catch(function (error) {
            console.error("Error: " + error.message);
        });

       
}
exercises(workOutSelector, 1 );

document.querySelector('#cardio').addEventListener('click',(event)=>{
        exercises("exercises/bodyPart/cardio", 1 )
    })

document.querySelector('#arms').addEventListener('click',(event)=>{
    exercises("exercises/bodyPart/upper%20arms", 1)
    })

document.querySelector('#legs').addEventListener('click',(event)=>{
     exercises("exercises/bodyPart/upper%20legs", 1)
    })
document.querySelector('#chest').addEventListener('click',(event)=>{
     exercises("exercises/bodyPart/chest", 1)
     })

function workouts(data) {
    var main = document.querySelector("#exercise-cards");
    main.innerHTML = "";

    main.setAttribute("class", " m-auto grid grid-cols-3 mb-4 z-10 mt-5 ml-10");

    for (var i = 0; i < data.length; i++) {
        console.log(i);
        
        var div = document.createElement("div");
        div.setAttribute( "class","bg-blue-700 p-4 rounded-2xl shadow-lg m-4" );
        main.appendChild(div);

        var img = document.createElement("img");
        img.setAttribute("class", "w-fit h-fit object-cover rounded-t-2xl");
            img.setAttribute("src", data[i].gifUrl);
        img.setAttribute("alt", "Picture of workout");
        div.appendChild(img);

        var div2 = document.createElement("div");
        div2.setAttribute("class", "text-white p-4");
        div.appendChild(div2);

        var h2 = document.createElement("h2");
        h2.setAttribute("class", "text-2xl font-semibold");
            h2.textContent = data[i].name;
        div2.appendChild(h2);

        var p = document.createElement("p");
        p.setAttribute("class", "text-md mt-2");
        p.textContent = "body part " + data[i].bodyPart;
        div.appendChild(p);

        var p2 = document.createElement("p");
        p2.setAttribute("class", "text-md mt-2");
        p2.textContent = "muscle " + data[i].target;
        div.appendChild(p2);

        var p3 = document.createElement("p");
        p3.setAttribute("class", "text-md mt-2");
        p3.textContent = "equipment " + data[i].equipment;
        div.appendChild(p3);

        var div3 = document.createElement("div");
        div3.setAttribute("class", "bg-blue-600 text-center p-2 rounded-b-2xl");
        div.appendChild(div3);

        var popup = document.createElement("button");
        var popupdata = data[i].instructions;
        popup.setAttribute("on-click", popupdata);
        popup.setAttribute("role", 'button');
        popup.setAttribute("class", "text-white hover:underline mr-3");
        popup.textContent = "Learn More  ";
        div3.appendChild(popup)

        var button = document.createElement("button");
        button.setAttribute("data-exercise", data[i].id);
        button.setAttribute("class", "bg-blue-800 text-white px-4 py-2 rounded-full mt-2 inline-block hover:bg-blue-900");
        button.textContent = "Add to Plan";
        div3.appendChild(button)
   }

}

document.querySelector('main').addEventListener('click',(event)=>{
    if (event.target.hasAttribute("on-click")) {
        var popupdata = event.target.getAttribute("on-click")
        Popup(popupdata)
    }
})

function Popup(data) {
            var myDialog = document.createElement("dialog");
            myDialog.setAttribute("class","bg-blue-700 p-4 rounded-2xl shadow-lg m-2 container mx-auto flex flex-wrap -mx-4 p-8")
            document.body.appendChild(myDialog)
            var text = document.createTextNode(data);
            myDialog.appendChild(text);
            myDialog.showModal();
          }

       
document.querySelector('main').addEventListener('click',(event)=>{
    if (event.target.hasAttribute("data-exercise")) {
        var id = event.target.getAttribute("data-exercise")
        console.log("name="+id)
        exercises("exercises/exercise/"+id, 2,)
    }
}) 

function myWorkoutPlan (data){

    var main = document.querySelector("#addedExercise");
   // main.setAttribute("class", "w-full md:w-1/3 mb-4 z-10 mt-5");
    
        var div = document.createElement("div");
        div.setAttribute( "class","bg-blue-700 p-3 rounded-2xl mb-4 " );
        main.appendChild(div);

        var div2 = document.createElement("div");
        div2.setAttribute("class", "text-white p-4");
        div.appendChild(div2);

        var h2 = document.createElement("h2");
        h2.setAttribute("class", "text-2xl font-semibold");
            h2.textContent = data.name;
        div2.appendChild(h2);

        var div3 = document.createElement("div");
        div3.setAttribute("listIds", data.id)
        main.appendChild(div3);
        console.log(data.id);
}

document.querySelector('WorkoutListShow').addEventListener('click',(event)=>{
    var id = document.getElementById("listIDs")
        console.log(id);
    
})
