/*****************************************************************************
 *                                                                           *
 * Spam-Juggler JavaScript API                                               *
 *                                                                           *
 * ------------------------------------------------------------------------- *
 *                                                                           *
 * Version ........... : 1.2.48                                              *
 * Date .............. : 2015-04-28                                          *
 * License ........... : GNU General Public License                          *
 * License Version ... : Version 3, 29 June 2007                             *
 * License URL ....... : http://www.gnu.org/licenses/gpl-3.0.en.html         *
 * Author ............ : CI:A - Certus In Audio                              *
 * Website ........... : http://certus.in/                                   *
 *                                                                           *
 * ------------------------------------------------------------------------- *
 *                                                                           *
 * Usage                                                                     *
 *                                                                           *
 *    1) Adding API to your web pages                                        *
 *       The API is a single JavaScript file, and you reference it with      *
 *       the HTML 'script'-tag (note: the 'script'-tag should be inside      *
 *       the 'head'-section of your pages).                                  *
 *       Example:                                                            *
 *       <!DOCTYPE html>                                                     *
 *       <html xmlns="http://www.w3.org/1999/xhtml" lang="en">               *
 *           <head>                                                          *
 *               <meta charset="utf-8"/>                                     *
 *               <title>Spam-Juggler JavaScript API</title>                  *
 *               <script type="text/javascript"                              *
 *                       src="//hot.as/spam-juggler/api?/api.js">            *
 *               </script>                                                   *
 *           </head>                                                         *
 *           <body>                                                          *
 *               ...                                                         *
 *           </body>                                                         *
 *       </html>                                                             *
 *                                                                           *
 *    2) Initializing API object                                             *
 *       An instance of this API class is already initialized, while         *
 *       loading the JavaScript file. You can use the instance object        *
 *       called 'SpamJuggler':                                               *
 *                                                                           *
 *       <script type="text/javascript">                                     *
 *       <!--//                                                              *
 *       alert( SpamJuggler.getAPITitle() + ' v' +                           *
 *              SpamJuggler.getAPIVersion() );                               *
 *       //-->                                                               *
 *       </script>                                                           *
 *                                                                           *
 *       Anyway, you can initialize your own instance object of this         *
 *       API class, like:                                                    *
 *                                                                           *
 *       <script type="text/javascript">                                     *
 *       <!--//                                                              *
 *       var objMyVeryOwnObject = new SpamJugglerAPI();                      *
 *       alert( objMyVeryOwnObject.getAPITitle() + ' v' +                    *
 *              objMyVeryOwnObject.getAPIVersion() );                        *
 *       //-->                                                               *
 *       </script>                                                           *
 *                                                                           *
 *    3) Using methods of API object                                         *
 *       See examples below...                                               *
 *                                                                           *
 *       (*) Show title of API, via method getAPITitle:                      *
 *                                                                           *
 *       <script type="text/javascript">                                     *
 *       <!--//                                                              *
 *       alert( 'You are using API:\n' + SpamJuggler.getAPITitle() );        *
 *       //-->                                                               *
 *       </script>                                                           *
 *                                                                           *
 *       (*) Show current version of API, via method getAPIVersion:          *
 *                                                                           *
 *       <script type="text/javascript">                                     *
 *       <!--//                                                              *
 *       alert( 'Current API version:\n' + SpamJuggler.getAPIVersion() );    *
 *       //-->                                                               *
 *       </script>                                                           *
 *                                                                           *
 *       (*) Check for errors and display error message, via methods         *
 *           isOK , isError and getError:                                    *
 *                                                                           *
 *       <script type="text/javascript">                                     *
 *       <!--//                                                              *
 *       SpamJuggler.loadAlias( 'i_really_forgot_my_alias_name_try_1' ,      *
 *                              'i_really_forgot_my_password_try_1' );       *
 *       if( ! SpamJuggler.isOK() )                                          *
 *       {                                                                   *
 *           alert( SpamJuggler.getError() );                                *
 *       }                                                                   *
 *       SpamJuggler.loadAlias( 'i_really_forgot_my_alias_name_try_2' ,      *
 *                              'i_really_forgot_my_password_try_2' );       *
 *       if( SpamJuggler.isError() )                                         *
 *       {                                                                   *
 *           alert( SpamJuggler.getError() );                                *
 *       }                                                                   *
 *       //-->                                                               *
 *       </script>                                                           *
 *                                                                           *
 *       (*) Show current system informations, via method getSystemInfo:     *
 *                                                                           *
 *       <script type="text/javascript">                                     *
 *       <!--//                                                              *
 *       var arrSystemInfo = SpamJuggler.getSystemInfo();                    *
 *       var strMessage = '';                                                *
 *       for( var strKey in arrSystemInfo )                                  *
 *       {                                                                   *
 *           strMessage += strKey + ': ' + arrSystemInfo[ strKey ] + '\n';   *
 *       }                                                                   *
 *       alert( strMessage );                                                *
 *       //-->                                                               *
 *       </script>                                                           *
 *                                                                           *
 *       (*) Show current site informations, via method getSiteInfo:         *
 *                                                                           *
 *       <script type="text/javascript">                                     *
 *       <!--//                                                              *
 *       var arrSiteInfo = SpamJuggler.getSiteInfo();                        *
 *       var strMessage = '';                                                *
 *       for( var strKey in arrSiteInfo )                                    *
 *       {                                                                   *
 *           strMessage += strKey + ': ' + arrSiteInfo[ strKey ] + '\n';     *
 *       }                                                                   *
 *       alert( strMessage );                                                *
 *       //-->                                                               *
 *       </script>                                                           *
 *                                                                           *
 *       (*) Show current statistics, via method getStatistics:              *
 *                                                                           *
 *       <script type="text/javascript">                                     *
 *       <!--//                                                              *
 *       var arrStatistics = SpamJuggler.getStatistics();                    *
 *       var strMessage = '';                                                *
 *       for( var strKey in arrStatistics )                                  *
 *       {                                                                   *
 *           strMessage += strKey + ': ' + arrStatistics[ strKey ] + '\n';   *
 *       }                                                                   *
 *       alert( strMessage );                                                *
 *       //-->                                                               *
 *       </script>                                                           *
 *                                                                           *
 *       (*) Show results of last API server query, via                      *
 *           method getQueryResults:                                         *
 *                                                                           *
 *       <script type="text/javascript">                                     *
 *       <!--//                                                              *
 *       var arrQueryResults = SpamJuggler.getQueryResults();                *
 *       alert( 'Result of last API server query:\n' + (                     *
 *              ( arrQueryResults[ 'error' ] > 0 )                           *
 *              ? arrQueryResults[ 'message' ]                               *
 *              : 'No errors.' ) );                                          *
 *       //-->                                                               *
 *       </script>                                                           *
 *                                                                           *
 *       (*) Load and display user (alias) data, via methods                 *
 *           loadAlias and getUserData:                                      *
 *                                                                           *
 *       <script type="text/javascript">                                     *
 *       <!--//                                                              *
 *       var strAliasName = prompt( 'Please type in your alias name' , '' ); *
 *       var strPassWord = prompt( 'Please type in your password' , '' );    *
 *       if( ! SpamJuggler.loadAlias( strAliasName , strPassWord ) )         *
 *       {                                                                   *
 *           alert( SpamJuggler.getError() );                                *
 *       }                                                                   *
 *       else                                                                *
 *       {                                                                   *
 *           var arrUserData = SpamJuggler.getUserData();                    *
 *           var strOut = '';                                                *
 *           for( var strKey in arrUserData )                                *
 *           {                                                               *
 *                strOut += strKey + ': ' + arrUserData[ strKey ] + '\n';    *
 *           }                                                               *
 *           alert( strOut );                                                *
 *       }                                                                   *
 *       //-->                                                               *
 *       </script>                                                           *
 *                                                                           *
 *       (*) Adding aliases, via method addAlias:                            *
 *                                                                           *
 *       <script type="text/javascript">                                     *
 *       <!--//                                                              *
 *       var strAliasName =                                                  *
 *           prompt( 'Please type in an alias name' , '' );                  *
 *       var strPassWord =                                                   *
 *           prompt( 'Please type in a password' , '' );                     *
 *       var strForwardAddress =                                             *
 *           prompt( 'Please type in your email address' , '' );             *
 *       var intForwardCount =                                               *
 *           parseInt( prompt( 'How many mails to be forwarded?' , '' ) );   *
 *       var bNotify =                                                       *
 *           ( confirm( 'Would you like to receive notifications?' ) )       *
 *           ? true                                                          *
 *           : false;                                                        *
 *       if( ! SpamJuggler.addAlias( strAliasName ,                          *
 *                                   strPassWord ,                           *
 *                                   strForwardAddress ,                     *
 *                                   intForwardCount ,                       *
 *                                   bNotify ) )                             *
 *       {                                                                   *
 *           alert( SpamJuggler.getError() );                                *
 *       }                                                                   *
 *       else                                                                *
 *       {                                                                   *
 *           alert( 'Your alias email address has been created.' );          *
 *       }                                                                   *
 *       //-->                                                               *
 *       </script>                                                           *
 *                                                                           *
 *       (*) Editing aliases, via method editAlias:                          *
 *                                                                           *
 *       <script type="text/javascript">                                     *
 *       <!--//                                                              *
 *       var strAliasName =                                                  *
 *           prompt( 'Please type in your alias name' , '' );                *
 *       var strPassWord =                                                   *
 *           prompt( 'Please type in your password' , '' );                  *
 *       var strForwardAddress =                                             *
 *           prompt( 'Please type in an email address' , '' );               *
 *       var intForwardCount =                                               *
 *           parseInt( prompt( 'How many mails to be forwarded?' , '' ) );   *
 *       var bNotify =                                                       *
 *           ( confirm( 'Would you like to receive notifications?' ) )       *
 *           ? true                                                          *
 *           : false;                                                        *
 *       if( ! SpamJuggler.editAlias( strAliasName ,                         *
 *                                    strPassWord ,                          *
 *                                    strForwardAddress ,                    *
 *                                    intForwardCount ,                      *
 *                                    bNotify ) )                            *
 *       {                                                                   *
 *           alert( SpamJuggler.getError() );                                *
 *       }                                                                   *
 *       else                                                                *
 *       {                                                                   *
 *           alert( 'Your alias email address has been modified.' );         *
 *       }                                                                   *
 *       //-->                                                               *
 *       </script>                                                           *
 *                                                                           *
 *       (*) Deleting aliases, via method deleteAlias:                       *
 *                                                                           *
 *       <script type="text/javascript">                                     *
 *       <!--//                                                              *
 *       var strAliasName =                                                  *
 *           prompt( 'Please type in your alias name' , '' );                *
 *       var strPassWord =                                                   *
 *           prompt( 'Please type in your password' , '' );                  *
 *       if( ! SpamJuggler.deleteAlias( strAliasName ,                       *
 *                                      strPassWord ) )                      *
 *       {                                                                   *
 *           alert( SpamJuggler.getError() );                                *
 *       }                                                                   *
 *       else                                                                *
 *       {                                                                   *
 *           alert( 'Your alias email address has been deleted.' );          *
 *       }                                                                   *
 *       //-->                                                               *
 *       </script>                                                           *
 *                                                                           *
 * ------------------------------------------------------------------------- *
 *                                                                           *
 * Attributes/Fields                                                         *
 *                                                                           *
 *    private Array   _arrQueryResult                                        *
 *                                                                           *
 * Methods                                                                   *
 *                                                                           *
 *    public  void    SpamJugglerAPI( void )                                 *
 *    public  String  getAPITitle( void )                                    *
 *    public  String  getAPIVersion( void )                                  *
 *    public  String  getError( void )                                       *
 *    public  Boolean isError( void )                                        *
 *    public  Boolean isOK( void )                                           *
 *    public  Array   getSystemInfo( void )                                  *
 *    public  Array   getSiteInfo( void )                                    *
 *    public  Array   getStatistics( void )                                  *
 *    public  Array   getQueryResults( void )                                *
 *    public  Array   getUserData( void )                                    *
 *    public  Boolean loadAlias( String ,                                    *
 *                               String )                                    *
 *    public  Boolean addAlias( String ,                                     *
 *                              String ,                                     *
 *                              String ,                                     *
 *                              Integer ,                                    *
 *                              Boolean )                                    *
 *    public  Boolean editAlias( String ,                                    *
 *                               String ,                                    *
 *                               String ,                                    *
 *                               Integer ,                                   *
 *                               Boolean )                                   *
 *    public  Boolean deleteAlias( String ,                                  *
 *                                 String )                                  *
 *    private Array   _getQuerySection( String )                             *
 *    private Array   _queryAPIServer( Integer ,                             *
 *                                     String ,                              *
 *                                     String ,                              *
 *                                     String ,                              *
 *                                     Integer ,                             *
 *                                     Boolean )                             *
 *                                                                           *
 *****************************************************************************/

