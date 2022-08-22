<script>
       // show 3 gạch

        const menu = document.querySelector(".menu__modal");
        const barBtn = document.querySelector(".js-bar");
        const barClose = document.querySelector(".menu__modal-close-icon");
        const overley = document.querySelector(".menu__overley");

        barBtn.addEventListener('click',()=>{
            menu.classList.toggle("open");
            overley.style.display = "block";
            

            barClose.addEventListener('click',()=>{
                menu.classList.remove("open");
            })
            overley.addEventListener('click',()=>{
                menu.classList.remove("open");
                overley.style.display = "none";
            })


        })

   </script>
   