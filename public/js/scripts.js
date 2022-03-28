// placeholder
(function() {
    document.addEventListener("DOMContentLoaded", function() {
        document.querySelector(".btn-collapse-nav").addEventListener("click", function(e) {
            var selector = e.currentTarget.getAttribute("data-target");
            var right_menu = document.querySelector(selector);
            if (right_menu.classList.contains("mobile-open")) {
                right_menu.classList.remove("mobile-open");
            } else {
                right_menu.classList.add("mobile-open");
            }
        });

        document.querySelector(".header-links .dropdown").addEventListener("click", function(e) {
            var width = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;

            if (width < 1440) {
                
                if (e.currentTarget.classList.contains("opend")) {
                    e.currentTarget.classList.remove("opend");
                } else {
                    e.currentTarget.classList.add("opend");
                }
            } else {
                e.currentTarget.classList.remove("opend");
            }
        });

        document.querySelector(".header-links .search-box .icon-cancel").addEventListener("click", function(e) {
            document.querySelector(".header-links .dropdown").classList.remove("opened");
        });

        window.addEventListener("resize", function() {
            var width = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
    
            if (width >= 768) {
                document.querySelector("#header .header-right").classList.remove("mobile-open");
                document.querySelectorAll("#header .mobile-toggle").forEach(function(toggle) {
                    toggle.classList.remove("mobile-toggle");
                });
            }

            document.querySelector(".header-links .dropdown").classList.remove("opened");

        });
    
        var dropdowns = document.querySelectorAll(".dropdown .dropdown-toggle");
        dropdowns.forEach(function(dr) {
            if (dr.nextElementSibling) {
                var li = document.createElement("li");
                li.innerHTML = "<a>&nbsp;</a>";
                li.classList.add("dropdown-opend");
                li.addEventListener("click", function(e) {
                    e.currentTarget.parentNode.previousElementSibling.classList.remove("mobile-toggle");
                });

                dr.nextElementSibling.prepend(li);
            }

            dr.addEventListener("click", function(e) {
                var header_right = document.querySelector("#header .header-right");
    
                if (header_right.classList.contains("mobile-open")) {
                    if (e.currentTarget.classList.contains("mobile-toggle")) {
                        e.currentTarget.classList.remove("mobile-toggle");
                    } else {
                        e.currentTarget.classList.add("mobile-toggle");
                    }
                } 
            });
        });
    });    
})();