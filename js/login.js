const userList = JSON.parse(localStorage.getItem('userList'));

document.memberFrm.onsubmit = () => {
    const userId = document.getElementById("userId");
    const pwd = document.getElementById("pwd");

    const userIdVal = userId.value;
    const pwdVal = pwd.value;

    document.getElementById("id-error-msg").innerHTML = '';
    document.getElementById("password-error-msg").innerHTML = '';

    // 1. 아이디 검사
    if(!userIdVal) {
        document.getElementById("id-error-msg").innerHTML = '아이디를 입력하십시오.';
        userId.select();
        return false;
    }

    // 2. 비밀번호 검사
    if(!pwdVal) {
        document.getElementById("password-error-msg").innerHTML = '비밀번호를 입력하십시오.';
        pwd.select();
        return false;
    }
    
    // 관리자용/회원용 화면 분기
    userList.forEach(user => {
        const {userId, pwd, userName} = user;

        if(userIdVal === 'admin1' && pwdVal === 'admin@1234') {
            alert('관리자 모드입니다.')
            document.getElementById('login-form').action = 'admin.html';
            return true;
        }
        else if(userId === userIdVal && pwd === pwdVal) {
            alert(`${userName}님, 반갑습니다.`);
            document.getElementById('login-form').action = 'index.html';
            return true;
        }
    });
};