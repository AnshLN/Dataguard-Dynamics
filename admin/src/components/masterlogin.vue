<template>
  <div class="container login_page p-5">
    <a href="/admin">
      <div class="mar_t10"><img class="img-responsive" src="https://i.imgur.com/NLZDuOO.png" alt="Curly's Furniture" title="DataGuard Dynamics"></div>
    </a>
    <h3 class="form_title">
      <strong>
        Data Control & Organization
      </strong>
    </h3>
    <h4 class="login_title">Login to your account</h4>
    <!-- BEGIN LOGIN FORM -->
    <form autocomplete="on" method="post" class="login_form" id="frmadmin_login" @submit.prevent="submitFn" novalidate ref="login_form">
      <div class="input-group">
        <i :class="{'text-danger' : isInvalid}" class="fa fa-user input-group-text"></i>
        <input name="usrname" id="User_Name"type="text" class="form-control" placeholder="Enter Username" v-model="usernameMLogin" required autocomplete="username">
      </div>
      <div class="input-group">
        <i :class="{'text-danger' : isInvalid}" class="fa fa-lock input-group-text"></i>
        <input name="Pass" id="Pass_word" type="password" class="form-control" placeholder="Enter Password" v-model="passwordMLogin" required autocomplete="Passcode">
      </div>
      <div v-if="isInvalid" class="invalid-msg">
        Username or Password is Incorrect !
      </div>
      <div class="submit_area">
        <button id="btnSubmit" class="btn btn-primary submitBtn">LOGIN</button>
      </div>
    </form>
    <!-- END LOGIN FORM -->
    <!-- FORGOT PASSWORD -->
    <div class="forgot_password">
            <h4>Forgot your password?</h4>
            <p>no worries,  click <a type="button" data-bs-toggle="modal" href="#staticBackdrop" id="forget-password_master_login" class="forget-password" tabindex="5"> here</a> to reset your password.</p>
        </div>
        <div class="create_Acc">
            <h4>Create A New Account?</h4>
            <p>Create a New Account <a type="button" data-bs-toggle="modal" href="#RegistratModal" id="CreateAcc" class="forget-password" tabindex="6"> here</a>.</p>
        </div>
    <div class="copyright">©Copyrights</div>
  </div>

  <!-- Forget Password Modal -->
  <!-- Button trigger modal -->

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable modal-lg modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">RESET PASSWORD :</h1>
        <button type="button" @click="cancelBtnFunction()" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Enter The Fields, 
        <div class="input-group my-3">
          <span class="input-group-text">
            <i class="fa fa-user"></i>
          </span>
          <input type="text" class="form-control" name="rsetPASS_usrnm" placeholder="Enter Your Registred Username.." :readonly="usrRdOnly" v-model="resetPASS_usrnm">
        </div>
        <div class="input-group my-3">
          <span class="input-group-text">
            <i class="fa-solid fa-at"></i>
          </span>
          <input type="text" class="form-control" name="rsetPASS_pass" placeholder="Enter Your Registred Email.." :readonly="usrRdOnly" v-model="resetPASS_Email">
        </div>
        <span v-if="credentialCheck" :class="isCredentialError ? 'text-danger' : 'text-success'">{{credentialCheckMsg}}</span>
        <div class="my-3" v-if="displayOTP">
          <input type="text" class="form-control" minlength="6" maxlength="6" placeholder="Enter OTP Here" :readonly="otpRdonly" v-model="rstOTP">
        </div>
        <span :class="isOTPError ? 'text-danger':'text-success'">{{ otpErrMsg }}</span>
        <div v-if="visiblePass" class="input-group my-3">
          <span class="input-group-text">
            <i class="fa fa-lock"></i>
          </span>
          <input class="form-control" v-model="changedPassword" type="password" placeholder="create a new password..." :readonly="pssReadOnly" minlength="8" maxlength="16" @input="CheckPassWordValidation($event)">
        </div>
        <span v-if="showPassErr" :class="isPassError ? 'text-danger' : 'text-success'">{{ passErrMsg }}</span>
        <div v-if="visiblePass" class="warn">
                    <h4 class="text-dark my-3">Password Must :</h4>
                    <ol class="fst-italic">
                        <li :class="passwordErrors.Eigth_Char ? 'text-danger' : 'text-success'">At least 8 characters long.</li>
                        <li :class="passwordErrors.one_Alphabet ? 'text-danger' : 'text-success'">Password must contain atleast 1 Alphabet</li>
                        <li :class="passwordErrors.one_uppercase ? 'text-danger' : 'text-success'">Contain at least one uppercase letter (A-Z).</li>   
                        <li :class="passwordErrors.one_lowercase ? 'text-danger' : 'text-success'">Contain at least one lowercase letter (a-z).</li>
                        <li :class="passwordErrors.one_number ? 'text-danger' : 'text-success'">Password must contain atleast 1 Number</li>
                    </ol>
                </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn theme-btn" data-bs-dismiss="modal" @click="cancelBtnFunction()" ref="resetCancelBtn">Cancel</button>
        <button type="button" ref="sendOTPButton" @click="sendOTP()" v-if="visibleBtn === 'sendOTP'" class="btn theme-btn">
          <span v-if="otpLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          Send OTP
        </button>
        <button type="button" ref="verifyOTPBtn" @click="verifyOTP()" v-if="visibleBtn === 'verifyOTP'" class="btn theme-btn">
          Verify OTP
        </button>
        <button type="button" ref="changePassBtn" @click="changePassword()" v-if="visibleBtn === 'ChangePassword'" class="btn theme-btn">
          <span v-if="ChangePassLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          Change Password
        </button>
      </div>
    </div>
  </div>
