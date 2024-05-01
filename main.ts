//DAY 11 CODING CHALLENGE.
//Question 1:No users:Ensure your user list is not empty.
let usernames: string[] = [];

if (usernames.length === 0)  {
    console.log("We need to find some users!");
}else {
    //Greet users
}

//Question 2:Checking usernames:Ensures uniquences in usernames.
let current_users: string[] =["user1","admin","user3","user4","user5"];
let new_users: string[] =["User1","User6","user7","admin","user9"]
    
new_users.forEach(newUser => {
    if 
    (current_users.some(currentUser => currentUser.toLowerCase() ===newUser.toLowerCase()))  {
        console.log( `${newUser} will need to enter a new username.`);
    }else{
        console.log(`${newUser} is avalible.`);
    }
});

//Question 3:Oridinal Number:Display number with their oridinal suffixes.
let number: number[]  = [1,2,3,4,5,6,7,8,9];

number.forEach(number =>{
    let suffix = "th";
    if (number === 1)  {
        suffix = "st";
    }else if (number === 2)  {
        suffix ="nd";
    }else if (number === 3)   {
        suffix = "rd";
    }
    console.log(` ${number} ${suffix}`);
});