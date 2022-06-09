let price = 50;
let summary = 'грн';
let speedAnimation = 300;
$('.choseOpen').hide();
$('.item1').hide();
$('.total').text('До сплати: ' + price + summary);


let ingradientPrice = {
    fetaPrice: 30,
    mozarellaPrice: 35,
    chederPrice: 30,
    bluPrice: 40,
    parmPrice: 30,
    chickPrice: 50,
    bekonPrice: 50,
    shynkaPrice: 50,
    paperoniPrice: 50,
    alfredoPrice: 10,
    barbequPrice: 10,
    chasnykPrice: 10,
    cornPrice: 15,
    ananasPrice: 15,
    tomatoPrice: 15,
    grubPrice: 15,
    shpunatPrice: 15,
    pizzaVeg: 250,

















};


// 1. функція зміни цін на всі інградієнти (obj,%,+)


$('#chease').click(function () {
    $('#chooseChease').slideToggle(speedAnimation);
});

//..
//мясо
//соуси
//овочі


// feta 
$('.fetaGroup').click(function () {
    $('.fetaGroup').hide();
    $('#fetaHide').show();
    price += ingradientPrice.fetaPrice;
    $('.total').text('До сплати: ' + price + summary);
})
$('#fetaHide').click(function () {
    $('#fetaHide').hide();
    $('.fetaGroup').show();
    price -= ingradientPrice.fetaPrice;
    $('.total').text('До сплати: ' + price + summary);
})

$('.mozaGroup').click(function () {
    $('.mozaGroup').hide();
    $('#mozaHide').show();
    price += ingradientPrice.mozarellaPrice;
    $('.total').text('До сплати: ' + price + summary);
})
$('#mozaHide').click(function () {
    $('#mozaHide').hide();
    $('.mozaGroup').show();
    price -= ingradientPrice.mozarellaPrice;
    $('.total').text('До сплати: ' + price + summary);
})

$('.chederGroup').click(function () {
    $('.chederGroup').hide();
    $('#chederHide').show();
    price += ingradientPrice.chederPrice;
    $('.total').text('До сплати: ' + price + summary);
})
$('#chederHide').click(function () {
    $('#chederHide').hide();
    $('.chederGroup').show();
    price -= ingradientPrice.chederPrice;
    $('.total').text('До сплати: ' + price + summary);
})

$('.bluGroup').click(function () {
    $('.bluGroup').hide();
    $('#bluHide').show();
    price += ingradientPrice.chederPrice;
    $('.total').text('До сплати: ' + price + summary);
})
$('#bluHide').click(function () {
    $('#bluHide').hide();
    $('.bluGroup').show();
    price -= ingradientPrice.chederPrice;
    $('.total').text('До сплати: ' + price + summary);
})

$('.parmGroup').click(function () {
    $('.parmGroup').hide();
    $('#parmHide').show();
    price += ingradientPrice.chederPrice;
    $('.total').text('До сплати: ' + price + summary);
})
$('#parmHide').click(function () {
    $('#parmHide').hide();
    $('.parmGroup').show();
    price -= ingradientPrice.chederPrice;
    $('.total').text('До сплати: ' + price + summary);
})





$('#meat').click(function () {
    $('#chooseMeat').slideToggle(speedAnimation);
});

$('.chickenGroup').click(function () {
    $('.chickenGroup').hide();
    $('#chickenHide').show();
    price += ingradientPrice.chickPrice;
    $('.total').text('До сплати: ' + price + summary);
})
$('#chickenHide').click(function () {
    $('#chickenHide').hide();
    $('.chickenGroup').show();
    price -= ingradientPrice.chickPrice;
    $('.total').text('До сплати: ' + price + summary);
})

$('.bekonGroup').click(function () {
    $('.bekonGroup').hide();
    $('#bekonHide').show();
    price += ingradientPrice.bekonPrice;
    $('.total').text('До сплати: ' + price + summary);
})
$('#bekonHide').click(function () {
    $('#bekonHide').hide();
    $('.bekonGroup').show();
    price -= ingradientPrice.bekonPrice;
    $('.total').text('До сплати: ' + price + summary);
})

