let num1, num2 , result ;

// concatenate number string
document.getElementById('concate').onclick = function () {
    document.getElementById('original-statement').innerHTML = ""
    document.getElementById('output').innerHTML = ""
    num1 = prompt("Enter first no. ")
    num2 = prompt("Enter second no.")
    result = num1 + num2 
    
     document.getElementById('original-statement').innerHTML = "num1 = " + num1 + "<br /> num2 = " + num2
     document.getElementById('output').innerHTML = "Concatenation  " + result  
}

// input name
document.getElementById('name').onclick = function () {
    document.getElementById('original-statement').innerHTML = ""
    document.getElementById('output').innerHTML = ""
    let name = prompt("Write your name: ")

    document.getElementById('original-statement').innerHTML = "Your name is <b>" + name + "</b>"
}

// comparison operator
document.getElementById('comparison').onclick = function () {
    document.getElementById('original-statement').innerHTML = ""
    document.getElementById('output').innerHTML = ""
     num1 =+ prompt('Enter num1')
     num2 =+ prompt('Enter num2')
    if(num1 > num2){
        result = num1 + ' > ' + num2
    }else if (num2 > num1){
        result = num1 + " < " + num2
    }else{
        result = num1 + " = " + num2
    }

    document.getElementById('original-statement').innerHTML = "num1 = " + num1 + "<br /> num2 = " + num2
    document.getElementById('output').innerHTML =  result  
}

// grade calculations
document.getElementById('grading').onclick = function () {
    document.getElementById('original-statement').innerHTML = ""
    document.getElementById('output').innerHTML = ""
    num1 =+ prompt("Enter your marks ")
    if(num1 >= 90){
        result = 'A+' + ' 🎉'
    }else if(num1 >=80){
        result = 'A' 
    }else if(num1 >=70){
        result = 'B'
    }else if(num1 >=60){
        result = 'c'
    }else{
        result = 'F' + ' 😪'
    }
    document.getElementById('original-statement').innerHTML = "Marks = " + num1 
    document.getElementById('output').innerHTML = "Your Grade is " + result 
}

// test sets of condition
document.getElementById('multi-conditions').onclick = function () {
    document.getElementById('original-statement').innerHTML = ""
    document.getElementById('output').innerHTML = ""
    let age = prompt("Enter your age ")
    let wght = prompt("Enter your weight ")
    if(age >= 40 && wght >= 85){
        result = "Your are Senier citizen and Fatty"
    }else if(age >= 20 && wght >= 85){
        result = "Your are Younger and Fatty"
    }else if(age <= 20 && wght >= 80){
        result = "Your are teenager and Fatty"
    }else if(age >= 40 && wght <= 85 && wght >=56){
        result = "Your are Senier citizen and Healty"
    }else if(age >= 40 && wght <= 55){
        result = "Your are senier citizen but weak"
    }else if(age >= 20 && wght <= 55){
        result = "Your are teenager but weak"
    }else if(age <= 20 && wght <= 55){
        result = "Your are teenager but weak"
    }

    document.getElementById('original-statement').innerHTML = "Your age is " + age + "<br /> Your weight is " + wght 
    document.getElementById('output').innerHTML = result
}    

// nested if statement
document.getElementById('nested-if').onclick = function () {
    document.getElementById('original-statement').innerHTML = ""
    document.getElementById('output').innerHTML = ""

    let age = prompt("Enter your age ")
    let province = ""
    let uppercase = ""
    let vote = 0
    if (age >=18) {
        province = prompt("Write your province:")
        uppercase = province.toUpperCase();
        if (uppercase == "PUNJAB") {
            vote = prompt("Caste your Vote by entering 1")
            document.getElementById('original-statement').innerHTML = "Your age is <b>" + age + "</b>" + "<br /> Your province is <b>Punjab</b> "

            if (vote == 1) {
                document.getElementById('output').innerHTML = "<h4 style='color:green;'>Successfully Vote Caste<h4>"
            }else{
                document.getElementById('output').innerHTML = "<h4 style='color:red;'>Your Vote is not Caste<h4>"
            }
        }else{
            alert("Only People of Punjab is Eligible For Casting Vote! ")
        }
    }else{
        alert("Your are not eligible for vote!")
    }

}

// login detail
document.getElementById('login').onclick = function () {
    document.getElementById('original-statement').innerHTML = ""
    document.getElementById('output').innerHTML = ""
    let username = prompt("Enter Username :")
    let password = prompt("Enter Password")
    if (username == "admin" && password == "admin") {
        document.body.innerHTML = "<h1 style='color:green;text-align: center;'>Successfully Login</h1>";
    } else {
        alert("Invalid username or password. Please try again.");
    }


}

// check function
document.getElementById('check').onclick = function () {
    document.getElementById('original-statement').innerHTML = "Username is 'admin' <br /> password is 'admin'"
    document.getElementById('output').innerHTML = ""

}

// clear original statement
document.getElementById('clear-original').onclick = function () {
    document.getElementById('original-statement').innerHTML = ""
}

// clear output
document.getElementById('clear-output').onclick = function () {
    document.getElementById('output').innerHTML = ""
}
