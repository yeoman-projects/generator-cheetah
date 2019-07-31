'use strict';
const Generator = require('yeoman-generator');
const yosay = require('yosay');

module.exports = class extends Generator {
  async prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the Cheetah generator!
      If you have any questions, please contact marc.adlington@zebra.com.`)
    );

    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'folderName',
        message: 'What would you like the package name to be?',
        default: 'Cheetah'
      }
    ]);
  }

  writing() {
    this.log("prompt", this.answers.folderName);
    this.fs.copy(
      this.templatePath('./**/*'),
      this.destinationRoot(),
      {title : this.answers.folderName}
    );
  }

  install() {
    this.installDependencies();
  }
};
