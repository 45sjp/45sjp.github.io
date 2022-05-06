document.memberFrm.onsubmit = function () {
    const userId = document.getElementById("userId");
    const pwd = document.getElementById("pwd");
    const pwdCheck = document.getElementById("pwdCheck");
    const userName = document.getElementById("userName");
    const email = document.getElementById("email");
    const tel1 = document.getElementById("tel1");
    const tel2 = document.getElementById("tel2");
    const tel3 = document.getElementById("tel3");

    const userIdVal = userId.value;
    const pwdVal = pwd.value;
    const pwdCheckVal = pwdCheck.value;
    const userNameVal = userName.value;
    const emailVal = email.value;
    const tel1Val = tel1.value;
    const tel2Val = tel2.value;
    const tel3Val = tel3.value;

    document.getElementById("id-error-msg").innerHTML = '';
    document.getElementById("password-error-msg").innerHTML = '';
    document.getElementById("pwd-check-error-msg").innerHTML = '';
    document.getElementById("name-error-msg").innerHTML = '';
    document.getElementById("email-error-msg").innerHTML = '';
    document.getElementById("phone-error-msg").innerHTML = '';

    // 1. 아이디 검사
    // 첫 글자 영문자
    if(!/^[a-z]/.test(userIdVal)) {
        document.getElementById("id-error-msg").innerHTML = '첫글자는 반드시 영소문자를 입력하십시오.';
        userId.select();
        return false;
    }

    // 숫자 포함 여부
    if(!/\d/.test(userIdVal)) {
        document.getElementById("id-error-msg").innerHTML = '아이디에는 숫자가 1개 이상 포함되어야 합니다.';
        userId.select();
        return false;
    }

    // 길이 검사
    if(!/^.{4,12}$/.test(userIdVal)) {
        document.getElementById("id-error-msg").innerHTML = '아이디는 4 ~ 12 글자를 입력하십시오.';
        userId.select();
        return false;
    }

    // 2. 비밀번호 검사
    // 숫자 포함 여부
    if(!/\d/.test(pwdVal)) {
        document.getElementById("password-error-msg").innerHTML = '비밀번호에는 숫자가 1개 이상 포함되어야 합니다.';
        pwd.select();
        return false;
    }

    // 문자 포함 여부
    if(!/[a-z]/i.test(pwdVal)) {
        document.getElementById("password-error-msg").innerHTML = '비밀번호에는 문자가 1개 이상 포함되어야 합니다.';
        pwd.select();
        return false;
    }

    // 특수문자 포함 여부
    if(!/[!@#$%^&*\\]/.test(pwdVal)) {
        document.getElementById("password-error-msg").innerHTML = '비밀번호에는 특수문자가 1개 이상 포함되어야 합니다.';
        pwd.select();
        return false;
    }

    // 길이 검사
    if(!/^.{8,15}$/.test(pwdVal)) {
        document.getElementById("password-error-msg").innerHTML = '비밀번호는 8 ~ 15 글자를 입력하십시오.';
        pwd.select();
        return false;
    }

    // 비밀번호 일치 여부 검사
    if(pwdVal !== pwdCheckVal) {
        document.getElementById("pwd-check-error-msg").innerHTML = '입력하신 비밀번호가 일치하지 않습니다.';
        pwdCheck.select();
        return false;
    }

    // 3. 이름 검사 : 한글 2글자 이상만 허용
    if(!/^[가-힣]{2,}$/.test(userNameVal)) {
        document.getElementById("name-error-msg").innerHTML = '한글 2글자 이상의 이름을 입력하십시오.';
        userName.select();
        return false;
    }

    // 4. 이메일 검사
    if(!/^[\w]{4,}@[\w]+(\.[\w]+){1,3}$/.test(emailVal)) {
        document.getElementById("email-error-msg").innerHTML = '올바른 이메일 주소를 입력하십시오.';
        email.select();
        return false;
    }

    // 5. 전화번호 검사
    if(!(/^01\d{1}/.test(tel1Val) &&
        /\d{3,4}/.test(tel2Val) &&
        /\d{4}/.test(tel3Val))) {
        document.getElementById("phone-error-msg").innerHTML = '올바른 전화번호를 입력하십시오.';
        tel1.select();
        return false;
    }
    
    saveUserList();
    alert('회원가입을 축하드립니다.');
    return true;
};

const saveUserList = () => {
    const userIdVal = userId.value;
    const pwdVal = pwd.value;
    const userNameVal = userName.value;
    const emailVal = email.value;
    const tel1Val = tel1.value;
    const tel2Val = tel2.value;
    const tel3Val = tel3.value;

    const user = new User(userIdVal, pwdVal, userNameVal, emailVal, tel1Val, tel2Val, tel3Val);

    const userList = JSON.parse(localStorage.getItem('userList')) || [];
    userList.push(user);
    
    localStorage.setItem('userList', JSON.stringify(userList));
};

class User {
    constructor(userId, pwd, userName, email, tel1, tel2, tel3, datetime = Date.now()) {
        this.userId = userId;
        this.pwd = pwd;
        this.userName = userName;
        this.email = email;
        this.tel1 = tel1;
        this.tel2 = tel2;
        this.tel3 = tel3;
        this.datetime = datetime;
    }
}