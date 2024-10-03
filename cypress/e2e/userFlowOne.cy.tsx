describe('User Flow 1', () => {
  it('should navigate feed page and render correct amount of cards', () => {
    cy.visit('http://localhost:3000/')

    cy.get('.suggested-posts [class*="Card_wrapper"]').its('length').should('equal', 2)
    cy.get('.follow [class*="Card_wrapper"]').its('length').should('equal', 4)
    cy.get('.recent-posts [class*="Card_wrapper"]').its('length').should('equal', 5)
  })

  it('should navigate feed page and render correct title in TitleBar', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[class*="TitleBar_wrapper"] h3').contains("Feed")
  })

  it('should render profile page via link click and render correct amount of cards', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.suggested-posts [class*="Card_wrapper"]').first().find("img").click()
    cy.get('.profile-card [class*="Card_wrapper"]')

    cy.get('[class*="TitleBar_backButton"]').click()
    cy.get('.suggested-posts [class*="Card_wrapper"]').its('length').should('equal', 2)
    cy.get('.follow [class*="Card_wrapper"]').its('length').should('equal', 4)
    cy.get('.recent-posts [class*="Card_wrapper"]').its('length').should('equal', 5)
    
    cy.get('[class*="TitleBar_wrapper"] h3').contains("Feed")
  })

  it('should navigate profile page and render correct title in TitleBar', () => {
    cy.visit('http://localhost:3000/profile/1')
    cy.get('[class*="TitleBar_wrapper"] h3').contains("Profile")

    cy.get('[class*="TitleBar_backButton"]').click()
    cy.get('.suggested-posts [class*="Card_wrapper"]').its('length').should('equal', 2)
    cy.get('.follow [class*="Card_wrapper"]').its('length').should('equal', 4)
    cy.get('.recent-posts [class*="Card_wrapper"]').its('length').should('equal', 5)
  })

  it('should navigate profile page and back to feed page with back button', () => {
    cy.visit('http://localhost:3000/profile/1')
    cy.get('[class*="TitleBar_wrapper"] h3').contains("Profile")

    cy.get('[class*="TitleBar_backButton"]').click()

    cy.get('.suggested-posts [class*="Card_wrapper"]').its('length').should('equal', 2)
    cy.get('.follow [class*="Card_wrapper"]').its('length').should('equal', 4)
    cy.get('.recent-posts [class*="Card_wrapper"]').its('length').should('equal', 5)

    cy.get('[class*="TitleBar_wrapper"] h3').contains("Feed")
  })
})