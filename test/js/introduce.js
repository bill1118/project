        var modal = document.getElementById("myModal");

        
        var btn = document.getElementById("openModalBtn");
        
        
        var span = document.getElementsByClassName("close")[0];
        
        
        btn.onclick = function() {
            modal.style.display = "block";
        }
        
        
        span.onclick = function() {
            modal.style.display = "none";
        }
        
    
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        
        document.querySelector('.plus').addEventListener('click', function() {
            let input = this.previousElementSibling;
            input.value = parseInt(input.value) + 1;
        });
        
        document.querySelector('.minus').addEventListener('click', function() {
            let input = this.nextElementSibling;
            if (input.value > 1) {
                input.value = parseInt(input.value) - 1;
            }
        });
        
        document.querySelector('.quantity input').addEventListener('input', function() {
            if (isNaN(this.value) || this.value < 1) {
                this.value = 1;
            }
        });