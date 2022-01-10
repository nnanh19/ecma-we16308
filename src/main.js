import Navigo from "navigo";

const router = new Navigo();

router.on({
    "/": () => {
        console.log("Home Page");
    },
    "/about": () => {
        console.log("About Page");
    },
    "/product": () => {
        console.log("Product Page");
    },
});

router.notFound(() => console.log("Not Found Page"));

router.resolve();

// class KhuanBanh {
//     constructor(luongDuong, luongBot) {
//         this.duong = luongDuong;
//         this.bot = luongBot;
//     }

//     showInfo() {
//         console.log(`
//             Lượng đường: ${this.duong}
//             Lượng Bột: ${this.bot}
//         `);
//     }
// }

// const banhDeo = new KhuanBanh(10, 20);
// banhDeo.showInfo();
// console.log(banhDeo.duong);
