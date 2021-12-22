// FIXME Assurez vous que ces deux variables contiennent bien les bonnes choses ;-)
let player = $('.player__video').first();
let progress = $('.progress__filled').first();
let toggle = true;

$('.toggle').click(function () {
    if (toggle) {
        $(this).html("||");
        toggle = false;
        player.get(0).play();
    }
    else {
        $(this).html("►");
        toggle = true;
        player.get(0).pause();
    }
});

$('button').click(function () {
    switch ($(this).attr("data-skip")) {
        case "-10":
            player[0].currentTime -= 10;
            break;
        case "25":
            player[0].currentTime += 25;
            break;
    }
})

$('#volume').on("change", function () {
    player[0].volume = this.value;
})