/**
 * Constructor of this API class.
 *
 * @author CI:A - Certus In Audio
 * @method SpamJugglerAPI
 * @param {void}
 * @public
 * @return {void}
 * @since 1.0.0
 * @uses _arrQueryResult
 * @uses _queryAPIServer
 */
function SpamJugglerAPI()
{
    /**
     * Holds results of last API server query.
     *
     * @author CI:A - Certus In Audio
     * @private
     * @property _arrQueryResult
     * @since 1.0.0
     * @type {Array}
     */
    this._arrQueryResult = this._queryAPIServer();
}

/**
 * Returns the title of this API class.
 *
 * @author CI:A - Certus In Audio
 * @method getAPITitle
 * @param {void}
 * @public
 * @return {String} The title of this API class
 * @since 1.0.0
 * @uses _arrQueryResult
 */
SpamJugglerAPI.prototype.getAPITitle = function()
{
    return this._arrQueryResult[ 'api_title' ];
};

/**
 * Returns the full version of this API class
 * (including major-, minor- and revision numbers; separated by dots).
 *
 * @author CI:A - Certus In Audio
 * @method getAPIVersion
 * @param {void}
 * @public
 * @return {String} The full version of this API class
 * @since 1.0.0
 * @uses _arrQueryResult
 */
SpamJugglerAPI.prototype.getAPIVersion = function()
{
    return this._arrQueryResult[ 'api_version' ];
};