$('.shynkaGroup').click(function () {
    $('.shynkaGroup').hide();
    $('#shynkaHide').show();
    price += ingradientPrice.shynkaPrice;
    $('.total').text('До сплати: ' + price + summary);
})
$('#shynkaHide').click(function () {
    $('#shynkaHide').hide();
    $('.shynkaGroup').show();
    price -= ingradientPrice.shynkaPrice;
    $('.total').text('До сплати: ' + price + summary);
})

$('.paperoniGroup').click(function () {
    $('.paperoniGroup').hide();
    $('#paperoniHide').show();
    price += ingradientPrice.paperoniPrice;
    $('.total').text('До сплати: ' + price + summary);
})
$('#paperoniHide').click(function () {
    $('#paperoniHide').hide();
    $('.paperoniGroup').show();
    price -= ingradientPrice.paperoniPrice;
    $('.total').text('До сплати: ' + price + summary);
})


$('#sous').click(function () {
    $('#chooseSous').slideToggle(speedAnimation);
});

$('.alfredoGroup').click(function () {
    $('.alfredoGroup').hide();
    $('#alfredoHide').show();
    price += ingradientPrice.alfredoPrice;
    $('.total').text('До сплати: ' + price + summary);
})
$('#alfredoHide').click(function () {
    $('#alfredoHide').hide();
    $('.alfredoGroup').show();
    price -= ingradientPrice.alfredoPrice;
    $('.total').text('До сплати: ' + price + summary);
})

$('.barbequGroup').click(function () {
    $('.barbequGroup').hide();
    $('#barbequHide').show();
    price += ingradientPrice.barbequPrice;
    $('.total').text('До сплати: ' + price + summary);
})
$('#barbequHide').click(function () {
    $('#barbequHide').hide();
    $('.barbequGroup').show();
    price -= ingradientPrice.barbequPrice;
    $('.total').text('До сплати: ' + price + summary);
})

$('.chasnykGroup').click(function () {
    $('.chasnykGroup').hide();
    $('#chasnykHide').show();
    price += ingradientPrice.barbequPrice;
    $('.total').text('До сплати: ' + price + summary);
})
$('#chasnykHide').click(function () {
    $('#chasnykHide').hide();
    $('.chasnykGroup').show();
    price -= ingradientPrice.barbequPrice;
    $('.total').text('До сплати: ' + price + summary);
})



$('#veg').click(function () {
    $('#choseVeg').slideToggle(speedAnimation);
});

$('.cornGroup').click(function () {
    $('.cornGroup').hide();
    $('#cornHide').show();
    price += ingradientPrice.cornPrice;
    $('.total').text('До сплати: ' + price + summary);
})
$('#cornHide').click(function () {
    $('#cornHide').hide();
    $('.cornGroup').show();
    price -= ingradientPrice.cornPrice;
    $('.total').text('До сплати: ' + price + summary);
})

$('.ananasGroup').click(function () {
    $('.ananasGroup').hide();
    $('#ananasHide').show();
    price += ingradientPrice.ananasPrice;
    $('.total').text('До сплати: ' + price + summary);
})
$('#ananasHide').click(function () {
    $('#ananasHide').hide();
    $('.ananasGroup').show();
    price -= ingradientPrice.ananasPrice;
    $('.total').text('До сплати: ' + price + summary);
})

$('.tomatoGroup').click(function () {
    $('.tomatoGroup').hide();
    $('#tomatoHide').show();
    price += ingradientPrice.tomatoPrice;
    $('.total').text('До сплати: ' + price + summary);
})
$('#tomatoHide').click(function () {
    $('#tomatoHide').hide();
    $('.tomatoGroup').show();
    price -= ingradientPrice.tomatoPrice;
    $('.total').text('До сплати: ' + price + summary);
})

