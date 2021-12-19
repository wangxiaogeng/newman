window.onload = function () {
    var center = document.getElementById('center');
    var goodscenter = document.getElementById('goods-center');
    center.onmouseover = function () {
        goodscenter.style.display = 'block';
        goodscenter.style.border = '1px solid #eee';
        goodscenter.style.backgroundColor = '#fff';
    }
    center.onmouseout = function () {
        goodscenter.style.display = 'none';
    }

    var news = document.getElementById('news');
    var newslist = document.getElementById('news-list');
    news.onmouseover = function () {
        newslist.style.display = 'block';
        newslist.style.border = '1px solid #eee';
        newslist.style.backgroundColor = '#fff';
    }
    news.onmouseout = function () {
        newslist.style.display = 'none';
    }

    var us = document.getElementById('us');
    var aboutus = document.getElementById('about-us');
    us.onmouseover = function () {
        aboutus.style.display = 'block';
        aboutus.style.border = '1px solid #eee';
        aboutus.style.backgroundColor = '#fff';
    }
    us.onmouseout = function () {
        aboutus.style.display = 'none';
    }


    var globe = document.getElementById('globe');
    var globelist = document.getElementById('globe-list');
    globe.onclick = function () {
        if (globelist.style.display === 'none') {
            globelist.style.display = 'block';

            globelist.style.border = '1px solid #eee';
            globelist.style.backgroundColor = '#fff';
        } else
            globelist.style.display = 'none';

    }

    var searchcontrol = document.getElementById('searchcontrol');
    var searchwrapper = document.getElementById('search-wrapper');
    var input = document.querySelector('#search input');
    var showwrapper = document.querySelector('.show-wrapper');
    searchcontrol.onclick = function () {

        searchwrapper.style.display = 'block';

    }
    showwrapper.onclick = function () {
        searchwrapper.style.display = 'none';
    }





    // $('#search input').focus(function(){
    //     input.style.boxShadow='-5px 0 10px rgba(0,100,255,0.5)'
    // })
    input.onfocus = function () {
        input.style.boxShadow = '-5px 0 10px rgba(0,100,255,0.5)'
    }
    // $('#search input').blur(function(){
    //     input.style.boxShadow=''
    // })
    input.onblur = function () {
        input.style.boxShadow = ''
    }


    var icon = document.querySelectorAll('.show-wrapper i');

    var imgzone = document.querySelector('.img-zone');

    var i = 0;
    var timer;
    var time = 0;

    icon[0].onclick = function () {

        time = 0;
        if (i == 0) {
            i = 3;
            imgzone.style.transition = 'none';
            imgzone.style.left = -i * 1400 + 'px';
            setTimeout(() => {
                i = 2;
                imgzone.style.transition = '0.5s ease';
                imgzone.style.left = -i * 1400 + 'px';
            }, 500);
        }
        else {
            i--;
            imgzone.style.left = -i * 1400 + 'px';
        }




    }
    icon[1].onclick = function () {
        time = 0;
        imgzone.style.transition = '0.5s ease';
        i++;
        imgzone.style.left = -i * 1400 + 'px';
        if (i >= 3) {
            setTimeout(() => {
                i = 0;
                imgzone.style.transition = 'none';
                imgzone.style.left = 0 + 'px';
            }, 500);

        }

    }

    timer = setInterval(function () {
        time++;
        if (time == 30) {
            time = 0;
            imgzone.style.transition = '0.5s ease'
            imgzone.style.left = -i * 1400 + 'px';

            i++;


            if (i >= 4) {
                setTimeout(() => {
                    i = 0;
                    imgzone.style.transition = 'none';
                    imgzone.style.left = 0 + 'px';
                }, 500);

            }
        }
    }, 100)


}
