<template>
    <div class="modal-dialog modal-dialog-scrollable modal-lg modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5"><i class="fa fa-user-plus"></i>
                        Create New Account :</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" @click="resetAllFields()" aria-label="Close"></button>
      </div>
      <div class="modal-body">

            <div v-if="!showMsg" class="container">
                <div class="create_form_container">
                        <form id="adduserform" :class="{'checkingValidation':checkValidation}" action="#" novalidate method="post" autocomplete="off" @submit.prevent ref="createMasterAccountForm">
                            
                            <div class="input-group">
                                <span class="input-group-text">
                                    <i class="fas fa-user-edit"></i>
                                </span>
                                <div class="form-floating">
                                    <input type="text" required :class="NameError ? 'error':'non-error'" class="form-control" autocomplete="off" placeholder="Enter Name" minlength="4" maxlength="20" id="name" v-model="formData.name" @input="checkNameValidation($event)">
                                    <label for="name">Enter Name :  <span class="text-muted">ex. John doe</span></label>
                                    <span v-if="checkValidation&&NameError" class="cu-invalid-feedback">Name Must be atleast 4 characters long!</span>
                                </div>
                            </div>
                            <div class="input-group">
                                <span class="input-group-text">
                                    <i class="fa-solid fa-at"></i>
                                </span>
                                <div class="form-floating">
                                    <input type="email" required :class="EmailError ? 'error':'non-error'" class="form-control" autocomplete="off" :readonly="EmailReadOnly" placeholder="Enter Email" id="email" v-model="formData.email" @input="checkEmailValidation($event)">
                                    <label for="email">Enter Email :  <span class="text-muted">ex. john12@gmail.com</span></label>
                                    <span v-if="checkValidation&&EmailError" class="cu-invalid-feedback">Please Enter a valid Email!</span>
                                </div>
                            </div>
                            
                        
                        <div v-if="otpDisplay" class="OTP_field">
                                <input :class="isItOTPError ? 'error' : 'non-error'" type="text" autocomplete="off" minlength="6" maxlength="6" required placeholder="Enter OTP here..." class="form-control" v-model="otpModal">
                                <span :class="isItOTPError ? 'text-danger' : 'text-success'">{{ otpMsg }}</span>
                        </div>
                        <div>
                            <div class="input-group">
                                <span class="input-group-text">
                                    <i class="fa fa-user"></i>
                                </span>
                                <div class="form-floating">
                                    <input type="text" :class="usernameError ? 'error':'non-error'" required class="form-control" autocomplete="off" minlength="4" maxlength="12" placeholder="Enter Username" id="username" v-model="formData.username" @input="checkUserName($event)">
                                    <label for="username">Enter Username :  <span class="text-muted">ex. John231</span></label>
                                    <span v-if="checkValidation&&usernameError" class="cu-invalid-feedback">{{ userErrMSg }}</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="input-group">
                                <span class="input-group-text">
                                    <i class="fa-solid fa-lock"></i>
                                </span>
                                <div class="form-floating">
                                    <input type="password" :class="Object.values(passwordErrors).some(error => error) ? 'error' : 'non-error'" required class="form-control" autocomplete="off" minlength="8" maxlength="16" placeholder="Enter Password" id="password" v-model="formData.password" @input="checkPasswordValidity($event)">
                                    <label for="password">Enter Password :  <span class="text-muted">ex. John#456</span></label>
                                </div>
                            </div>
                        </div>
                            <div class="warn">
                                <h4 class="text-dark my-3">Password Must :</h4>
                                <ol class="fst-italic">
                                    <li :class="passwordErrors.Eigth_Char ? 'text-danger' : 'text-success'">At least 8 characters long.</li>
                                    <li :class="passwordErrors.one_Alphabet ? 'text-danger' : 'text-success'">Password must contain atleast 1 Alphabet</li>
                                    <li :class="passwordErrors.one_uppercase ? 'text-danger' : 'text-success'">Contain at least one uppercase letter (A-Z).</li>   
                                    <li :class="passwordErrors.one_lowercase ? 'text-danger' : 'text-success'">Contain at least one lowercase letter (a-z).</li>
                                    <li :class="passwordErrors.one_number ? 'text-danger' : 'text-success'">Password must contain atleast 1 Number</li>
                                </ol>
                            </div>
                            
                        </form>
                </div>
            </div>
            <div v-if="showMsg" :class="isMsgError ? 'text-danger':'text-success'">{{ ShwMsg }}</div>
    
      </div>
      <div class="modal-footer">
                <div class="submit-reset">
                    <button type="button" class="btn theme-btn" id="cancelBtn" @click="resetAllFields()" data-bs-dismiss="modal">Cancel</button>
                    <button ref="regiBtn" :disabled="registrationLoading" @click="submitFnCreateAcc()" id="registerBtn" :class="{ 'd-none' : showMsg }" class="btn theme-btn" v-if="registerEnabled">
                        <span v-if="registrationLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Register
                    </button>
                    <button ref="sendOTPButton" :disabled="otpLoading" type="button" id="otpVerification" @click="sendOTP()" :class="{ 'd-none' : showMsg }" class="btn theme-btn" v-if="!registerEnabled">
                        <span v-if="otpLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Send OTP
                    </button>
                    <button v-if="showMsg" @click="resetAllFields()"  data-bs-dismiss="modal" class="btn theme-btn">Got it!</button>
                </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import emailjs from 'emailjs-com';
