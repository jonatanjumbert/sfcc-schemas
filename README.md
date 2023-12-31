# sfcc-schemas-latest

> Salesforce Commerce Cloud import and export schemas validator - Updated version by Jonatan Jumbert, forked from [openmindlab/sfcc-schemas](https://github.com/openmindlab/sfcc-schemas)

This updated version of the Salesforce Commerce Cloud schemas validator (`sfcc-schemas-latest`) includes the latest XSD files for version 23.10 of Salesforce Commerce Cloud. It ensures the validator remains functional and up-to-date with the latest Salesforce Commerce Cloud versions. Enhanced descriptions have been added for improved searchability and optimization on GitHub.

## Features

- Validate Salesforce Commerce Cloud import/export XML files.
- Automatically add local XSD declarations to XML files for leveraging IDE autocomplete and validation capabilities.
- Updated XSDs for compatibility with Salesforce Commerce Cloud version 23.10.

## Installation

```bash
$ npm i -g sfcc-schemas-latest
```
Warning: the module makes use of [xsd-schema-validator](https://www.npmjs.com/package/xsd-schema-validator) which requires java.
See the prerequisites section on https://www.npmjs.com/package/xsd-schema-validator for details.

## Requirements
* Node >= 10

## Usage

```bash
sfcc-schemas-validate
```
Validates all the xml files in the `sites` subdirectory (following the usual cartridge folder conventions)

```bash
sfcc-schemas-xsdify
```
Adds a schemaLocation attribute to all the xml files, in order to leverage editor support (validation or autocompletion) ini your IDE.

For this purpose the module must be installed locally in your project (`npm i sfcc-schemas-latest`) so that xsds can be linked directly from the node_modules folder, e.g.

```xml
<preferences xmlns="http://www.demandware.com/xml/impex/preferences/2007-03-31" 
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.demandware.com/xml/impex/preferences/2007-03-31 ../../../../node_modules/sfcc-schemas/xsd/preferences.xsd">
    ...
```

## License

Released under the MIT license.