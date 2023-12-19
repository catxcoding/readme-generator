// Function that returns a license badge based on the passed in license
function renderLicenseBadge(license) {
  switch (license) {
      case 'MIT':
          return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
      case 'GNU GPLv3':
          return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
      case 'Apache-2.0':
          return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
      case 'Creative Commons':
          return "![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)";
      case 'BSD 3-Clause License':
          return "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)";
      default:
          return "";
  }
}

// Function that returns the license link
function renderLicenseLink(license) {
  switch (license) {
      case "MIT":
          return "[License: MIT](https://opensource.org/licenses/MIT)";
      case "GNU GPLv3":
          return "[License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)";
      case "Apache-2.0":
          return "[License: Apache-2.0](https://opensource.org/licenses/Apache-2.0)";
      case "Creative Commons":
          return "[License: CC0-1.0](http://creativecommons.org/publicdomain/zero/1.0/)";
      case "BSD 3-Clause License":
          return "[License: BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)";
      default:
          return "";
  }
}

// Function that returns the license section of README
function renderLicenseSection(license) {
  if (license !== '') {
      return `## License\n\nThis project is licensed under the ${license} license.`;
  } else {
      return "";
  }
}

// Function to generate markdown for README
function generateMarkdown(response) {
  const {
      projectName,
      description,
      install,
      usage,
      contribution,
      tests,
      license,
      github,
      email,
  } = response;

  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);
  const licenseSection = renderLicenseSection(license);

  return `# ${projectName}

${licenseBadge}

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
${license ? '- [License](#license)' : ''}

## Installation

${install}

## Usage

${usage}

## Contributing

${contribution}

## Tests

${tests}

## Questions

- [Github Profile](${github})
- Email: [${email}](mailto:${email})

${licenseSection}
${licenseLink}
`;
}

module.exports = generateMarkdown;
