var Holder_Form = document.getElementById("Holder-Form")
var Logo = document.getElementById("Logo")
var Form_wapper = document.getElementById("Form-wapper")
var Form = document.getElementById("form")
var headline_2 = document.getElementById("Headline-2")
var Headline_btn = document.getElementById("Headline-btn")
function Open_Close(){

    if(Holder_Form.classList != "Holder-Form-Opener"){
        Holder_Form.classList.remove("Holder-Form-Closer")
        Holder_Form.classList.add("Holder-Form-Opener")
        Form_wapper.classList.add("Form-wapper-Opener")
        headline_2.style.display = "block"
        Form.style.display = "flex"
        Headline_btn.style.display = "block"
        
            
        
    }

    else{
        Holder_Form.classList.remove("Holder-Form-Opener")
        Holder_Form.classList.add("Holder-Form-Closer")
        Form_wapper.classList.remove("Form-wapper-Opener")
        headline_2.style.display = "none"
        Form.style.display = "none"
        Headline_btn.style.display = "none"
        
    }
}

