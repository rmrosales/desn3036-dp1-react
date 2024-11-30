// if (typeof window !== "undefined" && typeof document !== "undefined") {
//     const hamburger = document.querySelector(".hamburger");
//     const navMenu = document.querySelector(".nav-menu");
//     const menuItems = document.querySelectorAll(".nav-link");

//     // Add event listener to hamburger menu
//     hamburger.addEventListener("click", mobileMenu);

//     function mobileMenu() {
//         hamburger.classList.toggle("active");
//         navMenu.classList.toggle("active");

//         if (hamburger.classList.contains("active")) {
//             document.body.style.position = "fixed";
//             document.body.style.overflow = "hidden";
//             document.body.style.left = "0";
//             document.body.style.right = "0";
//         } else {
//             document.body.style.position = "static";
//             document.body.style.overflow = "visible";
//         }
//     }

//     // Add event listener to all menu items
//     menuItems.forEach(item => {
//         item.addEventListener("click", closeMobileMenu);
//     });

//     // Close mobile menu function
//     function closeMobileMenu() {
//         hamburger.classList.remove("active");
//         navMenu.classList.remove("active");

//         document.body.style.position = "static";
//         document.body.style.overflow = "visible";
//         document.body.style.left = "0";
//         document.body.style.right = "0";
//     }
// }

console.log("Hello world!");