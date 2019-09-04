module.exports = function( bundler ) {
  bundler.addAssetType( "JavaScript", require( "./ssmImport.js"));
};

