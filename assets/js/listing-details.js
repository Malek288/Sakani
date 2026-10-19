
let posts;
if (localStorage.dataObj != null) {
  posts = JSON.parse(localStorage.dataObj);
} else {
  posts = [];
}
const param = new URLSearchParams(window.location.search);
const CurrentPostInd=param.get('postIndex');
const CurrentPost=posts[CurrentPostInd];
const postContainer = document.getElementById("postContainer");
console.log(CurrentPostInd);

function displayPost() {
postContainer.innerHTML = `
<div class="container">
    <div class="row g-0">
        <!-- Image Column -->
        <div class="col-12 col-md-8 p-0">
            <img src="assets/img/listing-room-1.jpeg"
                 class="img-fluid rounded-0 rounded-end-3 w-100 h-100" alt="">
        </div>

        <!-- Card Column -->
        <div class="col-12 col-md-4">
            <div class="card rounded-0 rounded-start-3 shadow h-100">
                <div class="card-body">
                    <p class="fs-6"> السعر الشهري</p>
                    <p class="fs-3 text-primary">جنيه ${CurrentPost.price}</p>
                    <p class="fs-6"> الشهريا</p>
                </div>
                <div class="d-flex flex-column align-items-stretch mx-3 gap-2 gap-md-5">
                    <a class="btn btn-primary" href="tel:20${CurrentPost.ownernumber}">اتصل الان</a>
                    <button class="btn btn-success" onclick="ownerChat()">واتساب</button>
                </div>
                <div class="container">
                    <ul class="ul p-3">
                        <p>نصائح السلامه</p>
                        <li class="li">احصل علي عقد مكتوب</li>
                        <li class="li">تحقق من هويه المالك</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="apartment-card mt-3">
        <div class="card-header-section">
            <div class="d-flex flex-column flex-md-row justify-content-between">
                <div>
                    <h1 class="apartment-title">${CurrentPost.title}<span class="star">⭐</span></h1>
                    <div class="location-info">
                        <span>${CurrentPost.city}</span>
                    </div>
                </div>
                <div class="apartment-type mt-2 mt-md-0">
                    النوع<br>
                    <strong>${typeOfHousing()}</strong>
                </div>
            </div>


            <div class="card-body-section mt-3">
                <h2 class="section-title">الوصف</h2>
                <p class="description-text">${CurrentPost.description}</p>

                <h2 class="section-title">المرافق والخدمات</h2>
                <div class="amenities-grid d-flex flex-wrap gap-3">
                    <!-- WiFi -->
                    <div class="amenity-item d-flex align-items-center gap-2">
                        <div class="wifi-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
                                <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
                                <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
                                <circle cx="12" cy="20" r="1"></circle>
                            </svg>
                        </div>
                        <span class="amenity-text">واي فاي</span>
                    </div>

                    <!-- مفروشة -->
                    <div class="amenity-item d-flex align-items-center gap-2">
                        <div class="wifi-icon">
                            <svg width="20" height="20" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="8" y="16" width="48" height="16" rx="3" />
                                <rect x="6" y="32" width="52" height="14" rx="3" />
                                <rect x="14" y="20" width="12" height="8" rx="2" />
                                <rect x="38" y="20" width="12" height="8" rx="2" />
                                <line x1="10" y1="46" x2="10" y2="54" />
                                <line x1="54" y1="46" x2="54" y2="54" />
                            </svg>
                        </div>
                        <span class="amenity-text">مفروشة</span>
                    </div>

                    <!-- Other amenities remain same, just add d-flex align-items-center gap-2 -->
                </div>
            </div>
        </div>
    </div>
</div>
`;
}
displayPost();
function ownerChat(){
    console.log("hello");
    
    const whatsappURL = `https://wa.me/${CurrentPost.ownernumber}`;
    window.open(whatsappURL, '_blank');
}

function typeOfHousing() {
    console.log(CurrentPost.typeofhosing);
    
    if (CurrentPost.typeofhosing === "apartment") return "شقة كاملة";
    if (CurrentPost.typeofhosing === "single") return "غرفة خاصة";
    if (CurrentPost.typeofhosing === "shared") return "غرفة مشتركة";

    return "غير محدد";
}
