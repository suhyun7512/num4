document.addEventListener("DOMContentLoaded", function() {
    ul('0');
    //updateRankings('rank-views');

});

document.addEventListener('DOMContentLoaded', function () {
    const mediaQuery1 = window.matchMedia('(max-width: 700px)');
    handleMediaQuery1(mediaQuery1);
    mediaQuery1.addEventListener('change', handleMediaQuery1);

    const mediaQuery2 = window.matchMedia('(max-width: 1530px)');
    handleMediaQuery2(mediaQuery2);
    mediaQuery2.addEventListener('change', handleMediaQuery2);

    const mediaQuery3 = window.matchMedia('(max-width: 1500px)');
    handleMediaQuery3(mediaQuery3);
    mediaQuery3.addEventListener('change', handleMediaQuery3);

    const mediaQuery4 = window.matchMedia('(max-width: 700px)');
    handleMediaQuery4(mediaQuery4);
    mediaQuery4.addEventListener('change', handleMediaQuery4);
});


window.onload = function() {
    handleClick1(this, 'ma-content-custom'),
    handleClick(this, 'webtoon-site-1'),playGif1();
};




const mediaQuery1 = window.matchMedia('(max-width: 700px)');

handleMediaQuery1(mediaQuery1);
mediaQuery1.addEventListener('change', handleMediaQuery1);

function handleMediaQuery1(query) {
    const responsiveText = document.getElementById('responsiveText');

    if (responsiveText) {
        if (query.matches) {
            responsiveText.innerText = '징버거ZZANG센...';
        } else {
            responsiveText.innerText = '징버거ZZANG센 주제에 너무 신중하다';
        }
    }
}

const mediaQuery2 = window.matchMedia('(max-width: 1530px)');

handleMediaQuery2(mediaQuery2);
mediaQuery2.addEventListener('change', handleMediaQuery2);

function handleMediaQuery2(query) {
    const responsiveText1 = document.getElementById('responsiveText1');

    if (responsiveText1) {
        if (query.matches) {
            responsiveText1.innerText = "It's Beginning To Look A Lot...";
        } else {
            responsiveText1.innerText = "It's Beginning To Look A Lot Like Christmas - Cover by 이세계아이돌";
        }
    }
}

const mediaQuery3 = window.matchMedia('(max-width: 1500px)');

handleMediaQuery3(mediaQuery3);
mediaQuery3.addEventListener('change', handleMediaQuery3);

function handleMediaQuery3(query) {
    const responsiveText2 = document.getElementById('responsiveText2');

    if (responsiveText2) {
        if (query.matches) {
            responsiveText2.innerText = "마이 왁타버스 COVER by 왁타버스";
        } else {
            responsiveText2.innerText = "마이 왁타버스 (My WAKTAVERSE) COVER by 왁타버스";
        }
    }
}

const mediaQuery4 = window.matchMedia('(max-width: 1500px)');

handleMediaQuery4(mediaQuery4);
mediaQuery4.addEventListener('change', handleMediaQuery4);

function handleMediaQuery4(query) {
    const responsiveText2 = document.getElementById('responsiveText3');

    if (responsiveText2) {
        if (query.matches) {
            responsiveText2.innerText = "뜨거운 목소리로 - 카타르 월드컵 응원가";
        } else {
            responsiveText2.innerText = "뜨거운 목소리로 - 2022 카타르 월드컵 응원가";
        }
    }
}
