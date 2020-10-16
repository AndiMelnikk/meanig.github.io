window.onload = function () {
    list_menu = $('.list_menu')[0];
    for (i = 0; i < list_menu.children.length; i++) {
        $(list_menu.children[i]).on('click', test)
    }
};

function test() {
    name_box = this.children[0].children[1].innerHTML;
    switch (name_box) {
        case 'Супермаркет':
            alert("Супермаркет")
            break;
        case 'Доставка з пошти':
            alert("Доставка з пошти")
            break;
        case 'Iнша доставка':
            alert("Iнша доставка")
            break;
        case 'Тахi':
            alert("Тахi")
            break;
        case 'Meanig':
            alert("Meanig")
            break;
        case 'Кошик':
            alert("Кошик")
            break;
    }
}