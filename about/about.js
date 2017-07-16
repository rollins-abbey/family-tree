function _(x){return document.getElementById(x);}
var aboutArray, aboutIndex=0, intrvl;
var contentArray = [
    '<h1>Utah</h1><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. </p>',
	'<h1>Religion</h1><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>',
	'<h1>Fun</h1><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. </p>'
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

//'<h1>Utah</h1><p>Utah is home to us. We are spread across the Salt Lake Valley which makes it convenient to come together and enjoy one another often.</p>',
//	'<h1>Religion</h1><p>Faith in our family begins with trusting our Heavenly Father and His promises. We press forward despite challenges, never giving up on ourselves or our children. We teach our family to have faith in Christ by living what we know to be true. Our children learn their most powerful lessons from our faithfulness.</p>',
//	'<h1>Fun</h1><p>Content for section 3</p>'