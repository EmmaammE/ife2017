window.onload = function () {
    var displayEle = document.getElementById('display');
    var index = -1;
    var images = [
        "img1.jpg",
        "img2.jpg",
        "img3.jpg",
        "img4.jpg",
        "img5.jpg",
    ]
    var animations = [
        "one-animation",
        "two-animation",
        "three-animation",
        "four-animation",
        "five-animation",
    ]

    document.getElementsByClassName('gallery')[0].addEventListener('click', function (e) {
        // 兼容性处理
        var event = e || window.event;
        var target = event.target || event.srcElement;
        // 判断是否匹配目标元素
        if (target.nodeName.toLocaleLowerCase() === 'img') {

            if (index !== target.getAttribute('data-src')) {
                if (index !== -1) {
                    displayEle.classList.remove(animations[index]);
                }
                index = target.getAttribute('data-src');
                displayEle.classList.add(animations[index]);
                displayEle.setAttribute('src', images[index]);
            }

        }
    });
}