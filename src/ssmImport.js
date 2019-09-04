const AWS = require( "aws-sdk" );
const fs = require('fs');

const { Asset } = require( "parcel-bundler" );

const REGION = process.env.REGION;

const paths = [{
  key: "/deliverwells/app/url",
  value: undefined
}];

class SsmImportAsset extends Asset {
  constructor( name, pkg, options ) {
    super( name, pkg, options );
    this.type = "js";
  }

  async generate( ) {
    console.log("inside the body of the thingamajig!");

    console.log( "REGUN : ", REGION );

    console.log("key obj : ", paths[0]);

    const ssm = new AWS.SSM();

    paths[0].value = await ssm.getParameter({
      Name: paths[0].key,
      WithDecryption: false
    }).promise()

    console.log(paths);
    console.log('-----------');

  }
}

module.exports = SsmImportAsset;