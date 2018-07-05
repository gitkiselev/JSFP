
	let slideIndex = 1;
	let slides = document.getElementsByClassName('main-slider-item');
	for(let i = 0; i < slides.length; i++){
	      
	      
	    }
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
	let btnsDesign     = document.getElementsByClassName('button-design');
	let btnsPopupClose = document.querySelectorAll('.popup-close');//X
	let popupsDialog   = document.querySelectorAll('.popup-dialog');//modal
	let popupDesignOverlay = document.querySelector('.popup-design');//overlay

	//closing popup by clicking on overlay
	popupDesignOverlay.addEventListener('click', hidePopupModal);
	function hidePopupModal(e){
		console.log(1);
		if(e.target.classList.contains('popup-close') || e.target.classList.contains('popup-design')){
			popupDesignOverlay.style.display = 'none';
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
		popupDesignModal.style.zIndex = '1000000000';
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
			popupConsultation.style.zIndex = '1000000000';
			document.body.style.overflow = 'hidden';	
	}
	for(let i = 0; i < btnsConsultation.length; i++){
		let btnConsultation = btnsConsultation[i];
		btnConsultation.addEventListener('click', showPopupConsultation);
	}
	 //forms validation and sending in modal
	    let designForm = document.getElementsByName('design-form')[0];
	    let nameDF     = designForm.querySelector('#nameDF');
	    let commentDF  = designForm.querySelector('#commentDF');
	    let phoneDF    = designForm.querySelector('.phoneDF');
	    let emailDF    = designForm.querySelector('#emailDF');
	    //let value_name_DF = nameDF.value;
	    //let value_comment_DF = commentDF.value;
	    
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
	    /*function allowPhone(){
	    	console.log('typing phone');
	    	let regexp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d{2}\- ]{7,10}$/;
	    	this.value = this.value.replace(regexp, '');
	    	
	    }*/
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
	    //ajax
	    
     


let message = new Object();
message.loading = "Загрузка...";
message.success = "Спасибо! Скоро мы с вами свяжемся";
message.failure = "что пошло не так";

let form = document.getElementsByClassName("main-form")[0];
let input = form.getElementsByTagName("input");
let statusMessage = document.createElement("div");
statusMessage.classList.add("status");

form.addEventListener("submit", function(e) {
  event.preventDefault();
  form.appendChild(statusMessage);

  //AJAX
  let request = new XMLHttpRequest();
  request.open("POST", "server.php");
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  let formData = new FormData(form);

  request.send(formData);

  request.onreadystatechange = function() {
    if (request.readyState < 4) {
      statusMessage.innerHTML = message.loading;
    } else if (request.readyState === 4) {
      if (request.status === 200 && request.status < 300) {
        statusMessage.innerHTML = message.success;
        //можно  добавлять контент
      } else {
        statusMessage.innerHTML = message.failure;
      }
    }
  };

  for (let i = 0; i < input.length; i++) {
    input[i].value = ""; // ощищаем поля ввода
  }
});

//Скрипт к контактной форме
let message1 = new Object();
message1.loading = "Загрузка...";
message1.success = "Спасибо! Скоро мы с вами свяжемся";
message1.failure = "Недостаточно данных";


let formDFInput = designForm.querySelectorAll("input, textarea");
let statusMessageDF = document.createElement("div");
statusMessageDF.classList.add("status");
let formDataDF = new FormData(designForm);

designForm.addEventListener("submit", function(e) {
  event.preventDefault();
  designForm.appendChild(statusMessageDF);
  //AJAX for contact form
  let request1 = new XMLHttpRequest();
  request1.open("POST", "server.php");
  request1.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded"
  );
  request1.send(formDataCF);

  request1.onreadystatechange = function() {
    if (request1.readyState < 4) {
      statusMessageCF.innerHTML = message1.loading;
    } else if (request1.readyState === 4) {
      if (request1.status === 200 && request1.status < 300) {
        statusMessageCF.innerHTML = message1.success;
      } else {
        statusMessageCF.innerHTML = message1.failure;
      }
    }
  };
  for (let i = 0; i < formDFInput.length; i++) {
    formDFInput[i].value = ""; // ощищаем поля ввода
  }
});



	    	

	    
	