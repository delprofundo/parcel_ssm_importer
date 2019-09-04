const AWS = require( "aws-sdk" );
const fs = require('fs');

const { Asset } = require( "parcel-bundler" );

const REGION = process.env.REGION;

const paths = [{
  key: "/deliverwells/app/url"
}];

class SsmImportAsset extends Asset {
  constructor( name, pkg, options ) {
    super( name, pkg, options );
    this.type = "js";
  }

  async generate( ) {
    const generated = await super.generate();
    console.log( generated );
    console.log("inside the body of the thingamajig!");

    console.log( "REGUN : ", REGION );

    console.log("key obj : ", paths[0]);

  }
}

module.exports = SsmImportAsset;