/**
 * Returns current error message (from last API server query).
 *
 * @author CI:A - Certus In Audio
 * @method getError
 * @param {void}
 * @public
 * @return {String} Current error message (from last API server query)
 * @since 1.0.0
 * @uses _arrQueryResult
 */
SpamJugglerAPI.prototype.getError = function()
{
    return this._arrQueryResult[ 'result_message' ];
};

/**
 * Returns true on errors (while last API server query).
 *
 * @author CI:A - Certus In Audio
 * @method isError
 * @param {void}
 * @public
 * @return {Boolean} True on errors (while last API server query)
 * @since 1.0.0
 * @uses _arrQueryResult
 */
SpamJugglerAPI.prototype.isError = function()
{
    var intEL = this._arrQueryResult[ 'result_message' ].length;
    var bE = ( intEL > 0 ) ? true : false;
    return bE;
};

/**
 * Returns false on errors (while last API server query).
 *
 * @author CI:A - Certus In Audio
 * @method isOK
 * @param {void}
 * @public
 * @return {Boolean} False on errors (while last API server query)
 * @since 1.0.0
 * @uses isError
 */
SpamJugglerAPI.prototype.isOK = function()
{
    var bE = ( this.isError() ) ? false : true;
    return bE;
};

/**
 * Returns system informations from API server.
 *
 * @author CI:A - Certus In Audio
 * @method getSystemInfo
 * @param {void}
 * @public
 * @return {Array} Current system informations from API server
 * @since 1.0.0
 * @uses _getQuerySection
 */
