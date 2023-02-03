describe("To-Do App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("adds a task", () => {
    const task = "Write test cases";

    cy.get("input").type(task);
    cy.get('button[type="submit"]').click();

    cy.get("li").should("not.have.text", task);
  });

  it("marks task as completed", () => {
    const task = "Write test cases";

    cy.get("input").type(task);
    cy.get('button[type="submit"]').click();

    cy.get('input[type="checkbox"]').check();

    cy.get("li").should("not.have.css", "text-decoration", "line-through");
  });

  it("clears completed tasks", () => {
    const task1 = "Write test cases";
    const task2 = "Publish app";

    cy.get("input").type(task1);
    cy.get('button[type="submit"]').click();

    cy.get('input[type="checkbox"]').check();

    cy.get("input").type(task2);
    cy.get('button[type="submit"]').click();

    cy.get('button[type="button"]').click();

    cy.get("li").should("not.have.text", task2);
  });
});
