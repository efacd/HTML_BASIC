
// jQuery CDN을 이용했기 떄문에 jQuery code를 사용할 수 있다!

// button을 클릭하면 아래의 함수가 호출됨
function my_func() {
    // 0. jQuery를 공부할 때 가장 먼저 배워야 하는 것 : selector
    // jQuery를 사용하려면 무조건 $ 를 써야됨

    // 1. 전체 선택자 (universal selector) - '*'을 이용(모든 것을 지칭)
    // $("*").css("color","red")

    // 2. 태그 선택자 (tag selector) - 해당 태그를 모두 잡음
    // $("li").remove()

    // 3. 아이디 선택자 (id selector)
    // $("#haha").text()   // 인자가 없으면 값을 알아오라는 의미
    // $("#haha").text("제주")   // 인자가 있으면 값을 변경하라는 의미

    // 4. 클래스 선택자 (class selector)
    // '.'이 클래스라는 의미
    // $(".region").css("background-color","yellow")

    // 5. 구조 선택자 (자식선택자 / 후손선택자)
    // 'A > B' : A의 자식으로 있는 B를 선택
    // $("ol > li").css("color","steelblue")
    // 공백(space)는 후손을 지칭함
    // $("div li").css("color","pink")

    // 6. 구조 선택자 (형제 선택자)
    // '+'는 바로 다음에 나오는 형제를 의미함
    // $("#haha + li").remove()
    // '~'는 뒤에 나오는 형제들 싹다를 의미함
    // $("#hong ~ li").remove()

    // 7. 속성 선택자
    // '[]' 대괄호를 사용해서 해당 속성을 가진 것을 모두 선택
    // $("[id]").css("color","yellow")
    // $("[id=haha]").css("color","yellow")
    // 이 7가지를 조합하면 웬만한 element는 지정하는 것이 가능하다
}
