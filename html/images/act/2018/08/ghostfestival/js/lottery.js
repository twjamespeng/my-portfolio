//獎品項目
var prize_list = [
  {
    "name":"努力不懈！再接再厲！",
    "img":"modal-gg"
  },
  {
    "name":"BUYBUY",
    "img":"modal-100"
  },
  {
    "name":"哎呀～還差一點點！",
    "img":"modal-gg"
  },
  {
    "name":"沒關係，還有機會！",
    "img":"modal-gg"
  },
  {
    "name":"已兌換完畢",
    "img":"modal-500"
  },
  {
    "name":"下一個幸運者就是你！",
    "img":"modal-gg"
  },
  {
    "name":"多玩幾次就中了！",
    "img":"modal-gg"
  },
  {
    "name":"300BUY",
    "img":"modal-300"
  }
];
$(function(){
  for(var i=0; i<=prize_list.length-1; i++){
    $(".lottery ul li").eq(i).append("<p>"+prize_list[i].name+"</p><span>"+ prize_list[i].img +"</span>")
  }  
});

// iEnd是請求獲得的獎品結果
var iEnd = -1;

$(".lottery-btn button").on("click", function(){

    $('.finger').hide();

    var $this = $(this);

    // 這個setTimeout是假設的請求
    setTimeout(function(){
        iEnd = Math.floor(Math.random() * 8);
        console.log('iEnd:'+iEnd);
    }, 2000);

    // 禁用
    $this.attr("disabled", "disabled");
  
    // $(".lottery li").removeClass("shiny");

    draw($(".lottery"), function(){
        // 恢復按鈕
        
        setTimeout(function(){
            var prize = $(".lottery").find("li").eq(iEnd).find("p").html();
            var prizeBG = $(".lottery").find("li").eq(iEnd).find("span").html();
            
            
            $('#result-prize').modal('show');
            $('.modal-content').removeClass().addClass('modal-content ' + prizeBG);
            $('.modal-body').html('<p id="myText">'+prize+'</p>');
            
            
            
            
            $(".lottery li").removeClass("active");
            // $(".lottery li").addClass("shiny");
        }, 500);
        setTimeout(function(){
          $this.removeAttr("disabled");
          $('.finger').show();
        },1000);
        
    });
    
    

});

// 開始轉動
function draw(oMain, fn){
    var timer = null,
        iNow = oMain.find(".active").index(),
        len = oMain.find("li").length,
        iSpeed = 150,
        count = 0, // 轉了多少次
        iLast = len; // 最後一次轉圈圈
        (function run(){

            // 前3個加速
            if(count > 2){ iSpeed = 50; }

            // 後3個减速
            if(iLast < 2){ iSpeed = 150; }

            iNow++;
            count++;

            if(iNow >= len){
              iNow = 0;
            }
            oMain.find("li").removeClass("active").eq(iNow).addClass("active");

            timer = setTimeout(run, iSpeed);

            // 得到结果
            if(iEnd !== -1 && iNow == iEnd){
                // console.log(iLast);
                // 為了最後一圈减速，再跑一圈
                iLast--;
                if(iLast == 0){
                    clearTimeout(timer);
                    fn();
                }
            }
        })();
}