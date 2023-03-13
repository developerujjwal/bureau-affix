import {app,db,getStorage,uploadBytesResumable,getDownloadURL,ref,get,set} from './firebase.js'



function getFromDatabase() {
    let registrationData = [];
    return (get(ref(db, 'registration')).then((snapshot) => {
        console.log("snapshot", snapshot.val());
        snapshot.forEach((value) => {
            registrationData.push(value.val());
            console.log("data", registrationData);
        })
        for (let i = 0; i < registrationData.length; i++) {
            let dataCard = document.querySelector('#dataCards');
            let newCard = document.createElement(`div`);
            console.log(newCard);
            let nCard = newCard.setAttribute("class","col-md-2");
            
            // let listName = document.createElement('td');
            // let list2 = document.createElement('td');
            // let list3 = document.createElement('td');
            // let listName = document.querySelector("#cardName");
            newCard.innerHTML = `
            <div id="empCard" class="card col-md-2" style="width: 18rem; margin-top: 20px;">
        <img src="./Add a subheading/3.png" class="card-img-top" alt="...">
        <div class="card-body" id="">
            <p class="card-text" style="display: inline-block;">Name :</p>
            <h5 class="card-title" id="cardName" style="display: inline-block;">${registrationData[i].name}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Department : ${registrationData[i].dept}</li>
            <li class="list-group-item">Position : ${registrationData[i].pos}</li>
        </ul>
        <div class="card-body">
            <a href="mailto:${registrationData[i].email}" class="card-link">Email</a>
            <a href="tel:+91${registrationData[i].phone}" class="card-link">Phone</a>
        </div>
    </div>`;
           document.querySelector('#dataCards').classList.add('row');
            // list2.innerText = registrationData[i].email;
            // list3.innerText = registrationData[i].phone;
            document.querySelector('#dataCards').append(newCard);
            // document.querySelector('#dataCards').append(list);
            // document.querySelector('#employee-list').append(list);
            // document.querySelector('#employee-list').append(list);

        }
    })


    )
}

getFromDatabase();

const empform = document.querySelector('#emp-form');

console.log(name);
empform.addEventListener('submit', (e) => {
    e.preventDefault();
    let pname = document.querySelector('#project-name').value;
    let rname = document.querySelector('#researcher-name').value;
    let email = document.querySelector('#email').value;
    let faculty = document.querySelector('#faculty').value;
    let technology = document.querySelector('#technology-used').value;
    let application = document.querySelector('#application').value;
    let payload = {
        projectName: pname,
        researcherName: rname,
        email: email,
        faculty: faculty,
        technology: technology,
        application: application
    }
    // var payload = JSON.stringify(localPayload);
    // console.log(payload);
    console.log("research data", payload);
    set(ref(db, 'research/' + payload.projectName), payload).then(() => { console.log("data uploaded") }).catch((e) => { console.log(e); });
    location.reload();
})
//show data from database
let researchData = [];
console.log(db);

console.log("rd", ref);

function getResearchFromDatabase() {
    return (get(ref(db, 'research')).then((snapshot) => {
        console.log("snapshot", snapshot.val());
        snapshot.forEach((value) => {
            researchData.push(value.val());
            console.log("data", researchData);
        })
        for (let i = 0; i < researchData.length; i++) {
            let dataCard = document.querySelector('#research-list');
            let newCard = document.createElement(`div`);
            console.log(newCard);
            let nCard = newCard.setAttribute("class", "col-md-3");

            newCard.innerHTML = `
            <div class="card" style="width: 25rem; margin: 20px">
<div class="card-body">
<h5 class="card-title">Project Name: ${researchData[i].projectName}</h5>
<h6 class="card-subtitle mb-2 text-muted">Researcher Name:${researchData[i].researcherName}</h6>

<ul class="list-group list-group-flush">
<li class="list-group-item">Application : ${researchData[i].application}</li>
            <li class="list-group-item">Faculty : ${researchData[i].faculty}</li>
            <li class="list-group-item">Technology : ${researchData[i].technology}</li>
        </ul>
<a href="mailto:${researchData[i].email}" class="card-link">Email:  ${researchData[i].email}</a>
</div>
</div>`;
            document.querySelector('#research-list').classList.add('row');
            // list2.innerText = registrationData[i].email;
            // list3.innerText = registrationData[i].phone;
            document.querySelector('#research-list').append(newCard);
            // document.querySelector('#dataCards').append(list);
            // document.querySelector('#employee-list').append(list);
            // document.querySelector('#employee-list').append(list);

        }
    })


    )
}

getResearchFromDatabase();
