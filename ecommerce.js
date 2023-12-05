const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Banana Roll",
    price: 10000,
    colors: [
      {
        code: "black",
        img: "img/bananarollpic.jpg",
      }
    ],
  },
  {
    id: 2,
    title: "Banana Lumer",
    price: 10000,
    colors: [
      {
        code: "lightgray",
        img: "img/piscokmozapic.jpg",
      }
    ],
  },
  {
    id: 3,
    title: "Piscok Keju",
    price: 10000,
    colors: [
      {
        code: "lightgray",
        img: "img/piscokkejupic.jpg",
      }
    ],
  },
  {
    id: 4,
    title: "Piscok Moza",
    price: 12000,
    colors: [
      {
        code: "black",
        img: "img/bananalumerpic.jpg",
      }
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "Rp." + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
// Atur animasi untuk slider pada saat halaman pertama kali dimuat
window.addEventListener('DOMContentLoaded', (event) => {
  const wrapper = document.querySelector('.sliderWrapper');
  wrapper.classList.add('slide-in');
});
const sliderTitles = document.querySelectorAll('.sliderTitle');

sliderTitles.forEach(title => {
  title.addEventListener('mouseover', () => {
    title.classList.add('animate');
  });

  title.addEventListener('mouseout', () => {
    title.classList.remove('animate');
  });
});
// Ambil semua elemen slider
const sliderItems = document.querySelectorAll('.sliderItem');

// Fungsi untuk menangani pergerakan parallax
function handleParallaxScrolling() {
  // Dapatkan posisi vertikal dari scroll
  const scrollPosition = window.scrollY;

  // Iterasi setiap elemen slider
  sliderItems.forEach((sliderItem, index) => {
    // Atur efek parallax pada elemen slider
    const parallaxValue = scrollPosition * 0.5; // Nilai parallax yang diinginkan (sesuaikan sesuai preferensi)
    sliderItem.querySelector('.sliderImg').style.transform = `translateY(-${parallaxValue}px)`;
  });
}

// Tambahkan event listener untuk mengatur parallax scrolling pada saat scroll
window.addEventListener('scroll', handleParallaxScrolling);

// Panggil fungsi handleParallaxScrolling untuk memastikan efek parallax diatur saat halaman pertama kali dimuat
handleParallaxScrolling();
