describe('Checkbox', () => {

    it('check and unccheck', () => {

        cy.visit('https://www.ironspider.ca/forms/checkradio.htm');
        cy.scrollTo(0,100);
        cy.get('[type="checkbox"]').check('blue');
        cy.get('[type="checkbox"]').check('orange');
        cy.get('[type="checkbox"]').check('purple');
        cy.wait(2000);
        cy.get('[type="checkbox"]').uncheck('orange');
        cy.wait(2000);
        cy.get('input[type="radio"]').eq(1).click();
        cy.wait(2000);
        cy.get('.CenterCol > :nth-child(36)').click(); 
        cy.wait(2000);
        cy.go('back');
        cy.wait(3000);
        cy.go('forward');

        


    })

})