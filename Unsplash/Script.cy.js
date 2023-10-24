
//--------Link to POM folder----------//

import Login from "../POM/login";
import Registration from "../POM/registration";
import EditProfile from "../POM/Edit_profile";
 


// -----------Verables-----------//

  const User_FirstName = 'Ajax';
  const User_LastName = 'F.C';
  const User_UserName = 'F_C_J_K_L_N_M_W_A';
  const User_Email = 'okhbj@telegmail.com';
  const User_Password = 'JoKa98qwerty';
  const User_Bith = '2000-01-13'


describe('Unsplash', () => {

    const login = new Login(); 
    const registration = new Registration(); 
    const edit_profile = new EditProfile();

    //------------Registration---------------//

    // it('Registration' , () => {

    //     cy.viewport(1440, 811);

    //     cy.visit("https://unsplash.com/login");
    //     cy.location('protocol').should('eq', 'https:');
    //     cy.wait(3000);

    //     // login.btnLogin();                                              // POM        
  
    //     registration.registerBtn();                                    // POM

    //     registration.userFirstName().type(User_FirstName);             // POM

    //     registration.userLastName().type(User_LastName);               // POM

    //     login.email().type(User_Email);                                // POM

    //     registration.userName().type(User_UserName);                   // POM

    //     login.password().type(User_Password);                          // POM
        
    //     registration.nth_LoginBtn();                                   // POM

    //     cy.clearCookies();
    //     cy.get('[data-test="nav-bar-search-form-input"]').click();
    //     cy.get('[data-test="nav-bar-search-form-input"]').type('Space X {enter}');
    //     cy.get('h1[class="dvBHu oh0KJ"]').should('have.text', 'Space X');
    //     cy.wait(2000);
    //     cy.scrollTo(0,4000);
    //     cy.scrollTo(0,-4000);
    //     cy.get('.QeEH8').click();
    //     cy.go('back');
       
    // });

    //-------------Login-------------//

    it('Login' , () => {

          cy.viewport(1024, 900);

          cy.visit("https://unsplash.com/");
          cy.location('protocol').should('eq', 'https:');
          cy.url().should('include', 'https://unsplash.com/')
          cy.wait(3000);
          cy.window().reload();
          cy.wait(2000);

          login.btnLogin()                                  // POM
          // cy.url('')

          login.email().type(User_Email).clear();              // POM
          login.email().type(User_Email);                      // POM

          login.password().type(User_Password).clear();        // POM
          login.password().type(User_Password);                // POM

          cy.wait(2000);

          login.loginBtnClick();                               // POM

          // cy.clearCookies();
          // cy.get('[data-test="nav-bar-search-form-input"]').click();
          // cy.get('[data-test="nav-bar-search-form-input"]').type('Space X {enter}');
          // cy.get('h1[class="dvBHu oh0KJ"]').should('have.text', 'Space X');
          // cy.wait(2000);
          // cy.scrollTo(0,4000);
          // cy.scrollTo(0,-4000);
          // cy.get('.QeEH8').click();
          // cy.go('back');
          // cy.get('span[class="jnQKm j8AIa dvBHu oh0KJ Fu4vG Fu4vG"]').should('have.text', 'Unsplash')

          //---------------Edit profile ------------------//

          edit_profile.ProfileBtn();
          // login.email().type(User_Email); 
          // login.password().type(User_Password); 
          cy.wait(2000);
          // login.loginBtnClick();

          //---------------Forgot password-----------------//



    });
    

});