// Sample product data
const products = [
    {
        id: 1,
        title: "Apple iPhone 14 (Blue, 128 GB)",
        image: "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/3/5/l/-original-imaghx9q5rvcdghy.jpeg",
        price: "₹61,999",
        originalPrice: "₹69,900",
        discount: "11% off"
    },
    {
        id: 2,
        title: "Samsung Galaxy S23 Ultra 5G (Green, 256 GB)",
        image: "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/k/l/l/-original-imagmg6gz3bsgan7.jpeg",
        price: "₹1,24,999",
        originalPrice: "₹1,34,999",
        discount: "7% off"
    },
    {
        id: 3,
        title: "OnePlus 11 5G (Titan Black, 256 GB)",
        image: "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/o/n/3/-original-imagmhesxxhvkj4r.jpeg",
        price: "₹61,999",
        originalPrice: "₹69,999",
        discount: "11% off"
    },
    {
        id: 4,
        title: "realme narzo N55 (Prime Blue, 64 GB)",
        image: "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/l/8/k/-original-imagp7zsyh4xphfg.jpeg",
        price: "₹9,999",
        originalPrice: "₹12,999",
        discount: "23% off"
    },
    {
        id: 5,
        title: "Redmi 12 5G (Jade Black, 128 GB)",
        image: "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/2/6/l/-original-imagtc5fzkmhxvdy.jpeg",
        price: "₹11,999",
        originalPrice: "₹14,999",
        discount: "20% off"
    },
    {
        id: 6,
        title: "OPPO Reno8 5G (Shimmer Gold, 128 GB)",
        image: "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/n/j/d/-original-imaghxcpjgjgdhgr.jpeg",
        price: "₹29,999",
        originalPrice: "₹35,999",
        discount: "16% off"
    },
    {
        id: 7,
        title: "vivo T2x 5G (Aurora Gold, 128 GB)",
        image: "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/1/9/o/-original-imagpgxggq8yxh2k.jpeg",
        price: "₹14,999",
        originalPrice: "₹18,999",
        discount: "21% off"
    },
    {
        id: 8,
        title: "Motorola edge 40 (Nebula Green, 256 GB)",
        image: "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/5/w/g/edge-40-pay40014in-motorola-original-imagpgx8gz3xznzh.jpeg",
        price: "₹27,999",
        originalPrice: "₹34,999",
        discount: "20% off"
    }
];

// Load products
document.addEventListener('DOMContentLoaded', function() {
    const productsContainer = document.getElementById('products-container');
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <div class="product-title">${product.title}</div>
            <div class="product-price">${product.price} <span class="product-original-price">${product.originalPrice}</span> <span class="product-discount">${product.discount}</span></div>
            <button class="add-to-cart" data-id="${product.id}">ADD TO CART</button>
        `;
        productsContainer.appendChild(productCard);
    });

    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            const product = products.find(p => p.id == productId);
            alert(`Added to cart: ${product.title}`);
        });
    });

    // Countdown timer
    startCountdown();
});

// Countdown timer function
function startCountdown() {
    let countdownElement = document.getElementById('countdown');
    let hours = 23;
    let minutes = 59;
    let seconds = 59;

    setInterval(function() {
        seconds--;
        if (seconds < 0) {
            seconds = 59;
            minutes--;
        }
        if (minutes < 0) {
            minutes = 59;
            hours--;
        }
        if (hours < 0) {
            hours = 23;
            minutes = 59;
            seconds = 59;
        }

        countdownElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
}
