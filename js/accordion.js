'use sctrick';
const btns = document.querySelectorAll('.feature__link');
const lists = document.querySelectorAll('.feature-sub');


//btns.addEventListener('click', () => console.log('1'));

//for (let i = 0; i < btns.length; i++) {
//    btns[i].addEventListener('click', () => {
//        btns[i].classList.toggle('feature__link_active');
//    });
//}

btns.forEach((btnItem, index) => {
    //кликаем на кнопку
    btnItem.addEventListener('click', () => {
        // перебираем все кнопки и удалим у всех класс feature__link_active если он есть
        btns.forEach((btnItem) => {
            btnItem.classList.remove('feature__link_active');
        });
        // той кнопке на которую мы кликнули мы добавляем этот класс
        btnItem.classList.add('feature__link_active');
        // перебираем весь список и добавляем класс hidden всем элементам
        lists.forEach((listItem) => {
            listItem.classList.add('hidden');
        });
        // удаляем класс списску под индексом равной кнопке
        lists[index].classList.remove('hidden');
    });
});