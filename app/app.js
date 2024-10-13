import {loadPage} from "../model/model.js";

const changeRoute = () => {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace('#', '');

    loadPage(pageID);

}


function initURLListener() {
    $(window).on('hashchange', changeRoute);
    changeRoute();
}


$(document).ready(function () {
    loadPage("bookclub")
    initURLListener();
    
});