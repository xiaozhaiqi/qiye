
let m = 0;
$(".banner_main li").mouseenter(function () {
    let index = $(this).index();
    $(".pager").removeClass("active").eq(index).addClass("active")
    $(".banner_main li").addClass("active").eq(index).removeClass("active")
    m = index;
})

function move() {
    m++;
    if (m === 6) {
        m = 0;
    }
    $(".pager").removeClass("active").eq(m).addClass("active")
    $(".banner_main li").removeClass("active").eq(m).addClass("active")
}

let t = setInterval(move, 2000);
$(".pager").mouseenter(function () {
    clearInterval(t);
})
$(".pager").mouseleave(function () {
    t = setInterval(move, 2000);
})
