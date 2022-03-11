let firstStep = document.querySelector('[data-first-step]')
let secondStep = document.querySelector('[data-second-step]')
let thirdStep = document.querySelector('[data-third-step]')

let mobileStepFirst = document.querySelectorAll('[data-mobile-first]')
let mobileStepSecond = document.querySelectorAll('[data-mobile-second]')
let mobileStepThird = document.querySelectorAll('[data-mobile-third]')
let contact = document.querySelector('[data-contact]')

let firstForm = document.querySelector('[data-first-form]')
let secondForm = document.querySelector('[data-secondary-form]')
let thirdForm = document.querySelector('[data-third-form]')
let submitBtn= document.querySelector('[data-submit]')
let nextForm = document.querySelector('[data-next-form]')
let prevForm = document.querySelector('[data-prev-form]')
let form = document.querySelector('.form')
selects = document.querySelectorAll('select')
inputs = document.querySelectorAll('input')

let mobileSecondStep = document.querySelector('[data-mobile-second-step]')
let mobileThirdStep  = document.querySelector('[data-mobile-third-step]')

nextForm.addEventListener('click',()=>{
    if(!form.checkValidity()){
        Swal.fire({
            title: 'Preencha todos os campos',
            text: 'Por favor, Preencha todos os campos antes de continuar',
            icon: 'error',
            confirmButtonText: 'Continuar'
          })
          form.reportValidity()
        return
    }

    mobileSecondStep.classList.add('d-none')
    nextForm.parentNode.classList.add('d-none')
    firstStep.classList.add('next-form')
    firstStep.classList.remove('active-form')
    secondStep.classList.add('active-form')
    firstForm.classList.remove('form-active')
    secondForm.classList.add('form-active')
    checkFormState()
    selects.forEach((item)=>{
        item.required = 'required'
    })
    inputs.forEach((item)=>{
        item.required = 'required'
    })


})

prevForm.addEventListener('click',()=>{
    mobileSecondStep.classList.remove('d-none')
    nextForm.parentNode.classList.remove('d-none')
    firstStep.classList.remove('next-form')
    firstStep.classList.add('active-form')
    secondStep.classList.remove('active-form')
    secondStep.classList.add('next-form')
    firstForm.classList.add('form-active')
    secondForm.classList.remove('form-active')
    checkFormState()
    selects.forEach((item)=>{
        item.required = ''
    })
    inputs.forEach((item)=>{
        item.required = ''
    })

})

const checkFormState = () =>{
    if(firstForm.classList.contains('form-active')){
        prevForm.classList.add('d-none')
        submitBtn.classList.add('d-none')
        nextForm.classList.remove('d-none')
        contact.classList.add('d-none')

        mobileStepFirst.forEach(el =>{
            el.classList.add('active-form')
        })
        mobileStepSecond.forEach(el =>{
            el.classList.remove('active-form')
        })
        mobileStepThird.forEach(el =>{
            el.classList.remove('active-form')
        })
    }
    if(secondForm.classList.contains('form-active')){
        submitBtn.classList.remove('d-none')
        nextForm.classList.add('d-none')
        prevForm.classList.remove('d-none')
        contact.classList.add('d-none')
        mobileStepFirst.forEach(el =>{
            el.classList.remove('active-form')
        })
        mobileStepSecond.forEach(el =>{
            el.classList.add('active-form')
        })
        mobileStepThird.forEach(el =>{
            el.classList.remove('active-form')
        })

    }

    if(thirdForm.classList.contains('form-active')){
        submitBtn.classList.add('d-none')
        nextForm.classList.add('d-none')
        prevForm.classList.add('d-none')
        mobileSecondStep.classList.add('d-none')
        mobileThirdStep.classList.add('d-none')

        mobileStepFirst.forEach(el =>{
            el.classList.remove('active-form')
        })
        mobileStepSecond.forEach(el =>{
            el.classList.remove('active-form')
        })
        mobileStepThird.forEach(el =>{
            el.classList.add('active-form')
        })

        contact.classList.remove('d-none')
        firstStep.classList.add('next-form')
        firstStep.classList.remove('active-form')
        secondStep.classList.remove('active-form')
        secondStep.classList.add('next-form')
        thirdStep.classList.remove('next-form')
        thirdStep.classList.add('active-form')
    }

}

submitBtn.addEventListener('click',()=>{
    if(!form.checkValidity()){
        Swal.fire({
            title: 'Preencha todos os campos',
            text: 'Por favor, Preencha todos os campos antes de continuar',
            icon: 'error',
            confirmButtonText: 'Continuar'
          })
          form.reportValidity()
        return
    }
    selects.forEach(select => {
        if(select.value == 'Selecione' || select.value == 'Selecione o tipo'){
            Swal.fire({
                title: 'Selecione uma das opções nos campos suspenso',
                text: 'Por favor, Preencha todos os campos antes de continuar',
                icon: 'error',
                confirmButtonText: 'Continuar'
              })
              form.reportValidity()
            return
        }
    })
})

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    firstForm.classList.remove('form-active')
    secondForm.classList.remove('form-active')
    thirdForm.classList.add('form-active')
    checkFormState()
})


checkFormState()

  //api para requisição
  // Alterar os IDS
  let estado = document.getElementById("estado");
  let municipio = document.getElementById("cidade");
  
  var requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  
  var resposta = [];
  
  fetch(
    "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
        result.forEach((element) => {
            estado.innerHTML += `<option value="${element.sigla}">${element.nome}</option>`
        });
  })
    .catch((error) => console.log("error", error));
  
  
    estado.addEventListener('change', function(){        
        fetch(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado.value}/municipios?orderBy=nome`,
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {    
                          municipio.innerHTML = '';
              result.forEach((element) => {
                  municipio.innerHTML += `<option value="${element.nome}">${element.nome}</option>`
              });
          })
          .catch((error) => console.log("error", error));
    })
  
  
  //mascara
  //mask for phone
  let telefone = document.getElementById('telefone')
  telefone.addEventListener('keyup', (e)=>{
      handleTelefoneMask(e)
  })
  function handleTelefoneMask(e) {
      var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
      e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
  }


