var isShowType="0",gameZoneId="0",rom="0",page="1",gameSize="10",loading=!1,gameType="";window.process={init:function(){this.initData(),this.load(isShowType,gameZoneId,rom,page,gameSize),this.public()},initData:function(){var e=getUrlParamsCode();gameType=e.gameType},load:function(e,a,i,n,t){$.ajax({url:getApiDomain()+"/game",method:"POST",dataType:"json",data:{isShowType:e,gameZoneId:a,rom:i,page:n,gameSize:t},beforeSend:function(){$.showLoading("正在初始化")},complete:function(){$.hideLoading()},error:function(){$.hideLoading(),$.alert("服务器繁忙，请稍后再试")},success:function(e){var a=e.status;if(1==a){var i={entityUrl:e.entityUrl,game:e.game},n=template("gameList_data",i);$("#gameList_data_content").html(n)}else $.alert(e.msg)}})},"public":function(){var e=this;$(".weui_navbar a").click(function(){var a=$(this).attr("gameZoneId");$(this).addClass("weui_bar_item_on").siblings().removeClass("weui_bar_item_on"),page=1,e.load(isShowType,a,rom,page,gameSize)}),$(".main").infinite().on("infinite",function(){loading||$.ajax({url:getApiDomain()+"/game",method:"POST",dataType:"json",data:{isShowType:isShowType,gameZoneId:gameZoneId,rom:rom,page:page+1,gameSize:gameSize},beforeSend:function(){$.showLoading("正在初始化"),loading=!0},complete:function(){$.hideLoading()},error:function(){$.hideLoading(),$.alert("服务器繁忙，请稍后再试")},success:function(e){var a={game:e.game};if(e.game.length>=gameSize?(page++,loading=!1):$(".main").destroyInfinite(),e.game.length>0){var i=template("gameList_data",a);$("#gameList_data_content").append(i)}}})})}},process.init();