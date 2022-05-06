/**
 * hobby.html home 화면 소개 문구
 */
const content = '\n안녕하세요. 저의 취미를 소개하려고 합니다.\n\n스포츠팀을 응원하는 것을 가장 좋아합니다.\n\n스크롤을 내리시거나 좌측 아이콘을 누르시면,\n\n더 많은 취미 정보를 확인하실 수 있습니다.\n\n🤩\n\n';
const text = document.querySelector('.text-home');
let i = 0;

// 1회 반복
// function typing() {
//     if (i < content.length) {
//         let txt = content.charAt(i);
//         text.innerHTML += txt === '\n' ? '<br/>' : txt;
//         i++;
//     }
// }
// setInterval(typing, 200);

// 무한반복
function sleep(delay) {
    const start = new Date().getTime();
    while(new Date().getTime() < start + delay);
}

function typing() {
    let txt = content[i++];
    text.innerHTML += txt === '\n' ? '<br/>' : txt;

    if (i > content.length) {
        text.textContent = '';
        i = 0;
        sleep(3000);
    }
};
setInterval(typing, 250);


/**
 * 클릭하면 원본 이미지 새창에 띄우기
 */
const img = document.querySelectorAll('#hobby-wrap img');
for(let i = 0; i < img.length; i++) {
    img.item(i).onclick = function() {
        window.open(this.src)
    };
};