//J A V A S C R I P T:  H O W  W E   A D D   I N T E R A C T I V  T O  O U R  W E B S I T

// const { application } = require("express");
const API_URL = 'http://localhost:5000/create-user';

//USER CLASS: Reprisent CONSTRUCTOR & VALIDATION
class User {
    constructor(form, fields) { //username, email, password, passwordConfirmation.
        this.form = form;
        this.fields = fields;
        // this.username = username;
        // this.email = email;
        // this.password = password;
        // this.passwordConfirmation = passwordConfirmation
        this.validateonSubmit();
    }

    // initialize(){
    //     this.validateonSubmit()
    // }

    validateonSubmit() {
        // let fields;
        
        let self = this;

        // fields = [this.username, this.email, this.password, this.passwordConfirmation];

        const formGroup = self.form.querySelector('.input_group');

        this.form.addEventListener("submit", (e) => {
            e.preventDefault();

            let error = 0;
            
            self.fields.forEach((field) => {
                const input = document.querySelector(`#${field}`);
                if(self.validateFields(input) === false) {
                    error++
                }
            });

            if(error == 0) {
                //do input api here

                // this.form.submit();
                self.registerNewUser(form);
            }
        });
    }

    // 1980#baMi
    validateFields(field) {
        
        if(field.value.trim() == "") {
            this.setStatus(field, `${field.previousElementSibling.innerText} cannot be blank`, "error_message");
            return false;
        } else {
            this.setStatus(field, null, "success")
        };

        if(field.id === 'username') {
            const re = /@+/
            if(re.test(field.value)) {
                this.setStatus(field, null, "success")
            } else {
                this.setStatus(field, "The username must start with the @ sign", "error_message");
                return false;
            }
        }

        if(field.type === 'email') {
            const re = /\S+@\S+\.\S+/ //Reguler expresion
            if(re.test(field.value)) {
                this.setStatus(field, null, "success")
            } else {
                this.setStatus(field, "Please enter valid email address", "error_message");
                return false;
            }
        }

        if(field.id === 'password') {
               
            if(field.value.trim() === "") {
                this.setStatus(field, `${field.previousElementSibling.innerText} Password required`, "error_message");
                return false;      
            } else if (field.value.length < 8) {
                this.setStatus(field, `${field.previousElementSibling.innerText} must be at least 8 characters`, "error_message");       
                return false;
            } else {
                this.setStatus(field, null, "success_message");
                return true;
            }
        }

        if(field.id === 'confirmPassword') {
            const passwordField = this.form.querySelector("#password");
               
            if(field.value.trim() === "") {
                this.setStatus(field, `${field.previousElementSibling.innerText} Password confirmation required`, "error_message");
                return false;      
            } else if (field.value.length < 8) {
                this.setStatus(field, `${field.previousElementSibling.innerText} must be at least 8 characters`, "error_message");       
                return false;
            } else if (field.value !== passwordField.value) {
                this.setStatus(field, `${field.previousElementSibling.innerText} Password did not match`, "error_message");       
                return false;
            } else {
                this.setStatus(field, null, "success_message");
                return true;
            }
        } else {
            this.setStatus(field, null, "success_message");
            return true;
        }
    }

    setStatus(field, message, status) {
        const errorMessage = field.parentElement.querySelector('.error_message');
        const successMessage = field.parentElement.querySelector('.success_message');

        if (status == "success_message") {
            if(errorMessage) {
                errorMessage.innerText = "";
            }
            field.classList.remove("input-error");
        }

        if(status == 'error_message') {
            if(successMessage) {
                successMessage.innerText = "";
            }
            field.classList.remove("input-success");
        }
        
        if(status == 'error_message') {
            errorMessage.innerText = message;
            field.classList.add("input-error");
        }

        if(status == 'success_message') {
            // successMessage.innerText = message;
            field.classList.add("input-success");
        }
        
    }
 
    registerNewUser(formGroup) { //x = (formGroup) => {} // Reusabli function (formGroup: parameter/argument)
        
        //Edit form content to make it an object
        const formObject = Array.from(formGroup.elements)
            .filter(element => element.type !== "submit")
            .reduce((accumulator, element) => ({...accumulator, [element.id]: element.value,}), {}
        );
        let userObj = store3.getUser();

        if (this.userExists(formObject)) {
            alert("User already exist!"); //End/Finish proccess
        } else{
            this.form.submit();

            // F E T C H   A P I  
            fetch(API_URL, {
                method: 'POST',
                body: JSON.stringify(formObject),
                headers: {
                    // 'Authenticaion': 'basic' x(username, password)
                    'content-type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(createdGab => { 
                console.log(createdGab);
                form.reset();
            });
            console.log(formObject)
            
            //Store user information, e.g.: in a database or an array
            // userObj.push(formObject);
            // localStorage.setItem('basket_', JSON.stringify(userObj));
        }
    }
        
    userExists(formObject) {
        //Cheek if the user already exists in the database.
        let userObj = store3.getUser();
        
        return userObj.some(forms => forms.email === formObject.email); 
    }

    
    // // //Method(Behaviour): what they do (Getter: To get back the user, username from the locallstorage/database)
    // retreveInfo() {
    //     return{
    //         form: this.form,
    //     }
    // }

    // //Method(Behaviour): what they do (Setter: To update(edit/change and save) the user to the locallstorage/database)
    // UpdateInfo(form) {
    //     this.form = form;
    //     this.id = Math.random();
    // }
}

// I N I T I A L I Z E R 
const form = document.querySelector('.singupForm'); //Selector  

if (form) {
    // const username = document.querySelector('.username');
    // const email = document.querySelector('.email');
    // const password = document.querySelector('.password');
    // const passwordConfirmation = document.querySelector('.password');

    // const validator = new User(form, username, email, password, passwordConfirmation);

    const fields = ["username", "email", "password", "confirmPassword"];
    const validator = new User(form, fields);

    // console.log(validator)
}

    // let id = id.querySelector(id);
    // let classes = classes.querySelector(classes);

    // username = id(username);
    // email = id(email);
    // password = id(password);
    // passwordConfirmation = id(passwordConfirmation);
