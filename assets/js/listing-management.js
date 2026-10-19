

document.addEventListener("DOMContentLoaded", function () {
    // Check if user is logged in
    if (!localStorage.getItem("loggedIn")) {
        // redirect to login if not logged in
        window.location.href=("login.html");
        return; // stop further execution
    }
});
let typeofhosing = document.getElementById('typeofhosing');
let submit = document.getElementById('submit');
let DeleteBtn = document.getElementById('delete');
let collapse=document.getElementById('collapse');

//read
let datapost;
if (localStorage.dataObj != null) {
  datapost = JSON.parse(localStorage.dataObj);
} else {
  datapost = [];
}

submit.onclick = function (e) {
  e.preventDefault(); // منع إعادة تحميل الصفحة
  if (!isFormValid()) return;
  let data = {
    title: title.value,
    city: city.value,
    price: price.value,
    typeofhosing: typeofhosing.value,
    ownernumber: ownernumber.value,
    owner: owner.value,
    description: description.value
  };

  datapost.push(data);
  localStorage.setItem('dataObj', JSON.stringify(datapost));
  console.log(datapost);
  clearForm();
  Sdata();
};

//clear function
function clearForm() {
  title.value = '';
  city.value = '';
  price.value = '';
  typeofhosing.value = '';
  ownernumber.value = '';
  owner.value = '';
  description.value = '';
}

//read function
function Sdata() {
  let card = '';
  for (let i = 0; i < datapost.length; i++) {
    card += `
           <div class="card mb-3 w-100 mt-5">
  <div class="row g-0">
    <div class="col-md-3  ">
      <img src="assets/img/listing-room-1.jpeg" alt="">

    </div>
    <div class="col-md-8">

      <div class="card-body">
        <div class="d-flex justify-content-between">
          <p class="card-title">   ${datapost[i].title}  </p>
        </div>
        <p class="card-text">${datapost[i].city}</p>
        <p class=" d-flex g-4"> ${datapost[i].owner}<span
          class="ms-3 me-3 "></span> ${datapost[i].ownernumber} </p>

        <p >  ${datapost[i].description}</p>

                        <div class="d-flex justify-content-between">
                            <h4 class="text-primary font-weight-500 font-size-20px card-text">${datapost[i].price}  / الشهر
                            </h4>

                            <div class="mt-2">
                                    <i class="fa-regular fa-trash-can me-3 text-danger" onclick="Ddata(${i})" ></i>
                                    <i class="fa-regular fa-pen-to-square"onclick="editData(${i})"></i>
                            </div>

                        </div>




      </div>
    </div>
  </div>
</div> 
        `;
  }
  document.getElementById('card').innerHTML = card;
}

Sdata();

// delete function
function Ddata(i) {
  datapost.splice(i, 1);
  localStorage.dataObj = JSON.stringify(datapost);
  Sdata();
};

function editData(i) {
  title.value = datapost[i].title;
  city.value = datapost[i].city;
  price.value = datapost[i].price;
  typeofhosing.value = datapost[i].typeofhosing;
  ownernumber.value = datapost[i].ownernumber;
  owner.value = datapost[i].owner;
  description.value = datapost[i].description;
  submit.innerText = 'تعديل';
  collapse.classList.add('show');
  // navigate to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
  submit.onclick = function (e) {
    e.preventDefault()
    if (!isFormValid()) return;
    updateDataLS(i);
    clearForm();
    submit.innerText = 'إضافة';
  }
}
function updateDataLS(i) {
  
  datapost[i] = {
    title: title.value,
    city: city.value,
    price: price.value,
    typeofhosing: typeofhosing.value,
    ownernumber: ownernumber.value,
    owner: owner.value,
    description: description.value
  }
  console.log(datapost[i]);
  localStorage.dataObj = JSON.stringify(datapost);
  Sdata();
}















