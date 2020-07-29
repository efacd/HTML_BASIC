// JavaScript에 대해서 python과 비교하면서 알아보자

// JavaScript : web client에서 실행되는 언어
// + 요즘에는 서버용 개발언어로 사용되기도 한다(Node.js)

// 변수 생성
// python은 그냥 변수를 선언한다 (ex. my_var = 100)
// JavaScript는 변수 생성시 var 키워드를 사용함
var my_var = 100
var tmp = 3.14   // number
var tmp1 = "Hello"   // 문자열(string)은 '', "" 구별하지 않음 (python과 동일)
var tmp2 = true   // boolean (python은 True)
var tmp3 = [1, 2, 3, 4.555]   // array

// 객체를 어떻게 표현할까?
// {} 중괄호를 이용해서 표현하며, key와 value의 쌍으로 표현한다
var tmp4 = {name : "홍길동", age : 25}
console.log(tmp4.name)

// 함수에 대해서 알아보자
// 함수에는 2가지가 존재한다
// 1. 선언적 함수 : python의 일반적인 함수 정의하는 방법

function my_add(x, y) {
    return x + y
}
// def my_add(x,y):
//    return x + y

// 2. 익명함수 (함수의 이름이 없다)
// 함수의 이름이 없기 때문에 변수에 저장해서 사용한다 (일급함수의 특징을 가짐)
// 함수를 다른 함수의 인자로, 함수의 리턴값으로 함수를 이용
// 하나의 언어를 주언어로 해서 파는게 좋다
var my_add = function(x,y) {
    return x + y
}

// 일반적으로 순수 JavaScript로만 작업을 하지는 않음 (효율적이지 않음)
// 다른 library나 framework를 가지고 작업을 함 -> ex. JQuery
