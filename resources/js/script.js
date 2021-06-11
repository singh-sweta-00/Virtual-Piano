const WHITE_KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']
const BLACK_KEYS = ['!', '@', '$', '%', '^', '*', '(', 'Q', 'W', 'E', 'T', 'Y', 'I', 'O', 'P', 'S', 'D', 'G', 'H', 'J', 'L', 'Z', 'C', 'V', 'B']
const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')
let btn = document.getElementsByClassName('bttn');
let myId = document.querySelectorAll('.myId');

btn.onclick = () => {
    x.classList.myId('hide');
}

keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
})

document.addEventListener('keydown', e => {
    if (e.repeat) return
    const key = e.key
    const whiteKeyIndex = WHITE_KEYS.indexOf(key)
    const blackKeyIndex = BLACK_KEYS.indexOf(key)

    if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
    if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})



function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0
    noteAudio.play()
    key.classList.add('active')
    setTimeout(() => key.classList.remove("active"), 200);
}

$(document).ready(function() {


    /******** STICKY NAVIGATION******************/
    $('.section-feature').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });

    /********** SROLL DOWN BUTTON ****************


    $('.js--scroll-to-piano').click(function() {
        $('html,body').animate({
            srcrollTop: $('.section-feature').offset().top
        }, 1000);
    });*/


    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
});

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }

    function change(event) {
        var summer = document.getElementById(summer);
        var winter = document.getElementById(winter);
        var happy = document.getElementById(happy);

        if (event.target.value == summer) {
            document.querySelectorAll('.key.white').style.backgroundColor = "#ffd700";
            document.querySelectorAll('.key.black').style.backgroundColor = "#f3872f";
            document.body.style.backgroundColor = "#f3872f";
        }
    }
}