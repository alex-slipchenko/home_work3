
// Task 1 ============================================
/* Добавьте на блок .div-1 событие клик и по клику запуск функции t1. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-1.  */
let div = document.querySelector('.div-1');
function t1() {
    let out = document.querySelector('.out-1');
    return out.innerHTML = div.innerText;


}
div.onclick = () => {
    t1()
};
// ваше событие здесь!!!

// Task 2 ============================================
/*  Добавьте на блок .div-2 событие клик и по клику запуск функции t2. Функция должна возвращать true или false в зависимости от того, нажата ли клавиша alt или нет в момент клика. Также, выводите на экран результат. Вывод осуществляется в out-2. */
let div2 = document.querySelector('.div-2');
function t2(event) {
    // event.altKey == true ? return true: return false;
    if (event.altKey == true) {
        return true;
    } else {
        return false;
    }

}
div2.onclick = (event) => {
    document.querySelector('.out-2').innerHTML = t2(event);
}
// ваше событие здесь!!!


// Task 3 ============================================
/*  Добавьте на блок .div-3 событие клик. При клике - увеличивайте ширину блока на 5px. Каждый клик - увеличение ширины на 5px. 10 кликов - на 50px. Ширину выводите в out-3. */

let w3 = 75;
let div3 = document.querySelector('.div-3');
function t3() {
    w3 += 5;
    div3.style.width = `${w3}px`;
}
div3.onclick = () => {
    t3();
    document.querySelector('.out-3').innerHTML = div3.style.width;
}
// ваше событие здесь!!!


// Task 4 ============================================
/*  Добавьте на блок .div-4 событие двойной клик и по двойному клику запуск функции t4. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-4. */
let div4 = document.querySelector('.div-4');
function t4() {
    return div4.textContent;

}
div4.ondblclick = () => {
    document.querySelector('.out-4').innerHTML = t4();

}
// ваше событие здесь!!!

// Task 5 ============================================
/*  Дан блок .div-5.active. Добавьте на него событие двойной клик, по которому удалется класс active если он есть и добавляется если такого класса нет. */
let div5 = document.querySelector('.div-5');
function t5() {
    console.log();
    div5.classList.toggle('active');
}
div5.ondblclick = () => {
    t5()
}
// ваше событие здесь!!!

// Task 6 ============================================
/*  Дан блок .div-6 и список .ul-6. При двойном клике на блоке скрывайте .ul-6 еcли он показан и показывайте если скрыт. Скрытие и показ делайте через добавление - удаление класса .hide */
let div6 = document.querySelector('.div-6');
function t6() {
    document.querySelector('.ul-6').classList.toggle('hide');
}
div6.ondblclick = () => {
    t6()
}
// ваше событие здесь!!!


// Task 7 ============================================
/*  Дан блок .div-7. При клике правой кнопкой мыши на блоке добавляйте ему класс .active. При повторном клике - удаляйте. */
let div7 = document.querySelector('.div-7');
function t7() {
    div7.classList.toggle('active');
}
div7.oncontextmenu = () => {
    t7()
}
// ваше событие здесь!!!

// Task 8 ============================================
/*  Дано checkbox .ch-8. Повесьте на него событие onchange при котором на документе отключается клик правой кнопкой мыши если checkbox выбран и отключает если не выбран. */
let checkbox = document.querySelector('.ch-8');
function t8() {
    if (checkbox.checked) {
        document.oncontextmenu = () => false;

    } else {
        document.oncontextmenu = () => true;
    }
}
checkbox.onchange = () => {
    t8();
}
// ваше событие здесь!!!


// Task 9 ============================================
/*  Дан блок .div-9. Внутри блока - изображение 1.png. При клике правой кнопкой мыши  - меняйте изображение на 2.png. Надеюсь вы догадаетесь изменить только src изображения? */
let div9 = document.querySelector('.div-9>img');
function t9() {
    div9.setAttribute('src', 'img/2.png');
}
div9.oncontextmenu = () => {
    t9();
}
// ваше событие здесь!!!


// Task 10 ============================================
/*  Дан блок .div-10. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. */
let div10 = document.querySelector('.div-10>img');
function t10() {
    div10.src = 'img/2.png.';
}
div10.onmouseover = () => {
    t10()
};