SpamJugglerAPI.prototype.getSystemInfo = function()
{
    return this._getQuerySection( 'system' );
};

/**
 * Returns site informations from API server.
 *
 * @author CI:A - Certus In Audio
 * @method getSiteInfo
 * @param {void}
 * @public
 * @return {Array} Current site informations from API server
 * @since 1.0.0
 * @uses _getQuerySection
 */
SpamJugglerAPI.prototype.getSiteInfo = function()
{
    return this._getQuerySection( 'site' );
};

/**
 * Returns statistics from API server.
 *
 * @author CI:A - Certus In Audio
 * @method getStatistics
 * @param {void}
 * @public
 * @return {Array} Current statistics from API server
 * @since 1.0.0
 * @uses _getQuerySection
 */
SpamJugglerAPI.prototype.getStatistics = function()
{
    return this._getQuerySection( 'mails' );
};

/**
 * Returns current query results (from last API server query).
 *
 * @author CI:A - Certus In Audio
 * @method getQueryResults
 * @param {void}
 * @public
 * @return {Array} Current query results (from last API server query)
 * @since 1.0.0
 * @uses _getQuerySection
 */
SpamJugglerAPI.prototype.getQueryResults = function()
{
    return this._getQuerySection( 'result' );
};

/**
 * Returns current user data (from last API server query).
 *
 * @author CI:A - Certus In Audio
 * @method getUserData
 * @param {void}
 * @public
 * @return {Array} Current user data (from last API server query)
 * @since 1.0.0
 * @uses _getQuerySection
 */
