/**
 * Created by mac on 15. 7. 14..
 */
//requireJS를 활용하여 모듈 로드
requirejs([
        //디펜던시가 걸려있으므로, 이 디펜던시들이 먼저 로드된 뒤에 아래 콜백이 수행된다.
        'text', //미리 선언해둔 path, css나 html을 로드하기 위한 requireJS 플러그인
        'jquery', //미리 선언해둔 path, jQuery는 AMD를 지원하기 때문에 이렇게 로드해도 jQuery 또는 $로 호출할 수 있다.
        'bootstrap',
        'underscore',
    ],

    //디펜던시 로드뒤 콜백함수. 로드된 디펜던시들은 콜백함수의 인자로 넣어줄 수 있다.
    function (text, $, bs, _, angular, controller) {

        //이 콜백 함수는 위에 명시된 모든 디펜던시들이 다 로드된 뒤에 호출된다.
        //주의해야할 것은, 디펜던시 로드 완료 시점이 페이지가 완전히 로드되기 전 일 수도 있다는 사실이다.
        //이 콜백함수는 생략할 수 있다.

        //페이지가 완전히 로드된 뒤에 실행
        $(document).ready(function () {

            var jQuery = $;
            $('[data-toggle="tooltip"]').tooltip();
            _.extend({hello: 'zzz'}, {id: 1});
        });
    }
);