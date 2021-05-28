//Function to Get User Name.

function getUserName(){
    let userName = prompt('Please Choose a User Name: ');
    console.log(userName);
    document.write('<h3>Welcome, @' + userName + '!</h3>');
    return userName;
}


//Function to Get User Answer Repeat Visitor

function getUserAnswer(){
    let userAnswer = prompt('Have you been here before? ');
    console.log(userAnswer);

    if (userAnswer.toLowerCase() == 'yes') {
        document.write('<h3>Welcome back. Here are some popular new books curated just for you.</h3>');
    } else {
        document.write('<h3>We love meeting new readers! Below you will find the featured releases for today.</h3>');
    }
}

// Function to Get Book Rec Answer

function getBookRec(){
    let bookRec = prompt('Would you like a book recommendation?')
    let book1 ="Images/Don't Look Behind You Final.jpg"
    if (bookRec.toLowerCase() == 'yes'){
        document.write('<h3>We Recommend ');
        document.write('<img src="' + book1 + '"/>')
    }
}







    // document.write('Here are more books curated just for you.');
    // return userName;
// }




