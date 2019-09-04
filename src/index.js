module.exports = function( bundler ) {
  bundler.addAssetType( "js", require.resolve( "./ssmImport.js" ));
};

