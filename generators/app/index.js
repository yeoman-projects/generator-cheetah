'use strict';
const Generator = require('yeoman-generator');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the Webpack-style-bundler generator!
      if you have any questions, please contact marc.adlington@zebra.com.`)
    );

    const prompts = [
      {
        type: 'confirm',
        name: 'someAnswer',
        message: 'Would you like to start the installation?',
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      console.log(props);
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath('./**/*'),
      this.destinationRoot()
    );
  }

  install() {
    this.installDependencies();
  }
};
