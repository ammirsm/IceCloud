/**
 * @author Amir
 */
$(document).ready(function(){
	
	$("div#Unlimited").click(function(){
		if($("div#PriceBox").css("opacity")==1)
		{
			$("div#PriceBox").fadeTo('slow',0);
		}
		else{
			$("div#PriceBox").fadeTo('slow',1);
		}
			
	});
	
	$("div#Portal").mouseenter(function(){
		$("div#PortalText").fadeTo('fast',1);	
	});
	$("div#Portal").mouseleave(function(){
		$("div#PortalText").fadeTo('fast',0);
	});
	
	
	$("div#Blog").mouseenter(function(){
		$("div#BlogText").fadeTo('fast',1);	
	});
	$("div#Blog").mouseleave(function(){
		$("div#BlogText").fadeTo('fast',0);
	});
	
	
	$("div#AboutUs").mouseenter(function(){
		$("div#AboutUsText").fadeTo('fast',1);	
	});
	$("div#AboutUs").mouseleave(function(){
		$("div#AboutUsText").fadeTo('fast',0);
	});
	
	
	$("div#Unlimited").mouseenter(function(){
		$("div#UnlimitedText").fadeTo('fast',1);	
	});
	$("div#Unlimited").mouseleave(function(){
		$("div#UnlimitedText").fadeTo('fast',0);
	});
	
	
	$("div#AboutUs").mouseenter(function(){
		$("div#AboutUsText").fadeTo('fast',1);	
	});
	$("div#AboutUs").mouseleave(function(){
		$("div#AboutUsText").fadeTo('fast',0);
	});
	
	
	$("div#Other").mouseenter(function(){
		$("div#OtherText").fadeTo('fast',1);	
	});
	$("div#Other").mouseleave(function(){
		$("div#OtherText").fadeTo('fast',0);
	});
});
