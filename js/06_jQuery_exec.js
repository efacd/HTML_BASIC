
function print_text() {
    // 버튼을 눌렀을 때 실행할 코드
    // alert("호출되었습니다.")

    // 만약 id가 있는 경우 id를 사용해서 찾는 것이 제일 좋음
    // jQuery에서 #은 id를 의미
    // text()라는 method는 인자가 없으면 text를 읽어오는 것이고, 있으면 변경하는 것이다
    // console.log($("#apple").text())
    // console.log($("#pineapple").text())

    // 참외의 경우 class로 되어 있어 다른 요소들과 겹치는 부분이 있다
    // 여러가지 방법이 있지만, 부모가 다르므로 이를 이용해보자
    // ul을 찾고, 그의 자식으로 있는 li를 찾은다음 클래스이름이 myList인 것을 찾아라
    // console.log($("ul > li.myList").text())
    // 또다른 방법으로는 ul을 찾고, 자식으로 있는 li들을 찾은 다음 속성중에 class라는 속성을 가진 것들을 찾는다
    // console.log($("ul > li[class]").text())

    // text()는 태그 사이에 있는 문자를 가져오는 것인데, 지금 예시는 태그 사이가 없음
    // 이런 경우는 val() method를 사용
    // 태그가 input인 것들 중 속성인 type이 text인 것들만 선택
    // console.log($("input[type=text]").val())

    // 고양이만 찾아보자
    // 고양이, 호랑이, 강아지가 다 똑같은 형태로 들어있다
    // console.log($("ol > li.myList:first").text())

    // 강아지를 찾고 싶다면?
    // console.log($("ol > li.myList:last").text())

    // 호랑이 같은 중간에 있는 것을 찾고 싶다면?
    // 고양이를 찾은 다음에 형제 중에 다음 것을 찾으면 된다
    // console.log($("ol > li.myList:first + li").text())
    // nth-child() method를 이용해서 n번째 자식을 찾을 수도 있다
    // console.log($("ol > li.myList:nth-child(2)").text())

    // attr() method는 속성을 제어한다
    // 첫 번째 인자만 있으면 해당 속성 값을 읽어오고, 두 번째 인자까지 있으면 해당 속성 값을 변경
    // $("input[type=text]").attr("size",10)
}

function my_func() {
    // alert("과일이 바뀌었습니다.")
    // 선택한 것의 색깔을 바꾸는 예제
    // select box에서 과일이 바뀌면 실행됨
    // 1. 선택한 과일이 어떤 과일인지 알아내야 한다
    // select의 option중 하나가 선택되면 그 선택된 element를 가져옴
    var fruit = $("select > option:selected").text()
    // 2. 과일리스트에 순차적으로 접근
    var my_list = $("ul > li")
    // each() method는 my_list가 가지고 있는거 하나씩 뽑으면서 인자로 주어진 함수를 수행
    // idx는 순번 (첫번째 : 0, 두번째 : 1)
    my_list.each(function(idx, item) {
        // jQuery니까 $로 접근
        // console.log($(item).text())
        if($(item).text() == fruit) {
            $(item).css("color","yellow")
        } else {
            $(item).css("color","lightgray")
        }
    })

}


















