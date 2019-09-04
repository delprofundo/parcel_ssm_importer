module.exports = function( bundler ) {
  bundler.addAssetType( "js", require( "./ssmImport.js"));
};