</div>

<!-- Modal For Handling PASSWORD RESET RESPONSE -->
<!-- Button trigger modal -->
<button type="button" class="btn d-none" data-bs-toggle="modal" ref="passwordResetResponseHandl" data-bs-target="#staticBackdrop4">
  Launch static backdrop modal
</button>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop4" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel4" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable modal-lg modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 :class="{'text-danger' : StatusOfPassReset === 'Failed','text-success':StatusOfPassReset === 'Success'}" class="modal-title fs-5" id="staticBackdropLabel4">{{ StatusOfPassReset }}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h4 :class="{'text-danger' : StatusOfPassReset === 'Failed','text-success':StatusOfPassReset === 'Success'}">{{ StatusMessagePassReset }}</h4>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn theme-btn" data-bs-dismiss="modal">Understood</button>
      </div>
    </div>
  </div>
</div>

<!-- Modal For Registration  -->
<!-- Modal -->
<div class="modal fade" id="RegistratModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
  <createMasterAccount></createMasterAccount>
</div>


</template>
<script>
import emailjs from 'emailjs-com';
import axios from 'axios';
import createMasterAccount from "./createMasterLoginAccount.vue";

export default {
  components:{
  createMasterAccount
},
  data() {
    return {
      usernameMLogin:'',
      passwordMLogin:'',
      isInvalid:false,
      resetPASS_usrnm:'',
      resetPASS_Email:'',
      credentialCheck:false,
      credentialCheckMsg:'',
      isCredentialError:true,
      usrRdOnly:false,
      otpLoading:false,
      visibleBtn:'sendOTP',
      randomCreatedOTP:null,
      ChangePassLoading:false,
      otpRdonly:false,
      displayOTP:false,
      rstOTP:null,
      otpErrMsg:'',
      isOTPError:true,
      passwordErrors:{
            Eigth_Char:true,
            one_Alphabet:true,
            one_uppercase:true,
            one_lowercase:true,
            one_number:true,
        },
        visiblePass : false,
        showPassErr: false,
        pssReadOnly:false,
        isPassError: true,
        passErrMsg:'Password must meet the following criteria!',
        changedPassword:'',
        ResetPassUserID:'',
        StatusOfPassReset:'Failed',
        StatusMessagePassReset:'There is Some Internal server issues.Please Try Again Later!',
    };
  },
  methods: {
    async submitFn(){
      if(this.$refs.login_form.checkValidity()){
        const response = await fetch("/api/users");
        const userData = await response.json();

        const user = userData.find(user => user.username === this.usernameMLogin && user.password === this.passwordMLogin);
        if(user){
        sessionStorage.setItem('user',JSON.stringify(user));
        this.isInvalid= false;
        this.$router.push('/admin/dashboard');
      }else{
        this.isInvalid = true;
      }
      }
      else{
        this.isInvalid = true;
      }
    },
    async sendOTP(){
      this.usrRdOnly = true;
      const response = await fetch("/api/users");
      const userData = await response.json();

      const user = userData.find(user => user.username === this.resetPASS_usrnm && user.email === this.resetPASS_Email);
      if(user){
        this.ResetPassUserID = user.id;
        this.credentialCheck = true;
        this.otpLoading = true;
    this.$refs.sendOTPButton.setAttribute("disabled", "true");
    function generateRandomNumber() {
        return Math.floor(Math.random() * 900000) + 100000;
    }

    this.randomCreatedOTP = generateRandomNumber();
  
            const serviceID = 'service_97mukar';
            const templateID = 'template_atzozju';
            const userID = 'IGfNvbSX6RcTJz5hv';
            
            const templateParams = {
                User:this.resetPASS_usrnm,
                to_email: this.resetPASS_Email,
                otp: this.randomCreatedOTP
            };

        emailjs.send(serviceID, templateID, templateParams, userID)
            .then((response) => {
            this.otpLoading = false;
            this.$refs.sendOTPButton.setAttribute("disabled", "false");
            
            this.isCredentialError = false;
           this.credentialCheckMsg = 'An OTP has been sent to your registered Email ID';
           this.visibleBtn = 'verifyOTP';
           this.displayOTP = true;
           this.otpRdonly = false;
            })
            .catch((error) => {
        this.$refs.resetCancelBtn.click();
        this.StatusOfPassReset='Failed';
        this.StatusMessagePassReset='Error Sending OTP. Please try again later!';
        this.$refs.passwordResetResponseHandl.click();
            });

      }else{
        this.usrRdOnly = false;
        this.credentialCheck = true;
        this.isCredentialError = true;
        this.credentialCheckMsg = 'Email And Username is Invalid or Not Matching!';
      }
    },
    verifyOTP(){
      if(this.rstOTP == this.randomCreatedOTP){
        this.otpRdonly = true;
        this.visibleBtn = 'ChangePassword';
        this.otpErrMsg = 'OTP is Valid!';
        this.isOTPError = false;
        this.visiblePass = true;
        this.showPassErr= false;
        this.pssReadOnly=false;
      }
      else{
        this.otpErrMsg = 'You Have Entred Incorrect OTP!';
        this.isOTPError = true;
      }
    },
    CheckPassWordValidation(event){
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

        if (
    !this.passwordErrors.Eigth_Char &&
    !this.passwordErrors.one_Alphabet &&
    !this.passwordErrors.one_uppercase &&
    !this.passwordErrors.one_lowercase &&
    !this.passwordErrors.one_number
  ) {
    this.isPassError = false;
    this.passErrMsg = 'Password Is Valid!';
  }
  else{
    this.isPassError = true;
    this.passErrMsg = 'Password must meet the following criteria!';
  }
    },
    async changePassword(){
      if (
    !this.passwordErrors.Eigth_Char &&
    !this.passwordErrors.one_Alphabet &&
    !this.passwordErrors.one_uppercase &&
    !this.passwordErrors.one_lowercase &&
    !this.passwordErrors.one_number
  ) {
    this.showPassErr = true;
    this.ChangePassLoading = true;
    this.$refs.changePassBtn.setAttribute('disabled', 'true');
    try{
      const response = await axios.patch('/api/users/' + this.ResetPassUserID, {
        "password": this.changedPassword
      });
      if(response){
        this.$refs.resetCancelBtn.click();
        this.StatusOfPassReset='Success';
        this.StatusMessagePassReset='Your Password Has Been Changed Successfully!';
        this.$refs.passwordResetResponseHandl.click();
      }
    }
    catch(error){
      this.$refs.resetCancelBtn.click();
      this.StatusOfPassReset='Failed';
      this.StatusMessagePassReset='There is Some Internal server issues.Please Try Again Later!';
      this.$refs.passwordResetResponseHandl.click();
    }
  }
  else{
    this.showPassErr = true;
  }
},
    cancelBtnFunction(){
      // Resetting All The Values And
      
      this.resetPASS_usrnm='',
      this.resetPASS_Email='',
      this.credentialCheck=false,
      this.credentialCheckMsg='',
      this.isCredentialError=true,
      this.usrRdOnly=false,
      this.otpLoading=false,
      this.visibleBtn='sendOTP',
      this.randomCreatedOTP=null,
      this.ChangePassLoading=false,
      this.otpRdonly=false,
      this.displayOTP=false,
      this.rstOTP=null,
      this.otpErrMsg='',
      this.isOTPError=true,
            this.passwordErrors.Eigth_Char=true,
            this.passwordErrors.one_Alphabet=true,
            this.passwordErrors.one_uppercase=true,
            this.passwordErrors.one_lowercase=true,
            this.passwordErrors.one_number=true,
        
        this.visiblePass = false,
        this.showPassErr= false,
        this.pssReadOnly=false,
        this.isPassError= true,
        this.passErrMsg='Password must meet the following criteria!',
        this.changedPassword='',
        this.ResetPassUserID='',
        this.StatusOfPassReset='Failed',
        this.StatusMessagePassReset='There is Some Internal server issues.Please Try Again Later!';
    }
  }
};
</script>
<style scoped>
.login_page{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  color: white;
}
.login_form{
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.login_page .login_form .input-group .input-group-text.fa{
  line-height: 1.5;
}
.login_page .login_form .input-group{
  border-radius: 0 !important;
}
.login_page .login_form .input-group i,.login_page .login_form .input-group input{
  border-radius: 0;
}
.login_page .login_form .input-group input:focus{
  box-shadow: none;
}
.login_page .login_form .submit_area{
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}
.login_page .login_form .submit_area .btn{
  border-radius: 0 !important;
}
.login_page .login_form .submit_area .submitBtn{
  background-color: var(--theme_color_2);
  color: white;
  border: 0px;
}
.forgot_password , .create_Acc{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.forgot_password a,.create_Acc a{
  color: var(--theme_color_2);
  text-decoration: none;
}
.forgot_password a:hover,.create_Acc a:hover{
  text-decoration: underline;
}
.invalid-msg{
  font-weight: 700;
  color: rgb(211, 29, 47);
}
</style>