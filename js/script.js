	
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
		//modal gift
		let gift = document.querySelector('.fixed-gift');
		let giftModal = document.querySelector('.popup-gift');
		gift.addEventListener('click', showGiftModal);
		function showGiftModal(){
			giftModal.style.display = 'block';
			document.body.overflow = 'hidden';
			gift.style.display = 'none';
		}
		function hidePopupModalGift(e){
			console.log('hide design or consultation');
			if(e.target.classList.contains('popup-gift') || e.target.classList.contains('popup-close')){
				giftModal.style.display = 'none';
				document.body.style.overflow = '';
			}			
		}

		for(let i = 0; i < btnsPopupClose.length; i++){
			let btnPopupClose = btnsPopupClose[i];
			btnPopupClose.addEventListener('click', hidePopupModalGift);
		}
			
		giftModal.addEventListener('click', hidePopupModalGift);




		//Подгрузка блоков
		let moreBtn = document.querySelector('.button-styles');
		let showHiddenBlocks = document.querySelectorAll('.styles-2');
		function showHiddenBlocksFunc(){
			for(let i = 0; i < showHiddenBlocks.length; i++){
				let showHiddenBlock = showHiddenBlocks[i];
				showHiddenBlock.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');

			}
			moreBtn.style.display = 'none';
		}
		moreBtn.addEventListener('click', showHiddenBlocksFunc);



		//calculator
		
	  
	  
	  

	  let size      = document.getElementById('size');
	  let material  = document.getElementById('material');
	  let variants  = document.getElementById('options');
	  let promocode = document.querySelector('.promocode');
	  let calcPrice = document.querySelector('.calc-price');//Вывод суммы заказа
	  let result; /*'Для расчета нужно выбрать размер картины и материал картины';*/
	  let a;
	  let b;
	  let c;
	  let ratio;
	  

  size.addEventListener('change', function(){
  	promocode.value = '';
  	if(size.options[size.selectedIndex].value == '' || material.options[material.selectedIndex].value == ''){
      result = 'Для расчета нужно выбрать размер картины и материал картины';
      
    } 
  	isPromo();
  	a = +size.options[size.selectedIndex].value;
    b = +material.options[material.selectedIndex].value;
	result = a + b;
	
  	
    
    calcPrice.innerHTML = result;
  });
  material.addEventListener('change', function(){
  	promocode.value = '';
  	if(material.options[material.selectedIndex].value == '' || size.options[size.selectedIndex].value == ''){
      result = 'Для расчета нужно выбрать размер картины и материал картины';
      
    } 
  	 isPromo();
  	a = +size.options[size.selectedIndex].value;
    b = +material.options[material.selectedIndex].value;
    result = a + b;
    
    
    
    calcPrice.innerHTML = result;
  });
 variants.addEventListener('change', function(){
 	promocode.value = '';
 	isPromo();
 	if(material.options[material.selectedIndex].value == '' || size.options[size.selectedIndex].value == '') {
 		result = 'Для расчета нужно выбрать размер картины и материал картины';
 		}
 	else{
 		if(material.options[material.selectedIndex].value != '' && size.options[size.selectedIndex].value != '' && variants.options[variants.selectedIndex].value != ''){
 		
 		a = +size.options[size.selectedIndex].value;
    	b = +material.options[material.selectedIndex].value;
    	c = +variants.options[variants.selectedIndex].value;
    	result = a + b + c;
    	
 	} else if (material.options[material.selectedIndex].value != '' && size.options[size.selectedIndex].value != '' && variants.options[variants.selectedIndex].value == ''){
 		
 		a = +size.options[size.selectedIndex].value;
    	b = +material.options[material.selectedIndex].value;
    	c = +variants.options[variants.selectedIndex].value;
    	result = a + b;
    	
    	
 	} 

 	} 
 	
 	calcPrice.innerHTML = result;
  });
 
 promocode.addEventListener('change', isPromo);
 
