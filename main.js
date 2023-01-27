document.querySelector(".ready__no").addEventListener("click", () => {
    alert("آماده باش بچه");
});

document.querySelector(".ready__yes").addEventListener("click", () => {
    document.querySelector(".q__1").classList.remove("hidden");
});

let qbtns = document.querySelectorAll(".a__1__btn");
let counter = 0;
let counter2 = 0;
qbtns.forEach((e) => {
    e.addEventListener("click", () => {
        counter++;
        if (counter >= 5) {
            document.querySelector(".find__a").classList.remove("hidden");
        } else {
            document.querySelector(".find__a").classList.add("hidden");
        }

        if (e.classList.contains("a__btn__12")) {
            counter2++;
            counter2 <= 8 ||
                document.querySelector(".q__2").classList.remove("hidden");
        }
    });
});

let qbtns2 = document.querySelectorAll(".a__2__btn");

qbtns2.forEach((e) => {
    e.addEventListener("click", () => {
        if (e.classList.contains("a__btn__24")) {
            e.classList.add("rotate");
            document.querySelector(".wrong__a").classList.remove("hidden");
        } else if (e.classList.contains("a__btn__22")) {
            document.querySelector(".q__3").classList.remove("hidden");
        }
    });
});

document.querySelector(".a__btn__31").addEventListener("click", () => {
    document.querySelector(".q__4").classList.remove("hidden");
});

document.querySelector(".a__btn__44").addEventListener("click", () => {
    document.querySelector(".q__5").classList.remove("hidden");
});

let fName = document.querySelector(".f__name");
let ok = document.querySelector(".a__btn__51");
fName.addEventListener("click", () => {
    ok.classList.add("change__bg");
});

ok.addEventListener("click", () => {
    alert("خیخیخیخیخیخیخیخی ۱");
});
