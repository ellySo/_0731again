
// $(document).ready(function(){
    var navidata = [
        {
            d1 : ['회사소개','company.html'],
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

    // console.log('a태그안의 값',navidata[1].d2[0][0],'href 깅크값',navidata[1].d2[0][1])
    

// })

$(document).ready(function(){
    var navitag = '';
    var navilength = navidata.length; // 대메뉴개수

    for(var i =0; i < navilength; i++ ){ // 다중처리
        navitag += "<li><a href='"+navidata[i].d1[0]+"'>"+navidata[i].d1[0]+"</a>
        
        navitag</li>"
    }
    $('#navi').html(navitag)

})