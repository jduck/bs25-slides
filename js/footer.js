Reveal.addEventListener('ready', function() {
    console.log('ready called');

	var footerHTML = '';
	footerHTML += '<div class="footer-line"></div>';
	footerHTML += '<div class="footer-logo1"></div>';
	footerHTML += '<div class="footer-title">';
	footerHTML += '    Musing from Decades of Linux Kernel Security Research<br />';
	footerHTML += '    BOOTSTRAP25 &mdash;';
	footerHTML += '    Joshua "jduck" Drake';
	footerHTML += '</div>';
	footerHTML += '<div class="footer-logo2"></div>';

	function createFooterDIV() {
		var footerDIV = document.createElement('div');
		footerDIV.innerHTML = footerHTML;
		footerDIV.classList.add('footer');
		return footerDIV;
	}

	if ( window.location.search.match( /print-pdf/gi ) ) {

		// add the footer HTML at the bottom of each slide

        // This one fails because it's not live?
		//var nodes = document.querySelectorAll( ['div', 'section'] );

        // This one fails because divs still don't show?
        //var sections = document.getElementsByTagName('section');
        //console.log('found ' + sections.length + ' sections');
        //for (var i = 0; i < sections.length; ++i) {

        var divs = document.getElementsByTagName('div');
        //console.log('found ' + divs.length + ' div elements');

        for (var i = 0; i < divs.length; ++i) {
            var node = divs[i];
            //console.log(node.classList);
            if (node.classList.contains( 'slide-background-content' ) === false) {
                continue;
            }
            var par = node.parentElement;

            // for debugging...
            /*
            var par2 = par.parentElement;
            var h1 = node.querySelector('h1');
            if (h1 !== null) {
                console.log(par2.nodeName + '('+par2.className+') > ' +
                            par.nodeName + '('+par.className+') > ' +
                            node.nodeName + '('+node.className+'): ' + h1.innerText);
            } else {
                console.log(par2.nodeName + '('+par2.className+') > ' +
                            par.nodeName + '('+par.className+') > ' +
                            node.nodeName + '('+node.className+')');
            }
             */

            // skip title slides
            //console.log(par.classList);
			if (par.classList.contains( 'stack' ) === true
					|| par.classList.contains( 'title' ) === true
					|| par.classList.contains( 'ctitle' ) === true) {
                continue;
            }

            // add the footer node
            var fdiv = createFooterDIV();
            fdiv.style.display = 'block';
            fdiv.style.marginTop = '670px';

            //par.style.height = '720px';
            par.insertBefore(fdiv, node.nextSibling);
		}
	} else {
		// add the footer HTML to the main scene (.reveal)
		reveal = document.querySelector('.reveal');
		fdiv = createFooterDIV();
		reveal.appendChild( fdiv );

		// add the event listener to toggle it off for title slides
		Reveal.on('slidechanged', function(event) {
			var ndisp = 'block';
			if (event.currentSlide.classList.contains('title')) {
			  ndisp = 'none';
			}
			var footer = document.querySelector('.reveal .footer');
			if (footer) { footer.style.display = ndisp; }
		});
	}
});
