
if ($(window).width() < 960) {
    function Open_Close() {

        if (Holder_Form.classList != "Holder-Form-Opener") {
            Holder_Form.classList.remove("Holder-Form-Closer")
            Holder_Form.classList.add("Holder-Form-Opener")
            Form_wapper.classList.add("Form-wapper-Opener")
            headline_2.style.display = "block"
            Form.style.display = "flex"
            Headline_btn.style.display = "block"
            $("#Headline").fadeOut(1000)


        }

        else {
            Holder_Form.classList.remove("Holder-Form-Opener")
            Holder_Form.classList.add("Holder-Form-Closer")
            Form_wapper.classList.remove("Form-wapper-Opener")
            headline_2.style.display = "none"
            Form.style.display = "none"
            Headline_btn.style.display = "none"
            $("#Headline").fadeIn(1000)
        }
    }
} 
else {




}