/***Initials Generator***/

//Function that takes a name as input and returns initials of the name without spaces.
initialsGenerator = (name) =>
{
    //Check if the input is a string, has a length greater than 1, has no leading or trailing spaces, has a space in between, and contains only letters, spaces, and apostrophes
    if (typeof name !== 'string' || name.trim().length <= 1 || name !== name.trim() || !name.includes(' ') || !/^(?!.*''.*$)[\sa-zA-Z'.]+$/.test(name))
        return `WARNING! '${name}' is not a valid name! (Input a valid first and last name (minimum), and separate with a space)\n`;

    let initials = name.match(/\b[a-zA-Z]/g) || [];//\b matches a word boundary; a-zA-Z matches any letter from a-z or A-Z; g is a global search
    return `${initials.join('.').toUpperCase()}.\n`;//Join the initials with a period and convert to uppercase
}

var namesArr = require('./names.json');//T.M., T.C., O.W.R.W., J.R.R.T., Error Mssg.

namesArr.forEach((name) => console.log(`~${name}~ --> Initials: ${initialsGenerator(name)}`));//Print the initials of each name in the array

module.exports = initialsGenerator;//Export the function