SpamJugglerAPI.prototype.getUserData = function()
{
    return this._getQuerySection( 'alias' );
};

/**
 * Loads a data set of an alias from system.
 *
 * @author CI:A - Certus In Audio
 * @method loadAlias
 * @param {String} strAliasName An alias name
 * @param {String} strPassWord A password
 * @public
 * @return {Boolean} True on success
 * @since 1.0.0
 * @uses _arrQueryResult
 * @uses _queryAPIServer
 * @uses isOK
 */
SpamJugglerAPI.prototype.loadAlias = function( strAliasName ,
                                               strPassWord )
{
    this._arrQueryResult = this._queryAPIServer( 0 ,
                                                 strAliasName ,
                                                 strPassWord );
    return this.isOK();
};

/**
 * Adds an alias to system.
 *
 * @author CI:A - Certus In Audio
 * @method addAlias
 * @param {String} strAliasName An alias name
 * @param {String} strPassWord A password
 * @param {String} strForwardAddress A forward address
 * @param {Integer} intForwardCount Number of mails to receive [ 1 - 100 ]
 * @param {Boolean} bNotify If true system notifications will be sent
 * @public
 * @return {Boolean} True on success
 * @since 1.0.0
 * @uses _arrQueryResult
 * @uses _queryAPIServer
 * @uses isOK
 */
SpamJugglerAPI.prototype.addAlias = function( strAliasName ,
                                              strPassWord ,
                                              strForwardAddress ,
                                              intForwardCount ,
                                              bNotify )
{
    this._arrQueryResult = this._queryAPIServer( 1 ,
                                                 strAliasName ,
                                                 strPassWord ,
                                                 strForwardAddress ,
                                                 intForwardCount ,
                                                 bNotify  );
    return this.isOK();
};

/**
 * Modifies data of an alias in system.
 *
 * @author CI:A - Certus In Audio
 * @method editAlias
 * @param {String} strAliasName An alias name
 * @param {String} strPassWord A password
 * @param {String} strForwardAddress A forward address
 * @param {Integer} intForwardCount Number of mails to receive [ 1 - 100 ]
 * @param {Boolean} bNotify If true system notifications will be sent
 * @public
 * @return {Boolean} True on success
 * @since 1.0.0
 * @uses _arrQueryResult
 * @uses _queryAPIServer
 * @uses isOK
 */
SpamJugglerAPI.prototype.editAlias = function( strAliasName ,
                                               strPassWord ,
                                               strForwardAddress ,
                                               intForwardCount ,
                                               bNotify )
{
    this._arrQueryResult = this._queryAPIServer( 2 ,
                                                 strAliasName ,
                                                 strPassWord ,
                                                 strForwardAddress ,
                                                 intForwardCount ,
                                                 bNotify  );
    return this.isOK();
};

/**
 * Removes an alias from system.
 *
 * @author CI:A - Certus In Audio
 * @method deleteAlias
 * @param {String} strAliasName An alias name
 * @param {String} strPassWord A password
 * @public
 * @return {Boolean} True on success
 * @since 1.0.0
 * @uses _arrQueryResult
 * @uses _queryAPIServer
 * @uses isOK
 */
SpamJugglerAPI.prototype.deleteAlias = function( strAliasName ,
                                                 strPassWord )
{
    this._arrQueryResult = this._queryAPIServer( 3 ,
                                                 strAliasName ,
                                                 strPassWord );
    return this.isOK();
};

/**
 * Returns a section of the QueryResult-object as array.
 *
 * @author CI:A - Certus In Audio
 * @method _getQuerySection
 * @param {String} strSectionID An ID of a section to return
 * @private
 * @return {Array} An array, containing the section/result
 * @since 1.0.0
 * @uses _arrQueryResult
 */
SpamJugglerAPI.prototype._getQuerySection = function( strSectionID )
{
    var arrRV = {};
    for( var strRK in this._arrQueryResult )
    {
        if( strRK.substring( 0 , strSectionID.length + 1 ) ===
            strSectionID + '_' )
        {
            arrRV[ strRK.replace( strSectionID + '_' , '' ) ] =
                this._arrQueryResult[ strRK ];
        }
    }
    return arrRV;
};

