/// <reference types="Cypress" />

describe('Mobile phone replenishment', () => {

  context("Faceboock",() => {

 

      it('Using Get with Find and eq', function () {
        cy.visit('https://next.privat24.ua/deposit/open')
        cy.get('tbody').find('td').find('div').find("button").eq(0)
       
      })



      it.only('Using Get with Find and eq', function () {
          
        cy.visit('https://docs.cypress.io/api/commands/eq')
        cy.get('main').find('div').find('nav').find('ul').find('li').find('a').eq(0)
       
      })
   })
   
})  