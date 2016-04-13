

$(function(){
	
	var $window = $(window);		
	
	var scrollTime = 1.2;			
	var scrollDistance = 170;		
		
	$window.on("mousewheel DOMMouseScroll", function(event){
		
		event.preventDefault();	
										
		var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
		var scrollTop = $window.scrollTop();
		var finalScroll = scrollTop - parseInt(delta*scrollDistance);
			
		TweenMax.to($window, scrollTime, {
			scrollTo : { y: finalScroll, autoKill:true },
				ease: Power1.easeOut,
				autoKill: true,
				overwrite: 5							
			});
					
	});
	
});


   $(".buttons").click(function () {
        var divname= this.value;
          $("#"+divname).slideToggle().siblings().hide("slow");
        });

var subreddit = 'all';
var rddt = 0;
var tbns = 0;
var maxtbns = 20;
var maxrddts = 20;


$.getJSON(
"http://www.reddit.com/r/" + subreddit + ".json?sort=top&t=week&limit=40&jsonp=?",
function foo(data)
{
  $.each(
    data.data.children,
    function (i, post) {
      var img = ['jpg','png','gif'];
      var item = '';
      var tbn = '';
      if (post.data.thumbnail && post.data.thumbnail != 'self' && tbns < maxtbns) {
        tbns++;
        tbn += '<a href="' + post.data.url + '" title="' + post.data.title + '" target="_blank"><img src="' + post.data.thumbnail + '"></a>';
      } else if (rddt<=maxrddts) {
          rddt++;
          item = '<li><p><strong><a href="' + post.data.url + '" target="_blank">' + post.data.title + '</strong></a></p>';
          item += '<p>' + post.data.ups + '&uarr; ' + post.data.downs + '&darr; | <a href="//reddit.com' + post.data.permalink + '" target="_blank">' + post.data.num_comments + ' Comments</a></p></li>';
      }

      $("#reddit .posts").append(item);
      $("#reddit .thumbs").append(tbn);
    }
  )
}
)
.success(function() { console.log("second success"); })
.error(function() { console.log("error"); })
.complete(function() { console.log("complete"); });
