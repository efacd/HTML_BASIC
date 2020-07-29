
function call_ajax() {
    // 입력 텍스트 상자에서 키보드로 입력이 들어왔을 때 호출
    // 모든 키에 대해서 처리하는 것이 아닌 Enter 키일 경우에만 처리
    if (event.keyCode == 13) {
        //alert("엔터가 입력되었습니다.")
        // 서버쪽 프로그램을 호출해서 결과를 받아온다
        // jQuery를 이용해서 AJAX 처리를 수행
        // 괄호안에 서버프로그램을 어떻게 호출할건지를 작성
        // ajax의 인자로 javascript 객체를 넣어준다
        // javascript의 객체는 => {key : value, key : value, ...} 형태
        $.ajax({
            async : true,    // 비동기 방식의 호출(default)
            url : "http://192.168.0.200:8080/bookSearch/search",   // 호출할 url
            data : {
                keyword : $("input[type=text]").val()
            },   // 서버 프로그램에게 넘겨줄 데이터들
            type : "GET",
            timeout : 3000,   // 주어진 시간안에 결과가 안오면 query가 실패한 것으로 간주
            dataType : "json",   // 서버로 부터 받을 데이터 타입
            // 이렇게만 써주면 결과 JSON을 JavaScript 객체로 자동 변환해준다 -> jQuery가 해줌
            // result : 서버가 보내준 데이터 (여기서는 서버가 보내준 데이터를 객체로 바꾼 결과 객체)
            success : function(result) {
                // alert("서버호출 성공")
                // JSON 데이터를 보고 내가 원하는 데이터를 추출할 수 있어야 한다
                // alert(result[0].title)
                /*  <tr>
                        <td>표지</td>
                        <td>제목</td>
                        <td>저자</td>
                        <td>가격</td>
                        <td>
                            <input type=button value="삭제" onclick=do_delete()> </td>
                    </tr>
                 */
                // 이전에 찾았던 책들 전부 지우기
                $("tbody").empty()
                // Selector에 의해 선택된 여러 개의 데이터에 대해 순차적으로 함수를 적용할 때 이용
                // $("h1").each()
                $.each(result, function(idx, item) {
                    var tr = $("<tr></tr>")   // <tr></tr>이라는 없는 태그를 하나 만듬
                    var imgTd = $("<td></td>")   // <td></td>
                    // 이미지 태그와 같이 끝나는 태그가 없는 경우 이렇게 만듬
                    var img = $("<img />").attr("src",item.img)   // <img src = ...>
                    imgTd.append(img)   // imgTd의 자식으로 img를 붙임
                    var titleTd = $("<td></td>").text(item.title)   // text 메서드로 태그사이에 문자 넣기 가능
                    var authorTd = $("<td></td>").text(item.author)
                    var priceTd = $("<td></td>").text(item.price)
                    tr.append(imgTd)   // tr의 자식으로 imgTd를 붙임
                    tr.append(titleTd)
                    tr.append(authorTd)
                    tr.append(priceTd)
                    var delTd = $("<td></td>")
                    var delBtn = $("<input />").attr("type","button").attr("value","삭제")
                    delBtn.on("click", function() {
                        // 현재 클릭된 버튼에 대한 책 정보를 찾아서 화면에서 삭제
                        // this : 현재 이벤트가 발생된 객체를 지징
                        $(this).parent().parent().remove()

                        //alert("삭제")
                    })
                    delTd.append(delBtn)
                    tr.append(delTd)
                    $("tbody").append(tr)
                })
                // for (var x=0; x<result.length; x++) {
                //     var tr = $("<tr></tr>")   // <tr></tr>이라는 없는 태그를 하나 만듬
                //     var imgTd = $("<td></td>")   // <td></td>
                //     // 이미지 태그와 같이 끝나는 태그가 없는 경우 이렇게 만듬
                //     var img = $("<img />").attr("src",result[x].img)   // <img src = ...>
                //     imgTd.append(img)   // imgTd의 자식으로 img를 붙임
                //     var titleTd = $("<td></td>").text(result[x].title)   // text 메서드로 태그사이에 문자 넣기 가능
                //     var authorTd = $("<td></td>").text(result[x].author)
                //     var priceTd = $("<td></td>").text(result[x].price)
                //     tr.append(imgTd)   // tr의 자식으로 imgTd를 붙임
                //     tr.append(titleTd)
                //     tr.append(authorTd)
                //     tr.append(priceTd)
                //     var deleteButton = $("<input />").attr("type","button")
                //     deleteButton.attr("value","삭제")
                //     // deleteButton.attr("onclick", my_del(x))
                //     tr.append(deleteButton)
                //     $("tbody").append(tr)
                // }
            },  // 호출이 만약 성공하면 수행할 함수
            error : function(error) {
                alert("서버호출 실패")
            }   // 호출이 실패했을 때 수행할 함수
        })

    }
}