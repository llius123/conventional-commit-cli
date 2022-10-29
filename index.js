import inquirer from "inquirer";

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

const questions = [
  {
    type: "list",
    name: "Type",
    message: "Type",
    choices: conventionals_commits_options,
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log(JSON.stringify(answers, null, "  "));
});
