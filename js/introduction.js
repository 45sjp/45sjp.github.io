introductionMsg = () => {
    const clickMe = document.getElementById('introduction-msg');

    if(clickMe.style.display === 'none') {
        clickMe.style.display = 'block';
    }
    else {
        clickMe.style.display = 'none';
    }
};

// 한 번만 출력되도록 제어
// document.getElementById('#introduction-img'),addEventListener('click', () => {
//     const msgVal = document.querySelector('#introduction-msg');
//     const p = document.createElement('p');
//     const text = document.createTextNode('안녕하세요! 예비 개발자 박수진입니다.');
//     p.appendChild(text);
//     msgVal.append(p);

//     msgVal.removeEventListener('click', f);
    
//     if(msgVal.style.display ==='none') {
//         msgVal.style.display = 'block';
//     }
//     else {
//         msgVal.style.display ='none';
//     }
// });
// }, {once: true});
