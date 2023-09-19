//J A V A S C R I P T:  H O W  W E   A D D   I N T E R A C T I V  T O  O U R  W E B S I T

class Login {
    constructor(form, fields){
        this.form = form;
        this.fields = fields;
        this.validateonSubmit()
    }

    // initialize(){
    //     this.validateonSubmit()
    // }

    validateonSubmit(){
        let self = this;

        this.form.addEventListener("submit", (e) => {
            e.preventDefault();

            let error = 0;

            self.fields.forEach((field) => {
                const input = document.querySelector(`#${field}`);
                if(self.validateFields(input) === false){
                    error++
                }
            });
            if(error == 0) {
                localStorage.setItem('auth', 1)
                this.form.submit();
                
                //Input username & password and cheak for mathch; if true login else redirect | Input username & password to fetch login api else redirect
                // self.userLogin(form);
            }
        });

    }
    
    validateFields(field) {
        if(field.value.trim() == "") {
            this.setStatus(field, `${field.previousElementSibling.innerText} cannot be blank`, "error_message");
            return false;
        } else {
            if(field.type == 'password') {
                if(field.value.length < 8) {
                    this.setStatus(field, `${field.previousElementSibling.innerText} must be at least 8 scharacters`, "error_message");       
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
    }

    setStatus(field, message, status) {
        const errorMessage = field.parentElement.querySelector('.error_message');
        // const successMessage = field.parentElement.querySelector('.success_message');

        if (status == "success_message") {
            if(errorMessage) {
                errorMessage.innerText = "";
            }
            field.classList.remove("input-error");
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

    // userLogin(formGroup) {
        
    //     const formObject = Array.from(formGroup.elements)
    //         .filter(element => element.type !== "submit")
    //         .reduce((accumulator, element) => ({...accumulator, [element.id]: element.value,}), {}
    //     )
    //     // let userObj = store3.getUser();

    //     if (this.loginInfo(formObject)) {
    //         alert("")
    //     } else {
    //         localStorage.setItem('auth', 1)
    //         this.form.submit();
    //     }
    // }
        
    // loginInfo(formObject) {
    //     //Cheek if the user already exists in the database.
    //     let userObj = store3.getUser();
        
    //     return userObj.every(forms => forms[username, password] === formObject[username, password]);
    // }
}

const form = document.querySelector('.loginForm');
if(form){
    const fields = ["username",  "password"];
    const validator = new Login(form, fields);
    console.log(validator);
}
