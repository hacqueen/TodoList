// let mashina = ["Damas", "Lacetti", "Kaptiva", "Malibu"];
// mashina.splice(2, 0, "tesla");
// const inomarka = new Array("Tesla", "Bmw", "Lamborghini", "Toxoon", "Mersedez");
// let mix = mashina.concat(inomarka);
// console.log(mashina.concat(inomarka));
// console.log(mix.length);
// array yaratishni birinchi yo'li,
//[] qavslar yordamida
// mashina.push("Aveo"); // arrayni oxiriga
// mashina.unshift("Nexia"); //arrayni boshiga
// console.log(mashina);
// const inomarka = new Array("Tesla", "Bmw", "Lamborghini", "Toxoon", "Mersedez");
// array yaratishni ikkinchi yoli new va Array()
//keywordlaridan foydalanish
// inomarka.pop();
// inomarka.shift();
// console.log(inomarka);

// mashina.push("lamborghini");
// mashina.unshift("audi");

// console.log(mashina.length);

// alert(hayvonlar.concat(mashina));

// mashina.splice(2, 0, "tesla");
// console.log(mashina);
// console.log(mashina.join());
// mashina.pop();
// const deletedItem = mashina.pop();
// mashina.shift();
// const deletedItem = mashina.shift();
// console.log(deletedItem);
// mashina.splice(2, 0, "tesla");
// console.log(mashina.join());

// o'chirilgan elementni korish
// const colors = ranglar.pop();

// ranglar[1] = "pushti";
// 1-indexdagi elementni almashtirish

// arrayni boshidan elementni ochirib yuborish
// ranglar.shift();

// console.log(ranglar.length);
// arrayni uzunligini aniqlash

// const result = ranglar.concat(languages);
// 2 yoki undan ortiq arraylarni birlashtirishda foydalaniladi
// console.log(result);

//5, 6, 7 tomonlari bolgan uchburchakning yuzini hisoblang
// base =7
// height =6
// a = (h * b)/2

// let b = 7;
// let h = 6;
// let c = (h * b) / 2;
// alert("Uchburchakning yuzi " + c + "ga teng");

// ikkita o'zgaruvchini yigindisini hisoblang, agar ikkala o'zgaruvchi teng
// bolsa, natijasi shu o'zgaruvchini 3ga kopaytmasiga teng bolsin
// nested object literal
// let users = {
//   Alice: {
//     height: 183,
//     eyecolor: "hazel",
//   },
//   Bob: {
//     height: 172,
//     eyecolor: "blue",
//   },
// };
// console.log(users.Bob.height);

// let quyon = {
//   rangi: "black",
//   avgLife: 15,
//   meal: "piyoz",
// };
// console.log(quyon.rangi);

// let foydalanuvchilar = {
//   Alice: {
//     height: 183,
//     eyecolor: "hazel",
//   },
//   Bob: {
//     height: 172,
//     eyecolor: "blue",
//   },
// };
// console.log(foydalanuvchilar);

// let users = [
//   {
//     name: "Alice",
//     height: 183,
//     eyecolor: "hezel",
//   },
//   {
//     name: "Bob",
//     height: 172,
//     eyecolor: "blue",
//   },
// ];
// console.log(users[0].eyecolor);

// let kompyuterlar = [
//   {
//     nomi: "hp",
//     videokarta: "RTX 4090",
//     operativka: 12,
//     protsessor: 10,
//     corei: 9,
//   },
//   {
//     nomi: "asus",
//     videokarta: "IntelGraphics",
//     operativka: 12,
//     protsessor: 5,
//     corei: 3,
//   },
// ];
// console.log(kompyuterlar[1].operativka);

// function declaration
// function yosh(tugilganYil) {
//   return 2022 - tugilganYil;
// }
// console.log(yosh(2007));

//function expression
// const yosh = function (tugilganYil) {
//   return 2023 - tugilganYil;
// };
// console.log(yosh(2006));

//arrow function

// const yosh = (tugilganYil) => 2023 - tugilganYil;
// console.log(yosh(2008));

// sharbat => olma, shaftoli
// sharbatni tarkibida x olma, y shaftoli bor
// sharbat (5, 5)

// function sharbat(olma, shaftoli) {
//   let xabar = `Sharbatni tarkibida ${olma} ta olma va ${shaftoli} ta shaftoli bor.`;
//   return xabar;
// }
// console.log(sharbat(7, 3));

// yoshiz, pensiya yoshidan ayrivorishiz kere (60)
// men shuncha yildan keyin pensiyaga chiqaman

// function pensiya(myAge) {
//   let pensiyaga = 60 - myAge;
//   let sms = `Men ${pensiyaga} yildan keyin nafaqaga chiqaman.`;
//   return sms;
// }
// console.log(pensiya(20));

// function pensiyaYoshi(myAge) {
//   return 60 - myAge; // pensiyaga nechi yil qogani
// }
// console.log(`Men ${pensiyaYoshi(15)} yildan keyin pensiyaga chiqaman`);

// // funksiya => ism, kasb;
// // shu odam shu kasbda faoliyat korsatadi
// function foydalanuvchi(ism, kasb) {
//   let xabar = `${ism} ismli foydalanuvchi ${kasb} kasbida faoliyat yuritadi.`;
//   return xabar;
// }
// console.log(foydalanuvchi("Abdulaziz", `o'quvchi`));
// console.log(foydalanuvchi("Bobur", `quruvchi`));

// let i = 1;
// // 10gacha 2ga kopaytirib bersin
// while (i < 10) {
//   console.log(i);
//   i *= 2;
// }

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

//nesting for loop
// for (let tashqi = 0; tashqi < 6; tashqi++) {
//   //0-2 => 0, 1, 2, => har bir iteratsiya uchun ichki loop
//   //iteratsiyalari qayta qayta ishledi
//   for (let ichki = 0; ichki < 4; ichki++) {
//     // 0-3=> 0,1,2,3;

//     console.log(`${tashqi} - ${ichki}`);
//   }
// }
// 12ta oyni ortadagi 10ta kuni

// for (let n = 1; n <= 30; n++) {
//   let natija = "";
//   if (n % 3 == 0) {
//     natija += "Fizz";
//   }
//   if (n % 5 == 0) {
//     natija += "Buzz";
//   }
//   console.log(natija || n);
// }

// let size = "8";
// let board = "";
// for (let y = 0; y < size; y++) {
//   for (let x = 0; x < size; x++) {
//     if ((x + y) % 2 == 0) {
//       board += " ";
//     } else {
//       board += "#";
//     }
//   }
//   board += "\n";
// }
// console.log(board);
// for (let i = 1; i < 25; i *= 2) {
//   console.log(i);
// }

// for (let tashqi = 0; tashqi < 5; tashqi++) {
//   for (let ichki = 1; ichki < 7; tashqi += 2) {
//     console.log(`${tashqi} - ${ichki}`);
//   }
// }

//*************************** TODO  ***********************************/

let myNodelist = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// close button bosilganda joriy list elementi yoqoladi
let close = document.getElementsByClassName("close");
let j;
for (j = 0; j < close.length; j++) {
  close[j].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  };
}

// Add a "checked" symbol when clicking on a list item
let list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

// Create a new list item when clicking on the "Add" button
function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
}
