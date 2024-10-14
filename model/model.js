export const loadPage = (pageID) => {
    if (pageID == '') {
        $.get(`pages/${pageID}.html`, (data) =>{
            $('#app').html(data);
            console.log($('#app').html());
        } ) 


    } else { 
        $.get(`pages/${pageID}.html`, (data) =>{
            $('#app').html(data);
        })
    }
}


let signedIn = false;


export const signIn = () => {
    const email = $("#emailInputLogin").val();
    const password = $("#passwordInputLogin").val();

    
    if (!email || !password) {
        alert("Please enter both email and password.");
        return false;
    }

    if (email  && password) {
        console.log("signIn function called");
        alert("You are logged in!");
        signedIn = true;  
        window.location.href = "#home"; 
        return true;
    } else {
        alert("Invalid email or password. Please try again.");
        return false;
    }
}


export const signUp = () => {
    const firstName = $("#firstNameInput").val();
    const lastName = $("#lastNameInput").val();
    const email = $("#emailInput").val();
    const password = $("#passwordInput").val();

    
    if (!firstName || !lastName || !email || !password) {
        alert("Please complete all sign-up fields!");
        return false;
    }


   
    console.log("User registered:", { firstName, lastName, email, password });
    alert(`Thank you for signing up, ${firstName} ${lastName}!`);
    signedIn = true;  
    window.location.href = "#home"; 
    return true;
}

export const getSignedInStatus = () => signedIn; 


// var books = [
    
//     {
//         id: 1,
//         name: "To kill a Mocking Bird",
//         price: "15.99",
//         imageUrl: 'assets/to-kill-a-mockingbird.png'
//     },
//     {
//         id: 2,
//         name: "Becoming Michelle Obama",
//         price: "25.99",

//     },
//     {
//         id: 3,
//         name: "Fire Starter",
//         price: "19.99",
//     },
//     {
//         id: 4,
//         name: "RedBox",
//         price: ".99",
//     },
//     {
//         id: 5,
//         name: "Mockingjay",
//         price: "10.99",
//     },
//     {
//         id: 6,
//         name: "Html",
//         price: "9.99",
//     },
//     {
//         id: 7,
//         name: "redBox",
//         price: "9.99",
//     },
//     {
//         id: 8,
//         name: "Harry Potter Collection",
//         price: "9.99",
//     },
//     {
//         id: 9,
//         name: "George Martin",
//         price: "9.99",
//     },
//     {
//         id: 10,
//         name: "Html",
//         price: "9.99",
//     },
//     {
//         id: 11,
//         name: "Html",
//         price: "9.99",
//     },
//     {
//         id: 12,
//         name: "Html",
//         price: "9.99",
//     },
//     {
//         id: 13,
//         name: "Html",
//         price: "9.99",
//     },

//     {
//         id: 14,
//         name: "Html",
//         price: "9.99",
//     },
//     {
//         id: 15,
//         name: "Red Box",
//         price: "9.99",
//     }
// ];


// export const getBooks = () => {
//     return books
// }
