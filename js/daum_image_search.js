
function search_image() {
    // 엔터키를 눌렀다면
    if (event.keyCode == 13) {
        // AJAX를 이용해서 Daum쪽 Open API를 호출
        $.ajax({
            async : true,   // 동기 or 비동기
            url : "https://dapi.kakao.com/v2/search/image",   // 호출할 서버쪽 프로그램
            data : {
                query : $("#movie_name").val() + " 포스터",
                sort : "accuracy"
            },
            // AJAX 코드를 수행하기 전에 이것부터 수행하라
            beforeSend : function(xhr) {
                xhr.setRequestHeader("Authorization",
                    "KakaoAK 172f90f7154b941c7246a7d5af6aca5c")
            },
            type : "GET",
            timeout : 5000,
            dataType : "json",
            success : function(result) {
                var img_list = result.documents
                var li = $("<li></li>")
                var img = $("<img />").attr("src",img_list[0].thumbnail_url)
                    .addClass("myImage")
                li.append(img)
                $("ul").append(li)
            },
            error : function(error) {
                alert("실패!")
            }
        })

    }
}