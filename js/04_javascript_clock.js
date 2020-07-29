// 아직 익숙하지 않기 때문에 실행시켜 보면서 진행하자

function start_clock() {
    // alert("버튼을 클릭!")
    // 시계를 출력 -> 현재 시간을 구해야 함 -> 현재 날짜의 시분초를 구할 수 있어야 됨
    // 이 시간을 HTML 특정 영역에 출력하자 -> 이 작업을 1초마다 반복하면 됨
    // JavaScript에는 특정 시간마다 특정 함수를 반복해주는 함수를 제공해준다
    // setInterval(함수, msec단위의 초)
    setInterval(function() {
        var today = new Date()   // 날짜 객체 만드는 작업
        console.log(today.toLocaleString())   // ok
        // HTML의 특정 위치를 지정해야 함 (어디에 시계를 출력할지)
        // HTML의 <div> ~ </div>를 찾아야 된다
        // document는 html의 body 내용을 의미한다
        var my_div = document.getElementById("myDiv")
        // myDiv인 곳의 텍스트에 해당 내용을 출력하라
        my_div.innerText = today.toLocaleString()
    }, 1000)
}