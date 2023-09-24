var Holder_Form = document.getElementById("Holder-Form")
var Logo = document.getElementById("Logo")
var Form_wapper = document.getElementById("Form-wapper")
var Form = document.getElementById("form")
var headline_1 = document.getElementById("Headline")
var headline_2 = document.getElementById("Headline-2")
var Headline_btn = document.getElementById("Headline-btn")

$(window).on('load', ()=>{
    setTimeout(function(){
        $("#loading").fadeOut(1000)
        // document.getElementById('vid').play();
    },1000)
})

function Open_Close(){

    if(Holder_Form.classList != "Holder-Form-Opener"){
        Holder_Form.classList.remove("Holder-Form-Closer")
        Holder_Form.classList.add("Holder-Form-Opener")
        Form_wapper.classList.add("Form-wapper-Opener")
        headline_2.style.display = "block"
        Form.style.display = "flex"
        Headline_btn.style.display = "block"
        // headline_1.fadeOut(1000)
        $("#Headline").fadeOut(1000)
            
        
    }

    else{
        Holder_Form.classList.remove("Holder-Form-Opener")
        Holder_Form.classList.add("Holder-Form-Closer")
        Form_wapper.classList.remove("Form-wapper-Opener")
        headline_2.style.display = "none"
        Form.style.display = "none"
        Headline_btn.style.display = "none"
        // headline_1.fadeIn(1000)
        $("#Headline").fadeIn(1000)
    }
}

