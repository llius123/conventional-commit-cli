import inquirer from "inquirer";
import MaxLengthInputPrompt from "inquirer-maxlength-input-prompt";

const conventionals_commits_options = [
  {
    name: "build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)",
    value: "build:",
  },
  {
    name: "ci: Changes to CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)",
    value: "ci:",
  },
  {
    name: "chore: Changes which doesn't change source code or tests e.g. changes to the build process, auxiliary tools, libraries",
    value: "chore:",
  },
  { name: "docs: Documentation only changes", value: "docs:" },
  { name: "feat: A new feature", value: "feat:" },
  { name: "fix: A bug fix", value: "fix:" },
  { name: "perf: A code change that improves performance", value: "perf:" },
  {
    name: "refactor: A code change that neither fixes a bug nor adds a feature",
    value: "refactor:",
  },
  { name: "revert: Revert something", value: "revert:" },
  {
    name: "style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)",
    value: "style:",
  },
  {
    name: "test: Adding missing tests or correcting existing tests",
    value: "test:",
  },
];

const conventionals_commits_scope = [
  {
    name: "Scope 1",
    value: "Scope-1",
  },
  new inquirer.Separator(),
  {
    name: "New scope",
    value: null,
  },
];

const questions = [
  {
    type: "list",
    name: "type",
    message: "Type",
    choices: conventionals_commits_options,
  },
  {
    type: "list",
    name: "scope",
    message: "Scope",
    choices: conventionals_commits_scope,
  },
  {
    type: "input",
    name: "new_scope",
    message: "New Scope",
    when: (allQuestions) => {
      if (allQuestions.scope === null) {
        return true;
      }
      return false;
    },
  },
  {
    type: "maxlength-input",
    name: "title",
    message: "Title",
    maxLength: 50,
  },
  {
    type: "input",
    name: "description",
    message: "Description",
  },
];
inquirer.registerPrompt("maxlength-input", MaxLengthInputPrompt);

inquirer.prompt(questions).then((answers) => {
  console.log(JSON.stringify(answers, null, "  "));
});
