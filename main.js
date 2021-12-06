let text = document.getElementById("text");
        let color = document.getElementById("color");
        let fontSize = document.getElementById("fontSize");
        let fontFamily = document.getElementById("fontFamily");
        let inputText = document.getElementById("inputText");
        let formControl = document.getElementById("formControl");

        // text.addEventListener("keyup",function(){
        //     inputText.innerText = this.value;
        // });
        // color.addEventListener("change",function(){
        //     inputText.style.color = this.value;
        // });
        // fontSize.addEventListener("change",function(){
        //     inputText.style.fontSize = this.value + "px";
        // });
        // fontFamily.addEventListener("change",function(){
        //     inputText.style.fontFamily = this.value;
        // });
        formControl.addEventListener("submit",function(e){
            e.preventDefault();
            inputText.innerText = text.value;
            inputText.style.color = color.value;
            inputText.style.fontSize = fontSize.value + "px";
            inputText.style.fontFamily = fontFamily.value;
            this.reset();
        });