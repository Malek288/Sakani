const price = document.getElementById("price");
const title = document.getElementById("Title");
const ownernumber = document.getElementById("ownernumber");
const city = document.getElementById("city");
const owner = document.getElementById("owner");
const description = document.getElementById("description");
const Oerror = document.getElementById("OwnerError");
const Perror = document.getElementById("Perror");
const PriceError = document.getElementById("PriceError");
const Terror = document.getElementById("TitleError");
const Derror = document.getElementById("Derror");

const form = document.getElementById("userform");


function priceValidation() {
  const priceValue = Number(price.value);

  if (priceValue < 1000 || priceValue > 10000) {
    PriceError.textContent = "السعر يجب أن يكون بين 1k و 10k جنيه";
    PriceError.style.color = "red";
    PriceError.style.display = "block";
    price.focus();
    return false;
  }

  PriceError.style.display = "none";
  return true;
}

function titleValidation() {
  const titleValue = title.value;

  if (!/^[\u0600-\u06FF\s]{7,25}$/.test(titleValue)) {
    Terror.textContent =
      "عدد الحروف يجب ان يكون بين 7 و 25 ولا يقبل ارقام او رموز خاصه";
    Terror.style.color = "red";
    Terror.style.display = "block";
    title.focus();
    return false;
  }

  Terror.style.display = "none";
  return true;
}

// function cityValidation() {
//   const cityValue = city.value;

//   if (!/^[\u0600-\u06FF]{3,11}$/.test(cityValue)) {
//     Cerror.innerText =
//       "عدد الحروف يجب ان يكون بين 3 و 11 ولا يقبل ارقام او مسافات";
//     Cerror.style.color = "red";
//     Cerror.style.display = "block";
//     city.focus();
//     return false;
//   }

//   Cerror.style.display = "none";
//   return true;
// }

function phoneValidation() {
  const onValue = ownernumber.value;

  if (!/^01[1250][0-9]{8}$/.test(onValue)) {
    Perror.textContent = "برجاء إدخال رقم مصري صحيح";
    Perror.style.color = "red";
    Perror.style.display = "block";
    ownernumber.focus();
    return false;
  }

  Perror.style.display = "none";
  return true;
}

function ownerValidation() {
  const Ovalue = owner.value;

  if (!/^[a-zA-Z\u0600-\u06FF]{3,10}\s+[a-zA-Z\u0600-\u06FF]{3,10}$/.test(Ovalue)) {
    Oerror.textContent =
      "برجاء إدخال اسم ثنائي او ثلاثي من 10 الى 24 حرف";
    Oerror.style.color = "red";
    Oerror.style.display = "block";
    owner.focus();
    return false;
  }

  Oerror.style.display = "none";
  return true;
}

function discValidation() {
  const Dvalue = description.value;

  if (!/^[\u0600-\u06FF0-9\s\.\,\-\(\)\:\+\#\/]{50,250}$/.test(Dvalue)) {
    Derror.textContent =
      "برجاء إدخال وصف من 50-250 حرف لا يقبل جميع الرموز الخاصة";
    Derror.style.color = "red";
    Derror.style.display = "block";
    description.focus();
    return false;
  }

  Derror.style.display = "none";
  return true;
}

function isFormValid() {
  const isValid =
    titleValidation() &&
    priceValidation() &&
    // cityValidation() &&
    phoneValidation() &&
    ownerValidation() &&
    discValidation();

  return isValid; 
}

