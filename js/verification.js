$('#login-button').click(function (event) {
    let userName = document.getElementById("userName").value;
    let pwd = document.getElementById("pwd").value;
    if (userName == "袁庆洁" && pwd == "1001") {
        $('#h').text("生日快乐!");
        event.preventDefault();
        $('form').fadeOut(500);
        $('.wrapper').addClass('form-success');
        setTimeout(function () {
            location.href = "BirthdayCake.html";
        }, 3000);
    } else {
        alert("姓名或生日不正确!");
    }
});