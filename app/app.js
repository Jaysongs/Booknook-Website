import { loadPage, signIn, signUp } from "../model/model.js";

let signedIn = false; // Ensure signedIn is initialized and accessible

const changeRoute = () => {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace('#', '') || 'home';

    loadPage(pageID);
}

function initURLListener() {
    console.log("Initializing URL listener");  
    $(window).on('hashchange', changeRoute);
    changeRoute();
}

$(document).ready(function () {
    console.log("Document is ready"); 
    
    $(".loginBtn a, .signupBtn a").on("click", function (e) {
        e.preventDefault(); 
        var url = $(this).attr("href").replace("#", ""); 

        console.log("Clicked button, url: ", url); 

        if (url == "home") {
            if ($(this).parent().hasClass("loginBtn")) {
                alert("About to call signIn");
            } else if ($(this).parent().hasClass("signupBtn")) {
                alert("About to call signIn");
            }
        }
    });
    loadPage("home");
    initURLListener();
   
});



// const loadFeaturedBooks = () => {
//     let books = getBooks();  
//     console.log("loading books")
//     console.log(books); 
//     console.log($("#feature-holder").length);
//     console.log($("#home-holder").html()); 
//     $.each(books, function (index, book) {
//         $("#feature-holder").append(
//             `<div class="book"></div>
//              <div class="book-info">
//                 <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." Urna nunc id cursus metus aliquam eleifend mi. Massa vitae tortor condimentum lacinia quis vel eros.
//                 </p>
//              </div>
//             <div class="price">${book.price}</div>
//             <div className="add"></div>
//             `
//         );
//     });
// };