// ваше событие здесь!!!

// Task 11 ============================================
/*  Дан блок .div-11. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. При уведении мыши - mouseleave - возвращайте исходное изображение. */
let div11 = document.querySelector('.div-11>img');
function t11() {

    if (div11.getAttribute('src') == 'img/1.png') {
        div11.setAttribute('src', 'img/2.png');
    } else {
        div11.setAttribute('src', 'img/1.png');
    }
  
 
}

 div11.onmouseenter = t11;
 div11.onmouseleave = t11;
// ваше событие здесь!!!

// Task 12 ============================================
/*  Дан блок .div-12. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. */
 let div12 = document.querySelector('.div-12'); 
// функцию пишите самостоятельно
function t12() {
     document.oncontextmenu = () => false;
    div12.classList.add('active');
}

div12.onmousedown = () => {
    t12();
};


// ваше событие здесь!!!


// Task 13 ============================================
/*  Дан блок .div-13. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. Добавьте ему событие mouseup - при отпускании мыши - удаляйте класс active. */
let div13 = document.querySelector('.div-13');
function t13() {
    if (div13.classList.contains('active') == true) {
        div13.classList.remove('active'); 
    } else {
        div13.classList.add('active');
    }
}
div13.onmousedown = t13;
div13.onmouseup = t13;
// функцию пишите самостоятельно
// ваше событие здесь!!!


// Task 14 ============================================
/*  Дан блок .div-14. При нажатии кнопки b-14 добавляйте к нему событие onclick - которое, при клике добавляем блоку div-14 класс active. */

function t14() {
    let div = document.querySelector('.div-14');
    div.classList.add('active');
}
document.querySelector('.b-14').onclick = t14;


// Task 15 ============================================
/*  Дан блок .div-15. Добавьте на него событие move. При каждом движении мыши увеличивайте число внутри на 1. */
let count = 1;
function t15() {
    document.querySelector('.div-15').innerHTML = count;
    count++;
}
document.querySelector('.div-15').onmousemove = t15;
// ваше событие здесь!!!


// Task 16 ============================================
/*  Дан блок .div-16. Добавьте на него событие move. При каждом движении мыши увеличивайте ширину блока на 1px. */
let countWidth = 75;
function t16() {
    document.querySelector('.div-16').style.width = `${countWidth}px`;
    countWidth++;
}
document.querySelector('.div-16').onmousemove = t16;
// ваше событие здесь!!!

// Task 17 ============================================
/*  Дано две кнопки - b-17_on и b-17_off. Напишите фукнции t17On и t17Off которые включают и отключают событие move в задании 16. */

function t17On() {
    document.querySelector('.div-16').onmousemove = t16;
}
function t17Off() {
    document.querySelector('.div-16').onmousemove = false;
}

// ваше событие здесь!!!
// ваше событие здесь!!!
document.querySelector('.b-17_on').onclick = t17On;
document.querySelector('.b-17_off').onclick = t17Off;


// Task 18 ============================================
/*  Дан блок div-18. Напишите фукнцию t18 которая выводит в данный блок его ширину при событии onmouseenter. */
let div18 = document.querySelector('.div-18');
function t18() {
    console.log(getComputedStyle(div18).width);
    
    div18.innerHTML = `${getComputedStyle(div18).width}`;
}
// ваше событие здесь!!!
div18.onmouseenter = t18;
// Task 19 ============================================
/*  Дан блок div-19. Напишите фукнцию t19 которая выводит в данный блок его классы при событии onmouseout. */
let div19 = document.querySelector('.div-19');
function t19() {
    let out = '';
    for (let name of div19.classList) {
        out += `${name}`;
    }
    console.log(div19.classList.value);
    div19.textContent = out;
}
// ваше событие здесь!!!
div19.onmouseout = t19;

// Task 20 ============================================
/*  Дан элемент progress. Напишите фукнцию t20 которая увеличивает его value на 1 при каждом событии mousemove внутри progress. */

let prog = document.querySelector('progress');

 let progValue = 10;
function t20() {
    progValue++;
    console.log(prog);
    prog.value = progValue;
    
}
prog.onmousemove = t20;
// ваше событие здесь!!!