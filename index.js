module.exports = function( bundler ) {
  bundler.addAssetType( "ssmImport", require.resolve( "./src/ssmImport"));
};