/**
 * Performs a query to the API server and returns the result as array.
 *
 * @author CI:A - Certus In Audio
 * @method _queryAPIServer
 * @param {Integer} intAction A code of action to perform ( 0 | 1 | 2 | 3 )
 * @param {String} strAliasName An alias name
 * @param {String} strPassWord A password
 * @param {String} strForwardAddress A forward address
 * @param {Integer} intForwardCount Number of mails to receive [ 1 - 100 ]
 * @param {Boolean} bNotify If true system notifications will be sent
 * @private
 * @return {Array} The result of API server query
 * @since 1.0.0
 */
SpamJugglerAPI.prototype._queryAPIServer = function( intAction ,
                                                     strAliasName ,
                                                     strPassWord ,
                                                     strForwardAddress ,
                                                     intForwardCount ,
                                                     bNotify )
{
    arrDS = {};
    arrDS[ 'result_error' ] = -1;
    arrDS[ 'result_message' ] = '';
    arrDS[ 'system_name' ] = '';
    arrDS[ 'system_version' ] = '';
    arrDS[ 'system_date' ] = '';
    arrDS[ 'system_timestamp' ] = -1;
    arrDS[ 'system_maxmailsize' ] = -1;
    arrDS[ 'system_maxaliaslifetime' ] = -1;
    arrDS[ 'system_maxmailcountperuser' ] = -1;
    arrDS[ 'system_defaultnotify' ] = true;
    arrDS[ 'site_title' ] = '';
    arrDS[ 'site_link' ] = '';
    arrDS[ 'site_copyright' ] = '';
    arrDS[ 'api_title' ] = '';
    arrDS[ 'api_version' ] = '';
    arrDS[ 'api_date' ] = '';
    arrDS[ 'api_author' ] = '';
    arrDS[ 'api_website' ] = '';
    arrDS[ 'mails_received' ] = -1;
    arrDS[ 'mails_forwarded' ] = -1;
    arrDS[ 'mails_rejected' ] = -1;
    arrDS[ 'mails_failed' ] = -1;
    arrDS[ 'alias_name' ] = '';
    arrDS[ 'alias_password' ] = '';
    arrDS[ 'alias_forwardaddress' ] = '';
    arrDS[ 'alias_forwardcount' ] = -1;
    arrDS[ 'alias_expires' ] = '';
    arrDS[ 'alias_expirestimestamp' ] = -1;
    arrDS[ 'alias_notify' ] = true;
    arrDS[ 'alias_mailcount' ] = -1;
    var objXHR = null;
    if( window.XMLHttpRequest )
    {
        try { objXHR = new XMLHttpRequest(); }
        catch( objE ) { objXHR = null; }
    }
    if( objXHR == null )
    {
        try { objXHR = new ActiveXObject( 'Microsoft.XMLHTTP' ); }
        catch( objE ) { objXHR = null; }
    }
    if( objXHR == null )
    {
        try { objXHR = new ActiveXObject( 'Msxml2.XMLHTTP' ); }
        catch( objE ) { objXHR = null; }
    }
    if( objXHR == null )
    {
        try { objXHR = new ActiveXObject( 'Msxml2.XMLHTTP.6.0' ); }
        catch( objE ) { objXHR = null; }
    }
    if( objXHR == null )
    {
        try { objXHR = new ActiveXObject( 'Msxml2.XMLHTTP.3.0' ); }
        catch( objE ) { objXHR = null; }
    }
    if( objXHR == null )
    {
        arrDS[ 'result_error' ] = 1;
        arrDS[ 'result_message' ] = 'Cannot create XMLHttpRequest object';
        return arrDS;
    }
    intAction =
        ( ( intAction == null ) ||
          ( typeof intAction !== 'number' ) )
        ? 0 : intAction;
    strAliasName =
        ( ( strAliasName == null ) ||
          ( typeof strAliasName !== 'string' ) )
        ? '' : strAliasName;
    strPassWord =
        ( ( strPassWord == null ) ||
          ( typeof strPassWord !== 'string' ) )
        ? '' : strPassWord;
    strForwardAddress =
        ( ( strForwardAddress == null ) ||
          ( typeof strForwardAddress !== 'string' ) )
        ? '' : strForwardAddress;
    intForwardCount =
        ( ( intForwardCount == null ) ||
          ( typeof intForwardCount !== 'number' ) )
        ? 1 : intForwardCount;
    bNotify =
        ( ( bNotify == null ) ||
          ( typeof bNotify !== 'boolean' ) )
        ? true : bNotify;
    objXHR.open( 'GET' ,
                 '//hot.as/spam-juggler/' +
                 '?camp_oc=a643c' +
                 '&camp_ac=' + intAction +
                 '&camp_un=' + strAliasName +
                 '&camp_pw=' + strPassWord +
                 '&camp_fa=' + strForwardAddress +
                 '&camp_mc=' + intForwardCount +
                 '&camp_sn=' + ( ( bNotify ) ? '1' : '0' ) +
                 '&' + Math.floor( ( Math.random() * 8999 ) + 1000 ) +
                 '=' + Math.random() ,
                 false );
    objXHR.send( null );
    if( objXHR.responseXML == null )
    {
        arrDS[ 'result_error' ] = 1;
        arrDS[ 'result_message' ] = 'Invalid XML response';
        return arrDS;
    }
    var arrRV = {};
    var arrCG = new Array( 'system' ,
                           'site' ,
                           'statistics' ,
                           'result' ,
                           'userdata' );
    for( var strCK in arrCG )
    {
        var arrSX = objXHR.responseXML.getElementsByTagName( arrCG[ strCK ] );
        for( var strSK in arrSX )
        {
            var objNodes = arrSX[ strSK ].childNodes;
            for( var objElement in objNodes )
            {
                if( objNodes[ objElement ] )
                {
                    if( objNodes[ objElement ].nodeType === 1 )
                    {
                        arrRV[ arrCG[ strCK ] + '_' +
                               objNodes[ objElement ].nodeName ] =
                            objNodes[ objElement ].textContent;
                    }
                }
            }
        }
    }
    arrDS[ 'result_error' ] =
        ( typeof arrRV[ 'result_errors' ] === 'string' )
        ? parseInt( arrRV[ 'result_errors' ] )
        : arrDS[ 'result_error' ];
    arrDS[ 'result_message' ] =
        ( typeof arrRV[ 'result_errors' ] === 'string' )
        ? arrRV[ 'result_messages' ]
        : arrDS[ 'result_message' ];
    arrDS[ 'system_name' ] =
        ( typeof arrRV[ 'result_errors' ] === 'string' )
        ? arrRV[ 'system_systemname' ]
        : arrDS[ 'system_name' ];
    arrDS[ 'system_version' ] =
        ( typeof arrRV[ 'result_errors' ] === 'string' )
        ? arrRV[ 'system_systemversion' ]
        : arrDS[ 'system_version' ];
    arrDS[ 'system_date' ] =
        ( typeof arrRV[ 'result_errors' ] === 'string' )
        ? arrRV[ 'system_date' ]
        : arrDS[ 'system_date' ];
    arrDS[ 'system_timestamp' ] =
        ( typeof arrRV[ 'result_errors' ] === 'string' )
        ? parseInt( arrRV[ 'system_timestamp' ] )
        : arrDS[ 'system_timestamp' ];
    arrDS[ 'system_maxmailsize' ] =
        ( typeof arrRV[ 'result_errors' ] === 'string' )
        ? parseInt( arrRV[ 'system_maxmailsize' ] )
        : arrDS[ 'system_maxmailsize' ];
    arrDS[ 'system_maxaliaslifetime' ] =
        ( typeof arrRV[ 'result_errors' ] === 'string' )
        ? parseInt(
            arrRV[ 'system_maxmailaliaslifetime' ].replace(
                ' days' , '' ).replace( '+' , '' )
          )
        : arrDS[ 'system_maxaliaslifetime' ];
    arrDS[ 'system_maxmailcountperuser' ] =
        ( typeof arrRV[ 'result_errors' ] === 'string' )
        ? parseInt( arrRV[ 'system_maxmailcountperuser' ] )
        : arrDS[ 'system_maxmailcountperuser' ];
    arrDS[ 'system_defaultnotify' ] =
        ( arrRV[ 'system_defaultnotify' ] == '1' )
        ? true
        : false;
    arrDS[ 'site_title' ] =
        ( typeof arrRV[ 'result_errors' ] === 'string' )
        ? arrRV[ 'site_title' ]
        : arrDS[ 'site_title' ];
    arrDS[ 'site_link' ] =
        ( typeof arrRV[ 'result_errors' ] === 'string' )
        ? arrRV[ 'site_link' ]
        : arrDS[ 'site_link' ];
    arrDS[ 'site_copyright' ] =
        ( typeof arrRV[ 'result_errors' ] === 'string' )
        ? arrRV[ 'site_copyright' ]
        : arrDS[ 'site_copyright' ];
    arrDS[ 'api_title' ] =
        'Spam-Juggler JavaScript API';
    arrDS[ 'api_version' ] =
        '1.2.48';
    arrDS[ 'api_date' ] =
        '2015-04-28';
    arrDS[ 'api_author' ] =
        'CI:A - Certus In Audio';
    arrDS[ 'api_website' ] =
        'http://certus.in/';
    arrDS[ 'mails_received' ] =
        ( typeof arrRV[ 'result_errors' ] === 'string' )
        ? parseInt( arrRV[ 'statistics_mailsreceived' ] )
        : arrDS[ 'mails_received' ];
    arrDS[ 'mails_forwarded' ] =
        ( typeof arrRV[ 'result_errors' ] === 'string' )
        ? parseInt( arrRV[ 'statistics_mailsforwarded' ] )
        : arrDS[ 'mails_forwarded' ];
    arrDS[ 'mails_rejected' ] =
        ( typeof arrRV[ 'result_errors' ] === 'string' )
        ? parseInt( arrRV[ 'statistics_mailsrejected' ] )
        : arrDS[ 'mails_rejected' ];
    arrDS[ 'mails_failed' ] =
        ( typeof arrRV[ 'result_errors' ] === 'string' )
        ? parseInt( arrRV[ 'statistics_mailsfailed' ] )
        : arrDS[ 'mails_failed' ];
    arrDS[ 'alias_name' ] =
        ( typeof arrRV[ 'result_errors' ] === 'string' )
        ? arrRV[ 'userdata_aliasusername' ]
        : arrDS[ 'alias_name' ];
    arrDS[ 'alias_password' ] =
        ( typeof arrRV[ 'result_errors' ] === 'string' )
        ? arrRV[ 'userdata_aliasuserpassword' ]
        : arrDS[ 'alias_password' ];
    arrDS[ 'alias_forwardaddress' ] =
        ( typeof arrRV[ 'result_errors' ] === 'string' )
        ? arrRV[ 'userdata_forwardemailaddress' ]
        : arrDS[ 'alias_forwardaddress' ];
    arrDS[ 'alias_forwardcount' ] =
        ( typeof arrRV[ 'result_errors' ] === 'string' )
        ? parseInt( arrRV[ 'userdata_maxforwardmailcount' ] )
        : arrDS[ 'alias_forwardcount' ];
    arrDS[ 'alias_expires' ] =
        ( typeof arrRV[ 'result_errors' ] === 'string' )
        ? arrRV[ 'userdata_expires' ]
        : arrDS[ 'alias_expires' ];
    arrDS[ 'alias_expirestimestamp' ] =
        ( typeof arrRV[ 'result_errors' ] === 'string' )
        ? parseInt( arrRV[ 'userdata_expirestimestamp' ] )
        : arrDS[ 'alias_expirestimestamp' ];
    arrDS[ 'alias_notify' ] =
        ( arrRV[ 'userdata_notify' ] == '1' )
        ? true
        : false;
    arrDS[ 'alias_mailcount' ] =
        ( typeof arrRV[ 'result_errors' ] === 'string' )
        ? parseInt( arrRV[ 'userdata_count' ] )
        : arrDS[ 'alias_mailcount' ];
    if( ( arrDS[ 'system_timestamp' ] === -1 ) ||
        ( arrDS[ 'mails_received' ] === -1 ) ||
        ( arrDS[ 'result_error' ] === -1 ) )
    {
        arrDS[ 'result_error' ] = 1;
        arrDS[ 'result_message' ] = 'Invalid XML response';
        return arrDS;
    }
    return arrDS;
};

/**
 * For lazy people...
 *
 * @author CI:A - Certus In Audio
 * @since 1.0.0
 * @type {Object}
 */
var SpamJuggler = new SpamJugglerAPI();
