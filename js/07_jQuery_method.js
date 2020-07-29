
// 실행코드를 입력하려고 함
// document는 html 화면(<body> element를 의미)
// document가 준비되면 인자로 주어진 람다함수를 실행하라는 의미
$(document).ready(function() {
    // browser에 내용이 완전히 출력되면 그 시점에 실행
    // li를 찾아서 각각에 대해 event 처리를 지정하자
    // on()은 첫번째 인자로 주어진 것을 할 때, 두번째 인자로 주어진 람다 함수를 실행하는 method
    // 마우스를 올려두었을 때
    $("ul > li").on("mouseover",function() {
        // 해당 element를 myStyle 클래스에 추가
        $(this).addClass("myStyle")
    })

    // 마우스를 올린 것 이외의 항목들은 원래대로 돌아오도록 수행
    $("ul > li").on("mouseleave",function() {
        // 해당 element를 myStyle 클래스에 추가
        $(this).removeClass("myStyle")
    })
})

function insert_text() {
    // text() : 문자를 그냥 가져다가 넣음 (태그가 적용되지 않는다)
    // $("#myDiv").text("<h1>만나서 반가워요!</h1>")
    // html() : text()와 동일하게 동작하는데 태그가 적용된다
    $("#myDiv").html("<h1>만나서 반가워요!</h1>")
}

function delete_div() {
    // remove() : 자신을 포함해서 후손들도 삭제
    // $("#deleteDiv").remove()
    // empty() : 자신을 제외한 후손들만 삭제
    $("#deleteDiv").empty()
}

function add_list() {
    // 없는 태그를 만들려면 어떻게 해야할까?
    // 태그명이 아닌 태그 자체를 쓰면 태그가 만들어진다
    // <li class=myStyle>박길동</li>
    // $("<li></li>").text("박길동").attr("class","myStyle")
    // 아래 문장도 같은 동작을 함
    var my_li = $("<li></li>").text("박길동").addClass("myStyle")
    // 태그를 생성한 다음 원하는 위치에 가져다 붙인다
    // 1. append() : 자식으로 붙이고 맨 마지막 자식으로 붙인다
    // $("ul").append(my_li)
    // 2. prepend() : 자식으로 붙이고 맨 첫번째 자식으로 붙인다
    // $("ul").prepend(my_li)
    // 3. after() : 형제로 붙이고 바로 다음 형제로 붙인다
    // $("ul > li:nth-child(3)").after(my_li)
    // 4. before() : 형제로 붙이고 바로 이전 형제로 붙인다
    // $("ul > li:last").before(my_li)
}



















