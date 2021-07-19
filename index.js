
const $buttonNight = document.querySelector(".button-night")
const $pageDark = document.querySelector(".page")
const $header = document.querySelector(".header")
const $heagerIicon = document.querySelector(".heager-icon")
const $content = document.querySelector(".Main-Content")
const $PageTitle = document.querySelector(".Page-title")
const $card1 = document.querySelector(".card-1")
const $card2 = document.querySelector(".card-2")
const $card3 = document.querySelector(".card-3")


const $readButton1 = document.querySelector(".read-button1")
const $readButton2 = document.querySelector(".read-button2")
const $readButton3 = document.querySelector(".read-button3")

const $headerText1 = document.querySelector(".header-texst1")
const $headerText2 = document.querySelector(".header-texst2")
const $headerText3 = document.querySelector(".header-texst3")

const $Text1 = document.querySelector(".texst-1")
const $Text2 = document.querySelector(".texst-2")
const $Text3 = document.querySelector(".texst-3")

const $number1 = document.querySelector(".number-1")
const $number2 = document.querySelector(".number-2")
const $number3 = document.querySelector(".number-3")

const $nameAvtor1 = document.querySelector(".name-avtor1")
const $nameAvtor2 = document.querySelector(".name-avtor2")
const $nameAvtor3 = document.querySelector(".name-avtor3")

const $date1 = document.querySelector(".date1")
const $date2 = document.querySelector(".date2")
const $date3 = document.querySelector(".date3")







function Dark() {
    $buttonNight.classList.toggle("dark-button")

    if ($buttonNight.innerHTML == "Дневная версия сайта") {
        $buttonNight.innerText = "Ночная версия сайта"
    }
    else {
        $buttonNight.innerText = "Дневная версия сайта"
    }

    $pageDark.classList.toggle("dark-button");
    $header.classList.toggle("header-dark");
    $heagerIicon.classList.toggle("heager-icon-dark")
    $content.classList.toggle("dark-button")
    $PageTitle.classList.toggle("dark-button")
    $card1.classList.toggle("cards-dark");
    $card2.classList.toggle("cards-dark");
    $card3.classList.toggle("cards-dark");
    $readButton1.classList.toggle('read-button-color')
    $readButton2.classList.toggle('read-button-color')
    $readButton3.classList.toggle('read-button-color')
    $headerText1.classList.toggle("white")
    $headerText2.classList.toggle("white")
    $headerText3.classList.toggle("white")

    $Text1.classList.toggle("white");
    $Text2.classList.toggle("white");
    $Text3.classList.toggle("white");

    $number1.classList.toggle("white");
    $number2.classList.toggle("white");
    $number3.classList.toggle("white");

    $nameAvtor1.classList.toggle("white");
    $nameAvtor2.classList.toggle("white");
    $nameAvtor3.classList.toggle("white");

    $date1.classList.toggle("white")
    $date2.classList.toggle("white")
    $date3.classList.toggle("white")







}

$buttonNight.addEventListener("click", Dark);


