function toggleScreen() {
    var screen = document.getElementById("screen");
    var menu = document.getElementById("menu");
    //var computer = document.querySelector('.computer');
    var startButton = document.querySelector('.start'); 

    if (screen.style.backgroundColor === "rgb(0, 0, 0)") {
        screen.style.backgroundColor = "#50C4ED"; 
        menu.style.display = "block";
        startButton.innerHTML = '<img src="assets/power-on.png" alt="Power Off">'; 
    } else {
       
        screen.style.backgroundColor = "#000"; 
        menu.style.display = "none"; 
        startButton.innerHTML = '<img src="assets/power.png" alt="Power On">'; 
    }
}


        function showContent(section) {
            var screen = document.getElementById("screen");
            switch (section) {
                case 'home':
                    
                    break;
                case 'about':
                    break;
                case 'projects':
                    
                    break;
                case 'contact':
                    
                    break;
                case 'skills':
                    
                    break;
                default:
                    ;
            }
        }
