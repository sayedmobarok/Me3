 const serviceWrap = document.querySelector(".serviceswrap")

 let services=[
    {
        title:"WordPress Themes",
        dec:"Thousands of WordPress themes",
        1:"Newest",
        2:"Bestsellers",
        images:"assets/images/s1.avif"
    },
    {
        title:"eCommerce<br>Templates",
        dec:"Beautiful website templates",
        1:"Newest",
        2:"Bestsellers",
        images:"assets/images/s2.avif"
    },
    {
        title:"Site Templates",
        dec:"HTML and website templates",
        1:"Newest",
        images:"assets/images/s3.avif"
    },
    {
        title:"Marketing<br>Templates",
        dec:"Email, newsletter and landing page templates.",
        1:"Newest",
        2:"Bestsellers",
        images:"assets/images/s4.avif"
    },
    {
        title:"CMS Templates",
        dec:"Over 1,700 CMS website templates",
        1:"Newest",
        2:"Bestsellers",
        images:"assets/images/s5.avif"
    },
    {
        title:"Blogging",
        dec:"Blogger templates and themes",
        1:"Newest",
        2:"Bestsellers",
        images:"assets/images/s6.avif"
    },
 ]

 serviceWrap.innerHTML=services.map((item) =>{
    return`
     <div class="singleservices">
                <h2>${item.title}</h2>
                <p>${item.dec}</p>
                <div class="sell">
                    <h6>${item[1]}</h6>
                    <h6>${item[2]}</h6>
                </div>
                <div class="servicesimg">
                   <img src="${item.images}" alt="">
                </div>
            </div>
    `
 }).join("")


 const templates = document.querySelector(".templatewrap")

 let templatearr=[
    {
        img:"assets/images/t1.jpeg",
        title:"OOP in PHP With Tests",
        dec:"by tutsplus in Code",
        price:"$15",
        sell:"145 sales",

    },
    {
        img:"assets/images/t2.jpeg",
        title:"Advanced OOP In PHP With Tests",
        dec:"by tutsplus in Code",
        price:"$45",
        sell:"45 sales",

    },
    {
        img:"assets/images/t3.jpeg",
        title:"Build a CMS With Rails",
        dec:"by tutsplus in Code",
        price:"$25",
        sell:"450 sales",

    },
    {
        img:"assets/images/t4.jpeg",
        title:"Working With Clients to Get Design ",
        dec:"by tutsplus in Code",
        price:"$55",
        sell:"40 sales",

    },
    {
        img:"assets/images/t5.jpeg",
        title:"Up and Running With Foundation for",
        dec:"by tutsplus in Code",
        price:"$40",
        sell:"50 sales",

    },
    {
        img:"assets/images/t6.jpeg",
        title:"Building Your Own Pattern Library",
        dec:"by tutsplus in Code",
        price:"$100",
        sell:"10 sales",

    },
    {
        img:"assets/images/t7.jpeg",
        title:"CSS: Flexbox Essentials",
        dec:"by tutsplus in Code",
        price:"$155",
        sell:"33 sales",

    },
    {
        img:"assets/images/t8.jpeg",
        title:"Become a CSS Superhero With Stylus",
        dec:"by tutsplus in Code",
        price:"$120",
        sell:"25 sales",

    },
 ]

 templates.innerHTML= templatearr.map((item) => {
    return`
    <div class="singleTbox">
               <div class="templateimg">
                  <img src="${item.img}" alt="">
               </div>
               <div class="tamplatetext">
                <h5>${item.title}</h5>
                <h6>${item.dec}</h6>
                <div class="tsell">
                    <div class="Tprice">
                        <h4>${item.price}</h4>
                        <span>${item.sell}</span>
                    </div>
                    <div class="Tshopping">
                        <button><i class="fa-sharp fa-solid fa-cart-shopping"></i></button>
                    </div>
                </div>
               </div>
            </div>
    `
 }).join("")



 function showNavber(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = 'none'
}