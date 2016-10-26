$(document).ready(function(){
    /*
    * materialize css framework
    */
    $('.parallax').parallax(); //call parallax
    $('.scrollspy').scrollSpy({scrollOffset: 0}); //call scrollspy
    $(".button-sidenav-trigger").sideNav({
        menuWidth: 300, // Default is 240
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });// call side nav
    
    $('.modal-trigger').leanModal();//call modal
    /*
    *click character avatar item
    */
    $('.character-avatar-list').children().click(function(){
        $('.character-avatar-list').children().css('opacity', 0.4);
        $(this).css('opacity', 1);
        $('.ch_info').hide();
        name = $(this).attr('character-name');
        $(name+'.ch_info').show();
    });
    /*
    * Refresh website
    */
    $('#refresh-website').click(function(e) {
        e.preventDefault();
        location.reload();
    });
    
    
    /*
    * Menu SVG
    */
    /* In animations (to close icon) */

	var beginAC = 80,
	    endAC = 320,
	    beginB = 80,
	    endB = 320;

	function inAC(s) {
	    s.draw('80% - 240', '80%', 0.3, {
	        delay: 0.1,
	        callback: function() {
	            inAC2(s)
	        }
	    });
	}

	function inAC2(s) {
	    s.draw('100% - 545', '100% - 305', 0.6, {
	        easing: ease.ease('elastic-out', 1, 0.3)
	    });
	}

	function inB(s) {
	    s.draw(beginB - 60, endB + 60, 0.1, {
	        callback: function() {
	            inB2(s)
	        }
	    });
	}

	function inB2(s) {
	    s.draw(beginB + 120, endB - 120, 0.3, {
	        easing: ease.ease('bounce-out', 1, 0.3)
	    });
	}

	/* Out animations (to burger icon) */

	function outAC(s) {
	    s.draw('90% - 240', '90%', 0.1, {
	        easing: ease.ease('elastic-in', 1, 0.3),
	        callback: function() {
	            outAC2(s)
	        }
	    });
	}

	function outAC2(s) {
	    s.draw('20% - 240', '20%', 0.3, {
	        callback: function() {
	            outAC3(s)
	        }
	    });
	}

	function outAC3(s) {
	    s.draw(beginAC, endAC, 0.7, {
	        easing: ease.ease('elastic-out', 1, 0.3)
	    });
	}

	function outB(s) {
	    s.draw(beginB, endB, 0.7, {
	        delay: 0.1,
	        easing: ease.ease('elastic-out', 2, 0.4)
	    });
	}

	/* Awesome burger default */

	var pathA = document.getElementById('pathA'),
		pathB = document.getElementById('pathB'),
		pathC = document.getElementById('pathC'),
		segmentA = new Segment(pathA, beginAC, endAC),
		segmentB = new Segment(pathB, beginB, endB),
		segmentC = new Segment(pathC, beginAC, endAC),
		trigger = document.getElementById('menu-icon-trigger'),
		toCloseIcon = true,
		sidenav = document.getElementById('sidenav-onepiece'),
		wrapper = document.getElementById('menu-icon-wrapper');
//        dragTarget = document.getElementsByClassName('drag-target');
        dragTarget = $('.drag-target');
        sideNavMenu = $('#sidenav-onepiece .category');
        
	wrapper.style.visibility = 'visible';
    
    //icon menu animation
    SVGanimate = function() {
		if (toCloseIcon) {
			inAC(segmentA);
			inB(segmentB);
			inAC(segmentC);
		} else {
			outAC(segmentA);
			outB(segmentB);
			outAC(segmentC);
		}
		toCloseIcon = !toCloseIcon;
	};
    //call menu animation
	dragTarget[0].onclick = trigger.onclick = SVGanimate;
    sideNavMenu.children().click(function(){//when click category in sidenav
        SVGanimate();
    });
	/* Scale functions */

	function addScale(m) {
		m.className = 'menu-icon-wrapper scaled';
	}

	function removeScale(m) {
		m.className = 'menu-icon-wrapper';
	}

	/* Awesome burger scaled */

	var pathD = document.getElementById('pathD'),
		pathE = document.getElementById('pathE'),
		pathF = document.getElementById('pathF'),
		segmentD = new Segment(pathD, beginAC, endAC),
		segmentE = new Segment(pathE, beginB, endB),
		segmentF = new Segment(pathF, beginAC, endAC),
		wrapper2 = document.getElementById('menu-icon-wrapper2'),
		trigger2 = document.getElementById('menu-icon-trigger2'),
		toCloseIcon2 = true,
		dummy2 = document.getElementById('dummy2');

	wrapper2.style.visibility = 'visible';

	trigger2.onclick = function() {
		addScale(wrapper2);
		if (toCloseIcon2) {
			inAC(segmentD);
			inB(segmentE);
			inAC(segmentF);

			dummy2.className = 'dummy dummy--active';
		} else {
			outAC(segmentD);
			outB(segmentE);
			outAC(segmentF);

			dummy2.className = 'dummy';
		}
		toCloseIcon2 = !toCloseIcon2;
		setTimeout(function() {
			removeScale(wrapper2)
		}, 450);
	};

});
