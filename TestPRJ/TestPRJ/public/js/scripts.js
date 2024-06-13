// script.js
const container = document.querySelector('.cha');
const box = document.getElementById('box');

// Tạo ngẫu nhiên các small-box
const createRandomBoxes = (count) => {
    for (let i = 0; i < count; i++) {
        const smallBox = document.createElement('div');
        smallBox.className = 'small-box';

        // Tạo vị trí ngẫu nhiên
        const x = Math.random() * 450; // Giới hạn trong chiều rộng của .box (500px - 50px)
        const y = Math.random() * 300; // Giới hạn trong chiều cao của .box (350px - 50px)
        const z = (Math.random() * 400) - 200; // Giới hạn chiều sâu -200px đến 200px

        smallBox.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;

        // Tính độ sáng dựa trên vị trí z
        const brightness = 0.1 + (1 - Math.abs(z) / 200) * 0.9; // Giá trị từ 0.1 đến 1
        smallBox.style.filter = `brightness(${brightness})`;

        // Lưu lại transform ban đầu để sử dụng khi hover
        smallBox.dataset.originalTransform = smallBox.style.transform;
        smallBox.dataset.originalBrightness = brightness;

        box.appendChild(smallBox);

        // Thêm sự kiện hover
        smallBox.addEventListener('mouseenter', () => {
            smallBox.style.transform = smallBox.dataset.originalTransform + ' translateZ(100px)';
            smallBox.style.filter = 'brightness(1)';
        });

        smallBox.addEventListener('mouseleave', () => {
            smallBox.style.transform = smallBox.dataset.originalTransform;
            smallBox.style.filter = `brightness(${smallBox.dataset.originalBrightness})`;
        });

        // Thêm sự kiện click
        smallBox.addEventListener('click', () => {
            alert(`Small-box clicked!`);
        });
    }
};

// Gọi hàm tạo ngẫu nhiên 10 small-box
createRandomBoxes(10);

// container.addEventListener('mousemove', (e) => {
//     const rect = container.getBoundingClientRect();
//     const x = (e.clientX - rect.left) / rect.width - 0.5;
//     const y = (e.clientY - rect.top) / rect.height - 0.5;

//     box.style.transform = `rotateY(${x * 30}deg) rotateX(${-y * 30}deg)`;
// });
