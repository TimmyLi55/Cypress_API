// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add(
  "addUser",
  (nUsername, nFirstName, nLastName, nEmail, nPassword, nPhone) => {
    cy.request("POST", "https://petstore.swagger.io/v2/user", {
      username: nUsername,
      firstName: nFirstName,
      lastName: nLastName,
      email: nEmail,
      password: nPassword,
      phone: nPhone,
    }).then((response) => {
      expect(response.status).to.eq(200);
      return response.body;
    });
  }
);
Cypress.Commands.add("getUserByName", (name) => {
  return cy
    .request("GET", `https://petstore.swagger.io/v2/user/${name}`)
    .then((response) => {
      expect(response.status).to.eq(200);
      return response.body;
    });
});
Cypress.Commands.add("getUserByNameNotFound", (name) => {
  return cy
    .request({
      method: "GET",
      url: `https://petstore.swagger.io/v2/user/${name}`,
      failOnStatusCode: false,
    })
    .then((response) => {
      expect(response.status).to.eq(404);
      return response.body;
    });
});
Cypress.Commands.add(
  "updateUser",
  (oldname, nUsername, nFirstName, nLastName, nEmail, nPassword, nPhone) => {
    return cy
      .request("PUT", `https://petstore.swagger.io/v2/user/${oldname}`, {
        username: nUsername,
        firstName: nFirstName,
        lastName: nLastName,
        email: nEmail,
        password: nPassword,
        phone: nPhone,
      })
      .then((response) => {
        expect(response.status).to.eq(200);
        return response.body;
      });
  }
);
Cypress.Commands.add("deleteUser", (name) => {
  return cy
    .request("DELETE", `https://petstore.swagger.io/v2/user/${name}`)
    .then((response) => {
      expect(response.status).to.eq(200);
      return response.body;
    });
});
//
//
// -- This is a child command --
// Cypress.Commands.add("checkStatus"),
//   { prevSubject: true },
//   (status) => {
//     expect(status).to.eq(200)
//     });
//   };
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
