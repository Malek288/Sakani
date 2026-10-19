

function createCard(post, index) {
    const card = document.createElement('div');
    card.className = 'card h-100 shadow-sm';

    const img = document.createElement('img');
    img.src = post.image || 'assets/img/listing-room-2.jpeg';
    img.className = 'card-img-top';
    img.alt = post.title;

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const title = document.createElement('h6');
    title.className = 'card-title';
    title.textContent = post.title;

    const desc = document.createElement('p');
    desc.className = 'card-text';
    desc.textContent = post.description;

    const bottom = document.createElement('div');
    bottom.className = 'd-flex justify-content-between align-items-center mt-3';

    const price = document.createElement('div');
    const priceText = document.createElement('h6');
    priceText.textContent = post.price;
    const period = document.createElement('p');
    period.className = 'mb-0';
    period.textContent = 'شهرياً';
    price.append(priceText, period);

    const link = document.createElement('a');
    link.href = `listing-details.html?postIndex=${index}`;
    link.className = 'btn btn-primary';
    link.textContent = 'عرض التفاصيل';

    bottom.append(price, link);
    cardBody.append(title, desc, bottom);
    card.append(img, cardBody);
    return card;
}

const posts = localStorage.getItem('dataObj') ? JSON.parse(localStorage.getItem('dataObj')) : [];

// [
//     { title: "شقة للإيجار في الزمالك", city: "القاهرة", price: "15000 جنيه/شهر", description: "شقة مفروشة 3 غرف وصالة، الدور الخامس، قريبة من المترو" },
//     { title: "فيلا للبيع في الساحل الشمالي", city: "مطروح", price: "4500000 جنيه", description: "فيلا 4 غرف نوم، حمام سباحة خاص، إطلالة مميزه على البحر قريبه من الساحل الشمالي" },
//     { title: "محل تجاري للإيجار", city: "الإسكندرية", price: "8000 جنيه/شهر", description: "محل 50 متر في شارع رئيسي، مناسب لجميع الأنشطة التجارية" },
//     { title: "أرض زراعية للبيع", city: "الفيوم", price: "350000 جنيه", description: "أرض 2 فدان، بها بئر ماء، على الطريق الرئيسي ومكان مميز" }
// ];

const container = document.getElementById('listings-container');

posts.forEach((post, index) => {
    const col = document.createElement('div');
    col.className = 'col-sm-12 col-md-6 mb-4';
    col.appendChild(createCard(post, index));
    container.appendChild(col);
});
