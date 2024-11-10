describe('Admin Ghost', function() {
    it('should log in with valid credentials', function() {
        cy.visit('http://localhost:2368/ghost/#/signin');
        cy.get('#identification').type('dani-sie@uniandes.edu.co');
        cy.get('#password') .type('q1w2e3r4t5y6');
        cy.get('#ember5').click();


        cy.wait(1000);
        randomEvent(30);
    });
});

function getRandomElement(arr) {
    if (arr.length === 0) return undefined; // Handle empty array case
    return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function login(){
    cy.get('#identification-button')
    cy.wrap(user).type("danielsierra34@gmail.com", { force: true });
    
}

function randomEvent(eventsLeft) { 
    if (eventsLeft <= 0) return;

    const randomEventType = getRandomElement(['a', 'select', 'input', 'button']);

    cy.get('body').then(($body) => {

        switch (randomEventType) {
            case 'a':
                let links = $body.find('a')
                cy.task('log',`Se encontraron ${links.length} elementos tipo 'a'`);
                const randomLink = getRandomElement(links);
                if (!Cypress.dom.isHidden(randomLink)) {
                    cy.wrap(randomLink).click({ force: true });
                } 
                break;

            case 'select':
                let selects = $body.find('select')
                cy.task('log',`Se encontraron ${selects.length} elementos tipo 'select'`);
                if (selects.length > 0) {
                    const randomSelect = getRandomElement(selects);
                    if (randomSelect.options.length > 0) {
                        const randomOption = getRandomElement(randomSelect.options);
                        cy.wrap(randomSelect).select(randomOption.value);
                    } 
                }
                break;

            case 'input':
                let inputs = $body.find('input[type="text"]')
                cy.task('log',`Se encontraron ${inputs.length} elementos tipo 'input[type="text"]'`);
                if (inputs.length > 0) {
                    const randomInput = getRandomElement(inputs)
                    const randomText = `RandomText ${getRandomInt(1, 1000)}`;
                    if (Cypress.dom.isVisible(randomInput)) {
                        cy.wrap(randomInput).type(randomText, { force: true });
                    } 
                }                
                break;

            case 'button':
                let buttons = $body.find('button')
                cy.task('log',`Se encontraron ${buttons.length} elementos tipo 'button'`);
                const randomButton = getRandomElement(buttons)
                if (!Cypress.dom.isHidden(randomButton)) {
                    cy.wrap(randomButton).click({ force: true });
                }
                break;
        }  
    });
    cy.wait(1000);
    randomEvent(eventsLeft - 1);
}

