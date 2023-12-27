// 제출 이벤트를 받는다(이벤트 헨들링)

// 제출된 입력 값들을 참조한다.

// 이렵값에 문제가 있는 경우 이를 감지한다. ex)"아이디가 틀리다"

// 가입 환영 인사를 경고창으로 띄운다 (alert)

const form = document.getElementById("from")

form.addEventListener("submit", function(event){
    event.preventDefault()  // 기존기능 차단 submit 으로 새로고침 되는것을 차단한다.
    
    
    let userId = event.target.id.value   // <<익명함수 이벤트 객체로부터 입력값들을 읽어드린다.
    let userPw1 = event.target.pw1.value
    let userPw2 = event.target.pw2.value
    let userName = event.target.name.value
    let userPhone = event.target.phone.value
    let userPosition = event.target.position.value
    let userGender = event.target.gender.value
    let userEmail = event.target.email.value
    let userIntro = event.target.intro.value

    /*console.log(userdId, userPw1, userPw2, userdEmail, userdGender
        , userdId, userdIntro, userdName, userdPosition)*/
        if(userId.length < 6){
            alert("아이디가 너무 짧습니다. 6자 이상으로 입력해주세요")
            return
        }

        if(userPw1 !== userPw2){
            alert("비밀번호가 일치하지 않습니다.")
            return
        }

        //가입 잘 되었다 환영!!

        document.body.innerHTML = ""
        document.write(`<p>${userId} 님 가입을 환영합니다!!</p>`)
        document.write(`<p>ID :${userId}</p>`)
        document.write(`<p>이름 :${userName}</p>`)
        document.write(`<p>전화번호 : ${userPhone}</p>`)
        document.write(`<p>원하는 직무 : ${userPosition}</p>`)
})
