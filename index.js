const text = document.querySelector(".text");
console.log(text)
window.addEventListener('scroll', () =>
{
    // Y 축 값 알려줌
    console.log(window.scrollY)

    // y축 높이가 100 배수일 때마다
    if (window.scrollY % 100 === 0) {
        // text.style.fontsize = (window.scrollY / 10) + 'px';

        // 글꼴 크기를 window.scrollY에 비례하여 조정
        text.style.transition = .5 + 's'
        text.style.fontSize = (window.scrollY / 10) + 'px';
    }
})