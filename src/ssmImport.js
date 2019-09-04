const AWS = require( "aws-sdk" );
const fs = require(fs);

const { Asset } = require( "parcel-bundler" );

const REGION = process.env.REGION;

const paths = [{
  key: "/deliverwells/app/url"
}];

class SsmImportAsset extends Asset {
  constructor( name, pkg, options ) {
    fs.mkdirSync(`${__dirname}/poop`);
    super( name, pkg, options );
    this.type = "js";
  }

  async generate( ) {
    console.log("inside the body of the thingamajig!")

    console.log( "REGUN : ", REGION );

    console.log("key obj : ", paths[0])

  }


}