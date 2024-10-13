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
<<<<<<< HEAD
    loadPage("febFavs")
=======
    loadPage("home")
>>>>>>> 2dc1dd83d08db4a218282315936260eae7971681
    initURLListener();
    
});