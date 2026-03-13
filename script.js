// Tự động cuộn mượt khi click link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hàm chọn nhanh gói bánh từ Menu
function selectProduct(productName) {
    const productSelect = document.getElementById('product');
    productSelect.value = productName;
    document.getElementById('order').scrollIntoView({
        behavior: 'smooth'
    });
    // Hiệu ứng nhấp nháy để khách biết đã chọn
    productSelect.style.backgroundColor = '#FFD700';
    setTimeout(() => { productSelect.style.backgroundColor = 'white'; }, 500);
}

// Xử lý gửi đơn hàng (Giả lập)
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const product = document.getElementById('product').value;

    alert(`Cảm ơn ${name}! Nhà Vịt đã nhận đơn hàng cho: ${product}. Chúng mình sẽ gọi xác nhận ngay vào số ${phone} nhé!`);
    
    this.reset();
});