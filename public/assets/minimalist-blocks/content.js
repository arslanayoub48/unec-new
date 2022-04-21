
function _tabs(n) {
    var html = '';
    for (var i = 1; i <= n; i++) {
        html += '\t';
    }
    return '\n' + html;
}

// source: https: //stackoverflow.com/questions/2255689/how-to-get-the-file-path-of-the-currently-executing-javascript-code
function _path() {
    var scripts = document.querySelectorAll('script[src]');
    var currentScript = scripts[scripts.length - 1].src;
    var currentScriptChunks = currentScript.split('/');
    var currentScriptFile = currentScriptChunks[currentScriptChunks.length - 1];
    return currentScript.replace(currentScriptFile, '');
}
var _snippets_path = _path();

var data_basic = {
    'snippets': [

		{
		    'thumbnail': 'preview/basic-01.png',
		    'category': '120',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
                        '<div class="display">' +
			    		'<h1>Beautiful Content. Responsive.</h1>' +
                		'<p><i>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</i></p>' +
                        '</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/basic-02.png',
		    'category': '120',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/basic-03.png',
		    'category': '120',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
			    		'<h1>Heading 1 Text Goes Here.</h1>' +
						'<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/basic-04.png',
		    'category': '120',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
			    		'<h2>Heading 2 Text Goes Here.</h2>' +
						'<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/basic-05.png',
		    'category': '120',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<img src="assets/minimalist-blocks/images/oleg-laptev-545268-unsplash-VD7ll2.jpg" alt="">' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/basic-06.png',
		    'category': '120',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/jon-lalin-731093-unsplash-(1)-tdmMt1.jpg" alt="">' +
					'</div>' +
					'<div class="column half">' +
						'<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/basic-07.png',
		    'category': '120',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/adam-birkett-209727-unsplash-(2)-H2BMm1.jpg" alt="">' +
					'</div>' +
				'</div>'
		},
		{
		    'thumbnail': 'preview/basic-08.png',
		    'category': '120',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/basic-09.png',
		    'category': '120',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
                        '<div class="display">' +
			    		'<h1>Lorem Ipsum is simply dummy text of the printing industry</h1>' +
                        '</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/basic-10.png',
		    'category': '120',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
                        '<div class="display">' +
                        '<p>This is a special report</p>' +
			    		'<h1>Lorem Ipsum is simply dummy text of the printing industry</h1>' +
                        '</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/basic-11.png',
		    'category': '120',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
			    		'<h2 class="size-48">Lorem Ipsum is simply dummy text</h2>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/basic-12.png',
		    'category': '120',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
			    		'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/basic-13.png',
		    'category': '120',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
			    		'<hr>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/basic-14.png', 
		    'category': '120',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<div class="list">' +
							'<i class="icon ion-checkmark"></i>' +
							'<h3>List Item</h3>' +
							'<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
						'</div>' +
					'</div>' +
					'<div class="column half">' +
						'<div class="list">' +
							'<i class="icon ion-checkmark"></i>' +
							'<h3>List Item</h3>' +
							'<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
						'</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/basic-15.png',
		    'category': '120',
		    'html':
			    '<div class="is-social">' +
                    '<a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>' +
				    '\n<a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>' +
				    '\n<a href="mailto:you@example.com"><i class="icon ion-android-drafts"></i></a>' +
                '</div>'
		},

		{
		    'thumbnail': 'preview/basic-16.png',
		    'category': '120',
		    'html':
                '<div class="is-rounded-button-medium" style="margin:1em 0">' +
               	    '<a href="https://twitter.com/" style="background-color: #00bfff;"><i class="icon ion-social-twitter"></i></a>' +
               	    '<a href="https://www.facebook.com/" style="background-color: #128BDB"><i class="icon ion-social-facebook"></i></a>' +
               	    '<a href="mailto:you@example.com" style="background-color: #DF311F"><i class="icon ion-ios-email-outline"></i></a>' +     			
		        '</div>&nbsp;'
		},
        
		/* Video */
		{
		'thumbnail': 'preview/element-video.png',
		'category': '120',
		'html':
				'<div class="embed-responsive embed-responsive-16by9">' +
            		'<iframe width="560" height="315" src="//www.youtube.com/embed/P5yHEKqx86U?rel=0" frameborder="0" allowfullscreen=""></iframe>' +
            	'</div>'
        },

        /* Map */
		{
		'thumbnail': 'preview/element-map.png',
		'category': '120',
		'html':
			    '<div class="embed-responsive embed-responsive-16by9">' +
            		'<iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" class="mg1" src="https://maps.google.com/maps?q=Melbourne,+Victoria,+Australia&amp;hl=en&amp;sll=-7.981898,112.626504&amp;sspn=0.009084,0.016512&amp;oq=melbourne&amp;hnear=Melbourne+Victoria,+Australia&amp;t=m&amp;z=10&amp;output=embed"></iframe>' +
            	'</div>'
        },


        /* Slider */

        // Slider Module (Slick)
		{
		'thumbnail': 'preview/element-slider.png',
		'category': '120',
		'html':
			    '<div class="row clearfix">' +
                    '<div class="column full" data-noedit data-module="slider" data-module-desc="Slider" data-html="' +

                        encodeURIComponent('<div id="{id}" class="slider-on-content" style="width:100%;height:500px;display:none">' +
                            '<div class="is-boxes slider-image" style="background-image: url(\'assets/minimalist-blocks/images/slide1.jpg\');">' +
                            '</div>' +
                            '<div class="is-boxes slider-image" style="background-image: url(\'assets/minimalist-blocks/images/slide2.jpg\');">' +
                            '</div>' +
                            '<div class="is-boxes slider-image" style="background-image: url(\'assets/minimalist-blocks/images/slide3.jpg\');">' +
                            '</div>' +
                        '</div>' +
                        '' +
                        '<scr' + 'ipt>' +
                            'var docReady = function (fn) {' +
                                'var stateCheck = setInterval(function () {' +
                                    'if (document.readyState !== "complete") return;' +
                                    'clearInterval(stateCheck);' +
                                    'try { fn() } catch (e) { }' +
                                '}, 1);' +
                            '};' +
                            'docReady(function () {' +
                                'jQuery("#{id}").css("display","block");' +
                                'jQuery("#{id}").slick({' +
                                    'dots: true,' +
                                    'arrows: true,' +
                                    'infinite: true,' +
                                    'speed: 500,' +
                                    'cssEase: "linear",' +
                                    'slidesToShow: 1,' +
                                    'autoplay: false,' +
                                    'autoplaySpeed: 3000,' +
                                    'fade: false,' +
                                    'adaptiveHeight: true,' +
                                    'responsive: [' +
                                        '{breakpoint: 480, settings: {arrows: false,slidesToShow: 1}}' +
                                    ']' +
                                '});' +
                            '});' +
                        '</scr' + 'ipt>' +
                        '') +

                        '" data-settings="' +

                        encodeURIComponent('[' +
                                '{' +
                                    '"auto":false,' +
                                    '"arrow":true,' +
                                    '"dots":true,' +
                                    '"fade":false,' +
                                    '"height":"500",' +
                                    '"images":' +
                                        '[' +
                                            '{' +
                                                '"src": "assets/minimalist-blocks/images/slide1.jpg", ' +
                                                '"caption": "", "link": "", "width": "450", "align": "", "position": "bottom left"' +
                                            '},' +
                                            '{' +
                                                '"src": "assets/minimalist-blocks/images/slide2.jpg", ' +
                                                '"caption": "", "link": "", "width": "450", "align": "", "position": "bottom left"' +
                                            '},' +
                                            '{' +
                                                '"src": "assets/minimalist-blocks/images/slide3.jpg", ' +
                                                '"caption": "", "link": "", "width": "450", "align": "", "position": "bottom left"' +
                                            '}' +
                                        ']' +
                                '}]') + '"' +

                    '>' +

		            '</div>' +
			    '</div>'
        },
        
        // Slider Module (Glide) => Experimental
        {
            'thumbnail': 'preview/element-slider.png', 'glide': true,
            'category': '120',
            'html':
                '<div class="row clearfix">' +
                    '<div class="column full" data-noedit data-module="slider-content" data-dialog-width="500px" data-module-desc="Slider" data-html="' +

                        encodeURIComponent('' +
                        '<svg width="0" height="0" style="position:absolute;display:none;">' +
                            '<defs>' +
                                '<symbol viewBox="0 0 512 512" id="ion-ios-arrow-left"><path d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"></path></symbol>' +
                                '<symbol viewBox="0 0 512 512" id="ion-ios-arrow-right"><path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"></path></symbol>' +
                            '</defs>' +
                        '</svg>' +
                        '<div id="{id}" class="glide">' +
                            '<div data-glide-el="track" class="glide__track">' +
                                '<ul class="glide__slides">' +
                                    '<li class="glide__slide">' +
                                        '<div data-subblock><img data-image-embed data-noresize data-sync src="assets/minimalist-blocks/images/slide2.jpg" alt="" /></div>' +
                                        '<div class="is-slider-caption" style="left:4vw;bottom:4vw">Lorem Ipsum</div>' +
                                    '</li>' +
                                    '<li class="glide__slide">' +
                                        '<div data-subblock><img data-image-embed data-noresize data-sync src="assets/minimalist-blocks/images/slide3.jpg" alt="" /></div>' +
                                    '</li>' +
                                '</ul>' +
                            '</div>' +
                            '' +
                            '<div class="glide__arrows" data-glide-el="controls">' +
                                '<button class="glide__arrow glide__arrow--left" data-glide-dir="<"><svg class="is-icon-flex"><use xlink:href="#ion-ios-arrow-left"></use></svg></button>' +
                                '<button class="glide__arrow glide__arrow--right" data-glide-dir=">"><svg class="is-icon-flex"><use xlink:href="#ion-ios-arrow-right"></use></svg></button>' +
                            '</div>' +
                        '</div>' +
                        '' +
                        '<scr' + 'ipt>' +
                            'var docReady = function (fn) {' +
                                'var stateCheck = setInterval(function () {' +
                                    'if (document.readyState !== "complete") return;' +
                                    'clearInterval(stateCheck);' +
                                    'try { fn() } catch (e) { }' +
                                '}, 1);' +
                            '};' +
                            'docReady(function () {' +
                                'var _{id} = new Glide("#{id}", {' +
                                    'type: "carousel",' +
                                    'autoplay: false,' +
                                    'animationDuration: 1000,' +
                                    'gap: 0,' +
                                    'perView: 1,' +
                                    'hoverpause: true,' +
                                    'arrow: true,' +
                                    'dots: false,' +
                                '}).mount();' +
                                '_cleanClonedItems();' +
                            '});' +
                            'function _cleanClonedItems() {' +
                                'var clones = document.querySelectorAll(".glide__slide--clone");' +
                                'Array.prototype.forEach.call(clones, function(clone){' +
                                    'clone.removeAttribute("data-subblock");' +
                                    'clone.childNodes[0].removeAttribute("data-subblock");' +
                                '});' +
                            '}' +
                            '' +
                        '</scr' + 'ipt>' +
                        '') +

                        '" data-settings="' +

                        encodeURIComponent('' +
                        '{' +
                            '"type": "carousel",' +
                            '"autoplay":false,' +
                            '"animationDuration":1000,' +
                            '"gap":0,' +
                            '"perView":1,' +
                            '"hoverpause":true,' +
                            '"arrow":true,' +
                            '"dots":false' +
                        '}') + '">' +

                    '</div>' +
                '</div>'
        },
            
        /* Custom Code */
		{
		'thumbnail': 'preview/element-code.png',
		'category': '120',
		'html':
			    '<div class="row clearfix">' +
				    '<div class="column full" data-noedit data-html="' +

                        encodeURIComponent('<h1 id="{id}">Lorem ipsum</h1>' +
                            '<p>This is a code block. You can edit this block using the source dialog.</p>' +
                            '<scr' + 'ipt>' +
                            'var docReady = function (fn) {' +
	                            'var stateCheck = setInterval(function () {' +
		                            'if (document.readyState !== "complete") return;' +
		                            'clearInterval(stateCheck);' +
		                            'try{fn()}catch(e){}' +
	                            '}, 1);' +
                            '};' +
                            'docReady(function() {' +
	                            'document.querySelector(\'#{id}\').innerHTML =\'<b>Hello World..!</b>\';' +
                            '});' +
                            '</scr' + 'ipt>') +

                    '">' +

				    '</div>' +
			    '</div>'
        },
		
		
		{
		    'thumbnail': 'preview/article-02.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-46">Flying High</h1>' +
						'\n<p style="border-bottom: 2px solid #e74c3c; width: 60px; display: inline-block;"></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.</p>' +
						'\n<p style="text-align: justify;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.</p>' +
						'\n<p style="text-align: justify;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/article-04.png',
		    'category': '118',
		    'html':				
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="display">' +
							_tabs(1) + '<p class="size-16">A BEAUTIFUL DAY IN OCTOBER</p>' +
							_tabs(1) + '<h1 class="size-50">Time to think, time to create.</h1>' +
						'\n</div>' +
						'\n<p class="size-16">— By David Anderson</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<p style="text-align: justify;">Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<p style="text-align: justify;">Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/article-07.png',
		    'category': '118',
		    'html':				
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="display">' +
							_tabs(1) + '<h1 class="size-96" style="text-align: center; color: rgb(204, 204, 204); line-height: 1.2">Sunday Lovely Sunday.</h1>' +
						'\n</div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p class="size-16" style="text-align: center;"><i style="color: rgb(204, 204, 204);">By Jennifer Anderson</i></p>' +
					'</div>' +
				'</div>'							
		},
		
		{
		    'thumbnail': 'preview/article-08.png',
		    'category': '118',
		    'html':				
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="color: rgb(136, 136, 136);">WORDS FROM ANDREW JONES</p>' +
						'\n<h1 class="size-60">Home is wherever I\'m with you.</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>' +
					'</div>' +
				'</div>'								
		},
		
		{
		    'thumbnail': 'preview/article-09.png',
		    'category': '118',
		    'html':				
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-32 is-title5-32 is-title-lite"><i>Simplify Things</i></h1>' +
						'\n<p style="color: rgb(136, 136, 136);">Natasha Williams</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-20"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Vivamus leo ante, consectetur sit amet.&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&nbsp;</p>' +
					'</div>' +
				'</div>'							
		},
		
		{
		    'thumbnail': 'preview/article-10.png',
		    'category': '118',
		    'html':				
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="display">' +
							_tabs(1) + '<p class="size-18">EMILLIA JONES</p>' +
							_tabs(1) + '<h1 class="size-96" style="line-height: 1.3">Hello, Summer.</h1>' +
						'\n</div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum dolor sit amet, consectetur adipiscing elit.</p>' +
					'</div>' +
				'</div>'							
		},
				
		{
		    'thumbnail': 'preview/article-13.png',
		    'category': '118',
		    'html':				
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="display">' +
							_tabs(1) + '<h1 class="size-64">Slow Living</h1>' +
						'\n</div>' +
						'\n<p>Vivian C. Bailey</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum dolor sit amet, consectetur adipiscing elit.</p>' +
						'\n<p>Vivamus leo ante, consectetur sit amet vulputate vel, sit amet lectus.</p>' +
					'</div>' +
				'</div>'					
		},
		
		{
		    'thumbnail': 'preview/article-16.png',
		    'category': '118',
		    'html':				
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="display">' +
							_tabs(1) + '<h1 class="size-42" style="text-align: center;">Simple, Versatile, Functional</h1>' +
							_tabs(1) + '<p class="size-18" style="text-align: center; line-height: 2.2">JANE SMITH</p>' +
						'\n</div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<p style="text-align: justify;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<p style="text-align: justify;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
					'</div>' +
				'</div>'							
		},

		{
		    'thumbnail': 'preview/article-23.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-32 is-title5-32 is-title-lite" style="width:100%;max-width: 340px;">New Style</h1>' +
						'\n<p>By David Smith</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur elit.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur elit.</p>' +
					'</div>' +
				'</div>'
		},
	
		{
		    'thumbnail': 'preview/article-25.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p class="size-21" style="text-align: center; letter-spacing: 4px;"><i>the</i></p>' +
						'\n<h1 class="size-68" style="text-align: center; letter-spacing: 18px;">OCEAN</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: center">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: center"><i>Spencer Lane</i></p>' +
					'</div>' +
				'</div>'
		},
	
		{
		    'thumbnail': 'preview/article-27.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full right">' +
						'<div class="display">' +
							_tabs(1) + '<h1 class="size-96">A Little Story</h1>' +
						'\n</div>' +
						'\n<p style="border-bottom: 3px solid #333; width: 80px; display: inline-block;"></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: right;">JOHN ANDERSON</p>' +
					'</div>' +
				'</div>'
		},
	
		{
		    'thumbnail': 'preview/article-30.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 style="text-align: center;">My Summer</h1>' +
						'\n<p style="text-align: center;"><i><span style="color: rgb(136, 136, 136);">"Lorem Ipsum is simply dummy text of the printing and typesetting industry."<br>Jane Clark</span></i></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: justify;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>' +
						'\n<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/article-31.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<h1>Simple, clean, bright</h1>' +
						'\n<p class="size-16">— Samantha Holmes</p>' +
					'</div>' +
					'<div class="column half">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet.</p>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/article-33.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="display">' +
							_tabs(1) + '<p class="size-18">EMMA STAUFER</p>' +
							_tabs(1) + '<h1 class="size-48" style="text-transform: none">Back to December</h1>' +
						'\n</div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet.</p>' +
					'</div>' +
				'</div>'
		},
	
		{
		    'thumbnail': 'preview/article-35.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="display">' +
							_tabs(1) + '<h1 class="size-60">Happiness.</h1>' +
						'\n</div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<p style="text-align: justify;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet. Vimamus ante.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<p style="text-align: justify;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet.&nbsp;Vimamus ante.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: justify;"><i>Bryan Lewis</i></p>' +
					'</div>' +
				'</div>'
		},

		
		{
		    'thumbnail': 'preview/article-39.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<div class="padding-20">' +
							'<h1 class="size-48 is-title5-48 is-title-lite">Spring in March</h1>' +
						'</div>' +
					'</div>' +
					'<div class="column half">' +
						'<div class="padding-20">' +
							_tabs(1) + '<p style="text-align: justify;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur elit.</p>' +
							_tabs(1) + '<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
							_tabs(1) + '<div class="spacer height-20"></div>' +
							_tabs(1) + '<p class="size-16" style="text-align: right;">Irene Johnson</p>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/article-40.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-80">Twenty Four Minutes</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p class="size-16" style="text-align: center;">William Norris</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/article-41.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-50" style="text-align: right; letter-spacing: 6px;">Early Morning Riser</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p class="size-16" style="text-align: right;"><i>Jeff Watkins</i></p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/article-43.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-32" style="text-align: center; letter-spacing: 3px;">BEAUTY OF NATURE</h1>' +
						'\n<hr>' +
						'\n<p class="size-14" style="text-align: center; letter-spacing: 4px;">DAVID ANDERSON</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
					'</div>' +
				'</div>'
		},
	
		{
		    'thumbnail': 'preview/article-46.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-32 is-title3-32 is-title-lite" style="text-align: center;">October & November</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>' +
						'\n<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p class="size-16" style="text-align: right;"><i>Sarah Anderson</i></p>' +
					'</div>' +
				'</div>'
		},
	
		{
		    'thumbnail': 'preview/article-49.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-46">just chillin\'</h1>' +
						'\n<p class="size-16"><i style="color: rgb(136, 136, 136);">"Lorem Ipsum is simply dummy text." — Anne Marry</i></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<p style="text-align: justify;">Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<p style="text-align: justify;">Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/article-50.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p class="size-16" style="text-align: center;">Michelle Duncan</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-54" style="text-align: center;">IN LOVE WITH YOUR LIFE</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/article-51.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-32 is-title4-32 is-title-lite" style="display:inline-block">Behind you.</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p class="size-14" style="text-align: justify;"><i>Brenda Waller</i></p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/article-52.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-42" style="text-align: center; letter-spacing: 10px;">CLEAN</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p class="size-16" style="text-align: center;"><i>Words from Michael Williams</i></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<p style="text-align: justify;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet. Vivamus ante.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<p style="text-align: justify;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet. Vivamus ante.</p>' +
					'</div>' +
				'</div>'
		},
	
		{
		    'thumbnail': 'preview/article-54.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div style="width:100%;max-width:350px;">' +
							_tabs(1) + '<p>A STORY.</p>' +
							_tabs(1) + '<h1 class="size-38">THE WHEELS ARE SPINNING</h1>' +
							_tabs(1) + '<p class="size-16" style="color: rgb(136, 136, 136);">Casey Lansford</p>' +
						'\n</div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<p style="text-align: justify;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<p style="text-align: justify;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/article-55.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-48 is-title1-48 is-title-lite" style="text-align: center;">Brave</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-20"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p class="size-14" style="text-align: center; letter-spacing: 5px;">RUTH WATTERS</p>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/article-57.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="display">' +
							_tabs(1) + '<h1 class="size-54" style="text-align: left; letter-spacing: 2px;">Keep everything Simple</h1>' +
						'\n</div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<p class="size-16" style="text-align: justify;"><i><span style="color: rgb(147, 147, 147);">Words from:<br> Brandon Lamberth</span></i></p>' +
					'</div>' +
					'<div class="column two-third">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet.</p>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/article-58.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-64 is-title5-64 is-title-bold">hello...</h1>' +
						'\n<p class="size-16" style="text-transform: uppercase; letter-spacing: 4px;">Lorem Ipsum is simply dummy text of the printing industry</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p class="size-16" style="text-align: justify; letter-spacing: 2px;">Samantha Holmes</p>' +
					'</div>' +
				'</div>'
		},
		
        
		{
		    'thumbnail': 'preview/article-59.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 style="color: rgb(198, 198, 198); text-align: center;font-weight:bold">Go explore.</h1>' +
						'\n<p class="size-14" style="text-align: center;"><i>Russel Y. Trevino </i></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/article-60.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p class="size-16" style="text-transform: uppercase; letter-spacing: 4px;">Heart-warming story from<br>Wilhelmina Bradley</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-54">Best friend</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>' +
					'</div>' +
				'</div>'
					
		},
		
		{
		    'thumbnail': 'preview/article-61.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<div class="display" style="width:100%;max-width:400px;margin: 0 auto">' +
							_tabs(1) + '<h1 class="size-42" style="letter-spacing: 5px;">WORDS FROM HEART</h1>' +
							_tabs(1) + '<p class="size-14" style="color: rgb(136, 136, 136); letter-spacing: 4px;">Stephen Garcia</p>' +
						'\n</div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<p style="text-align: justify;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<p style="text-align: justify;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<p style="text-align: justify;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
					'</div>' +
				'</div>'	
		},
		
		{
		    'thumbnail': 'preview/article-62.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p class="size-16" style="text-align: center; letter-spacing: 2px;">A STORY</p>' +
						'\n<h1 class="size-54" style="text-align: center; letter-spacing: 2px;">Dancing in Harmony</h1>' +
						'\n<p style="text-align: center;"><i>"Lorem Ipsum is simply dummy text of the printing."</i></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p class="size-16" style="text-align: center; text-transform: uppercase; letter-spacing: 3px;">Annie Baldwin </p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante.</p>' +
					'</div>' +
				'</div>'
		},
		
		


        /* HEADLINE */
	
		{
		    'thumbnail': 'preview/header-02.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-48 is-title4-48" style="letter-spacing:5px">STUNNING</h1>' +
					'</div>' +
				'</div>'
		},
	
		{
		    'thumbnail': 'preview/header-07.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<div class="display">' +
							_tabs(1) + '<h1 class="size-92" style="margin-bottom:0;">Outstanding</h1>' +
							_tabs(1) + '<p style="margin-top:0">Lorem Ipsum is dummy text of the printing and typesetting industry</p>' +
						'\n</div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small edit">Contact Us</a>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/header-08.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<i class="icon ion-coffee size-80" style="line-height:1"></i>'+
						'\n<div class="display">' +
							_tabs(1) + '<h1 class="size-80">Café & Bistro</h1>' +
						'\n</div>' +
						'\n<p><i>Lorem Ipsum is simply dummy text</i></p>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/header-09.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<div class="display">' +
							_tabs(1) + '<h1>Calm, Pure, and lovely</h1>' +
							_tabs(1) + '<p>Lorem Ipsum has been the industry\'s standard text ever since the 1500s, when an unknown printer took a galley of type</p>' +
						'\n</div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<a href="#" class="is-btn is-btn-ghost1 is-upper is-rounded-30 is-btn-small edit">Shop Now</a>' +
					'</div>' +
				'</div>'
		},
       
        {
		    'thumbnail': 'preview/header-23.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<div class="display">' +
							_tabs(1) + '<h1 class="size-80 is-title1-80 is-title-lite">Pure & Healthy</h1>' +
						'\n</div>' +
						'\n<p class="size-21">Lorem Ipsum has been the industry\'s standard text ever since the 1500s, when an unknown printer took a galley of type</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small">Our Products</a>' +
					'</div>' +
				'</div>'
		},
				
		{
		    'thumbnail': 'preview/header-25.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full right">' +
						'<div class="display">' +
							_tabs(1) + '<p class="size-21 is-info2">Welcome to our coffee shop</p>' +
							_tabs(1) + '<h1 class="size-100" style="text-transform: none">Smell it, taste it.</h1>' +
						'\n</div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full right">' +
						'<a href="#" class="is-btn is-btn-ghost1 is-upper is-rounded-30">Browse Menu</a>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/header-26.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-60">Planning a memorable trip? You came to the right place.</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<a href="#" class="is-btn is-btn-ghost1 is-upper">CONTACT US</a>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/header-27.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<div class="display">' +
							_tabs(1) + '<p class="size-21">We are Creative Agency in New York</p>' +
							_tabs(1) + '<h1 class="size-112"><b>CLEAN. SIMPLE.</b></h1>' +
						'\n</div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<a href="#" class="is-btn is-btn-ghost1 is-upper">Get A Quote</a>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/header-28.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<div class="display">' +
							_tabs(1) + '<h1 class="size-64">Good for Health, Good for You</h1>' +
						'\n</div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<div style="margin: 10px 0">' +
							_tabs(1) + '<a href="#" class="is-btn is-btn-ghost1 is-upper is-rounded-30">All Products</a>' +
				        '\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/header-32.png',
		    'category': '101',
		    'html':				
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<div class="display">' +
							_tabs(1) + '<h1 class="size-108">Stitch Studio</h1>' +
							_tabs(1) + '<p>Join Our Sewing Classes & Craft Workshops</p>' +
						'\n</div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<a href="#" class="is-btn is-btn-ghost1 is-upper is-rounded-30 is-btn-small">Contact Us</a>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/header-34.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<div class="display">' +
							_tabs(1) + '<h1 class="size-120" style="letter-spacing: 10px;">Unique.</h1>' +
							_tabs(1) + '<p>PLAN YOUR SPECIAL DAY</p>' +
						'\n</div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small" style="font-weight: 200">Book a Consultation</a>' +
					'</div>' +
				'</div>'
		},
   
		{
		    'thumbnail': 'preview/header-38.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-104 is-title-lite">DREAM HOME</h1>' +
						'\n<p class="size-24">BEAUTIFY YOUR HOME WITH MODERN FURNITURE SET.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<a href="#" class="is-btn is-btn-ghost1 is-upper">New Arrivals</a>' +
					'</div>' +
				'</div>'
		},
     
		{
		    'thumbnail': 'preview/header-41.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full right">' +
						'<div class="display">' +
							_tabs(1) + '<h1 class="size-48">We Create and Design Beautiful Websites</h1>' +
						'\n</div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full right">' +
						'<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small">Our Works</a>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/header-42.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full right">' +
						'<div class="display">' +
							_tabs(1) + '<h1 class="size-132" style="letter-spacing: 8px;">Tasty</h1>' +
							_tabs(1) + '<p>Healthy & Natural Food</p>' +
						'\n</div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full right">' +
						'<a href="#" class="is-btn is-btn-ghost1 is-upper is-rounded-30">Our Menu</a>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/header-43.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="display">' +
							_tabs(1) + '<h1 class="size-100" style="letter-spacing: 7px;">Mike Watson</h1>' +
							_tabs(1) + '<p class="size-21">Expert in Public Interior Design</p>' +
						'\n</div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small">View Portfolio</a>' +
					'</div>' +
				'</div>'
		},
    
		{
		    'thumbnail': 'preview/header-46.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="display">' +
							_tabs(1) + '<h1 class="size-80" style="text-transform: none">Monday to Friday</h1>' +
							_tabs(1) + '<p>We make shopping way easier and convenient for you</p>' +
						'\n</div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<a href="#" class="is-btn is-btn-ghost1 is-upper">View Collection</a>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/header-47.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-42" style="letter-spacing: 3px;">Struggling to find the perfect event organizer? No worries. We\'re here to help you creating the event like no other.</h1>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/header-48.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-48 is-title1-48 is-title-bold" style="line-height:1.7">Design<br>in<br>Silence</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-140"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: right; font-style: italic;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an<br>unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/header-49.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-80 is-title1-80 is-title-bold" style="text-align: center; letter-spacing: 9px;">STUDIO</h1>' +
						'\n<p class="size-21" style="text-align: center; text-transform: uppercase; letter-spacing: 6px;">EVERY DETAIL MATTERS</p>' +
						'\n<div class="spacer height-40"></div>' +
						'\n<p style="text-align: center; font-style: normal;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. Lorem ipsum dolor sit amet.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small">OUR WORKS</a>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/header-50.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-50" style="letter-spacing: 5px;">A MININALIST STYLE</h1>' +
						'\n<br>' +
						'\n<p style="border-bottom: 2px solid #000; width: 90px; display: inline-block; margin-top: 0"></p>' +
						'\n<p>Lorem Ipsum is dummy text of printing industry</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small">View Gallery</a>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/header-51.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h3 class="size-21" style="letter-spacing: 3px;">THE LOOKBOOK</h3>' +
						'\n<h1 class="size-64" style="letter-spacing: 5px;"><b style="font-weight: 800;">NEW </b>SUMMER <b style="font-weight: 800;">TRENDS.</b></h1>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/header-52.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p class="size-21" style="text-align: center; letter-spacing: 10px;">TRAVEL AGENCY</p>' +
						'\n<h1 class="size-80" style="text-align: center; letter-spacing: 3px; font-style: normal;">Where Will You Go Today?</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="center" style="margin: 15px 0">' +
							'<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small">View Destinations</a>' +
						'</div>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/header-53.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-32 is-title4-32 is-title-lite" style="display: inline-block; letter-spacing: 10px;">MARY EDWARDS</h1>' +
						'\n<p style="margin-top: 7px;">Web Developer & Graphic Designer</p>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/header-54.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h3 class="size-21" style="letter-spacing: 5px;">Spring 2020</h3>' +
						'\n<h1 class="size-68" style="letter-spacing: 9px; font-style: italic;">IT\'S YOUR TIME TO SHINE</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div style="margin: 20px 0">' +
							'<a href="#" class="is-btn is-btn-ghost1 is-upper">Contact Us</a>' +
						'</div>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/header-55.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<p style="text-transform: uppercase; letter-spacing: 6px;">Creative Agency</p>' +
						'\n<h1 class="size-76" style="letter-spacing: 5px; font-weight: bold; text-transform: uppercase;">Innovation</h1>' +
						'\n<p style="border-bottom: 2px solid #000; width: 50px; display: inline-block;"></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small">Get a Quote</a>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/header-56.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: center; letter-spacing: 11px; text-transform: uppercase;">Hello Friends</p>' +
						'\n<h1 style="letter-spacing: 3px; text-align: center; text-transform: uppercase;">This is Dave. I Develop Websites and Design Beautiful Things You Will Love</h1>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/header-57.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-80 is-title1-80 is-title-bold" style="text-align: center;">now or never</h1>' +
						'\n<p style="text-align: center; letter-spacing: 5px;">MEN\'S CLOTHING</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: center;">Lorem Ipsum is simply dummy text of the printing and typesetting industry, vivamus leo ante.</p>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/header-58.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-transform: uppercase; letter-spacing: 2px;">Love for Food</p>' +
						'\n<h1 class="size-60" style="letter-spacing: 5px; text-transform: uppercase;">Eat & Dream</h1>' +
						'\n<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
						'\n<p style="border-bottom: 1px solid #000; width: 80px; display: inline-block;"></p>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/header-59.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-50" style="letter-spacing: 2px; font-weight: bold;">We design and build awesome products that make a difference.</h1>' +
						'\n<p style="text-transform: uppercase; letter-spacing: 3px;">Lorem Ipsum is simply dummy text</p>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/header-60.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: center;line-height:1.4;"><i class="icon ion-android-favorite-outline size-32"></i></p>' +
						'\n<p style="line-height: 1; text-transform: uppercase; letter-spacing: 7px;text-align: center;">HOME DECOR</p>' +
						'\n<h1 class="size-68" style="font-style: normal; letter-spacing: 5px;text-align: center;">A Reflection of You</h1>' +
						'\n<div class="spacer height-40"></div>' +
						'\n<p class="size-14" style="text-transform: uppercase; letter-spacing: 4px;text-align: center;">Modern / Functional / Timeless</p>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/header-61.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p class="size-21" style="color: rgb(231, 102, 60);letter-spacing: 4px;margin-bottom: 0px;">CREATIVITY. PEOPLE.</p>' +
						'\n<p style="border-bottom: 2px solid #bfbfbf; width: 40px; display: inline-block; margin-top: 14px;"></p>' +
						'\n<h1 class="size-60" style="text-transform: uppercase; letter-spacing: 3px">A Place to <b>Connect</b></h1>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/header-63.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-88 is-title-bold" style="letter-spacing: 3px;">Scale.</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-100"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p>Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
					'</div>' +
				'</div>'
		},
		
		/* PHOTOS */


		//TODO START



		{
		'thumbnail': 'preview/photos-51.png',
		'category': '102',
		'html':
				'<div class="row clearfix">' +
                    '<div class="column half">' +
                        '<img src="assets/minimalist-blocks/images/jon-lalin-731093-unsplash-(1)-tdmMt1.jpg" alt="" style="margin: 0;float: left;">' +
                    '</div>' +
                    '<div class="column half">' +
                        '<img src="assets/minimalist-blocks/images/adam-birkett-209727-unsplash-(2)-H2BMm1.jpg" alt="" style="margin: 0;float: left;">' +
                    '</div>' +
                '</div>'
},

		{
		    'thumbnail': 'preview/photos-52.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix">' +
                    '<div class="column third">' +
                        '<img src="assets/minimalist-blocks/images/chuttersnap-413002-unsplash-83HqE1.jpg" alt="" style="margin: 0;float: left;">' +
                    '</div>' +
                    '<div class="column third">' +
                        '<img src="assets/minimalist-blocks/images/caroline-bertolini-270870-unsplash-1j5FB2.jpg" alt="" style="margin: 0;float: left;">' +
                    '</div>' +
                    '<div class="column third">' +
                        '<img src="assets/minimalist-blocks/images/theo-roland-740436-unsplash-WqnWJ3.jpg" alt="" style="margin: 0;float: left;">' +
                    '</div>' +
                '</div>'
		},

		{
		    'thumbnail': 'preview/photos-50.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix">' +
                    '<div class="column full">' +
                        '<img src="assets/minimalist-blocks/images/oleg-laptev-545268-unsplash-VD7ll2.jpg" alt="" style="margin: 0;float: left;">' +
                    '</div>' +
                '</div>'
		},

		{
		    'thumbnail': 'preview/photos-47.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix" style="margin-left:-100px;margin-right:-100px">' +
                    '<div class="column full">' +
                        '<img src="assets/minimalist-blocks/images/oleg-laptev-545268-unsplash-VD7ll2.jpg" alt="" style="margin: 0;float: left;">' +
                    '</div>' +
                '</div>'
		},


		{
		    'thumbnail': 'preview/photos-48.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix" style="padding: 0;">' +
                    '<div class="column half" style="padding: 0;">' +
                        '<img src="assets/minimalist-blocks/images/jon-lalin-731093-unsplash-(1)-tdmMt1.jpg" alt="" style="margin: 0;float: left;">' +
                    '</div>' +
                    '<div class="column half" style="padding: 0;">' +
                        '<img src="assets/minimalist-blocks/images/adam-birkett-209727-unsplash-(2)-H2BMm1.jpg" alt="" style="margin: 0;float: left;">' +
                    '</div>' +
                '</div>'
		},

		{
		    'thumbnail': 'preview/photos-49.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix" style="padding: 0;">' +
                    '<div class="column third" style="padding: 0;">' +
                        '<img src="assets/minimalist-blocks/images/chuttersnap-413002-unsplash-83HqE1.jpg" alt="" style="margin: 0;float: left;">' +
                    '</div>' +
                    '<div class="column third" style="padding: 0;">' +
                        '<img src="assets/minimalist-blocks/images/caroline-bertolini-270870-unsplash-1j5FB2.jpg" alt="" style="margin: 0;float: left;">' +
                    '</div>' +
                    '<div class="column third" style="padding: 0;">' +
                        '<img src="assets/minimalist-blocks/images/theo-roland-740436-unsplash-WqnWJ3.jpg" alt="" style="margin: 0;float: left;">' +
                    '</div>' +
                '</div>'
		},

		{
		    'thumbnail': 'preview/photos-46.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix" style="padding: 0;">' +
                    '<div class="column full" style="padding: 0;">' +
                        '<img src="assets/minimalist-blocks/images/oleg-laptev-545268-unsplash-VD7ll2.jpg" alt="" style="margin: 0;float: left;">' +
                    '</div>' +
                '</div>'
		},

		{
		    'thumbnail': 'preview/photos-53.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix" style="padding: 0;">' +
                    '<div class="column third" style="padding: 0;">' +
                        '<img src="assets/minimalist-blocks/images/chuttersnap-413002-unsplash-83HqE1.jpg" alt="" style="margin: 0;float: left;">' +
                    '</div>' +
                    '<div class="column third" style="padding: 0;">' +
                        '<img src="assets/minimalist-blocks/images/caroline-bertolini-270870-unsplash-1j5FB2.jpg" alt="" style="margin: 0;float: left;">' +
                    '</div>' +
                    '<div class="column third" style="padding: 0;">' +
                        '<img src="assets/minimalist-blocks/images/theo-roland-740436-unsplash-WqnWJ3.jpg" alt="" style="margin: 0;float: left;">' +
                    '</div>' +
                '</div>' +
				'<div class="row clearfix" style="padding: 0;">' +
                    '<div class="column half" style="padding: 0;">' +
                        '<img src="assets/minimalist-blocks/images/jon-lalin-731093-unsplash-(1)-tdmMt1.jpg" alt="" style="margin: 0;float: left;">' +
                    '</div>' +
                    '<div class="column half" style="padding: 0;">' +
                        '<img src="assets/minimalist-blocks/images/adam-birkett-209727-unsplash-(2)-H2BMm1.jpg" alt="" style="margin: 0;float: left;">' +
                    '</div>' +
                '</div>'
		},

		{
		    'thumbnail': 'preview/photos-14.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-48 is-title1-48 is-title-lite" style="text-align: center;">PORTFOLIO</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half center">' +
						'<img src="assets/minimalist-blocks/images/pawel-czerwinski-1080345-unsplash-Zxz1W1.jpg" alt="">' +
						'\n<h3 class="size-21">IMAGE CAPTION</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text</p>' +
					'</div>' +
					'<div class="column half center">' +
						'<img src="assets/minimalist-blocks/images/agata-create-1137058-unsplash-(1)-UvBs02.jpg" alt="">' +
						'\n<h3 class="size-21">IMAGE CAPTION</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text</p>' +
					'</div>' +
				'</div>'
		},
        
		{
		    'thumbnail': 'preview/photos-15.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-48 is-title1-48 is-title-lite" style="text-align: center;">Gallery</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<img src="assets/minimalist-blocks/images/monika-grabkowska-742426-unsplash-AtCtH1.jpg" alt="">' +
						'\n<h3 class="size-18">CAPTION</h3>' +
						'\n<p class="size-14" style="color: rgb(136, 136, 136);">Lorem Ipsum is dummy text.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<img src="assets/minimalist-blocks/images/mira-bozhko-456995-YiVKC1.jpg" alt="">' +
						'\n<h3 class="size-18">CAPTION</h3>' +
						'\n<p class="size-14" style="color: rgb(136, 136, 136);">Lorem Ipsum is dummy text.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<img src="assets/minimalist-blocks/images/lauren-mancke-63448-unsplash-AtCtH2.jpg" alt="">' +
						'\n<h3 class="size-18">CAPTION</h3>' +
						'\n<p class="size-14" style="color: rgb(136, 136, 136);">Lorem Ipsum is dummy text.</p>' +
					'</div>' +
				'</div>'
		},
        
		{
		    'thumbnail': 'preview/photos-16.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<img src="assets/minimalist-blocks/images/susanne-schwarz-1142929-unsplash-IZGK11.jpg" alt="">' +
						'\n<h3 class="size-21">IMAGE CAPTION</h3>' +
						'\n<p>Lorem Ipsum is dummy text of the printing industry</p>' +
					'</div>' +
				'</div>'
		},
        
		{
		    'thumbnail': 'preview/photos-17.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-54" style="letter-spacing: 6px;">GALLERY</h1>' +
						'\n<p style="border-bottom: 2.5px solid #b5b5b5;width: 60px;display: inline-block;"></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third center">' +
						'<img src="assets/minimalist-blocks/images/art-materials-close-up-color-pencils-1484263-jT5E21.jpg" alt="" style="border-radius: 500px;">' +
						'\n<p class="size-14">Lorem Ipsum is dummy text</p>' +
					'</div>' +
					'<div class="column third center">' +
						'<img src="assets/minimalist-blocks/images/oleg-laptev-546607-unsplash-SKGb82.jpg" alt="" style="border-radius: 500px;">' +
						'\n<p class="size-14">Lorem Ipsum is dummy text</p>' +
					'</div>' +
					'<div class="column third center">' +
						'<img src="assets/minimalist-blocks/images/michal-grosicki-XG2yA3.jpg" alt="" style="border-radius: 500px;">' +
						'\n<p class="size-14">Lorem Ipsum is dummy text</p>' +
					'</div>' +
				'</div>'
		},
        
		{
		    'thumbnail': 'preview/photos-18.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 style="text-align: center;letter-spacing: 2px;color: rgb(191, 191, 191);font-weight: bold;">Gallery.</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half center">' +
						'<img src="assets/minimalist-blocks/images/remi-muller-359340-unsplash-JOL3q1.jpg" alt="">' +
						'\n<p><i>Lorem Ipsum is dummy text</i></p>' +
					'</div>' +
					'<div class="column half center">' +
						'<img src="assets/minimalist-blocks/images/dlanor-s-591314-unsplash-maNC32.jpg" alt="">' +
						'\n<p><i>Lorem Ipsum is dummy text</i></p>' +
					'</div>' +
				'</div>'
		},
        
		{
		    'thumbnail': 'preview/photos-19.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-38" style="letter-spacing: 1px;">Creative Things We\'ve Done</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third center">' +
						'<img src="assets/minimalist-blocks/images/agata-create-1132088-unsplash-(1)-adQTO1.jpg" alt="">' +
						'\n<p>IMAGE CAPTION</p>' +
					'</div>' +
					'<div class="column third center">' +
						'<img src="assets/minimalist-blocks/images/lucrezia-carnelos-1127196-unsplash-Y7ahO2.jpg" alt="">' +
						'\n<p>IMAGE CAPTION</p>' +
					'</div>' +
					'<div class="column third center">' +
						'<img src="assets/minimalist-blocks/images/bright-bulb-close-up-1166643-oof1G3.jpg" alt="">' +
						'\n<p>IMAGE CAPTION</p>' +
					'</div>' +
				'</div>'
		},
        
		{
		    'thumbnail': 'preview/photos-20.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<img src="assets/minimalist-blocks/images/omar-lopez-32084-8ciiC1.jpg" alt="">' +
						'\n<p style="color: rgb(136, 136, 136);">Lorem Ipsum is dummy text of the printing industry</p>' +
					'</div>' +
				'</div>'
		},
        
		{
		    'thumbnail': 'preview/photos-21.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-46" style="letter-spacing: 5px;">CREATIVE THINGS WE HAVE CREATED LATELY</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<img src="assets/minimalist-blocks/images/-ORebV1.jpg" alt="">' +
					'</div>' +
					'<div class="column third">' +
						'<img src="assets/minimalist-blocks/images/ian-dooley-298771-unsplash-Hu2RU3.jpg" alt="">' +
					'</div>' +
					'<div class="column third">' +
						'<img src="assets/minimalist-blocks/images/daniel-klopper-1142809-unsplash-pToHm2.jpg" alt="">' +
					'</div>' +
				'</div>'
		},
        
		{
		    'thumbnail': 'preview/photos-22.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h3 class="size-24" style="font-style: normal; letter-spacing: 2px;">Caption.</h3>' +
						'\n<p>Lorem Ipsum is dummy text of the printing industry</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-20"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<img src="assets/minimalist-blocks/images/anthony-tran-1076077-vcoLP1.jpg" alt="">' +
					'</div>' +
				'</div>'
		},
        
		{
		    'thumbnail': 'preview/photos-23.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column two-third">' +
						'<img src="assets/minimalist-blocks/images/rawpixel-1200191-unsplash-Ms1O81.jpg" alt="">' +
					'</div>' +
					'<div class="column third">' +
						'<h4 class="size-21" style="letter-spacing: 2px;">IMAGE CAPTION</h4>' +
						'\n<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
					'</div>' +
				'</div>'
		},
        
		{
		    'thumbnail': 'preview/photos-24.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<h4 class="size-21" style="letter-spacing: 2px;">IMAGE CAPTION</h4>' +
						'\n<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
					'</div>' +
					'<div class="column two-third">' +
						'<img src="assets/minimalist-blocks/images/iman-soleimany-zadeh-1205567-unsplash-AUqMZ2.jpg" alt="">' +
					'</div>' +
				'</div>'
		},
        
		{
		    'thumbnail': 'preview/photos-25.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/maksym-zakharyak-688728-unsplash-p9w092.jpg" alt="">' +
					'</div>' +
					'<div class="column half">' +
						'<div class="spacer height-60"></div>' +
						'\n<h4 class="size-21" style="letter-spacing: 2px; text-align: right;">IMAGE CAPTION</h4>' +
						'\n<div class="spacer height-40"></div>' +
						'\n<p style="text-align: right; font-style: normal;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
					'</div>' +
				'</div>'
		},
        
		{
		    'thumbnail': 'preview/photos-26.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<div class="spacer height-60"></div>' +
						'\n<h4 class="size-21" style="letter-spacing: 2px;">IMAGE CAPTION</h4>' +
						'\n<div class="spacer height-40"></div>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/rodion-kutsaev-24833-unsplash-HEuVp1.jpg" alt="">' +
					'</div>' +
				'</div>'
		},
        
		{
		    'thumbnail': 'preview/photos-27.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column two-third">' +
						'<img src="assets/minimalist-blocks/images/monica-galentino-102655-unsplash-gfbdC1.jpg" alt="">' +
					'</div>' +
					'<div class="column third">' +
						'<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. Vivamus leo ante.</p>' +
					'</div>' +
				'</div>'
		},
        
		{
		    'thumbnail': 'preview/photos-28.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. Vivamus leo ante.</p>' +
					'</div>' +
					'<div class="column two-third">' +
						'<img src="assets/minimalist-blocks/images/rawpixel-1197453-unsplash-a7ozj2.jpg" alt="">' +
					'</div>' +
				'</div>'
		},
        
		{
		    'thumbnail': 'preview/photos-29.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/-XstZ21.jpg" alt="">' +
						'\n<img src="assets/minimalist-blocks/images/-budQW2.jpg" alt="">' +
					'</div>' +
					'<div class="column half">' +
						'<h3 style="font-style: normal; letter-spacing: 2px;">Caption.</h3>' +
						'\n<div class="spacer height-40"></div>' +
						'\n<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
					'</div>' +
				'</div>'
		},
        
		{
		    'thumbnail': 'preview/photos-30.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<h3 style="font-style: normal; letter-spacing: 2px;">Caption.</h3>' +
						'\n<div class="spacer height-40"></div>' +
						'\n<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/sarah-dorweiler-211779-unsplash-dN96G1.jpg" alt="">' +
						'\n<img src="assets/minimalist-blocks/images/kris-atomic-39874-unsplash-vpMhe2.jpg" alt="">' +
					'</div>' +
				'</div>'
		},
        
		{
		    'thumbnail': 'preview/photos-35.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/rawpixel-1197458-unsplash-J52N31.jpg" alt="">' +
					'</div>' +
					'<div class="column half right">' +
						'<h3 style="text-align: right; letter-spacing: 3px;">Image Caption</h3>' +
						'\n<p style="text-align: right;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. Vivamus leo ante sit amet.</p>' +
						'\n<p style="border-bottom: 2px solid #000; width: 60px; display: inline-block;"></p>' +
					'</div>' +
				'</div>'
		},
        
		{
		    'thumbnail': 'preview/photos-36.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<h3 style="letter-spacing: 3px;">Image Caption</h3>' +
						'\n<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. Vivamus leo ante sit amet.</p>' +
						'\n<p style="border-bottom: 2px solid #000; width: 60px; display: inline-block;"></p>' +
					'</div>' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/-5F3zm1.jpg" alt="">' +
					'</div>' +
				'</div>'
		},
        
		{
		    'thumbnail': 'preview/photos-37.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<div style="padding-right:30px">' +
							_tabs(1) + '<img src="assets/minimalist-blocks/images/-4r9Fa1.jpg" alt="">' +
						'\n</div>' +
					'</div>' +
					'<div class="column half">' +
						'<div class="spacer height-80"></div>' +
						'\n<h3 class="size-48" style="text-align: right; font-weight: bold;">Goodbye, things.</h3>' +
						'\n<div class="spacer height-80"></div>' +
						'\n<p style="text-align: right;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
					'</div>' +
				'</div>'
		},
        
		{
		    'thumbnail': 'preview/photos-38.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<div class="spacer height-80"></div>' +
						'\n<h3 class="size-48" style="font-weight: bold;">Behold the Beauty.</h3>' +
						'\n<div class="spacer height-80"></div>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<div style="padding-left:30px">' +
							_tabs(1) + '<img src="assets/minimalist-blocks/images/-lbizY1.jpg" alt="">' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},
        
		{
		    'thumbnail': 'preview/photos-39.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/-ocaLR1.jpg" alt="">' +
					'</div>' +
					'<div class="column half">' +
						'<div class="spacer height-40"></div>' +
						'\n<h3 class="size-38" style="text-align: center; letter-spacing: 3px;">WORK <b>01</b></h3>' +
						'\n<div class="spacer height-40"></div>' +
						'\n<p style="text-align: center;">Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<div class="spacer height-40"></div>' +
						'\n<h3 class="size-38" style="text-align: center; letter-spacing: 3px;">WORK <b>02</b></h3>' +
						'\n<div class="spacer height-40"></div>' +
						'\n<p style="text-align: center;">Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/-mHAa32.jpg" alt="">' +
					'</div>' +
				'</div>'
		},
        
		{
		    'thumbnail': 'preview/photos-40.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column two-third">' +
						'<img src="assets/minimalist-blocks/images/-OJKzv1.jpg" alt="">' +
					'</div>' +
					'<div class="column third">' +
						'<div class="spacer height-180"></div>' +
						'\n<h3 class="size-24" style="letter-spacing: 2px;">Image Caption</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
					'</div>' +
				'</div>'
		},
        
		{
		    'thumbnail': 'preview/photos-41.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<div class="spacer height-180"></div>' +
						'\n<h3 class="size-24" style="letter-spacing: 2px;">Image Caption</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
					'</div>' +
					'<div class="column two-third">' +
						'<img src="assets/minimalist-blocks/images/-I81sR1.jpg" alt="">' +
					'</div>' +
				'</div>'
		},

        //TODO END

		{
		    'thumbnail': 'preview/profile-01.png',
		    'category': '103',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-42" style="letter-spacing: 2px;">MEET OUR TEAM</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third center">' +
						'<img src="assets/minimalist-blocks/images/bangkit-ristant-395541-e0mhz1.jpg" alt="" style="border-radius: 500px;">' +
						'\n<h3 class="size-21" style="letter-spacing: 2px;">VINCENT NELSON</h3>' +
						'\n<p style="color: #b7b7b7">WEB DESIGNER</p>' +
					'</div>' +
					'<div class="column third center">' +
						'<img src="assets/minimalist-blocks/images/redd-angelo-427759-33bDf2.jpg" alt="" style="border-radius: 500px;">' +
						'\n<h3 class="size-21" style="letter-spacing: 2px;">NATHAN WILLIAMS</h3>' +
						'\n<p style="color: #b7b7b7">WEB DEVELOPER</p>' +
					'</div>' +
					'<div class="column third center">' +
						'<img src="assets/minimalist-blocks/images/mads-schmidt-rasmussen-186319-8AVbA1.jpg" alt="" style="border-radius: 500px;">' +
						'\n<h3 class="size-21" style="letter-spacing: 2px;">THOMAS CALVIN</h3>' +
						'\n<p style="color: #b7b7b7">ACCOUNT MANAGER</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/profile-02.png',
		    'category': '103',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-42" style="letter-spacing: 2px;">HIGHLY QUALIFIED TEAM</h1>' +
						'\n<p style="border-bottom: 2px solid #e74c3c; width: 60px; display: inline-block;"></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third center">' +
						'<img src="assets/minimalist-blocks/images/samuel-zeller-413072-Tx4ai1.jpg" alt="">' +
						'\n<h3 class="size-21 is-title-lite">JENNIFER ASH</h3>' +
						'\n<div class="size-14 is-social edit">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third center">' +
						'<img src="assets/minimalist-blocks/images/michael-236683-Tx4ai2.jpg" alt="">' +
						'\n<h3 class="size-21 is-title-lite">MICHAEL ISON</h3>' +
						'\n<div class="size-14 is-social edit">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third center">' +
						'<img src="assets/minimalist-blocks/images/michael-221247-Hspxi3.jpg" alt="">' +
						'\n<h3 class="size-21 is-title-lite">JOHN CONWAY</h3>' +
						'\n<div class="size-14 is-social edit">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/profile-03.png',
		    'category': '103',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-42" style="letter-spacing: 3px;">MEET THE EXPERTS</h1>' +
						'\n<p style="color: rgb(136, 136, 136);">Here are our awesome team.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third center">' +
						'<img src="assets/minimalist-blocks/images/working-2618559_1920-kr4Af1.jpg" alt="">' +
						'\n<h3 class="size-21" style="letter-spacing: 2px;">Sarah Doe</h3>' +
						'\n<p style="color: rgb(136, 136, 136);">Founder</p>' +
					'</div>' +
					'<div class="column third center">' +
						'<img src="assets/minimalist-blocks/images/rawpixel-632454-unsplash-ecHZN1.jpg" alt="">' +
						'\n<h3 class="size-21" style="letter-spacing: 2px;">David Anderson</h3>' +
						'\n<p style="color: rgb(136, 136, 136);">Programmer</p>' +
					'</div>' +
					'<div class="column third center">' +
						'<img src="assets/minimalist-blocks/images/girl-2618562_1920-KAzoZ2.jpg" alt="">' +
						'\n<h3 class="size-21" style="letter-spacing: 2px;">Jennifer Clarke</h3>' +
						'\n<p style="color: rgb(136, 136, 136);">Web Designer</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/profile-04.png',
		    'category': '103',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 style="font-size: 56px !important; letter-spacing: 3px; width: 400px; max-width: 100%; line-height: 1.2;">Meet <br>our amazing team.</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-20"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<img src="assets/minimalist-blocks/images/luke-ellis-craven-365822-wrHAg1.jpg" alt="">' +
						'\n<h5 class="size-21" style="letter-spacing: 2px;">Nathan Williams <span style="color: rgb(136, 136, 136);">/ Founder</span></h5>' +
						'\n<p>Lorem Ipsum is dummy text of the printing and typesetting industry.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<img src="assets/minimalist-blocks/images/yoann-boyer-276971-S8TZu2.jpg" alt="">' +
						'\n<h5 class="size-21" style="letter-spacing: 2px;">Sarah Smith <span style="color: rgb(136, 136, 136);">/ Developer</span></h5>' +
						'\n<p>Lorem Ipsum is dummy text of the printing and typesetting industry.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<img src="assets/minimalist-blocks/images/pablo-hermoso-429590-(1)-fP4pI3.jpg" alt="">' +
						'\n<h5 class="size-21" style="letter-spacing: 2px;">Jane Doe <span style="color: rgb(136, 136, 136);">/ Web Designer</span></h5>' +
						'\n<p>Lorem Ipsum is dummy text of the printing and typesetting industry.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/profile-05.png',
		    'category': '103',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<div class="display">' +
							_tabs(1) + '<h1 style="text-transform: none">Meet The Team</h1>' +
						'\n</div>' +
						'\n<p style="letter-spacing: 9px;">Here are our awesome team.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column fourth center">' +
						'<img src="assets/minimalist-blocks/images/adult-1868750_1920-EzivE1.jpg" alt="" style="border-radius: 500px;">' +
						'\n<h3 class="size-21">David Smith</h3>' +
						'\n<p class="size-14" style="color: rgb(136, 136, 136);">CEO & Founder</p>' +
					'</div>' +
					'<div class="column fourth center">' +
						'<img src="assets/minimalist-blocks/images/noah-buscher-502067-(1)-rT7Vn1.jpg" alt="" style="border-radius: 500px;">' +
						'\n<h3 class="size-21">Milla Clarke</h3>' +
						'\n<p class="size-14" style="color: rgb(136, 136, 136);">Project Manager</p>' +
					'</div>' +
					'<div class="column fourth center">' +
						'<img src="assets/minimalist-blocks/images/berwin-coroza-495276-tXRrf2.jpg" alt="" style="border-radius: 500px;">' +
						'\n<h3 class="size-21">John Rugg</h3>' +
						'\n<p class="size-14" style="color: rgb(136, 136, 136);">Developer</p>' +
					'</div>' +
					'<div class="column fourth center">' +
						'<img src="assets/minimalist-blocks/images/mark-skeet-537093-6gF113.jpg" alt="" style="border-radius: 500px;">' +
						'\n<h3 class="size-21">Sarah Ashley</h3>' +
						'\n<p class="size-14" style="color: rgb(136, 136, 136);">Web Designer</p>' +
					'</div>' +
				'</div>'
		},
       
		{
		    'thumbnail': 'preview/profile-07.png',
		    'category': '103',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-46" style="letter-spacing: 2px;">OUR TEAM</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/girl-690119-c7s4t1.jpg" alt="">' +
					'</div>' +
					'<div class="column half">' +
						'<h2>Your Name</h2>' +
						'\n<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/photo-1437915160026-6c59da36ede2-AakHA2.jpg" alt="">' +
					'</div>' +
					'<div class="column half">' +
						'<h2>Your Name</h2>' +
						'\n<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/profile-08.png',
		    'category': '103',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-42" style="letter-spacing: 4px;">MEET THE EXPERTS</h1>' +
						'\n<p>Here are our awesome team</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<div class="is-card max-390 is-light-text" style="width:calc(100%);background: #1c93ad;">' +
							_tabs(1) + '<img src="assets/minimalist-blocks/images/bernard-osei-608155-unsplash-BsEPC1.jpg" alt="" class="margin-0">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
									_tabs(2) + '<h3 class="size-21 margin-0" style="letter-spacing: 1px;">JANE FOSTER</h3>' +
									_tabs(2) + '<p class="size-16">Lorem Ipsum is simply dummy text.</p>' +
									_tabs(2) + '<div class="is-social edit size-14">' +
											_tabs(3) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em; color: #fff"></i></a>' +
											_tabs(3) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em; color: #fff"></i></a>' +
											_tabs(3) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline" style="color: #fff"></i></a>' +
									_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third">' +
						'<div class="is-card max-390 is-light-text" style="width:calc(100%);background: #e0527e;">' +
							_tabs(1) + '<img src="assets/minimalist-blocks/images/-HAWqm1.jpg" alt="" class="margin-0">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
										_tabs(2) + '<h3 class="size-21 margin-0" style="letter-spacing: 1px;">MICHELLE DOE</h3>' +
										_tabs(2) + '<p class="size-16">Lorem Ipsum is simply dummy text.</p>' +
										_tabs(2) + '<div class="is-social edit size-14">' +
												_tabs(3) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em; color: #fff"></i></a>' +
												_tabs(3) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em; color: #fff"></i></a>' +
												_tabs(3) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline" style="color: #fff"></i></a>' +
										_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third">' +
						'<div class="is-card max-390 is-light-text" style="width:calc(100%);background: #e17055">' +
							_tabs(1) + '<img src="assets/minimalist-blocks/images/girl-from-behind-1741699-(1)-PqduN2.jpg" alt="" class="margin-0">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
										_tabs(2) + '<h3 class="size-21 margin-0" style="letter-spacing: 1px;">JANE WILLIAMS</h3>' +
										_tabs(2) + '<p class="size-16">Lorem Ipsum is simply dummy text.</p>' +
										_tabs(2) + '<div class="is-social edit size-14">' +
												_tabs(3) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em; color: #fff"></i></a>' +
												_tabs(3) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em; color: #fff"></i></a>' +
												_tabs(3) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline" style="color: #fff"></i></a>' +
										_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},
      
		{
		    'thumbnail': 'preview/profile-12.png',
		    'category': '103',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-32 is-title1-32 is-title-lite" style="line-height:1"><b>OUR TEAM</b></h1>' +
						'\n<p style="border-bottom: 2.5px solid #e74c3c; width: 60px; display: inline-block; margin-top: 0"></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third center">' +
						'<img src="assets/minimalist-blocks/images/rawpixel-632454-unsplash-oLoHS1.jpg" alt="" style="border-radius: 500px;">' +
						'\n<h3 class="size-21 is-title-lite">JOHN ANDERSON</h3>' +
						'\n<div class="size-12 is-social edit">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third center">' +
						'<img src="assets/minimalist-blocks/images/-tfqUv1.jpg" alt="" style="border-radius: 500px;">' +
						'\n<h3 class="size-21 is-title-lite">DAVID CLARK</h3>' +
						'\n<div class="size-12 is-social edit">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third center">' +
						'<img src="assets/minimalist-blocks/images/rawpixel-1054600-unsplash-PylVl2.jpg" alt="" style="border-radius: 500px;">' +
						'\n<h3 class="size-21 is-title-lite">NATASHA KERR</h3>' +
						'\n<div class="size-12 is-social edit">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},
      
		{
		    'thumbnail': 'preview/profile-13.png',
		    'category': '103',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p class="size-21 is-info1">Discover More</p>' +
						'\n<h1 class="size-48 is-title1-48 is-title-lite">ABOUT ME</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/sarah-noltner-687653-unsplash-6Agfw1.jpg" alt="">' +
					'</div>' +
					'<div class="column half">' +
						'<h3 style="letter-spacing: 1px;">Jeniffer Phillips</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
						'\n<div class="size-14 is-social edit">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},
      
		{
		    'thumbnail': 'preview/profile-14.png',
		    'category': '103',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 style="letter-spacing: 4px;">ABOUT ME</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half center">' +
						'<img src="assets/minimalist-blocks/images/luke-porter-520986-unsplash-kjuDr1.jpg" alt="" style="border-radius: 500px;">' +
					'</div>' +
					'<div class="column half">' +
						'<h3 style="letter-spacing: 1px;">David Stuart</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
						'\n<div class="size-14 is-social edit">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},
      
		{
		    'thumbnail': 'preview/profile-15.png',
		    'category': '103',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-42" style="letter-spacing: 2px;">MEET OUR TEAM</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half center">' +
						'<img src="assets/minimalist-blocks/images/nicole-honeywill-546846-unsplash-(1)-84PNj2.jpg" alt="" style="border-radius: 500px;">' +
					'</div>' +
					'<div class="column half">' +
						'<h3 style="letter-spacing: 1px;">Laura Clark</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
						'\n<div class="size-14 is-social edit">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
						'\n</div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-20"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half center">' +
						'<img src="assets/minimalist-blocks/images/alex-iby-480498-unsplash-JOL3q3.jpg" alt="" style="border-radius: 500px;">' +
					'</div>' +
					'<div class="column half">' +
						'<h3 style="letter-spacing: 1px;">Michael Smith</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
						'\n<div class="size-14 is-social edit">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},
      
		{
		    'thumbnail': 'preview/profile-16.png',
		    'category': '103',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-38" style="letter-spacing: 2px;">OUR PASSIONATE TEAM</h1>' +
						'\n<p style="border-bottom: 2px solid #000;width: 70px;display: inline-block;"></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half center">' +
						'<img src="assets/minimalist-blocks/images/nordwood-themes-166423-unsplash-(1)-4WJ2H1.jpg" alt="">' +
						'\n<h3 class="size-24" style="letter-spacing: 1px;">Roy Krueger</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
						'\n<div class="size-14 is-social edit">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
						'\n</div>' +
					'</div>' +
					'<div class="column half center">' +
						'<img src="assets/minimalist-blocks/images/-9Htn91.jpg" alt="">' +
						'\n<h3 class="size-24" style="letter-spacing: 1px;">Amanda Barnet</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
						'\n<div class="size-14 is-social edit">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},
      
		{
		    'thumbnail': 'preview/profile-17.png',
		    'category': '103',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-48 is-title1-48 is-title-lite">MEET THE TEAM</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/parker-johnson-1100877-unsplash-(1)-rufBy1.jpg" alt="">' +
					'</div>' +
					'<div class="column half">' +
						'<h3 style="letter-spacing: 1px;">Patricia Young</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
						'\n<div class="size-14 is-social edit">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
						'\n</div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-20"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<h3 style="letter-spacing: 1px;">Angela Griffin</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
						'\n<div class="size-14 is-social edit">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
						'\n</div>' +
					'</div>' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/beautiful-close-up-color-1078058-Qywhs1.jpg" alt="">' +
					'</div>' +
				'</div>'
		},
      
		{
		    'thumbnail': 'preview/profile-18.png',
		    'category': '103',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p class="size-18 is-info1">Hi World!</p>' +
						'\n<h1 class="size-48 is-title1-48 is-title-lite">I\'M AUDREY SMITH</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<h3 style="letter-spacing: 1px;">I design beautiful and functional stuff</h3>' +
						'\n<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text.</p>' +
						'\n<div class="size-14 is-social edit">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
						'\n</div>' +
					'</div>' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/daniel-apodaca-584113-unsplash-(1)-U9Iby1.jpg" alt="">' +
					'</div>' +
				'</div>'
		},
      
		{
		    'thumbnail': 'preview/profile-19.png',
		    'category': '103',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-48 is-title1-48 is-title-lite">MEET OUR TEAM</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half center">' +
						'<img src="assets/minimalist-blocks/images/alex-shaw-1116446-unsplash-JWfd61.jpg" alt="" style="border-radius: 500px;">' +
						'\n<h3 class="size-24" style="letter-spacing: 1px;">Yolanda Ludwig</h3>' +
						'\n<p>Lorem Ipsum is dummy text of the printing and typesetting industry.</p>' +
						'\n<div class="size-14 is-social edit">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
						'\n</div>' +
					'</div>' +
					'<div class="column half center">' +
						'<img src="assets/minimalist-blocks/images/-JMXQP1.jpg" alt="" style="border-radius: 500px;">' +
						'\n<h3 class="size-24" style="letter-spacing: 1px;">Anthony Fales</h3>' +
						'\n<p>Lorem Ipsum is simply text of the printing and typesetting industry.</p>' +
						'\n<div class="size-14 is-social edit">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},
      
		{
		    'thumbnail': 'preview/profile-20.png',
		    'category': '103',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-48" style="letter-spacing: 5px;">HI, I\'M HENDRY CODY. I CREATE SIMPLE AND BEAUTIFUL WEBSITES</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<h3 style="letter-spacing: 1px;">Get in touch with me</h3>' +
						'\n<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
						'\n<div class="size-14 is-social edit">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
						'\n</div>' +
					'</div>' +
					'<div class="column half center">' +
						'<img src="assets/minimalist-blocks/images/simon-migaj-775713-unsplash-l8oSx1.jpg" alt="" style="border-radius: 500px;">' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/profile-21.png',
		    'category': '103',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/-6Q6W91.jpg" alt="">' +
					'</div>' +
					'<div class="column half">' +
						'<div class="spacer height-80"></div>' +
						'\n<h1 style="text-transform: uppercase; letter-spacing: 6px; text-align: right;">Irene Waller</h1>' +
						'\n<br>' +
						'\n<div class="is-social right">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-android-drafts"></i></a>' +
						'\n</div>' +
						'\n<div class="spacer height-80"></div>' +
						'\n<p style="text-align: right;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/profile-22.png',
		    'category': '103',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<div class="spacer height-80"></div>' +
						'\n<h1 style="text-transform: uppercase; letter-spacing: 6px;">Kevin Josiah</h1>' +
						'\n<br>' +
						'\n<div class="is-social">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-android-drafts"></i></a>' +
						'\n</div>' +
						'\n<div class="spacer height-80"></div>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/-ayzzH2.jpg" alt="">' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/profile-23.png',
		    'category': '103',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/-fxBmr1.jpg" alt="">' +
					'</div>' +
					'<div class="column half">' +
						'<p style="border-bottom: 2px solid #c3c2c2;width: 90px;display: inline-block;margin-top:22px;"></p>' +
						'\n<h1 style="font-weight: bold;">Jenny Barnett</h1>' +
						'\n<p style="letter-spacing: 3px; text-transform: uppercase;">Graphic Designer</p>' +
						'\n<div class="spacer height-20"></div>' +
						'\n<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dolor sit amet vivamus leo ante.</p>' +
						'\n<div class="spacer height-20"></div>' +
						'\n<div class="is-social">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-android-drafts"></i></a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/profile-24.png',
		    'category': '103',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<p style="border-bottom: 2px solid #c3c2c2;width: 90px;display: inline-block;margin-top:22px;"></p>' +
						'\n<h1 style="font-weight: bold;">George Smith</h1>' +
						'\n<p style="letter-spacing: 3px; text-transform: uppercase;">Graphic Designer</p>' +
						'\n<div class="spacer height-20"></div>' +
						'\n<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dolor sit amet vivamus leo ante.</p>' +
						'\n<div class="spacer height-20"></div>' +
						'\n<div class="is-social">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-android-drafts"></i></a>' +
						'\n</div>' +
					'</div>' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/-6SDpQ1.jpg" alt="">' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/profile-26.png',
		    'category': '103',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half center">' +
						'<img src="assets/minimalist-blocks/images/-z01lr1.jpg" alt="">' +
					'</div>' +
					'<div class="column half">' +
						'<h2 style="text-align: center; letter-spacing: 3px;">Sabrina Watson</h2>' +
						'\n<div class="center">' +
							_tabs(1) + '<p style="border-bottom: 2px solid #c3c2c2;width: 60px;display: inline-block;margin-bottom:0"></p>' +
						'\n</div>' +
						'\n<p style="letter-spacing: 3px; font-size: 15px; text-align: center;">WEB DEVELOPER</p>' +
						'\n<div class="spacer height-20"></div>' +
						'\n<p style="text-align: center;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text.</p>' +
						'\n<div class="spacer height-20"></div>' +
						'\n<div class="is-social center">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-android-drafts"></i></a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/profile-27.png',
		    'category': '103',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half center">' +
						'<h2 style="text-align: center; letter-spacing: 3px;">Julio Anderson</h2>' +
						'\n<div class="center">' +
							_tabs(1) + '<p style="border-bottom: 2px solid #c3c2c2;width: 60px;display: inline-block;margin-bottom:0"></p>' +
						'\n</div>' +
						'\n<p style="letter-spacing: 3px; font-size: 15px; text-align: center;">WEB DEVELOPER</p>' +
						'\n<div class="spacer height-20"></div>' +
						'\n<p style="text-align: center;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text.</p>' +
						'\n<div class="spacer height-20"></div>' +
						'\n<div class="is-social center">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-android-drafts"></i></a>' +
						'\n</div>' +
					'</div>' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/-SRJrq2.jpg" alt="">' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/profile-29.png',
		    'category': '103',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/-otLsK1.jpg" alt="">' +
					'</div>' +
					'<div class="column half">' +
						'<div style="padding-left: 40px">' +
							_tabs(1) + '<div class="spacer height-40"></div>' +
							_tabs(1) + '<h1 class="size-64" style="font-weight: bold; letter-spacing: 3px;">Martha Massey</h1>' +
							_tabs(1) + '<div class="spacer height-40"></div>' +
							_tabs(1) + '<p style="text-align: justify;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. Lorem Ipsum dolor sit amet.</p>' +
							_tabs(1) + '<div class="spacer height-20"></div>' +
							_tabs(1) + '<div class="size-14 is-social edit">' +
								_tabs(2) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter"></i></a>' +
								_tabs(2) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook"></i></a>' +
								_tabs(2) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/profile-30.png',
		    'category': '103',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<div style="padding-right: 40px">' +
							_tabs(1) + '<div class="spacer height-40"></div>' +
							_tabs(1) + '<h1 class="size-64" style="font-weight: bold; letter-spacing: 3px;">James Tidwell</h1>' +
							_tabs(1) + '<div class="spacer height-40"></div>' +
							_tabs(1) + '<p style="text-align: justify;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. Lorem Ipsum dolor sit amet.</p>' +
							_tabs(1) + '<div class="spacer height-20"></div>' +
							_tabs(1) + '<div class="size-14 is-social edit">' +
								_tabs(2) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter"></i></a>' +
								_tabs(2) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook"></i></a>' +
								_tabs(2) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/-TUrpQ1.jpg" alt="">' +
					'</div>' +
				'</div>'
		},

        {
            'thumbnail': 'preview/profile-43.png',
            'category': '103',
            'html':
				'<div class="row clearfix">' +
					'<div class="column third center">' +
						'<img src="assets/minimalist-blocks/images/-DbQGW1.jpg" alt="" style="border-radius: 500px">' +
					'</div>' +
					'<div class="column two-third">' +
						'<h3 class="size-21">Amanda Davis</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
						'\n<div class="size-14 is-social edit">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
        },

		{
		    'thumbnail': 'preview/profile-44.png',
		    'category': '103',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column third center">' +
						'<img src="assets/minimalist-blocks/images/-gs7XT1.jpg" alt="">' +
					'</div>' +
					'<div class="column two-third">' +
						'<h3 class="size-21">Ronald Evans</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
						'\n<div class="size-14 is-social edit">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/profile-31.png',
		    'category': '103',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/-DjWQ71.jpg" alt="" style="border-radius: 500px;">' +
					'</div>' +
					'<div class="column half">' +
						'<div style="padding-left:40px">' +
							_tabs(1) + '<p style="text-align: center; color: rgb(119, 119, 119); letter-spacing: 1px;">Discover more about me.</p>' +
							_tabs(1) + '<h1 class="size-32" style="text-align: center; text-transform: uppercase; letter-spacing: 2px;">Charles Parker</h1>' +
							_tabs(1) + '<div class="center">' +
								_tabs(2) + '<p style="border-bottom: 2px solid #000;width: 60px;display: inline-block;margin-bottom:0"></p>' +
							_tabs(1) + '</div>' +
							_tabs(1) + '<div class="spacer height-40"></div>' +
							_tabs(1) + '<p style="text-align: justify;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. Lorem Ipsum dolor sit amet.</p>' +
							_tabs(1) + '<div class="spacer height-20"></div>' +
							_tabs(1) + '<div class="size-14 is-social edit center">' +
								_tabs(2) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter"></i></a>' +
								_tabs(2) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook"></i></a>' +
								_tabs(2) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/profile-32.png',
		    'category': '103',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<div style="padding-right:40px">' +
							_tabs(1) + '<p style="text-align: center; color: rgb(119, 119, 119); letter-spacing: 1px;">Discover more about me.</p>' +
							_tabs(1) + '<h1 class="size-32" style="text-align: center; text-transform: uppercase; letter-spacing: 2px;">Sarah Smith</h1>' +
							_tabs(1) + '<div class="center">' +
								_tabs(2) + '<p style="border-bottom: 2px solid #000;width: 60px;display: inline-block;margin-bottom:0"></p>' +
							_tabs(1) + '</div>' +
							_tabs(1) + '<div class="spacer height-40"></div>' +
							_tabs(1) + '<p style="text-align: justify;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. Lorem Ipsum dolor sit amet.</p>' +
							_tabs(1) + '<div class="spacer height-20"></div>' +
							_tabs(1) + '<div class="size-14 is-social edit center">' +
								_tabs(2) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter"></i></a>' +
								_tabs(2) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook"></i></a>' +
								_tabs(2) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/-c2y4f1.jpg" alt="" style="border-radius: 500px;">' +
					'</div>' +
				'</div>'
		},
		
		/* PRODUCTS */

		{
		    'thumbnail': 'preview/products-01.png',
		    'category': '104',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-48 is-title1-48 is-title-lite">OUR PRODUCTS</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/photo-1459411552884-841db9b3cc2a-YO89Y1.jpg" alt="">' +
						'\n<h3>Product One, <b>$109</b></h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
						'\n<div style="margin:1.2em 0">' +
							_tabs(1) + '<a href="#" class="is-btn is-btn-small is-btn-ghost1 is-upper edit">Buy Now</a>' +
						'\n</div>' +
					'</div>' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/photo-1471256737566-c7ddd846bee0-small-NBNfZ2.jpg" alt="">' +
						'\n<h3>Product Two, <b>$299</b></h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
						'\n<div style="margin:1.2em 0">' +
							_tabs(1) + '<a href="#" class="is-btn is-btn-small is-btn-ghost1 is-upper edit">Buy Now</a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},



		{
		    'thumbnail': 'preview/products-19.png',
		    'category': '104',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 style="letter-spacing: 3px; text-align: center;">SERVICES WE PROVIDE</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<div class="list">' +
							_tabs(1) + '<i class="icon ion-checkmark"></i>' +
							_tabs(1) + '<h3>Creative Designs</h3>' +
							_tabs(1) + '<p>Lorem Ipsum is dummy text of the printing and typesetting industry.</p>' +
						'\n</div>' +
					'</div>' +
					'<div class="column half">' +
						'<div class="list">' +
							_tabs(1) + '<i class="icon ion-checkmark"></i>' +
							_tabs(1) + '<h3>Web Development</h3>' +
							_tabs(1) + '<p>Lorem Ipsum is dummy text of the printing and typesetting industry.</p>' +
						'\n</div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<div class="list">' +
							_tabs(1) + '<i class="icon ion-checkmark"></i>' +
							_tabs(1) + '<h3>Brand Building&nbsp;</h3>' +
							_tabs(1) + '<p>Lorem Ipsum is dummy text of the printing and typesetting industry.</p>' +
						'\n</div>' +
					'</div>' +
					'<div class="column half">' +
						'<div class="list">' +
							_tabs(1) + '<i class="icon ion-checkmark"></i>' +
							_tabs(1) + '<h3>Friendly Support</h3>' +
							_tabs(1) + '<p>Lorem Ipsum is dummy text of the printing and typesetting industry.</p>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/products-18.png',
		    'category': '104',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 style="text-align: center; letter-spacing: 3px;">OUR SERVICES</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third center">' +
						'<i class="icon ion-ios-monitor-outline size-48"></i>' +
						'\n<h4 style="letter-spacing: 1px;">Service One</h4>' +
						'\n<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third center">' +
						'<i class="icon ion-ios-gear-outline size-48"></i>' +
						'\n<h4 style="letter-spacing: 1px;">Service Two</h4>' +
						'\n<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third center">' +
						'<i class="icon ion-ios-heart-outline size-48"></i>' +
						'\n<h4 style="letter-spacing: 1px;">Service Three</h4>' +
						'\n<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third center">' +
						'<i class="icon ion-ios-compose-outline size-48"></i>' +
						'\n<h4 style="letter-spacing: 1px;">Service Four</h4>' +
						'\n<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third center">' +
						'<i class="icon ion-ios-world-outline size-48"></i>' +
						'\n<h4 style="letter-spacing: 1px;">Service Five</h4>' +
						'\n<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third center">' +
						'<i class="icon ion-ios-calendar-outline size-48"></i>' +
						'\n<h4 style="letter-spacing: 1px;">Service Six</h4>' +
						'\n<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/products-02.png',
		    'category': '104',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<div class="display">' +
							'<h1 class="size-48" style="letter-spacing: 2px">Our Products</h1>' +
							'\n<p class="size-18">We make shopping way easier & convenient for you</p>' +
						'</div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third center">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;">' +
								_tabs(2) + '<img src="assets/minimalist-blocks/images/x98sw2520-sh1J31.jpg" alt="" style="border-radius: 500px">' +
								_tabs(2) + '<h3 class="size-21" style="letter-spacing: 1px;">Product One</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
								_tabs(2) + '<div style="margin:20px 0">' +
									_tabs(3) + '<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small">Buy Now</a>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third center">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;">' +
								_tabs(2) + '<img src="assets/minimalist-blocks/images/georgie-cobbs-467923-unsplash-G9q9p2.jpg" alt="" style="border-radius: 500px">' +
								_tabs(2) + '<h3 class="size-21" style="letter-spacing: 1px;">Product Two</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
								_tabs(2) + '<div style="margin:20px 0">' +
									_tabs(3) + '<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small">Buy Now</a>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third center">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;">' +
								_tabs(2) + '<img src="assets/minimalist-blocks/images/martin-widenka-555176-unsplash-sh1J33.jpg" alt="" style="border-radius: 500px">' +
								_tabs(2) + '<h3 class="size-21" style="letter-spacing: 1px;">Product Three</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
								_tabs(2) + '<div style="margin:20px 0">' +
									_tabs(3) + '<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small">Buy Now</a>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/products-04.png',
		    'category': '104',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-48 is-title1-48 is-title-lite">OUR SERVICES</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
                    '<div class="column full code">' +
	                    '<div class="spacer height-40"></div>' +
                    '</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third center">' +
		                '<i class="icon ion-ios-monitor-outline size-48"></i>' +
						'\n<h3 class="size-18">Clean & Minimalist Design</h3>' +
					'</div>' +
					'<div class="column third center">' +
						'<i class="icon ion-ios-lightbulb-outline size-48"></i>' +
						'\n<h3 class="size-18">Modern Ideas</h3>' +
					'</div>' +
					'<div class="column third center">' +
						'<i class="icon ion-ios-world-outline size-48"></i>' +
						'\n<h3 class="size-18">Brand Building </h3>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third center">' +
						'<i class="icon ion-ios-infinite-outline size-48"></i>' +
						'\n<h3 class="size-18">Unlimited Possibilities</h3>' +
					'</div>' +
					'<div class="column third center">' +
						'<i class="icon ion-ios-heart-outline size-48"></i>' +
						'\n<h3 class="size-18">Superior Supports </h3>' +
					'</div>' +
					'<div class="column third center">' +
						'<i class="icon ion-ios-gear-outline size-48"></i>' +
						'\n<h3 class="size-18">Web Development</h3>' +
					'</div>' +
				'</div>'
		},


		{
		    'thumbnail': 'preview/products-13.png',
		    'category': '104',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-32" style="text-align: center; letter-spacing: 2px;">TOP RATED PRODUCTS</h1>' +
						'\n<p style="border-bottom: 2px solid #333; width: 40px; display: inline-block;"></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<img src="assets/minimalist-blocks/images/-7eFyL1.jpg" alt="">' +
						'\n<h3 class="size-21">PRODUCT NAME</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
						'\n<p><a href="#">BUY NOW</a></p>' +
					'</div>' +
					'<div class="column third">' +
						'<img src="assets/minimalist-blocks/images/-09yZA2.jpg" alt="">' +
						'\n<h3 class="size-21">PRODUCT NAME</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
						'\n<p><a href="#">BUY NOW</a></p>' +
					'</div>' +
					'<div class="column third">' +
						'<img src="assets/minimalist-blocks/images/-Tmg8p2.jpg" alt="">' +
						'\n<h3 class="size-21">PRODUCT NAME</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
						'\n<p><a href="#">BUY NOW</a></p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/products-05.png',
		    'category': '104',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-48" style="letter-spacing:3px">SERVICES WE OFFER</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<div class="list">' +
							'<i class="icon ion-android-bulb"></i>' +
							'\n<h3 class="size-24">Service One</h3>' +
							'\n<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
						'</div>' +
					'</div>' +
					'<div class="column third">' +
						'<div class="list">' +
							'<i class="icon ion-android-favorite-outline"></i>' +
							'\n<h3 class="size-24">Service Two</h3>' +
							'\n<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
						'</div>' +
					'</div>' +
					'<div class="column third">' +
						'<div class="list">' +
							'<i class="icon ion-android-desktop"></i>' +
							'\n<h3 class="size-24">Service Three</h3>' +
							'\n<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
						'</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/products-07.png',
		    'category': '104',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-48 is-title1-48 is-title-lite is-upper">OUR SERVICES</h1>' +
						'\n<p style="border-bottom: 2.5px solid #333; width: 70px; display: inline-block; margin-top: 25px"></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<p class="size-64 is-title1-64 is-title-bold" style="line-height: 1.5">01.</p>' +
						'\n<h3 class="size-24 is-title-lite">SERVICE ONE</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<p class="size-64 is-title1-64 is-title-bold" style="line-height: 1.5">02.</p>' +
						'\n<h3 class="size-24 is-title-lite">SERVICE TWO</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<p class="size-64 is-title1-64 is-title-bold" style="line-height: 1.5">03.</p>' +
						'\n<h3 class="size-24 is-title-lite">SERVICE THREE</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/products-08.png',
		    'category': '104',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-48 is-title1-48 is-title-lite is-upper center">SERVICES WE PROVIDE</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<p class="size-64 is-title1-64 is-title-bold">1</p>' +
						'\n<h3 class="size-21" style="line-height: 1.5">MODERN IDEAS</h3>' +
						'\n<p style="border-bottom: 2px solid #333; width: 40px;"></p>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<p class="size-64 is-title1-64 is-title-bold">2</p>' +
						'\n<h3 class="size-21" style="line-height: 1.5">WEB DEVELOPMENT</h3>' +
						'\n<p style="border-bottom: 2px solid #333; width: 40px;"></p>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<p class="size-64 is-title1-64 is-title-bold">3</p>' +
						'\n<h3 class="size-21" style="line-height: 1.5">SUPERIOR SUPPORTS</h3>' +
						'\n<p style="border-bottom: 2px solid #333; width: 40px;"></p>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/products-10.png',
		    'category': '104',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-32" style="letter-spacing: 4px;">OUR SERVICES</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<i class="icon ion-ios-compose-outline size-32"></i>' +
						'\n<h3 class="size-24">Generate Ideas</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<i class="icon ion-ios-gear-outline size-32"></i>' +
						'\n<h3 class="size-24">Development</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<i class="icon ion-ios-monitor-outline size-32"></i>' +
						'\n<h3 class="size-24">Creative Designs</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<i class="icon ion-ios-heart-outline size-32"></i>' +
						'\n<h3 class="size-24">Support</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/products-09.png',
		    'category': '104',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-38" style="font-weight: 400;">OUR PRODUCTS</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<img src="assets/minimalist-blocks/images/h-e-n-g-s-t-r-e-a-m-573432-unsplash-xt89A1.jpg" alt="">' +
						'\n<h3 class="size-18" style="font-weight: 400;">PRODUCT NAME, <span style="color: rgb(136, 136, 136);">$129</span></h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
						'\n<p><a href="#" title="">BUY NOW</a></p>' +
					'</div>' +
					'<div class="column third">' +
						'<img src="assets/minimalist-blocks/images/sarah-dorweiler-357724-unsplash-4cfGV2.jpg" alt="">' +
						'\n<h3 class="size-18" style="font-weight: 400;">PRODUCT NAME, <span style="color: rgb(136, 136, 136);">$79</span></h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
						'\n<p><a href="#" title="">BUY NOW</a></p>' +
					'</div>' +
					'<div class="column third">' +
						'<img src="assets/minimalist-blocks/images/michael-frattaroli-234662-unsplash-QaduA1.jpg" alt="">' +
						'\n<h3 class="size-18" style="font-weight: 400;">PRODUCT NAME, <span style="color: rgb(136, 136, 136);">$49</span></h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
						'\n<p><a href="#" title="">BUY NOW</a></p>' +
					'</div>' +
				'</div>'
		},

        {
            'thumbnail': 'preview/products-15.png',
            'category': '104',
            'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 style="letter-spacing: 3px; text-align: center;">SERVICES</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<div style="text-align: center; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; border: 2px solid #000; display: inline-block;"><i class="icon ion-calendar size-24"></i></div>' +
						'\n<div class="spacer height-20"></div>' +
						'\n<h3 class="size-24">Service One</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<div style="text-align: center; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; border: 2px solid #000; display: inline-block;"><i class="icon ion-gear-b size-24"></i></div>' +
						'\n<div class="spacer height-20"></div>' +
						'\n<h3 class="size-24">Service Two</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<div style="text-align: center; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; border: 2px solid #000; display: inline-block;"><i class="icon ion-edit size-24"></i></div>' +
						'\n<div class="spacer height-20"></div>' +
						'\n<h3 class="size-24">Service Three</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>'
        },		

		{
		    'thumbnail': 'preview/products-12.png',
		    'category': '104',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<div style="padding-right: 40px">' +
							_tabs(1) + '<h1 class="size-42">Product Name</h1>' +
							_tabs(1) + '<p style="font-weight: bold;">$17,00</p>' +
							_tabs(1) + '<p>Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
							_tabs(1) + '<div class="spacer height-20"></div>' +
							_tabs(1) + '<div><a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small">Buy Now</a></div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/-5v3uL1.jpg" alt="">' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/-C3XHH1.jpg" alt="">' +
					'</div>' +
					'<div class="column half">' +
						'<div style="padding-left: 40px">' +
							_tabs(1) + '<h1 class="size-42">Product Name</h1>' +
							_tabs(1) + '<p style="font-weight: bold;">$14,00</p>' +
							_tabs(1) + '<p>Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
							_tabs(1) + '<div class="spacer height-20"></div>' +
							_tabs(1) + '<div><a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small">Buy Now</a></div>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/products-14.png',
		    'category': '104',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-32" style="letter-spacing: 3px;">SERVICES WE OFFER</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<div style="text-align: center; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; border: 2px solid #000; display: inline-block;"><i class="icon ion-android-bulb size-24"></i></div>' +
						'\n<div class="spacer height-20"></div>' +
						'\n<h3>Service One</h3>' +
						'\n<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<div style="text-align: center; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; border: 2px solid #000; display: inline-block;"><i class="icon ion-compose size-24"></i></div>' +
						'\n<div class="spacer height-20"></div>' +
						'\n<h3>Service Two</h3>' +
						'\n<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-20"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<div style="text-align: center; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; border: 2px solid #000; display: inline-block;"><i class="icon ion-gear-b size-24"></i></div>' +
						'\n<div class="spacer height-20"></div>' +
						'\n<h3>Service Three</h3>' +
						'\n<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<div style="text-align: center; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; border: 2px solid #000; display: inline-block;"><i class="icon ion-android-call size-24"></i></div>' +
						'\n<div class="spacer height-20"></div>' +
						'\n<h3>Service Four</h3>' +
						'\n<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
					'</div>' +
				'</div>'
		},

        {
            'thumbnail': 'preview/products-20.png',
            'category': '104',
            'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-42" style="letter-spacing: 3px;">SERVICES WE OFFER</h1>' +
						'\n<p style="border-bottom: 2.5px solid #333; width: 70px; display: inline-block; margin-top: 25px"></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column center third">' +
						'<div class="is-card is-card-circle is-dark-text shadow-1" style="width:70px;height:70px;padding:15px">' +
							_tabs(1) + '<div class="is-card-content-centered">' +
								_tabs(2) + '<i class="icon ion-ios-monitor-outline size-32"></i>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
						'\n<h3 class="size-24" style="margin-top:1.5em">Creative Design</h3>' +
						'\n<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column center third">' +
						'<div class="is-card is-card-circle is-dark-text shadow-1" style="width:70px;height:70px;padding:15px">' +
							_tabs(1) + '<div class="is-card-content-centered">' +
								_tabs(2) + '<i class="icon ion-ios-compose-outline size-32"></i>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
						'\n<h3 class="size-24" style="margin-top:1.5em">Web Development</h3>' +
						'\n<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column center third">' +
						'<div class="is-card is-card-circle is-dark-text shadow-1" style="width:70px;height:70px;padding:15px">' +
							_tabs(1) + '<div class="is-card-content-centered">' +
								_tabs(2) + '<i class="icon ion-ios-gear-outline size-32"></i>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
						'\n<h3 class="size-24" style="margin-top:1.5em">24/7 Supports</h3>' +
						'\n<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>'
        },

		{
		    'thumbnail': 'preview/products-21.png',
		    'category': '104',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-42" style="letter-spacing: 3px;">SERVICES WE OFFER</h1>' +
						'\n<p style="border-bottom: 2.5px solid #333; width: 70px; display: inline-block; margin-top: 25px"></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column center third">' +
						'<div class="is-card is-card-circle is-light-text" style="width:70px;height:70px;padding:15px;background:#000;">' +
							_tabs(1) + '<div class="is-card-content-centered">' +
								_tabs(2) + '<i class="icon ion-ios-monitor-outline size-32"></i>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
						'\n<h3 class="size-24" style="margin-top:1.5em">Creative Design</h3>' +
						'\n<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column center third">' +
						'<div class="is-card is-card-circle is-light-text" style="width:70px;height:70px;padding:15px;background:#000;">' +
							_tabs(1) + '<div class="is-card-content-centered">' +
								_tabs(2) + '<i class="icon ion-ios-compose-outline size-32"></i>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
						'\n<h3 class="size-24" style="margin-top:1.5em">Web Development</h3>' +
						'\n<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column center third">' +
						'<div class="is-card is-card-circle is-light-text" style="width:70px;height:70px;padding:15px;background:#000;">' +
							_tabs(1) + '<div class="is-card-content-centered">' +
								_tabs(2) + '<i class="icon ion-ios-gear-outline size-32"></i>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
						'\n<h3 class="size-24" style="margin-top:1.5em">24/7 Supports</h3>' +
						'\n<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/products-17.png',
		    'category': '104',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<i class="icon ion-android-bulb size-32" style="color: #c3c3c3;"></i>' +
						'\n<h3 class="size-21" style="margin-top: 5px;color: #888888;">SERVICE ONE</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<i class="icon ion-android-favorite-outline size-32" style="color: #c3c3c3;"></i>' +
						'\n<h3 class="size-21" style="margin-top: 5px;color: #888888;">SERVICE TWO</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<i class="icon ion-gear-b size-32" style="color: #c3c3c3;"></i>' +
						'\n<h3 class="size-21" style="margin-top: 5px;color: #888888;">SERVICE THREE</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<i class="icon ion-code size-32" style="color: #c3c3c3;"></i>' +
						'\n<h3 class="size-21" style="margin-top: 5px;color: #888888;">SERVICE FOUR</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<i class="icon ion-compose size-32" style="color: #c3c3c3;"></i>' +
						'\n<h3 class="size-21" style="margin-top: 5px;color: #888888;">SERVICE FIVE</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<i class="icon ion-android-people size-32" style="color: #c3c3c3;"></i>' +
						'\n<h3 class="size-21" style="margin-top: 5px;color: #888888;">SERVICE SIX</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/products-16.png',
		    'category': '104',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<i class="icon ion-calendar size-32" style="color: #c3c3c3;"></i>' +
						'\n<h3 class="size-21" style="margin-top: 5px;color: #888888;">SERVICE ONE</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<i class="icon ion-gear-b size-32" style="color: #c3c3c3;"></i>' +
						'\n<h3 class="size-21" style="margin-top: 5px;color: #888888;">SERVICE TWO</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-20"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<i class="icon ion-paper-airplane size-32" style="color: #c3c3c3;"></i>' +
						'\n<h3 class="size-21" style="margin-top: 5px;color: #888888;">SERVICE THREE</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<i class="icon ion-monitor size-32" style="color: #c3c3c3;"></i>' +
						'\n<h3 class="size-21" style="margin-top: 5px;color: #888888;">SERVICE FOUR</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/products-03.png',
		    'category': '104',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-42" style="font-weight:bold;"><span style="color: rgb(204, 204, 204);">OUR </span> PRODUCTS</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column fourth center">' +
						'<img src="assets/minimalist-blocks/images/-7Vn0R1.jpg" alt="">' +
						'\n<p style="color: rgb(136, 136, 136); font-weight: normal;">' +
							_tabs(1) + 'PRODUCT NAME' +
							_tabs(1) + '<br>' +
							_tabs(1) + '<a href="#" title="">$79</a>' +
						'\n</p>' +
					'</div>' +
					'<div class="column fourth center">' +
						'<img src="assets/minimalist-blocks/images/nordwood-themes-473050-jFvLM1.jpg" alt="">' +
						'\n<p style="color: rgb(136, 136, 136); font-weight: normal;">' +
							_tabs(1) + 'PRODUCT NAME' +
							_tabs(1) + '<br>' +
							_tabs(1) + '<a href="#" title="">$99</a>' +
						'\n</p>' +
					'</div>' +
					'<div class="column fourth center">' +
						'<img src="assets/minimalist-blocks/images/toa-heftiba-448302-(1)-pXDhf1.jpg" alt="">' +
						'\n<p style="color: rgb(136, 136, 136); font-weight: normal;">' +
							_tabs(1) + 'PRODUCT NAME' +
							_tabs(1) + '<br>' +
							_tabs(1) + '<a href="#" title="">$89</a>' +
						'\n</p>' +
					'</div>' +
					'<div class="column fourth center">' +
						'<img src="assets/minimalist-blocks/images/-p8OMT2.jpg" alt="">' +
						'\n<p style="color: rgb(136, 136, 136); font-weight: normal;">' +
							_tabs(1) + 'PRODUCT NAME' +
							_tabs(1) + '<br>' +
							_tabs(1) + '<a href="#" title="">$99</a>' +
						'\n</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/products-11.png',
		    'category': '104',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-32" style="letter-spacing: 4px; text-align: center;">OUR SERVICES</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<i class="icon ion-ios-compose-outline size-32"></i>' +
						'\n<h3 class="size-24">Generate Ideas</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<i class="icon ion-ios-gear-outline size-32"></i>' +
						'\n<h3 class="size-24">Development</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<i class="icon ion-ios-gear-outline size-32"></i>' +
						'\n<h3 class="size-24">Support</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/features-01.png',
		    'category': '105',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-48 is-title1-48 is-title-lite">WHY CHOOSE US</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<div style="text-align: center; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; border: 2px solid #888888; display: inline-block;margin-bottom: 25px">' +
							_tabs(1) + '<i class="icon ion-android-desktop size-24" style="color: #888888"></i>' +
						'\n</div>' +
						'\n<h3 class="size-21 is-title-lite">FEATURE ITEM</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<div style="text-align: center; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; border: 2px solid #888888; display: inline-block;margin-bottom: 25px">' +
							_tabs(1) + '<i class="icon ion-android-create size-24" style="color: #888888"></i>' +
						'\n</div>' +
						'\n<h3 class="size-21 is-title-lite">FEATURE ITEM</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<div style="text-align: center; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; border: 2px solid #888888; display: inline-block;margin-bottom: 25px">' +
							_tabs(1) + '<i class="icon ion-camera size-24" style="color: #888888"></i>' +
						'\n</div>' +
						'\n<h3 class="size-21 is-title-lite">FEATURE ITEM</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/features-02.png',
		    'category': '105',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<h1 class="size-80 is-title-lite"><i>01</i></h1>' +
						'\n<h3>Feature Item</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry. Vivamus leo ante, consectetur sit amet.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<h1 class="size-80 is-title-lite"><i>02</i></h1>' +
						'\n<h3>Feature Item</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry. Vivamus leo ante, consectetur sit amet.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<h1 class="size-80 is-title-lite"><i>03</i></h1>' +
						'\n<h3>Feature Item</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry. Vivamus leo ante, consectetur sit amet.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/features-03.png',
		    'category': '105',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-48 is-title1-48 is-title-lite is-upper" style="text-align: center; font-weight: 300;">WHY CHOOSE US?</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<div class="list">' +
							_tabs(1) + '<i class="icon ion-checkmark"></i>' +
							_tabs(1) + '<h3 class="size-24 default-font2" style="margin: 0 0 0 50px; font-weight: 300">Feature Item</h3>' +
							_tabs(1) + '<p style="margin: 5px 0 0 50px;  font-weight: 300">Lorem Ipsum is simply dummy text of the printing industry.</p>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third">' +
						'<div class="list">' +
							_tabs(1) + '<i class="icon ion-checkmark"></i>' +
							_tabs(1) + '<h3 class="size-24 default-font2" style="margin: 0 0 0 50px;  font-weight: 300">Feature Item</h3>' +
							_tabs(1) + '<p style="margin: 5px 0 0 50px;  font-weight: 300">Lorem Ipsum is simply dummy text of the printing industry.</p>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third">' +
						'<div class="list">' +
							_tabs(1) + '<i class="icon ion-checkmark"></i>' +
							_tabs(1) + '<h3 class="size-24 default-font2" style="margin: 0 0 0 50px;  font-weight: 300">Feature Item</h3>' +
							_tabs(1) + '<p style="margin: 5px 0 0 50px; font-weight: 300">Lorem Ipsum is simply dummy text of the printing industry.</p>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/features-04.png',
		    'category': '105',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column third center">' +
						'<div class="padding-20">' +
							_tabs(1) + '<i class="icon ion-ios-lightbulb-outline size-48" style="color: #e74c3c"></i>' +
							_tabs(1) + '<h3 class="size-18" style="line-height:1">CREATIVE IDEAS</h3>' +
							_tabs(1) + '<p style="border-bottom: 2px solid #e74c3c; width: 50px; display: inline-block;"></p>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third center">' +
						'<div class="padding-20">' +
							_tabs(1) + '<i class="icon ion-ios-gear-outline size-48" style="color: #e74c3c"></i>' +
							_tabs(1) + '<h3 class="size-18" style="line-height:1">WEB DEVELOPMENT </h3>' +
							_tabs(1) + '<p style="border-bottom: 2px solid #e74c3c; width: 50px; display: inline-block;"></p>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third center">' +
						'<div class="padding-20">' +
							_tabs(1) + '<i class="icon ion-ios-camera-outline size-48" style="color: #e74c3c"></i>' +
							_tabs(1) + '<h3 class="size-18" style="line-height:1">PHOTOGRAPHY</h3>' +
							_tabs(1) + '<p style="border-bottom: 2px solid #e74c3c; width: 50px; display: inline-block;"></p>' +
						'\n</div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third center">' +
						'<div class="padding-20">' +
							_tabs(1) + '<i class="icon ion-iphone size-48" style="color: #e74c3c"></i>' +
							_tabs(1) + '<h3 class="size-18" style="line-height:1">RESPONSIVE DESIGN</h3>' +
							_tabs(1) + '<p style="border-bottom: 2px solid #e74c3c; width: 50px; display: inline-block;"></p>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third center">' +
						'<div class="padding-20">' +
							_tabs(1) + '<i class="icon ion-ios-paper-outline size-48" style="color: #e74c3c"></i>' +
							_tabs(1) + '<h3 class="size-18" style="line-height:1">DIGITAL MARKETING</h3>' +
							_tabs(1) + '<p style="border-bottom: 2px solid #e74c3c; width: 50px; display: inline-block;"></p>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third center">' +
						'<div class="padding-20">' +
							_tabs(1) + '<i class="icon ion-ios-clock-outline size-48" style="color: #e74c3c"></i>' +
							_tabs(1) + '<h3 class="size-18" style="line-height:1">ONLINE SUPPORT</h3>' +
							_tabs(1) + '<p style="border-bottom: 2px solid #e74c3c; width: 50px; display: inline-block;"></p>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/features-05.png',
		    'category': '105',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h4 class="size-28 display-font2">Discover</h4>' +
						'\n<h1 class="size-48 is-title1-48 is-title-lite is-upper">Why Choose Our Products</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/imac-Bz83W1.png" alt="">' +
					'</div>' +
					'<div class="column half">' +
						'<div class="list">' +
							_tabs(1) + '<i class="icon ion-checkmark"></i>' +
							_tabs(1) + '<h3 class="size-24" style="margin: 0 0 0 50px">Feature Item</h3>' +
							_tabs(1) + '<p style="margin: 5px 0 0 50px">Lorem Ipsum is simply dummy text</p>' +
						'\n</div>' +
						'\n<div class="list">' +
							_tabs(1) + '<i class="icon ion-checkmark"></i>' +
							_tabs(1) + '<h3 class="size-24" style="margin: 0 0 0 50px">Feature Item</h3>' +
							_tabs(1) + '<p style="margin: 5px 0 0 50px">Lorem Ipsum is simply dummy text</p>' +
						'\n</div>' +
						'\n<div class="list">' +
							_tabs(1) + '<i class="icon ion-checkmark"></i>' +
							_tabs(1) + '<h3 class="size-24" style="margin: 0 0 0 50px">Feature Item</h3>' +
							_tabs(1) + '<p style="margin: 5px 0 0 50px">Lorem Ipsum is simply dummy text</p>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/features-06.png',
		    'category': '105',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<div style="text-align: center; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; border: 2px solid #888888; display: inline-block;margin-bottom: 25px">' +
							_tabs(1) + '<i class="icon ion-images size-24" style="color: #888888"></i>' +
						'\n</div>' +
						'\n<h3 class="size-21 is-title-lite">FEATURE ITEM</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<div style="text-align: center; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; border: 2px solid #888888; display: inline-block;margin-bottom: 25px">' +
							_tabs(1) + '<i class="icon ion-android-desktop size-24" style="color: #888888"></i>' +
						'\n</div>' +
						'\n<h3 class="size-21 is-title-lite">FEATURE ITEM</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<div style="text-align: center; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; border: 2px solid #888888; display: inline-block;margin-bottom: 25px">' +
							_tabs(1) + '<i class="icon ion-android-clipboard size-24" style="color: #888888"></i>' +
						'\n</div>' +
						'\n<h3 class="size-21 is-title-lite">FEATURE ITEM</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<div style="text-align: center; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; border: 2px solid #888888; display: inline-block;margin-bottom: 25px">' +
							_tabs(1) + '<i class="icon ion-android-options size-24" style="color: #888888"></i>' +
						'\n</div>' +
						'\n<h3 class="size-21 is-title-lite">FEATURE ITEM</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/features-07.png',
		    'category': '105',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<p class="size-64 is-title1-64 is-title-bold">1</p>' +
						'\n<h3 class="size-24 is-title-lite" style="line-height: 1.5">CREATIVE IDEAS</h3>' +
						'\n<p style="border-bottom: 2px solid #333; width: 40px;"></p>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dolor sit amet.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<p class="size-64 is-title1-64 is-title-bold">2</p>' +
						'\n<h3 class="size-24 is-title-lite" style="line-height: 1.5">WEB DEVELOPMENT</h3>' +
						'\n<p style="border-bottom: 2px solid #333; width: 40px;"></p>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dolor sit amet.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<p class="size-64 is-title1-64 is-title-bold">3</p>' +
						'\n<h3 class="size-24 is-title-lite" style="line-height: 1.5">RESPONSIVE DESIGN</h3>' +
						'\n<p style="border-bottom: 2px solid #333; width: 40px;"></p>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dolor sit amet.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<p class="size-64 is-title1-64 is-title-bold">4</p>' +
						'\n<h3 class="size-24 is-title-lite" style="line-height: 1.5">ONLINE SUPPORT</h3>' +
						'\n<p style="border-bottom: 2px solid #333; width: 40px;"></p>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dolor sit amet.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/features-08.png',
		    'category': '105',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-48 default-font2" style="letter-spacing: 5px; font-weight: 300">FEATURES</h1>' +
						'\n<p style="border-bottom: 2px solid #333; width: 50px; display: inline-block; margin: 0"></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third center">' +
						'<h1 class="size-48">01</h1>' +
						'\n<h3 class="size-24 default-font2" style="letter-spacing: 2px; font-weight: 300">FEATURE ONE</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third center">' +
						'<h1 class="size-48">02</h1>' +
						'\n<h3 class="size-24 default-font2" style="letter-spacing: 2px; font-weight: 300">FEATURE TWO</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third center">' +
						'<h1 class="size-48">03</h1>' +
						'\n<h3 class="size-24 default-font2" style="letter-spacing: 2px; font-weight: 300">FEATURE THREE</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/features-09.png',
		    'category': '105',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-48 is-title1-48 is-title-lite">SPECIAL FEATURES</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column fourth">' +
						'<i class="icon ion-android-bulb size-32"></i>' +
						'\n<h3 class="size-24">Feature Item</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text.</p>' +
					'</div>' +
					'<div class="column fourth">' +
						'<i class="icon ion-android-globe size-32"></i>' +
						'\n<h3 class="size-24">Feature Item</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text.</p>' +
					'</div>' +
					'<div class="column fourth">' +
						'<i class="icon ion-android-download size-32"></i>' +
						'\n<h3 class="size-24">Feature Item</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text.</p>' +
					'</div>' +
					'<div class="column fourth">' +
						'<i class="icon ion-android-favorite-outline size-32"></i>' +
						'\n<h3 class="size-24">Feature Item</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/features-10.png',
		    'category': '105',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-42" style="letter-spacing: 2px;">OUR FEATURES</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
				'<div class="row clearfix">' +
					'<div class="column fourth center">' +
						'<p style="line-height:1;margin-top:0">' +
							_tabs(1) + '<i class="icon ion-android-bulb size-54"></i>' +
						'\n</p>' +
					'</div>' +
					'<div class="column two-fourth">' +
						'<h3>FEATURE ITEM</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>' +
					'</div>' +
					'<div class="column half">' +
				'<div class="row clearfix">' +
					'<div class="column fourth center">' +
						'<p style="line-height:1;margin-top:0">' +
							_tabs(1) + '<i class="icon ion-android-checkmark-circle size-54"></i>' +
						'\n</p>' +
					'</div>' +
					'<div class="column two-fourth">' +
						'<h3>FEATURE ITEM</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
				'<div class="row clearfix">' +
					'<div class="column fourth center">' +
						'<p style="line-height:1;margin-top:0">' +
							_tabs(1) + '<i class="icon ion-android-favorite-outline size-54"></i>' +
						'\n</p>' +
					'</div>' +
					'<div class="column two-fourth">' +
						'<h3>FEATURE ITEM</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>' +
					'</div>' +
					'<div class="column half">' +
				'<div class="row clearfix">' +
					'<div class="column fourth center">' +
						'<p style="line-height:1;margin-top:0">' +
							_tabs(1) + '<i class="icon ion-wrench size-54"></i>' +
						'\n</p>' +
					'</div>' +
					'<div class="column two-fourth">' +
						'<h3>FEATURE ITEM</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/features-11.png',
		    'category': '105',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p class="size-60 display-font2" style="letter-spacing: 10px; line-height: 1.5">WHAT MAKES US DIFFERENT</p>' +
						'\n<p style="border-bottom: 2px solid #333; width: 70px; display: inline-block; margin: 0"></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column fourth">' +
						'<i class="icon ion-android-bulb size-32" style="color: #bdc3c7"></i>' +
						'\n<h3 class="size-21" style="letter-spacing: 1px; font-weight: 300">FEATURE 01</h3>' +
						'\n<p class="size-16">Lorem Ipsum is dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column fourth">' +
						'<i class="icon ion-android-desktop size-32" style="color: #bdc3c7"></i>' +
						'\n<h3 class="size-21" style="letter-spacing: 1px; font-weight: 300">FEATURE 02</h3>' +
						'\n<p class="size-16">Lorem Ipsum is dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column fourth">' +
						'<i class="icon ion-gear-b size-32" style="color: #bdc3c7"></i>' +
						'\n<h3 class="size-21" style="letter-spacing: 1px; font-weight: 300">FEATURE 03</h3>' +
						'\n<p class="size-16">Lorem Ipsum is dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column fourth">' +
						'<i class="icon ion-earth size-32" style="color: #bdc3c7"></i>' +
						'\n<h3 class="size-21" style="letter-spacing: 1px; font-weight: 300">FEATURE 04</h3>' +
						'\n<p class="size-16">Lorem Ipsum is dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/features-12.png',
		    'category': '105',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<h1 class="size-32" style="letter-spacing: 2px;"><b style="text-transform: uppercase;">What Makes Us Different</b></h1>' +
						'\n<p style="text-align: justify;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. Lorem ipsum dolor sit amet vivamus leo ante.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<img src="assets/minimalist-blocks/images/kara-michelle-544960-zjkQn1.jpg" alt="">' +
					'</div>' +
					'<div class="column third">' +
						'<p><i class="icon ion-android-options size-24" style="color: #bdc3c7"></i></p>' +
						'\n<p>FEATURE ITEM<br>Lorem Ipsum is dummy.</p>' +
						'\n<p><i class="icon ion-images size-24" style="color: #bdc3c7"></i></p>' +
						'\n<p>FEATURE ITEM<br>Lorem Ipsum is dummy.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/features-13.png',
		    'category': '105',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<h1 class="size-48">01</h1>' +
						'\n<h3 class="size-24 default-font2" style="letter-spacing: 3px; font-weight: 300">FEATURE ONE</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<h1 class="size-48">02</h1>' +
						'\n<h3 class="size-24 default-font2" style="letter-spacing: 3px; font-weight: 300">FEATURE TWO</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<h1 class="size-48">03</h1>' +
						'\n<h3 class="size-24 default-font2" style="letter-spacing: 3px; font-weight: 300">FEATURE THREE</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<h1 class="size-48">04</h1>' +
						'\n<h3 class="size-24 default-font2" style="letter-spacing: 3px; font-weight: 300">FEATURE FOUR</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/features-14.png',
		    'category': '105',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-48" style="letter-spacing: 5px;">WHAT MAKES US DIFFERENT</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third center">' +
						'<div style="text-align: center; width: 40px; height: 40px; line-height: 40px; border-radius: 50%; border: 2px solid #e67e22; display: inline-block;">' +
							_tabs(1) + '<i class="icon ion-android-desktop size-16" style="color: #e67e22"></i>' +
						'\n</div>' +
						'\n<h3 class="size-24" style="margin-top: 30px; letter-spacing: 2px;">FEATURE ITEM</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text.</p>' +
					'</div>' +
					'<div class="column third center">' +
						'<div style="text-align: center; width: 40px; height: 40px; line-height: 40px; border-radius: 50%; border: 2px solid #e67e22; display: inline-block;">' +
							_tabs(1) + '<i class="icon ion-gear-b size-16" style="color: #e67e22;"></i>' +
						'\n</div>' +
						'\n<h3 class="size-24" style="margin-top: 30px; letter-spacing: 2px;">FEATURE ITEM</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text.</p>' +
					'</div>' +
					'<div class="column third center">' +
						'<div style="text-align: center; width: 40px; height: 40px; line-height: 40px; border-radius: 50%; border: 2px solid #e67e22; display: inline-block;">' +
							_tabs(1) + '<i class="icon ion-paintbucket size-16" style="color: #e67e22;"></i>' +
						'\n</div>' +
						'\n<h3 class="size-24" style="margin-top: 30px; letter-spacing: 2px;">FEATURE ITEM</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/features-15.png',
		    'category': '105',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<img src="assets/minimalist-blocks/images/aidan-hancock-440776-unsplash-8u7fo1.jpg" alt="">' +
					'</div>' +
					'<div class="column third">' +
						'<p><i class="icon ion-monitor size-21" style="color: #bdc3c7"></i></p>' +
						'\n<p>FEATURE ITEM<br>Lorem ipsum dummy text</p>' +
						'\n<p><i class="icon ion-android-microphone size-21" style="color: #bdc3c7"></i></p>' +
						'\n<p>FEATURE ITEM<br>Lorem ipsum dummy text</p>' +
					'</div>' +
					'<div class="column third">' +
						'<p><i class="icon ion-android-options size-21" style="color: #bdc3c7"></i></p>' +
						'\n<p>FEATURE ITEM<br>Lorem ipsum dummy text</p>' +
						'\n<p><i class="icon ion-images size-21" style="color: #bdc3c7"></i></p>' +
						'\n<p>FEATURE ITEM<br>Lorem ipsum dummy text</p>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/features-19.png',
		    'category': '105',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-48 is-title1-48 is-title-lite">SMART SOLUTIONS FOR YOUR BUSINESS</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<i class="icon ion-android-bulb size-32" style="color: #e67e22"></i>' +
						'\n<h3 class="size-24">Feature Item</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<i class="icon ion-android-create size-32" style="color: #e67e22"></i>' +
						'\n<h3 class="size-24">Feature Item</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
					'</div>' +
				'</div>'
		},
        
		{
		    'thumbnail': 'preview/steps-01.png',
		    'category': '106',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p class="size-21" style="color: #d4d4d4; font-family: \'Georgia\', serif;"><i>Discover</i></p>' +
						'\n<h1 class="size-32 is-title1-32 is-title-bold">HOW IT WORKS</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<h1 class="size-80 is-title-bold" style="color: #d4d4d4;">1.</h1>' +
						'\n<h3 class="size-24 is-title-lite">STEP 01</h3>' +
						'\n<p style="border-bottom: 2px solid #333; width: 40px; display: inline-block; margin-top: 0"></p>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<h1 class="size-80 is-title-bold" style="color: #d4d4d4;">2.</h1>' +
						'\n<h3 class="size-24 is-title-lite">STEP 02</h3>' +
						'\n<p style="border-bottom: 2px solid #333; width: 40px; display: inline-block; margin-top: 0"></p>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<h1 class="size-80 is-title-bold" style="color: #d4d4d4;">3.</h1>' +
						'\n<h3 class="size-24 is-title-lite">STEP 03</h3>' +
						'\n<p style="border-bottom: 2px solid #333; width: 40px; display: inline-block; margin-top: 0"></p>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/steps-02.png',
		    'category': '106',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 style="letter-spacing: 4px;">HOW WE WORK</h1>' +
						'\n<p style="border-bottom: 2px solid #000; width: 60px; display: inline-block; margin-top: 0"></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<h2 style="color: rgb(204, 204, 204);">01.</h2>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<h2 style="color: rgb(204, 204, 204);">02.</h2>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<h2 style="color: rgb(204, 204, 204);">03.</h2>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/steps-03.png',
		    'category': '106',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-38" style="letter-spacing: 1px;">THE PROCESS</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<p class="size-42" style="line-height: 1; font-weight: bold;">01.</p>' +
						'\n<h2 class="size-28">STEP ONE</h2>' +
						'\n<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. Vivamus leo ante, consectetur sit amet.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/workplace-1245776_1280-oxBIU1.jpg" alt="">' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/desk-office-hero-workspace-(1)-V8F292.jpg" alt="">' +
					'</div>' +
					'<div class="column half">' +
						'<p class="size-42" style="line-height: 1; font-weight: bold;">02.</p>' +
						'\n<h2 class="size-28">STEP TWO</h2>' +
						'\n<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. Vivamus leo ante, consectetur sit amet.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/steps-04.png',
		    'category': '106',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-48" style="letter-spacing: 4px; text-transform: uppercase;">HOW WE WORK</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<div class="row clearfix">' +
							_tabs(1) + '<div class="column third center">' +
								_tabs(2) + '<p style="line-height:1;">' +
									_tabs(3) + '<i class="icon ion-ios-arrow-right size-64"></i>' +
								_tabs(2) + '</p>' +
							_tabs(1) + '</div>' +
							_tabs(1) + '<div class="column two-third">' +
								_tabs(2) + '<h3 class="size-36">STEP 1</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is simply dummy text.</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third">' +
						'<div class="row clearfix">' +
							_tabs(1) + '<div class="column third center">' +
								_tabs(2) + '<p style="line-height:1;">' +
									_tabs(3) + '<i class="icon ion-ios-arrow-right size-64"></i>' +
								_tabs(2) + '</p>' +
							_tabs(1) + '</div>' +
							_tabs(1) + '<div class="column two-third">' +
								_tabs(2) + '<h3 class="size-36">STEP 2</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is simply dummy text.</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third">' +
						'<div class="row clearfix">' +
							_tabs(1) + '<div class="column third center">' +
								_tabs(2) + '<p style="line-height:1;">' +
									_tabs(3) + '<i class="icon ion-ios-arrow-right size-64"></i>' +
								_tabs(2) + '</p>' +
							_tabs(1) + '</div>' +
							_tabs(1) + '<div class="column two-third">' +
								_tabs(2) + '<h3 class="size-36">STEP 3</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is simply dummy text.</p>' +
								_tabs(2) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/steps-05.png',
		    'category': '106',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-46" style="letter-spacing: 2px;">HOW IT WORKS</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third center">' +
						'<div class="is-card is-card-circle is-dark-text shadow-1" style="width:90px;height:90px;padding:10px">' +
							_tabs(1) + '<div class="is-card-content-centered">' +
								_tabs(2) + '<p class="size-42" style="margin: 0px; font-weight: bold;">1</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
						'\n<h3 style="margin-top:1.5em">Step One</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third center">' +
						'<div class="is-card is-card-circle is-dark-text shadow-1" style="width:90px;height:90px;padding:10px">' +
							_tabs(1) + '<div class="is-card-content-centered">' +
								_tabs(2) + '<p class="size-42" style="margin: 0px; font-weight: bold;">2</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
						'\n<h3 style="margin-top:1.5em">Step Two</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third center">' +
						'<div class="is-card is-card-circle is-dark-text shadow-1" style="width:90px;height:90px;padding:10px">' +
							_tabs(1) + '<div class="is-card-content-centered">' +
								_tabs(2) + '<p class="size-42" style="margin: 0px; font-weight: bold;">3</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
						'\n<h3 style="margin-top:1.5em">Step Three</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/steps-06.png',
		    'category': '106',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-46" style="letter-spacing: 2px;">HOW IT WORKS</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third center">' +
						'<div class="is-card is-card-circle is-light-text" style="width:90px;height:90px;padding:10px;background:#000;">' +
							_tabs(1) + '<div class="is-card-content-centered">' +
								_tabs(2) + '<p class="size-42" style="margin: 0px; font-weight: bold;">1</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
						'\n<h3 style="margin-top:1.5em">Step One</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third center">' +
						'<div class="is-card is-card-circle is-light-text" style="width:90px;height:90px;padding:10px;background:#000;">' +
							_tabs(1) + '<div class="is-card-content-centered">' +
								_tabs(2) + '<p class="size-42" style="margin: 0px; font-weight: bold;">2</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
						'\n<h3 style="margin-top:1.5em">Step Two</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third center">' +
						'<div class="is-card is-card-circle is-light-text" style="width:90px;height:90px;padding:10px;background:#000;">' +
							_tabs(1) + '<div class="is-card-content-centered">' +
								_tabs(2) + '<p class="size-42" style="margin: 0px; font-weight: bold;">3</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
						'\n<h3 style="margin-top:1.5em">Step Three</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/steps-07.png',
		    'category': '106',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p class="size-21" style="color: #d4d4d4; font-family: \'Georgia\', serif;"><i>Discover</i></p>' +
						'\n<h1 class="size-48 is-title1-48 is-title-bold">OUR WORK STEPS</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<h3 class="size-24"><i class="icon ion-ios-chatboxes-outline size-32"></i> &nbsp;STEP 01</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<h3 class="size-24"><i class="icon ion-ios-gear-outline size-32"></i> &nbsp;STEP 2</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<h3 class="size-24"><i class="icon ion-ios-paperplane-outline size-32"></i> &nbsp;STEP 3</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/steps-08.png',
		    'category': '106',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<h1 class="size-60">HOW</h1>' +
						'\n<h3 class="size-24">Step One</h3>' +
						'\n<p style="color: rgb(136, 136, 136); line-height: 1.8;">Lorem Ipsum is dummy text of the printing and typesetting industry.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<h1 class="size-60">IT</h1>' +
						'\n<h3 class="size-24">Step Two</h3>' +
						'\n<p style="color: rgb(136, 136, 136); line-height: 1.8;">Lorem Ipsum is dummy text of the printing and typesetting industry.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<h1 class="size-60">WORKS</h1>' +
						'\n<h3 class="size-24">Step Three</h3>' +
						'\n<p style="color: rgb(136, 136, 136); line-height: 1.8;">Lorem Ipsum is dummy text of the printing and typesetting industry.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/steps-09.png',
		    'category': '106',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-50" style="letter-spacing: 2px; text-transform: uppercase;">Timeline Process</h1>' +
						'\n<p style="letter-spacing: 4px; text-transform: uppercase;">Discover How We Work</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third center">' +
						'<h3 class="size-18" style="border: 2px solid rgb(0, 0, 0); padding: 10px; display: inline-block; letter-spacing: 3px;">STEP ONE</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third center">' +
						'<h3 class="size-18" style="border: 2px solid rgb(0, 0, 0); padding: 10px; display: inline-block; letter-spacing: 3px;">STEP TWO</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third center">' +
						'<h3 class="size-18" style="border: 2px solid rgb(0, 0, 0); padding: 10px; display: inline-block; letter-spacing: 3px;">STEP THREE</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/steps-10.png',
		    'category': '106',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-48 is-title1-48 is-title-lite">THE PROCESS</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column fourth center">' +
						'<div class="is-card is-card-circle is-dark-text shadow-1" style="width:70px;height:70px;padding:15px">' +
							_tabs(1) + '<div class="is-card-content-centered">' +
								_tabs(2) + '<i class="icon ion-android-bulb size-32"></i>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
						'\n<h3 style="margin-top:1.5em">Step 1</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text.</p>' +
					'</div>' +
					'<div class="column fourth center">' +
						'<div class="is-card is-card-circle is-dark-text shadow-1" style="width:70px;height:70px;padding:15px">' +
							_tabs(1) + '<div class="is-card-content-centered">' +
								_tabs(2) + '<i class="icon ion-compose size-32"></i>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
						'\n<h3 style="margin-top:1.5em">Step 2</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text.</p>' +
					'</div>' +
					'<div class="column fourth center">' +
						'<div class="is-card is-card-circle is-dark-text shadow-1" style="width:70px;height:70px;padding:15px">' +
							_tabs(1) + '<div class="is-card-content-centered">' +
								_tabs(2) + '<i class="icon ion-code size-32"></i>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
						'\n<h3 style="margin-top:1.5em">Step 3</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text.</p>' +
					'</div>' +
					'<div class="column fourth center">' +
						'<div class="is-card is-card-circle is-dark-text shadow-1" style="width:70px;height:70px;padding:15px">' +
							_tabs(1) + '<div class="is-card-content-centered">' +
								_tabs(2) + '<i class="icon ion-android-desktop size-32"></i>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
						'\n<h3 style="margin-top:1.5em">Step 4</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/steps-11.png',
		    'category': '106',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-48 is-title1-48 is-title-lite">THE PROCESS</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column fourth center">' +
						'<div class="is-card is-card-circle is-light-text" style="width:70px;height:70px;padding:15px;background:#000;">' +
							_tabs(1) + '<div class="is-card-content-centered">' +
								_tabs(2) + '<i class="icon ion-android-bulb size-32"></i>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
						'\n<h3 style="margin-top:1.5em">Step 1</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text.</p>' +
					'</div>' +
					'<div class="column fourth center">' +
						'<div class="is-card is-card-circle is-light-text" style="width:70px;height:70px;padding:15px;background:#000;">' +
							_tabs(1) + '<div class="is-card-content-centered">' +
								_tabs(2) + '<i class="icon ion-compose size-32"></i>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
						'\n<h3 style="margin-top:1.5em">Step 2</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text.</p>' +
					'</div>' +
					'<div class="column fourth center">' +
						'<div class="is-card is-card-circle is-light-text" style="width:70px;height:70px;padding:15px;background:#000;">' +
							_tabs(1) + '<div class="is-card-content-centered">' +
								_tabs(2) + '<i class="icon ion-code size-32"></i>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
						'\n<h3 style="margin-top:1.5em">Step 3</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text.</p>' +
					'</div>' +
					'<div class="column fourth center">' +
						'<div class="is-card is-card-circle is-light-text" style="width:70px;height:70px;padding:15px;background:#000;">' +
							_tabs(1) + '<div class="is-card-content-centered">' +
								_tabs(2) + '<i class="icon ion-android-desktop size-32"></i>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
						'\n<h3 style="margin-top:1.5em">Step 4</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/steps-12.png',
		    'category': '106',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h2 class="size-64" style="letter-spacing: 2px;">Timeline Process</h2>' +
						'\n<p class="size-21" style="letter-spacing: 1px;">Discover How We Work</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third center">' +
						'<p class="size-50 default-font1" style="line-height:1.3">01</p>' +
						'\n<h3 class="size-18">STEP ONE</h3>' +
						'\n<p class="size-16" style="color: rgb(136, 136, 136);">Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third center">' +
						'<p class="size-50 default-font1" style="line-height:1.3">02</p>' +
						'\n<h3 class="size-18">STEP TWO</h3>' +
						'\n<p class="size-16" style="color: rgb(136, 136, 136);">Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third center">' +
						'<p class="size-50 default-font1" style="line-height:1.3">03</p>' +
						'\n<h3 class="size-18">STEP THREE</h3>' +
						'\n<p class="size-16" style="color: rgb(136, 136, 136);">Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>'
		},		

		{
		    'thumbnail': 'preview/steps-13.png',
		    'category': '106',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 style="letter-spacing: 3px;">WORK STEPS</h1>' +
						'\n<p style="border-bottom: 2px solid #333; width: 40px; display: inline-block;"></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<h1 class="size-80" style="text-align: center;">01</h1>' +
						'\n<p style="text-align: left;">Lorem Ipsum is simply dummy text of the printing industry. Vivamus leo ante, dolor sit amet vel.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<h1 class="size-80" style="text-align: center;">02</h1>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry. Vivamus leo ante, dolor sit amet vel.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<h1 class="size-80" style="text-align: center;">03</h1>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry. Vivamus leo ante, dolor sit amet vel.</p>' +
					'</div>' +
				'</div>'
		},	

		{
		    'thumbnail': 'preview/steps-14.png',
		    'category': '106',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p class="size-18" style="font-style: italic;">Discover</p>' +
						'\n<h1 class="size-46" style="letter-spacing: 4px;">HOW WE WORK</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<i class="icon ion-android-bulb size-48" style="color: #ea653c;"></i>' +
						'\n<h3 class="size-21">STEP ONE</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<i class="icon ion-compose size-48" style="color: #ea653c;"></i>' +
						'\n<h3 class="size-21">STEP TWO</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<i class="icon ion-gear-b size-48" style="color: #ea653c;"></i>' +
						'\n<h3 class="size-21">STEP THREE</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>'
		},	

		{
		    'thumbnail': 'preview/steps-15.png',
		    'category': '106',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<p style="letter-spacing: 2px;">STEP ONE</p>' +
						'\n<h1 class="size-42" style="font-weight: bold;">Discovery</h1>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/-BwYjC1.jpg" alt=""></div>' +
					'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/-FrSUb2.jpg" alt="">' +
					'</div>' +
					'<div class="column half">' +
						'<p style="letter-spacing: 2px;">STEP TWO</p>' +
						'\n<h1 class="size-42" style="font-weight: bold;">Design and Development</h1>' +
						'\n<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
					'</div>' +
				'</div>'
		},	

		{
		    'thumbnail': 'preview/steps-16.png',
		    'category': '106',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full" style="text-align: center;">' +
						'<h1 style="letter-spacing: 2px;">THIS IS HOW WE WORK</h1>' +
						'\n<p style="border-bottom: 2px solid #333; width: 70px; display: inline-block;"></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third center">' +
						'<i class="icon ion-clipboard size-32"></i>' +
						'\n<h3 class="size-21">STEP ONE</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third center">' +
						'<i class="icon ion-gear-b size-32"></i>' +
						'\n<h3 class="size-21">STEP TWO</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third center">' +
						'<i class="icon ion-paper-airplane size-32"></i>' +
						'\n<h3 class="size-21">STEP THREE</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/pricing-01.png',
		    'category': '107',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-42" style="letter-spacing: 1px;">CHOOSE YOUR PLAN</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<h1 class="size-76" style="color: rgb(222, 222, 222); line-height: 1; font-weight: bold;">01</h1>' +
						'\n<h3 class="size-24" style="font-weight: bold">LITE / $33</h3>' +
						'\n<p style="border-bottom: 2.5px solid #000; width: 40px; display: inline-block; margin-top:0"></p>' +
						'\n<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
						'\n<div style="margin:1.2em 0">' +
							_tabs(1) + '<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small edit">Buy Now</a>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third">' +
						'<h1 class="size-76" style="color: rgb(222, 222, 222); line-height: 1; font-weight: bold;">02</h1>' +
						'\n<h3 class="size-24" style="font-weight: bold">ADVANCED / $59</h3>' +
						'\n<p style="border-bottom: 2.5px solid #000; width: 40px; display: inline-block; margin-top:0"></p>' +
						'\n<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
						'\n<div style="margin:1.2em 0">' +
							_tabs(1) + '<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small edit">Buy Now</a>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third">' +
						'<h1 class="size-76" style="color: rgb(222, 222, 222); line-height: 1; font-weight: bold;">03</h1>' +
						'\n<h3 class="size-24" style="font-weight: bold">ULTIMATE / $77</h3>' +
						'\n<p style="border-bottom: 2.5px solid #000; width: 40px; display: inline-block; margin-top:0"></p>' +
						'\n<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
						'\n<div style="margin:1.2em 0">' +
							_tabs(1) + '<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small edit">Buy Now</a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/pricing-02.png',
		    'category': '107',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-38" style="letter-spacing: 2px;">SIMPLE PRICING</h1>' +
						'\n<p style="border-bottom: 2px solid #000; width: 60px; display: inline-block;"></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);">' +
							_tabs(1) + '<div style="padding:30px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<h3 class="size-24 is-title-lite">STANDARD</h3>' +
								_tabs(2) + '<p style="color: #e74c3c; font-size: 24px; line-height: 1.4">$<span class="size-64" style="color: #e74c3c">29</span>/mo</p>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
								_tabs(2) + '<div style="margin:1.2em 0">' +
									_tabs(3) + '<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small edit">Buy Now</a>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);">' +
							_tabs(1) + '<div style="padding:30px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<h3 class="size-24 is-title-lite">DELUXE</h3>' +
								_tabs(2) + '<p style="color: #e74c3c; font-size: 24px; line-height: 1.4">$<span class="size-64" style="color: #e74c3c">59</span>/mo</p>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
								_tabs(2) + '<div style="margin:1.2em 0">' +
									_tabs(3) + '<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small edit">Buy Now</a>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);">' +
							_tabs(1) + '<div style="padding:30px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<h3 class="size-24 is-title-lite">ULTIMATE</h3>' +
								_tabs(2) + '<p style="color: #e74c3c; font-size: 24px; line-height: 1.4">$<span class="size-64" style="color: #e74c3c">79</span>/mo</p>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
								_tabs(2) + '<div style="margin:1.2em 0">' +
									_tabs(3) + '<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small edit">Buy Now</a>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/pricing-04.png',
		    'category': '107',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-42" style="letter-spacing: 1px;">SUBSCRIPTION PLANS</h1>' +
						'\n<p>Choose the right plan that works for you.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);">' +
							_tabs(1) + '<div style="padding:30px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<h1 class="size-76" style="color: rgb(204, 204, 204); line-height: 1;">01</h1>' +
								_tabs(2) + '<h3 class="size-24">BASIC / FREE</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
								_tabs(2) + '<div style="margin:1.2em 0">' +
									_tabs(3) + '<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small edit">Select Plan</a>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third">' +
						'<div class="is-card is-light-text shadow-1" style="width:calc(100%);background-color: #27ae60">' +
							_tabs(1) + '<div style="padding:30px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<h1 class="size-76" style="line-height:1">02</h1>' +
								_tabs(2) + '<h3 class="size-24">DELUXE / $77</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
								_tabs(2) + '<div style="margin:1.2em 0">' +
									_tabs(3) + '<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small edit">Select Plan</a>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third">' +
						'<div class="is-card is-light-text shadow-1" style="width:calc(100%);background-color: #f39c12">' +
							_tabs(1) + '<div style="padding:30px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<h1 class="size-76" style="line-height:1">03</h1>' +
								_tabs(2) + '<h3 class="size-24">PREMIUM / $89</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
								_tabs(2) + '<div style="margin:1.2em 0">' +
									_tabs(3) + '<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small edit">Select Plan</a>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/pricing-05.png',
		    'category': '107',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-48 default-font2" style="letter-spacing: 2px;">PRICING PLANS</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<h2 class="size-64">$31</h2>' +
						'\n<p class="size-16 default-font1">MONTHLY</p>' +
						'\n<h3 class="size-24 default-font2" style="line-height: 2; letter-spacing: 2px;">STANDARD</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
						'\n<div style="margin:1.5em 0">' +
							_tabs(1) + '<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small edit">Get Started</a>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third">' +
						'<h2 class="size-64">$57</h2>' +
						'\n<p class="size-16 default-font1">MONTHLY</p>' +
						'\n<h3 class="size-24 default-font2" style="line-height: 2; letter-spacing: 2px;">PREMIUM</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
						'\n<div style="margin:1.5em 0">' +
							_tabs(1) + '<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small edit">Get Started</a>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third">' +
						'<h2 class="size-64">$62</h2>' +
						'\n<p class="size-16 default-font1">MONTHLY</p>' +
						'\n<h3 class="size-24 default-font2" style="line-height: 2; letter-spacing: 2px;">ULTIMATE</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
						'\n<div style="margin:1.5em 0">' +
							_tabs(1) + '<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small edit">Get Started</a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/pricing-06.png',
		    'category': '107',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-42" style="letter-spacing: 1px;">PRICING PLANS</h1>' +
						'<p>Fair Prices. Excellent Services.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<div class="is-card is-card-circle is-light-text card" style="width:90px;height:90px;padding:15px;margin-top:20px;background-color: #2980b9;">' +
									_tabs(3) + '<div class="is-card-content-centered">' +
										_tabs(4) + '<p class="size-42" style="margin:0; color: #fff">$<b style="color: #fff">55</b></p>' +
									_tabs(3) + '</div>' +
								_tabs(2) + '</div>' +
								_tabs(2) + '<h3 class="size-24 is-title-lite" style="margin-top:25px">STANDARD</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
								_tabs(2) + '<div style="margin:1.2em 0">' +
									_tabs(3) + '<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small edit">Purchase</a>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<div class="is-card is-card-circle is-light-text card" style="width:90px;height:90px;padding:15px;margin-top:20px;background-color: #c0392b">' +
									_tabs(3) + '<div class="is-card-content-centered">' +
										_tabs(4) + '<p class="size-42" style="margin:0; color: #fff">$<b style="color: #fff">67</b></p>' +
									_tabs(3) + '</div>' +
								_tabs(2) + '</div>' +
								_tabs(2) + '<h3 class="size-24 is-title-lite" style="margin-top:25px">DELUXE</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
								_tabs(2) + '<div style="margin:1.2em 0">' +
									_tabs(3) + '<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small edit">Purchase</a>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<div class="is-card is-card-circle is-light-text card" style="width:90px;height:90px;padding:15px;margin-top:20px;background-color: #8e44ad">' +
									_tabs(3) + '<div class="is-card-content-centered">' +
										_tabs(4) + '<p class="size-42" style="margin:0; color: #fff">$<b style="color: #fff">72</b></p>' +
									_tabs(3) + '</div>' +
								_tabs(2) + '</div>' +
								_tabs(2) + '<h3 class="size-24 is-title-lite" style="margin-top:25px">PREMIUM</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
								_tabs(2) + '<div style="margin:1.2em 0">' +
									_tabs(3) + '<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small edit">Purchase</a>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/pricing-07.png',
		    'category': '107',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-38">PLANS THAT MEET YOUR NEEDS</h1>' +
						'\n<p>Fair Prices. Excellent Services.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<h1 class="size-28 is-title-lite">BASIC</h1>' +
								_tabs(2) + '<p style="border-bottom: 2px solid #333; width: 30px; display: inline-block; margin-top: 0"></p>' +
								_tabs(2) + '<p>Lorem Ipsum has been the industry\'s standard dummy text ever.</p>' +
								_tabs(2) + '<h4>$ <span class="size-64 is-title-bold" style="font-weight: 600">39</span></h4>' +
								_tabs(2) + '<div style="margin:1.2em 0">' +
									_tabs(3) + '<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small edit">Select Plan</a>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<h1 class="size-28 is-title-lite">ADVANCED</h1>' +
								_tabs(2) + '<p style="border-bottom: 2px solid #333; width: 30px; display: inline-block; margin-top: 0"></p>' +
								_tabs(2) + '<p>Lorem Ipsum has been the industry\'s standard dummy text ever.</p>' +
								_tabs(2) + '<h4>$ <span class="size-64 is-title-bold" style="font-weight: 600">59</span></h4>' +
								_tabs(2) + '<div style="margin:1.2em 0">' +
									_tabs(3) + '<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small edit">Select Plan</a>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<h1 class="size-28 is-title-lite">ULTIMATE</h1>' +
								_tabs(2) + '<p style="border-bottom: 2px solid #333; width: 30px; display: inline-block; margin-top: 0"></p>' +
								_tabs(2) + '<p>Lorem Ipsum has been the industry\'s standard dummy text ever.</p>' +
								_tabs(2) + '<h4>$ <span class="size-64 is-title-bold" style="font-weight: 600">79</span></h4>' +
								_tabs(2) + '<div style="margin:1.2em 0">' +
									_tabs(3) + '<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small edit">Select Plan</a>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/pricing-08.png',
		    'category': '107',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-42" style="letter-spacing: 1px;">Plans That Meet Your Needs</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<h1 class="size-76" style="color: rgb(222, 222, 222); font-weight: bold;">01</h1>' +
						'\n<h3 class="size-24" style="font-weight: bold">BASIC / <span style="color: rgb(27, 131, 223);">$55</span></h3>' +
						'\n<p style="border-bottom: 2px solid #000; width: 40px; display: inline-block; margin-top:0"></p>' +
						'\n<p>Lorem Ipsum is dummy text of the printing industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
						'\n<div style="margin:1.2em 0">' +
							_tabs(1) + '<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small edit">Select Plan</a>' +
						'\n</div>' +
					'</div>' +
					'<div class="column half">' +
						'<h1 class="size-76" style="color: rgb(222, 222, 222); font-weight: bold;">02</h1>' +
						'\n<h3 class="size-24" style="font-weight: bold">PREMIUM / <span style="color: rgb(27, 131, 223);">$77</span></h3>' +
						'\n<p style="border-bottom: 2px solid #000; width: 40px; display: inline-block; margin-top:0"></p>' +
						'\n<p>Lorem Ipsum is dummy text of the printing industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
						'\n<div style="margin:1.2em 0">' +
							_tabs(1) + '<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small edit">Select Plan</a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/pricing-09.png',
		    'category': '107',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-48">Pricing Plans</h1>' +
						'\n<p>Choose the right plan that works for you. No hidden fees.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);">' +
							_tabs(1) + '<div style="padding:30px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<h1 class="size-60" style="font-weight: bold;">$17</h1>' +
								_tabs(2) + '<h2 class="size-28">BASIC</h2>' +
								_tabs(2) + '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
								_tabs(2) + '<div style="margin:1.2em 0">' +
									_tabs(3) + '<a href="#" class="is-btn is-btn-small is-btn-ghost1 is-upper edit">Buy Now</a>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column half">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);">' +
							_tabs(1) + '<div style="padding:30px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<h1 class="size-60" style="font-weight: bold;">$29</h1>' +
								_tabs(2) + '<h2 class="size-28">PREMIUM</h2>' +
								_tabs(2) + '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
								_tabs(2) + '<div style="margin:1.2em 0">' +
									_tabs(3) + '<a href="#" class="is-btn is-btn-small is-btn-ghost1 is-upper edit">Buy Now</a>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/pricing-12.png',
		    'category': '107',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-48 is-title1-48 is-title-lite">CHOOSE YOUR PLAN</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<h1 class="size-64 is-title1-64 is-title-bold"><span style="font-size:30px">$</span>19</h1>' +
						'\n<h3 class="size-18 is-title1-18 is-title-bold">Per Month</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
						'\n<div style="margin:2em 0 1em">' +
							_tabs(1) + '<a href="#" class="is-btn is-btn-ghost1 is-upper is-rounded-30 is-btn-small edit">Buy Now</a>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third">' +
						'<h1 class="size-64 is-title1-64 is-title-bold"><span style="font-size:30px">$</span>27</h1>' +
						'\n<h3 class="size-18 is-title1-18 is-title-bold">Per Month</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
						'\n<div style="margin:2em 0 1em">' +
							_tabs(1) + '<a href="#" class="is-btn is-btn-ghost1 is-upper is-rounded-30 is-btn-small edit">Buy Now</a>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third">' +
						'<h1 class="size-64 is-title1-64 is-title-bold"><span style="font-size:30px">$</span>39</h1>' +
						'\n<h3 class="size-18 is-title1-18 is-title-bold">Per Month</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
						'\n<div style="margin:2em 0 1em">' +
							_tabs(1) + '<a href="#" class="is-btn is-btn-ghost1 is-upper is-rounded-30 is-btn-small edit">Buy Now</a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},


		{
		    'thumbnail': 'preview/pricing-10.png',
		    'category': '107',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-48 default-font2" style="letter-spacing: 2px;">SIMPLE PRICING</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<h2 class="size-64">$31</h2>' +
						'\n<p class="size-16 default-font1">MONTHLY</p>' +
						'\n<h3 class="size-28 default-font2" style="line-height: 2;letter-spacing: 2px;">STANDARD</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
						'\n<div style="margin:2.2em 0">' +
							_tabs(1) + '<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small edit">Get Started</a>' +
						'\n</div>' +
					'</div>' +
					'<div class="column half">' +
						'<h2 class="size-64">$57</h2>' +
						'\n<p class="size-16 default-font1">MONTHLY</p>' +
						'\n<h3 class="size-28 default-font2" style="line-height: 2;letter-spacing: 2px;">ULTIMATE </h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
						'\n<div style="margin:2.2em 0">' +
							_tabs(1) + '<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small edit">Get Started</a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/pricing-15.png',
		    'category': '107',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-48 is-title1-48 is-title-lite">PRICING PLANS</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<h3>BASIC</h3>' +
						'\n<p>Lorem Ipsum is dummy text of the printing and typesetting industry.</p>' +
						'\n<p style="font-size: 24px; line-height: 1.4">$<span class="size-64 is-title-lite">34</span>/ month</p>' +
						'\n<div style="margin:2em 0">' +
							_tabs(1) + '<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small">Choose Plan</a>' +
						'\n</div>' +
					'</div>' +
					'<div class="column half">' +
						'<h3>PREMIUM</h3>' +
						'\n<p>Lorem Ipsum is dummy text of the printing and typesetting industry.</p>' +
						'\n<p style="font-size: 24px; line-height: 1.4">$<span class="size-64 is-title-lite">57</span>/ month</p>' +
						'\n<div style="margin:2em 0">' +
							_tabs(1) + '<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small">Choose Plan</a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/pricing-16.png',
		    'category': '107',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-48 is-title1-48 is-title-lite">PRICING PLANS</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<h1 class="size-48 is-title1-48 is-title-bold" style="color: rgb(204, 204, 204);">FREE</h1>' +
						'\n<h3 class="size-21">Try New Features</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
						'\n<div style="margin:2em 0 1em">' +
							_tabs(1) + '<a href="#" class="is-btn is-btn-small is-btn-ghost1 is-upper edit">Get Started</a>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third">' +
						'<h1 class="size-48 is-title1-48 is-title-bold">$19</h1>' +
						'\n<h3 class="size-21">Monthly</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
						'\n<div style="margin:2em 0 1em">' +
							_tabs(1) + '<a href="#" class="is-btn is-btn-small is-btn-ghost1 is-upper edit">Buy Now</a>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third">' +
						'<h1 class="size-48 is-title1-48 is-title-bold">$227</h1>' +
						'\n<h3 class="size-21">Yearly</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
						'\n<div style="margin:2em 0 1em">' +
							_tabs(1) + '<a href="#" class="is-btn is-btn-small is-btn-ghost1 is-upper edit">Buy Now</a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/pricing-17.png',
		    'category': '107',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-42">PRICING PLANS</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<h1 class="size-32 is-title-lite">BASIC</h1>' +
								_tabs(2) + '<h4>$ <span class="size-76">39</span></h4>' +
								_tabs(2) + '<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
								_tabs(2) + '<div style="margin:1.2em 0">' +
									_tabs(3) + '<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small edit">Select Plan</a>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third">' +
						'<div class="is-card is-light-text shadow-1" style="width:calc(100%);background-color: #f39c12">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<h1 class="size-32 is-title-lite">PREMIUM</h1>' +
								_tabs(2) + '<h4>$ <span class="size-76">59</span></h4>' +
								_tabs(2) + '<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
								_tabs(2) + '<div style="margin:1.2em 0">' +
									_tabs(3) + '<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small edit">Select Plan</a>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<h1 class="size-32 is-title-lite">ULTIMATE</h1>' +
								_tabs(2) + '<h4>$ <span class="size-76">99</span></h4>' +
								_tabs(2) + '<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
								_tabs(2) + '<div style="margin:1.2em 0">' +
									_tabs(3) + '<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small edit">Select Plan</a>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/pricing-18.png',
		    'category': '107',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-42" style="letter-spacing: 2px;">SUBSCRIPTION  PLANS</h1>' +
						'\n<p style="letter-spacing: 1px;">We make everything way easier for you.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<h1 class="size-35" style="letter-spacing: 2px;">STARTER</h1>' +
								_tabs(2) + '<h3 class="size-18" style="color: rgb(119, 119, 119); letter-spacing: 2px;">$19 / MONTH</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
								_tabs(2) + '<div style="margin:1.5em 0">' +
									_tabs(3) + '<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small edit">Choose Plan</a>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<h1 class="size-35" style="letter-spacing: 2px;">PRO</h1>' +
								_tabs(2) + '<h3 class="size-18" style="color: rgb(119, 119, 119); letter-spacing: 2px;">$59 / MONTH</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
								_tabs(2) + '<div style="margin:1.5em 0">' +
									_tabs(3) + '<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small edit">Choose Plan</a>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<h1 class="size-35" style="letter-spacing: 2px;">BUSINESS</h1>' +
								_tabs(2) + '<h3 class="size-18" style="color: rgb(119, 119, 119); letter-spacing: 2px;">$79 / MONTH</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
								_tabs(2) + '<div style="margin:1.5em 0">' +
									_tabs(3) + '<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small edit">Choose Plan</a>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/pricing-19.png',
		    'category': '107',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-48" style="letter-spacing: 4px; text-align: center;">OUR PLANS</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<h3 class="size-24" style="line-height: 2;letter-spacing: 2px;">STANDARD</h3>' +
								_tabs(2) + '<h3 class="size-60" style="font-weight: bold;">$27</h3>' +
								_tabs(2) + '<h3 class="size-18" style="font-weight: bold;">Per Month</h3>' +
								_tabs(2) + '<p style="margin-top:0">Lorem Ipsum is simply dummy text of the printing industry.</p>' +
								_tabs(2) + '<div><a href="#" class="is-btn is-btn-ghost1 is-upper is-rounded-30 is-btn-small">Get Started</a></div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<h3 class="size-24" style="line-height: 2;letter-spacing: 2px;">DELUXE</h3>' +
								_tabs(2) + '<h3 class="size-60" style="font-weight: bold;">$39</h3>' +
								_tabs(2) + '<h3 class="size-18" style="font-weight: bold;">Per Month</h3>' +
								_tabs(2) + '<p style="margin-top:0">Lorem Ipsum is simply dummy text of the printing industry.</p>' +
								_tabs(2) + '<div><a href="#" class="is-btn is-btn-ghost1 is-upper is-rounded-30 is-btn-small">Get Started</a></div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<h3 class="size-24" style="line-height: 2;letter-spacing: 2px;">ULTIMATE</h3>' +
								_tabs(2) + '<h3 class="size-60" style="font-weight: bold;">$55</h3>' +
								_tabs(2) + '<h3 class="size-18" style="font-weight: bold;">Per Month</h3>' +
								_tabs(2) + '<p style="margin-top:0">Lorem Ipsum is simply dummy text of the printing industry.</p>' +
								_tabs(2) + '<div><a href="#" class="is-btn is-btn-ghost1 is-upper is-rounded-30 is-btn-small">Get Started</a></div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/pricing-20.png',
		    'category': '107',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<h3 class="size-28" style="line-height: 2;letter-spacing: 2px;">BASIC <span style="color: rgb(149, 149, 149);">PLAN</span></h3>' +
						'\n<h3>$ <span class="size-64">39</span></h3>' +
						'\n<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. Lorem ipsum dolor sit amet, vivamus ante.</p>' +
						'\n<div style="margin:2.2em 0">' +
							_tabs(1) + '<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small edit">Get Started</a>' +
						'\n</div>' +
					'</div>' +
					'<div class="column half">' +
						'<h3 class="size-28" style="line-height: 2;letter-spacing: 2px;">PRO <span style="color: rgb(149, 149, 149);">PLAN</span></h3>' +
						'\n<h3>$ <span style="font-size: 64px;">79</span></h3>' +
						'\n<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. Lorem ipsum dolor sit amet, vivamus ante.</p>' +
						'\n<div style="margin:2.2em 0">' +
							_tabs(1) + '<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small edit">Get Started</a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},
        
		{
		    'thumbnail': 'preview/skills-01.png',
		    'category': '108',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p class="size-16">DISCOVER HOW GOOD WE ARE</p>' +
						'\n<h1 class="size-64" style="letter-spacing: 5px;">TEAM SKILLS</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<h2 class="size-64">85%</h2>' +
						'\n<h3 class="size-18 default-font2">WEB DESIGN</h3>' +
						'\n<p class="size-16" style="color: rgb(136, 136, 136);">Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<h2 class="size-64">98%</h2>' +
						'\n<h3 class="size-18 default-font2">WEB DEVELOPMENT</h3>' +
						'\n<p class="size-16" style="color: rgb(136, 136, 136);">Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<h2 class="size-64">77%</h2>' +
						'\n<h3 class="size-18 default-font2">PHOTOSHOP</h3>' +
						'\n<p class="size-16" style="color: rgb(136, 136, 136);">Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/skills-02.png',
		    'category': '108',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="default-font2 size-64" style="letter-spacing: 6px;">PROFESSIONAL SKILLS</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third center">' +
						'<div class="is-card is-card-circle is-light-text shadow-1" style="width:70px;height:70px;padding:15px;background: #6ab04c;">' +
							_tabs(1) + '<div class="is-card-content-centered">' +
								_tabs(2) + '<p class="size-28 default-font1" style="margin: 0">87%</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
						'\n<h3 class="size-21" style="margin-top: 25px;">WEB DESIGN </h3>' +
						'\n<p style="line-height: 1.8">Lorem Ipsum is dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third center">' +
						'<div class="is-card is-card-circle is-light-text shadow-1" style="width:70px;height:70px;padding:15px;background: #e84393;">' +
							_tabs(1) + '<div class="is-card-content-centered">' +
								_tabs(2) + '<p class="size-28 default-font1" style="margin: 0">92%</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
						'\n<h3 class="size-21" style="margin-top: 25px;">WEB DEVELOPMENT </h3>' +
						'\n<p style="line-height: 1.8">Lorem Ipsum is dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third center">' +
						'<div class="is-card is-card-circle is-light-text shadow-1" style="width:70px;height:70px;padding:15px;background: #0984e3;">' +
							_tabs(1) + '<div class="is-card-content-centered">' +
								_tabs(2) + '<p class="size-28 default-font1" style="margin: 0">99%</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
						'\n<h3 class="size-21" style="margin-top: 25px;">CUSTOMER SUPPORT</h3>' +
						'\n<p style="line-height: 1.8">Lorem Ipsum is dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/skills-03.png',
		    'category': '108',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-48"><b>WORK <span style="color: #888888">SKILLS</span></b></h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<div style="text-align: center; width: 90px; height: 90px; line-hieght: 90px; border-radius: 50%; border: 3px solid #888888; display: inline-block;">' +
							_tabs(1) + '<p class="size-28" style="padding: 10px; color: rgb(136, 136, 136); line-height: 1.3; font-weight: bold;">93%</p>' +
						'\n</div>' +
						'\n<h3 class="size-24">Design / Graphics</h3>' +
						'\n<p>Lorem Ipsum is dummy text of printing industry.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<div style="text-align: center; width: 90px; height: 90px; line-hieght: 90px; border-radius: 50%; border: 3px solid #888888; display: inline-block;">' +
							_tabs(1) + '<p class="size-28" style="padding: 10px; color: rgb(136, 136, 136); line-height: 1.3; font-weight: bold;">85%</p>' +
						'\n</div>' +
						'\n<h3 class="size-24">HTML & CSS</h3>' +
						'\n<p>Lorem Ipsum is dummy text of printing industry.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-20"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<div style="text-align: center; width: 90px; height: 90px; line-hieght: 90px; border-radius: 50%; border: 3px solid #888888; display: inline-block;">' +
							_tabs(1) + '<p class="size-28" style="padding: 10px; color: rgb(136, 136, 136); line-height: 1.3; font-weight: bold;">77%</p>' +
						'\n</div>' +
						'\n<h3 class="size-24">WordPress</h3>' +
						'\n<p>Lorem Ipsum is dummy text of printing industry.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<div style="text-align: center; width: 90px; height: 90px; line-hieght: 90px; border-radius: 50%; border: 3px solid #888888; display: inline-block;">' +
							_tabs(1) + '<p class="size-28" style="padding: 10px; color: rgb(136, 136, 136); line-height: 1.3; font-weight: bold;">89%</p>' +
						'\n</div>' +
						'\n<h3 class="size-24">Customer Support</h3>' +
						'\n<p>Lorem Ipsum is dummy text of printing industry.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/skills-04.png',
		    'category': '108',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<div class="display">' +
							'<h1 style="letter-spacing: 25px;">PROFESSIONAL SKILLS</h1>' +
						'</div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column fourth center">' +
						'<div class="is-card is-card-circle is-dark-text shadow-1" style="width:60px;height:60px;padding:10px">' +
							_tabs(1) + '<div class="is-card-content-centered">' +
								_tabs(2) + '<div class="size-24">91%</div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
						'\n<h4 style="line-height: 2.2;">HTML & CSS</h4>' +
						'\n<p style="color: rgb(136, 136, 136); line-height: 1.7">Lorem Ipsum is dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column fourth center">' +
						'<div class="is-card is-card-circle is-dark-text shadow-1" style="width:60px;height:60px;padding:10px">' +
							_tabs(1) + '<div class="is-card-content-centered">' +
								_tabs(2) + '<div class="size-24">83%</div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
						'\n<h4 style="line-height: 2.2;">PHP</h4>' +
						'\n<p style="color: rgb(136, 136, 136); line-height: 1.7">Lorem Ipsum is dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column fourth center">' +
						'<div class="is-card is-card-circle is-dark-text shadow-1" style="width:60px;height:60px;padding:10px">' +
							_tabs(1) + '<div class="is-card-content-centered">' +
								_tabs(2) + '<div class="size-24">72%</div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
						'\n<h4 style="line-height: 2.2;">JavaScript</h4>' +
						'\n<p style="color: rgb(136, 136, 136); line-height: 1.7">Lorem Ipsum is dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column fourth center">' +
						'<div class="is-card is-card-circle is-dark-text shadow-1" style="width:60px;height:60px;padding:10px">' +
							_tabs(1) + '<div class="is-card-content-centered">' +
								_tabs(2) + '<div class="size-24">85%</div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
						'\n<h4 style="line-height: 2.2;">Photoshop</h4>' +
						'\n<p style="color: rgb(136, 136, 136); line-height: 1.7">Lorem Ipsum is dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/skills-05.png',
		    'category': '108',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-48 is-title1-48 is-title-lite">OUR <span style="color: #888888">SKILLS</span></h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<i class="icon ion-android-favorite-outline size-32" style="color: #f39c12"></i>' +
						'\n<h3 class="size-21" style="color: #888888">WEB DESIGN</h3>' +
						'\n<p style="border-bottom: 2px solid #f39c12; width: 40px; display: inline-block; margin-top:0"></p>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<i class="icon ion-code size-32" style="color: #f39c12"></i>' +
						'\n<h3 class="size-21" style="color: #888888">HTML & CSS</h3>' +
						'\n<p style="border-bottom: 2px solid #f39c12; width: 40px; display: inline-block; margin-top:0"></p>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<i class="icon ion-android-globe size-32" style="color: #f39c12"></i>' +
						'\n<h3 class="size-21" style="color: #888888">BRANDING</h3>' +
						'\n<p style="border-bottom: 2px solid #f39c12; width: 40px; display: inline-block; margin-top:0"></p>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/skills-06.png',
		    'category': '108',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-48 default-font2" style="letter-spacing: 2px;">PROFESSIONAL SKILLS</h1>' +
						'\n<p style="border-bottom: 2px solid #333; width: 50px; display: inline-block; margin: 0"></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column fourth center">' +
						'<div class="is-card is-card-circle is-light-text shadow-1" style="width:100px;height:100px;padding:15px;background: #f0932b;">' +
							_tabs(1) + '<div class="is-card-content-centered">' +
								_tabs(2) + '<p class="size-32 default-font1">92%</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
						'\n<h3 class="size-18 default-font2" style="margin-top: 25px;">CREATIVE DESIGN</h3>' +
					'</div>' +
					'<div class="column fourth center">' +
						'<div class="is-card is-card-circle is-light-text shadow-1" style="width:100px;height:100px;padding:15px;background:  #6ab04c;">' +
							_tabs(1) + '<div class="is-card-content-centered">' +
								_tabs(2) + '<p class="size-32 default-font1">80%</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
						'\n<h3 class="size-18 default-font2" style="margin-top: 25px;">PROGRAMMING</h3>' +
					'</div>' +
					'<div class="column fourth center">' +
						'<div class="is-card is-card-circle is-light-text shadow-1" style="width:100px;height:100px;padding:15px;background: #eb4d4b;">' +
							_tabs(1) + '<div class="is-card-content-centered">' +
								_tabs(2) + '<p class="size-32 default-font1">77%</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
						'\n<h3 class="size-18 default-font2" style="margin-top: 25px;">PHOTOGRAPHY</h3>' +
					'</div>' +
					'<div class="column fourth center">' +
						'<div class="is-card is-card-circle is-light-text shadow-1" style="width:100px;height:100px;padding:15px;background: #0984e3;">' +
							_tabs(1) + '<div class="is-card-content-centered">' +
								_tabs(2) + '<p class="size-32 default-font1">83%</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
						'\n<h3 class="size-18 default-font2" style="margin-top: 25px;">PHOTOSHOP</h3>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/skills-07.png',
		    'category': '108',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p class="size-16" style="letter-spacing: 1px;">DISCOVER HOW GOOD WE ARE</p>' +
						'\n<h1 class="size-54" style="letter-spacing: 5px;">TEAM SKILLS</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<h2 class="size-60">85%</h2>' +
						'\n<h3 class="size-18 default-font2">WEB DESIGN</h3>' +
						'\n<p class="size-16" style="color: rgb(136, 136, 136);">Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<h2 class="size-60">98%</h2>' +
						'\n<h3 class="size-18 default-font2">WEB DEVELOPMENT</h3>' +
						'\n<p class="size-16" style="color: rgb(136, 136, 136);">Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<h2 class="size-60">77%</h2>' +
						'\n<h3 class="size-18 default-font2">PHOTOSHOP</h3>' +
						'\n<p class="size-16" style="color: rgb(136, 136, 136);">Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<h2 class="size-60">83%</h2>' +
						'\n<h3 class="size-18 default-font2">ANIMATION</h3>' +
						'\n<p class="size-16" style="color: rgb(136, 136, 136);">Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/skills-08.png',
		    'category': '108',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-48 is-title1-48 is-title-lite">OUR FINEST SKILLS</h1>' +
						'\n<p class="size-21">We create things beautifully.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third center">' +
						'<div style="text-align: center; width: 120px; height: 120px; line-height: 120px; border-radius: 50%; border: 3px solid #333; display: inline-block;">' +
							_tabs(1) + '<p class="size-32 is-title1-32 is-title-bold" style="padding:12px;">80%</p>' +
						'\n</div>' +
						'\n<p>DESIGN</p>' +
					'</div>' +
					'<div class="column third center">' +
						'<div style="text-align: center; width: 120px; height: 120px; line-height: 120px; border-radius: 50%; border: 3px solid #333; display: inline-block;">' +
							_tabs(1) + '<p class="size-32 is-title1-32 is-title-bold" style="padding:12px;">75%</p>' +
						'\n</div>' +
						'\n<p>MARKETING</p>' +
					'</div>' +
					'<div class="column third center">' +
						'<div style="text-align: center; width: 120px; height: 120px; line-height: 120px; border-radius: 50%; border: 3px solid #333; display: inline-block;">' +
							_tabs(1) + '<p class="size-32 is-title1-32 is-title-bold" style="padding:12px;">92%</p>' +
						'\n</div>' +
						'\n<p>DEVELOPMENT</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/skills-09.png',
		    'category': '108',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-64" style="letter-spacing: 11px; font-weight: 400;">TEAM SKILLS</h1>' +
						'\n<p class="size-16">DISCOVER HOW GOOD WE ARE</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column fourth center">' +
						'<i class="icon ion-ios-heart-outline size-48" style="line-height:1"></i>' +
						'\n<p class="size-16">WEB DESIGN</p>' +
						'\n<p class="size-64 default-font1" style="font-weight: 400; line-height: 1.2">87%</p>' +
					'</div>' +
					'<div class="column fourth center">' +
						'<i class="icon ion-ios-gear-outline size-48" style="line-height:1"></i>' +
						'\n<p class="size-16">WEB DEVELOPMENT</p>' +
						'\n<p class="size-64 default-font1" style="font-weight: 400; line-height: 1.2">92%</p>' +
					'</div>' +
					'<div class="column fourth center">' +
						'<i class="icon ion-ios-camera-outline size-48" style="line-height:1"></i>' +
						'\n<p class="size-16">PHOTOGRAPHY</p>' +
						'\n<p class="size-64 default-font1" style="font-weight: 400; line-height: 1.2">77%</p>' +
					'</div>' +
					'<div class="column fourth center">' +
						'<i class="icon ion-ios-world-outline size-48" style="line-height:1"></i>' +
						'\n<p class="size-16">BRANDING</p>' +
						'\n<p class="size-64 default-font1" style="font-weight: 400; line-height: 1.2">80%</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/skills-10.png',
		    'category': '108',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-42" style="text-align: center; letter-spacing: 3px;">OUR CAPABILITIES</h1>' +
						'\n<p style="letter-spacing: 1px;">SEE WHAT WE ARE GOOD AT</p>' +
						'\n<p style="border-bottom: 2px solid #000; width: 50px; display: inline-block;"></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column center fourth">' +
						'<div style="text-align: center; width: 100px; height: 100px; line-height: 100px; border-radius: 50%; border: 3px solid #333; display: inline-block;">' +
							_tabs(1) + '<p class="size-32 is-title1-32 is-title-bold" style="padding:4px;">90%</p>' +
						'\n</div>' +
						'\n<p>WEB DESIGN</p>' +
					'</div>' +
					'<div class="column center fourth">' +
						'<div style="text-align: center; width: 100px; height: 100px; line-height: 100px; border-radius: 50%; border: 3px solid #333; display: inline-block;">' +
							_tabs(1) + '<p class="size-32 is-title1-32 is-title-bold" style="padding:4px;">78%</p>' +
						'\n</div>' +
						'\n<p>GRAPHIC DESIGN</p>' +
					'</div>' +
					'<div class="column center fourth">' +
						'<div style="text-align: center; width: 100px; height: 100px; line-height: 100px; border-radius: 50%; border: 3px solid #333; display: inline-block;">' +
							_tabs(1) + '<p class="size-32 is-title1-32 is-title-bold" style="padding:4px;">70%</p>' +
						'\n</div>' +
						'\n<p>PHOTOGRAPHY</p>' +
					'</div>' +
					'<div class="column center fourth">' +
						'<div style="text-align: center; width: 100px; height: 100px; line-height: 100px; border-radius: 50%; border: 3px solid #333; display: inline-block;">' +
							_tabs(1) + '<p class="size-32 is-title1-32 is-title-bold" style="padding:4px;">82%</p>' +
						'\n</div>' +
						'\n<p>MARKETING</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/skills-11.png',
		    'category': '108',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-48 is-title1-48 is-title-lite">TEAM <span style="color: #888888">SKILLS</span></h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<div style="padding-right:30px">' +
							_tabs(1) + '<img src="assets/minimalist-blocks/images/-sGkY41.jpg" alt="">' +
						'\n</div>' +
					'</div>' +
					'<div class="column third">' +
						'<i class="icon ion-android-favorite-outline size-32" style="color: #f37312;"></i>' +
						'\n<h3 class="size-21" style="color: #888888;letter-spacing: 1px;">GRAPHIC DESIGN</h3>' +
						'\n<p style="border-bottom: 2px solid #f37312; width: 50px; display: inline-block; margin-top:0"></p>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<i class="icon ion-code size-32" style="color: #f37312"></i>' +
						'\n<h3 class="size-21" style="color: #888888; letter-spacing: 1px;">WEB DEVELOPMENT</h3>' +
						'\n<p style="border-bottom: 2px solid #f37312; width: 50px; display: inline-block; margin-top:0"></p>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/skills-12.png',
		    'category': '108',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-42" style="text-align: center; letter-spacing: 3px;">OUR CAPABILITIES</h1>' +
						'\n<p style="letter-spacing: 1px; text-align: center;">SEE WHAT WE ARE GOOD AT</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column center third">' +
						'<i class="icon ion-ios-heart-outline size-32" style="line-height:1"></i>' +
						'\n<p class="size-64" style="line-height: 1.2">95%</p>' +
						'\n<p style="letter-spacing: 2px;">WEB DESIGN</p>' +
					'</div>' +
					'<div class="column center third">' +
						'<i class="icon ion-ios-gear-outline size-32" style="line-height:1"></i>' +
						'\n<p class="size-64" style="line-height: 1.2">90%</p>' +
						'\n<p style="letter-spacing: 2px;">WEB DEVELOPMENT</p>' +
					'</div>' +
					'<div class="column center third">' +
						'<i class="icon ion-ios-camera-outline size-32" style="line-height:1"></i>' +
						'\n<p class="size-64" style="line-height: 1.2">87%</p>' +
						'\n<p style="letter-spacing: 2px;">PHOTOGRAPHY</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/skills-13.png',
		    'category': '108',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-48 is-title1-48 is-title-lite">TEAM <span style="color: #888888">SKILLS</span></h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<i class="icon ion-ios-lightbulb-outline size-48"></i>' +
						'\n<h3 class="size-24"><b><span style="color: #bdbdbd;">90%</span></b>&nbsp; CONCEPT & IDEAS</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<i class="icon ion-ios-heart-outline size-48"></i>' +
						'<h3 class="size-24"><b><span style="color: #bdbdbd;">88%</span></b>&nbsp; WEB DESIGN</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<i class="icon ion-ios-gear-outline size-48"></i>' +
						'\n<h3 class="size-24"><b><span style="color: #bdbdbd;">85%</span></b>&nbsp; WEB DEVELOPMENT</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<i class="icon ion-ios-monitor-outline size-48"></i>' +
						'\n<h3 class="size-24"><b><span style="color: #bdbdbd;">77%</span></b>&nbsp; BRANDING</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/skills-14.png',
		    'category': '108',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-48 is-title1-48 is-title-lite">TEAM SKILLS</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<i class="icon ion-ios-lightbulb-outline size-32"></i>' +
						'\n<h3 class="size-21"><b><span style="color: #bdbdbd;">90%</span></b>&nbsp; CONCEPT IDEAS</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<i class="icon ion-ios-heart-outline size-32"></i>' +
						'\n<h3 class="size-21"><b><span style="color: #bdbdbd;">88%</span></b>&nbsp; WEB DESIGN</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<i class="icon ion-ios-compose-outline size-32"></i>' +
						'\n<h3 class="size-21"><b><span style="color: #bdbdbd;">88%</span></b>&nbsp; PHOTOGRAPHY</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/skills-15.png',
		    'category': '108',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<p class="size-48 is-title1-48 is-title-bold" style="line-height: 1.4">89%</p>' +
						'\n<h3 class="size-24" style="letter-spacing: 2px;">WEB DEVELOPMENT</h3>' +
						'\n<p>Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/-UPno91.jpg" alt="">' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/-lkx4s2.jpg" alt="">' +
					'</div>' +
					'<div class="column half">' +
						'<p class="size-48 is-title1-48 is-title-bold" style="line-height: 1.4">95%</p>' +
						'\n<h3 class="size-24" style="letter-spacing: 2px;">WEB DESIGN</h3>' +
						'\n<p>Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<p class="size-48 is-title1-48 is-title-bold" style="line-height: 1.4">79%</p>' +
						'\n<h3 class="size-24" style="letter-spacing: 2px;">GRAPHIC DESIGN</h3>' +
						'\n<p>Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/-sJf643.jpg" alt="">' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/skills-16.png',
		    'category': '108',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-42" style="letter-spacing: 3px; font-weight: bold;">OUR <span style="color: rgb(149, 149, 149);">SKILLS</span></h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<h2 class="size-48">91%</h2>' +
						'\n<h3 class="size-21">CREATIVE DESIGN</h3>' +
						'\n<p style="color: rgb(149, 149, 149);">Lorem Ipsum is dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<h2 class="size-48">85%</h2>' +
						'\n<h3 class="size-21">PROGRAMMING</h3>' +
						'\n<p style="color: rgb(149, 149, 149);">Lorem Ipsum is dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<h2 class="size-48">80%</h2>' +
						'\n<h3 class="size-21">BRANDING</h3>' +
						'\n<p style="color: rgb(149, 149, 149);">Lorem Ipsum is dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/achievements-01.png',
		    'category': '109',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-64 display-font2" style="letter-spacing: 3px;">ACHIEVEMENTS</h1>' +
						'\n<p style="color: rgb(136, 136, 136); letter-spacing: 2px;">DISCOVER HOW GOOD WE ARE</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third center">' +
						'<h1 class="size-80">97</h1>' +
						'\n<p class="size-21">PROJECTS DONE</p>' +
						'\n<p style="border-bottom: 1.5px solid #000; width: 50px; display: inline-block;"></p>' +
					'</div>' +
					'<div class="column third center">' +
						'<h1 class="size-80">200+</h1>' +
						'\n<p class="size-21">HAPPY CLIENTS</p>' +
						'\n<p style="border-bottom: 1.5px solid #000; width: 50px; display: inline-block;"></p>' +
					'</div>' +
					'<div class="column third center">' +
						'<h1 class="size-80">15</h1>' +
						'\n<p class="size-21">AWARDS WON</p>' +
						'\n<p style="border-bottom: 1.5px solid #000; width: 50px; display: inline-block;"></p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/achievements-02.png',
		    'category': '109',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p class="size-21 is-info1">Fun Facts</p>' +
						'\n<h1 class="size-48 is-title1-48 is-title-lite">WHAT MAKES US DIFFERENT</h1>' +
						'\n<p class="size-21">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<p class="size-48 is-title1-48" style="font-weight: 400; line-height: 1.3">100%</p>' +
						'\n<p>Satisfaction</p>' +
					'</div>' +
					'<div class="column third">' +
						'<p class="size-48 is-title1-48" style="font-weight: 400; line-height: 1.3">45</p>' +
						'\n<p>Awards</p>' +
					'</div>' +
					'<div class="column third">' +
						'<p class="size-48 is-title1-48" style="font-weight: 400; line-height: 1.3">312</p>' +
						'\n<p>Happy Clients</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/achievements-03.png',
		    'category': '109',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-48 is-title1-48 is-title-lite is-upper"><b>ACHIEVEMENTS /</b> WHY WE\'RE GOOD</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column fourth">' +
						'<i class="icon ion-ios-heart-outline size-48"></i>' +
						'\n<p class="size-14" style="color: rgb(136, 136, 136);">100% SATISFACTION</p>' +
						'\n<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column fourth">' +
						'<i class="icon ion-ios-people-outline size-48"></i>' +
						'\n<p class="size-14" style="color: rgb(136, 136, 136);">HAPPY CLIENTS</p>' +
						'\n<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column fourth">' +
						'<i class="icon ion-ios-compose-outline size-48"></i>' +
						'\n<p class="size-14" style="color: rgb(136, 136, 136);">PROJECTS DONE</p>' +
						'\n<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column fourth">' +
						'<i class="icon ion-ios-star-outline size-48"></i>' +
						'\n<p class="size-14" style="color: rgb(136, 136, 136);">AWARDS</p>' +
						'\n<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/achievements-04.png',
		    'category': '109',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-48 is-title1-48 is-title-bold">ACHIEVEMENTS / <span style="color: #d4d4d4;">WHY WE ARE SO AWESOME</span></h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<i class="icon ion-android-happy size-48"></i>' +
						'\n<p style="margin-top:0">Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<i class="icon ion-android-bulb size-48"></i>' +
						'\n<p style="margin-top:0">Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<i class="icon ion-android-star-outline size-48"></i>' +
						'\n<p style="margin-top:0">Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/achievements-05.png',
		    'category': '109',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-48 is-title1-48 is-title-lite">ACHIEVEMENTS</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<div class="row clearfix">' +
							'<div class="column fourth center">' +
								'<p class="size-28" style="font-weight: bold; margin-top: 0">355</p>' +
							'</div>' +
							'<div class="column two-fourth">' +
								'<h2 class="size-28">Happy Clients</h2>' +
								'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
							'</div>' +
						'</div>' +
					'</div>' +
					'<div class="column half">' +
						'<div class="row clearfix">' +
							'<div class="column fourth center">' +
								'<p class="size-28" style="font-weight: bold; margin-top: 0">70+</p>' +
							'</div>' +
							'<div class="column two-fourth">' +
								'<h2 class="size-28">Projects Done</h2>' +
								'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<div class="row clearfix">' +
							'<div class="column fourth center">' +
								'<p class="size-28" style="font-weight: bold; margin-top: 0">30</p>' +
							'</div>' +
							'<div class="column two-fourth">' +
								'<h2 class="size-28">Awards Won</h2>' +
								'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
							'</div>' +
						'</div>' +
					'</div>' +
					'<div class="column half">' +
						'<div class="row clearfix">' +
							'<div class="column fourth center">' +
								'<p class="size-28" style="font-weight: bold; margin-top: 0">19k</p>' +
							'</div>' +
							'<div class="column two-fourth">' +
								'<h2 class="size-28">Followers</h2>' +
								'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/achievements-06.png',
		    'category': '109',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-64" style="letter-spacing: 3px; font-weight: 300">ACHIEVEMENTS</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column fourth center">' +
						'<h1 class="size-64">130+</h1>' +
						'\n<p class="size-18">HAPPY CLIENTS</p>' +
					'</div>' +
					'<div class="column fourth center">' +
						'<h1 class="size-64">72</h1>' +
						'\n<p class="size-18">PROJECTS DONE</p>' +
					'</div>' +
					'<div class="column fourth center">' +
						'<h1 class="size-64">14</h1>' +
						'\n<p class="size-18">AWARDS WON</p>' +
					'</div>' +
					'<div class="column fourth center">' +
						'<h1 class="size-64">99%</h1>' +
						'\n<p class="size-18">SATISFACTION</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/achievements-08.png',
		    'category': '109',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-48 is-title1-48 is-title-bold">OUR ACHIEVEMENTS</h1>' +
						'\n<p class="size-21">Discover things that make us different.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<i class="icon ion-android-contacts size-48"></i>' +
						'\n<h1 class="size-32 is-title1-32 is-title-bold">200+</h1>' +
						'\n<p><b>HAPPY CLIENTS</b><br>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<i class="icon ion-checkmark size-48"></i>' +
						'\n<h1 class="size-32 is-title1-32 is-title-bold">85</h1>' +
						'\n<p><b>PROJECTS DONE</b><br>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/achievements-10.png',
		    'category': '109',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-32 is-title1-32 is-title-lite" style="text-align: center;">WHY WE\'RE AWESOME</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third center">' +
						'<i class="icon ion-android-people size-24" style="line-height:1"></i>' +
						'\n<h1 class="size-48 is-title1-48 is-title-bold">775</h1>' +
						'\n<p>HAPPY CLIENTS</p>' +
					'</div>' +
					'<div class="column third center">' +
						'<i class="icon ion-checkmark size-24" style="line-height:1"></i>' +
						'\n<h1 class="size-48 is-title1-48 is-title-bold">60+</h1>' +
						'\n<p>PROJECTS DONE</p>' +
					'</div>' +
					'<div class="column third center">' +
						'<i class="icon ion-trophy size-24" style="line-height:1"></i>' +
						'\n<h1 class="size-48 is-title1-48 is-title-bold">12</h1>' +
						'\n<p>AWARDS WON</p>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/achievements-11.png',
		    'category': '109',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-42" style="letter-spacing: 4px;">ACHIEVEMENTS</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column fourth">' +
						'<h1 class="size-60" style="text-align: center; font-weight: bold;">600+</h1>' +
						'\n<h3 class="size-18" style="text-align: center; letter-spacing: 1px;">HAPPY CLIENTS</h3>' +
					'</div>' +
					'<div class="column fourth">' +
						'<h1 class="size-60" style="text-align: center; font-weight: bold;">234</h1>' +
						'\n<h3 class="size-18" style="text-align: center; letter-spacing: 1px;">PROJECTS</h3>' +
					'</div>' +
					'<div class="column fourth">' +
						'<h1 class="size-60" style="text-align: center; font-weight: bold;">17</h1>' +
						'\n<h3 class="size-18" style="text-align: center; letter-spacing: 1px;">AWARDS WON</h3>' +
					'</div>' +
					'<div class="column fourth">' +
						'<h1 class="size-60" style="text-align: center; font-weight: bold;">90k+</h1>' +
						'\n<h3 class="size-18" style="text-align: center; letter-spacing: 1px;">FOLLOWERS</h3>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/achievements-12.png',
		    'category': '109',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-54"><b>FUN FACTS / </b><span style="color: rgb(143, 143, 143);">WHAT MAKES US DIFFERENT</span></h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column fourth">' +
						'<h1 class="size-54">300+</h1>' +
						'\n<h3 class="size-18" style="letter-spacing: 1px;">HAPPY CLIENTS</h3>' +
					'</div>' +
					'<div class="column fourth">' +
						'<h1 class="size-54">123</h1>' +
						'\n<h3 class="size-18" style="letter-spacing: 1px;">PROJECTS</h3>' +
					'</div>' +
					'<div class="column fourth">' +
						'<h1 class="size-54">78K+</h1>' +
						'\n<h3 class="size-18" style="letter-spacing: 1px;">SUBSCRIBERS</h3>' +
					'</div>' +
					'<div class="column fourth">' +
						'<h1 class="size-54">12</h1>' +
						'\n<h3 class="size-18" style="letter-spacing: 1px;">AWARDS WON</h3>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/achievements-13.png',
		    'category': '109',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column third center">' +
						'<h1 class="size-64" style="font-weight: bold;">200+</h1>' +
						'\n<p class="size-21" style="margin-bottom: 5px; color: rgb(149, 149, 149);">HAPPY CLIENTS</p>' +
						'\n<p style="border-bottom: 2px solid #000; width: 50px; display: inline-block;margin-top:0"></p>' +
					'</div>' +
					'<div class="column third center">' +
						'<h1 class="size-64" style="font-weight: bold;">77</h1>' +
						'\n<p class="size-21" style="margin-bottom: 5px; color: rgb(149, 149, 149);">PROJECTS DONE</p>' +
						'\n<p style="border-bottom: 2px solid #000; width: 50px; display: inline-block;margin-top:0"></p>' +
					'</div>' +
					'<div class="column third center">' +
						'<h1 class="size-64" style="font-weight: bold;">12</h1>' +
						'\n<p class="size-21" style="margin-bottom: 5px; color: rgb(149, 149, 149);">AWARDS WON</p>' +
						'\n<p style="border-bottom: 2px solid #000; width: 50px; display: inline-block;margin-top:0"></p>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/achievements-14.png',
		    'category': '109',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-48" style="letter-spacing: 5px; text-align: center;">ACHIEVEMENTS</h1>' +
						'\n<p style="text-align: center; letter-spacing: 2px;">WHAT MAKES US DIFFERENT</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third center">' +
						'<i class="icon ion-android-happy size-48" style="color: #f35b1c;"></i>' +
						'\n<h3 class="size-21" style="line-height: 1; letter-spacing: 1px;">4k+ HAPPY CLIENTS</h3>' +
						'\n<p style="border-bottom: 2px solid #f35b1c; width: 50px; display: inline-block;"></p>' +
					'</div>' +
					'<div class="column third center">' +
						'<i class="icon ion-edit size-48" style="color: #f35b1c"></i>' +
						'\n<h3 class="size-21" style="line-height: 1; letter-spacing: 1px;">98 PROJECTS DONE</h3>' +
						'\n<p style="border-bottom: 2px solid #f35b1c; width: 50px; display: inline-block;"></p>' +
					'</div>' +
					'<div class="column third center">' +
						'<i class="icon ion-trophy size-48" style="color: #f35b1c"></i>' +
						'\n<h3 class="size-21" style="line-height: 1; letter-spacing: 1px;">12 AWARDS WON</h3>' +
						'\n<p style="border-bottom: 2px solid #f35b1c; width: 50px; display: inline-block;"></p>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/achievements-15.png',
		    'category': '109',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-48 is-title1-48 is-title-lite">ACHIEVEMENTS</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<div class="row clearfix">' +
							_tabs(1) + '<div class="column fourth center">' +
								_tabs(2) + '<i class="icon ion-android-contacts size-32"></i>' +
							_tabs(1) + '</div>' +
							_tabs(1) + '<div class="column two-fourth">' +
								_tabs(2) + '<h3>Happy Clients</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column half">' +
						'<div class="row clearfix">' +
							_tabs(1) + '<div class="column fourth center">' +
								_tabs(2) + '<i class="icon ion-compose size-32"></i>' +
							_tabs(1) + '</div>' +
							_tabs(1) + '<div class="column two-fourth">' +
								_tabs(2) + '<h3>Completed Projects</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<div class="row clearfix">' +
							_tabs(1) + '<div class="column fourth center">' +
								_tabs(2) + '<i class="icon ion-trophy size-32"></i>' +
							_tabs(1) + '</div>' +
							_tabs(1) + '<div class="column two-fourth">' +
								_tabs(2) + '<h3>Awards Won</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column half">' +
						'<div class="row clearfix">' +
							_tabs(1) + '<div class="column fourth center">' +
								_tabs(2) + '<i class="icon ion-android-favorite-outline size-32"></i>' +
							_tabs(1) + '</div>' +
							_tabs(1) + '<div class="column two-fourth">' +
								_tabs(2) + '<h3>Followers</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/achievements-16.png',
		    'category': '109',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-42" style="letter-spacing: 1px;">ACHIEVEMENTS</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<div class="row clearfix">' +
							_tabs(1) + '<div class="column fourth center">' +
								_tabs(2) + '<i class="icon ion-android-contacts size-32"></i>' +
							_tabs(1) + '</div>' +
							_tabs(1) + '<div class="column two-fourth">' +
								_tabs(2) + '<h3>Happy Clients</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is simply dummy text.</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third">' +
						'<div class="row clearfix">' +
							_tabs(1) + '<div class="column fourth center">' +
								_tabs(2) + '<i class="icon ion-compose size-32"></i>' +
							_tabs(1) + '</div>' +
							_tabs(1) + '<div class="column two-fourth">' +
								_tabs(2) + '<h3>Projects Done</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is simply dummy text.</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third">' +
						'<div class="row clearfix">' +
							_tabs(1) + '<div class="column fourth center">' +
								_tabs(2) + '<i class="icon ion-android-favorite-outline size-32"></i>' +
							_tabs(1) + '</div>' +
							_tabs(1) + '<div class="column two-fourth">' +
								_tabs(2) + '<h3>Followers</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is simply dummy text.</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/achievements-17.png',
		    'category': '109',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-48" style="letter-spacing: 5px; text-align: center;">ACHIEVEMENTS</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<div class="row clearfix">' +
							_tabs(1) + '<div class="column fourth center">' +
								_tabs(2) + '<i class="icon ion-android-contacts size-32"></i>' +
							_tabs(1) + '</div>' +
							_tabs(1) + '<div class="column two-fourth">' +
								_tabs(2) + '<h3><b>400+</b></h3>' +
								_tabs(2) + '<p>Lorem Ipsum is simply dummy text.</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third">' +
						'<div class="row clearfix">' +
							_tabs(1) + '<div class="column fourth center">' +
								_tabs(2) + '<i class="icon ion-compose size-32"></i>' +
							_tabs(1) + '</div>' +
							_tabs(1) + '<div class="column two-fourth">' +
								_tabs(2) + '<h3 style="font-weight: bold;">123</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is simply dummy text.</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third">' +
						'<div class="row clearfix">' +
							_tabs(1) + '<div class="column fourth center">' +
								_tabs(2) + '<i class="icon ion-android-favorite-outline size-32"></i>' +
							_tabs(1) + '</div>' +
							_tabs(1) + '<div class="column two-fourth">' +
								_tabs(2) + '<h3 style="font-weight: bold;">90k+</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is simply dummy text.</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/achievements-18.png',
		    'category': '109',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-48" style="letter-spacing: 5px; text-align: center;">ACHIEVEMENTS</h1>' +
						'\n<p style="text-align: center; letter-spacing: 2px;">WHAT MAKES US DIFFERENT</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column fourth center">' +
						'<i class="icon ion-android-people size-24" style="margin-bottom:0"></i>' +
						'\n<h1 class="size-48 is-title1-48 is-title-bold" style="margin-top: 0">400+</h1>' +
						'\n<p>HAPPY CLIENTS</p>' +
					'</div>' +
					'<div class="column fourth center">' +
						'<i class="icon ion-android-checkbox-outline size-24" style="margin-bottom:0"></i>' +
						'\n<h1 class="size-48 is-title1-48 is-title-bold" style="margin-top: 0">234</h1>' +
						'\n<p>PROJECTS DONE</p>' +
					'</div>' +
					'<div class="column fourth center">' +
						'<i class="icon ion-trophy size-24" style="margin-bottom:0"></i>' +
						'\n<h1 class="size-48 is-title1-48 is-title-bold" style="margin-top: 0">12</h1>' +
						'\n<p>AWARDS WON</p>' +
					'</div>' +
					'<div class="column fourth center">' +
						'<i class="icon ion-android-favorite-outline size-24" style="margin-bottom:0"></i>' +
						'\n<h1 class="size-48 is-title1-48 is-title-bold" style="margin-top: 0">70k+</h1>' +
						'\n<p>FOLLOWERS</p>' +
					'</div>' +
				'</div>'
		},

        {
            'thumbnail': 'preview/quotes-24.png',
            'category': '110',
            'html':
		    	'<div class="row clearfix">' +
		    		'<div class="column full">' +
		    			'<h1 class="size-42" style="text-align: center; letter-spacing: 4px;">HAPPY CLIENTS</h1>' +
		    		'</div>' +
		    	'</div>' +
		    	'<div class="row clearfix">' +
		    		'<div class="column full">' +
		    			'<div class="spacer height-60"></div>' +
		    		'</div>' +
		    	'</div>' +
		    	'<div class="row clearfix">' +
		    		'<div class="column half center">' +
		    			'<img src="assets/minimalist-blocks/images/-F0dm51.jpg" alt="">' +
						'\n<p class="size-21" style="margin-bottom: 4px; letter-spacing: 2px;">MARY PALS</p>' +
						'\n<p style="border-bottom: 1px solid #000; width: 40px; display: inline-block; margin-top: 0"></p>' +
						'\n<p style="color: rgb(119, 119, 119);">Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column half center">' +
						'<img src="assets/minimalist-blocks/images/-x5GRp1.jpg" alt="">' +
						'\n<p class="size-21" style="margin-bottom: 4px; letter-spacing: 2px;">WILMA FINN</p>' +
						'\n<p style="border-bottom: 1px solid #000; width: 40px; display: inline-block; margin-top: 0"></p>' +
						'\n<p style="color: rgb(119, 119, 119);">Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>'
        },

		{
		    'thumbnail': 'preview/quotes-25.png',
		    'category': '110',
		    'html':
		    	'<div class="row clearfix">' +
		    		'<div class="column full">' +
		    			'<h1 class="size-28" style="text-transform: uppercase; letter-spacing: 4px; text-align: left;">TESTIMONIALS</h1>' +
						'\n<p class="size-14" style="font-style: normal; letter-spacing: 2px; text-transform: uppercase; text-align: left;">Hear the interesting stories from our customers</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/-S0R1k1.jpg" alt="">' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry. — Nelson Sand</p>' +
					'</div>' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/-QqxYJ2.jpg" alt="">' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry. — Karin Sparks</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/quotes-26.png',
		    'category': '110',
		    'html':
		    	'<div class="row clearfix">' +
		    		'<div class="column third center">' +
		    			'<img src="assets/minimalist-blocks/images/-F6TCZ1.jpg" alt="">' +
		    		'</div>' +
		    		'<div class="column two-third">' +
		    			'<div style="margin-top:10px"><i class="icon ion-quote size-24" style="color: #888888"></i></div>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
						'\n<p class="size-14" style="color: #888888;">By George Howard</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/quotes-27.png',
		    'category': '110',
		    'html':
		    	'<div class="row clearfix">' +
		    		'<div class="column third center">' +
		    			'<img src="assets/minimalist-blocks/images/-Q1XSO1.jpg" alt="" style="border-radius: 500px">' +
		    		'</div>' +
		    		'<div class="column two-third">' +
		    			'<div style="margin-top:10px"><i class="icon ion-quote size-24" style="color: #888888"></i></div>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
						'\n<p class="size-14" style="color: #888888;">By Lucas Fulmer</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/quotes-28.png',
		    'category': '110',
		    'html':
		    	'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="quote">' +
							_tabs(1) + '<i class="icon ion-quote"></i>' +
							_tabs(1) + '<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
							_tabs(1) + '<small>by Victoria Martin</small>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/quotes-29.png',
		    'category': '110',
		    'html':
		    	'<div class="row clearfix">' +
					'<div class="column half">' +
						'<div class="quote">' +
							_tabs(1) + '<i class="icon ion-quote"></i>' +
							_tabs(1) + '<p>Lorem Ipsum is dummy text of the printing and typesetting industry.</p>' +
							_tabs(1) + '<small>by Cathy Hartman</small>' +
						'\n</div>' +
					'</div>' +
					'<div class="column half">' +
						'<div class="quote">' +
							_tabs(1) + '<i class="icon ion-quote"></i>' +
							_tabs(1) + '<p>Lorem Ipsum is dummy text of the printing and typesetting industry</p>' +
							_tabs(1) + '<small>by Josh Perkins</small>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/quotes-30.png',
		    'category': '110',
		    'html':
		    	'<div class="row clearfix">' +
		    		'<div class="column full">' +
		    			'<h1 class="size-42" style="letter-spacing: 3px;">OUR HAPPY CLIENTS</h1>' +
		    		'</div>' +
		    	'</div>' +
		    	'<div class="row clearfix">' +
		    		'<div class="column full">' +
		    			'<div class="spacer height-60"></div>' +
		    		'</div>' +
		    	'</div>' +
		    	'<div class="row clearfix">' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/-akB4h1.jpg" alt="">' +
					'</div>' +
					'<div class="column half">' +
						'<div class="quote">' +
							_tabs(1) + '<i class="icon ion-quote"></i>' +
							_tabs(1) + '<p>Lorem Ipsum is dummy text of the printing and typesetting industry.</p>' +
							_tabs(1) + '<small>by Jason Butterfield</small>' +
						'\n</div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<div class="quote">' +
							_tabs(1) + '<i class="icon ion-quote"></i>' +
							_tabs(1) + '<p>Lorem Ipsum is dummy text of the printing and typesetting industry.</p>' +
							_tabs(1) + '<small>by Paula Johnson</small>' +
						'\n</div>' +
					'</div>' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/-R79NY2.jpg" alt="">' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/quotes-31.png',
		    'category': '110',
		    'html':
		    	'<div class="row clearfix">' +
		    		'<div class="column full">' +
		    			'<h1 class="size-48" style="letter-spacing: 3px;">OUR HAPPY CLIENTS</h1>' +
		    		'</div>' +
		    	'</div>' +
		    	'<div class="row clearfix">' +
		    		'<div class="column full">' +
		    			'<div class="spacer height-60"></div>' +
		    		'</div>' +
		    	'</div>' +
		    	'<div class="row clearfix">' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/-ybeSl1.jpg" alt="" style="border-radius: 500px;">' +
					'</div>' +
					'<div class="column half">' +
						'<div class="quote">' +
							_tabs(1) + '<i class="icon ion-quote"></i>' +
							_tabs(1) + '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum dolor sit amet leo ante.</p>' +
							_tabs(1) + '<small>by Amy Meyers </small>' +
						'\n</div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<div class="quote">' +
							_tabs(1) + '<i class="icon ion-quote"></i>' +
							_tabs(1) + '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum dolor sit amet leo ante.</p>' +
							_tabs(1) + '<small>by Christopher Cook </small>' +
						'\n</div>' +
					'</div>' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/-KUCDN4.jpg" alt="" style="border-radius: 500px;">' +
					'</div>' +
				'</div>'
		},


		{
		    'thumbnail': 'preview/quotes-05.png',
		    'category': '110',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-48 is-title1-48 is-title-lite">HAPPIEST CUSTOMERS</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third center">' +
						'<img src="assets/minimalist-blocks/images/watch-1663246_1920-8wuCM1.jpg" alt="">' +
						'\n<div class="spacer height-20"></div>' +
						'\n<i class="icon ion-quote size-24"></i>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
						'\n<p class="size-14">by Your Name</p>' +
					'</div>' +
					'<div class="column third center">' +
						'<img src="assets/minimalist-blocks/images/-frUlS1.jpg" alt="">' +
						'\n<div class="spacer height-20"></div>' +
						'\n<i class="icon ion-quote size-24"></i>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
						'\n<p class="size-14">by Your Name</p>' +
					'</div>' +
					'<div class="column third center">' +
						'<img src="assets/minimalist-blocks/images/-RXypm2.jpg" alt="">' +
						'\n<div class="spacer height-20"></div>' +
						'\n<i class="icon ion-quote size-24"></i>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
						'\n<p class="size-14">by Your Name</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/quotes-06.png',
		    'category': '110',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-42" style="letter-spacing: 2px;">CUSTOMER TESTIMONIALS</h1>' +
						'<p>Hear the interesting stories from our lovely customers.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half center">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);">' +
							'<div style="padding:30px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(1) + '<i class="icon ion-chatbubble-working size-48"></i>' +
								_tabs(1) + '<p>"Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s."</p>' +
								_tabs(1) + '<p class="size-14">by Your Name</p>' +
							'\n</div>' +
						'</div>' +
					'</div>' +
					'<div class="column half center">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);">' +
							'<div style="padding:30px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(1) + '<i class="icon ion-chatbubble-working size-48"></i>' +
								_tabs(1) + '<p>"Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s."</p>' +
								_tabs(1) + '<p class="size-14">by Your Name</p>' +
							'\n</div>' +
						'</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/quotes-07.png',
		    'category': '110',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-60" style="letter-spacing: 11px;">WHAT PEOPLE SAY ABOUT US</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<p>Lorem Ipsum is simply dummy text. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
						'\n<p class="size-14" style="color: rgb(136, 136, 136);">— John Smith, Web Developer</p>' +
					'</div>' +
					'<div class="column third">' +
						'<p>Lorem Ipsum is simply dummy text. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
						'\n<p class="size-14" style="color: rgb(136, 136, 136);">— Dave Clark, Designer</p>' +
					'</div>' +
					'<div class="column third">' +
						'<p>Lorem Ipsum is simply dummy text. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
						'\n<p class="size-14" style="color: rgb(136, 136, 136);">— Ellen Lage, Photographer</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/quotes-08.png',
		    'category': '110',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-48" style="letter-spacing: 8px;">CLIENTS REVIEWS</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third center">' +
						'<img src="assets/minimalist-blocks/images/noah-buscher-548633-ExLNF1.jpg" alt="" style="border-radius: 500px;">' +
						'\n<p style="color: #bdc3c7"><i class="icon ion-android-hangout size-32"></i></p>' +
						'\n<p class="size-16">Lorem Ipsum is simply dummy text of the printing industry. — Dave Smith</p>' +
					'</div>' +
					'<div class="column third center">' +
						'<img src="assets/minimalist-blocks/images/icons8-team-355990-Voloz1.jpg" alt="" style="border-radius: 500px;">' +
						'\n<p style="color: #bdc3c7"><i class="icon ion-android-hangout size-32"></i></p>' +
						'\n<p class="size-16">Lorem Ipsum is simply dummy text of the printing industry. — Clara Wang</p>' +
					'</div>' +
					'<div class="column third center">' +
						'<img src="assets/minimalist-blocks/images/pexels-photo-girl-zZWwv1.jpg" alt="" style="border-radius: 500px;">' +
						'\n<p style="color: #bdc3c7"><i class="icon ion-android-hangout size-32"></i></p>' +
						'\n<p class="size-16">Lorem Ipsum is simply dummy text of the printing industry. — Jane Doe</p>' +
					'</div>' +
				'</div>'
		},

        {
            'thumbnail': 'preview/quotes-16.png',
            'category': '110',
            'html':
		    	'<div class="row clearfix">' +
		    		'<div class="column full center">' +
		    			'<h1 class="size-48" style="letter-spacing: 5px;">CLIENT REVIEWS</h1>' +
		    		'</div>' +
		    	'</div>' +
		    	'<div class="row clearfix">' +
		    		'<div class="column full">' +
		    			'<div class="spacer height-60"></div>' +
		    		'</div>' +
		    	'</div>' +
		    	'<div class="row clearfix">' +
		    		'<div class="column center third">' +
						'<p class="size-21" style="margin-bottom:4px">JOHN WEBER</p>' +
						'\n<p style="border-bottom: 1px solid #000; width: 40px; display: inline-block; margin-top: 0"></p>' +
						'\n<p style="color: rgb(119, 119, 119);">Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column center third">' +
						'<p class="size-21" style="margin-bottom:4px">NICOLE HOLOWAY</p>' +
						'\n<p style="border-bottom: 1px solid #000; width: 40px; display: inline-block; margin-top: 0"></p>' +
						'\n<p style="color: rgb(119, 119, 119);">Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column center third">' +
						'<p class="size-21" style="margin-bottom:4px">CHRIS WILLIAMS</p>' +
						'\n<p style="border-bottom: 1px solid #000; width: 40px; display: inline-block; margin-top: 0"></p>' +
						'\n<p style="color: rgb(119, 119, 119);">Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>'
        },

		{
		    'thumbnail': 'preview/quotes-17.png',
		    'category': '110',
		    'html':
		    	'<div class="row clearfix">' +
		    		'<div class="column half">' +
		    			'<img src="assets/minimalist-blocks/images/-6PDKL1.jpg" alt="">' +
		    		'</div>' +
		    		'<div class="column half">' +
						'<h1 class="size-32" style="text-align: center; font-weight: bold;">"Incredible services and awesome customer support."</h1>' +
						'\n<div class="spacer height-80"></div>' +
						'\n<p style="text-align: center;">BY THOMAS JONE<br>Project Manager at Company Name</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/quotes-18.png',
		    'category': '110',
		    'html':
		    	'<div class="row clearfix">' +
		    		'<div class="column half">' +
						'<h1 class="size-32" style="text-align: center; font-weight: bold;">"Incredible services and awesome customer support."</h1>' +
						'\n<div class="spacer height-80"></div>' +
						'\n<p style="text-align: center;">BY MARGARET VICKREY<br>Web Developer at Company Name</p>' +
					'</div>' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/-OWu2H1.jpg" alt="">' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/quotes-19.png',
		    'category': '110',
		    'html':
		    	'<div class="row clearfix">' +
		    		'<div class="column center full">' +
		    			'<img src="assets/minimalist-blocks/images/-TK4An1.jpg" alt="" style="border-radius: 500px">' +
		    		'</div>' +
		    	'</div>' +
		    	'<div class="row clearfix">' +
		    		'<div class="column center full">' +
		    			'<div class="quote">' +
							_tabs(1) + '<i class="icon ion-quote"></i>' +
							_tabs(1) + '<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
						'\n</div>' +
						'\n<p style="color: rgb(149, 149, 149);">By Christopher Maxime</p>' +
					'</div>' +
				'</div>'
		},

		/* PARTNERS */   

		{
			'thumbnail': 'preview/partners-03.png',
			'category': '111',
			'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-48" style="letter-spacing: 5px; font-weight: 400;">OUR CLIENTS</h1>' +
						'\n<p class="size-16" style="letter-spacing: 1px; color: rgb(136, 136, 136);">We are globally trusted by the world\'s best names.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column fourth center">' +
						'<img src="assets/minimalist-blocks/images/creative.png" alt="">' +
					'</div>' +
					'<div class="column fourth center">' +
						'<img src="assets/minimalist-blocks/images/light-studio.png" alt="">' +
					'</div>' +
					'<div class="column fourth center">' +
						'<img src="assets/minimalist-blocks/images/infinitech.png" alt="">' +
					'</div>' +
					'<div class="column fourth center">' +
						'<img src="assets/minimalist-blocks/images/design-firm.png" alt="">' +
					'</div>' +
				'</div>'
		},
      
		{
		    'thumbnail': 'preview/partners-05.png',
		    'category': '111',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 style="letter-spacing: 7px;">OUR PARTNERS</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<div class="center" style="display:inline-block;width:18%">' +
							'<img src="assets/minimalist-blocks/images/sitepro.png" alt="">' +
						'</div>' +
						'<div class="center" style="display:inline-block;width:18%">' +
							'<img src="assets/minimalist-blocks/images/steady.png" alt="">' +
						'</div>' +
						'<div class="center" style="display:inline-block;width:18%">' +
							'<img src="assets/minimalist-blocks/images/creative.png" alt="">' +
						'</div>' +
						'<div class="center" style="display:inline-block;width:18%">' +
							'<img src="assets/minimalist-blocks/images/light-studio.png" alt="">' +
						'</div>' +
						'<div class="center" style="display:inline-block;width:18%">' +
							'<img src="assets/minimalist-blocks/images/infinitech.png" alt="">' +
						'</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/partners-06.png',
		    'category': '111',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-48" style="font-weight: bold; text-transform: uppercase;">Our Clients</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<div style="display:inline-block;width:18%">' +
							'<img src="assets/minimalist-blocks/images/creative.png" alt="">' +
						'</div>' +
						'<div style="display:inline-block;width:18%">' +
							'<img src="assets/minimalist-blocks/images/steady.png" alt="">' +
						'</div>' +
						'<div style="display:inline-block;width:18%">' +
							'<img src="assets/minimalist-blocks/images/light-studio.png" alt="">' +
						'</div>' +
						'<div style="display:inline-block;width:18%">' +
							'<img src="assets/minimalist-blocks/images/sitepro.png" alt="">' +
						'</div>' +
						'<div style="display:inline-block;width:18%">' +
							'<img src="assets/minimalist-blocks/images/design-firm.png" alt="">' +
						'</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/partners-01.png',
		    'category': '111',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-48 is-title1-48 is-title-lite">OUR PARTNERS</h1>' +
						'\n<p class="size-21">We are globally recognized and trusted by the world\'s best names.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column fourth">' +
						'<img src="assets/minimalist-blocks/images/creative.png" alt="">' +
					'</div>' +
					'<div class="column fourth">' +
						'<img src="assets/minimalist-blocks/images/light-studio.png" alt="">' +
					'</div>' +
					'<div class="column fourth">' +
						'<img src="assets/minimalist-blocks/images/sitepro.png" alt="">' +
					'</div>' +
					'<div class="column fourth">' +
						'<img src="assets/minimalist-blocks/images/infinitech.png" alt="">' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/asfeaturedon-01.png',
		    'category': '112',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column fourth">' +
						'<h2 class="size-24">AS FEATURED ON</h2>' +
					'</div>' +
					'<div class="column fourth center">' +
						'<img src="assets/minimalist-blocks/images/onesight.png" alt="">' +
					'</div>' +
					'<div class="column fourth center">' +
						'<img src="assets/minimalist-blocks/images/mmedia.png" alt="">' +
					'</div>' +
					'<div class="column fourth center">' +
						'<img src="assets/minimalist-blocks/images/digitalmag.png" alt="">' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/asfeaturedon-02.png',
		    'category': '112',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-48 is-title1-48 is-title-lite">As featured on</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column fourth">' +
						'<img src="assets/minimalist-blocks/images/digitalmag.png" alt="">' +
					'</div>' +
					'<div class="column fourth">' +
						'<img src="assets/minimalist-blocks/images/upclick.png" alt="">' +
					'</div>' +
					'<div class="column fourth">' +
						'<img src="assets/minimalist-blocks/images/onesight.png" alt="">' +
					'</div>' +
					'<div class="column fourth">' +
						'<img src="assets/minimalist-blocks/images/mmedia.png" alt="">' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/asfeaturedon-03.png',
		    'category': '112',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-48 is-title1-48 is-title-lite">AS FEATURED ON</h1>' +
						'\n<p class="size-21">Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third center">' +
						'<img src="assets/minimalist-blocks/images/upclick.png" alt="">' +
					'</div>' +
					'<div class="column third center">' +
						'<img src="assets/minimalist-blocks/images/mmedia.png" alt="">' +
					'</div>' +
					'<div class="column third center">' +
						'<img src="assets/minimalist-blocks/images/worldwide.png" alt="">' +
					'</div>' +
				'</div>'
		},
       
		{
		    'thumbnail': 'preview/asfeaturedon-05.png',
		    'category': '112',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-48" style="letter-spacing: 7px;">AS FEATURED ON</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column fourth center">' +
						'<img src="assets/minimalist-blocks/images/upclick.png" alt="">' +
					'</div>' +
					'<div class="column fourth center">' +
						'<img src="assets/minimalist-blocks/images/digitalmag.png" alt="">' +
					'</div>' +
					'<div class="column fourth center">' +
						'<img src="assets/minimalist-blocks/images/mmedia.png" alt="">' +
					'</div>' +
					'<div class="column fourth center">' +
						'<img src="assets/minimalist-blocks/images/bbuzz.png" alt="">' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column fourth center">' +
						'<img src="assets/minimalist-blocks/images/prosource.png" alt="">' +
					'</div>' +
					'<div class="column fourth center">' +
						'<img src="assets/minimalist-blocks/images/light-studio.png" alt="">' +
					'</div>' +
					'<div class="column fourth center">' +
						'<img src="assets/minimalist-blocks/images/nett.png" alt="">' +
					'</div>' +
					'<div class="column fourth center">' +
						'<img src="assets/minimalist-blocks/images/worldwide.png" alt="">' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/404-01.png',
		    'category': '113',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<p class="size-132" style="font-weight: bold; line-height: 1.4">404</p>' +
						'\n<h1>PAGE NOT FOUND</h1>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small edit">Back to Home</a>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/404-02.png',
		    'category': '113',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-96 is-title1-96 is-title-bold">404</h1>' +
						'\n<p class="size-24">Oops! The page you\'re looking for doesn\'t exist.<br>Click the link below to return home.</p>' +
						'\n<p><a href="#">HOMEPAGE</a></p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/404-03.png',
		    'category': '113',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<i class="icon ion-alert-circled size-64"></i>' +
						'\n<h1 class="size-48 is-title2-48 is-title-lite">Oops, page not found.</h1>' +
						'\n<p>The page you are looking for might have been removed, had its name changed, or temporarily unavailable.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small edit">Homepage</a>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/404-04.png',
		    'category': '113',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<i class="icon ion-android-sad size-64"></i>' +
						'\n<h1 class="size-48 is-title1-48 is-title-lite">Something\'s wrong here... </h1>' +
						'\n<p class="size-21">The page you requested couldn\'t be found. This could be a spelling error in the URL or a removed page.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<a href="#" class="is-btn is-btn-ghost1 is-upper is-rounded-30 is-btn-small edit">Back to Home</a>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/404-06.png',
		    'category': '113',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<img src="assets/minimalist-blocks/images/lost-2747289-ThbrT1.png" alt="">' +
						'\n<p class="size-21" style="letter-spacing: 2px;">Sorry. The page you are looking for could not be found.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<div style="margin: 25px 0">' +
							_tabs(1) + '<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small edit">Back to Home</a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/404-07.png',
		    'category': '113',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-60" style="letter-spacing: 3px; font-weight: bold">404 ERROR - PAGE NOT FOUND</h1>' +
						'\n<p class="size-21">Sorry, the page could not be found. You might be able to find what you are looking for from the homepage.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div style="margin: 10px 0">' +
							_tabs(1) + '<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small edit">Back to Home</a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/404-08.png',
		    'category': '113',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-196" style="letter-spacing: 12px; margin-bottom: 10px">404</h1>' +
						'\n<h3 class="size-32" style="letter-spacing: 8px;">PAGE NOT FOUND</h3>' +
						'\n<p class="size-21">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/404-09.png',
		    'category': '113',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-220" style="letter-spacing: 12px; margin-bottom: 0">404</h1>' +
						'\n<p>We are sorry, the page you are looking for could not be found. This could be a spelling error in the URL or a removed page.</p>' +
						'\n<div style="margin: 35px 0">' +
							_tabs(1) + '<a href="#" class="is-btn is-btn-ghost2 is-upper is-btn-small edit">Contact Us</a> &nbsp;' +
							_tabs(1) + '<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small edit">Homepage</a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/comingsoon-01.png',
		    'category': '114',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h3 class="size-32 is-title1-32 is-title-lite">STAY TUNED!</h3>' +
						'\n<h1 class="size-64 is-title1-64 is-title-bold">OUR WEBSITE IS COMING VERY SOON</h1>' +
						'\n<div class="spacer height-40"></div>' +
						'\n<div class="is-social edit">' +
							_tabs(1) + '<div class="size-21">' +
								_tabs(2) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>' +
								_tabs(2) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>' +
								_tabs(2) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/comingsoon-02.png',
		    'category': '114',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<i class="icon ion-android-bicycle size-64"></i>' +
						'\n<h1 class="size-80 is-title2-80 is-title-lite">WE ARE COMING SOON</h1>' +
						'\n<p class="size-18">Our website is under construction. We will be here with new awesome site.</p>' +
						'\n<div style="margin: 3em 0">' +
							_tabs(1) + '<a href="#" class="is-btn is-btn-ghost2 is-upper is-btn-small edit">Contact Us</a> &nbsp;' +
							_tabs(1) + '<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small edit">Notify Me</a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/comingsoon-03.png',
		    'category': '114',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<i class="icon ion-laptop size-64"></i>' +
						'\n<h1 class="size-48 is-title2-48 is-title-lite">SITE IS UNDER MAINTENANCE </h1>' +
						'\n<p class="size-24">Please check back in sometime.</p>' +
						'\n<div class="spacer height-40"></div>' +
						'\n<div class="is-social edit size-21">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/comingsoon-04.png',
		    'category': '114',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-48 is-title1-48 is-title-lite">MAINTENANCE MODE</h1>' +
						'\n<p class="size-24">Our website is under maintenance. Please comeback later.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<p class="size-64 is-title1-64 is-title-bold">90%</p>' +
						'\n<p>COMPLETED</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/comingsoon-05.png',
		    'category': '114',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-96" style="letter-spacing: 19px; margin-bottom: 10px;">COMING SOON</h1>' +
						'\n<p style="text-transform: uppercase; letter-spacing: 2px;">CHECK BACK SOON FOR THE NEW AND IMPROVED SITE</p>' +
						'\n<div class="spacer height-40"></div>' +
						'\n<div class="is-social edit size-18">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/comingsoon-06.png',
		    'category': '114',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-64" style="letter-spacing: 5px;">OUR SITE IS COMING VERY SOON</h1>' +
						'\n<p>We are currently working on something awesome. We will be here soon.</p>' +
						'\n<div class="is-social edit size-18" style="margin: 30px 0">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
						'\n</div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<a href="#" class="is-btn is-btn-ghost1 is-upper is-rounded-30 is-btn-small edit">Notify Me</a>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/comingsoon-07.png',
		    'category': '114',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="display">' +
							_tabs(1) + '<h1 class="size-80" style="letter-spacing: 4px; text-align: center; color: rgb(209, 209, 209);">COMING SOON.</h1>' +
						'\n</div>' +
						'\n<p style="text-align: center;">Our website is under construction. We will be here with new awesome site.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="center"><a href="#" class="is-btn is-btn-ghost1 is-upper">Notify Me</a></div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/comingsoon-08.png',
		    'category': '114',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<p style="border-bottom: 2px solid #b9b6b6;width: 210px;display: inline-block;"></p>' +
						'\n<h1 class="size-42" style="letter-spacing: 3px;">Sorry, our website is currently getting a face lift. Check back soon for the new awesome and improved site.</h1>' +
						'\n<p style="border-bottom: 2px solid #b9b6b6; width: 210px; display: inline-block; margin-top: 20px"></p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/faq-01.png',
		    'category': '115',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-60">FAQs</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<i class="icon ion-ios-compose-outline size-46"></i>' +
						'\n<h3 class="size-24">How do I sign up? </h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<i class="icon ion-ios-close-outline size-46"></i>' +
						'\n<h3 class="size-24">How do I cancel my order?</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<i class="icon ion-ios-color-filter-outline size-46"></i>' +
						'\n<h3 class="size-24">What is account limits?</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<i class="icon ion-ios-gear-outline size-46"></i>' +
						'\n<h3 class="size-24">How do I update my settings?</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/faq-02.png',
		    'category': '115',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-48 is-title1-48 is-title-lite">FAQs</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<h3 class="size-24">How do I create an account?</h3>' +
						'\n<p style="border-bottom: 2px solid #000; width: 40px; display: inline-block; margin-top:0"></p>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dolor sit amet.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<h3 class="size-24">How do I cancel my order?</h3>' +
						'\n<p style="border-bottom: 2px solid #000; width: 40px; display: inline-block; margin-top:0"></p>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dolor sit amet.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<h3 class="size-24">How do I close my account?</h3>' +
						'\n<p style="border-bottom: 2px solid #000; width: 40px; display: inline-block; margin-top:0"></p>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dolor sit amet.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<h3 class="size-24">How do I update my settings?</h3>' +
						'\n<p style="border-bottom: 2px solid #000; width: 40px; display: inline-block; margin-top:0"></p>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dolor sit amet.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/faq-03.png',
		    'category': '115',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-60" style="font-weight: bold;">FAQs</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h3>How do I sign up?</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h3>How do I cancel or change my order?</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h3>How do I contact customer support?</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/faq-04.png',
		    'category': '115',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-42" style="text-align: center;">Frequently Asked Questions</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<h3 class="size-21">HOW DO I CREATE AN ACCOUNT?</h3>' +
						'\n<p>Lorem Ipsum is dummy text of the printing and typesetting industry.</p>' +
						'\n<p style="border-bottom: 2px solid #e67e22; width: 45px; display: inline-block;"></p>' +
					'</div>' +
					'<div class="column third">' +
						'<h3 class="size-21">WHAT\'S ACCOUNT LIMITS?</h3>' +
						'\n<p>Lorem Ipsum is dummy text of the printing and typesetting industry.</p>' +
						'\n<p style="border-bottom: 2px solid #e67e22; width: 45px; display: inline-block;"></p>' +
					'</div>' +
					'<div class="column third">' +
						'<h3 class="size-21">HOW DO I CANCEL MY ORDER?</h3>' +
						'\n<p>Lorem Ipsum is dummy text of the printing and typesetting industry.</p>' +
						'\n<p style="border-bottom: 2px solid #e67e22; width: 45px; display: inline-block;"></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<h3 class="size-21">HOW DO I RESET MY PASSWORD?</h3>' +
						'\n<p>Lorem Ipsum is dummy text of the printing and typesetting industry.</p>' +
						'\n<p style="border-bottom: 2px solid #e67e22; width: 45px; display: inline-block;"></p>' +
					'</div>' +
					'<div class="column third">' +
						'<h3 class="size-21">HOW DO I REPORT A BUG?</h3>' +
						'\n<p>Lorem Ipsum is dummy text of the printing and typesetting industry.</p>' +
						'\n<p style="border-bottom: 2px solid #e67e22; width: 45px; display: inline-block;"></p>' +
					'</div>' +
					'<div class="column third">' +
						'<h3 class="size-21">HOW DO I CLOSE MY ACCOUNT?</h3>' +
						'\n<p>Lorem Ipsum is dummy text of the printing and typesetting industry.</p>' +
						'\n<p style="border-bottom: 2px solid #e67e22; width: 45px; display: inline-block;"></p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/faq-05.png',
		    'category': '115',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-48" style="letter-spacing: 2px;">FAQ</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<h3 class="size-21 default-font2">HOW DO I SIGN UP?</h3>' +
						'\n<p style="color: rgb(136, 136, 136);">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum dolor sit amet, consectetur elit.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<h3 class="size-21 default-font2">WHAT\'S ACCOUNT LIMIT?</h3>' +
						'\n<p style="color: rgb(136, 136, 136);">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum dolor sit amet, consectetur elit.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<h3 class="size-21 default-font2">HOW DO I CONTACT SUPPORT?</h3>' +
						'\n<p style="color: rgb(136, 136, 136);">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum dolor sit amet, consectetur elit.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<h3 class="size-21 default-font2">HOW DO I UPDATE MY SETTINGS?</h3>' +
						'\n<p style="color: rgb(136, 136, 136);">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum dolor sit amet, consectetur elit.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<h3 class="size-21 default-font2">HOW DO I REPORT AN ISSUE?</h3>' +
						'\n<p style="color: rgb(136, 136, 136);">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum dolor sit amet, consectetur elit.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<h3 class="size-21 default-font2">HOW DO I CHANGE MY ORDER?</h3>' +
						'\n<p style="color: rgb(136, 136, 136);">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum dolor sit amet, consectetur elit.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/faq-06.png',
		    'category': '115',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-48" style="letter-spacing: 2px;">FAQ</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<h3 class="size-21 default-font2">HOW DO I CREATE AN ACCOUNT? </h3>' +
						'\n<p style="color: rgb(136, 136, 136);">Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<h3 class="size-21 default-font2">HOW DO I UPDATE MY SETTINGS?</h3>' +
						'\n<p style="color: rgb(136, 136, 136);">Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<h3 class="size-21 default-font2">HOW DO I CHANGE MY PASSWORD?</h3>' +
						'\n<p style="color: rgb(136, 136, 136);">Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<h3 class="size-21 default-font2">HOW DO I CANCEL MY ORDER?</h3>' +
						'\n<p style="color: rgb(136, 136, 136);">Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<h3 class="size-21 default-font2">HOW DO I CLOSE MY ACCOUNT?</h3>' +
						'\n<p style="color: rgb(136, 136, 136);">Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<h3 class="size-21 default-font2">HOW DO I CONTACT CUSTOMER SERVICE?</h3>' +
						'\n<p style="color: rgb(136, 136, 136);">Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/contact-01.png',
		    'category': '116',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<div class="embed-responsive embed-responsive-16by9">' +
							_tabs(1) + '<iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" class="mg1" src="https://maps.google.com/maps?q=Melbourne,+Victoria,+Australia&amp;hl=en&amp;sll=-7.981898,112.626504&amp;sspn=0.009084,0.016512&amp;oq=melbourne&amp;hnear=Melbourne+Victoria,+Australia&amp;t=m&amp;z=10&amp;output=embed"></iframe>' +
						'\n</div>' +
					'</div>' +
					'<div class="column half">' +
						'<h1 class="size-32 is-title1-32 is-title-lite">FIND US HERE</h1>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
						'\n<div class="is-social edit size-18">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/contact-02.png',
		    'category': '116',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<div class="row clearfix">' +
							_tabs(1) + '<div class="column fourth center">' +
								_tabs(2) + '<h2 style="margin-top:0"><i class="icon ion-ios-alarm-outline size-64"></i></h2>' +
							_tabs(1) + '</div>' +
							_tabs(1) + '<div class="column two-fourth">' +
								_tabs(2) + '<h2 class="size-28" style="margin-top:10px">OPENING TIMES</h2>' +
								_tabs(2) + '<p>Monday – Friday: 9:00 AM – 4:30 PM<br>' +
								_tabs(2) + 'Saturday: 8:00 AM – 2:00 PM</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column half">' +
						'<div class="row clearfix">' +
							_tabs(1) + '<div class="column fourth center">' +
								_tabs(2) + '<h2 style="margin-top:0"><i class="icon ion-ios-home-outline size-64"></i></h2>' +
							_tabs(1) + '</div>' +
							_tabs(1) + '<div class="column two-fourth">' +
								_tabs(2) + '<h2 class="size-28" style="margin-top:10px">FIND US HERE</h2>' +
								_tabs(2) + '<p>123 Street Name, City.<br>State 12345.<br>' +
								_tabs(2) + 'Phone: (123) 456 7890</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},
     
		{
		    'thumbnail': 'preview/contact-04.png',
		    'category': '116',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<h3 class="size-18 is-title-lite">CONTACT US</h3>' +
						'\n<p style="border-bottom: 1px solid #333; width: 50px; display: inline-block; margin-top: 0"></p>' +
						'\n<p class="size-16">' +
							_tabs(1) + '<strong>Your Company Name</strong><br>' +
							_tabs(1) + '12345 Street Name, City.' +
							_tabs(1) + 'State 12345<br>' +
							_tabs(1) + 'P: (123) 456 7890 / 456 7891.' +
						'\n</p>' +
					'</div>' +
					'<div class="column third">' +
						'<h3 class="size-18 is-title-lite">OPENING HOURS</h3>' +
						'\n<p style="border-bottom: 1px solid #333; width: 50px; display: inline-block; margin-top: 0"></p>' +
						'\n<p class="size-16">' +
							_tabs(1) + 'Monday - Friday: 9:00 AM - 10:00 PM<br>' +
							_tabs(1) + 'Saturday: 10:00 AM - 11:00 PM' +
						'\n</p>' +
					'</div>' +
					'<div class="column third">' +
						'<h3 class="size-18 is-title-lite">STAY UPDATED</h3>' +
						'\n<p style="border-bottom: 1px solid #333; width: 50px; display: inline-block; margin-top: 0"></p>' +
						'\n<p class="size-16">' +
							_tabs(1) + 'Follow us on:<br>' +
							_tabs(1) + 'Facebook: <a href="#">Company Name</a><br>' +
							_tabs(1) + 'Twitter: <a href="#">@companyname</a>' +
						'\n</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/contact-05.png',
		    'category': '116',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<i class="icon ion-map size-64" style="color: #e74c3c"></i>' +
						'\n<p class="size-14" style="color: rgb(136, 136, 136);">OUR LOCATION</p>' +
						'\n<p>' +
							_tabs(1) + 'Your Company Name<br>' +
							_tabs(1) + '12345 Street Name, City.' +
							_tabs(1) + 'P: (123) 456 7890' +
						'\n</p>' +
					'</div>' +
					'<div class="column third">' +
						'<i class="icon ion-clock size-64" style="color: #e74c3c"></i>' +
						'\n<p class="size-14" style="color: rgb(136, 136, 136);">OPENING HOURS</p>' +
						'\n<p>' +
							_tabs(1) + 'Monday - Friday: 9:00 AM - 10:00 PM<br>' +
							_tabs(1) + 'Sat: 10:00 AM - 11:00 PM' +
						'\n</p>' +
					'</div>' +
					'<div class="column third">' +
						'<i class="icon ion-chatbox-working size-64" style="color: #e74c3c"></i>' +
						'\n<p class="size-14" style="color: rgb(136, 136, 136);">STAY UPDATED</p>' +
						'\n<p>' +
							_tabs(1) + 'Follow us on:<br>' +
							_tabs(1) + 'Facebook: <a href="#" style="color: #333">Company Name</a><br>' +
							_tabs(1) + 'Twitter: <a href="#" style="color: #333">@companyname</a>' +
						'\n</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/contact-06.png',
		    'category': '116',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<h1 class="size-42 is-title-bold"  style="margin-top:0">Do you have something to say? Contact us!</h1>' +
					'</div>' +
					'<div class="column half">' +
						'<h1 class="size-32">YOUR COMPANY NAME</h1>' +
						'\n<div class="spacer height-20"></div>' +
						'\n<p>' +
							_tabs(1) + '12345 Street Name, City.' +
							_tabs(1) + 'State 12345<br>' +
							_tabs(1) + 'P: (123) 456 7890 / 456 7891. <br>' +
							_tabs(1) + 'Email:<br><a href="#" style="color: #333">companyname@example.com</a>' +
						'\n</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/contact-07.png',
		    'category': '116',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-32">Have questions? Give us a call <span style="color: rgb(230, 126, 34);">0 123 456 78 90</span></h1>' +
						'\n<div class="spacer height-40"></div>' +
						'\n<div class="is-social edit">' +
							_tabs(1) + '<div class="size-18">' +
								_tabs(2) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>' +
								_tabs(2) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>' +
								_tabs(2) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/contact-08.png',
		    'category': '116',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<div class="display">' +
							_tabs(1) + '<h1 style="letter-spacing: 4px">GET IN TOUCH</h1>' +
						'\n</div>' +
						'\n<p>' +
							_tabs(1) + '12345 STREET NAME, CITY.' +
							_tabs(1) + 'STATE 12345<br>' +
							_tabs(1) + 'PHONE: (123) 456 7890 / 456 7891' +
						'\n</p>' +
						'\n<div class="is-social edit size-16">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/contact-09.png',
		    'category': '116',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column third center">' +
						'<i class="icon ion-ios-book-outline size-64" style="color: rgb(136, 136, 136);"></i>' +
						'\n<h6 style="letter-spacing: 2px; font-weight: normal">OUR LOCATION</h6>' +
						'\n<p>12 Street Name, City</p>' +
					'</div>' +
					'<div class="column third center">' +
						'<i class="icon ion-ios-telephone-outline size-64" style="color: rgb(136, 136, 136);"></i>' +
						'\n<h6 style="letter-spacing: 2px; font-weight: normal">CALL US</h6>' +
						'\n<p>(123) 456 7890 / 456 7891</p>' +
					'</div>' +
					'<div class="column third center">' +
						'<i class="icon ion-ios-compose-outline size-64" style="color: rgb(136, 136, 136);"></i>' +
						'\n<h6 style="letter-spacing: 2px; font-weight: normal">DROP US A LINE</h6>' +
						'\n<p><a href="mailto:#" style="color: #333">first.last@example.com</a></p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/contact-10.png',
		    'category': '116',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="embed-responsive embed-responsive-16by9">' +
							'<iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" class="mg1" src="https://maps.google.com/maps?q=Melbourne,+Victoria,+Australia&amp;hl=en&amp;sll=-7.981898,112.626504&amp;sspn=0.009084,0.016512&amp;oq=melbourne&amp;hnear=Melbourne+Victoria,+Australia&amp;t=m&amp;z=10&amp;output=embed"></iframe>' +
						'</div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-20"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<h3 class="size-18 is-title-lite">CONTACT</h3>' +
						'\n<p class="size-16"><b>Company Name</b><br>123 Street Name, City.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<h3 class="size-18 is-title-lite">OPENING HOURS</h3>' +
						'\n<p class="size-16">Monday - Friday: 8 AM - 5 PM<br>Saturday: 10 AM - 3 PM</p>' +
					'</div>' +
					'<div class="column third">' +
						'<h3 class="size-18 is-title-lite">STAY IN TOUCH</h3>' +
						'\n<p class="size-16">Instagram: <a href="#">@companyname<br>Twitter: </a><a href="#">@companyname</a></p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/contact-11.png',
		    'category': '116',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-80" style="text-align: center; letter-spacing: 4px;">Hi... Let\'s get in touch!</h1>' +
						'\n<p style="text-align: center;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
						'\n<div class="spacer height-60"></div>' +
						'\n<div class="is-social center">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-android-drafts"></i></a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/contact-12.png',
		    'category': '116',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h2 style="text-transform: uppercase; letter-spacing: 6px; text-align: center;">GET CONNECTED</h2>' +
						'\n<div class="center">' +
							_tabs(1) + '<p style="border-bottom: 2px solid #000;width: 50px;display: inline-block;margin-bottom:0"></p>' +
						'\n</div>' +
						'\n<div class="spacer height-40"></div>' +
						'\n<p style="text-align: center;">' +
							_tabs(1) + '<b>Your Company Name, Inc.</b> 12345 Street Name, City. State 12345.<br>' +
							_tabs(1) + 'P: (123) 456 7890 / 456 7891' +
						'\n</p>' +
						'\n<div class="is-social center">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-android-drafts"></i></a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/contact-18.png',
		    'category': '116',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<img src="assets/minimalist-blocks/images/-5TpV91.jpg" alt="">' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 style="letter-spacing: 4px">CONTACT US</h1>' +
						'\n<p style="letter-spacing: 1px;">' +
							_tabs(1) + '123 STREET NAME, CITY.' +
							_tabs(1) + 'STATE 12345<br>' +
							_tabs(1) + 'PHONE: (123) 456 7890' +
						'\n</p>' +
						'\n<div class="is-social edit size-16">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/contact-14.png',
		    'category': '116',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-48 is-title1-48 is-title-bold" style="letter-spacing: 2px;">DROP IN OUR OFFICE.</h1>' +
						'\n<div class="spacer height-20"></div>' +
						'\n<p><i class="icon ion-android-home size-24"></i>&nbsp; &nbsp;Company Name, Inc. 12345 Street, City. State 12345.<br><i class="icon ion-android-call size-24"></i>&nbsp; &nbsp;Phone: (123) 456 7890 / 456 7891</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/contact-15.png',
		    'category': '116',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-60" style="letter-spacing: 1px; text-align: center; font-weight: bold;">Drop us a line to get the conversation started.</h1>' +
						'\n<p style="text-align: center;">Please kindly write to us at companyname@example.com&nbsp;or call us on +123 4567 890</p>' +
						'\n<div class="center">' +
							_tabs(1) + '<p style="border-bottom: 2px solid #000;width: 70px;display: inline-block;margin-bottom:0"></p>' +
						'\n</div>' +
						'\n<div class="spacer height-80"></div>' +
						'\n<div class="is-social center">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-android-drafts"></i></a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/contact-16.png',
		    'category': '116',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-72" style="letter-spacing: 4px; text-align: center;">CONTACT US</h1>' +
						'\n<p style="text-align: center; letter-spacing: 3px; font-size: 19px !important;">(123) 456 7890</p>' +
						'\n<p style="text-align: center; color: rgb(119, 119, 119);">Monday - Friday: 8:00 AM - 5:00 PM</p>' +
						'\n<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="center">' +
							_tabs(1) + '<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small">Drop us a line</a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/contact-19.png',
		    'category': '116',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<p style="text-transform: uppercase; letter-spacing: 3px;">Talk To Us</p>' +
						'\n<h1 style="font-weight: bold;">Get in touch.</h1>' +
						'\n<div class="spacer height-80"></div>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
						'\n<div class="spacer height-20"></div>' +
						'\n<p><b>Phone:</b><br>(123) 456 7890 / 456 7891</p>' +
						'\n<div class="spacer height-40"></div>' +
						'\n<div class="size-18">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
						'\n</div>' +
					'</div>' +
					'<div class="column half">' +
						'<div class="embed-responsive embed-responsive-16by9" style="height:360px"><iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" class="mg1" src="https://maps.google.com/maps?q=Melbourne,+Victoria,+Australia&amp;hl=en&amp;sll=-7.981898,112.626504&amp;sspn=0.009084,0.016512&amp;oq=melbourne&amp;hnear=Melbourne+Victoria,+Australia&amp;t=m&amp;z=10&amp;output=embed"></iframe></div>' +
					'</div>' +
				'</div>'
		},

		/* Buttons */

		{
		    'thumbnail': 'preview/button-01.png',
		    'category': '119',
		    'html':
				'<div>' +
                    '<a href="#" class="is-btn is-btn-ghost2 is-upper">Read More</a> &nbsp;' +
                    '\n<a href="#" class="is-btn is-btn-ghost1 is-upper">Buy Now</a>' +
                '</div>'
		},

		{
		    'thumbnail': 'preview/button-02.png',
		    'category': '119',
		    'html':
				'<div>' +
                    '<a href="#" class="is-btn is-btn-ghost2 is-upper">Read More</a>' +
                '</div>' 
		},

		{
		    'thumbnail': 'preview/button-03.png',
		    'category': '119',
		    'html':
				'<div>' +
                    '<a href="#" class="is-btn is-btn-ghost1 is-upper">Buy Now</a>' +
                '</div>'
		},

		{
		    'thumbnail': 'preview/button-04.png',
		    'category': '119',
		    'html':
				'<div>' +
                    '<a href="#" class="is-btn is-btn-ghost2 is-upper is-btn-small">Read More</a> &nbsp;' +
                    '\n<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small">Buy Now</a>' +
                '</div>'
		},

		{
		    'thumbnail': 'preview/button-05.png',
		    'category': '119',
		    'html':
				'<div>' +
                    '<a href="#" class="is-btn is-btn-ghost2 is-upper is-btn-small">Buy Now</a>' +
                '</div>'
		},

		{
		    'thumbnail': 'preview/button-06.png',
		    'category': '119',
		    'html':
				'<div>' +
                    '<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small">Buy Now</a>' +
                '</div>'
		},

		{
		    'thumbnail': 'preview/button-07.png',
		    'category': '119',
		    'html':
				'<div>' +
                    '<a href="#" class="is-btn is-btn-ghost2 is-upper is-rounded-30">Read More</a> &nbsp;' +
                    '\n<a href="#" class="is-btn is-btn-ghost1 is-upper is-rounded-30">Buy Now</a>' +
                '</div>'
		},

		{
		    'thumbnail': 'preview/button-08.png',
		    'category': '119',
		    'html':
				'<div>' +
                    '<a href="#" class="is-btn is-btn-ghost2 is-upper is-rounded-30">Read More</a>' +
                '</div>'
		},

		{
		    'thumbnail': 'preview/button-09.png',
		    'category': '119',
		    'html':
				'<div>' +
                    '<a href="#" class="is-btn is-btn-ghost1 is-upper is-rounded-30">Buy Now</a>' +
                '</div>'
		},

		{
		    'thumbnail': 'preview/button-10.png',
		    'category': '119',
		    'html':
				'<div>' +
                    '<a href="#" class="is-btn is-btn-ghost2 is-upper is-rounded-30 is-btn-small">Read More</a> &nbsp;' +
                    '\n<a href="#" class="is-btn is-btn-ghost1 is-upper is-rounded-30 is-btn-small">Buy Now</a>' +
                '</div>'
		},

		{
		    'thumbnail': 'preview/button-11.png',
		    'category': '119',
		    'html':
				'<div>' +
                    '<a href="#" class="is-btn is-btn-ghost2 is-upper is-rounded-30 is-btn-small">Read More</a>' +
                '</div>'
		},

		{
		    'thumbnail': 'preview/button-12.png',
		    'category': '119',
		    'html':
				'<div>' +
                    '<a href="#" class="is-btn is-btn-ghost1 is-upper is-rounded-30 is-btn-small">Buy Now</a>' +
                '</div>'
		},


        /*

        // Custom Module Example (with simple initial content)
        {
        'thumbnail': 'preview/element-code.png',
        'category': '120',
        'html':
			    '<div class="row clearfix">' +
                    '<div class="column full" data-noedit data-module="my-custom-module" data-module-desc="My Module" data-html="' + // module file will be: assets/modules/my-custom-module.html
                        // Default HTML
                        encodeURIComponent('<h2>My Custom Module</h2>') +
                        '" data-settings="">' +
		            '</div>' +
			    '</div>'
        },

        // Custom Module Example (with initial content, script and settings)
        {
		'thumbnail': 'preview/element-code.png',
		'category': '120',
		'html':
			    '<div class="row clearfix">' +
                    '<div class="column full" data-noedit data-module="my-custom-module" data-module-desc="My Module" data-html="' + // module file will be: assets/modules/my-custom-module.html
                        // Default HTML
                        encodeURIComponent('<h2>My Custom Module - Id: <span id="{id}">{id}</span></h2>' +
                            '<p>' +
                                'This is an example of a custom module.' +
                            '</p>' +
                        '' +
                        '<scr' + 'ipt>' +
                            'var docReady = function (fn) {' +
                                'var stateCheck = setInterval(function () {' +
                                    'if (document.readyState !== "complete") return;' +
                                    'clearInterval(stateCheck);' +
                                    'try { fn() } catch (e) { }' +
                                '}, 1);' +
                            '};' +
                            'docReady(function () {' +
                                'jQuery("#{id}").css("color","red");' +
                            '});' +
                        '</scr' + 'ipt>' +
                        '') +

                        '" data-settings="' +
                        // Default Settings
                        encodeURIComponent('[' +
                                '{' +
                                    '"variable1": true,' +
                                    '"variable2":"Hello World"' +
                                '}]') + '"' +

                    '>' +

		            '</div>' +
			    '</div>'
        },
        */


        /* EXTRA BLOCKS */

        /* ARTICLE */

        {
        'thumbnail': 'preview/article-64.png',
        'category': '118',
        'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h2>Say Yes to New Adventures</h2>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p><i style="color: rgb(136, 136, 136);">"Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.."  — James Chapman </i></p>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus.</p>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor amet, consectetur adipiscing elit. Vivamus leo ante, consectetur amet vulputate vel, dapibus sit amet lectus. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column sixth">' +
						'<p><img src="assets/minimalist-blocks/images/-1zYls1.jpg" alt="" style="border-radius: 500px; margin-top: 5px;"></p>' +
					'</div>' +
					'<div class="column two-sixth">' +
						'<p><b>Brian Fort</b><br>A California-based travel writer, lover of food, oceans, and nature.</p>' +
						'\n<div class="is-social">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
},

		{
		    'thumbnail': 'preview/article-65.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h2><b>Everything is Good</b></h2>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>' +
						'\n<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
						'\n<p style="text-align: justify;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Vivamus ante.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/article-66.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h2>One Call Away</h2>' +
						'\n<p class="size-16 font-default2" style="color: rgb(136, 136, 136);line-height:2;margin-top:20px"><i>"Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br>Vivamus leo ante, consectetur sit amet vulputate vel."</i><br></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus. Lorem ipsum is dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. Lorem ipsum dolor sit amet. Vivamus leo ante.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. Lorem ipsum dolor sit amet. Vivamus leo ante.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/article-69.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<div class="padding-20">' +
							_tabs(1) + '<h2>Having a Fun Me Time in Sunday</h2>' +
							_tabs(1) + '<br>' +
							_tabs(1) + '<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus. Lorem ipsum dolor sit amet. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
						'\n</div>' +
					'</div>' +
					'<div class="column half">' +
						'<div class="padding-20">' +
							_tabs(1) + '<p style="text-align: justify; color: rgb(136, 136, 136);"><i style="color: rgb(136, 136, 136);">"Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s."</i></p>' +
							_tabs(1) + '<p style="text-align: justify;"><br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante consectetur.</p>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/article-74.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h2 class="size-42">Every Moment</h2>' +
						'\n<p class="size-14" style="text-transform: uppercase; letter-spacing: 2px;">Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/article-75.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h2 class="size-42">No rush</h2>' +
						'\n<p style="border-bottom: 2px solid #e47f3b; width: 50px; display: inline-block; margin-top: 0px;"></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Vivamus leo ante, consectetur amet vulputate vel, dapibus amet. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dolor sit amet, consectetur adipiscing elit vivamus.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Vivamus leo ante, consectetur amet vulputate vel, dapibus amet. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dolor sit amet, consectetur adipiscing elit vimamus.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/article-77.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h2 class="size-38" style="line-height: 1.5;">Say Goodbye to Complexity, Hello Minimalism.</h2>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Vimamus leo ante.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/article-79.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: center;"><i>words for you</i></p>' +
						'\n<h2 class="size-32" style="text-align: center;line-height:1.3">from dream to reality</h2>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus.</p>' +
						'\n<p style="text-align: justify;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus.</p>' +
						'\n<p style="text-align: justify;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/article-80.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h2 class="size-32 is-title5-32 is-title-lite" style="width: 100%; max-width: 430px;">Letting go of the things that make you unhappy.</h2>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus.</p>' +
						'\n<p style="text-align: justify;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<p style="text-align: justify;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. Consectetur sit amet vulvat.</p>' +
						'\n<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Vivamus leo ante, consectetur sit amet.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/article-81.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<p style="border-bottom: 2px solid #b9b6b6;width: 210px;display: inline-block;"></p>' +
						'\n<h2 class="size-32">SWEETNESS IN EVERY BITE</h2>' +
						'\n<p style="border-bottom: 2px solid #b9b6b6; width: 210px; display: inline-block; margin-top: 20px"></p>' +
						'\n<p class="size-16"><i>Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</i></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante.</p>' +
						'\n<p style="text-align: justify;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>' +
						'\n<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/article-82.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<p class="size-14" style="letter-spacing: 2px;">WORDS FOR YOU</p>' +
						'\n<h2 class="size-35">Her Eyes Tell the Story</h2>' +
						'\n<p class="size-14"><i>Lorem Ipsum Dolor Sit Amet</i></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus.</p>' +
						'\n<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/article-83.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full right">' +
						'<h2 class="size-32 is-title4-32 is-title-lite" style="display: inline-block;">Affection.</h2>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: justify;"><b>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Vivamus leo ante, consectetur sit amet.</b></p>' +
						'\n<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>' +
						'\n<p style="text-align: justify;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
						'\n<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/article-85.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<div style="width: 100%; max-width: 420px; margin: 0 auto">' +
							'<h2 class="size-32">A personal expression</h2>' +
							'\n<p class="size-16"><i style="color: rgb(136, 136, 136);">"Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s."</i></p>' +
						'</div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet.</p>' +
						'\n<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet.</p>' +
						'\n<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/article-86.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h2 class="size-32 is-title3-32 is-title-lite" style="text-align: center;">Black & White</h2>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
						'\n<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus.</p>' +
						'\n<p style="text-align: justify;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/article-87.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h2 style="text-align: center;">It\'s time for having fun</h2>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus. Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p class="size-21"><i>"Lorem Ipsum is simply dummy text of the printing and typesetting industry."</i></p>' +
						'\n<p style="border-bottom: 2px solid #f57213;width: 130px;display: inline-block;margin-top: 5px;"></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: justify;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/article-92.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h2 class="size-46">In a Dream</h2>' +
						'\n<div style=" border-bottom: #000 1px solid;margin-top: 15px">' +
							_tabs(1) + '<p style="text-transform: uppercase; letter-spacing: 2px;">It\'s like I\'m living in a dream that I never want to wake up from</p>' +
						'\n</div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/article-95.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h2 class="size-35" style="text-align: center; letter-spacing: 2px;">Fall in Love with Nature</h2>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus. Lorem Ipsum is simply dummy text.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus. Lorem Ipsum is simply dummy text.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<p class="size-16"><i style="color: rgb(136, 136, 136);">Lorem Ipsum is dummy text of the printing industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</i></p>' +
						'\n<p style="border-bottom: 2.5px solid #e74c3c; width: 60px; display: inline-block; margin-top: 0"></p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/article-96.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h2 class="size-35" style="text-align: center;">Red & Green</h2>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div style="border-top: #000 1px solid; border-bottom: #000 1px solid;">' +
							_tabs(1) + '<p><i>"Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."</i></p>' +
						'\n</div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus.</p>' +
						'\n<p style="text-align: justify;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Vivamus leo ante consectetur sit.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/article-97.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h2 class="size-35" style="text-align: right; font-style: normal;"><b style="font-style: normal; letter-spacing: 1px;">a<br>thought</b></h2>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: justify;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus.</p>' +
						'\n<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet.</p>' +
						'\n<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/article-98.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h2 class="size-32" style="text-align: center;">Simply Beautiful</h2>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p class="size-16" style="text-align: center; letter-spacing: 3px;">( MINIMAL STYLE )</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel.</p>' +
						'\n<p style="text-align: justify;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel.</p>' +
						'\n<p style="text-align: justify;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/article-100.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h2 class="size-35" style="text-align: center; letter-spacing: 6px;">EXCITEMENT</h2>' +
						'\n<br>' +
						'\n<p class="size-16" style="text-align: center; letter-spacing: 1px;">FOR ADVENTURERS</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: center; color: rgb(136, 136, 136);">Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ante.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ante.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/article-101.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p class="size-16" style="text-align: right; letter-spacing: 2px;">FOR MY LOVED ONES</p>' +
						'\n<h2 class="size-35" style="text-align: right; letter-spacing: 2px;">Sweet Memories of November</h2>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: justify; font-style: italic;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel.</p>' +
						'\n<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/article-102.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h2 style="text-align: center;">A Moment With You</h2>' +
						'\n<p style="border-bottom: 2px solid #000; width: 80px; display: inline-block;"></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus.</p>' +
						'\n<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: center; font-style: italic; color: rgb(136, 136, 136);">Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/article-103.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<div style="width:100%;max-width: 420px;margin: 0 auto">' +
							_tabs(1) + '<h2 class="size-32 is-title5-32 is-title-lite">Story of the day</h2>' +
							_tabs(1) + '<p><i>"Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s"</i></p>' +
						'\n</div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. Vivamus leo ante. Lorem ipsum dolor sit amet.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. Vivamus leo ante. Lorem ipsum dolor sit amet.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/article-104.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<p style="border-top: 2px solid #000; margin-top: 20px"></p>' +
						'\n<h2 class="size-32" style="letter-spacing: 3px;">A calm and beautiful day</h2>' +
					'</div>' +
					'<div class="column two-third">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus.</p>' +
						'\n<p style="text-align: justify;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus.</p>' +
						'\n<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus.</p>' +
						'\n<p style="text-align: justify;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/article-110.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full right">' +
						'<p style="border-bottom: 1px solid #000;  width: 138px; display: inline-block;margin-bottom: 0;"></p>' +
						'\n<p class="size-16" style="letter-spacing: 1px; margin-top: 0;">WORDS FOR YOU</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h2 class="size-38">A Lovely Morning</h2>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet.</p>' +
						'\n<p style="text-align: justify;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. Vivamus leo ante, consectetur sit amet vulputate vel.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet.</p>' +
						'\n<p style="text-align: justify;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. Vivamus leo ante, consectetur sit amet vulputate vel.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/article-112.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h2>— create your own sunshine</h2>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel.</p>' +
						'\n<p style="text-align: justify;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Vivamus leo ante, consectetur sit amet lectus.</p>' +
						'\n<p style="text-align: justify;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: right;"><i style="color: rgb(136, 136, 136);">Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</i></p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/article-113.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h2 class="size-32" style="text-align: right;">Inseparable Part</h2>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus.</p>' +
						'\n<p style="text-align: justify;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus. Lorem Ipsum is dummy text of printing industry.</p>' +
						'\n<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. Lorem ipsum dolor sit amet vivamus ante.</p>' +
						'\n<br>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full right">' +
						'<p style="border-bottom: 2px solid rgb(0, 0, 0); width: 150px; display: inline-block;"></p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/article-116.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h2 class="size-32" style="font-style: italic;">Sunday Happy Day</h2>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<p style="text-align: left; letter-spacing: 2px;">A STORY TO TELL</p>' +
					'</div>' +
					'<div class="column half">' +
						'<p style="text-align: right; color: rgb(136, 136, 136);"><i style="color: rgb(136, 136, 136);">By Leona Smith</i></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet.</p>' +
						'\n<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/article-117.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p class="size-16" style="text-transform: uppercase; letter-spacing: 3px;">SOMETHING TO SHARE</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h2 class="size-35">In California</h2>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the and typesetting printing industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus.</p>' +
						'\n<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the and typesetting printing industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the and typesetting printing industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus.</p>' +
						'\n<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the and typesetting printing industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/article-118.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h2 style="text-align: left; letter-spacing: 3px;">Rest</h2>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="width: 100%; max-width: 500px;  margin: 0px auto; text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate.</p>' +
						'\n<br>' +
						'\n<p style="width: 100%; max-width: 500px; margin: 0px auto; text-align: justify;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p><i style="color: rgb(140, 140, 140);">Lorem Ipsum is simply dummy text of the printing industry. — Jane Doe</i></p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/article-119.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h2 class="size-35" style="text-align: center; letter-spacing: 1px;">LOOKING FORWARD TO THE<br>DAY WE MEET AGAIN</h2>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<p class="size-16" style="letter-spacing: 4px;">THINGS TO SHARE</p>' +
						'\n<p style="border-top: 2px solid #000; width: 60px; display: inline-block; margin-top: 0"></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus. Lorem ipsum is simply dummy text.</p>' +
						'\n<p style="text-align: justify;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus.</p>' +
						'\n<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. Vivamus leo ante, consectetur sit amet vulputate vel.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/article-120.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h2>Make every day amazing</h2>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-transform: uppercase; letter-spacing: 2px;">A TRULY SIMPLE PLEASURE</p>' +
						'\n<p style="border-top: 2px solid #000; width: 60px; display: inline-block; margin-top: 0"></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="font-style: italic; color: rgb(136, 136, 136);">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/article-121.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<p class="size-14"><i style="color: rgb(136, 136, 136);">Words for You</i></p>' +
						'\n<h2 class="size-38">Take Your Time</h2>' +
						'\n<p style="border-top: 1px solid #000; width: 60px; display: inline-block; margin-top: 20px"></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
						'\n<p style="text-align: justify;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus.</p><p class="size-16" style="text-align: justify;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus. Lorem ipsum dolor sit amet. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/article-123.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p class="size-12" style="color: rgb(136, 136, 136); letter-spacing: 2px; text-transform: uppercase;">STORY TO SHARE</p>' +
						'\n<h2 class="size-35" style="letter-spacing: 2px;">The Apple of My Eye</h2>' +
						'\n<p style="text-align: justify; font-style: normal;">Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus. Lorem Ipsum is simply dummy text of the printing industry.</p>' +
						'\n<p style="text-align: justify;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo, consectetur vulputate. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus. Lorem Ipsum is simply dummy text of the printing industry.</p>' +
						'\n<p style="text-align: justify;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo, consectetur vulputate. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/article-124.png',
		    'category': '118',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h2 style="letter-spacing: 2px; font-style: italic;">With You</h2>' +
						'\n<p style="border-top: 2px solid #000; width: 60px; display: inline-block; margin-top: 15px"></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus.</p>' +
						'\n<p style="text-align: justify;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus.</p>' +
					'</div>' +
				'</div>'
		},

		/* HEADLINE */

        {
        'thumbnail': 'preview/header-64.png',
        'category': '101',
        'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-64">Plan better. Build better.</h1>' +
						'\n<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<a href="#" class="is-btn is-btn-ghost1 is-upper edit">Get A Quote</a>' +
					'</div>' +
				'</div>'
    },

		{
		    'thumbnail': 'preview/header-65.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<div class="display">' +
							_tabs(1) + '<h1 class="size-76" style="text-transform: none">We Love Simplicity.</h1>' +
							_tabs(1) + '<p>Feeling good at home</p>' +
						'\n</div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small">Browse Products</a>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/header-66.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="display">' +
							'<h1 style="text-align: right;">A New Point of View</h1>' +
							'\n<p style="text-align: right;">Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
						'</div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="right"><a href="#" class="is-btn is-btn-ghost1 is-upper is-rounded-30 is-btn-small edit">Contact Us</a></div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/header-67.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-64">Mark\'s Photo Studio</h1>' +
						'\n<p style="font-weight: 300">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small edit">Read More</a>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/header-68.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="display">' +
							_tabs(1) + '<h1>It suits you perfectly</h1>' +
						'\n</div>' +
						'\n<p style="text-transform:uppercase">Lorem Ipsum is dummy text of the printing and typesetting industry</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small edit">View Gallery</a>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/header-69.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="display">' +
							_tabs(1) + '<h1 style="text-align: right;">Your Business Partner</h1>' +
							_tabs(1) + '<p style="text-align: right;">Lorem Ipsum is simply dummy text</p>' +
						'\n</div>' +
						'\n<p style="text-align: right;">Lorem Ipsum is dummy text of the printing industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="right"><a href="#" class="is-btn is-btn-ghost1 is-upper edit">Contact Us</a></div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/header-70.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-64 is-title1-64 is-title-lite">We not only design things. We design dreams.</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small">Our Portfolio</a>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/header-71.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<div class="display">' +
							_tabs(1) + '<h1 class="size-50">Must-have Collection You Will Love</h1>' +
						'\n</div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small">New Arrivals</a>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/header-72.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<div class="display">' +
							'<h1 class="size-72">Simple, Smart, and Intuitive</h1>' +
						'</div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<a href="#" class="is-btn is-btn-ghost1 is-upper">Contact Us</a>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/header-73.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-80" style="text-align: center; text-transform: uppercase; letter-spacing: 5px;">Journey to Paradise</h1>' +
						'\n<p style="text-align: center;">Lorem Ipsum is simply dummy text of the printing industry</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/header-74.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<p class="size-21" style="letter-spacing: 1px;">LOREM IPSUM IS DUMMY TEXT</p>' +
						'\n<h1 class="size-84" style="letter-spacing: 1px; font-weight: bold">Breathtaking</h1>' +
					'</div>' +
					'<div class="column full">' +
						'<div class="spacer height-20"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="center"><a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small">View Gallery</a></div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/header-75.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<p class="size-21" style="letter-spacing: 5px;">SIMPLY BEAUTIFUL</p>' +
						'\n<p style="border-bottom: 2px solid #000; width: 60px; display: inline-block; margin-top: 0"></p>' +
						'\n<h1 class="size-54" style="letter-spacing: 2px;">With Less Stuff and More Compassion</h1>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/header-76.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="display">' +
							_tabs(1) + '<h1 class="size-72" style="letter-spacing: 4px;line-height:1.3">FASHION <span style="color: rgb(209, 78, 0);">MADE</span> SIMPLE.</h1>' +
						'\n</div>' +
						'\n<div class="spacer height-40"></div>' +
						'\n<div><a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small">View Collection</a></div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/header-77.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="letter-spacing: 2px; margin-bottom:0">LESS, BUT BETTER</p>' +
						'\n<h1 class="size-68">Nothing Left to Take Away</h1><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dolor sit amet vivamus ante.</p>' +
						'\n<div class="spacer height-40"></div>' +
						'\n<div>' +
							_tabs(1) + '<a href="#" class="is-btn is-btn-ghost2 is-upper is-rounded-30 is-btn-small">Works</a> &nbsp;' +
							_tabs(1) + '<a href="#" class="is-btn is-btn-ghost1 is-upper is-rounded-30 is-btn-small">Talk to Us</a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/header-78.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-54" style="text-align: center; font-weight: bold; letter-spacing: 1px;">A style that never gets old...</h1>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/header-79.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: center; text-transform: uppercase; letter-spacing: 1px;">Inspirational Collection Of</p>' +
						'\n<h1 class="size-68" style="text-align: center; letter-spacing: 3px; font-style: normal; font-weight: bold;">CREATIVE DESIGNS</h1>' +
						'\n<p style="text-align: center;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. Lorem Ipsum dolor sit amet.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="center"><a href="#" class="is-btn is-btn-ghost1 is-upper is-rounded-30 is-btn-small">View Collection</a></div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/header-80.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-64 is-title1-64 is-title-lite">TIME TO CREATE</h1>' +
						'\n<p style="border-bottom: 2.5px solid #e74c3c; width: 80px; display: inline-block; margin-top: 0"></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="center"><a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small">Get Started</a></div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/header-81.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="display">' +
							_tabs(1) + '<h1 class="size-104" style="text-align: left; color: rgb(204, 204, 204); letter-spacing: 2px;">A perfect taste.</h1>' +
						'\n</div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-20"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="center" style="text-align: left;"><a href="#" class="is-btn is-btn-ghost1 is-upper is-rounded-30">Visit Us</a></div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/header-82.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full right">' +
						'<div class="display">' +
							_tabs(1) + '<h1 class="size-60">Simplest & Truest</h1>' +
						'\n</div>' +
						'\n<p style="border-bottom: 3px solid #333; width: 80px; display: inline-block;"></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: right;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="right"><a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small">Contact Us</a></div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/header-83.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-64 is-title5-64 is-title-bold">Clearance.</h1>' +
						'\n<p class="size-16" style="text-transform: uppercase; letter-spacing: 4px;">Lorem Ipsum is simply dummy text of the printing industry</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div><a href="#" class="is-btn is-btn-ghost1 is-btn-small is-upper">Contact Us</a></div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/header-84.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 style="color: rgb(198, 198, 198); text-align: center;font-weight:bold" class="size-64">Go explore.</h1>' +
						'\n<p style="text-align: center; font-style: italic;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="center"><a href="#" class="is-btn is-btn-ghost1 is-upper is-rounded-30 is-btn-small">Get Started</a></div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/header-85.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-38" style="letter-spacing: 3px;">EXPERIENCE THE WONDERS OF NATURE</h1>' +
						'\n<p class="size-16" style="letter-spacing: 4px;">THINGS TO SHARE</p>' +
						'\n<p style="border-top: 2px solid #000; width: 50px; display: inline-block; margin-top: 0"></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div><a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small">Get A Quote</a></div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/header-86.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p class="size-16" style="text-transform: uppercase; letter-spacing: 4px;">BRIGHTEN UP YOUR DAY</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-120"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-72" style="letter-spacing: 4px;">UPLIFTING</h1>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div><a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small">View Portfolio</a></div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/header-87.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p class="size-16" style="text-align: center; letter-spacing: 2px;">A NEW COLLECTION</p>' +
						'\n<h1 class="size-84" style="text-align: center; letter-spacing: 4px;">STAY CHIC</h1>' +
						'\n<p style="text-align: center; text-transform: uppercase; letter-spacing: 5px;">BY JENN</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/header-88.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<p style="border-bottom: 2px solid #b9b6b6;width: 210px;display: inline-block;"></p>' +
						'\n<h1 class="size-38">All Things Grow With Love</h1>' +
						'\n<p style="border-bottom: 2px solid #b9b6b6; width: 210px; display: inline-block; margin-top: 20px"></p>' +
						'\n<p class="size-16"><i>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</i></p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/header-89.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="border-top: 2px solid #000; margin-top: 20px"></p>' +
						'\n<h1 class="size-42" style="letter-spacing: 1px;">What\'s New, What\'s Next</h1>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div><a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small">Contact Us</a></div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/header-90.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<h1 class="size-50 is-title-bold" style="margin-top:0">Jane\'s Photo Studio</h1>' +
					'</div>' +
					'<div class="column half">' +
						'<p>Award-winning studio based in Australia. Creating beautiful images & happy clients. Our photography is all about beauty, emotion & fun!</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/header-91.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-68" style="text-align: center; letter-spacing: 4px;">Your Trusted Partner</h1>' +
						'\n<p style="text-align: center;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
						'\n<div class="spacer height-20"></div>' +
						'\n<div class="is-social center">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-android-drafts"></i></a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/header-92.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-48" style="letter-spacing: 1px;font-weight: bold;">Think without boundaries.</h1>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
						'\n<p style="border-bottom: 2px solid #000;width: 70px;display: inline-block;margin-bottom:0"></p>' +
						'\n<div class="spacer height-80"></div>' +
						'\n<div class="is-social">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-android-drafts"></i></a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/header-93.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-50 is-title-bold"><span style="color: rgb(204, 204, 204);">A HOME </span>FOR READERS</h1>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dolor sit amet.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div><a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small">Browse Products</a></div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/header-94.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-60" style="letter-spacing: 20px; line-height: 1.7; font-weight: bold; text-align: center;">A NEW WAY TO TRAVEL</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-20"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="center"><a href="#" class="is-btn is-btn-ghost1 is-upper">Find Destination</a></div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/header-95.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-72" style="letter-spacing: 5px;">Together, <span style="color: rgb(136, 136, 136);">Let\'s Grow.</span></h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div><a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small">Contact Us</a></div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/header-96.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-46" style="letter-spacing: 3px;">Hello. I\'m Marie Johnson, web designer with experience in studios and startups.&nbsp;<span style="color: rgb(230, 126, 34);">Drop me a line :)</span></h1>' +
						'\n<div class="spacer height-60"></div>' +
						'\n<div class="is-social edit size-18">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/header-97.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full" style="text-align: right;">' +
						'<h1 class="size-64" style="letter-spacing: 6px;"><span style="color: rgb(136, 136, 136);">CLEAN AND</span> EFFECTIVE.</h1>' +
						'\n<p style="text-transform: uppercase; letter-spacing: 4px; text-align: right;">Lorem Ipsum is simply dummy text</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-20"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="right"><a href="#" class="is-btn is-btn-ghost1 is-upper">Get a Quote</a></div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/header-98.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h2 class="size-24" style="letter-spacing: 4px;">— SIMPLIFY THINGS</h2>' +
						'\n<h1 class="size-80" style="font-weight: bold;">All is Possible</h1>' +
						'\n<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div><a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small">View Our Works</a></div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/header-99.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: center; letter-spacing: 3px; font-weight: bold; color: rgb(149, 149, 149);">LET\'S SEE THE WORLD</p>' +
						'\n<h1 class="size-60" style="letter-spacing: 15px; line-height: 1.6; font-weight: bold; text-align: center;">IN DIFFERENT PERSPECTIVE</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="center"><a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small">Contact Us</a></div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/header-100.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-48 is-title3-48 is-title-lite" style="text-align: center;">CLASSY & EYE-CATCHING</h1>' +
						'\n<p style="text-align: center;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-100"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="center"><a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small">View Gallery</a></div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/header-101.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<i class="icon ion-leaf size-64"></i>' +
						'\n<h3 class="size-21" style="letter-spacing: 3px;">FAMILY RESTAURANT</h3>' +
						'\n<div class="display">' +
							_tabs(1) + '<h1 class="size-68">Paradise on Your Plate</h1>' +
						'\n</div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="center"><a href="#" class="is-btn is-btn-ghost1 is-upper">Book A Table</a></div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/header-102.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-64 is-title-bold" style="line-height: 1.6; text-align: right;">Try it.<br>Feel it.</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-160"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: right;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="is-social edit size-18 right">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/header-103.png',
		    'category': '101',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: center; text-transform: uppercase; letter-spacing: 2px;">WE DELIVER AWESOME THINGS</p>' +
						'\n<div class="display">' +
							_tabs(1) + '<h1 style="text-align: center;" class="size-64">Stay Inspired, Stay simple.</h1>' +
						'\n</div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<div class="clearfix is-rounded-button-medium">' +
							_tabs(1) + '<a href="https://twitter.com/" style="background-color: #00bfff"><i class="icon ion-social-twitter"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/" style="background-color: #128BDB"><i class="icon ion-social-facebook"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com" style="background-color: #ff69B4;"><i class="icon ion-ios-email-outline"></i></a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		/* PHOTOS*/

        {
        'thumbnail': 'preview/photos-31.png',
        'category': '102',
        'html':
				'<div class="row clearfix">' +
					'<div class="column full right">' +
						'<img src="assets/minimalist-blocks/images/marion-michele-330691-unsplash-JK1am1.jpg" alt="">' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-20"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h3 class="size-21" style="font-style: normal; letter-spacing: 2px; text-align: right;">Image Caption</h3>' +
						'\n<p style="text-align: right; font-style: italic;">Lorem Ipsum is dummy text of the printing industry</p>' +
					'</div>' +
				'</div>'
    },

		{
		    'thumbnail': 'preview/photos-32.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<h3 style="letter-spacing: 3px;">Going nowhere but up.</h3>' +
						'\n<p class="size-14" style="letter-spacing: 6px; text-transform: uppercase;">By John smith</p>' +
					'</div>' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/oliver-cole-1209286-unsplash-yVxpf1.jpg" alt="">' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/photos-33.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/apple-delicious-food-1630588-R3PuO2.jpg" alt="">' +
					'</div>' +
					'<div class="column half">' +
						'<h3 style="letter-spacing: 3px; font-style: normal;">Calm, Pure, Lovely</h3>' +
						'\n<p class="size-14" style="letter-spacing: 6px; text-transform: uppercase;">By Jane Doe</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/photos-34.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/alex-loup-440761-unsplash-EQFwr1.jpg" alt="">' +
					'</div>' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/lindie-wilton-1183199-unsplash-5Z4Yl2.jpg" alt="">' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-20"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h3 class="size-28" style="text-transform: uppercase; letter-spacing: 4px;">Image Caption</h3>' +
						'\n<p class="size-14" style="font-style: normal; letter-spacing: 3px; text-transform: uppercase;">Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>'
		},

        {
            'thumbnail': 'preview/photos-42.png',
            'category': '102',
            'html':
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<img src="assets/minimalist-blocks/images/-M35SZ1.jpg" alt="">' +
					'</div>' +
					'<div class="column third">' +
						'<img src="assets/minimalist-blocks/images/-JW6Xt2.jpg" alt="">' +
					'</div>' +
					'<div class="column third">' +
						'<h3 class="size-24" style="letter-spacing: 2px;">Image Caption</h3>' +
						'\n<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
					'</div>' +
				'</div>'
        },

		{
		    'thumbnail': 'preview/photos-43.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<h3 class="size-24" style="letter-spacing: 2px;">Image Caption</h3>' +
						'\n<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<img src="assets/minimalist-blocks/images/-CU86b3.jpg" alt="">' +
					'</div>' +
					'<div class="column third">' +
						'<img src="assets/minimalist-blocks/images/-BF4aK4.jpg" alt="">' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/photos-44.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column fourth">' +
						'<img src="assets/minimalist-blocks/images/-VUx7h1.jpg" alt="">' +
					'</div>' +
					'<div class="column fourth">' +
						'<p>Lorem Ipsum is simply dummy text of the typesetting industry.</p>' +
					'</div>' +
					'<div class="column fourth">' +
						'<img src="assets/minimalist-blocks/images/-i4AMQ1.jpg" alt="">' +
					'</div>' +
					'<div class="column fourth">' +
						'<p>Lorem Ipsum is simply dummy text of the typesetting industry.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/photos-45.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column fourth">' +
						'<img src="assets/minimalist-blocks/images/-4r88l1.jpg" alt="" style="border-radius: 500px;">' +
					'</div>' +
					'<div class="column fourth">' +
						'<p>Lorem Ipsum is simply dummy text of the typesetting industry.</p>' +
					'</div>' +
					'<div class="column fourth">' +
						'<img src="assets/minimalist-blocks/images/-nWape2.jpg" alt="" style="border-radius: 500px;">' +
					'</div>' +
					'<div class="column fourth">' +
						'<p>Lorem Ipsum is simply dummy text of the typesetting industry.</p>' +
					'</div>' +
				'</div>'
		},

        {
        'thumbnail': 'preview/photos-01.png',
        'category': '102',
        'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p class="size-24" style="color: #d4d4d4; font-family: Georgia, serif;line-height:1.5"><i>Our</i></p>' +
						'\n<h1 class="size-48 is-title1-48 is-title-lite" style="line-height:1"><b>GALLERY</b></h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<img src="assets/minimalist-blocks/images/karla-caloca-416107-U0vPf1.jpg" alt="">' +
						'\n<h3 class="size-32 is-title-lite" style="line-height:1"><i>01</i></h3>' +
						'\n<p>Lorem Ipsum is simply dummy text.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<img src="assets/minimalist-blocks/images/joanna-kosinska-340746-(1)-LahRM1.jpg" alt="">' +
						'\n<h3 class="size-32 is-title-lite" style="line-height:1"><i>02</i></h3>' +
						'\n<p>Lorem Ipsum is simply dummy text.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<img src="assets/minimalist-blocks/images/claudia-nuta-362406-sJTiS1.jpg" alt="">' +
						'\n<h3 class="size-32 is-title-lite" style="line-height:1"><i>03</i></h3>' +
						'\n<p>Lorem Ipsum is simply dummy text.</p>' +
					'</div>' +
				'</div>'
    },

		{
		    'thumbnail': 'preview/photos-02.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-48 is-title1-48 is-title-lite" style="font-family: Georgia, serif;"><i>Gallery</i></h1>' +
						'\n<p style="border-bottom: 2.5px solid #333; width: 40px; display: inline-block;"></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<img src="assets/minimalist-blocks/images/ian-dooley-298780-Xx10H1.jpg" alt="">' +
					'</div>' +
					'<div class="column third">' +
						'<img src="assets/minimalist-blocks/images/khai-sze-ong-308080-Xx10H2.jpg" alt="">' +
					'</div>' +
					'<div class="column third">' +
						'<img src="assets/minimalist-blocks/images/ice-cream-2562128_1920-HK8fe1.jpg" alt="">' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/photos-03.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-64 is-title1-64 is-title-lite">GALLERY</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half center">' +
						'<img src="assets/minimalist-blocks/images/dsnnm5oj9zs-allef-vinicius-na9md1.jpg" alt="">' +
					'</div>' +
					'<div class="column half center">' +
						'<h1 class="size-80 is-title1-80 is-title-bold">01.</h1>' +
						'\n<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half center">' +
						'<h1 class="size-80 is-title1-80 is-title-bold">02.</h1>' +
						'\n<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
					'</div>' +
					'<div class="column half center">' +
						'<img src="assets/minimalist-blocks/images/g0j6mtbse_8-brooke-cagle-Jzk4V2.jpg" alt="">' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/photos-06.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<p class="size-24" style="color: #d4d4d4; font-family: serif;"><i>Our</i></p>' +
						'\n<h1 class="size-48 is-title1-48 is-title-lite" style="line-height:1"><b>GALLERY</b></h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/ember-ivory-428708-iqwyh1.jpg" alt="" style="border-radius: 500px;">' +
					'</div>' +
					'<div class="column half">' +
						'<h2 class="size-80" style="color: #d4d4d4;margin-top: 10px;">01</h2>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<h2 class="size-80" style="color: #d4d4d4;margin-top: 10px;">02</h2>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/maja-petric-322464-3gvPD1.jpg" alt="" style="border-radius: 500px;">' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/photos-07.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-64 is-title1-64 is-title-lite">OUR WORKS</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third center">' +
						'<img src="assets/minimalist-blocks/images/-Pml6e1.jpg" alt="">' +
						'\n<h3 class="size-21">PROJECT ONE</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text.</p>' +
					'</div>' +
					'<div class="column third center">' +
						'<img src="assets/minimalist-blocks/images/-skUzQ2.jpg" alt="">' +
						'\n<h3 class="size-21">PROJECT TWO</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text.</p>' +
					'</div>' +
					'<div class="column third center">' +
						'<img src="assets/minimalist-blocks/images/-Pb0GG3.jpg" alt="">' +
						'\n<h3 class="size-21">PROJECT THREE</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/photos-13.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-42 is-title1-42 is-title-lite">OUR WORKS</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<img src="assets/minimalist-blocks/images/rawpixel-781992-unsplash-G3fUn1.jpg" alt="">' +
						'\n<p style="margin-top: 0">Caption One</p>' +
					'</div>' +
					'<div class="column third">' +
						'<img src="assets/minimalist-blocks/images/appetizer-brunch-close-up-1095550-wsJ792.jpg" alt="">' +
						'\n<p style="margin-top: 0">Caption Two</p>' +
					'</div>' +
					'<div class="column third">' +
						'<img src="assets/minimalist-blocks/images/-OMX2T1.jpg" alt="">' +
						'\n<p style="margin-top: 0">Caption Three</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/photos-54.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<img src="assets/minimalist-blocks/images/-y1I7c1.jpg" alt="">' +
					'</div>' +
					'<div class="column two-third">' +
						'<p>Lorem Ipsum is simply dummy text</p>' +
						'\n<h1 class="size-48" style="font-weight: bold; letter-spacing: 1px;">Keep on moving forward.</h1>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/photos-55.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column two-third">' +
						'<p>Lorem Ipsum is simply dummy text</p>' +
						'\n<h1 class="size-48" style="font-weight: bold; letter-spacing: 1px;">Time to think, time to create.</h1>' +
					'</div>' +
					'<div class="column third">' +
						'<img src="assets/minimalist-blocks/images/-xAWFg1.jpg" alt="">' +
					'</div>' +
				'</div>'
		},

		/* PROFILE */

        {
        'thumbnail': 'preview/profile-33.png',
        'category': '103',
        'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/-Ya7J11.jpg" alt="" style="border-radius: 500px;">' +
					'</div>' +
					'<div class="column half">' +
						'<div style="padding-left: 30px">' +
							_tabs(1) + '<div class="spacer height-20"></div>' +
							_tabs(1) + '<h1 style="letter-spacing: 2px; text-align: center;">Jane Smith</h1>' +
							_tabs(1) + '<p style="text-align: center; color: rgb(149, 149, 149); letter-spacing: 2px;">CEO / FOUNDER</p>' +
							_tabs(1) + '<div class="spacer height-40"></div>' +
							_tabs(1) + '<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. Lorem ipsum dolor sit amet vel.</p>' +
							_tabs(1) + '<div class="spacer height-20"></div>' +
							_tabs(1) + '<div class="size-14 is-social edit center">' +
								_tabs(2) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter"></i></a>' +
								_tabs(2) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook"></i></a>' +
								_tabs(2) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-20"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<div style="padding-left: 30px">' +
							_tabs(1) + '<div class="spacer height-20"></div>' +
							_tabs(1) + '<h1 style="letter-spacing: 2px; text-align: center;">Sunny Jung</h1>' +
							_tabs(1) + '<p style="text-align: center; color: rgb(149, 149, 149); letter-spacing: 2px;">WEB DEVELOPER</p>' +
							_tabs(1) + '<div class="spacer height-40"></div>' +
							_tabs(1) + '<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. Lorem ipsum dolor sit amet vel.</p>' +
							_tabs(1) + '<div class="spacer height-20"></div>' +
							_tabs(1) + '<div class="size-14 is-social edit center">' +
								_tabs(2) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter"></i></a>' +
								_tabs(2) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook"></i></a>' +
								_tabs(2) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/-sk0wZ2.jpg" alt="" style="border-radius: 500px;">' +
					'</div>' +
				'</div>'
    },

		{
		    'thumbnail': 'preview/profile-34.png',
		    'category': '103',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/-aW5JB1.jpg" alt="">' +
					'</div>' +
					'<div class="column half">' +
						'<div style="padding-left: 35px">' +
							_tabs(1) + '<div class="spacer height-40"></div>' +
							_tabs(1) + '<h1 style="font-weight: bold;">Michael Miller</h1>' +
							_tabs(1) + '<p style="color: rgb(149, 149, 149); letter-spacing: 2px;">HEAD CHEF</p>' +
							_tabs(1) + '<div class="spacer height-20"></div>' +
							_tabs(1) + '<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
							_tabs(1) + '<div style="margin-top: 30px"><a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small">Read More</a></div>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/profile-35.png',
		    'category': '103',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<div style="padding-right: 35px">' +
							_tabs(1) + '<div class="spacer height-40"></div>' +
							_tabs(1) + '<h1 style="font-weight: bold;">Christine Evans</h1>' +
							_tabs(1) + '<p style="color: rgb(149, 149, 149); letter-spacing: 2px;">FLORIST</p>' +
							_tabs(1) + '<div class="spacer height-20"></div>' +
							_tabs(1) + '<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
							_tabs(1) + '<div style="margin-top: 30px"><a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small">Read More</a></div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/-i2Gyj2.jpg" alt="">' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/profile-36.png',
		    'category': '103',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-32 is-title4-32 is-title-lite" style="display: inline-block; line-height: 20px; letter-spacing: 7px;">Our Team</h1>' +
						'\n<p style="margin-top: 4px; letter-spacing: 1px;">Meet our awesome team</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/-4ugQa1.jpg" alt="">' +
					'</div>' +
					'<div class="column half">' +
						'<div style="padding-left: 30px">' +
							_tabs(1) + '<h3 style="letter-spacing: 1px;">Marry Jane</h3>' +
							_tabs(1) + '<div class="spacer height-20"></div>' +
							_tabs(1) + '<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. Lorem Ipsum dolor sit amet.</p>' +
							_tabs(1) + '<div class="size-14 is-social edit">' +
								_tabs(2) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter"></i></a>' +
								_tabs(2) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook"></i></a>' +
								_tabs(2) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-20"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<div style="padding-right: 30px">' +
							_tabs(1) + '<h3 style="letter-spacing: 1px;">Pamela Wagner</h3>' +
							_tabs(1) + '<div class="spacer height-20"></div>' +
							_tabs(1) + '<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. Lorem Ipsum dolor sit amet.</p>' +
							_tabs(1) + '<div class="size-14 is-social edit">' +
								_tabs(2) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter"></i></a>' +
								_tabs(2) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook"></i></a>' +
								_tabs(2) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/-Q30Fc2.jpg" alt="">' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/profile-37.png',
		    'category': '103',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/-CvTn71.jpg" alt="">' +
						'\n<h3 class="size-24" style="letter-spacing: 2px;">Wendy Watson</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
						'\n<div class="size-14 is-social edit">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
						'\n</div>' +
					'</div>' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/-oxSrj2.jpg" alt="">' +
						'\n<h3 class="size-24">Emma Whitlock</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
						'\n<div class="size-14 is-social edit">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/profile-38.png',
		    'category': '103',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column two-third">' +
						'<img src="assets/minimalist-blocks/images/-uCrPn1.jpg" alt="">' +
					'</div>' +
					'<div class="column third">' +
						'<h3 style="letter-spacing: 2px;">Jill Taylor</h3>' +
						'\n<p style="border-bottom: 2px solid #e74c3c; width: 40px; display: inline-block; margin-top: 0"></p>' +
						'\n<div class="spacer height-20"></div>' +
						'\n<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. Vivamus leo ante.</p>' +
						'\n<div class="size-14 is-social edit">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/profile-39.png',
		    'category': '103',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<h3 style="letter-spacing: 2px;">Marrie Olson</h3>' +
						'\n<p style="border-bottom: 2px solid #e74c3c; width: 40px; display: inline-block; margin-top: 0"></p>' +
						'\n<div class="spacer height-20"></div>' +
						'\n<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. Vivamus leo ante.</p>' +
						'\n<div class="size-14 is-social edit">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
						'\n</div>' +
					'</div>' +
					'<div class="column two-third">' +
						'<img src="assets/minimalist-blocks/images/-OZvbv1.jpg" alt="">' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/profile-40.png',
		    'category': '103',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<img src="assets/minimalist-blocks/images/-T1teG1.jpg" alt="">' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full" style="letter-spacing: 3px;">' +
						'<h1 class="size-35" style="letter-spacing: 2px"><b>Sean</b> Waylen</h1>' +
						'\n<p style="letter-spacing: 2px;margin-top: 10px">CREATIVE DIRECTOR</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
						'\n<div class="spacer height-20"></div>' +
						'\n<div class="size-14 is-social edit">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/profile-41.png',
		    'category': '103',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column two-third">' +
						'<img src="assets/minimalist-blocks/images/-jBWJz1.jpg" alt="">' +
					'</div>' +
					'<div class="column third">' +
						'<h2 class="size-21" style="letter-spacing: 2px; margin-top: 20px"><b>MAX</b> MORRICE</h2>' +
						'\n<div class="spacer height-60"></div>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
						'\n<div class="spacer height-20"></div>' +
						'\n<div class="size-14 is-social edit">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/profile-42.png',
		    'category': '103',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<h2 class="size-21" style="letter-spacing: 2px; margin-top: 20px"><b>LUCY</b> GRIFFIN</h2>' +
						'\n<div class="spacer height-40"></div>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
						'\n<div class="spacer height-20"></div>' +
						'\n<div class="size-14 is-social edit">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
						'\n</div>' +
					'</div>' +
					'<div class="column two-third">' +
						'<img src="assets/minimalist-blocks/images/-RRnJ62.jpg" alt="">' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/profile-45.png',
		    'category': '103',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-50" style="letter-spacing: 5px;">MEET THE TEAM</h1>' +
						'\n<p class="size-21" style="color: rgb(136, 136, 136);">Here are our awesome team</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<img src="assets/minimalist-blocks/images/-uaPpB1.jpg" alt="" style="border-radius: 500px;">' +
								_tabs(2) + '<h3 class="size-24">Nancy McCarty</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the typesetting industry.</p>' +
								_tabs(2) + '<div class="is-social edit" style="margin:2em 0">' +
									_tabs(3) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>' +
									_tabs(3) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>' +
									_tabs(3) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email"></i></a>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<img src="assets/minimalist-blocks/images/-VnYnn2.jpg" alt="" style="border-radius: 500px;">' +
								_tabs(2) + '<h3 class="size-24">Elva Roberson</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the typesetting industry.</p>' +
								_tabs(2) + '<div class="is-social edit" style="margin:2em 0">' +
									_tabs(3) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>' +
									_tabs(3) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>' +
									_tabs(3) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email"></i></a>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<img src="assets/minimalist-blocks/images/-k1e1v3.jpg" alt="" style="border-radius: 500px;">' +
								_tabs(2) + '<h3 class="size-24">Claire Paolini</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the typesetting industry.</p>' +
								_tabs(2) + '<div class="is-social edit" style="margin:2em 0">' +
									_tabs(3) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>' +
									_tabs(3) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>' +
									_tabs(3) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email"></i></a>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/profile-46.png',
		    'category': '103',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-54" style="letter-spacing: 5px;">MEET THE TEAM</h1>' +
						'\n<p class="size-21" style="color: rgb(136, 136, 136);">Here are our awesome team</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);">' +
							_tabs(1) + '<div style="padding:30px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<img src="assets/minimalist-blocks/images/-cE33Z1.jpg" alt="" style="border-radius: 500px;">' +
								_tabs(2) + '<h3 class="size-32 is-title1-32 is-title-lite">Valerie Edie</h3>' +
								_tabs(2) + '<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
								_tabs(2) + '<div class="is-social edit" style="margin:2em 0">' +
									'<a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>' +
									'<a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>' +
									'<a href="mailto:you@example.com"><i class="icon ion-ios-email"></i></a>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column half">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);">' +
							_tabs(1) + '<div style="padding:30px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<img src="assets/minimalist-blocks/images/-oyKle1.jpg" alt="" style="border-radius: 500px;">' +
								_tabs(2) + '<h3 class="size-32 is-title1-32 is-title-lite">Judith Oberg</h3>' +
								_tabs(2) + '<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
								_tabs(2) + '<div class="is-social edit" style="margin:2em 0">' +
									_tabs(3) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>' +
									_tabs(3) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>' +
									_tabs(3) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email"></i></a>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/profile-47.png',
		    'category': '103',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-48 is-title1-48 is-title-lite">MEET OUR TEAM</h1>' +
						'\n<p style="border-bottom: 2.5px solid #e74c3c; width: 60px; display: inline-block; margin-top: 0"></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);">' +
							_tabs(1) + '<img src="assets/minimalist-blocks/images/-6tTCw1.jpg" alt="" class="margin-0">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<h3 class="size-24">Amy Bernard</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is simply dummy text.</p>' +
								_tabs(2) + '<div class="is-social edit" style="margin:2em 0 0.5em">' +
									_tabs(3) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter"></i></a>' +
									_tabs(3) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook"></i></a>' +
									_tabs(3) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);">' +
							_tabs(1) + '<img src="assets/minimalist-blocks/images/-Hehw41.jpg" alt="" class="margin-0">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<h3 class="size-24">Jimmy Taylor</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is simply dummy text.</p>' +
								_tabs(2) + '<div class="is-social edit" style="margin:2em 0 0.5em">' +
									_tabs(3) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter"></i></a>' +
									_tabs(3) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook"></i></a>' +
									_tabs(3) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);">' +
							_tabs(1) + '<img src="assets/minimalist-blocks/images/-uh6mF1.jpg" alt="" class="margin-0">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<h3 class="size-24">Stephanie Bart</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is simply dummy text.</p>' +
								_tabs(2) + '<div class="is-social edit" style="margin:2em 0 0.5em">' +
									_tabs(3) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter"></i></a>' +
									_tabs(3) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook"></i></a>' +
									_tabs(3) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/profile-48.png',
		    'category': '103',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-48 is-title1-48 is-title-lite">MEET OUR TEAM</h1>' +
						'\n<p style="border-bottom: 2.5px solid #e74c3c; width: 60px; display: inline-block; margin-top: 0"></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<div class="is-card max-390 is-dark-text shadow-1" style="width:calc(100%);">' +
							_tabs(1) + '<img src="assets/minimalist-blocks/images/-HsVkl1.jpg" alt="" class="margin-0">' +
							_tabs(1) + '<div style="padding:30px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<h3 class="size-28 margin-0 is-title-lite">Patricia Tillman</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
								_tabs(2) + '<div class="is-social edit" style="margin:2em 0 0.5em">' +
									_tabs(3) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter"></i></a>' +
									_tabs(3) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook"></i></a>' +
									_tabs(3) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column half">' +
						'<div class="is-card max-390 is-dark-text shadow-1" style="width:calc(100%);">' +
							_tabs(1) + '<img src="assets/minimalist-blocks/images/-RYgTK2.jpg" alt="" class="margin-0">' +
							_tabs(1) + '<div style="padding:30px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<h3 class="size-28 margin-0 is-title-lite">Jennifer Duncan</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
								_tabs(2) + '<div class="is-social edit" style="margin:2em 0 0.5em">' +
									_tabs(3) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter"></i></a>' +
									_tabs(3) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook"></i></a>' +
									_tabs(3) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},
		
		/* PRODUCTS */
		
		{
            'thumbnail': 'preview/products-22.png',
            'category': '104',
            'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="letter-spacing: 7px;">SPECIAL EDITION</p>' +
						'\n<h1 class="size-88" style="letter-spacing: 5px; font-style: normal;">New Arrival</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column two-third">' +
						'<img src="assets/minimalist-blocks/images/-B4chT1.jpg" alt="">' +
					'</div>' +
					'<div class="column third">' +
						'<h3 style="letter-spacing: 1px;">Sport Shoes</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
						'\n<div class="spacer height-40"></div>' +
						'\n<div><a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small">$79 | Buy Now</a></div>' +
					'</div>' +
				'</div>'
        },
        
        {
            'thumbnail': 'preview/products-23.png',
            'category': '104',
            'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="letter-spacing: 7px;">SPECIAL EDITION</p>' +
						'\n<h1 class="size-88" style="letter-spacing: 5px; font-style: normal;">New Arrival</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<h3 style="letter-spacing: 1px;">Soft Knitwear</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
						'\n<div class="spacer height-40"></div>' +
						'\n<div><a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small">$37 | Buy Now</a></div>' +
					'</div>' +
					'<div class="column two-third">' +
						'<img src="assets/minimalist-blocks/images/toa-heftiba-1296743-unsplash-YCGL01.jpg" alt="">' +
					'</div>' +
				'</div>'
        },
		
		/* FEATURES */
		
		{
		    'thumbnail': 'preview/features-20.png',
		    'category': '105',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-48" style="letter-spacing: 2px;">SPECIAL FEATURES</h1>' +
						'\n<p style="border-bottom: 2px solid #e74c3c; width: 75px; display: inline-block;"></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<i class="icon ion-ios-monitor-outline size-48"></i>' +
						'\n<h3 class="size-24">FEATURE ITEM</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<i class="icon ion-ios-gear-outline size-48"></i>' +
						'\n<h3 class="size-24">FEATURE ITEM</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<i class="icon ion-ios-heart-outline size-48"></i>' +
						'\n<h3 class="size-24">FEATURE ITEM</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<i class="icon ion-ios-color-wand-outline size-48"></i>' +
						'\n<h3 class="size-24">FEATURE ITEM</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/features-21.png',
		    'category': '105',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-48" style="letter-spacing: 2px;">SPECIAL FEATURES</h1>' +
						'\n<p style="border-bottom: 2px solid #e74c3c; width: 75px; display: inline-block;"></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<i class="icon ion-ios-monitor-outline size-48"></i>' +
						'\n<h3 class="size-24">FEATURE ITEM</h3>' +
						'\n<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<i class="icon ion-ios-gear-outline size-48"></i>' +
						'\n<h3 class="size-24">FEATURE ITEM</h3>' +
						'\n<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<i class="icon ion-ios-heart-outline size-48"></i>' +
						'\n<h3 class="size-24">FEATURE ITEM</h3>' +
						'\n<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<i class="icon ion-ios-lightbulb-outline size-48"></i>' +
						'\n<h3 class="size-24">FEATURE ITEM</h3>' +
						'\n<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<i class="icon ion-ios-settings size-48"></i>' +
						'\n<h3 class="size-24">FEATURE ITEM</h3>' +
						'\n<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third">' +
						'<i class="icon ion-ios-compose-outline size-48"></i>' +
						'\n<h3 class="size-24">FEATURE ITEM</h3>' +
						'\n<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/features-22.png',
		    'category': '105',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-38" style="letter-spacing: 2px;">WHAT MAKES US DIFFERENT</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<div class="row clearfix">' +
							_tabs(1) + '<div class="column fourth center">' +
								_tabs(2) + '<div class="is-card is-card-circle is-light-text" style="width:50px;height:50px;padding:5px;background:#000;">' +
									_tabs(3) + '<div class="is-card-content-centered">' +
										_tabs(4) + '<i class="icon ion-android-bulb size-24"></i>' +
									_tabs(3) + '</div>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
							_tabs(1) + '<div class="column two-fourth">' +
								_tabs(2) + '<h3 class="size-24" style="margin-top: 3px">Feature Item</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column half">' +
						'<div class="row clearfix">' +
							_tabs(1) + '<div class="column fourth center">' +
								_tabs(2) + '<div class="is-card is-card-circle is-light-text" style="width:50px;height:50px;padding:5px;background:#000;">' +
									_tabs(3) + '<div class="is-card-content-centered">' +
										_tabs(4) + '<i class="icon ion-compose size-24"></i>' +
									_tabs(3) + '</div>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
							_tabs(1) + '<div class="column two-fourth">' +
								_tabs(2) + '<h3 class="size-24" style="margin-top: 3px">Feature Item</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-20"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<div class="row clearfix">' +
							_tabs(1) + '<div class="column fourth center">' +
								_tabs(2) + '<div class="is-card is-card-circle is-light-text" style="width:50px;height:50px;padding:5px;background:#000;">' +
									_tabs(3) + '<div class="is-card-content-centered">' +
										_tabs(4) + '<i class="icon ion-android-options size-24"></i>' +
									_tabs(3) + '</div>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
							_tabs(1) + '<div class="column two-fourth">' +
								_tabs(2) + '<h3 class="size-24" style="margin-top: 3px">Feature Item</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column half">' +
						'<div class="row clearfix">' +
							_tabs(1) + '<div class="column fourth center">' +
								_tabs(2) + '<div class="is-card is-card-circle is-light-text" style="width:50px;height:50px;padding:5px;background:#000;">' +
									_tabs(3) + '<div class="is-card-content-centered">' +
										_tabs(4) + '<i class="icon ion-android-microphone size-24"></i>' +
									_tabs(3) + '</div>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
							_tabs(1) + '<div class="column two-fourth">' +
								_tabs(2) + '<h3 class="size-24" style="margin-top: 3px">Feature Item</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},
		
        /* CONTACT */

        {
        'thumbnail': 'preview/contact-17.png',
        'category': '116',
        'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/-5rCRe1.jpg" alt="">' +
					'</div>' +
					'<div class="column half">' +
						'<h1 style="font-weight: bold; text-align: right;">Hi, we\'d like to hear from you.</h1>' +
						'\n<p style="color: rgb(119, 119, 119); text-transform: uppercase; letter-spacing: 5px; text-align: right;">Let\'s Talk!</p>' +
						'\n<div class="spacer height-20"></div>' +
						'\n<p style="text-align: right;">Lorem Ipsum is simply dummy text. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
						'\n<div class="spacer height-20"></div>' +
						'\n<div class="right">' +
							_tabs(1) + '<a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small">Talk to Us</a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
    },

        {
            'thumbnail': 'preview/contact-13.png',
            'category': '116',
            'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<p style="text-transform: uppercase; letter-spacing: 3px;">Talk To Us</p>' +
						'\n<h1 style="font-weight: bold;">Just say hello.</h1>' +
						'\n<div class="spacer height-20"></div>' +
						'\n<p>Lorem Ipsum is simply dummy text. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
						'\n<div class="spacer height-20"></div>' +
						'\n<p><b>Phone:</b><br>(123) 456 7890 / 456 7891</p>' +
						'\n<div class="spacer height-20"></div>' +
						'\n<div class="is-social">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-android-drafts"></i></a>' +
						'\n</div>' +
					'</div>' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/-Q4trw1.jpg" alt="">' +
					'</div>' +
				'</div>'
        },

		{
		    'thumbnail': 'preview/contact-20.png',
		    'category': '116',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column two-third">' +
						'<img src="assets/minimalist-blocks/images/-Yzikz1.jpg" alt="">' +
					'</div>' +
					'<div class="column third">' +
						'<h1 class="size-42" style="letter-spacing: 2px;"><b style="letter-spacing: 1px;">Contact Us.</b></h1>' +
						'\n<div class="spacer height-40"></div>' +
						'\n<p>' +
							_tabs(1) + '<i class="icon ion-ios-home-outline size-24"></i>&nbsp; &nbsp;123 Street Name, City<br>' +
							_tabs(1) + '<i class="icon ion-ios-telephone-outline size-24"></i>&nbsp; &nbsp;Call us: (123) 456 7890<br>' +
							_tabs(1) + '<i class="icon ion-ios-paperplane-outline size-24"></i>&nbsp; &nbsp;company@sample.com' +
						'\n</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/contact-21.png',
		    'category': '116',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<h1 class="size-42"><b style="letter-spacing: 1px;">Talk to us.</b></h1>' +
						'\n<div class="spacer height-40"></div>' +
						'\n<p>' +
							_tabs(1) + '12345 Street Name, City.<br>' +
							_tabs(1) + 'P: (123) 456 7890 110<br>' +
							_tabs(1) + 'Email:<br><a href="#" style="color: #333">company@example.com</a>' +
						'\n</p>' +
					'</div>' +
					'<div class="column two-third">' +
						'<img src="assets/minimalist-blocks/images/-eOeJ91.jpg" alt="">' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/contact-22.png',
		    'category': '116',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<img src="assets/minimalist-blocks/images/-r7pT31.jpg" alt="">' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column center third">' +
						'<i class="icon ion-ios-book-outline size-32" style="color: rgb(136, 136, 136);"></i>' +
						'\n<p>1234 Street Name, City.</p>' +
					'</div>' +
					'<div class="column center third">' +
						'<i class="icon ion-ios-telephone-outline size-32" style="color: rgb(136, 136, 136);"></i>' +
						'\n<p>(123) 456 7890 / 456 7891</p>' +
					'</div>' +
					'<div class="column center third">' +
						'<i class="icon ion-ios-compose-outline size-32" style="color: rgb(136, 136, 136);"></i>' +
						'\n<p><a href="mailto:#" style="color: #333">company@example.com</a></p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/contact-23.png',
		    'category': '116',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<h1 class="size-48 is-title1-48 is-title-bold" style="margin-top:0">Find us here...</h1>' +
					'</div>' +
					'<div class="column half">' +
						'<p>' +
							_tabs(1) + '12345 Street Name, City.' +
							_tabs(1) + 'State 12345<br>' +
							_tabs(1) + 'P: (123) 456 7890 / 456 7891. <br>' +
							_tabs(1) + 'Email:&nbsp;<a href="#" style="color: #333">companyname@example.com</a>' +
						'\n</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="embed-responsive embed-responsive-16by9"><iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" class="mg1" src="https://maps.google.com/maps?q=Melbourne,+Victoria,+Australia&amp;hl=en&amp;sll=-7.981898,112.626504&amp;sspn=0.009084,0.016512&amp;oq=melbourne&amp;hnear=Melbourne+Victoria,+Australia&amp;t=m&amp;z=10&amp;output=embed"></iframe></div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/contact-24.png',
		    'category': '116',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column two-third">' +
						'<img src="assets/minimalist-blocks/images/-kIG0k2.jpg" alt="">' +
					'</div>' +
					'<div class="column third">' +
						'<h3 class="size-18" style="font-weight: bold; margin-top:20px">Company Name, Inc.</h3>' +
						'\n<p>12345 Street Name, City. State 12345.<br>P: (123) 456 7890 100</p>' +
						'\n<div class="is-social">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-android-drafts"></i></a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/contact-25.png',
		    'category': '116',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column two-third">' +
						'<div class="embed-responsive embed-responsive-16by9" style="height:250px"><iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" class="mg1" src="https://maps.google.com/maps?q=Melbourne,+Victoria,+Australia&amp;hl=en&amp;sll=-7.981898,112.626504&amp;sspn=0.009084,0.016512&amp;oq=melbourne&amp;hnear=Melbourne+Victoria,+Australia&amp;t=m&amp;z=10&amp;output=embed"></iframe></div>' +
					'</div>' +
					'<div class="column third">' +
						'<h3 class="size-18" style="font-weight: bold; margin-top:20px">Company Name, Inc.</h3>' +
						'\n<p>12345 Street Name, City. State 12345.<br>P: (123) 456 7890 100</p>' +
						'\n<div class="is-social">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-android-drafts"></i></a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/contact-26.png',
		    'category': '116',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-48" style="letter-spacing: 3px;">CONTACT US</h1>' +
						'\n<p>Do you have something to say? Drop us a line to get the conversation started.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<h3>' +
							_tabs(1) + '<i class="icon ion-ios-location-outline size-32" style="margin-top:0;line-height:1;vertical-align:middle;margin-right:10px"></i>' +
							_tabs(1) + '<span style="vertical-align:middle">Address</span>' +
						'\n</h3>' +
						'\n<p>123 Street Name, City.<br>State 12345</p>' +
					'</div>' +
					'<div class="column third">' +
						'<h3>' +
							_tabs(1) + '<i class="icon ion-iphone size-32" style="margin-top:0;line-height:1;vertical-align:middle;margin-right:10px"></i>' +
							_tabs(1) + '<span style="vertical-align:middle">Phone</span>' +
						'\n</h3>' +
						'\n<p>(123) 456 7890 / 456 7891</p>' +
					'</div>' +
					'<div class="column third">' +
						'<h3>' +
							_tabs(1) + '<i class="icon ion-ios-email-outline size-32" style="margin-top:0;line-height:1;vertical-align:middle;margin-right:10px"></i>' +
							_tabs(1) + '<span style="vertical-align:middle">Email</span>' +
						'\n</h3>' +
						'\n<p><a href="mailto:#">first.last@example.com</a></p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/contact-27.png',
		    'category': '116',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-80" style="letter-spacing: 4px;">Hi... Let\'s get in touch!</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/-N4Zbf1.jpg" alt="">' +
					'</div>' +
					'<div class="column half">' +
						'<h3 style="letter-spacing: 2px;">Company Name</h3>' +
						'\n<p>' +
              				_tabs(1) + '123 Street, City<br>' +
             				_tabs(1) + 'State 12345<br>' +
              				_tabs(1) + 'P: (123) 456 7890 / 456 7891' +
            			'\n</p>' +
						'\n<div class="spacer height-20"></div>' +
						'\n<div class="is-social">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-android-drafts"></i></a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/contact-28.png',
		    'category': '116',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 style="text-transform: uppercase; letter-spacing: 6px; text-align: center;" class="size-42">CONTACT US</h1>' +
						'\n<div class="center">' +
							_tabs(1) + '<p style="border-bottom: 2px solid #000;width: 50px;display: inline-block;margin-top:0"></p>' +
						'\n</div>' +
						'\n<p style="text-align: center;">' +
							_tabs(1) + '123 Street, City.<br>' +
							_tabs(1) + 'State 12345<br>' +
							_tabs(1) + 'P: (123) 456 7890<br>' +
							_tabs(1) + 'Email: <a href="mailto:#">companyname@example.com</a>' +
						'\n</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="center"><a href="#" class="is-btn is-btn-ghost1 is-upper is-rounded-30 is-btn-small">Say Hello</a></div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/contact-29.png',
		    'category': '116',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<h3 style="letter-spacing: 1px;">ADDRESS</h3>' +
						'\n<p><strong>Company Name, Inc.</strong><br>123 Street, City<br>State 12345<br>P: (123) 456 7890 / 456 7891</p>' +
					'</div>' +
					'<div class="column half">' +
						'<h3 style="letter-spacing: 1px;">STAY IN TOUCH</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
						'\n<div><a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small">Drop A Line</a></div>' +
					'</div>' +
				'</div>'
		},	
		
		{
		    'thumbnail': 'preview/contact-30.png',
		    'category': '116',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/daniel-klopper-1142809-unsplash-KMEui1.jpg" alt="">' +
					'</div>' +
					'<div class="column half">' +
						'<h1 style="font-weight: bold; letter-spacing: 1px;">Get in touch</h1>' +
						'\n<p style="border-bottom: 3px solid #000; width: 70px; display: inline-block;"></p>' +
						'\n<div class="spacer height-60"></div>' +
						'\n<p>Company Name. 12345 Street Name, City. State 12345</p>' +
						'\n<p>Phone:<br>(123) 456 7890 / 456 7891</p>' +
						'\n<div class="spacer height-60"></div>' +
						'\n<div class="is-social size-18">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},		
		
		{
		    'thumbnail': 'preview/contact-31.png',
		    'category': '116',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<h1 style="font-weight: bold; letter-spacing: 1px;">Get in touch</h1>' +
						'\n<p style="border-bottom: 3px solid #000; width: 70px; display: inline-block;"></p>' +
						'\n<div class="spacer height-60"></div>' +
						'\n<p>Company Name. 12345 Street Name, City. State 12345</p>' +
						'\n<p>Phone:<br>(123) 456 7890 / 456 7891</p>' +
						'\n<div class="spacer height-60"></div>' +
						'\n<div class="is-social size-18">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
						'\n</div>' +
					'</div>' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/scott-webb-260726-unsplash-(1)-TuwlW2.jpg" alt="">' +
					'</div>' +
				'</div>'
		},		
		
		{
		    'thumbnail': 'preview/contact-32.png',
		    'category': '116',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-128" style="font-weight: bold;">Contact.</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-200"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<p style="color: rgb(149, 149, 149); letter-spacing: 1px;">Company Name, Inc.</p>' +
					'</div>' +
					'<div class="column two-third">' +
						'<p>1st floor, Building Name, 1234 Street Name. City, State 012.</p>' +
						'\n<p>Phone:<br>(012) 123 456 7890 / 987 654 3210</p>' +
					'</div>' +
				'</div>'
		},		
		
		{
		    'thumbnail': 'preview/contact-33.png',
		    'category': '116',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-54" style="font-weight: bold;"><span style="color: rgb(209, 209, 209);">Don\'t be shy.</span><br>Make the first contact.</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-100"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p>1st floor, Building Name. 123 Street Name, City. State 456.<br>Phone: (123) 456 7890 – Fax: (123) 456 7891</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div><a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small">Send Message</a></div>' +
					'</div>' +
				'</div>'
		},		
		
		{
		    'thumbnail': 'preview/contact-34.png',
		    'category': '116',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 style="text-align: center; letter-spacing: 5px;">CONTACT US</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-100"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column center third">' +
						'<i class="icon ion-ios-location-outline size-32" style="font-size: 3em;"></i>' +
						'\n<h3 class="size-21" style="color: rgb(149, 149, 149);">COMPANY NAME</h3>' +
						'\n<p>123 Street, City. State 789</p>' +
						'\n<p style="border-bottom: 1px solid #000; width: 40px; display: inline-block; margin-top: 0"></p>' +
					'</div>' +
					'<div class="column center third">' +
						'<i class="icon ion-ios-alarm-outline size-32" style="font-size: 3em;"></i>' +
						'\n<h3 class="size-21" style="color: rgb(149, 149, 149);">OPENING HOURS</h3>' +
						'\n<p>Mon - Sun: 9 AM - 11 PM</p>' +
						'\n<p style="border-bottom: 1px solid #000; width: 40px; display: inline-block; margin-top: 0"></p>' +
					'</div>' +
					'<div class="column center third">' +
						'<i class="icon ion-ios-telephone-outline size-32" style="font-size: 3em;"></i>' +
						'\n<h3 class="size-21" style="color: rgb(149, 149, 149);">PHONE</h3>' +
						'\n<p>(012) 345 678 9012</p>' +
						'\n<p style="border-bottom: 1px solid #000; width: 40px; display: inline-block; margin-top: 0"></p>' +
					'</div>' +
				'</div>'
		},		
		
		{
		    'thumbnail': 'preview/contact-35.png',
		    'category': '116',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<img src="assets/minimalist-blocks/images/tomasz-zagorski-1277386-unsplash-59bVF1.jpg" alt="">' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<h3 class="size-18 is-title-lite">CONTACT US</h3>' +
						'\n<p style="border-bottom: 1px solid #333; width: 50px; display: inline-block; margin-top: 0"></p>' +
						'\n<p class="size-16"><b>Company Name</b><br>' +
							_tabs(1) + '12345 Street Name, City.' +
							_tabs(1) + 'State 12345<br>' +
							_tabs(1) + 'P: (123) 456 7890 / 456 7891.' +
						'\n</p>' +
					'</div>' +
					'<div class="column half">' +
						'<h3 class="size-18 is-title-lite">DROP A LINE</h3>' +
						'\n<p style="border-bottom: 1px solid #333; width: 50px; display: inline-block; margin-top: 0"></p>' +
						'\n<p class="size-16">' +
							_tabs(1) + 'Follow us on<br>' +
							_tabs(1) + 'Facebook: <a href="#">Company Name</a><br>Write to us at companyname@example.com' +
						'\n</p>' +
					'</div>' +
				'</div>'
		},		
		
		{
		    'thumbnail': 'preview/contact-36.png',
		    'category': '116',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/matt-reames-1199596-unsplash-Q03hK1.jpg" alt="">' +
					'</div>' +
					'<div class="column half">' +
						'<p class="size-16" style="letter-spacing: 2px;">GET IN TOUCH</p>' +
						'\n<h1 class="size-42">We\'d love to hear from you.</h1>' +
						'\n<div class="spacer height-20"></div>' +
						'\n<p>123 Street Name, City. State 12345<br>Phone: (123) 456 7890 / 456 7891</p>' +
						'\n<div><a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small">Send Message</a></div>' +
					'</div>' +
				'</div>'
		},		
		
		{
		    'thumbnail': 'preview/contact-37.png',
		    'category': '116',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<p class="size-16" style="letter-spacing: 2px;">GET IN TOUCH</p>' +
						'\n<h1 class="size-42">We\'d love to hear from you.</h1>' +
						'\n<div class="spacer height-20"></div>' +
						'\n<p>123 Street Name, City. State 12345<br>Phone: (123) 456 7890 / 456 7891</p>' +
						'\n<div><a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small">Send Message</a></div>' +
					'</div>' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/christin-hume-505823-unsplash-VmOmm1.jpg" alt="">' +
					'</div>' +
				'</div>'
		},	
		
		/* ACHIEVEMENTS */

		{
		    'thumbnail': 'preview/achievements-19.png',
		    'category': '109',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<i class="icon ion-android-star-outline size-48"></i>' +
						'\n<h2 style="letter-spacing: 2px;">ACHIEVEMENTS</h2>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
						'\n<div><a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small">Read More</a></div>' +
					'</div>' +
					'<div class="column half">' +
						'<i class="icon ion-trophy size-48"></i>' +
						'\n<h2 style="letter-spacing: 2px;">AWARDS</h2>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
						'\n<div><a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small">Read More</a></div>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/achievements-20.png',
		    'category': '109',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-46" style="letter-spacing: 4px;">ACHIEVEMENTS</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column fourth center">' +
						'<i class="icon ion-android-people size-64" style="margin-bottom:0"></i>' +
						'\n<p style="margin-top: 0px;">200k+ CLIENTS</p>' +
					'</div>' +
					'<div class="column fourth center">' +
						'<i class="icon ion-android-clipboard size-64" style="margin-bottom:0"></i>' +
						'\n<p style="margin-top: 0px;">99 PROJECTS DONE</p>' +
					'</div>' +
					'<div class="column fourth center">' +
						'<i class="icon ion-trophy size-64" style="margin-bottom:0"></i>' +
						'\n<p style="margin-top: 0px;">17 AWARDS WON</p>' +
					'</div>' +
					'<div class="column fourth center">' +
						'<i class="icon ion-android-favorite-outline size-64" style="margin-bottom:0"></i>' +
						'\n<p style="margin-top: 0px;">500K+ FOLLOWERS</p>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/achievements-21.png',
		    'category': '109',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-48" style="letter-spacing: 5px; text-align: center;">ACHIEVEMENTS</h1>' +
						'\n<p style="text-align: center; letter-spacing: 2px;">WHAT MAKES US DIFFERENT</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column center third">' +
						'<i class="icon ion-android-people size-32" style="line-height:1.3"></i>' +
						'\n<h1 class="size-42" style="margin-top: 0px; font-weight: bold;">300+</h1>' +
						'\n<p style="letter-spacing: 2px;">SATISFIED CLIENTS</p>' +
					'</div>' +
					'<div class="column center third">' +
						'<i class="icon ion-android-checkbox-outline size-32" style="line-height:1.3"></i>' +
						'\n<h1 class="size-42" style="margin-top: 0px; font-weight: bold;">123</h1>' +
						'\n<p style="letter-spacing: 2px;">PROJECTS DONE</p>' +
					'</div>' +
					'<div class="column center third">' +
						'<i class="icon ion-trophy size-32" style="line-height:1.3"></i>' +
						'\n<h1 class="size-42" style="margin-top: 0px; font-weight: bold;">11</h1>' +
						'\n<p style="letter-spacing: 2px;">AWARDS WON</p>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/achievements-22.png',
		    'category': '109',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column center third">' +
						'<div style="border:2px solid black;padding:10px 15px">' +
							_tabs(1) + '<i class="icon ion-ios-people-outline size-64" style="line-height: 1.5"></i>' +
							_tabs(1) + '<h1 style="margin-top:0;font-weight:800;">190+</h1>' +
							_tabs(1) + '<p>More than 190 people believed us.</p>' +
						'\n</div>' +
					'</div>' +
					'<div class="column two-third">' +
						'<h1 style="font-weight: bold;margin-top: 0">WHAT MAKES US DIFFERENT.</h1>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
						'\n<p><a href="#"><i>Dicover More</i></a></p>' +
					'</div>' +
				'</div>'
		},

		/* QUOTES */

        {
        'thumbnail': 'preview/quotes-09.png',
        'category': '110',
        'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-32" style="letter-spacing: 4px;">CLIENT REVIEWS</h1>' +
						'\n<p style="border-bottom: 2px solid #333; width: 50px; display: inline-block; margin: 0"></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/-Ke5wL1.jpg" alt="">' +
					'</div>' +
					'<div class="column half">' +
						'<p style="color: #bdc3c7;"><i class="icon ion-android-hangout size-32"></i></p>' +
						'\n<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
						'\n<p class="size-16" style="color: rgb(189, 195, 199); font-style: italic;">Samantha Clark, Freelance Designer</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<p style="color: #bdc3c7"><i class="icon ion-android-hangout size-32"></i></p>' +
						'\n<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
						'\n<p class="size-16" style="color: rgb(189, 195, 199); font-style: italic;">Sarah Anderson, Graphic Designer</p>' +
					'</div>' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/tanja-heffner-556812-6VgWZ2.jpg" alt="">' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/allef-vinicius-227743-l0Vna1.jpg" alt="">' +
					'</div>' +
					'<div class="column half">' +
						'<p style="color: #bdc3c7;"><i class="icon ion-android-hangout size-32"></i></p>' +
						'\n<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
						'\n<p class="size-16" style="color: rgb(189, 195, 199); font-style: italic;">Nathan Williams, Web Developer</p>' +
					'</div>' +
				'</div>'
    },

		{
		    'thumbnail': 'preview/quotes-13.png',
		    'category': '110',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-48 is-title1-48 is-title-lite" style="text-align: center;">HAPPY CLIENT</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/zach-lucero-792493-unsplash-tXj791.jpg" alt="" style="border-radius: 500px;">' +
					'</div>' +
					'<div class="column half">' +
						'<p><i class="icon ion-android-hangout size-32" style="color: #bdc3c7;"></i></p>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
						'\n<p><i style="color: rgb(136, 136, 136);">Stephanie Anderson</i></p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/quotes-14.png',
		    'category': '110',
		    'html':
		    	'<div class="row clearfix">' +
		    		'<div class="column full center">' +
		    			'<h1 class="size-54" style="letter-spacing: 6px;">HAPPY CLIENTS</h1>' +
						'\n<p>Hear the interesting stories from our customers</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<div class="is-card max-390 is-dark-text" style="width:calc(100%);">' +
							_tabs(1) + '<img src="assets/minimalist-blocks/images/-klE011.jpg" alt="" class="margin-0">' +
							_tabs(1) + '<div style="padding:15px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<h3 class="size-24">Sarah Maxwell</h3>' +
								_tabs(2) + '<p>"Lorem Ipsum is simply dummy text of the printing industry."</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third">' +
						'<div class="is-card max-390 is-dark-text" style="width:calc(100%);">' +
							_tabs(1) + '<img src="assets/minimalist-blocks/images/-ML8mV2.jpg" alt="" class="margin-0">' +
							_tabs(1) + '<div style="padding:15px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<h3 class="size-24">Jane Williams</h3>' +
								_tabs(2) + '<p>"Lorem Ipsum is simply dummy text of the printing industry."</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third">' +
						'<div class="is-card max-390 is-dark-text" style="width:calc(100%);">' +
							_tabs(1) + '<img src="assets/minimalist-blocks/images/-1LHJD1.jpg" alt="" class="margin-0">' +
							_tabs(1) + '<div style="padding:15px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<h3 class="size-24">David Rock</h3>' +
								_tabs(2) + '<p>"Lorem Ipsum is simply dummy text of the printing industry."</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/quotes-15.png',
		    'category': '110',
		    'html':
		    	'<div class="row clearfix">' +
		    		'<div class="column full center">' +
		    			'<h1 class="size-48" style="text-align: center; letter-spacing: 3px;">TESTIMONIALS</h1>' +
						'\n<p style="border-bottom: 2px solid #000; width: 50px; display: inline-block;"></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/-3lVz81.jpg" alt="" style="border-radius: 500px;">' +
					'</div>' +
					'<div class="column half">' +
						'<h3 style="letter-spacing: 1px;">KATHLEEN REYES</h3>' +
						'\n<div class="spacer height-20"></div>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
						'\n<p><i style="color: rgb(136, 136, 136);">Web Developer</i></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-20"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<h3 style="letter-spacing: 1px;">AMANDA JOHNSON</h3>' +
						'\n<div class="spacer height-20"></div>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
						'\n<p><i style="color: rgb(136, 136, 136);">Creative Director</i></p>' +
					'</div>' +
					'<div class="column half center">' +
						'<img src="assets/minimalist-blocks/images/-g6myD1.jpg" alt="" style="border-radius: 500px;">' +
					'</div>' +
				'</div>'
		},



		{
		    'thumbnail': 'preview/quotes-20.png',
		    'category': '110',
		    'html':
		    	'<div class="row clearfix">' +
		    		'<div class="column half">' +
		    			'<img src="assets/minimalist-blocks/images/-QiiGx1.jpg" alt="">' +
		    		'</div>' +
		    		'<div class="column half">' +
		    			'<h3 style="letter-spacing: 2px;">LAURA STACE</h3>' +
						'\n<div class="spacer height-60"></div>' +
						'\n<p>"Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s."</p>' +
						'\n<p><i style="color: rgb(136, 136, 136);">Web Developer in Australia</i></p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/quotes-21.png',
		    'category': '110',
		    'html':
		    	'<div class="row clearfix">' +
		    		'<div class="column half">' +
		    			'<h3 style="letter-spacing: 2px;">JESSICA BROOKS</h3>' +
						'\n<div class="spacer height-60"></div>' +
						'\n<p>"Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s."</p>' +
						'\n<p><i style="color: rgb(136, 136, 136);">Web Designer in Canada</i></p>' +
					'</div>' +
		    		'<div class="column half">' +
		    			'<img src="assets/minimalist-blocks/images/-0DEd62.jpg" alt="">' +
		    		'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/quotes-22.png',
		    'category': '110',
		    'html':
		    	'<div class="row clearfix">' +
		    		'<div class="column two-third">' +
		    			'<img src="assets/minimalist-blocks/images/-VoxNX1.jpg" alt="">' +
		    		'</div>' +
		    		'<div class="column third">' +
		    			'<div style="margin-top:10px"><i class="icon ion-quote size-24"></i></div>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
						'\n<p class="size-14">Deborah Smith</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/quotes-23.png',
		    'category': '110',
		    'html':
		    	'<div class="row clearfix">' +
		    		'<div class="column third">' +
		    			'<div style="margin-top:10px"><i class="icon ion-quote size-24"></i></div>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
						'\n<p class="size-14">Tom McMorris</p>' +
					'</div>' +
		    		'<div class="column two-third">' +
		    			'<img src="assets/minimalist-blocks/images/-HXdhM2.jpg" alt="">' +
		    		'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/quotes-01.png',
		    'category': '110',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-48 is-title1-48 is-title-lite">HAPPY CLIENTS</h1>' +
						'\n<div class="spacer height-40"></div>' +
						'\n<div class="quote">' +
							_tabs(1) + '<i class="icon ion-quote"></i>' +
							_tabs(1) + '<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
							_tabs(1) + '<small>By John Smith</small>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/quotes-02.png',
		    'category': '110',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-64" style="letter-spacing: 12px;">TESTIMONIALS</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third center">' +
						'<i class="icon ion-android-hangout size-32" style="color: #808080"></i>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry. Vivamus leo ante, consectetur sit amet vulputate vel.</p>' +
						'\n<p class="size-14" style="color: rgb(136, 136, 136);">By Your Name</p>' +
					'</div>' +
					'<div class="column third center">' +
						'<i class="icon ion-android-hangout size-32" style="color: #808080"></i>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry. Vivamus leo ante, consectetur sit amet vulputate vel.</p>' +
						'\n<p class="size-14" style="color: rgb(136, 136, 136);">By Your Name</p>' +
					'</div>' +
					'<div class="column third center">' +
						'<i class="icon ion-android-hangout size-32" style="color: #808080"></i>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry. Vivamus leo ante, consectetur sit amet vulputate vel.</p>' +
						'\n<p class="size-14" style="color: rgb(136, 136, 136);">By Your Name</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/quotes-03.png',
		    'category': '110',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-48 is-title1-48 is-title-lite">CUSTOMER TESTIMONIALS</h1>' +
						'\n<p class="size-21">Hear the interesting stories from our lovely customers.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<i class="icon ion-quote size-48"></i>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
						'\n<p class="size-14">Customer Name, Graphic Designer</p>' +
					'</div>' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/uranws2athm-ben-warren-XW12c2.jpg" alt="">' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/photo-1467484493894-3f362eca2299-KGrJB3.jpg" alt="">' +
					'</div>' +
					'<div class="column half">' +
						'<i class="icon ion-quote size-48"></i>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
						'\n<p class="size-14">Customer Name, Web Designer</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/quotes-04.png',
		    'category': '110',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-48 is-title1-48 is-title-lite">TESTIMONIALS</h1>' +
						'\n<p class="size-21">Hear the interesting stories from our lovely customers.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half center">' +
						'<div class="is-card max-390 is-dark-text" style="width:calc(100%);">' +
							'<img src="assets/minimalist-blocks/images/qxshnadbdew-vera-ja-bDmjg1.jpg" alt="" style="margin-top:0">' +
							'\n<div style="padding:30px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(1) + '<i class="icon ion-chatbubble-working size-32"></i>' +
								_tabs(1) + '<p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry."</p>' +
								_tabs(1) + '<p class="size-14">by Your Name</p>' +
							'\n</div>' +
						'</div>' +
					'</div>' +
					'<div class="column half center">' +
						'<div class="is-card max-390 is-dark-text" style="width:calc(100%);">' +
							'<img src="assets/minimalist-blocks/images/woman-1031508_1920-xkxIu2.jpg" alt="" style="margin-top:0">' +
							'\n<div style="padding:30px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(1) + '<i class="icon ion-chatbubble-working size-32"></i>' +
								_tabs(1) + '<p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry."</p>' +
								_tabs(1) + '<p class="size-14">by Your Name</p>' +
							'\n</div>' +
						'</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/quotes-32.png',
		    'category': '110',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<div style="padding-right: 15px">' +
							_tabs(1) + '<img src="assets/minimalist-blocks/images/jelle-van-leest-1320451-unsplash-tWRrO1.jpg" alt="">' +
						'\n</div>' +
					'</div>' +
					'<div class="column half">' +
						'<h1 class="size-46" style="letter-spacing: 2px;">User-friendly, unlimited features, and awesome support.</h1>' +
						'\n<div class="spacer height-60"></div>' +
						'\n<p><i class="icon ion-quote size-21"></i>&nbsp; &nbsp;BY CHRISTOPHER TODD</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/quotes-33.png',
		    'category': '110',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<h1 class="size-46" style="letter-spacing: 2px;">User-friendly, unlimited features, and awesome support.</h1>' +
						'\n<div class="spacer height-60"></div>' +
						'\n<p><i class="icon ion-quote size-21"></i>&nbsp; &nbsp;BY KATE WEBSTER</p>' +
					'</div>' +
					'<div class="column half">' +
						'<div style="padding-right: 15px">' +
							_tabs(1) + '<img src="assets/minimalist-blocks/images/kira-auf-der-heide-475630-unsplash-w06lm1.jpg" alt="">' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/quotes-34.png',
		    'category': '110',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/sawyer-bengtson-1331688-unsplash-NOOrQ1.jpg" alt="">' +
						'\n<div class="quote">' +
							_tabs(1) + '<i class="icon ion-quote size-24"></i>' +
							_tabs(1) + '<p class="size-21">Lorem Ipsum is simply dummy text of the printing industry.</p>' +
							_tabs(1) + '<small>by Julie Oliver </small>' +
						'\n</div>' +
					'</div>' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/nathan-dumlao-1169746-unsplash-9SK2n2.jpg" alt="">' +
						'\n<div class="quote">' +
							_tabs(1) + '<i class="icon ion-quote size-24"></i>' +
							_tabs(1) + '<p class="size-21">Lorem Ipsum is simply dummy text of the printing industry.</p>' +
							_tabs(1) + '<small>by Sean Frazier </small>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/quotes-35.png',
		    'category': '110',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<div class="center"><img src="assets/minimalist-blocks/images/olivia-hutcherson-1331720-small-Oj8u91.jpg" alt="" style="border-radius: 500px"></div>' +
						'\n<div class="quote">' +
							_tabs(1) + '<i class="icon ion-quote size-24"></i>' +
							_tabs(1) + '<p class="size-21">Lorem Ipsum is simply dummy text of the printing industry.</p>' +
							_tabs(1) + '<small>by Clara Jones</small>' +
						'\n</div>' +
					'</div>' +
					'<div class="column half">' +
						'<div class="center"><img src="assets/minimalist-blocks/images/esmee-holdijk-134322-small-UrV9s2.jpg" alt="" style="border-radius: 500px"></div>' +
						'\n<div class="quote">' +
							_tabs(1) + '<i class="icon ion-quote size-24"></i>' +
							_tabs(1) + '<p class="size-21">Lorem Ipsum is simply dummy text of the printing industry.</p>' +
							_tabs(1) + '<small>by Angelina Katz</small>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},
		
		/* PAGE NOT FOUND */
		
		{
		    'thumbnail': 'preview/404-10.png',
		    'category': '113',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<i class="icon ion-android-sad size-64" style="line-height: 1.6"></i>' +
						'\n<h1 class="size-64" style="letter-spacing: 6px;">SORRY, THIS PAGE DOESN\'T EXIST</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="center"><a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small edit"><i class="icon ion-android-home size-16"></i>  Back to Home</a></div>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/404-11.png',
		    'category': '113',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<h1 class="size-68" style="font-weight: bold; letter-spacing: 4px; margin-top: 0;">Are you lost?</h1>' +
					'</div>' +
					'<div class="column half">' +
						'<p style="text-align: justify;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-140"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="center"><a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small">Return Home</a></div>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/404-12.png',
		    'category': '113',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column center full">' +
						'<p class="size-76" style="font-weight: bold;line-height: 1.4;color: #d1d1d1;">Page Not Found</p>' +
						'\n<p class="size-16" style="letter-spacing: 2px;">THE PAGE YOU\'RE LOOKING FOR CAN\'T BE FOUND. DOUBLE CHECK THE URL AND TRY AGAIN</p>' +
						'\n<p style="border-bottom: 3px solid #d1d1d1; width: 160px; display: inline-block;"></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="center"><a href="#" class="is-btn is-btn-ghost1 is-upper is-rounded-30">HOMEPAGE</a></div>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/404-13.png',
		    'category': '113',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="color: rgb(231, 102, 60); letter-spacing: 3px; line-height: 1; text-align: center;">Oops! Nothing Found</p>' +
						'\n<h1 class="size-196" style="text-transform: uppercase; letter-spacing: 18px; text-align: center;">404</h1>' +
						'\n<p class="size-21" style="text-align: center; margin-top: 0">Sorry, the page you\'re looking for doesn\'t exist. You may mistyped&nbsp; the address or the page may have been removed.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="center" style="margin: 20px 0"><a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small">Take Me Home</a></div>' +
					'</div>' +
				'</div>'
		},
		
		/* COMING SOON */
		
		{
		    'thumbnail': 'preview/comingsoon-09.png',
		    'category': '114',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-54" style="text-align: center; font-weight: bold;">We\'re currently working on a new awesome website.</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-100"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<div class="clearfix is-rounded-button-medium">' +
							_tabs(1) + '<a href="https://twitter.com/" style="background-color: #00bfff"><i class="icon ion-social-twitter"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/" style="background-color: #128BDB"><i class="icon ion-social-facebook"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com" style="background-color: #ff69B4;"><i class="icon ion-ios-email-outline"></i></a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/comingsoon-10.png',
		    'category': '114',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<i class="icon ion-ios-alarm-outline size-48" style="line-height: 1.2"></i>' +
						'\n<h1 class="size-68" style="letter-spacing: 2px;">It will be ready when it\'s ready...</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-140"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h3 class="size-24" style="letter-spacing: 2px;">Get in Touch</h3>' +
						'\n<p class="size-16">Company Name. 123 Street, City. State 12345. <br>(123) 456 7890</p>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/comingsoon-11.png',
		    'category': '114',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<p style="letter-spacing: 7px;">SITE UNDER CONSTRUCTION</p>' +
						'\n<h1 class="size-76" style="font-weight: bold; letter-spacing: 10px;">COMING SOON</h1>' +
						'\n<p style="border-bottom: 3px solid #333; width: 150px; display: inline-block;"></p>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/comingsoon-12.png',
		    'category': '114',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-80" style="font-weight: bold; letter-spacing: 7px;">WE ARE LAUNCHING SOON</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-20"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="center"><a href="#" class="is-btn is-btn-ghost1 is-upper">Notify Me</a></div>' +
					'</div>' +
				'</div>'
		},
		
		/* STEPS */

		{
		    'thumbnail': 'preview/steps-17.png',
		    'category': '106',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-54" style="text-align: center; letter-spacing: 4px;">HOW IT WORKS</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third center">' +
						'<h4>Step <span class="size-92"><b>1</b></span></h4>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third center">' +
						'<h4>Step <span class="size-92"><b>2</b></span></h4>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column third center">' +
						'<h4>Step <span class="size-92"><b>3</b></span></h4>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/steps-18.png',
		    'category': '106',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-54" style="text-align: center; letter-spacing: 4px;">THE PROCESS</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half center">' +
						'<i class="icon ion-ios-chatboxes-outline size-64"></i>' +
						'\n<h3>STEP 1</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
					'</div>' +
					'<div class="column half center">' +
						'<i class="icon ion-edit size-64"></i>' +
						'\n<h3>STEP 2</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half center">' +
						'<i class="icon ion-ios-gear-outline size-64"></i>' +
						'\n<h3>STEP 3</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
					'</div>' +
					'<div class="column half center">' +
						'<i class="icon ion-ios-heart-outline size-64"></i>' +
						'\n<h3>STEP 4</h3>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/steps-19.png',
		    'category': '106',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 style="text-align: center; letter-spacing: 4px;" class="size-48">WORK STEPS</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column fourth">' +
						'<h3 class="size-64" style="font-weight:bold">1</h3>' +
						'\n<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column fourth">' +
						'<h3 class="size-64" style="font-weight:bold">2</h3>' +
						'\n<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column fourth">' +
						'<h3 class="size-64" style="font-weight:bold">3</h3>' +
						'\n<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
					'</div>' +
					'<div class="column fourth">' +
						'<h3 class="size-64" style="font-weight:bold">4</h3>' +
						'\n<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
					'</div>' +
				'</div>'
		},

		
		{
		    'thumbnail': 'preview/steps-20.png',
		    'category': '106',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-54" style="letter-spacing: 4px;">THE PROCESS</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<h1 class="size-64 is-title1-64 is-title-bold">01</h1>' +
						'\n<h3>Step One</h3>' +
						'\n<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
						'\n<div style="margin:2em 0 2.5em;">' +
							_tabs(1) + '<a href="#" class="is-btn is-btn-small is-btn-ghost1 is-upper edit">Read More</a>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third">' +
						'\n<h1 class="size-64 is-title1-64 is-title-bold">02</h1>' +
						'\n<h3>Step Two</h3>' +
						'\n<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
						'\n<div style="margin:2em 0 2.5em;">' +
							_tabs(1) + '<a href="#" class="is-btn is-btn-small is-btn-ghost1 is-upper edit">Read More</a>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third">' +
						'\n<h1 class="size-64 is-title1-64 is-title-bold">03</h1>' +
						'\n<h3>Step Three</h3>' +
						'\n<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
						'\n<div style="margin:2em 0 2.5em;">' +
							_tabs(1) + '<a href="#" class="is-btn is-btn-small is-btn-ghost1 is-upper edit">Read More</a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		/* PRICING */
		
		{
		    'thumbnail': 'preview/pricing-21.png',
		    'category': '107',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-64" style="letter-spacing: 2px; text-align: center;">Ready to Purchase?</h1>' +
						'\n<p style="text-align: center; letter-spacing: 1px;">We make everything way easier for you.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="is-card is-dark-text shadow-1" style="border-radius:30px;width:calc(100%);max-width:400px;margin: 0 auto;">' +
							_tabs(1) + '<div style="padding:30px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<div class="display">' +
									_tabs(3) + '<h1>$<span style="font-size: 2.7em;">127</span></h1>' +
								_tabs(2) + '</div>' +
								_tabs(2) + '<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. Lorem Ipsum dolor sit amet.</p>' +
								_tabs(2) + '<div style="margin: 25px 0"><a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small">Purchase</a></div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/pricing-22.png',
		    'category': '107',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-60" style="letter-spacing: 2px;">PRICING PLANS</h1>' +
						'\n<p style="letter-spacing: 1px;">Choose the right plan that works for you.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<h1 style="letter-spacing: 3px;">BASIC</h1>' +
								_tabs(2) + '<div class="display">' +
									_tabs(3) + '<h1>$<span style="font-size: 2em;">29</span></h1>' +
								_tabs(2) + '</div>' +
								_tabs(2) + '<ul style="text-align:left">' +
									_tabs(3) + '<li>Lorem Ipsum is simply text of the printing.</li>' +
									_tabs(3) + '<li>Lorem ipsum dolor sit amet, consectetur adipiscing.</li>' +
									_tabs(3) + '<li>Vivamus leo ante, consectetur sit amet.</li>' +
								_tabs(2) + '</ul>' +
								_tabs(2) + '<div style="margin: 25px 0"><a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small">Get Started</a></div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column half">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<h1 style="letter-spacing: 3px;">PRO</h1>' +
								_tabs(2) + '<div class="display">' +
									_tabs(3) + '<h1>$<span style="font-size: 2em;">59</span></h1>' +
								_tabs(2) + '</div>' +
								_tabs(2) + '<ul style="text-align:left">' +
									_tabs(3) + '<li>Lorem Ipsum is simply text of the printing.</li>' +
									_tabs(3) + '<li>Lorem ipsum dolor sit amet, consectetur adipiscing.</li>' +
									_tabs(3) + '<li>Vivamus leo ante, consectetur sit amet.</li>' +
								_tabs(2) + '</ul>' +
								_tabs(2) + '<div style="margin: 25px 0"><a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small">Get Started</a></div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},
		
		{
		    'thumbnail': 'preview/pricing-23.png',
		    'category': '107',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-60" style="letter-spacing: 3px;">PRICING PLANS</h1>' +
						'\n<p style="border-bottom: 2px solid #000; width: 80px; display: inline-block;"></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);border-radius:15px;">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<h1 class="size-60" style="font-weight: bold;">$27</h1>' +
								_tabs(2) + '<h3 style="letter-spacing: 2px;">BASIC</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
								_tabs(2) + '<div style="margin:2em 0 1em">' +
									_tabs(3) + '<a href="#" class="is-btn is-btn-small is-btn-ghost1 is-upper edit">Purchase</a>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);border-radius:15px;">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<h1 class="size-60" style="font-weight: bold;">$45</h1>' +
								_tabs(2) + '<h3 style="letter-spacing: 2px;">PRO</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
								_tabs(2) + '<div style="margin:2em 0 1em">' +
									_tabs(3) + '<a href="#" class="is-btn is-btn-small is-btn-ghost1 is-upper edit">Purchase</a>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);border-radius:15px;">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<h1 class="size-60" style="font-weight: bold;">$77</h1>' +
								_tabs(2) + '<h3 style="letter-spacing: 2px;">BUSINESS</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
								_tabs(2) + '<div style="margin:2em 0 1em">' +
									_tabs(3) + '<a href="#" class="is-btn is-btn-small is-btn-ghost1 is-upper edit">Purchase</a>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/pricing-24.png',
		    'category': '107',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-48 is-title1-48 is-title-lite">PRICING PLANS</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column center third">' +
						'<h2 style="letter-spacing: 1px;">Beginners</h2>' +
						'\n<div class="display">' +
							_tabs(1) + '<h1>$<span class="size-80">37</span></h1>' +
						'\n</div>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
						'\n<div style="margin:2em 0">' +
							_tabs(1) + '<a href="#" class="is-btn is-btn-ghost1 is-upper is-rounded-30 is-btn-small">Select Plan</a>' +
						'\n</div>' +
					'</div>' +
					'<div class="column center third">' +
						'<h2 style="letter-spacing: 1px;">Professional</h2>' +
						'\n<div class="display">' +
							_tabs(1) + '<h1>$<span class="size-80">69</span></h1>' +
						'\n</div>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
						'\n<div style="margin:2em 0">' +
							_tabs(1) + '<a href="#" class="is-btn is-btn-ghost1 is-upper is-rounded-30 is-btn-small">Select Plan</a>' +
						'\n</div>' +
					'</div>' +
					'<div class="column center third">' +
						'<h2 style="letter-spacing: 1px;">Business</h2>' +
						'\n<div class="display">' +
							_tabs(1) + '<h1>$<span class="size-80">87</span></h1>' +
						'\n</div>' +
						'\n<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
						'\n<div style="margin:2em 0">' +
							_tabs(1) + '<a href="#" class="is-btn is-btn-ghost1 is-upper is-rounded-30 is-btn-small">Select Plan</a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},


		/* NEW */
        

    	{
    	'thumbnail': 'preview/photos-56.png',
    	'category': '102',
    	'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-48 is-title1-48 is-title-lite">GALLERY</h1>' +
						'\n<p style="border-top: 2px solid #333; width: 40px; display: inline-block;"></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full" data-noedit="" data-html="' +

						encodeURIComponent('<div>&nbsp;</div>' +
						'\n<style>' +
							 _tabs(1) + '.snip1361 {' +
							   	_tabs(2) + 'position: relative;' +
							   	_tabs(2) + 'overflow: hidden;' +
							  	_tabs(2) + 'margin: 10px;' +
							   	_tabs(2) + 'min-width: 230px;' +
							   	_tabs(2) + 'max-width: 315px;' +
							   	_tabs(2) + 'width: 100%;' +
							   	_tabs(2) + 'color: #141414;' +
							   	_tabs(2) + 'text-align: left;' +
							   	_tabs(2) + 'line-height: 1.4em;' +
							   	_tabs(2) + 'font-size: 16px;' +
							 _tabs(1) + '}' +

							 _tabs(1) + '.snip1361 * {' +
							   	_tabs(2) + '-webkit-box-sizing: border-box;' +
							   	_tabs(2) + 'box-sizing: border-box;' +
							   	_tabs(2) + '-webkit-transition: all 0.35s ease;' +
							   	_tabs(2) + 'transition: all 0.35s ease;' +
							 _tabs(1) + '}' +

							 _tabs(1) + '.snip1361 img {' +
							   	_tabs(2) + 'max-width: 100%;' +
							   	_tabs(2) + 'vertical-align: top;' +
							 _tabs(1) + '}' +

							 _tabs(1) + '.snip1361 figcaption {' +
							   	_tabs(2) + 'position: absolute;' +
							   	_tabs(2) + 'top: calc(77%);' +
							   	_tabs(2) + 'width: 100%;' +
							   	_tabs(2) + 'background-color: #ffffff;' +
							   	_tabs(2) + 'padding: 20px 25px 65px;' +
							 _tabs(1) + '}' +

							 _tabs(1) + '.snip1361 figcaption:before {' +
							   	_tabs(2) + 'position: absolute;' +
							   	_tabs(2) + 'content: "";' +
							   	_tabs(2) + 'z-index: 2;' +
							   	_tabs(2) + 'bottom: 100%;' +
							   	_tabs(2) + 'left: 0;' +
							   	_tabs(2) + 'width: 100%;' +
							   	_tabs(2) + 'height: 40px;' +
							   	_tabs(2) + 'background-image: -webkit-linear-gradient(top, transparent 0%, #ffffff 100%);' +
							   	_tabs(2) + 'background-image: linear-gradient(to bottom, transparent 0%, #ffffff 100%);' +
							 _tabs(1) + '}' +

							 _tabs(1) + '.snip1361 h3,' +
							 _tabs(1) + '.snip1361 p {' +
							   	_tabs(2) + 'margin: 0 0 10px;' +
							 _tabs(1) + '}' +

							 _tabs(1) + '.snip1361 h3 {' +
							   	_tabs(2) + 'font-size: 18px;' +
							   	_tabs(2) + 'line-height: 1.2em;' +
							   	_tabs(2) + 'text-transform: uppercase;' +
							 _tabs(1) + '}' +

							 _tabs(1) + '.snip1361 p {' +
							   	_tabs(2) + 'font-size: 14px;' +
							   	_tabs(2) + 'letter-spacing: 1px;' +
							   	_tabs(2) + 'opacity: 0.9;' +
							 _tabs(1) + '}' +

							 _tabs(1) + '.snip1361:hover figcaption,' +
							 _tabs(1) + '.snip1361.hover figcaption {' +
							   	_tabs(2) + 'top: 120px;' +
							 _tabs(1) + '}' +
						'\n</style>' +
                        '') +
                        '">' +

					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<figure class="snip1361">' +
							_tabs(1) + '<a href="#"><img src="assets/minimalist-blocks/images/natalia-y-339470-unsplash-oW9JY1.jpg" alt=""></a>' +
							_tabs(1) + '<figcaption>' +
								_tabs(2) + '<h3>Image Caption</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
							_tabs(1) + '</figcaption>' +
						'\n</figure>' +
					'</div>' +
					'<div class="column third">' +
						'<figure class="snip1361">' +
							_tabs(1) + '<a href="#"><img src="assets/minimalist-blocks/images/mahir-uysal-529531-unsplash-nzMeD1.jpg" alt=""></a>' +
							_tabs(1) + '<figcaption>' +
								_tabs(2) + '<h3>Image Caption</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
							_tabs(1) + '</figcaption>' +
						'\n</figure>' +
					'</div>' +
					'<div class="column third">' +
						'<figure class="snip1361">' +
							_tabs(1) + '<a href="#"><img src="assets/minimalist-blocks/images/martin-sanchez-253914-unsplash-YLCTT2.jpg" alt=""></a>' +
							_tabs(1) + '<figcaption>' +
								_tabs(2) + '<h3>Image Caption</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
							_tabs(1) + '</figcaption>' +
						'\n</figure>' +
					'</div>' +
				'</div>'
 },

		{
		    'thumbnail': 'preview/photos-57.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-48 is-title1-48 is-title-lite">GALLERY</h1>' +
						'\n<p style="border-top: 2px solid #333; width: 40px; display: inline-block;"></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full" data-noedit="" data-html="' +

						encodeURIComponent('<div>&nbsp;</div>' +
						'\n<style>' +
							 _tabs(1) + '.snip1361 {' +
							   	_tabs(2) + 'position: relative;' +
							   	_tabs(2) + 'overflow: hidden;' +
							   	_tabs(2) + 'margin: 10px;' +
							   	_tabs(2) + 'min-width: 230px;' +
							   	_tabs(2) + 'max-width: 315px;' +
							   	_tabs(2) + 'width: 100%;' +
							   	_tabs(2) + 'color: #141414;' +
							   	_tabs(2) + 'text-align: left;' +
							   	_tabs(2) + 'line-height: 1.4em;' +
							   	_tabs(2) + 'font-size: 16px;' +
							 _tabs(1) + '}' +

							 _tabs(1) + '.snip1361 * {' +
							   	_tabs(2) + '-webkit-box-sizing: border-box;' +
							  	_tabs(2) + 'box-sizing: border-box;' +
							   	_tabs(2) + '-webkit-transition: all 0.35s ease;' +
							   	_tabs(2) + 'transition: all 0.35s ease;' +
							 _tabs(1) + '}' +

							 _tabs(1) + '.snip1361 img {' +
							   	_tabs(2) + 'max-width: 100%;' +
							   	_tabs(2) + 'vertical-align: top;' +
							 _tabs(1) + '}' +

							 _tabs(1) + '.snip1361 figcaption {' +
							   	_tabs(2) + 'position: absolute;' +
							   	_tabs(2) + 'top: calc(77%);' +
							   	_tabs(2) + 'width: 100%;' +
							   	_tabs(2) + 'background-color: #ffffff;' +
							   	_tabs(2) + 'padding: 20px 25px 65px;' +
							 _tabs(1) + '}' +

							 _tabs(1) + '.snip1361 figcaption:before {' +
							   	_tabs(2) + 'position: absolute;' +
							   	_tabs(2) + 'content: "";' +
							   	_tabs(2) + 'z-index: 2;' +
							   	_tabs(2) + 'bottom: 100%;' +
							   	_tabs(2) + 'left: 0;' +
							   	_tabs(2) + 'width: 100%;' +
							   	_tabs(2) + 'height: 40px;' +
							   	_tabs(2) + 'background-image: -webkit-linear-gradient(top, transparent 0%, #ffffff 100%);' +
							   	_tabs(2) + 'background-image: linear-gradient(to bottom, transparent 0%, #ffffff 100%);' +
							 _tabs(1) + '}' +

							 _tabs(1) + '.snip1361 h3,' +
							 _tabs(1) + '.snip1361 p {' +
							   	_tabs(2) + 'margin: 0 0 10px;' +
							 _tabs(1) + '}' +

							 _tabs(1) + '.snip1361 h3 {' +
							   	_tabs(2) + 'font-size: 18px;' +
							   	_tabs(2) + 'line-height: 1.2em;' +
							   	_tabs(2) + 'text-transform: uppercase;' +
							 _tabs(1) + '}' +

							 _tabs(1) + '.snip1361 p {' +
							   	_tabs(2) + 'font-size: 14px;' +
							   	_tabs(2) + 'letter-spacing: 1px;' +
							   	_tabs(2) + 'opacity: 0.9;' +
							 _tabs(1) + '}' +

							 _tabs(1) + '.snip1361:hover figcaption,' +
							 _tabs(1) + '.snip1361.hover figcaption {' +
							   	_tabs(2) + 'top: 120px;' +
							 _tabs(1) + '}' +
						'\n</style>' +
                        '') +
                        '">' +

					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<figure class="snip1361">' +
							_tabs(1) + '<a href="#"><img src="assets/minimalist-blocks/images/natalia-y-339470-unsplash-oW9JY1.jpg" alt=""></a>' +
							_tabs(1) + '<figcaption>' +
								_tabs(2) + '<h3>Image Caption</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
							_tabs(1) + '</figcaption>' +
						'\n</figure>' +
					'</div>' +
					'<div class="column half">' +
						'<figure class="snip1361">' +
							_tabs(1) + '<a href="#"><img src="assets/minimalist-blocks/images/mahir-uysal-529531-unsplash-nzMeD1.jpg" alt=""></a>' +
							_tabs(1) + '<figcaption>' +
								_tabs(2) + '<h3>Image Caption</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
							_tabs(1) + '</figcaption>' +
						'\n</figure>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-20"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<figure class="snip1361">' +
							_tabs(1) + '<a href="#"><img src="assets/minimalist-blocks/images/martin-sanchez-253914-unsplash-YLCTT2.jpg" alt=""></a>' +
							_tabs(1) + '<figcaption>' +
								_tabs(2) + '<h3>Image Caption</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
							_tabs(1) + '</figcaption>' +
						'\n</figure>' +
					'</div>' +
					'<div class="column half">' +
						'<figure class="snip1361">' +
							_tabs(1) + '<a href="#"><img src="assets/minimalist-blocks/images/pierre-chatel-innocenti-483198-unsplash-(1)-ZsMJ51.jpg" alt=""></a>' +
							_tabs(1) + '<figcaption>' +
								_tabs(2) + '<h3>Image Caption</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
							_tabs(1) + '</figcaption>' +
						'\n</figure>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/photos-58.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-48 is-title1-48 is-title-lite">GALLERY</h1>' +
						'\n<p style="border-top: 2px solid #333; width: 40px; display: inline-block;"></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full" data-noedit="" data-html="' +

						encodeURIComponent('<div>&nbsp;</div>' +
						'\n<style>' +
							 _tabs(1) + '.snip1362 {' +
							   	_tabs(2) + 'position: relative;' +
							  	_tabs(2) + 'overflow: hidden;' +
							   	_tabs(2) + 'margin: 10px;' +
							   	_tabs(2) + 'min-width: 230px;' +
							   	_tabs(2) + 'max-width: 315px;' +
							   	_tabs(2) + 'width: 100%;' +
							   	_tabs(2) + 'color: #141414;' +
							   	_tabs(2) + 'text-align: left;' +
							   	_tabs(2) + 'line-height: 1.4em;' +
							   	_tabs(2) + 'font-size: 16px;' +
							 _tabs(1) + '}' +

							 _tabs(1) + '.snip1362 * {' +
							   	_tabs(2) + '-webkit-box-sizing: border-box;' +
							   	_tabs(2) + 'box-sizing: border-box;' +
							  	_tabs(2) + '-webkit-transition: all 0.35s ease;' +
							   	_tabs(2) + 'transition: all 0.35s ease;' +
							 _tabs(1) + '}' +

							 _tabs(1) + '.snip1362 img {' +
							   	_tabs(2) + 'max-width: 100%;' +
							   	_tabs(2) + 'vertical-align: top;' +
							 _tabs(1) + '}' +

							 _tabs(1) + '.snip1362 figcaption {' +
							   	_tabs(2) + 'position: absolute;' +
							   	_tabs(2) + 'top: calc(77%);' +
							   	_tabs(2) + 'width: 100%;' +
							   	_tabs(2) + 'background-color: #000;' +
							   	_tabs(2) + 'padding: 20px 25px 65px;' +
							 _tabs(1) + '}' +

							 _tabs(1) + '.snip1362 figcaption:before {' +
							   	_tabs(2) + 'position: absolute;' +
							   	_tabs(2) + 'content: "";' +
							   	_tabs(2) + 'z-index: 2;' +
							   	_tabs(2) + 'bottom: 100%;' +
							   	_tabs(2) + 'left: 0;' +
							   	_tabs(2) + 'width: 100%;' +
							   	_tabs(2) + 'height: 40px;' +
							   	_tabs(2) + 'background-image: -webkit-linear-gradient(top, transparent 0%, #000 100%);' +
							   	_tabs(2) + 'background-image: linear-gradient(to bottom, transparent 0%, #000 100%);' +
							 _tabs(1) + '}' +

							 _tabs(1) + '.snip1362 h3,' +
							 _tabs(1) + '.snip1362 p {' +
							   	_tabs(2) + 'margin: 0 0 10px;' +
							 _tabs(1) + '}' +

							 _tabs(1) + '.snip1362 h3 {' +
							   	_tabs(2) + 'font-size: 18px;' +
							   	_tabs(2) + 'line-height: 1.2em;' +
							   	_tabs(2) + 'text-transform: uppercase;' +
							   	_tabs(2) + 'color: #fff;' +
							 _tabs(1) + '}' +

							 _tabs(1) + '.snip1362 p {' +
							   	_tabs(2) + 'font-size: 14px;' +
							   	_tabs(2) + 'letter-spacing: 1px;' +
							   	_tabs(2) + 'opacity: 0.9;' +
							   	_tabs(2) + 'color: #fff;' +
							 _tabs(1) + '}' +

							 _tabs(1) + '.snip1362:hover figcaption,' +
							 _tabs(1) + '.snip1362.hover figcaption {' +
							   	_tabs(2) + 'top: 120px;' +
							 _tabs(1) + '}' +
						'\n</style>' +
                        '') +
                        '">' +

					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<figure class="snip1362">' +
							_tabs(1) + '<a href="#"><img src="assets/minimalist-blocks/images/ben-dutton-1190703-unsplash-Xgeou1.jpg" alt=""></a>' +
							_tabs(1) + '<figcaption>' +
								_tabs(2) + '<h3>Image Caption</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
							_tabs(1) + '</figcaption>' +
						'\n</figure>' +
					'</div>' +
					'<div class="column third">' +
						'<figure class="snip1362">' +
							_tabs(1) + '<a href="#"><img src="assets/minimalist-blocks/images/marita-kavelashvili-1151412-unsplash-qmgMV1.jpg" alt=""></a>' +
							_tabs(1) + '<figcaption>' +
								_tabs(2) + '<h3>Image Caption</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
							_tabs(1) + '</figcaption>' +
						'\n</figure>' +
					'</div>' +
					'<div class="column third">' +
						'<figure class="snip1362">' +
							_tabs(1) + '<a href="#"><img src="assets/minimalist-blocks/images/bobby-stevenson-1150458-unsplash-4HZHn1.jpg" alt=""></a>' +
							_tabs(1) + '<figcaption>' +
								_tabs(2) + '<h3>Image Caption</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
							_tabs(1) + '</figcaption>' +
						'\n</figure>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/photos-59.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-48 is-title1-48 is-title-lite">GALLERY</h1>' +
						'\n<p style="border-top: 2px solid #333; width: 40px; display: inline-block;"></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full" data-noedit="" data-html="' +

						encodeURIComponent('<div>&nbsp;</div>' +
						'\n<style>' +
							 _tabs(1) + '.snip1362 {' +
							   	_tabs(2) + 'position: relative;' +
							  	_tabs(2) + 'overflow: hidden;' +
							   	_tabs(2) + 'margin: 10px;' +
							  	_tabs(2) + 'min-width: 230px;' +
							   	_tabs(2) + 'max-width: 315px;' +
							   	_tabs(2) + 'width: 100%;' +
							   	_tabs(2) + 'color: #141414;' +
							   	_tabs(2) + 'text-align: left;' +
							   	_tabs(2) + 'line-height: 1.4em;' +
							   	_tabs(2) + 'font-size: 16px;' +
							 _tabs(1) + '}' +

							 _tabs(1) + '.snip1362 * {' +
							   	_tabs(2) + '-webkit-box-sizing: border-box;' +
							   	_tabs(2) + 'box-sizing: border-box;' +
							   	_tabs(2) + '-webkit-transition: all 0.35s ease;' +
							   	_tabs(2) + 'transition: all 0.35s ease;' +
							 _tabs(1) + '}' +

							 _tabs(1) + '.snip1362 img {' +
							   	_tabs(2) + 'max-width: 100%;' +
							   	_tabs(2) + 'vertical-align: top;' +
							 _tabs(1) + '}' +

							 _tabs(1) + '.snip1362 figcaption {' +
							   	_tabs(2) + 'position: absolute;' +
							   	_tabs(2) + 'top: calc(77%);' +
							   	_tabs(2) + 'width: 100%;' +
							   	_tabs(2) + 'background-color: #000;' +
							   	_tabs(2) + 'padding: 20px 25px 65px;' +
							 _tabs(1) + '}' +

							 _tabs(1) + '.snip1362 figcaption:before {' +
							   	_tabs(2) + 'position: absolute;' +
							   	_tabs(2) + 'content: "";' +
							   	_tabs(2) + 'z-index: 2;' +
							   	_tabs(2) + 'bottom: 100%;' +
							   	_tabs(2) + 'left: 0;' +
							   	_tabs(2) + 'width: 100%;' +
							   	_tabs(2) + 'height: 40px;' +
							   	_tabs(2) + 'background-image: -webkit-linear-gradient(top, transparent 0%, #000 100%);' +
							   	_tabs(2) + 'background-image: linear-gradient(to bottom, transparent 0%, #000 100%);' +
							 _tabs(1) + '}' +

							 _tabs(1) + '.snip1362 h3,' +
							 _tabs(1) + '.snip1362 p {' +
							   	_tabs(2) + 'margin: 0 0 10px;' +
							 _tabs(1) + '}' +

							 _tabs(1) + '.snip1362 h3 {' +
							   	_tabs(2) + 'font-size: 18px;' +
							   	_tabs(2) + 'line-height: 1.2em;' +
							   	_tabs(2) + 'text-transform: uppercase;' +
							   	_tabs(2) + 'color: #fff;' +
							 _tabs(1) + '}' +

							 _tabs(1) + '.snip1362 p {' +
							   	_tabs(2) + 'font-size: 14px;' +
							   	_tabs(2) + 'letter-spacing: 1px;' +
							   	_tabs(2) + 'opacity: 0.9;' +
							   	_tabs(2) + 'color: #fff;' +
							 _tabs(1) + '}' +

							 _tabs(1) + '.snip1362:hover figcaption,' +
							 _tabs(1) + '.snip1362.hover figcaption {' +
							   	_tabs(2) + 'top: 120px;' +
							 _tabs(1) + '}' +
						'\n</style>' +
                        '') +
                        '">' +

					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<figure class="snip1362">' +
							_tabs(1) + '<a href="#"><img src="assets/minimalist-blocks/images/ben-dutton-1190703-unsplash-Xgeou1.jpg" alt=""></a>' +
							_tabs(1) + '<figcaption>' +
								_tabs(2) + '<h3>Image Caption</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
							_tabs(1) + '</figcaption>' +
						'\n</figure>' +
					'</div>' +
					'<div class="column half">' +
						'<figure class="snip1362">' +
							_tabs(1) + '<a href="#"><img src="assets/minimalist-blocks/images/marita-kavelashvili-1151412-unsplash-qmgMV1.jpg" alt=""></a>' +
							_tabs(1) + '<figcaption>' +
								_tabs(2) + '<h3>Image Caption</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
							_tabs(1) + '</figcaption>' +
						'\n</figure>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-20"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<figure class="snip1362">' +
							_tabs(1) + '<a href="#"><img src="assets/minimalist-blocks/images/luca-baggio-112868-unsplash-npM6K2.jpg" alt=""></a>' +
							_tabs(1) + '<figcaption>' +
								_tabs(2) + '<h3>Image Caption</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
							_tabs(1) + '</figcaption>' +
						'\n</figure>' +
					'</div>' +
					'<div class="column half">' +
						'<figure class="snip1362">' +
							_tabs(1) + '<a href="#"><img src="assets/minimalist-blocks/images/bobby-stevenson-1150458-unsplash-4HZHn1.jpg" alt=""></a>' +
							_tabs(1) + '<figcaption>' +
								_tabs(2) + '<h3>Image Caption</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
							_tabs(1) + '</figcaption>' +
						'\n</figure>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/photos-60.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-54" style="letter-spacing: 4px; margin-top: 0px; line-height: 1;">OUR PORTFOLIO</h1>' +
						'\n<p class="size-16" style="letter-spacing: 5px;">SIMPLY BEAUTIFUL</p>' +
						'\n<p style="border-top: 1px solid #000; width: 60px; display: inline-block; margin-top: 0;"></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix" style="padding: 0;">' +
					'<div class="column half" style="padding: 0;">' +
						'<img src="assets/minimalist-blocks/images/matt-rich-1367037-unsplash-9zTZn1.jpg" alt="" style="margin: 0;float: left;">' +
					'</div>' +
					'<div class="column half" style="padding: 0;">' +
						'<img src="assets/minimalist-blocks/images/lysander-yuen-1361159-unsplash-k3JvC2.jpg" alt="" style="margin: 0;float: left;">' +
						'\n<img src="assets/minimalist-blocks/images/pierre-chatel-innocenti-483198-unsplash-(1)-8HZVN1.jpg" style="margin: 0">' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/photos-61.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p class="size-16" style="line-height: 1; letter-spacing: 6px;">DISCOVER</p>' +
						'\n<h1 class="size-38" style="letter-spacing: 4px;">LATEST WORK</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/ben-neale-206133-unsplash-mhZaz1.jpg" alt="">' +
						'\n<img src="assets/minimalist-blocks/images/mitchell-hollander-205952-unsplash-(1)-PtBwL1.jpg" alt="">' +
					'</div>' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/khai-sze-ong-308080-unsplash-(1)-AaIpd2.jpg" alt="">' +
						'\n<img src="assets/minimalist-blocks/images/plush-design-studio-479814-unsplash-9dPBJ4.jpg" alt="">' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/photos-62.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 style="text-align: center; letter-spacing: 2px;">GALLERY</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full" data-html="' +

						encodeURIComponent('<div>&nbsp;</div>' +
						'\n<style>' +
							_tabs(1) + '.gallery1 {' +
							  	_tabs(2) + 'background-color: #000;' +
							 	_tabs(2) + 'display: inline-block;' +
							  	_tabs(2) + 'max-width: 315px;' +
							  	_tabs(2) + 'min-width: 230px;' +
							  	_tabs(2) + 'overflow: hidden;' +
							  	_tabs(2) + 'position: relative;' +
							  	_tabs(2) + 'text-align: center;' +
							  	_tabs(2) + 'width: 100%;' +
							_tabs(1) + '}' +

							_tabs(1) + '.gallery1 *,' +
							_tabs(1) + '.gallery1 *:before {' +
							  	_tabs(2) + '-webkit-box-sizing: border-box;' +
							  	_tabs(2) + 'box-sizing: border-box;' +
							  	_tabs(2) + '-webkit-transition: all 0.35s ease;' +
							  	_tabs(2) + 'transition: all 0.35s ease;' +
							_tabs(1) + '}' +

							_tabs(1) + '.gallery1 img {' +
							  	_tabs(2) + 'backface-visibility: hidden;' +
							  	_tabs(2) + 'max-width: 100%;' +
							  	_tabs(2) + 'vertical-align: top;' +
							_tabs(1) + '}' +

							_tabs(1) + '.gallery1 figcaption {' +
							  	_tabs(2) + 'bottom: 20px;' +
							  	_tabs(2) + 'left: 0;' +
							  	_tabs(2) + 'position: absolute;' +
							  	_tabs(2) + 'z-index: 0;' +
							_tabs(1) + '}' +

							_tabs(1) + '.gallery1 figcaption:before {' +
							  	_tabs(2) + 'background-color: #ffffff;' +
							  	_tabs(2) + 'bottom: -2px;' +
							  	_tabs(2) + 'content: "";' +
							  	_tabs(2) + 'left: 0;' +
							  	_tabs(2) + 'position: absolute;' +
							  	_tabs(2) + 'right: 100%;' +
							  	_tabs(2) + 'top: -2px;' +
							  	_tabs(2) + 'z-index: -1;' +
							_tabs(1) + '}' +

							_tabs(1) + '.gallery1 h3 {' +
							  	_tabs(2) + 'background-color: #2f2d2d;' +
							  	_tabs(2) + 'color: #ffffff;' +
							  	_tabs(2) + 'font-size: 14px;' +
							  	_tabs(2) + 'letter-spacing: 2px;' +
							  	_tabs(2) + 'margin: 0;' +
							  	_tabs(2) + 'padding: 5px 10px;' +
							  	_tabs(2) + 'text-transform: uppercase;' +
							  	_tabs(2) + 'z-index: 1;' +
							_tabs(1) + '}' +

							_tabs(1) + '.gallery1:hover > img,' +
							_tabs(1) + '.gallery1.hover > img {' +
							  	_tabs(2) + 'opacity: 0.3;' +
							_tabs(1) + '}' +

							_tabs(1) + '.gallery1:hover figcaption:before,' +
							_tabs(1) + '.gallery1.hover figcaption:before {' +
							  	_tabs(2) + 'right: -2px;' +
							_tabs(1) + '}' +
						'\n</style>' +
                        '') +
                        '">' +

					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<figure class="gallery1">' +
							_tabs(1) + '<img src="assets/minimalist-blocks/images/christelle-bourgeois-97314-Wse0p1.jpg" alt="" style="margin: 0;float: left;">' +
							_tabs(1) + '<figcaption>' +
								_tabs(2) + '<h3>IMAGE CAPTION</h3>' +
							_tabs(1) + '</figcaption>' +
						'\n</figure>' +
					'</div>' +
					'<div class="column third">' +
						'<figure class="gallery1">' +
							_tabs(1) + '<img src="assets/minimalist-blocks/images/pexels-photo-1534924-thWtu2.jpg" alt="" style="margin: 0;float: left;">' +
							_tabs(1) + '<figcaption>' +
								_tabs(2) + '<h3>IMAGE CAPTION</h3>' +
							_tabs(1) + '</figcaption>' +
						'\n</figure>' +
					'</div>' +
					'<div class="column third">' +
						'<figure class="gallery1">' +
							_tabs(1) + '<img src="assets/minimalist-blocks/images/samuel-zeller-72120-unsplash-vH0rL3.jpg" alt="" style="margin: 0;float: left;">' +
							_tabs(1) + '<figcaption>' +
								_tabs(2) + '<h3>IMAGE CAPTION</h3>' +
							_tabs(1) + '</figcaption>' +
						'\n</figure>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/photos-63.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 style="text-align: center; letter-spacing: 2px;">GALLERY</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full" data-html="' +

						encodeURIComponent('<div>&nbsp;</div>' +
						'\n<style>' +
							_tabs(1) + '.gallery2 {' +
							  	_tabs(2) + 'background-color: #000;' +
							  	_tabs(2) + 'display: inline-block;' +
							  	_tabs(2) + 'max-width: 410px;' +
							  	_tabs(2) + 'min-width: 230px;' +
							  	_tabs(2) + 'overflow: hidden;' +
							  	_tabs(2) + 'position: relative;' +
							  	_tabs(2) + 'text-align: center;' +
							  	_tabs(2) + 'width: 100%;' +
							_tabs(1) + '}' +

							_tabs(1) + '.gallery2 *,' +
							_tabs(1) + '.gallery2 *:before {' +
							  	_tabs(2) + '-webkit-box-sizing: border-box;' +
							  	_tabs(2) + 'box-sizing: border-box;' +
							  	_tabs(2) + '-webkit-transition: all 0.35s ease;' +
							  	_tabs(2) + 'transition: all 0.35s ease;' +
							_tabs(1) + '}' +

							_tabs(1) + '.gallery2 img {' +
							  	_tabs(2) + 'backface-visibility: hidden;' +
							  	_tabs(2) + 'max-width: 100%;' +
							  	_tabs(2) + 'vertical-align: top;' +
							_tabs(1) + '}' +

							_tabs(1) + '.gallery2 figcaption {' +
							  	_tabs(2) + 'bottom: 20px;' +
							  	_tabs(2) + 'left: 0;' +
							  	_tabs(2) + 'position: absolute;' +
							  	_tabs(2) + 'z-index: 0;' +
							_tabs(1) + '}' +

							_tabs(1) + '.gallery2 figcaption:before {' +
							  	_tabs(2) + 'background-color: #ffffff;' +
							  	_tabs(2) + 'bottom: -2px;' +
							  	_tabs(2) + 'content: "";' +
							  	_tabs(2) + 'left: 0;' +
							  	_tabs(2) + 'position: absolute;' +
							  	_tabs(2) + 'right: 100%;' +
							  	_tabs(2) + 'top: -2px;' +
							  	_tabs(2) + 'z-index: -1;' +
							_tabs(1) + '}' +

							_tabs(1) + '.gallery2 h3 {' +
							  	_tabs(2) + 'background-color: #2f2d2d;' +
							  	_tabs(2) + 'color: #ffffff;' +
							  	_tabs(2) + 'font-size: 14px;' +
							  	_tabs(2) + 'letter-spacing: 2px;' +
							  	_tabs(2) + 'margin: 0;' +
							  	_tabs(2) + 'padding: 5px 10px;' +
							  	_tabs(2) + 'text-transform: uppercase;' +
							  	_tabs(2) + 'z-index: 1;' +
							_tabs(1) + '}' +

							_tabs(1) + '.gallery2:hover > img,' +
							_tabs(1) + '.gallery2.hover > img {' +
							  	_tabs(2) + 'opacity: 0.3;' +
							_tabs(1) + '}' +

							_tabs(1) + '.gallery2:hover figcaption:before,' +
							_tabs(1) + '.gallery2.hover figcaption:before {' +
							  	_tabs(2) + 'right: -2px;' +
							_tabs(1) + '}' +
						'\n</style>' +
                        '') +
                        '">' +

					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<figure class="gallery2">' +
							_tabs(1) + '<img src="assets/minimalist-blocks/images/christelle-bourgeois-97314-Wse0p1.jpg" alt="" style="margin: 0;float: left;">' +
							_tabs(1) + '<figcaption>' +
								_tabs(2) + '<h3>IMAGE CAPTION</h3>' +
							_tabs(1) + '</figcaption>' +
						'\n</figure>' +
					'</div>' +
					'<div class="column half">' +
						'<figure class="gallery2">' +
							_tabs(1) + '<img src="assets/minimalist-blocks/images/pexels-photo-1534924-thWtu2.jpg" alt="" style="margin: 0;float: left;">' +
							_tabs(1) + '<figcaption>' +
								_tabs(2) + '<h3>IMAGE CAPTION</h3>' +
							_tabs(1) + '</figcaption>' +
						'\n</figure>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<figure class="gallery2">' +
							_tabs(1) + '<img src="assets/minimalist-blocks/images/pierre-chatel-innocenti-1151713-unsplash-csyQ11.jpg" alt="" style="margin: 0;float: left;">' +
							_tabs(1) + '<figcaption>' +
								_tabs(2) + '<h3>IMAGE CAPTION</h3>' +
							_tabs(1) + '</figcaption>' +
						'\n</figure>' +
					'</div>' +
					'<div class="column half">' +
						'<figure class="gallery2">' +
							_tabs(1) + '<img src="assets/minimalist-blocks/images/samuel-zeller-72120-unsplash-vH0rL3.jpg" alt="" style="margin: 0;float: left;">' +
							_tabs(1) + '<figcaption>' +
								_tabs(2) + '<h3>IMAGE CAPTION</h3>' +
							_tabs(1) + '</figcaption>' +
						'\n</figure>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/photos-64.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-50" style="letter-spacing: 3px;">OUR WORKS</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<p class="size-68" style="line-height: 1.4">01.</p>' +
						'\n<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/thought-catalog-464584-diOOa1.jpg" alt="">' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/alex-iby-480498-unsplash-El35l2.jpg" alt="">' +
					'</div>' +
					'<div class="column half">' +
						'<p class="size-68" style="line-height: 1.4">02.</p>' +
						'\n<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<p class="size-68" style="line-height: 1.4">03.</p>' +
						'\n<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/michal-grosicki-473054-L0vCz3.jpg" alt="">' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/photos-65.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full right">' +
						'<img src="assets/minimalist-blocks/images/team-easil-1383612-unsplash-w0ox71.jpg" alt="">' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-20"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 style="text-align: left; font-weight: bold;">Sunday Lovely Sunday</h1>' +
						'\n<p style="text-align: left; line-height: 1.2;">Lorem Ipsum is dummy text of the industry</p>' +
						'\n<p style="border-top: 2px solid #333; width: 70px; display: inline-block;margin-top:0"></p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/photos-66.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix" style="padding: 0;">' +
					'<div class="column third" style="position: relative;">' +
						'<div class="display margin-right-1024-reset" style="text-shadow: rgba(0, 0, 0, 0.15) 0px 15px 50px;margin-right: -80px;margin-top: 40px;">' +
							'<h1 style="text-align: right; letter-spacing: 1px;">Less stuff, more meaning</h1>' +
							'\n<p style="text-align: right;">Fall in love with simplicity</p>' +
						'</div>' +
					'</div>' +
					'<div class="column third" style="padding: 0;">' +
						'<img src="assets/minimalist-blocks/images/tanalee-youngblood-341674-unsplash-(1)-EMqoU1.jpg" alt="" style="margin: 0;float: left;">' +
					'</div>' +
					'<div class="column third" style="padding: 0;">' +
						'<img src="assets/minimalist-blocks/images/ruslan-bardash-351288-unsplash-(1)-4upxV2.jpg" alt="" style="margin: 0;float: left;">' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/photos-67.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix" style="padding: 0;">' +
					'<div class="column third" style="padding: 0;">' +
						'<img src="assets/minimalist-blocks/images/kaizen-nguy-n-760637-unsplash-(1)-d9SQr1.jpg" alt="" style="margin: 0;float: left;">' +
					'</div>' +
					'<div class="column third" style="padding: 0;">' +
						'<img src="assets/minimalist-blocks/images/joanna-kosinska-547318-unsplash-(1)-SlAHZ1.jpg" alt="" style="margin: 0;float: left;">' +
					'</div>' +
					'<div class="column third" style="position: relative;">' +
						'<div class="display margin-left-1024-reset" style="text-shadow: rgba(0, 0, 0, 0.15) 0px 15px 50px; margin-left: -80px; margin-top: 40px;">' +
							'<h1>Less stuff, more meaning</h1>' +
							'\n<p>Fall in love with simplicity</p>' +
						'</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/photos-68.png',
		    'category': '102',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column two-third">' +
						'<img src="assets/minimalist-blocks/images/nordwood-themes-1394844-unsplash-HlbWv1.jpg" alt="">' +
					'</div>' +
					'<div class="column third">' +
						'<h1 class="size-48 margin-left-1024-reset" style="text-shadow: rgba(0, 0, 0, 0.15) 0px 15px 50px; margin-left: -110px; margin-top: 50px; font-weight: bold;">Good for health, good for you.</h1>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/profile-49.png',
		    'category': '103',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 style="text-align: center; font-weight: bold;">Our Story</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-100"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<p style="margin-top: 5px">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
						'\n<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<div class="is-card is-light-text" style="width:calc(100%);background-color: #000;">' +
							_tabs(1) + '<div style="padding:20px;width:100%;box-sizing:border-box;text-align:center;border:1px solid #ffffff;">' +
								_tabs(2) + '<h1 class="size-21">Company Name</h1>' +
								_tabs(2) + '<p style="text-align: center;">1st floor, Building Name.<br>City, State 12345<br>P: (123) 456 7890<br>&nbsp;companyname@example.com</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/profile-50.png',
		    'category': '103',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<img src="assets/minimalist-blocks/images/chloe-simpson-1351644-unsplash-4OByq1.jpg" alt="">' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column center half">' +
						'<h1 class="size-32 is-title4-32" style="letter-spacing: 5px; text-align: right;">ABOUT US</h1>' +
					'</div>' +
					'<div class="column half">' +
						'<p style="text-align: justify;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/profile-51.png',
		    'category': '103',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full right">' +
						'<h2 class="size-32 is-title3-32 is-title-lite" style="display: inline-block;">Our Story.</h2>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
						'\n<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/liam-martens-1278599-unsplash-(1)-XEMxJ1.jpg" alt="" style="margin: 0;float: left;">' +
					'</div>' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/fuyong-hua-274676-unsplash-GalVi3.jpg" alt="" style="margin: 0;float: left;">' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/profile-52.png',
		    'category': '103',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h2 class="size-32 is-title5-32 is-title-lite" style="display: inline-block; text-align: center;">ABOUT US</h2>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div style="width:100%;max-width: 500px; margin: 0 auto">' +
							_tabs(1) + '<p style="text-align: center;">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing industry.</p>' +
						'\n</div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<img src="assets/minimalist-blocks/images/kara-eads-1297668-unsplash-(1)-0PHL11.jpg" alt="">' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/profile-53.png',
		    'category': '103',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<h1 class="size-48" style="font-weight: bold;">About us</h1>' +
						'\n<div class="spacer height-40"></div>' +
						'\n<div style="border-left: 2px solid #000;">' +
							_tabs(1) + '<p style="padding-left:20px">Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
						'\n</div>' +
					'</div>' +
					'<div class="column two-third">' +
						'<img src="assets/minimalist-blocks/images/orlova-maria-1351139-unsplash-(1)-pHgYc1.jpg" alt="">' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/profile-54.png',
		    'category': '103',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<div style="padding-right: 20px">' +
							_tabs(1) + '<img src="assets/minimalist-blocks/images/rowan-neal-1346296-unsplash-LllxW1.jpg" alt="">' +
						'\n</div>' +
					'</div>' +
					'<div class="column half right">' +
						'<h2 class="size-32 is-title4-32 is-title-lite" style="display: inline-block;">About Us</h2>' +
						'\n<div class="spacer height-60"></div>' +
						'\n<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
						'\n<div class="spacer height-40"></div>' +
						'\n<div class="is-social size-21">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter-outline" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook-outline" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/profile-55.png',
		    'category': '103',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<h2 class="size-32 is-title4-32 is-title-lite" style="display: inline-block;">About Us</h2>' +
						'\n<div class="spacer height-60"></div>' +
						'\n<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
						'\n<div class="spacer height-40"></div>' +
						'\n<div class="is-social size-21">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter-outline" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook-outline" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
						'\n</div>' +
					'</div>' +
					'<div class="column half">' +
						'<div style="padding-left: 20px">' +
							_tabs(1) + '<img src="assets/minimalist-blocks/images/simone-hutsch-750899-unsplash-xPuxl1.jpg" alt="">' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/profile-56.png',
		    'category': '103',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 style="letter-spacing: 3px;">ABOUT</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half" style="border-right: 2px solid #000">' +
						'<p style="text-align: justify; padding-right: 5px">Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
					'</div>' +
					'<div class="column half">' +
						'<p style="text-align: justify; padding-left: 10px">Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="is-social size-21">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter-outline" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook-outline" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/profile-57.png',
		    'category': '103',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-54" style="letter-spacing: 5px;">OUR TEAM</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-100"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix" style="padding: 0;">' +
					'<div class="column third" style="padding: 0;">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<img src="assets/minimalist-blocks/images/josue-escoto-1377297-unsplash-kUbGk1.jpg" alt="" style="border-radius: 500px;">' +
								_tabs(2) + '<h3 class="size-24">Donna Booth</h3>' +
								_tabs(2) + '<p class="size-14" style="margin-top:0; line-height:1.2">Web Designer</p>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the typesetting industry.</p>' +
								_tabs(2) + '<div class="is-social edit" style="margin:2em 0">' +
									_tabs(3) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter-outline" style="margin-right: 1em"></i></a>' +
									_tabs(3) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook-outline" style="margin-right: 1em"></i></a>' +
									_tabs(3) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third" style="padding: 0;">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);transform: scale(1.08);border-top: 3px solid #fb6907;">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<img src="assets/minimalist-blocks/images/nikita-belov-716612-unsplash-yXUwe2.jpg" alt="" style="border-radius: 500px;">' +
								_tabs(2) + '<h3 class="size-24">Laura Keihl</h3>' +
								_tabs(2) + '<p class="size-14" style="margin-top: 0; line-height: 1.2">Creative Director</p>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the typesetting industry.</p>' +
								_tabs(2) + '<div class="is-social edit" style="margin:2em 0">' +
									_tabs(3) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter-outline" style="margin-right: 1em"></i></a>' +
									_tabs(3) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook-outline" style="margin-right: 1em"></i></a>' +
									_tabs(3) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third" style="padding: 0;">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<img src="assets/minimalist-blocks/images/tom-pumford-1347370-small-LWm1q1.jpg" alt="" style="border-radius: 500px;">' +
								_tabs(2) + '<h3 class="size-24">Matthew Hansen</h3>' +
								_tabs(2) + '<p class="size-14" style="margin-top:0; line-height:1.2">Web Developer</p>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the typesetting industry.</p>' +
								_tabs(2) + '<div class="is-social edit" style="margin:2em 0">' +
									_tabs(3) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter-outline" style="margin-right: 1em"></i></a>' +
									_tabs(3) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook-outline" style="margin-right: 1em"></i></a>' +
									_tabs(3) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/profile-58.png',
		    'category': '103',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-50" style="letter-spacing: 4px;">MEET THE TEAM</h1>' +
						'\n<p style="letter-spacing: 5px;">Here are our awesome team</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column center third">' +
						'<img src="assets/minimalist-blocks/images/kylie-lugo-1367073-unsplash-rKIyy1.jpg" alt="">' +
						'\n<h3 class="size-21">Chloe Moses</h3>' +
						'\n<p class="size-14" style="color: rgb(136, 136, 136);line-height: 1">Web Developer</p>' +
						'\n<div class="is-social size-14" style="margin:2em 0">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter-outline" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook-outline" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
						'\n</div>' +
					'</div>' +
					'<div class="column center third">' +
						'<img src="assets/minimalist-blocks/images/jonathan-borba-1370425-unsplash-obOdT2.jpg" alt="">' +
						'\n<h3 class="size-21">Kevin Smith</h3>' +
						'\n<p class="size-14" style="color: rgb(136, 136, 136);line-height: 1">CEO & Founder</p>' +
						'\n<div class="is-social size-14" style="margin:2em 0">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter-outline" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook-outline" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
						'\n</div>' +
					'</div>' +
					'<div class="column center third">' +
						'<img src="assets/minimalist-blocks/images/alexandra-marcu-1335102-unsplash-Z6r0x1.jpg" alt="">' +
						'\n<h3 class="size-21">Jennifer Graves</h3>' +
						'\n<p class="size-14" style="color: rgb(136, 136, 136);line-height: 1">Graphic Designer</p>' +
						'\n<div class="is-social size-14" style="margin:2em 0">' +
							_tabs(1) + '<a href="https://twitter.com/"><i class="icon ion-social-twitter-outline" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="https://www.facebook.com/"><i class="icon ion-social-facebook-outline" style="margin-right: 1em"></i></a>' +
							_tabs(1) + '<a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/products-24.png',
		    'category': '104',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-46" style="letter-spacing: 4px;">SERVICES WE PROVIDE</h1>' +
						'\n<p style="border-bottom: 2px solid #333; width: 80px; display: inline-block; margin-top: 25px"></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<div class="row clearfix">' +
							_tabs(1) + '<div class="column fourth center">' +
								_tabs(2) + '<div class="is-card is-card-circle is-light-text" style="width:50px;height:50px;padding:5px;background: #e6e6e6;">' +
									_tabs(3) + '<div class="is-card-content-centered">' +
										_tabs(4) + '<i class="icon ion-android-create size-24" style="color: #5f5f5f;"></i>' +
									_tabs(3) + '</div>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
							_tabs(1) + '<div class="column two-fourth">' +
								_tabs(2) + '<h3 class="size-24" style="margin-top: 3px">Service One</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column half">' +
						'<div class="row clearfix">' +
							_tabs(1) + '<div class="column fourth center">' +
								_tabs(2) + '<div class="is-card is-card-circle is-light-text" style="width:50px;height:50px;padding:5px;background:#e6e6e6;">' +
									_tabs(3) + '<div class="is-card-content-centered">' +
										_tabs(4) + '<i class="icon ion-android-desktop size-24" style="color: #5f5f5f"></i>' +
									_tabs(3) + '</div>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
							_tabs(1) + '<div class="column two-fourth">' +
								_tabs(2) + '<h3 class="size-24" style="margin-top: 3px">Service Two</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-20"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<div class="row clearfix">' +
							_tabs(1) + '<div class="column fourth center">' +
								_tabs(2) + '<div class="is-card is-card-circle is-light-text" style="width:50px;height:50px;padding:5px;background:#e6e6e6;">' +
									_tabs(3) + '<div class="is-card-content-centered">' +
										_tabs(4) + '<i class="icon ion-code size-24" style="color: #5f5f5f"></i>' +
									_tabs(3) + '</div>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
							_tabs(1) + '<div class="column two-fourth">' +
								_tabs(2) + '<h3 class="size-24" style="margin-top: 3px">Service Three</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column half">' +
						'<div class="row clearfix">' +
							_tabs(1) + '<div class="column fourth center">' +
								_tabs(2) + '<div class="is-card is-card-circle is-light-text" style="width:50px;height:50px;padding:5px;background:#e6e6e6;">' +
									_tabs(3) + '<div class="is-card-content-centered">' +
										_tabs(4) + '<i class="icon ion-earth size-24" style="color: #5f5f5f"></i>' +
									_tabs(3) + '</div>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
							_tabs(1) + '<div class="column two-fourth">' +
								_tabs(2) + '<h3 class="size-24" style="margin-top: 3px">Service Four</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

        {
            'thumbnail': 'preview/products-25.png',
            'category': '104',
            'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p class="size-16" style="text-align: center; letter-spacing: 9px; text-transform: uppercase;">WHAT WE DO</p>' +
						'\n<h1 class="size-42" style="letter-spacing: 4px; text-align: center; text-transform: uppercase;">SERVICES WE OFFER</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column center third">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);">' +
							_tabs(1) + '<div style="padding:30px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<h3 class="size-84" style="letter-spacing: 1px; font-style: italic;">01</h3>' +
								_tabs(2) + '<p style="border-top: 2px solid #000; width: 20%; display: inline-block; margin-top: 0"></p>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column center third">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);">' +
							_tabs(1) + '<div style="padding:30px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<h3 class="size-84" style="letter-spacing: 1px; font-style: italic;">02</h3>' +
								_tabs(2) + '<p style="border-top: 2px solid #000; width: 20%; display: inline-block; margin-top: 0"></p>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column center third">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);">' +
							_tabs(1) + '<div style="padding:30px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<h3 class="size-84" style="letter-spacing: 1px; font-style: italic;">03</h3>' +
								_tabs(2) + '<p style="border-top: 2px solid #000; width: 20%; display: inline-block; margin-top: 0"></p>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>'
        },

        {
            'thumbnail': 'preview/products-26.png',
            'category': '104',
            'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 style="text-align: center; letter-spacing: 2px;">OUR SERVICES</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<div class="row clearfix">' +
							_tabs(1) + '<div class="column fourth center">' +
								_tabs(2) + '<div class="is-card is-light-text" style="width:50px;height:50px;padding:5px;background: #00cab8;">' +
									_tabs(3) + '<div class="is-card-content-centered">' +
										_tabs(4) + '<i class="icon ion-android-favorite-outline size-24"></i>' +
									_tabs(3) + '</div>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
							_tabs(1) + '<div class="column two-fourth">' +
								_tabs(2) + '<h3 class="size-24" style="margin-top: 3px">Creative Designs</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column half">' +
						'<div class="row clearfix">' +
							_tabs(1) + '<div class="column fourth center">' +
								_tabs(2) + '<div class="is-card is-light-text" style="width:50px;height:50px;padding:5px;background: #00cab8;">' +
									_tabs(3) + '<div class="is-card-content-centered">' +
										_tabs(4) + '<i class="icon ion-android-create size-24"></i>' +
									_tabs(3) + '</div>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
							_tabs(1) + '<div class="column two-fourth">' +
								_tabs(2) + '<h3 class="size-24" style="margin-top: 3px">Web Development</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<div class="row clearfix">' +
							_tabs(1) + '<div class="column fourth center">' +
								_tabs(2) + '<div class="is-card is-light-text" style="width:50px;height:50px;padding:5px;background: #00cab8;">' +
									_tabs(3) + '<div class="is-card-content-centered">' +
										_tabs(4) + '<i class="icon ion-android-globe size-24"></i>' +
									_tabs(3) + '</div>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
							_tabs(1) + '<div class="column two-fourth">' +
								_tabs(2) + '<h3 class="size-24" style="margin-top: 3px">Brand Building</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column half">' +
						'<div class="row clearfix">' +
							_tabs(1) + '<div class="column fourth center">' +
								_tabs(2) + '<div class="is-card is-light-text" style="width:50px;height:50px;padding:5px;background: #00cab8;">' +
									_tabs(3) + '<div class="is-card-content-centered">' +
										_tabs(4) + '<i class="icon ion-android-chat size-24"></i>' +
									_tabs(3) + '</div>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
							_tabs(1) + '<div class="column two-fourth">' +
								_tabs(2) + '<h3 class="size-24" style="margin-top: 3px">Support</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>'
        },

        {
            'thumbnail': 'preview/products-27.png',
            'category': '104',
            'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="letter-spacing: 5px;">DISCOVER WHAT\'S NEW</p>' +
						'\n<h1 class="size-68" style="letter-spacing: 5px; font-style: normal;">OUR MENU</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix" style="padding: 0;">' +
					'<div class="column half" style="padding: 0;">' +
						'<div class="is-card max-390 is-dark-text" style="width:calc(100%);background-color: #fbfbfb;">' +
							_tabs(1) + '<img src="assets/minimalist-blocks/images/gabrielle-henderson-1375813-unsplash-r9m0T1.jpg" alt="" class="margin-0">' +
							_tabs(1) + '<div style="padding:30px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<h3 class="size-24 margin-0" style="letter-spacing: 1px;">Main Menu</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
								_tabs(2) + '<div><a href="#" class="is-btn is-btn-ghost1 is-upper is-rounded-30 is-btn-small">View All</a></div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column half" style="padding: 0;">' +
						'<div class="is-card max-390 is-dark-text" style="width:calc(100%);">' +
							_tabs(1) + '<img src="assets/minimalist-blocks/images/miguel-andrade-1377611-unsplash-t1GK02.jpg" alt="" class="margin-0">' +
							_tabs(1) + '<div style="padding:30px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<h3 class="size-24 margin-0" style="letter-spacing: 1px;">A\'la Carte</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
								_tabs(2) + '<div><a href="#" class="is-btn is-btn-ghost1 is-upper is-rounded-30 is-btn-small">View All</a></div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>'
        },

        {
            'thumbnail': 'preview/products-28.png',
            'category': '104',
            'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p style="letter-spacing: 5px;">DISCOVER WHAT\'S NEW</p>' +
						'\n<h1 class="size-68" style="letter-spacing: 5px; font-style: normal;">OUR PRODUCTS</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full" data-noedit="" data-html="' +

						encodeURIComponent('<div>&nbsp;</div>' +
						'\n<style>' +
							_tabs(1) + '.products a {' +
									_tabs(2) + 'color: #000;' +
									_tabs(2) + 'display: block;' +
									_tabs(2) + 'text-decoration: none;' +
									_tabs(2) + 'margin: 1rem 0;' +
									_tabs(2) + 'font-weight: 600;' +
									_tabs(2) + 'text-transform: uppercase;' +
									_tabs(2) + 'font-size: 0.8rem;' +
									_tabs(2) + 'letter-spacing: 1px;' +
							 _tabs(1) + '}' +
						'\n</style>' +
                        '') +
                        '">' +

					'</div>' +
				'</div>' +
				'<div class="row clearfix" style="padding: 0;">' +
					'<div class="column third" style="padding: 0;">' +
						'<div class="is-card max-390 is-dark-text products" style="width:calc(100%);background-color: #fbfbfb;">' +
							_tabs(1) + '<img src="assets/minimalist-blocks/images/revolt-1332535-unsplash-aHnyE1.jpg" alt="" class="margin-0">' +
							_tabs(1) + '<div style="padding:30px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<h3 class="size-21 margin-0" style="letter-spacing: 1px;">Product Name</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is simply dummy text.</p>' +
								_tabs(2) + '<a href="#">$119 | buy now</a>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third" style="padding: 0;">' +
						'<div class="is-card max-390 is-dark-text products" style="width:calc(100%);">' +
							_tabs(1) + '<img src="assets/minimalist-blocks/images/mike-meyers-1346291-unsplash-SDPYX2.jpg" alt="" class="margin-0">' +
							_tabs(1) + '<div style="padding:30px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<h3 class="size-21 margin-0" style="letter-spacing: 1px;">Product Name</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is simply dummy text.</p>' +
								_tabs(2) + '<a href="#" title="">$79 | BUY NOW</a>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third" style="padding: 0;">' +
						'<div class="is-card max-390 is-dark-text products" style="width:calc(100%);background-color: #fbfbfb;">' +
							_tabs(1) + '<img src="assets/minimalist-blocks/images/hessam-hojati-1279045-unsplash-(1)-veEgg3.jpg" alt="" class="margin-0">' +
							_tabs(1) + '<div style="padding:30px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<h3 class="size-21 margin-0" style="letter-spacing: 1px;">Product Name</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is simply dummy text.</p>' +
								_tabs(2) + '<a href="#" title="">$59 | BUY NOW</a>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>'
        },

        {
            'thumbnail': 'preview/products-29.png',
            'category': '104',
            'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 style="text-align: center; letter-spacing: 3px;">OUR SERVICES</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full" data-noedit="" data-html="' +

						encodeURIComponent('<div>&nbsp;</div>' +
						'\n<style>' +
							  _tabs(1) + '.servicebox {' +
									_tabs(2) + 'text-align: center;' +
							  _tabs(1) + '}' +

							  _tabs(1) + '.servicebox .title {' +
									_tabs(2) + 'border-bottom: 1px solid #000 ;' +
									_tabs(2) + 'display: block;' +
									_tabs(2) + 'line-height: 50px;' +
									_tabs(2) + 'margin: 0 auto 20px;' +
									_tabs(2) + 'padding-bottom: 20px;' +
									_tabs(2) + 'position: relative;' +
									_tabs(2) + 'text-align: center;' +
									_tabs(2) + 'width: 220px;' +
							  _tabs(1) + '}' +

							  _tabs(1) + '.servicebox .title:before,' +
							  _tabs(1) + '.servicebox .title:after {' +
									_tabs(2) + 'background:#000;' +
									_tabs(2) + 'border-radius: 100%;' +
									_tabs(2) + 'bottom: -5px;' +
									_tabs(2) + 'content: "";' +
									_tabs(2) + 'height: 10px;' +
									_tabs(2) + 'margin: 0 -5px 0 0;' +
									_tabs(2) + 'position: absolute;' +
									_tabs(2) + 'right: 50%;' +
									_tabs(2) + 'transition: all 0.4s ease 0s;' +
									_tabs(2) + 'width: 10px;' +
							   _tabs(1) + '}' +

							   _tabs(1) + '.servicebox .title:before {' +
									_tabs(2) + 'left: 50%;' +
									_tabs(2) + 'margin: 0 0 0 -5px;' +
								_tabs(1) + '}' +

							 _tabs(1) + '.servicebox:hover .title:before {' +
									_tabs(2) + 'left: 100%;' +
							 _tabs(1) + '}' +

							 _tabs(1) + '.servicebox:hover .title:after {' +
									_tabs(2) + 'right: 100%;' +
							 _tabs(1) + '}' +

							 _tabs(1) + '@media screen and (max-width:1000px) {' +
									_tabs(2) + '.servicebox {' +
										_tabs(3) + 'margin-bottom: 30px;' +
									_tabs(2) + '}' +
							 _tabs(1) + '}' +
						'\n</style>' +
                        '') +
                        '">' +

					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column center half">' +
						'<div class="servicebox">' +
							_tabs(1) + '<i class="icon ion-ios-monitor-outline size-32"></i>' +
							_tabs(1) + '<h3 class="title size-24" style="letter-spacing: 2px;">Web Design</h3>' +
							_tabs(1) + '<p style="color: rgb(158, 158, 158);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
						'\n</div>' +
					'</div>' +
					'<div class="column center half">' +
						'<div class="servicebox">' +
							_tabs(1) + '<i class="icon ion-ios-gear-outline size-32"></i>' +
							_tabs(1) + '<h3 class="title size-24" style="letter-spacing: 2px;">Web Development</h3>' +
							_tabs(1) + '<p style="color: rgb(158, 158, 158);" class="margin-right-1024-reset">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
						'\n</div>' +
					'</div>' +
				'</div>'
        },

        {
            'thumbnail': 'preview/products-31.png',
            'category': '104',
            'html':
				'<div class="row clearfix">' +
					'<div class="column full" data-noedit="" data-html="' +

						encodeURIComponent('<div>&nbsp;</div>' +
						'\n<style>' +
							_tabs(1) + '.products a {' +
								_tabs(2) + 'color: #000;' +
								_tabs(2) + 'display: block;' +
								_tabs(2) + 'text-decoration: none;' +
								_tabs(2) + 'margin: 1rem 0;' +
								_tabs(2) + 'font-weight: 600;' +
								_tabs(2) + 'text-transform: uppercase;' +
								_tabs(2) + 'font-size: 0.8rem;' +
								_tabs(2) + 'letter-spacing: 1px;' +
							_tabs(1) + '}' +
						'\n</style>' +
                        '') +
                        '">' +

					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column two-third">' +
						'<img src="assets/minimalist-blocks/images/maksim-larin-1345281-unsplash-(1)-iE7nE1.jpg" alt="">' +
					'</div>' +
					'<div class="column third">' +
						'<p style="letter-spacing: 1px;">New Arrival</p>' +
						'\n<h3 class="size-42" style="letter-spacing: 1px;"><b>PRODUCT</b> NAME</h3>' +
						'\n<div class="spacer height-40"></div>' +
						'\n<div class="products"><a href="#">$149 | Buy Now</a></div>' +
					'</div>' +
				'</div>'
        },

        {
            'thumbnail': 'preview/products-32.png',
            'category': '104',
            'html':
				'<div class="row clearfix">' +
					'<div class="column full" data-noedit="" data-html="' +

						encodeURIComponent('<div>&nbsp;</div>' +
						'\n<style>' +
							_tabs(1) + '.products a {' +
								_tabs(2) + 'color: #000;' +
								_tabs(2) + 'display: block;' +
								_tabs(2) + 'text-decoration: none;' +
								_tabs(2) + 'margin: 1rem 0;' +
								_tabs(2) + 'font-weight: 600;' +
								_tabs(2) + 'text-transform: uppercase;' +
								_tabs(2) + 'font-size: 0.8rem;' +
								_tabs(2) + 'letter-spacing: 1px;' +
							_tabs(1) + '}' +
						'\n</style>' +
                        '') +
                        '">' +

					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<p style="letter-spacing: 1px;">New Arrival</p>' +
						'\n<h3 class="size-42" style="letter-spacing: 1px;"><b>PRODUCT</b> NAME</h3>' +
						'\n<div class="spacer height-40"></div>' +
						'\n<div class="products"><a href="#">$39 | Buy Now</a></div>' +
					'</div>' +
					'<div class="column two-third">' +
						'<img src="assets/minimalist-blocks/images/dose-juice-1184460-unsplash-(1)-PVEGV1.jpg" alt="">' +
					'</div>' +
				'</div>'
        },

        {
            'thumbnail': 'preview/products-34.png',
            'category': '104',
            'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 style="text-align: center; letter-spacing: 2px;">SERVICES WE OFFER</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full" data-noedit="" data-html="' +

						encodeURIComponent('<div>&nbsp;</div>' +
						'\n<style>' +
							_tabs(1) + '.simple-button a {' +
								_tabs(2) + 'color: #000;' +
								_tabs(2) + 'display: block;' +
								_tabs(2) + 'text-decoration: none;' +
								_tabs(2) + 'margin: 1rem 0;' +
								_tabs(2) + 'font-weight: 600;' +
								_tabs(2) + 'text-transform: uppercase;' +
								_tabs(2) + 'font-size: 0.8rem;' +
								_tabs(2) + 'letter-spacing: 1px;' +
								_tabs(2) + 'border-bottom: 2px solid #000;' +
								_tabs(2) + 'display: inline-block;' +
							_tabs(1) + '}' +
						'\n</style>' +
                        '') +
                        '">' +

					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column center third">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<i class="icon ion-android-bulb size-48"></i>' +
								_tabs(2) + '<h3 class="size-21">Creative Designs</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
								_tabs(2) + '<div class="simple-button"><a href="#">Read More</a></div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column center third">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<i class="icon ion-android-desktop size-48"></i>' +
								_tabs(2) + '<h3 class="size-21">Web Development</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
								_tabs(2) + '<div class="simple-button"><a href="#">Read More</a></div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column center third">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<i class="icon ion-android-favorite-outline size-48"></i>' +
								_tabs(2) + '<h3 class="size-21">24/7 Support</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is simply dummy text of the printing industry.</p>' +
								_tabs(2) + '<div class="simple-button"><a href="#">Read More</a></div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>'
        },

        {
            'thumbnail': 'preview/products-35.png',
            'category': '104',
            'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-46" style="letter-spacing: 2px;">OUR PRODUCTS</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full" data-noedit="" data-html="' +

						encodeURIComponent('<div>&nbsp;</div>' +
						'\n<style>' +
							_tabs(1) + '.simple-button a {' +
								_tabs(2) + 'color: #000;' +
								_tabs(2) + 'display: block;' +
								_tabs(2) + 'text-decoration: none;' +
								_tabs(2) + 'margin: 1rem 0;' +
								_tabs(2) + 'font-weight: 600;' +
								_tabs(2) + 'text-transform: uppercase;' +
								_tabs(2) + 'font-size: 0.8rem;' +
								_tabs(2) + 'letter-spacing: 1px;' +
								_tabs(2) + 'border-bottom: 2px solid #000;' +
								_tabs(2) + 'display: inline-block;' +
							_tabs(1) + '}' +
						'\n</style>' +
                        '') +
                        '">' +

					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/nordwood-themes-490552-unsplash-tt8Pe1.jpg" alt="">' +
						'\n<h3 class="size-24">Product Name</h3>' +
						'\n<p style="line-height: 1.2;">Lorem Ipsum is simply dummy text</p>' +
						'\n<div class="simple-button"><a href="#">$19 - BUY NOW</a></div>' +
					'</div>' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/nordwood-themes-768145-unsplash-00uc52.jpg" alt="">' +
						'\n<h3 class="size-24">Product Name</h3>' +
						'\n<p style="line-height: 1.2;">Lorem Ipsum is simply dummy text</p>' +
						'\n<div class="simple-button"><a href="#" title="">$27 - BUY NOW</a></div>' +
					'</div>' +
				'</div>'
        },

    	{
    	    'thumbnail': 'preview/features-23.png',
    	    'category': '105',
    	    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-28" style="letter-spacing: 10px; line-height:1.6">WHAT MAKES US<br>DIFFERENT</h1>' +
						'\n<p style="border-top: 1px solid #333; width: 70px; display: inline-block; margin: 0"></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix" style="padding: 0;">' +
					'<div class="column third" style="padding: 0; border-right: 1px solid #fff">' +
						'<div class="is-card is-light-text" style="width:calc(100%);background-color: #1e90ff">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<i class="icon ion-ios-lightbulb-outline size-48"></i>' +
								_tabs(2) + '<h3 class="size-24" style="letter-spacing: 1px;">Feature Item</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third" style="padding: 0; border-right: 1px solid #fff">' +
						'<div class="is-card is-light-text" style="width:calc(100%);background-color: #1e90ff">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<i class="icon ion-ios-settings size-48"></i>' +
								_tabs(2) + '<h3 class="size-24" style="letter-spacing: 1px;">Feature Item</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third" style="padding: 0;">' +
						'<div class="is-card is-light-text" style="width:calc(100%);background-color: #1e90ff">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<i class="icon ion-ios-compose-outline size-48"></i>' +
								_tabs(2) + '<h3 class="size-24" style="letter-spacing: 1px;">Feature Item</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>'
    	},

		{
		    'thumbnail': 'preview/features-24.png',
		    'category': '105',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-28" style="letter-spacing: 10px; line-height:1.6">POPULAR FEATURES</h1>' +
						'\n<p style="border-top: 1px solid #333; width: 70px; display: inline-block; margin: 0"></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix" style="padding: 0;">' +
					'<div class="column third center" style="padding: 0; border: 1px solid #d1d1d1">' +
						'<div class="is-card is-dark-text" style="width:calc(100%);">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<i class="icon ion-ios-monitor-outline size-32"></i>' +
								_tabs(2) + '<h3 class="size-21" style="letter-spacing: 1px;">Feature Item</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third center" style="padding: 0; border-top: 1px solid #d1d1d1; border-bottom: 1px solid #d1d1d1">' +
						'<div class="is-card is-dark-text" style="width:calc(100%);">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<i class="icon ion-ios-gear-outline size-32"></i>' +
								_tabs(2) + '<h3 class="size-21" style="letter-spacing: 1px;">Feature Item</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third center" style="padding: 0; border: 1px solid #d1d1d1">' +
						'<div class="is-card is-dark-text" style="width:calc(100%);">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<i class="icon ion-ios-heart-outline size-32"></i>' +
								_tabs(2) + '<h3 class="size-21" style="letter-spacing: 1px;">Feature Item</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/features-25.png',
		    'category': '105',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-32" style="letter-spacing: 10px; line-height:1.6">POPULAR FEATURES</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix" style="padding: 0;">' +
					'<div class="column center third" style="padding: 0; border: 1px solid #d1d1d1">' +
						'<div class="is-card is-dark-text" style="width:calc(100%);">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<div style="text-align: center; width: 70px; height: 70px; line-height: 70px; border-radius: 50%; border: 1px solid #d1d1d1; display: inline-block;margin: 15px 0">' +
									_tabs(3) + '<i class="icon ion-ios-compose-outline size-24" style="color: #949494;"></i>' +
								_tabs(2) + '</div>' +
								_tabs(2) + '<h3 class="size-21" style="letter-spacing: 1px;">Feature Item</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column center third" style="padding: 0; border-top: 1px solid #d1d1d1; border-bottom: 1px solid #d1d1d1">' +
						'<div class="is-card is-dark-text" style="width:calc(100%);">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<div style="text-align: center; width: 70px; height: 70px; line-height: 70px; border-radius: 50%; border: 1px solid #d1d1d1; display: inline-block;margin: 15px 0">' +
									_tabs(3) + '<i class="icon ion-ios-gear-outline size-24" style="color: #949494;"></i>' +
								_tabs(2) + '</div>' +
								_tabs(2) + '<h3 class="size-21" style="letter-spacing: 1px;">Feature Item</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column center third" style="padding: 0; border: 1px solid #d1d1d1;">' +
						'<div class="is-card is-dark-text" style="width:calc(100%);">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<div style="text-align: center; width: 70px; height: 70px; line-height: 70px; border-radius: 50%; border: 1px solid #d1d1d1; display: inline-block;margin: 15px 0">' +
									_tabs(3) + '<i class="icon ion-ios-mic-outline size-24" style="color: #949494;"></i>' +
								_tabs(2) + '</div>' +
								_tabs(2) + '<h3 class="size-21" style="letter-spacing: 1px;">Feature Item</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/features-26.png',
		    'category': '105',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-38" style="letter-spacing: 6px; line-height: 1.6; text-align: center;">OUR FEATURES</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<div class="is-card is-dark-text" style="width:calc(100%);background-color: #f4f6f9;">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<i class="icon ion-android-bulb size-32" style="color: #1e90ff; line-height: 1"></i>' +
								_tabs(2) + '<h3 class="size-24" style="letter-spacing: 1px;">Feature Item</h3>' +
								_tabs(2) + '<p style="border-top: 2px solid #1e90ff; width: 30px; display: inline-block; margin-top: 0"></p>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third">' +
						'<div class="is-card is-dark-text" style="width:calc(100%);background-color: #f4f6f9;">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<i class="icon ion-code-working size-32" style="color: #1e90ff; line-height: 1"></i>' +
								_tabs(2) + '<h3 class="size-24" style="letter-spacing: 1px;">Feature Item</h3>' +
								_tabs(2) + '<p style="border-top: 2px solid #1e90ff; width: 30px; display: inline-block; margin-top: 0"></p>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third">' +
						'<div class="is-card is-dark-text" style="width:calc(100%);background-color: #f4f6f9;">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<i class="icon ion-edit size-32" style="color: #1e90ff; line-height: 1"></i>' +
								_tabs(2) + '<h3 class="size-24" style="letter-spacing: 1px;">Feature Item</h3>' +
								_tabs(2) + '<p style="border-top: 2px solid #1e90ff; width: 30px; display: inline-block; margin-top: 0"></p>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/steps-21.png',
		    'category': '106',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 style="text-align: center; letter-spacing: 2px;">How We Work</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<table style="border-collapse:collapse;width:100%;">' +
							_tabs(1) + '<tbody>' +
								_tabs(2) + '<tr>' +
									_tabs(3) + '<td style="border-bottom: 1px solid; border-top: 1px solid; border-color: rgb(158, 158, 158); font-weight: bold;"><span>Step One</span></td>' +
									_tabs(3) + '<td style="border-bottom: 1px solid; border-top: 1px solid; border-color: rgb(158, 158, 158);"><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;">Lorem Ipsum is simply dummy text of the printing industry.</blockquote></td>' +
								_tabs(2) + '</tr>' +
								_tabs(2) + '<tr>' +
									_tabs(3) + '<td style="border-bottom: 1px solid; border-color: rgb(158, 158, 158); font-weight: bold;">Step Two</td>' +
									_tabs(3) + '<td style="border-bottom: 1px solid; border-color: rgb(158, 158, 158);"><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;">Lorem Ipsum is simply dummy text of the printing industry.</blockquote></td>' +
								_tabs(2) + '</tr>' +
								_tabs(2) + '<tr>' +
									_tabs(3) + '<td style="border-bottom: 1px solid; border-color: rgb(158, 158, 158); font-weight: bold;">Step Three</td>' +
									_tabs(3) + '<td style="border-bottom: 1px solid; border-color: rgb(158, 158, 158);"><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;">Lorem Ipsum is simply dummy text of the printing industry.</blockquote></td>' +
								_tabs(2) + '</tr>' +
								_tabs(2) + '<tr>' +
									_tabs(3) + '<td style="border-bottom: 1px solid; border-color: rgb(158, 158, 158); font-weight: bold;">Step Four</td>' +
									_tabs(3) + '<td style="border-bottom: 1px solid; border-color: rgb(158, 158, 158);"><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;">Lorem Ipsum is simply dummy text of the printing industry.</blockquote></td>' +
								_tabs(2) + '</tr>' +
								_tabs(2) + '<tr>' +
									_tabs(3) + '<td style="border-bottom: 1px solid; border-color: rgb(158, 158, 158); font-weight: bold;">Step Five</td>' +
									_tabs(3) + '<td style="border-bottom: 1px solid; border-color: rgb(158, 158, 158);"><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;">Lorem Ipsum is simply dummy text of the printing industry.</blockquote></td>' +
								_tabs(2) + '</tr>' +
							_tabs(1) + '</tbody>' +
						'\n</table>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/steps-23.png',
		    'category': '106',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h2 class="size-60" style="letter-spacing: 2px;">Timeline Process</h2>' +
						'\n<p style="letter-spacing: 3px;">Discover How We Work</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix" style="padding: 0;">' +
					'<div class="column third" style="padding: 0;">' +
						'<div class="is-card is-light-text" style="width:calc(100%);background-color: #d13b78">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<i class="icon ion-ios-compose-outline size-48"></i>' +
								_tabs(2) + '<h3 class="size-24" style="letter-spacing: 1px;">Step 1</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third" style="padding: 0;">' +
						'<div class="is-card is-light-text" style="width:calc(100%);background-color: #efa02b">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<i class="icon ion-ios-gear-outline size-48"></i>' +
								_tabs(2) + '<h3 class="size-24" style="letter-spacing: 1px;">Step 2</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third" style="padding: 0;">' +
						'<div class="is-card is-light-text" style="width:calc(100%);background-color: #da2f33">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<i class="icon ion-ios-monitor-outline size-48"></i>' +
								_tabs(2) + '<h3 class="size-24" style="letter-spacing: 1px;">Step 3</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/steps-24.png',
		    'category': '106',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 style="text-align: center; letter-spacing: 3px;">WORK STEPS</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column fifth">' +
						'<div class="is-card is-light-text" style="width:60px;height:60px;padding:10px;background: #168de8;">' +
							_tabs(1) + '<div class="is-card-content-centered">' +
								_tabs(2) + '<p class="size-24" style="margin: 0"><b>01</b></p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column two-fifth">' +
						'<h3 style="margin-top: 0">Step One</h3>' +
						'\n<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. Lorem ipsum dolor sit amet.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column fifth">' +
						'<div class="is-card is-light-text" style="width:60px;height:60px;padding:10px;background:#168de8;">' +
							_tabs(1) + '<div class="is-card-content-centered">' +
								_tabs(2) + '<p class="size-24" style="margin: 0"><b>02</b></p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column two-fifth">' +
						'<h3 style="margin-top: 0">Step Two</h3>' +
						'\n<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. Lorem ipsum dolor sit amet.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column fifth">' +
						'<div class="is-card is-light-text" style="width:60px;height:60px;padding:10px;background:#168de8;">' +
							_tabs(1) + '<div class="is-card-content-centered">' +
								_tabs(2) + '<p class="size-24" style="margin: 0"><b>03</b></p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column two-fifth">' +
						'<h3 style="margin-top: 0">Step Three</h3>' +
						'\n<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. Lorem ipsum dolor sit amet.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/steps-25.png',
		    'category': '106',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 style="text-align: center; letter-spacing: 2px;">HOW WE WORK</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix" style="padding: 0;">' +
					'<div class="column third" style="padding: 0px;">' +
						'<div class="is-card is-dark-text" style="width:calc(100%);border-width: 1px; border-style: solid; border-color: #3fcc66;margin-bottom:15px;">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<i class="icon ion-android-bulb size-32" style="color: #3fcc66"></i>' +
								_tabs(2) + '<h3 class="size-21" style="letter-spacing: 1px;">STEP ONE</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third" style="padding: 0px;">' +
						'<div class="is-card is-dark-text" style="width:calc(100%);border-width: 1px; border-style: solid; border-color: #3fcc66;margin-left:-1px;margin-right:-1px;margin-bottom:15px;">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<i class="icon ion-compose size-32" style="color: #3fcc66"></i>' +
								_tabs(2) + '<h3 class="size-21" style="letter-spacing: 1px;">STEP TWO</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third" style="padding: 0px;">' +
						'<div class="is-card is-dark-text" style="width:calc(100%);border-width: 1px; border-style: solid; border-color: #3fcc66;margin-bottom:15px;">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<i class="icon ion-code-working size-32" style="color: #3fcc66"></i>' +
								_tabs(2) + '<h3 class="size-21" style="letter-spacing: 1px;">STEP THREE</h3>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry.</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/pricing-25.png',
		    'category': '107',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-48 is-title1-48 is-title-lite">PRICING PLANS</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix" style="padding: 0;">' +
					'<div class="column third" style="padding: 0;">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<h1 class="size-32 is-title-lite">Starter</h1>' +
								_tabs(2) + '<h4>$ <span class="size-88">29</span></h4>' +
								_tabs(2) + '<ul style="text-align:left">' +
									_tabs(3) + '<li>Lorem Ipsum is dummy text.</li>' +
									_tabs(3) + '<li>Lorem ipsum dolor sit amet.</li>' +
									_tabs(3) + '<li>Lorem Ipsum is dummy text.</li>' +
								_tabs(2) + '</ul>' +
								_tabs(2) + '<div style="margin:2.2em 0"><a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small edit">Select Plan</a></div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third" style="padding: 0;">' +
						'<div class="is-card is-light-text shadow-1" style="width: calc(100%);background-color: #2ecc71;transform: scale(1.08)">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<h1 class="size-32 is-title-lite">PRO</h1>' +
								_tabs(2) + '<h4>$ <span class="size-88">59</span></h4>' +
								_tabs(2) + '<ul style="text-align:left">' +
									_tabs(3) + '<li>Lorem Ipsum is dummy text.</li>' +
									_tabs(3) + '<li>Lorem ipsum dolor sit amet.</li>' +
									_tabs(3) + '<li>Lorem Ipsum is dummy text.</li>' +
								_tabs(2) + '</ul>' +
								_tabs(2) + '<div style="margin:2.2em 0"><a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small edit">Select Plan</a></div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third" style="padding: 0;">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<h1 class="size-32 is-title-lite">Business</h1>' +
								_tabs(2) + '<h4>$ <span class="size-88">99</span></h4>' +
								_tabs(2) + '<ul style="text-align:left">' +
									_tabs(3) + '<li>Lorem Ipsum is dummy text.</li>' +
									_tabs(3) + '<li>Lorem ipsum dolor sit amet.</li>' +
									_tabs(3) + '<li>Lorem Ipsum is dummy text.</li>' +
								_tabs(2) + '</ul>' +
								_tabs(2) + '<div style="margin:2.2em 0"><a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small edit">Select Plan</a></div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/pricing-26.png',
		    'category': '107',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-48 is-title1-48 is-title-lite">PRICING PLANS</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix" style="padding: 0;">' +
					'<div class="column third" style="padding: 0;">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);">' +
							_tabs(1) + '<div style="padding:30px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<h3 class="size-24 is-title-lite">Standard</h3>' +
								_tabs(2) + '<h3 style="color: #EE5A24; line-height: 1.4">$<span class="size-80 is-title-lite" style="color: #EE5A24">49</span>/mo</h3>' +
								_tabs(2) + '<ul style="text-align:left">' +
									_tabs(3) + '<li>Lorem Ipsum is dummy text.</li>' +
									_tabs(3) + '<li>Lorem Ipsum is dummy text.</li>' +
									_tabs(3) + '<li>Lorem Ipsum is dummy text.</li>' +
								_tabs(2) + '</ul>' +
								_tabs(2) + '<div style="margin:2.2em 0"><a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small edit">Buy Now</a></div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third" style="padding: 0;">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);transform: scale(1.08)">' +
							_tabs(1) + '<div style="padding:30px;width:100%;box-sizing:border-box;text-align:center;"">' +
								_tabs(2) + '<h3 class="size-24 is-title-lite">DELUXE</h3>' +
								_tabs(2) + '<h3 style="color: #EE5A24; line-height: 1.4">$<span class="size-80 is-title-lite" style="color: #EE5A24">79</span>/mo</h3>' +
								_tabs(2) + '<ul style="text-align:left">' +
									_tabs(3) + '<li>Lorem Ipsum is dummy text.</li>' +
									_tabs(3) + '<li>Lorem Ipsum is dummy text.</li>' +
									_tabs(3) + '<li>Lorem Ipsum is dummy text.</li>' +
								_tabs(2) + '</ul>' +
								_tabs(2) + '<div style="margin:2.1em 0"><a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small edit">Buy Now</a></div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third" style="padding: 0;">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);">' +
							_tabs(1) + '<div style="padding:30px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<h3 class="size-24 is-title-lite">Ultimate</h3>' +
								_tabs(2) + '<h3 style="color: #EE5A24; line-height: 1.4">$<span class="size-80 is-title-lite" style="color: #EE5A24">99</span>/mo</h3>' +
								_tabs(2) + '<ul style="text-align:left">' +
									_tabs(3) + '<li>Lorem Ipsum is dummy text.</li>' +
									_tabs(3) + '<li>Lorem Ipsum is dummy text.</li>' +
									_tabs(3) + '<li>Lorem Ipsum is dummy text.</li>' +
								_tabs(2) + '</ul>' +
								_tabs(2) + '<div style="margin:2.2em 0"><a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small edit">Buy Now</a></div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/pricing-27.png',
		    'category': '107',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column third" style="padding-right: 30px">' +
						'<div class="spacer height-20"></div>' +
						'\n<h2 class="size-35">Start a free trial or pick your plan.</h2>' +
						'\n<div class="spacer height-20"></div>' +
						'\n<ul style="text-align:left">' +
							_tabs(1) + '<li>Lorem Ipsum is simply dummy text.</li>' +
							_tabs(1) + '<li>Lorem Ipsum is simply dummy text.</li>' +
							_tabs(1) + '<li>Lorem Ipsum is simply dummy text.</li>' +
						'\n</ul>' +
						'\n<div style="margin:2em 0"><a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small">Select Plan</a></div>' +
					'</div>' +
					'<div class="column third" style="padding: 0;">' +
						'<div class="is-card is-light-text shadow-1" style="width:calc(100%);background-color: #2ecc71;transform: scale(1.08)">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<h2 class="size-28">Professional</h2>' +
								_tabs(2) + '<h4>$ <span class="size-88">59</span></h4>' +
								_tabs(2) + '<ul style="text-align:left">' +
									_tabs(3) + '<li>Lorem Ipsum is simply dummy text.</li>' +
									_tabs(3) + '<li>Lorem Ipsum is simply dummy text.</li>' +
									_tabs(3) + '<li>Lorem Ipsum is simply dummy text.</li>' +
								_tabs(2) + '</ul>' +
								_tabs(2) + '<div style="margin:2.2em 0"><a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small edit">Select Plan</a></div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third" style="padding: 0;">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<h2 class="size-28">Business</h2>' +
								_tabs(2) + '<h4>$ <span class="size-88">99</span></h4>' +
								_tabs(2) + '<ul style="text-align:left">' +
									_tabs(3) + '<li>Lorem Ipsum is simply dummy text.</li>' +
									_tabs(3) + '<li>Lorem Ipsum is simply dummy text.</li>' +
									_tabs(3) + '<li>Lorem Ipsum is simply dummy text.</li>' +
								_tabs(2) + '</ul>' +
								_tabs(2) + '<div style="margin:2.2em 0"><a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small edit">Select Plan</a></div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/pricing-28.png',
		    'category': '107',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-64" style="letter-spacing: 2px; text-align: center;">Ready to Purchase?</h1>' +
						'\n<p style="text-align: center; letter-spacing: 1px;">Choose the right plan that works for you.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half" style="padding: 0;">' +
						'<div class="is-card is-light-text shadow-1" style="width:calc(100%);background-color: #f39c12; transform: scale(1.09)">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<h1 class="size-28">Professional</h1>' +
								_tabs(2) + '<h4>$ <span class="size-88">71</span></h4>' +
								_tabs(2) + '<ul style="text-align:left">' +
									_tabs(3) + '<li>Lorem Ipsum is simply dummy text of the printing industry.</li>' +
									_tabs(3) + '<li>Lorem Ipsum is simply dummy text of the printing industry.</li>' +
									_tabs(3) + '<li>Lorem Ipsum is simply dummy text of the printing industry.</li>' +
								_tabs(2) + '</ul>' +
								_tabs(2) + '<div style="margin:2.2em 0"><a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small edit">Select Plan</a></div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column half" style="padding: 0;">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<h1 class="size-28">Business</h1>' +
								_tabs(2) + '<h4>$ <span class="size-88">99</span></h4>' +
								_tabs(2) + '<ul style="text-align:left">' +
									_tabs(3) + '<li>Lorem Ipsum is simply dummy text of the printing industry.</li>' +
									_tabs(3) + '<li>Lorem Ipsum is simply dummy text of the printing industry.</li>' +
									_tabs(3) + '<li>Lorem Ipsum is simply dummy text of the printing industry.</li>' +
								_tabs(2) + '</ul>' +
								_tabs(2) + '<div style="margin:2.2em 0"><a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small edit">Select Plan</a></div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/skills-17.png',
		    'category': '108',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-48" style="letter-spacing: 4px;">WORK EXPERIENCE</h1>' +
						'\n<p style="border-bottom: 2px solid #000;width: 80px;display: inline-block;"></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column fourth">' +
						'<div class="is-card is-card-circle is-light-text" style="width:70px;height:70px;padding:15px;background:#000;">' +
							_tabs(1) + '<div class="is-card-content-centered">' +
								_tabs(2) + '<p class="size-24" style="margin: 0">2018</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column two-fourth">' +
						'<h3 style="margin-top: 0">Recent Job</h3>' +
						'\n<p class="size-16" style="color: rgb(179, 179, 179);">Company Name, Current Job</p>' +
						'\n<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column fourth">' +
						'<div class="is-card is-card-circle is-light-text" style="width:70px;height:70px;padding:15px;background:#000;">' +
							_tabs(1) + '<div class="is-card-content-centered">' +
								_tabs(2) + '<p class="size-24" style="margin: 0">2014</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column two-fourth">' +
						'<h3 style="margin-top: 0">Recent Job</h3>' +
						'\n<p class="size-16" style="color: rgb(179, 179, 179);">Company Name, 3 Years 2 Months</p>' +
						'\n<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column fourth">' +
						'<div class="is-card is-card-circle is-light-text" style="width:70px;height:70px;padding:15px;background:#000;">' +
							_tabs(1) + '<div class="is-card-content-centered">' +
								_tabs(2) + '<p class="size-24" style="margin: 0">2009</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column two-fourth">' +
						'<h3 style="margin-top: 0">Recent Job</h3>' +
						'\n<p class="size-16" style="color: rgb(179, 179, 179);">Company Name, 2 Years 8 Months</p>' +
						'\n<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/skills-18.png',
		    'category': '108',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-48" style="letter-spacing: 4px;">WORK EXPERIENCE</h1>' +
						'\n<p style="border-bottom: 2px solid #000;width: 80px;display: inline-block;"></p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column fourth">' +
						'<div class="is-card is-card-circle is-dark-text shadow-1" style="width:70px;height:70px;padding:15px;">' +
							_tabs(1) + '<div class="is-card-content-centered">' +
								_tabs(2) + '<p class="size-24" style="margin: 0">2018</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column two-fourth">' +
						'<h3 style="margin-top: 0">Recent Job</h3>' +
						'\n<p class="size-16" style="color: rgb(179, 179, 179);">Company Name, Current Job</p>' +
						'\n<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column fourth">' +
						'<div class="is-card is-card-circle is-dark-text shadow-1" style="width:70px;height:70px;padding:15px;">' +
							_tabs(1) + '<div class="is-card-content-centered">' +
								_tabs(2) + '<p class="size-24" style="margin: 0">2014</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column two-fourth">' +
						'<h3 style="margin-top: 0">Recent Job</h3>' +
						'\n<p class="size-16" style="color: rgb(179, 179, 179);">Company Name, 3 Years 2 Months</p>' +
						'\n<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column fourth">' +
						'<div class="is-card is-card-circle is-dark-text shadow-1" style="width:70px;height:70px;padding:15px;">' +
							_tabs(1) + '<div class="is-card-content-centered">' +
								_tabs(2) + '<p class="size-24" style="margin: 0">2009</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column two-fourth">' +
						'<h3 style="margin-top: 0">Recent Job</h3>' +
						'\n<p class="size-16" style="color: rgb(179, 179, 179);">Company Name, 2 Years 8 Months</p>' +
						'\n<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/skills-19.png',
		    'category': '108',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<h1 class="size-28" style="letter-spacing: 2px;">We Also Have Some Specialities</h1>' +
						'\n<div class="spacer height-60"></div>' +
						'\n<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
					'</div>' +
					'<div class="column half" data-noedit="" data-html="' +

						encodeURIComponent('<style>' +
							_tabs(1) + '#{id} .skill {' +
								_tabs(2) + 'margin-bottom: 35px;' +
								_tabs(2) + 'position: relative;' +
								_tabs(2) + 'overflow-x:hidden;' +
							_tabs(1) + '}' +
							_tabs(1) + '#{id} .skill > p {' +
								_tabs(2) + 'margin: 0;' +
							_tabs(1) + '}' +
							_tabs(1) + '#{id} .skill:before {' +
								_tabs(2) + 'width: 100%;' +
								_tabs(2) + 'height: 5px;' +
								_tabs(2) + 'content: "";' +
								_tabs(2) + 'display: block;' +
								_tabs(2) + 'position: absolute;' +
								_tabs(2) + 'background: #d1d1d1;' +
								_tabs(2) + 'bottom: 0;' +
							_tabs(1) + '}' +
							_tabs(1) + '#{id} .skill-bar {' +
								_tabs(2) + 'width: 100%;' +
								_tabs(2) + 'height: 5px;' +
								_tabs(2) + 'background: #1fcd6d;' +
								_tabs(2) + 'display: block;' +
								_tabs(2) + 'position: relative;' +
							_tabs(1) + '}' +
							_tabs(1) + '#{id} .skill-bar span {' +
								_tabs(2) + 'position: absolute;' +
								_tabs(2) + 'top: -40px;' +
								_tabs(2) + 'padding: 0;' +
								_tabs(2) + 'font-size: 18px;' +
								_tabs(2) + 'padding: 3px 0;' +
							_tabs(1) + '}' +
							_tabs(1) + '#{id} .skill-bar {' +
								_tabs(2) + 'position: relative;' +
							_tabs(1) + '}' +

		    /* SKILL 1 */
							_tabs(1) + '#{id} .skill1 {' +
								_tabs(2) + 'width: 95%;' +
							_tabs(1) + '}' +
							_tabs(1) + '#{id} .skill1 .skill-count1 {' +
								_tabs(2) + 'right: 0;' +
							_tabs(1) + '}' +

		    /* SKILL 2 */
							_tabs(1) + '#{id} .skill2 {' +
								_tabs(2) + 'width: 85%;' +
							_tabs(1) + '}' +
							_tabs(1) + '#{id} .skill2 .skill-count2 {' +
								_tabs(2) + 'right: 0;' +
							_tabs(1) + '}' +

		    /* SKILL 3 */
							_tabs(1) + '#{id} .skill3 {' +
								_tabs(2) + 'width: 75%;' +
							_tabs(1) + '}' +
							_tabs(1) + '#{id}  .skill3 .skill-count3 {' +
								_tabs(2) + 'right: 0;' +
							_tabs(1) + '}' +

		    /* SKILL 4 */
							_tabs(1) + '#{id} .skill4 {' +
								_tabs(2) + 'width: 65%' +
							_tabs(1) + '}' +

							_tabs(1) + '#{id} .skill4 .skill-count4 {' +
								_tabs(2) + 'right: 0;' +
							_tabs(1) + '}' +

		    /* SKILL 5 */
							_tabs(1) + '#{id} .skill5 {' +
								_tabs(2) + 'width: 80%;' +
							_tabs(1) + '}' +
							_tabs(1) + '#{id} .skill5 .skill-count5 {' +
								_tabs(2) + 'right: 0;' +
							_tabs(1) + '}' +
						'\n</style>' +

						'\n<div id="{id}">' +
							_tabs(1) + '<div class="skill">' +
								_tabs(2) + '<p>HTML5</p>' +
								_tabs(2) + '<div class="skill-bar skill1 slideInLeft animated">' +
									_tabs(3) + '<span class="skill-count1">95%</span>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
							_tabs(1) + '<div class="skill">' +
								_tabs(2) + '<p>CSS3</p>' +
								_tabs(2) + '<div class="skill-bar skill2 slideInLeft animated">' +
									_tabs(3) + '<span class="skill-count2">85%</span>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
							_tabs(1) + '<div class="skill">' +
								_tabs(2) + '<p>JQUERY</p>' +
								_tabs(2) + '<div class="skill-bar skill3 slideInLeft animated">' +
									_tabs(3) + '<span class="skill-count3">75%</span>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
							_tabs(1) + '<div class="skill">' +
								_tabs(2) + '<p>JAVASCRIPT</p>' +
								_tabs(2) + '<div class="skill-bar skill4 slideInLeft animated">' +
									_tabs(3) + '<span class="skill-count4">65%</span>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
							_tabs(1) + '<div class="skill">' +
								_tabs(2) + '<p>PHP</p>' +
								_tabs(2) + '<div class="skill-bar skill5 slideInLeft animated">' +
									_tabs(3) + '<span class="skill-count5">80%</span>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
                        '') +
                        '">' +

					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/skills-20.png',
		    'category': '108',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-42" style="letter-spacing: 4px; text-align: center; text-transform: uppercase;">OUR TEAM SKILLS</h1>' +
						'\n<p class="size-14" style="text-align: center; letter-spacing: 5px; text-transform: uppercase;">HOW GOOD WE ARE</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-60"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +

					'<div class="column full" data-noedit="" data-html="' +

						encodeURIComponent('<style>' +
							_tabs(1) + '#{id} .skill {' +
								_tabs(2) + 'margin-bottom: 35px;' +
								_tabs(2) + 'position: relative;' +
								_tabs(2) + 'overflow-x:hidden;' +
							_tabs(1) + '}' +
							_tabs(1) + '#{id} .skill > p {' +
								_tabs(2) + 'margin: 0;' +
							_tabs(1) + '}' +
							_tabs(1) + '#{id} .skill:before {' +
								_tabs(2) + 'width: 100%;' +
								_tabs(2) + 'height: 5px;' +
								_tabs(2) + 'content: "";' +
								_tabs(2) + 'display: block;' +
								_tabs(2) + 'position: absolute;' +
								_tabs(2) + 'background: #d1d1d1;' +
								_tabs(2) + 'bottom: 0;' +
							_tabs(1) + '}' +
							_tabs(1) + '#{id} .skill-bar {' +
								_tabs(2) + 'width: 100%;' +
								_tabs(2) + 'height: 5px;' +
								_tabs(2) + 'background: #1fcd6d;' +
								_tabs(2) + 'display: block;' +
								_tabs(2) + 'position: relative;' +
							_tabs(1) + '}' +
							_tabs(1) + '#{id} .skill-bar span {' +
								_tabs(2) + 'position: absolute;' +
								_tabs(2) + 'top: -40px;' +
								_tabs(2) + 'padding: 0;' +
								_tabs(2) + 'font-size: 18px;' +
								_tabs(2) + 'padding: 3px 0;' +
							_tabs(1) + '}' +
							_tabs(1) + '#{id} .skill-bar {' +
								_tabs(2) + 'position: relative;' +
							_tabs(1) + '}' +

		    /* SKILL 1 */
							_tabs(1) + '#{id} .skill1 {' +
								_tabs(2) + 'width: 95%;' +
							_tabs(1) + '}' +
							_tabs(1) + '#{id} .skill1 .skill-count1 {' +
								_tabs(2) + 'right: 0;' +
							_tabs(1) + '}' +

		    /* SKILL 2 */
							_tabs(1) + '#{id} .skill2 {' +
								_tabs(2) + 'width: 85%;' +
							_tabs(1) + '}' +
							_tabs(1) + '#{id} .skill2 .skill-count2 {' +
								_tabs(2) + 'right: 0;' +
							_tabs(1) + '}' +

		    /* SKILL 3 */
							_tabs(1) + '#{id} .skill3 {' +
								_tabs(2) + 'width: 75%;' +
							_tabs(1) + '}' +
							_tabs(1) + '#{id}  .skill3 .skill-count3 {' +
								_tabs(2) + 'right: 0;' +
							_tabs(1) + '}' +

		    /* SKILL 4 */
							_tabs(1) + '#{id} .skill4 {' +
								_tabs(2) + 'width: 65%' +
							_tabs(1) + '}' +

							_tabs(1) + '#{id} .skill4 .skill-count4 {' +
								_tabs(2) + 'right: 0;' +
							_tabs(1) + '}' +

		    /* SKILL 5 */
							_tabs(1) + '#{id} .skill5 {' +
								_tabs(2) + 'width: 80%;' +
							_tabs(1) + '}' +
							_tabs(1) + '#{id} .skill5 .skill-count5 {' +
								_tabs(2) + 'right: 0;' +
							_tabs(1) + '}' +
						'\n</style>' +

						'\n<div id="{id}">' +
							_tabs(1) + '<div class="skill">' +
								_tabs(2) + '<p>HTML5</p>' +
								_tabs(2) + '<div class="skill-bar skill1 slideInLeft animated">' +
									_tabs(3) + '<span class="skill-count1">95%</span>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
							_tabs(1) + '<div class="skill">' +
								_tabs(2) + '<p>CSS3</p>' +
								_tabs(2) + '<div class="skill-bar skill2 slideInLeft animated">' +
									_tabs(3) + '<span class="skill-count2">85%</span>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
							_tabs(1) + '<div class="skill">' +
								_tabs(2) + '<p>JQUERY</p>' +
								_tabs(2) + '<div class="skill-bar skill3 slideInLeft animated">' +
									_tabs(3) + '<span class="skill-count3">75%</span>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
							_tabs(1) + '<div class="skill">' +
								_tabs(2) + '<p>JAVASCRIPT</p>' +
								_tabs(2) + '<div class="skill-bar skill4 slideInLeft animated">' +
									_tabs(3) + '<span class="skill-count4">65%</span>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
							_tabs(1) + '<div class="skill">' +
								_tabs(2) + '<p>PHP</p>' +
								_tabs(2) + '<div class="skill-bar skill5 slideInLeft animated">' +
									_tabs(3) + '<span class="skill-count5">80%</span>' +
								_tabs(2) + '</div>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
                        '') +
                        '">' +

					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/skills-21.png',
		    'category': '108',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-42" style="letter-spacing: 4px; text-align: center; text-transform: uppercase;">OUR TEAM SKILLS</h1>' +
						'\n<p class="size-16" style="text-align: center; letter-spacing: 5px; text-transform: uppercase;">HOW GOOD WE ARE</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full" data-noedit="" data-html="' +

						encodeURIComponent('<div>&nbsp;</div>' +
						'\n<style>' +
							_tabs(1) + '.single-chart {' +
							  	_tabs(2) + 'width: 100%;' +
							  	_tabs(2) + 'justify-content: space-around;' +
							_tabs(1) + '}' +

							_tabs(1) + '.circular-chart {' +
							  	_tabs(2) + 'display: block;' +
							 	_tabs(2) + 'margin: 10px auto;' +
							  	_tabs(2) + 'max-width: 80%;' +
							 	_tabs(2) + 'max-height: 250px;' +
							_tabs(1) + '}' +

							_tabs(1) + '.circle-bg {' +
							  	_tabs(2) + 'fill: none;' +
							  	_tabs(2) + 'stroke: #eee;' +
							  	_tabs(2) + 'stroke-width: 1;' +
							_tabs(1) + '}' +

							_tabs(1) + '.circle {' +
							  	_tabs(2) + 'fill: none;' +
							  	_tabs(2) + 'stroke-width: 0.8;' +
							  	_tabs(2) + 'stroke-linecap: round;' +
							  	_tabs(2) + 'animation: progress 1s ease-out forwards;' +
							_tabs(1) + '}' +

							_tabs(1) + '@keyframes progress {' +
								_tabs(2) + '0% {' +
									_tabs(3) + 'stroke-dasharray: 0 100;' +
								_tabs(2) + '}' +
							_tabs(1) + '}' +

							_tabs(1) + '.circular-chart.blue .circle {' +
							  	_tabs(2) + 'stroke: #0984e3;' +
							_tabs(1) + '}' +

							_tabs(1) + '.percentage {' +
							  	_tabs(2) + 'fill: #666;' +
							  	_tabs(2) + 'font-size: 0.3rem;' +
							  	_tabs(2) + 'text-anchor: middle;' +
							_tabs(1) + '}' +
						'\n</style>' +
                        '') +
                        '">' +

					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column fourth">' +
						'<div class="single-chart">' +
							_tabs(1) + '<svg viewBox="0 0 36 36" class="circular-chart blue">' +
								_tabs(2) + '<path class="circle-bg" d="M18 2.0845' +
									_tabs(3) + 'a 15.9155 15.9155 0 0 1 0 31.831' +
									_tabs(3) + 'a 15.9155 15.9155 0 0 1 0 -31.831">' +
								_tabs(2) + '</path>' +
								_tabs(2) + '<path class="circle" stroke-dasharray="90, 100" d="M18 2.0845' +
									_tabs(3) + 'a 15.9155 15.9155 0 0 1 0 31.831' +
									_tabs(3) + 'a 15.9155 15.9155 0 0 1 0 -31.831">' +
								_tabs(2) + '</path>' +
								_tabs(2) + '<text x="18" y="20.35" class="percentage">90%</text>' +
							_tabs(1) + '</svg>' +
						'\n</div>' +
						'\n<p style="text-align: center; letter-spacing: 1px;">HTML / CSS</p>' +
					'</div>' +
					'<div class="column fourth">' +
						'<div class="single-chart">' +
							_tabs(1) + '<svg viewBox="0 0 36 36" class="circular-chart blue">' +
								_tabs(2) + '<path class="circle-bg" d="M18 2.0845' +
									_tabs(3) + 'a 15.9155 15.9155 0 0 1 0 31.831' +
									_tabs(3) + 'a 15.9155 15.9155 0 0 1 0 -31.831">' +
								_tabs(2) + '</path>' +
								_tabs(2) + '<path class="circle" stroke-dasharray="78, 100" d="M18 2.0845' +
									_tabs(3) + 'a 15.9155 15.9155 0 0 1 0 31.831' +
									_tabs(3) + 'a 15.9155 15.9155 0 0 1 0 -31.831">' +
								_tabs(2) + '</path>' +
								_tabs(2) + '<text x="18" y="20.35" class="percentage">78%</text>' +
							_tabs(1) + '</svg>' +
						'\n</div>' +
						'\n<p style="text-align: center; letter-spacing: 1px;">PHP</p>' +
					'</div>' +
					'<div class="column fourth">' +
						'<div class="single-chart">' +
							_tabs(1) + '<svg viewBox="0 0 36 36" class="circular-chart blue">' +
								_tabs(2) + '<path class="circle-bg" d="M18 2.0845' +
									_tabs(3) + 'a 15.9155 15.9155 0 0 1 0 31.831' +
									_tabs(3) + 'a 15.9155 15.9155 0 0 1 0 -31.831">' +
								_tabs(2) + '</path>' +
								_tabs(2) + '<path class="circle" stroke-dasharray="65, 100" d="M18 2.0845' +
									_tabs(3) + 'a 15.9155 15.9155 0 0 1 0 31.831' +
									_tabs(3) + 'a 15.9155 15.9155 0 0 1 0 -31.831">' +
								_tabs(2) + '</path>' +
								_tabs(2) + '<text x="18" y="20.35" class="percentage">65%</text>' +
							_tabs(1) + '</svg>' +
						'\n</div>' +
						'\n<p style="text-align: center; letter-spacing: 1px;">JAVASCRIPT</p>' +
					'</div>' +
					'<div class="column fourth">' +
						'<div class="single-chart">' +
							_tabs(1) + '<svg viewBox="0 0 36 36" class="circular-chart blue">' +
								_tabs(2) + '<path class="circle-bg" d="M18 2.0845' +
									_tabs(3) + 'a 15.9155 15.9155 0 0 1 0 31.831' +
									_tabs(3) + 'a 15.9155 15.9155 0 0 1 0 -31.831">' +
								_tabs(2) + '</path>' +
								_tabs(2) + '<path class="circle" stroke-dasharray="80, 100" d="M18 2.0845' +
									_tabs(3) + 'a 15.9155 15.9155 0 0 1 0 31.831' +
									_tabs(3) + 'a 15.9155 15.9155 0 0 1 0 -31.831">' +
								_tabs(2) + '</path>' +
								_tabs(2) + '<text x="18" y="20.35" class="percentage">80%</text>' +
							_tabs(1) + '</svg>' +
						'\n</div>' +
						'\n<p style="text-align: center; letter-spacing: 1px;">JQUERY</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/skills-22.png',
		    'category': '108',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 class="size-42" style="letter-spacing: 4px; text-align: center; text-transform: uppercase;">TEAM SKILLS</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full" data-noedit="" data-html="' +

						encodeURIComponent('<div>&nbsp;</div>' +
						'\n<style>' +
							_tabs(1) + '.single-chart {' +
							  	_tabs(2) + 'width: 100%;' +
							  	_tabs(2) + 'justify-content: space-around;' +
							_tabs(1) + '}' +

							_tabs(1) + '.circular-chart {' +
							  	_tabs(2) + 'display: block;' +
							  	_tabs(2) + 'margin: 10px auto;' +
							  	_tabs(2) + 'max-width: 80%;' +
							 	_tabs(2) + 'max-height: 250px;' +
							_tabs(1) + '}' +

							_tabs(1) + '.circle-bg {' +
							  	_tabs(2) + 'fill: none;' +
							  	_tabs(2) + 'stroke: #eee;' +
							  	_tabs(2) + 'stroke-width: 1;' +
							_tabs(1) + '}' +

							_tabs(1) + '.circle {' +
							  	_tabs(2) + 'fill: none;' +
							  	_tabs(2) + 'stroke-width: 0.8;' +
							  	_tabs(2) + 'stroke-linecap: round;' +
							  	_tabs(2) + 'animation: progress 1s ease-out forwards;' +
							_tabs(1) + '}' +

							_tabs(1) + '@keyframes progress {' +
							  	_tabs(2) + '0% {' +
									_tabs(3) + 'stroke-dasharray: 0 100;' +
							  	_tabs(2) + '}' +
							_tabs(1) + '}' +

							_tabs(1) + '.circular-chart.blue .circle {' +
							  	_tabs(2) + 'stroke: #0984e3;' +
							_tabs(1) + '}' +

							_tabs(1) + '.percentage {' +
							  	_tabs(2) + 'fill: #666;' +
							  	_tabs(2) + 'font-size: 0.3rem;' +
							  	_tabs(2) + 'text-anchor: middle;' +
							_tabs(1) + '}' +
						'\n</style>' +
                        '') +
                        '">' +

					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<div class="single-chart">' +
							_tabs(1) + '<svg viewBox="0 0 36 36" class="circular-chart blue">' +
								_tabs(2) + '<path class="circle-bg" d="M18 2.0845' +
									_tabs(3) + 'a 15.9155 15.9155 0 0 1 0 31.831' +
									_tabs(3) + 'a 15.9155 15.9155 0 0 1 0 -31.831">' +
								_tabs(2) + '</path>' +
								_tabs(2) + '<path class="circle" stroke-dasharray="85, 100" d="M18 2.0845' +
									_tabs(3) + 'a 15.9155 15.9155 0 0 1 0 31.831' +
									_tabs(3) + 'a 15.9155 15.9155 0 0 1 0 -31.831">' +
								_tabs(2) + '</path>' +
								_tabs(2) + '<text x="18" y="20.35" class="percentage">85%</text>' +
							_tabs(1) + '</svg>' +
						'\n</div>' +
						'\n<p style="text-align: center; letter-spacing: 1px;">HTML / CSS</p>' +
					'</div>' +
					'<div class="column third">' +
						'<div class="single-chart">' +
							_tabs(1) + '<svg viewBox="0 0 36 36" class="circular-chart blue">' +
								_tabs(2) + '<path class="circle-bg" d="M18 2.0845' +
									_tabs(3) + 'a 15.9155 15.9155 0 0 1 0 31.831' +
									_tabs(3) + 'a 15.9155 15.9155 0 0 1 0 -31.831"></path>' +
								_tabs(2) + '<path class="circle" stroke-dasharray="70, 100" d="M18 2.0845' +
									_tabs(3) + 'a 15.9155 15.9155 0 0 1 0 31.831' +
									_tabs(3) + 'a 15.9155 15.9155 0 0 1 0 -31.831">' +
								_tabs(2) + '</path>' +
								_tabs(2) + '<text x="18" y="20.35" class="percentage">70%</text>' +
							_tabs(1) + '</svg>' +
						'\n</div>' +
						'\n<p style="text-align: center; letter-spacing: 1px;">PHP</p>' +
					'</div>' +
					'<div class="column third">' +
						'<div class="single-chart">' +
							_tabs(1) + '<svg viewBox="0 0 36 36" class="circular-chart blue">' +
								_tabs(2) + '<path class="circle-bg" d="M18 2.0845' +
									_tabs(3) + 'a 15.9155 15.9155 0 0 1 0 31.831' +
									_tabs(3) + 'a 15.9155 15.9155 0 0 1 0 -31.831">' +
								_tabs(2) + '</path>' +
								_tabs(2) + '<path class="circle" stroke-dasharray="90, 100" d="M18 2.0845' +
									_tabs(3) + 'a 15.9155 15.9155 0 0 1 0 31.831' +
									_tabs(3) + 'a 15.9155 15.9155 0 0 1 0 -31.831">' +
								_tabs(2) + '</path>' +
								_tabs(2) + '<text x="18" y="20.35" class="percentage">90%</text>' +
							_tabs(1) + '</svg>' +
						'\n</div>' +
						'\n<p style="text-align: center; letter-spacing: 1px;">JAVASCRIPT</p>' +
					'</div>' +
				'</div>'
		},

        {
            'thumbnail': 'preview/achievements-23.png',
            'category': '109',
            'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-40"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 style="text-align: center; letter-spacing: 2px;">Achievements</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<div class="is-card is-dark-text" style="width:calc(100%);background-color: #f6f7f8">' +
							_tabs(1) + '<div style="padding:30px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<div class="spacer height-20"></div>' +
								_tabs(2) + '<h1 class="size-35" style="font-weight: bold;">FUN FACTS</h1>' +
								_tabs(2) + '<div class="spacer height-20"></div>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column half">' +
						'<div class="is-card is-dark-text" style="width:calc(100%);background-color: #f6f7f8">' +
							_tabs(1) + '<div style="padding:30px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<div class="spacer height-20"></div>' +
								_tabs(2) + '<h1 class="size-35" style="font-weight: bold;">AWARDS</h1>' +
								_tabs(2) + '<div class="spacer height-20"></div>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>'
        },

		{
		    'thumbnail': 'preview/achievements-24.png',
		    'category': '109',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 style="text-align: center; letter-spacing: 2px;">Achievements</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<div class="is-card is-light-text" style="width:calc(100%);background-color: #000">' +
							_tabs(1) + '<div style="width:100%;box-sizing:border-box;text-align:center;border: 1px solid #ffffff; padding: 20px">' +
								_tabs(2) + '<div class="spacer height-20"></div>' +
								_tabs(2) + '<h1 class="size-35" style="font-weight: bold;">FUN FACTS</h1>' +
								_tabs(2) + '<div class="spacer height-20"></div>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column half">' +
						'<div class="is-card is-light-text" style="width:calc(100%);background-color: #000">' +
							_tabs(1) + '<div style="width:100%;box-sizing:border-box;text-align:center;border: 1px solid #ffffff; padding: 20px">' +
								_tabs(2) + '<div class="spacer height-20"></div>' +
								_tabs(2) + '<h1 class="size-35" style="font-weight: bold;">AWARDS</h1>' +
								_tabs(2) + '<div class="spacer height-20"></div>' +
								_tabs(2) + '<p>Lorem Ipsum is dummy text of the printing industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/achievements-25.png',
		    'category': '109',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<h1 class="size-38" style="letter-spacing: 4px;">ACHIEVEMENTS</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-100"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column fourth center">' +
						'<h1 class="size-42" style="font-weight: bold;">200+</h1>' +
						'\n<p style="border-bottom: 3px solid #e74c3c; width: 40px; display: inline-block;"></p>' +
						'\n<p style="letter-spacing: 1px; margin-top: 0; line-height:1.2">HAPPY CLIENTS</p>' +
					'</div>' +
					'<div class="column fourth center">' +
						'<h1 class="size-42" style="font-weight: bold;">345</h1>' +
						'\n<p style="border-bottom: 3px solid #e74c3c; width: 40px; display: inline-block;"></p>' +
						'\n<p style="letter-spacing: 1px; margin-top: 0; line-height:1.2">PROJECTS</p>' +
					'</div>' +
					'<div class="column fourth center">' +
						'<h1 class="size-42" style="font-weight: bold;">17</h1>' +
						'\n<p style="border-bottom: 3px solid #e74c3c; width: 40px; display: inline-block;"></p>' +
						'\n<p style="letter-spacing: 1px; margin-top: 0; line-height:1.2">AWARDS WON</p>' +
					'</div>' +
					'<div class="column fourth center">' +
						'<h1 class="size-42" style="font-weight: bold;">72 300</h1>' +
						'\n<p style="border-bottom: 3px solid #e74c3c; width: 40px; display: inline-block;"></p>' +
						'\n<p style="letter-spacing: 1px; margin-top: 0; line-height:1.2">FACEBOOK FANS</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/achievements-26.png',
		    'category': '109',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<h1 class="size-80" style="text-align: center; font-weight: bold;">400+</h1>' +
						'\n<p style="text-align: center; letter-spacing: 1px; font-weight: bold;">HAPPY CLIENTS</p>' +
					'</div>' +
					'<div class="column third">' +
						'<h1 class="size-80" style="text-align: center; font-weight: bold;">123</h1>' +
						'\n<p style="text-align: center; letter-spacing: 1px; font-weight: bold;">COMPLETED PROJECTS</p>' +
					'</div>' +
					'<div class="column third">' +
						'<h1 class="size-80" style="text-align: center; font-weight: bold;">34</h1>' +
						'\n<p style="text-align: center; letter-spacing: 1px; font-weight: bold;">COUNTRIES SERVED</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/achievements-27.png',
		    'category': '109',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<p class="size-21 is-info1" style="letter-spacing: 2px;">Discover</p>' +
						'\n<h1 class="size-48 is-title1-48 is-title-lite">OUR ACHIEVEMENTS</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-100"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column fourth">' +
						'<h1 class="size-64" style="font-weight: bold;">8k+</h1>' +
						'\n<p class="size-16" style="font-weight: bold; font-style: italic; font-family: Georgia, serif; color: rgb(158, 158, 158); margin-top: 0px;">Happy Clients</p>' +
					'</div>' +
					'<div class="column fourth">' +
						'<h1 class="size-64" style="font-weight: bold;">235</h1>' +
						'\n<p class="size-16" style="font-weight: bold; font-style: italic; font-family: Georgia, serif; color: rgb(158, 158, 158); margin-top: 0px;">Projects Done</p>' +
					'</div>' +
					'<div class="column fourth">' +
						'<h1 class="size-64" style="font-weight: bold;">99%</h1>' +
						'\n<p class="size-16" style="font-weight: bold; font-style: italic; font-family: Georgia, serif; color: rgb(158, 158, 158); margin-top: 0px;">Satisfaction</p>' +
					'</div>' +
					'<div class="column fourth">' +
						'<h1 class="size-64" style="font-weight: bold;">11</h1>' +
						'\n<p class="size-16" style="font-weight: bold; font-style: italic; font-family: Georgia, serif; color: rgb(158, 158, 158); margin-top: 0px;">Awards Won</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/quotes-36.png',
		    'category': '110',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<h1 style="text-align: center; letter-spacing: 3px;">TESTIMONIALS</h1>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-80"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full" style="border-left: 3px solid rgb(188, 188, 188);">' +
						'<p class="size-21" style="margin-left: 20px;">"Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."</p>' +
						'\n<p style="color: rgb(143, 143, 143); font-style: italic; margin-left: 20px;">by Raymond Flakes</p>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full">' +
						'<div class="spacer height-20"></div>' +
					'</div>' +
				'</div>' +
				'<div class="row clearfix">' +
					'<div class="column full" style="border-right: 3px solid rgb(188, 188, 188);">' +
						'<p class="size-21 margin-left-1024-reset" style="margin-left: -20px;">"Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."</p>' +
						'\n<p style="color: rgb(143, 143, 143); font-style: italic; margin-left: -20px;" class="margin-left-1024-reset">by David Reardon</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/quotes-37.png',
		    'category': '110',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column full center">' +
						'<p style="border-top: 2px solid #000; width: 120px; display: inline-block;"></p>' +
						'\n<h1 class="size-42" style="text-align: center;">"It\'s easy to use, customizable, and user-friendly. A truly amazing features with reasonable prices."</h1>' +
						'\n<p style="text-align: center; letter-spacing: 2px;">DENNIS ANDERSON</p>' +
						'\n<p style="border-bottom: 2px solid #000; width: 120px; display: inline-block;"></p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/quotes-38.png',
		    'category': '110',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/aigdy-aukkaraya-1394351-unsplash-hkkb91.jpg" alt="">' +
					'</div>' +
					'<div class="column half right">' +
						'<p style="border-top: 2px solid #000; width: 150px; display: inline-block;"></p>' +
						'\n<h1 class="size-35" style="text-align: right;">"It\'s easy to use, customizable, and user-friendly. A truly amazing features with reasonable prices."</h1>' +
						'\n<div class="spacer height-120"></div>' +
						'\n<p style="text-align: right; letter-spacing: 3px;">SANDY TREVINO</p>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/quotes-39.png',
		    'category': '110',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column half">' +
						'<p style="border-top: 2px solid #000; width: 150px; display: inline-block;"></p>' +
						'\n<h1 class="size-35">"It\'s easy to use, customizable, and user-friendly. A truly amazing features with reasonable prices."</h1>' +
						'\n<div class="spacer height-120"></div>' +
						'\n<p style="letter-spacing: 3px;">BRENT HARRIS</p>' +
					'</div>' +
					'<div class="column half">' +
						'<img src="assets/minimalist-blocks/images/nordwood-themes-524137-unsplash-EdpZv1.jpg" alt="">' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/contact-38.png',
		    'category': '116',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column third">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<i class="icon ion-android-home size-32" style="line-height: 1"></i>' +
								_tabs(2) + '<h3 class="size-18" style="font-weight: bold;">Address</h3>' +
								_tabs(2) + '<p class="size-16">123 Street Name, City.<br>State 12345</p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<i class="icon ion-android-call size-32" style="line-height: 1"></i>' +
								_tabs(2) + '<h3 class="size-18" style="font-weight: bold;">Phone</h3>' +
								_tabs(2) + '<p class="size-16">(123) 456 7890 007 /&nbsp;<br>(123) 789 1234 005<br></p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
					'<div class="column third">' +
						'<div class="is-card is-dark-text shadow-1" style="width:calc(100%);">' +
							_tabs(1) + '<div style="padding:25px;width:100%;box-sizing:border-box;text-align:center;">' +
								_tabs(2) + '<i class="icon ion-android-drafts size-32" style="line-height: 1"></i>' +
								_tabs(2) + '<h3 class="size-18" style="font-weight: bold;">Email</h3>' +
								_tabs(2) + '<p class="size-16">company@sample.com<br><br></p>' +
							_tabs(1) + '</div>' +
						'\n</div>' +
					'</div>' +
				'</div>'
		},

		{
		    'thumbnail': 'preview/contact-39.png',
		    'category': '116',
		    'html':
				'<div class="row clearfix">' +
					'<div class="column center fourth">' +
						'<div style="text-align: center; width: 80px; height: 80px; line-height: 80px; border-radius: 50%; border: 1px solid #888888; display: inline-block;margin-bottom: 25px">' +
							_tabs(1) + '<i class="icon ion-ios-location-outline size-32" style="color: #888888"></i>' +
						'\n</div>' +
						'\n<p>123 Street Name, City<br>State 3456</p>' +
					'</div>' +
					'<div class="column center fourth">' +
						'<div style="text-align: center; width: 80px; height: 80px; line-height: 80px; border-radius: 50%; border: 1px solid #888888; display: inline-block;margin-bottom: 25px">' +
							_tabs(1) + '<i class="icon ion-ios-telephone-outline size-32" style="color: #888888"></i>' +
						'\n</div>' +
						'\n<p>(123) 456 7890 11 /<br>789 7654 00</p>' +
					'</div>' +
					'<div class="column center fourth">' +
						'<div style="text-align: center; width: 80px; height: 80px; line-height: 80px; border-radius: 50%; border: 1px solid #888888; display: inline-block;margin-bottom: 25px">' +
							_tabs(1) + '<i class="icon ion-ios-email-outline size-32" style="color: #888888"></i>' +
						'\n</div>' +
						'\n<p>name@example.com</p>' +
					'</div>' +
					'<div class="column center fourth">' +
						'<div style="text-align: center; width: 80px; height: 80px; line-height: 80px; border-radius: 50%; border: 1px solid #888888; display: inline-block;margin-bottom: 25px">' +
							_tabs(1) + '<i class="icon ion-ios-time-outline size-32" style="color: #888888"></i>' +
						'\n</div>' +
						'\n<p>Mon - Fri: 10 AM - 8 PM<br>Sat: 11 AM - 6 PM<br><br></p>' +
					'</div>' +
				'</div>'
		},



	]

};

if(!(window.Glide||parent.Glide)){
    for (let i = 0; i < data_basic.snippets.length; i++) {
        if (data_basic.snippets[i].glide) {
            data_basic.snippets.splice(i, 1);
            break;
        }
    }
}

// document.addEventListener("DOMContentLoaded", function (event) {
//     var bHideSliderSnippet = false;
//     if (typeof jQuery.contentbuilder == 'undefined') {
//         //content.js is on dialog (iframe)
//         if (typeof parent.jQuery.fn.slick == 'undefined') {
//             bHideSliderSnippet = true;
//         }

//     } else {
//         //content.js is on side panel
//         if (typeof jQuery.fn.slick == 'undefined') {
//             bHideSliderSnippet = true;
//         }
//     }

//     for (var nIndex = 0; nIndex < data_basic.snippets.length; nIndex++) {

//         if (data_basic.snippets[nIndex].thumbnail.indexOf('element-slider.png') != -1 && bHideSliderSnippet) {
//             data_basic.snippets.splice(nIndex, 1);
//             break;
//         }
//     }

// });