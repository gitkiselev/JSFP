	
	let slideIndex = 1;
	let slides = document.getElementsByClassName('main-slider-item');
	
	setInterval(function(){
		plusSlides(1);
	}, 3000);
	
	
	function showSlides(n){
		if (n > slides.length){
			slideIndex = 1;
		}
		if(n < 1){
			slideIndex = slides.length;
		}
		for(let i = 0; i < slides.length; i++){
	      slides[i].style.display = 'none';
	      
	    }
	    
	    
	    slides[slideIndex - 1].style.display = 'block';
	    slides[slideIndex - 1].classList.add('animated', 'slideInDownOutDown');
	    	  
	}//showSlides
	function plusSlides(n){
    	showSlides(slideIndex += n);
    	
    }



	//popup design
	let btnsDesign         = document.getElementsByClassName('button-design');
	let btnsPopupClose     = document.querySelectorAll('.popup-close');//X
	let popupsDialog       = document.querySelectorAll('.popup-dialog');//modal
	let popupDesignOverlay = document.querySelector('.popup-design');//overlay
	let popupContentDF     = document.querySelectorAll('.popup-content');//content has to changed by text
	let formDF             = document.getElementById('myform');
	let contentDF          = document.getElementById('contentDF');
	let designForm         = document.getElementsByName('design-form')[0];
    let nameDF             = designForm.querySelector('#nameDF');
    let commentDF          = designForm.querySelector('#commentDF');
    let phoneDF            = designForm.querySelector('.phoneDF');
    let emailDF            = designForm.querySelector('#emailDF');
    let popupOk            = document.querySelector('.popup-ok'); 
    let popupError         = document.querySelector('.popup-error');
	//closing popup by clicking on overlay
	popupDesignOverlay.addEventListener('click', hidePopupModal);
	popupOk.addEventListener('click', hidePopupModalSuccess);
	popupError.addEventListener('click', hidePopupModalError);
	//Функции закрытия модальных окон
	function hidePopupModal(e){
		console.log('modal design closed');
		if(e.target.classList.contains('popup-close') || e.target.classList.contains('popup-design')){
			popupDesignOverlay.style.display = 'none';
			document.body.style.overflow = '';
		}			
	}
	function hidePopupModalSuccess(e){
		console.log('modal success closed');
		if(e.target.classList.contains('popup-close') || e.target.classList.contains('popup-ok')){
			popupOk.style.display = 'none';
			document.body.style.overflow = '';
		}	
	}
	function hidePopupModalError(e){
		console.log('modal error closed');
		if(e.target.classList.contains('popup-close') || e.target.classList.contains('popup-error')){
			popupError.style.display = 'none';
			document.body.style.overflow = '';
		}	
	}
	//closing by clicking on the button "X"
	for(let i = 0; i < btnsPopupClose.length; i++){
		let btnPopupClose = btnsPopupClose[i];
		btnPopupClose.addEventListener('click', hidePopupModal);
		
	}
	function showPopupDesign(){
		let popupsDialog = document.querySelectorAll('.popup-dialog');
		for(let i = 0; i < popupsDialog.length; i++){
			let popupDialog = popupsDialog[i];
			popupDialog.style.display = 'block';
		}
		let popupDesignModal = document.querySelector('.popup-design');
		popupDesignModal.style.display = 'block';
		//popupDesignModal.style.zIndex = '1000000000';
		document.body.style.overflow = 'hidden';
	}
	for(let i = 0; i < btnsDesign.length; i++){
		let btnDesign = btnsDesign[i];
		btnDesign.addEventListener('click', showPopupDesign);
		
	}



	//popup consultation
	let btnsConsultation  = document.getElementsByClassName('button-consultation');
	let popupConsultation = document.querySelector('.popup-consultation');//overlay
	//closing popup by clicking on overlay
	popupConsultation.addEventListener('click', hidePopupModalConsultation);
	function hidePopupModalConsultation(e){
		console.log('hide design or consultation');
		if(e.target.classList.contains('popup-consultation') || e.target.classList.contains('popup-close')){
			popupConsultation.style.display = 'none';
			document.body.style.overflow = '';
		}			
	}
	//closing by clicking on the button "X"
	for(let i = 0; i < btnsPopupClose.length; i++){
		let btnPopupClose = btnsPopupClose[i];
		btnPopupClose.addEventListener('click', hidePopupModalConsultation);
	}
	function showPopupConsultation(){
			popupConsultation.style.display = 'block';
			//popupConsultation.style.zIndex = '1000000000';
			document.body.style.overflow = 'hidden';	
	}
	for(let i = 0; i < btnsConsultation.length; i++){
		let btnConsultation = btnsConsultation[i];
		btnConsultation.addEventListener('click', showPopupConsultation);
	}
	 //forms validation and sending in modal
	    
	    
	    
	    function allowRusWords(){
	    	console.log('typing name');
	    	let regexp = /[^А-ЯЁ\s][^\s]/igm;
	    	this.value = this.value.replace(regexp, '');
	    }
	    function allowRusSentences(){
	    	console.log('typing comment');
	    	let regexp = /[^А-ЯЁ\s,\.!?][^\s]/igm;
	    	this.value = this.value.replace(regexp, '');
	    }
	    function allowEmail(){
	    	console.log('typing email');
	    	let regexp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,3})$/;
	    	
	    	if(this.value.match(regexp)){
	    		return true;
	    	} else {
	    		alert('Неверный email');
	    		let mes = document.createElement('div');
	    		mes.innerHTML = 'Неверный email';
	    		popupDesignOverlay.appendChild(mes);
	    		//this.value = '';
	    		return false;

	    	}
	    }
	    
	    function setCursorPosition(pos, elem) {
		    elem.focus();
		    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
		    else if (elem.createTextRange) {
		        var range = elem.createTextRange();
		        range.collapse(true);
		        range.moveEnd("character", pos);
		        range.moveStart("character", pos);
		        range.select()
		    }
		}

		function mask(event) {
		    var matrix = this.defaultValue,
		        i = 0,
		        def = matrix.replace(/\D/g, ""),
		        val = this.value.replace(/\D/g, "");
		        def.length >= val.length && (val = def);
		    matrix = matrix.replace(/[_\d]/g, function(a) {
		        return val.charAt(i++) || "_"
		    });
		    this.value = matrix;
		    i = matrix.lastIndexOf(val.substr(-1));
		    i < matrix.length && matrix != this.defaultValue ? i++ : i = matrix.indexOf("_");
		    setCursorPosition(i, this)
		}

    
    	phoneDF.addEventListener("input", mask, false)
	    nameDF.addEventListener('input', allowRusWords);
	    commentDF.addEventListener('input', allowRusSentences);
	    emailDF.addEventListener('blur', allowEmail);
	    



		//Скрипт к форме дизайн портрета
		let message = new Object();
		message.loading = "Загрузка...";
		message.success = "Спасибо! Скоро мы с вами свяжемся";
		message.failure = "Недостаточно данных";


		let formDFInput = designForm.querySelectorAll("input, textarea");
		let statusMessageDF = document.createElement("div");
		statusMessageDF.classList.add("status");
		let formDataDF = new FormData(designForm);

		designForm.addEventListener("submit", function(e) {
		  event.preventDefault();
		  designForm.appendChild(statusMessageDF);
		  //AJAX for contact form
		  let request = new XMLHttpRequest();
		  request.open("POST", "server.php");
		  request.setRequestHeader(
		    "Content-Type",
		    "application/x-www-form-urlencoded"
		  );
		  request.send(formDataDF);
		  
		  request.onreadystatechange = function() {
		    if (request.status === 200 && request.status < 300) {
		      	
		        //statusMessage.innerHTML = message.success;
		        //можно  добавлять контент
		        popupDesignOverlay.style.display = 'none';
		        popupOk.style.display = 'block';
		      } else {
		        //contentDF.innerHTML = message.failure;
		      }
		  };
		  for (let i = 0; i < formDFInput.length; i++) {
		    formDFInput[i].value = ""; // ощищаем поля ввода
		  }
		});

			


	


	    	

	    
	