$('.grubGroup').click(function () {
    $('.grubGroup').hide();
    $('#grubHide').show();
    price += ingradientPrice.grubPrice;
    $('.total').text('До сплати: ' + price + summary);
})
$('#grubHide').click(function () {
    $('#grubHide').hide();
    $('.grubGroup').show();
    price -= ingradientPrice.grubPrice;
    $('.total').text('До сплати: ' + price + summary);
})

$('.shpunatGroup').click(function () {
    $('.shpunatGroup').hide();
    $('#shpunatHide').show();
    price += ingradientPrice.shpunatPrice;
    $('.total').text('До сплати: ' + price + summary);
})
$('#shpunatHide').click(function () {
    $('#shpunatHide').hide();
    $('.shpunatGroup').show();
    price -= ingradientPrice.shpunatPrice;
    $('.total').text('До сплати: ' + price + summary);
})

$('.peretsGroup').click(function () {
    $('.peretsGroup').hide();
    $('#peretsHide').show();
    price += ingradientPrice.shpunatPrice;
    $('.total').text('До сплати: ' + price + summary);
})
$('#peretsHide').click(function () {
    $('#peretsHide').hide();
    $('.peretsGroup').show();
    price -= ingradientPrice.shpunatPrice;
    $('.total').text('До сплати: ' + price + summary);
})



$('#add').click(function () {
    $('#choseAdd').slideToggle(speedAnimation);
});

$('.pizzaVeg').click(function () {
    $('.peretsGroup').hide();
    $('#peretsHide').show();
    $('.shpunatGroup').hide();
    $('#shpunatHide').show();
    $('.grubGroup').hide();
    $('#grubHide').show();
    $('#tomatoHide').show();
    $('.tomatoGroup').hide();
    $('.ananasGroup').hide();
    $('#ananasHide').show();
    $('.cornGroup').hide();
    $('#cornHide').show();
    $('.chasnykGroup').hide();
    $('#chasnykHide').show();
    $('.alfredoGroup').hide();
    $('#alfredoHide').show();
    $('.fetaGroup').hide();
    $('#fetaHide').show();
    $('.chederGroup').hide();
    $('#chederHide').show();
    $('.bluGroup').hide();
    $('#bluHide').show();
    $('.pizzaVeg').hide();
    price += ingradientPrice.pizzaVeg;
    $('.total').text('До сплати: ' + price + summary);
})

$('.pizzaMeat').click(function () {
    $('.peretsGroup').hide();
    $('#peretsHide').show();
    
    $('.grubGroup').hide();
    $('#grubHide').show();
    $('#tomatoHide').show();
    $('.tomatoGroup').hide();
    
    $('.cornGroup').hide();
    $('#cornHide').show();
    $('.chasnykGroup').hide();
    $('#chasnykHide').show();
    $('.barbequGroup').hide();
    $('#barbequHide').show();
    $('.fetaGroup').hide();
    $('#fetaHide').show();
    $('.chederGroup').hide();
    $('#chederHide').show();
    $('.bluGroup').hide();
    $('#bluHide').show();
    $('.pizzaMeat').hide();
    $('#paperoniHide').show();
    $('.paperoniGroup').hide();
    $('#shynkaHide').hide();
    $('.chickenGroup').hide();
    $('#chickenHide').show();
    $('.shynkaGroup').show();
    
    price += ingradientPrice.pizzaVeg;
    $('.total').text('До сплати: ' + price + summary);
})


$('.pizzaChease').click(function () {
    
    
   
    $('#tomatoHide').show();
    $('.tomatoGroup').hide();
    
    $('.cornGroup').hide();
    $('#cornHide').show();
    $('.chasnykGroup').hide();
    $('#chasnykHide').show();
   
    $('.fetaGroup').hide();
    $('#fetaHide').show();
    $('.chederGroup').hide();
    $('#chederHide').show();
    $('.bluGroup').hide();
    $('#bluHide').show();
    $('.mozaGroup').hide();
    $('#mozaHide').show();
    $('#parmHide').hide();
    $('.parmGroup').show();
    $('.pizzaChease').hide();
    price += ingradientPrice.pizzaVeg;
    $('.total').text('До сплати: ' + price + summary);
})















//...
