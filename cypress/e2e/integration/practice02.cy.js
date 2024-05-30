// <reference types="cypress"/>

describe('Practice02 - Validate Amazon Home Page', () => {

    beforeEach(() => { 
      cy.visit('https://www.amazon.com/')        
  
    })
  
    it('TASK-1: Validate the Amazon Header', () => {
      
      cy.get('#nav-logo-sprites').should('be.visible')
      cy.get('#nav-global-location-popover-link').should('be.visible')
      cy.get('#nav-search-dropdown-card').should('be.visible')
      cy.get('#twotabsearchtextbox').should('be.visible')
      cy.get('#nav-search-submit-button').should('be.visible')
      cy.get('.nav-line-2').should('be.visible')
      cy.get('#nav-link-accountList').should('be.visible')
      cy.get('#nav-orders').should('be.visible')
      cy.get('#nav-cart').should('be.visible')
      cy.get('#nav-cart-count').should('have.text', '0')
    })
  
  
    it('TASK-2: Validate the Amazon Location Update', () => {
  
      cy.get('#nav-global-location-popover-link').click()
      cy.get('#GLUXZipUpdateInput').type('60018')
      cy.get('.a-button-input').eq(2).click()
      cy.get('#GLUXZipConfirmationValue').should('have.text', '60018')
      cy.get('#a-autoid-1-announce').click()
      cy.get('#glow-ingress-block').contains('Des Plaines 60018')
      
      
  
    })
  
    it('TASK-3: Validate the Amazon Search Results', () => {
      cy.get('#twotabsearchtextbox').type('Mug{enter}')
          
      cy.get('.sg-col-inner > .a-section > span').first().then(($el) => {
          
        const str = $el.text()
          
        expect(Number(str.slice(str.indexOf('over') + 5, str.indexOf('results') - 1)
          .replace(',', ''))).to.be.above(0)           
  
      })
  
    })
  
    it('TASK-4:  Validate the Google Amazon Footer Columns', () => {
  
      const arr =  ['Get to Know Us', 'Make Money with Us', 'Amazon Payment Products', 'Let Us Help You']
          
      cy.get('.navFooterColHead').each(($el, index) => {
        cy.wrap($el).should('include.text', arr[index])
     
  
      })
  
    })
  })