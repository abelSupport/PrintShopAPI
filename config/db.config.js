  const  config = {
    user:  'sa', // sql user
     password: 'sa123', //sql user password
     server:  'DESKTOP-9BAE76R', // if it does not work try- localhost
    
     database:  'Print_Shop',
     driver: "msnodesqlv8",
     options: {
       trustedconnection:  true,
     ///  enableArithAbort:  true,
     },
     port:  1433
   }
   
   module.exports = config;