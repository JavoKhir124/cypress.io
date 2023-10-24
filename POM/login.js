
class Login {
    
    btnLogin(){
        return cy.contains('Log in').click();
    }

    email(){
        return cy.get('#user_email')
    }

    password(){
        return cy.get('#user_password')
    }

    loginBtnClick(){
        return cy.get(':nth-child(7) > .btn').click();
    }

}



export default Login