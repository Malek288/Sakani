const houses = [
  {
    title: "غرفة خاصة قرب جامعة القاهرة",
    city: "cairo",
    price: 1500,
    typeofhosing: "single",
    ownernumber: "01012345678",
    owner: "أحمد محمد علي",
    description: "غرفة واسعة ومفروشة بالكامل، قريبة من الجامعة والمواصلات، تشمل الإنترنت والمياه والكهرباء."
  },
  {
    title: "شقة مشتركة في المعادي",
    city: "cairo",
    price: 2000,
    typeofhosing: "shared",
    ownernumber: "01123456789",
    owner: "محمد حسن إبراهيم",
    description: "شقة مشتركة 3 غرف، منطقة هادئة، قريبة من المترو، مفروشة بالكامل، سكن راقي ومناسب للطلاب."
  },
  {
    title: "شقة كاملة في مدينة نصر",
    city: "cairo",
    price: 3500,
    typeofhosing: "apartment",
    ownernumber: "01234567890",
    owner: "خالد أحمد محمود",
    description: "شقة 2 غرفة وصالة، مفروشة بالكامل، دور ثالث، قريبة من سيتي ستارز والجامعة الأمريكية، مطبخ مجهز."
  },
  {
    title: "غرفة مفروشة في الدقي",
    city: "giza",
    price: 1800,
    typeofhosing: "single",
    ownernumber: "01098765432",
    owner: "عمر سعيد محمد",
    description: "غرفة مفروشة في شقة مشتركة، منطقة راقية، قريبة من جامعة القاهرة ومحطة المترو، هادئة ونظيفة."
  },
  {
    title: "شقة مشتركة في فيصل",
    city: "giza",
    price: 1200,
    typeofhosing: "shared",
    ownernumber: "01156789012",
    owner: "يوسف علي حسن",
    description: "شقة 4 غرف للمشاركة، أسعار مناسبة للطلاب، قريبة من المواصلات والخدمات، نظيفة ومرتبة."
  },
  {
    title: "شقة كاملة في الهرم",
    city: "giza",
    price: 2500,
    typeofhosing: "apartment",
    ownernumber: "01267890123",
    owner: "حسام الدين أحمد",
    description: "شقة 3 غرف وصالة، مفروشة جزئياً، دور أرضي، حديقة صغيرة، قريبة من الجامعات والمواصلات."
  },
  {
    title: "غرفة خاصة في سيدي جابر",
    city: "alex",
    price: 1600,
    typeofhosing: "single",
    ownernumber: "01078901234",
    owner: "طارق محمود سعيد",
    description: "غرفة واسعة ومطلة على البحر، مفروشة بالكامل، في منطقة حيوية قريبة من الجامعات والكورنيش."
  },
  {
    title: "شقة مشتركة في سموحة",
    city: "alex",
    price: 1700,
    typeofhosing: "shared",
    ownernumber: "01189012345",
    owner: "أحمد فتحي علي",
    description: "شقة مشتركة للطلاب، 3 غرف، مفروشة، قريبة من جامعة الإسكندرية، منطقة آمنة وهادئة."
  },
  {
    title: "شقة كاملة في المنصورة",
    city: "dakahlia",
    price: 2200,
    typeofhosing: "apartment",
    ownernumber: "01290123456",
    owner: "إبراهيم حسن محمد",
    description: "شقة جديدة 2 غرفة وصالة، مفروشة، دور ثاني، قريبة من جامعة المنصورة والمستشفيات الجامعية."
  },
  {
    title: "غرفة مفروشة في طنطا",
    city: "gharbiya",
    price: 1400,
    typeofhosing: "single",
    ownernumber: "01501234567",
    owner: "محمد السيد أحمد",
    description: "غرفة نظيفة ومفروشة، في شقة هادئة، قريبة من جامعة طنطا، تشمل جميع المرافق والخدمات."
  },
  {
    title: "شقة مشتركة في بني سويف",
    city: "bns",
    price: 1100,
    typeofhosing: "shared",
    ownernumber: "01012345670",
    owner: "سامي محمد حسين",
    description: "شقة للمشاركة بأسعار مناسبة جداً، قريبة من الجامعة والمواصلات، نظيفة ومرتبة."
  },
  {
    title: "شقة كاملة في أسيوط",
    city: "assiut",
    price: 1900,
    typeofhosing: "apartment",
    ownernumber: "01123456788",
    owner: "عبدالله أحمد علي",
    description: "شقة 2 غرفة نوم، مفروشة بالكامل، قريبة من جامعة أسيوط، دور أول، مطبخ وحمام حديثين."
  },
  {
    title: "غرفة خاصة في الإسماعيلية",
    city: "ismailia",
    price: 1300,
    typeofhosing: "single",
    ownernumber: "01234567899",
    owner: "وليد حسن محمود",
    description: "غرفة هادئة ومفروشة، في منطقة راقية، قريبة من جامعة قناة السويس والخدمات."
  },
  {
    title: "شقة مشتركة في الزقازيق",
    city: "sharkia",
    price: 1250,
    typeofhosing: "shared",
    ownernumber: "01098765433",
    owner: "مصطفى علي حسن",
    description: "شقة 4 غرف للمشاركة، مناسبة للطلاب، قريبة من جامعة الزقازيق، أسعار معقولة."
  },
  {
    title: "شقة كاملة في الفيوم",
    city: "fayoum",
    price: 2000,
    typeofhosing: "apartment",
    ownernumber: "01156789013",
    owner: "حسين محمد عبدالله",
    description: "شقة حديثة 3 غرف، مفروشة بالكامل، قريبة من جامعة الفيوم، منطقة هادئة وآمنة للسكن."
  }
];
// لو عايز تخزن بوستات كتير من غير ما تدخلها بإيدك شيل الكومنت عن السطر الجاي
      localStorage.setItem('dataObj', JSON.stringify(houses));

const searchParameters = new URLSearchParams(window.location.search);
const cityParam = searchParameters.get("city");
const typeofhousingParam = searchParameters.get("typeofhosing");
if (cityParam || typeofhousingParam) {
  const postsFiltered=postfilteration(cityParam, null, null, typeofhousingParam);
  createListingCard(postsFiltered);
}

const filterform = document.getElementById('filteration')
const resetFilter= document.getElementById('resetFilter')
resetFilter.onclick = function(){
  const houses= localStorage.getItem('dataObj') ? JSON.parse(localStorage.getItem('dataObj')) : []; 
  createListingCard(houses)
}
const button = document.getElementById("filter")
button.onclick = function () {
  const filterdata = new FormData(filterform)
const filterdData =   postfilteration(filterdata.get("city"), filterdata.get("min"), filterdata.get('max'),filterdata.get('typeofhousing'))
createListingCard(filterdData)
}

function createListingCard(data){
    container.innerHTML=""
    data.forEach((post,index) => {
    const col = document.createElement('div');
    col.className = 'col-md-6 col-sm-12 mb-4';
    col.appendChild(createCard(post,index));
    container.appendChild(col);
});
}

function postfilteration(city, minprice, maxprice, typeofhosing) {
  console.log(city, minprice, maxprice, typeofhosing);
  
  const houses= localStorage.getItem('dataObj') ? JSON.parse(localStorage.getItem('dataObj')) : [];
  const filteredhoues = houses
    .filter(house => house.city === city)
    .filter(house => !minprice || !maxprice || house.price >=  +minprice && house.price <= +maxprice)
    .filter(house => typeofhosing === "all" ||house.typeofhosing === typeofhosing)    
    console.log(filteredhoues);
    
  return filteredhoues
}