function isPromo(){
	
	
	
 	if(size.options[size.selectedIndex].value == '' || material.options[material.selectedIndex].value == ''){
 		//result = 0;
 		console.log('empty require fields');
 		calcPrice.innerHTML = 'Для расчета нужно выбрать размер картины и материал картины';
	 	}else if(+size.options[size.selectedIndex].value != '' && +material.options[material.selectedIndex].value != ''){
	 	calcSum();
	 }
}
 	function calcSum(){
 		if(promocode.value == 'IWANTPOPART'){
 			result = (+size.options[size.selectedIndex].value + +material.options[material.selectedIndex].value + +variants.options[variants.selectedIndex].value) * 0.7;
 		}
 		else {
 			result =  (+size.options[size.selectedIndex].value + +material.options[material.selectedIndex].value + +variants.options[variants.selectedIndex].value) * 1;
 		}
 		calcPrice.innerHTML = result;
 	}
  
  
  //Фильтрация блоков
  let portfolioMenu = document.querySelector('.portfolio-menu');
  let portfolioBlock = document.querySelectorAll('.portfolio-block');
  let portfolioWrapper = document.querySelector('.portfolio-wrapper');
  let noWorks = document.querySelector('.portfolio-no');
  
 portfolioMenu.addEventListener('click', function(e){
 	let targetClass = e.target.getAttribute('class');
 	if(e.target.classList.contains(targetClass)){
 		console.log(targetClass);
  		for(let i = 0; i < portfolioBlock.length; i++){
	  			portfolioBlock[i].style.display = 'none';
	  		if(portfolioBlock[i].classList.contains(targetClass)){
	  			portfolioBlock[i].style.display = 'block';
	  		}
	  	}if (e.target.classList.contains('grandmother') || e.target.classList.contains('granddad')){
	  			console.log('no works block');
				noWorks.style.display = 'block';
	  	}
    }
 });
  /*portfolioMenu.addEventListener('click', (e) => {
  	if(e.target.classList.contains('all')){
  		for(let i = 0; i < portfolioBlock.length; i++){
	  			portfolioBlock[i].style.display = 'none';
	  		if(portfolioBlock[i].classList.contains('all')){
	  			portfolioBlock[i].style.display = 'block';
	  		}
	  	}
    }
  	if(e.target.classList.contains('lovers')){
  		for(let i = 0; i < portfolioBlock.length; i++){
	  			portfolioBlock[i].style.display = 'none';
	  		if(portfolioBlock[i].classList.contains('lovers')){
	  			portfolioBlock[i].style.display = 'block';
	  		}
	  	}
    }
    if(e.target.classList.contains('chef')){
  		for(let i = 0; i < portfolioBlock.length; i++){
	  			portfolioBlock[i].style.display = 'none';
	  		if(portfolioBlock[i].classList.contains('chef')){
	  			portfolioBlock[i].style.display = 'block';
	  		}
	  	}
    }
    if(e.target.classList.contains('girl')){
  		for(let i = 0; i < portfolioBlock.length; i++){
	  			portfolioBlock[i].style.display = 'none';
	  		if(portfolioBlock[i].classList.contains('girl')){
	  			portfolioBlock[i].style.display = 'block';
	  		}
	  	}
    }
    if(e.target.classList.contains('guy')){
  		for(let i = 0; i < portfolioBlock.length; i++){
	  			portfolioBlock[i].style.display = 'none';
	  		if(portfolioBlock[i].classList.contains('guy')){
	  			portfolioBlock[i].style.display = 'block';
	  		}
	  	}
    }
    if(e.target.classList.contains('lovers')){
  		for(let i = 0; i < portfolioBlock.length; i++){
	  			portfolioBlock[i].style.display = 'none';
	  		if(portfolioBlock[i].classList.contains('lovers')){
	  			portfolioBlock[i].style.display = 'block';
	  		}
	  	}
    }
    
    if(e.target.classList.contains('grandmother') || e.target.classList.contains('granddad')){
    	let noWorks = document.querySelector('.portfolio-no');
  		for(let i = 0; i < portfolioBlock.length; i++){
	  			portfolioBlock[i].style.display = 'none';
	  			noWorks.style.display = 'block';
	  		
	  	}
    }
  });//Фильтрация блоков конец*/



  //Картинки при наведении

  let sizesBlock = document.querySelectorAll('.sizes-block');
  let sw = document.querySelector('.sizes-wrapper');//общий контейнер
  let imgs = sw.querySelectorAll('img');
  
  
  	
  
	sw.addEventListener('mouseover', showImages);
  	sw.addEventListener('mouseout', hideImages);
    sw.addEventListener('tap', showImages);
  	sw.addEventListener('tap', hideImagesM);
  	
  
  	
  
  function showImages(e){
  	if(e.target.tagName == 'IMG'){
  		e.target.style.position = 'relative';
    	e.target.style.zIndex = '10';
    	e.target.src = e.target.src.replace('.png', '-1.png');
  	}
  }

  function hideImages(e){
  	if(e.target.tagName == 'IMG'){
  		e.target.style.position = '';
    	e.target.style.zIndex = '';
    	e.target.src = e.target.src.replace('-1.png', '.png');
  	}
  }
  function hideImagesM(e){
  	if(e.target.tagName != 'IMG'){
  		e.target.style.position = '';
    	e.target.style.zIndex = '';
    	e.target.src = e.target.src.replace('-1.png', '.png');
  	}
  }
  //Картинка при наведении конец

  //Нижний слайдер

  let slideIndex1 = 1;
  let slides1   = document.getElementsByClassName('feedback-slider-item');
  let prev1     = document.querySelector('.main-prev-btn');
  let next1     = document.querySelector('.main-next-btn');
  setInterval(function(){
		plusSlides1(1);
	}, 3000);

  showSlides1(slideIndex1);
  function showSlides1(n){
    if(n > slides1.length) {
      slideIndex1 = 1;
    }
    if(n < 1) {
      slideIndex1 = slides1.length;
    }
    for(let i = 0; i < slides1.length; i++){
      slides1[i].style.display = 'none';
    }
    
    slides1[slideIndex1 - 1].style.display = 'block';
    
  }
  function plusSlides1(n){
    showSlides1(slideIndex1 += n)
  }
  function currentSlide1(n){
    showSlides1(slideIndex1 = n)
  }
  prev1.addEventListener('click', function(){
    plusSlides1(-1);
  });
  next1.addEventListener('click', function(){
    plusSlides1(1);
  });
  //слайдер конец

  //accordion
  let accordion  = document.getElementById('accordion');//обертка
  let accBlocks  = document.querySelectorAll('.accordion-block');//контент аккордиона
  let accHeads   = document.querySelectorAll('.accordion-heading');//заголовок
  

  for(let i = 0; i < accHeads.length; i++){
  	let accHead = accHeads[i];
  	accHead.addEventListener('click', toggleBlocks);
  }
  for(let i = 0; i < accBlocks.length; i++){
  	let accBlock = accBlocks[i];
  	accBlock.style.display = 'none';
  }
  function toggleBlocks(e){
  	this.classList.toggle('activePanel');
  	if(this.classList.contains('accordion-heading')){
  		let panel = this.nextElementSibling;
  		if(panel.style.display == 'block'){
  			panel.style.display = 'none';
  		}else {
  			panel.style.display = 'block';
  		}
  		
  	}
  }
  
  	
  //accordion
  
		

	


	    	

	    
	