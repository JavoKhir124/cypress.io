class Registration {

    registerBtn(){  
        return cy.get('.login__alt-cta > a').click();
    }

    userFirstName(){
        return  cy.get('#user_first_name')
    }

    userLastName(){
        return cy.get('#user_last_name')
    }

    userName(){
        return cy.get('#user_username')
    }

    nth_LoginBtn(){
        return cy.get(':nth-child(10) > .btn').click();
    }

}

export default Registration