import {loadPage, getBooks} from "../model/model.js";

const changeRoute = () => {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace('#', '') || 'home';

    loadPage(pageID);

}


function initURLListener() {
    $(window).on('hashchange', changeRoute);
    changeRoute();
}


$(document).ready(function () {
<<<<<<< HEAD
    loadPage("febFavs")
=======
    loadPage("home")
    initURLListener();
    
    
});

const loadFeaturedBooks = () => {
    let books = getBooks();  
    console.log("loading books")
    console.log(books); 
    console.log($("#feature-holder").length);
    console.log($("#home-holder").html()); 
    $.each(books, function (index, book) {
        $("#feature-holder").append(
            `<div class="book"></div>
             <div class="book-info">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." Urna nunc id cursus metus aliquam eleifend mi. Massa vitae tortor condimentum lacinia quis vel eros.
                </p>
             </div>
            <div class="price">${book.price}</div>
            <div className="add"></div>
            `
        );
    });
};
