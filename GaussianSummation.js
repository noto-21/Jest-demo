/***Gaussian Summation***/

gauss = (alpha, omega) =>//Gaussian summation function
{
    //Input validation
    if (typeof alpha !== 'number' || typeof omega !== 'number' || alpha % 1 !== 0 || omega % 1 !== 0)//If alpha or omega is not an integer, return error message
        return "(" + alpha + ", " + omega + ") is invalid input! [0-9] only!";//Return error message

    if (alpha === omega)//If alpha and omega are equal, return alpha
        return alpha;
    else if (alpha > omega)//If alpha is greater than omega, swap them
        [alpha, omega] = [omega, alpha];
    
    //Return the summation of the range    
    return Math.floor(omega - alpha + 1) * ((alpha + omega) / 2);
}

var negA = (Math.random() < 0.5) ? true : false, negB = (Math.random() < 0.5) ? true : false;//Randomly choose to negate alpha and/or omega

//Random test cases
var a = (negA) ? Math.round(Math.random() * 100 * -1) : Math.round(Math.random() * 100), b = (negB) ? Math.round(Math.random() * 100 * -1) : Math.round(Math.random() * 100);//Randomly generate alpha and omega
console.log("Gaussian summation of [" + a + ", " + b + "] is " + gauss(a, b));//Output the result

module.exports = gauss;//Export the function
