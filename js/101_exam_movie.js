
function call_ajax() {
    // javascript의 객체는 => {key : value, key : value, ...} 형태
    $.ajax({
        async : true,    // 비동기 방식의 호출(default)
        // key는 로그인해서 발급받은 키, targetDt는 달력에서 입력받은 날짜
        url : "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json",  // 호출할 url
        data : {
            key : "2b0f55bc9c31e1a5b04e2fd47e51bec7",
            targetDt : $("input[type=date]").val().replace(/-/g,"")
        },   // 서버 프로그램에게 넘겨줄 데이터들
        type : "GET",
        timeout : 5000,   // 주어진 시간안에 결과가 안오면 query가 실패한 것으로 간주
        dataType : "json",   // 서버로 부터 받을 데이터 타입
        // 이렇게만 써주면 결과 JSON을 JavaScript 객체로 자동 변환해준다 -> jQuery가 해줌
        // result : 서버가 보내준 데이터 (여기서는 서버가 보내준 데이터를 객체로 바꾼 결과 객체)
        success : function(result) {
            // 이전에 찾았던 영화들 전부 지우기
            $("tbody").empty()
            movie_list = result.boxOfficeResult.dailyBoxOfficeList

            $.each(movie_list, function(idx, item) {
                var tr = $("<tr></tr>")   // <tr></tr>이라는 없는 태그를 하나 만듬
                var rankTd = $("<td></td>").text(item.rank)   // <td></td>
                var imgTd = $("<td></td>")
                $.ajax({
                    async : true,   // 동기 or 비동기
                    url : "https://dapi.kakao.com/v2/search/image",   // 호출할 서버쪽 프로그램
                    data : {
                        query : item.movieNm + " 포스터",
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
                        var img = $("<img />").attr("src",img_list[0].thumbnail_url)
                            .addClass("myImage")
                        imgTd.append(img)
                    },
                    error : function(error) {
                        alert("실패!")
                    }
                })
                // var img = $("<img />").attr("src",item.img)   // <img src = ...>
                // imgTd.append(img)   // imgTd의 자식으로 img를 붙임
                var titleTd = $("<td></td>").text(item.movieNm)   // text 메서드로 태그사이에 문자 넣기 가능
                var priceTd = $("<td></td>").text(item.salesAcc)
                var viewerTd = $("<td></td>").text(item.audiAcc)
                tr.append(rankTd)
                tr.append(imgTd)
                tr.append(titleTd)
                tr.append(priceTd)
                tr.append(viewerTd)
                var detailTd = $("<td></td>")
                var detailBtn = $("<input />").attr("type", "button").attr("value", "확인")
                detailBtn.on("click", function(){
                    $.ajax({
                        async : true,
                        url : "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json",  // 호출할 url
                        data : {
                            key : "2b0f55bc9c31e1a5b04e2fd47e51bec7",
                            movieCd : item.movieCd
                        },
                        type : "GET",
                        timeout : 5000,
                        dataType : "json",
                        success : function(result) {
                            info = result.movieInfoResult.movieInfo
                            var msg = "< 영화제목 > " + info.movieNm + "\n< 제작년도 > " + info.prdtYear + "\n< 장 르 > "
                            for (var x=0; x<info.genres.length; x++) {
                                msg += info.genres[x].genreNm
                                if (x!=info.genres.length-1)
                                     msg += ", "
                            }
                            msg += "\n< 감 독 >\n"
                            for (var x=0; x<info.directors.length; x++) {
                                msg += x+1 + ". " + info.directors[x].peopleNm + '\n'
                            }
                            msg += "< 배 우 >\n"
                            for (var x=0; x<info.actors.length; x++) {
                                msg += x+1 + ". " + info.actors[x].peopleNm + '\n'
                            }
                            alert(msg)
                        },
                        error : function(error) {
                            alert("서버호출 실패")
                        }
                    })
                })
                detailTd.append(detailBtn)
                tr.append(detailTd)
                $("tbody").append(tr)
            })
        },
        error : function(error) {
            alert("서버호출 실패")
        }
    })

}