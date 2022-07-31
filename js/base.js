
// $(document).ready(function(){
    var navidata = [
        {
            d1 : ['회사소개','#about'],
            d2 : [

                ['비전','v.html'],
                ['인사말','c.html'],
                ['주요연혁','h.html'],
                ['CI 소개','ci.html'],
                ['찾아오시는길','w.html'],

                ]
            },
            {
            d1 : ['사업영역','b.html'],
            d2 : [
    
                    ['소재사업','v.html'],
                    ['포장설비 엔지니어랑','c.html'],

                ]
            },

            {
            d1 : ['NEWS','n.html'],
            d2 : [
                ]
            },

            {
            d1 : ['구매조달시스템','n.html'],
            d2 : [
                    ]
            }
    ]

    // console.log('a태그안의 값',navidata[1].d2[0][0],'href 링크값',navidata[1].d2[0][1])
    

// })

$(document).ready(function(){
    var navitag = "";

    for(var i in navidata){
        // 대메뉴출력
        navitag +='<li class="nav-item position-relative"><a href='${navidata[i].d1[1]}' class="py=2 py-md-0 d-block px-0 px-md-3">${navidata[i].d1[0]}</a>'
            for(var j in navidata[i].d2){ // j초, i분 j변수가 다 돌 때까지 i는 증가하질 못하고 대기
                if( j == 0 ) navitag +=
              navitag +='<ul>'; //첫번째 추가

              navitag +='</ul>'; // 제일 마지막 끝나고 추가
            }
        navitag += '</li>'
    }
    
    $('navbarNav > ul').html(navitag);
        

})