export default {
  data() {
    return {
        NameError:true,
        EmailError:true,
        isItOTPError:true,
        usernameError:true,
        userErrMSg:'Username Must be atleast 4 charecters long!',
        passwordErrors:{
            Eigth_Char:true,
            one_Alphabet:true,
            one_uppercase:true,
            one_lowercase:true,
            one_number:true,
        },
        registerEnabled: false,
        checkValidation:false,
        otpDisplay:false,
        otpMsg:'OTP sent successfully.',
        otpModal:null,
        randomCreatedOTP:null,
        formData:{
            name: "",
            email: "",
            username:"",
            password:""
        },
  
        otpLoading:false,
        registrationLoading:false,
        EmailReadOnly:false,
        showMsg:false,
        isMsgError:false,
        ShwMsg:'',
    };
  },
  methods: {
   async submitFnCreateAcc(){
    if (
    !this.NameError &&
    !this.EmailError &&
    !this.usernameError &&
    !this.passwordErrors.Eigth_Char &&
    !this.passwordErrors.one_Alphabet &&
    !this.passwordErrors.one_uppercase &&
    !this.passwordErrors.one_lowercase &&
    !this.passwordErrors.one_number
  ) {
        if(this.otpModal == this.randomCreatedOTP){
            this.registrationLoading = true;
            
            this.isItOTPError = false;
            this.otpMsg = 'Valid OTP!';
            try {
                const response = await axios.post('/api/users', this.formData);
                this.showMsg = true;
                this.isMsgError = false;
                this.ShwMsg = 'Account Created Successfully! Login with your credentials.';
                this.registrationLoading = false;

            } catch (error) {
                console.error("An error occurred:", error);
                this.showMsg = true;
                this.isMsgError = true;
                this.ShwMsg = 'There is server issue please try back later!';
                this.registrationLoading = false;
            }
        }
        else{
            this.isItOTPError = true;
            this.otpMsg = 'Please Enter Valid OTP!';
        }
    }
    else{
        this.checkValidation = true;
        if(this.otpModal == this.randomCreatedOTP){
            this.isItOTPError = false;
            this.otpMsg = 'Valid OTP!';
        }
        else{
            this.isItOTPError = true;
            this.otpMsg = 'Please Enter Valid OTP!';
        }
    }
    },
    checkNameValidation(event) {
    const input = event.target;
    const inputValue = input.value.toString();

    if (inputValue.length < 4) {
        this.NameError = true;
    } else {
        this.NameError = false;
    }
},

    checkEmailValidation(event) {
    const input = event.target;
        if(input.checkValidity()){
            this.EmailError = false;
        }
        else{
            this.EmailError = true;
        }
},

    async checkUserName(event){
        const input = event.target;
        const response = await fetch("/api/users");
        const userData = await response.json();

        const user = userData.find(user => user.username === this.formData.username);
        if(user){
            this.userErrMSg = 'Username already exists. Please try a different one.';
            this.usernameError = true;
      }
      else if(input.value.toString().length < 4){
        this.userErrMSg = 'Username must be atleast 4 charecters long.';
        this.usernameError = true;
      }
      else{
        this.usernameError = false;
      }
    },
    checkPasswordValidity(event) {
        const passVar = event.target;
        const passVarValue = passVar.value.toString();

        if(passVarValue.length < 8){
            this.passwordErrors.Eigth_Char = true;
        }
        else{
            this.passwordErrors.Eigth_Char = false;
        }


        if (!/[a-zA-Z]/.test(passVarValue)){
            this.passwordErrors.one_Alphabet = true;
        }
        else{
            this.passwordErrors.one_Alphabet = false;
        }


        if (!/[A-Z]/.test(passVarValue)){
            this.passwordErrors.one_uppercase = true;
        }
        else{
            this.passwordErrors.one_uppercase = false;
        }


        if (!/[a-z]/.test(passVarValue)){
            this.passwordErrors.one_lowercase = true;
        }
        else{
            this.passwordErrors.one_lowercase = false;
        }


        if (!/\d/.test(passVarValue)){
            this.passwordErrors.one_number = true;
        }
        else{
            this.passwordErrors.one_number = false;
        }
    },
    sendOTP(){
        if (
    !this.NameError &&
    !this.EmailError &&
    !this.usernameError &&
    !this.passwordErrors.Eigth_Char &&
    !this.passwordErrors.one_Alphabet &&
    !this.passwordErrors.one_uppercase &&
    !this.passwordErrors.one_lowercase &&
    !this.passwordErrors.one_number
  ) {
    this.otpLoading = true;
    
    function generateRandomNumber() {
        return Math.floor(Math.random() * 900000) + 100000;
    }

    this.randomCreatedOTP = generateRandomNumber();
  
            const serviceID = 'service_97mukar';
            const templateID = 'template_atzozju';
            const userID = 'IGfNvbSX6RcTJz5hv';
            
            const templateParams = {
                User:this.formData.username,
                to_email: this.formData.email,
                otp: this.randomCreatedOTP
            };

        emailjs.send(serviceID, templateID, templateParams, userID)
            .then((response) => {
            this.otpDisplay= true;
            this.otpMsg = 'OTP sent successfully.';
            this.isItOTPError = false;
            this.checkValidation = false;
            this.registerEnabled = true;
            this.otpLoading = false;
            this.EmailReadOnly=true;
            })
            .catch((error) => {
                this.showMsg = true;
                this.isMsgError = true;
                this.ShwMsg = 'There is server issue please try back later!';
               this.otpLoading = false;
            });

  } else {
    this.checkValidation = true;
  }
    },
    resetAllFields(){
        this.NameError=true,
        this.EmailError=true,
this.isItOTPError=true,
        this.usernameError=true,
        this.userErrMSg='Username Must be atleast 4 charecters long!',
        
            this.passwordErrors.Eigth_Char=true,
            this.passwordErrors.one_Alphabet=true,
            this.passwordErrors.one_uppercase=true,
            this.passwordErrors.one_lowercase=true,
            this.passwordErrors.one_number=true,
       
        this.registerEnabled= false,
        this.checkValidation=false,
        this.otpDisplay=false,
        this.otpMsg='OTP sent successfully.',
        this.otpModal=null,
        this.randomCreatedOTP=null,
        
        this.formData.name= "",
        this.formData.email= "",
        this.formData.username="",
        this.formData.password=""
        
  
        this.otpLoading=false,
        this.registrationLoading=false,
        this.EmailReadOnly=false;
        if(this.showMsg){
            document.getElementById('RegistratModal').style.display = 'none';
        }
        this.showMsg=false,
        this.isMsgError=false,
        this.ShwMsg='';
    }
  }
};
</script>
<style scoped>
.container form{
    display: flex;
    justify-content: center;
    gap: 27px;
    flex-direction: column;
}
.checkingValidation .non-error{
    border-color: rgba(0, 167, 64, 0.301) !important;
    box-shadow: none;
}
.checkingValidation .error{
    border-color: red !important;
    box-shadow: none;
}
.form_title{
    color: white;
}
.custom_center_class{
    display: flex;
    justify-content: center;
    align-items: center;
}
.create_form_container{
    margin: auto;
    max-width: 696px;
    background-color: white;
}
.submit-reset{
    display: flex;
    justify-content: flex-end;
    gap: 10px;
}
.cu-invalid-feedback{
    position: absolute;
    font-size: 14px;
    color: rgb(221, 0, 0);
}

</style>