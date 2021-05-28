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

// function getBookRec(){
//     let bookRec = prompt('Would you like a book recommendation?')
//     let book1 ="Images/Don't Look Behind You Final.jpg"
//     if (bookRec.toLowerCase() == 'yes'){
//         document.write('<h3>We Recommend ');
//         document.write('<img src="' + book1 + '"/>')
//     }
// }



//Current Function Test with Number of Recs//


// let rec1 = "Images/Don't Look Behind You Final.jpg");
// let rec2 = "Images/ADeathLikeSnow.jpg");
// let rec3 = "Among Shadows Novella.jpg");
// let rec4 = "House of Storm and Air.jpg");
// let rec5 = "Shadow House (Snake) - Copy.jpg");
// let rec6 = "The Grimoire Shade.jpg");
// let rec7 = "Werewolf.jpg");


function BookRec(){

        let BookRec = prompt('How many book recommendations would you like? 1-7');
        console.log(BookRec);
        
        userAttempts = 6;

        for(let i = 0; i < userAttempts; i++){

        let rec1 ="Images/Don't Look Behind You Final.jpg";
        let rec2 ="Images/ADeathLikeSnow.jpg";
        let rec3 ="Images/Among Shadows Novella.jpg";
        let rec4 ="Images/House of Storm and Air.jpg";
        let rec5 ="Images/Shadow House (Snake) - Copy.jpg";
        let rec6 ="Images/The Grimoire Shade.jpg";
        let rec7 ="Images/Werewolf.jpg";

        if (BookRec == 1){
            document.write('<img src="' + rec1 + '"/>');
        }

        else if (BookRec == 2){
            document.write('<img src="' + rec1 + '"/>');
            document.write('<img src="' + rec2 + '"/>');
        }

        else if (BookRec == 3){
            document.write('<img src="' + rec1 + '"/>');
            document.write('<img src="' + rec2 + '"/>');
            document.write('<img src="' + rec3 + '"/>');
        }

        else if (BookRec == 4){
            document.write('<img src="' + rec1 + '"/>');
            document.write('<img src="' + rec2 + '"/>');
            document.write('<img src="' + rec3 + '"/>');
            document.write('<img src="' + rec4 + '"/>');
        }

        else if (BookRec == 5){
            document.write('<img src="' + rec1 + '"/>');
            document.write('<img src="' + rec2 + '"/>');
            document.write('<img src="' + rec3 + '"/>');
            document.write('<img src="' + rec4 + '"/>');
            document.write('<img src="' + rec5 + '"/>');
        }

        else if (BookRec == 6){
            document.write('<img src="' + rec1 + '"/>');
            document.write('<img src="' + rec2 + '"/>');
            document.write('<img src="' + rec3 + '"/>');
            document.write('<img src="' + rec4 + '"/>');
            document.write('<img src="' + rec5 + '"/>');
            document.write('<img src="' + rec6 + '"/>');
        }

        else if (BookRec == 7){
            document.write('<img src="' + rec1 + '"/>');
            document.write('<img src="' + rec2 + '"/>');
            document.write('<img src="' + rec3 + '"/>');
            document.write('<img src="' + rec4 + '"/>');
            document.write('<img src="' + rec5 + '"/>');
            document.write('<img src="' + rec6 + '"/>');
            document.write('<img src="' + rec7 + '"/>');
        }

        else {
            prompt('Stop breaking my website! Enter a number between 1 and 7.');
        }
        console.log(i);
        if (i == userAttempts - 1){
            alert('Too late! No more tries.');
            } 
        }
     }
    

    //  else {
        //     alert('Invalid Book Number.');
        // }


// if (likeBabyYoda.toLowerCase() == 'yes'){
//     document.write('<h3>He is SOooooo Cute!!</h3>');
//     document.write('<img src="' + url + '"/>')
// }





// function getBookRec(){
//     let getBookRec = prompt('How many book recommendations would you like? 1-5')
//     for(let i = 0; i <= 5; i++)
//     let bookcover = document.getElementById('bookcover');
//     for (let i = 1; i <= 5; i++){
//         bookcover.src = bookcover.src;

//     if ()
//     }
// }

// function babyYoda(){
//     let numberOfBabyYoda = prompt('How many times do you want to see Baby Yoda!')
//     for(let i = 0; i < numberOfBabyYoda; i ++){
//         document.write('<img src="' + url + '" >')
//     }
// }



// let default_image = document.getElementById('default_image');
// for(let i = 0; i <= 5; i++){
//     let default_img src = "images/default_image.png";
//     default_image.src = default_img_src;
// }    border: none;










    // document.write('Here are more books curated just for you.');
    // return userName;
// }




