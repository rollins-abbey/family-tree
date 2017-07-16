function _(x){return document.getElementById(x);}
var aboutArray, aboutIndex=0, intrvl;
var contentArray = [
    '<h1>Utah</h1><p>Utah is home to us. We are spread across the Salt Lake Valley which makes it convenient to come together and enjoy one another often.</p>',
	'<h1>Religion</h1><p>Faith in our family begins with trusting our Heavenly Father and His promises. We press forward despite challenges, never giving up on ourselves or our children. We teach our family to have faith in Christ by living what we know to be true. Our children learn their most powerful lessons from our faithfulness.</p>',
	'<h1>Fun</h1><p>Content for section 3</p>',
	'<h1></h1><p>Content for section 4</p>'
];

function bubbles(aboutIndex){
	_("aboutcontent").style.opacity = 0;
	
	for(var i=0; i < aboutArray.length; i++){
		aboutArray[i].style.background = "rgba(0,0,0,.1)";
	}
	aboutArray[aboutIndex].style.background = "#999";
	setTimeout(function(){
		_("aboutcontent").innerHTML = contentArray[aboutIndex];
        _("aboutcontent").style.opacity = 1;
	}, 300);
}

function slider(){
	aboutIndex++; 
	if(aboutIndex == aboutArray.length){
		aboutIndex = 0; 
	}
	bubbles(aboutIndex);
}
window.addEventListener("load", function(){
	aboutArray = _("bubbles").children;
	intrvl = setInterval(slider, 5000);
});




//function toggleClass(el) {
//    var about = document.getElementById('menu1').children;
//    for (var i = 0; i < about.length; i++){
//        about[i].className = "class1";        
//    }
//    el.className = "class2";
//}