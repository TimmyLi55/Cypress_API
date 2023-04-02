describe("API тестирование", () => {
  it("Добавление пользователя в систему", () => {
    let userName = "Vita";
    cy.addUser(userName, "Витя", "Горев", "atre@mail.ru", "Qwerty", "+7554333");
    cy.getUserByName(userName);
  });
  it("Правка созданного пользователя", () => {
    let userName = "Fara";
    let newUserName = "Katafota";
    let newPhone = "+99999999999";
    cy.addUser(userName, "Женя", "Вотин", "rttt@mmof.ru", "Qwerty", "+252585");
    cy.updateUser(
      userName,
      newUserName,
      "Женя",
      "Вотин",
      "rttt@mmof.ru",
      "Qwerty",
      newPhone
    );
    cy.getUserByName(newUserName).should((response) => {
      expect(response.phone).to.equal("+99999999999");
    });
  });
  it("Удаление пользователя", () => {
    let userName = "Potato";
    cy.addUser(userName, "Женя", "Вотин", "rttt@mmof.ru", "Qwerty", "+252585");
    cy.deleteUser(userName);
    cy.getUserByNameNotFound(userName);
  });
});
