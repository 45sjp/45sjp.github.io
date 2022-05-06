const userList = JSON.parse(localStorage.getItem('userList'));

document.getElementById('user-search-all').onclick = () => {
    const adminTable = document.querySelector('.admin-table');

    if(adminTable.style.display === 'none') {
        adminTable.style.display = 'block';
    }
    else {
        adminTable.style.display = 'none';
    }

    document.memberFrm.reset();
    renderUserList(userList);
};

const renderUserList = (userList) => {
    const tbody = document.querySelector('.admin-table tbody');
    tbody.innerHTML = '';

    userList.forEach((user, index) => {
        const {userId, pwd, userName, email, tel1, tel2, tel3, datetime} = user;
        const html = `<tr>
                <td>${index + 1}</td>
                <td>${userId}</td>
                <td>${pwd}</td>
                <td>${userName}</td>
                <td>${email}</td>
                <td>${tel1}-${tel2}-${tel3}</td>
                <td>${formatDatetime(datetime)}</td>
            </tr>`;
        tbody.innerHTML += html;
    });
};

const formatDatetime = (millis) => {
    const d = new Date(millis);
    const f = (n) => n < 10 ? '0' + n : n;

    const MM = f(d.getMonth() + 1);
    const dd = f(d.getDate());
    const HH = f(d.getHours());
    const mm = f(d.getMinutes());

    return `${MM}/${dd} ${HH}:${mm}`;
}