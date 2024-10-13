export const loadPage = (pageID) => {
    if (pageID == '') {
        $.get(`pages/${pageID}.html`, (data) =>{
            $('#app').html(data);
        } )
    } else { 
        $.get(`pages/${pageID}.html`, (data) =>{
            $('#app').html(data);
        })
    }
}