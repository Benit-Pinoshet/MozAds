 let menu = document.getElementById("menu_mobile");
        function menu_mobile_open() {
            if (menu.style.display === "block") {
                menu.style.display = "none";
            } else {
                menu.style.display = "block";
            }
        }
        window.addEventListener('resize', function () {
            if (window.innerWidth > 500) {
                menu.style.display = "none";
            }
        });