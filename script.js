$(function(){
    $(".title").hover(
    function(){
        $(this).css("background","rgba(80,80,80,0.9)")
    },
    function(){
        $(this).css("background","rgba(0,0,0,0)")
    });
	$(".title").click(function(){
		location.href = "index.html";
	});

    $(".btn_lnk").hover(
    function(){
        $(this).css("background","rgba(80,80,80,0.9)")
    },
    function(){
        $(this).css("background","rgba(0,0,0,0)")
    });
	$(".btn_lnk").click(function(){
		location.href = "link.html";
	});

    $(".btn_wok").hover(
    function(){
        $(this).css("background","rgba(80,80,80,0.9)")
    },
    function(){
        $(this).css("background","rgba(0,0,0,0)")
    });
	$(".btn_wok").click(function(){
		location.href = "works.html";
	});

	$(".btn_abt").hover(
    function(){
        $(this).css("background","rgba(80,80,80,0.9)")
    },
    function(){
        $(this).css("background","rgba(0,0,0,0)")
    });
	$(".btn_abt").click(function(){
		location.href = "about.html";
	});
});

