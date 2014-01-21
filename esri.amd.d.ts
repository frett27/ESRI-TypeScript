// Code under MIT License (see main license file).
// Typescript definition file for ArcGIS API for JavaScript Version 3.4
// Associated API : http://developers.arcgis.com/en/javascript/
// Git repo : https://github.com/frett27/esri_web_playground.git
// Email : fabrice.leray.dev(at)gmail(dot)com
// Email : frett27(at)gmail(dot)com
// Copyright (c) 2013 Fabrice Leray, Patrice Freydiere 


/// <reference path="../Dojo-TypeScript/dojo.d.ts" />
/// <reference path="../Dojo-TypeScript/dijit.d.ts" />

declare module esri {

    class esriNS {
        /**
        * esri Namespace
        */
        constructor();  
        /**
        * Version number.
        */          
	    version: number;
    }

    /**
    * Utility methods for working with graphics.
    */
    interface graphicsUtils {
        /**
        * Converts an array of graphics to an array of geometries. This is primarily used by GeometryService. Beginning with version 2.0, GeometryService accepts only geometries and not graphics. (Added at v2.0)
        * @param graphics Array of graphics to convert to geometries
        */
        getGeometries(graphics: esri.Graphic[]): esri.geometry.Geometry[];
        /**
        * Utility function that returns the extent of an array of graphics. If the extent height and width are 0, null is returned. (Added at v1.3)
        * @param graphics The input graphics array.
        */
	    graphicsExtent(graphics: esri.Graphic[]): esri.geometry.Extent;
    }

    /**
    * Retrieve data from a remote server or upload a file.
    */
    interface request {
        /** 
        *Request URL. (required)
        */
        url: string;
        /**
        *If the request url points to a web server that requires parameters, specify them here. The default value is null. 
        */
		content?: Object;
        /**
        *If the request is to upload a file, specify the form element that contains the file input control here. The default value is null. Starting at version 3.3, the form parameter can be an instance of FormData. Using FormData you can send a "multipart/form-data" request to the server without having to create an HTML form element in markup. Note that the FormData api is not available in all browsers.
        */
        form?: Object;
        /**
        *Response format. Valid values are 'json', 'xml', 'text'. The default value is 'json'.
        */
        handleAs?: string;
        /**
        *Name of the callback parameter (a special service parameter) to be specified when requesting data in JSONP format. It is ignored for all other data formats. For ArcGIS services the value is always 'callback'.
        */
        callbackParamName?: string;
        /**
        *Indicates the amount of time to wait for a response from the server. The default is 60000 milliseconds (one minute). Set to 0 to wait indefinitely.
        */
		timeout? : number;			    
    }

    /**
    *Retrieve data from a remote server or upload a file.
    */
    interface esriRequest {
        /**
        *Retrieve data from a remote server or upload a file from a user's computer.
        *@param request request argument is an object with the following properties that describe the request.
        *@param options argument is an object with the following properties representing various options supported by this function.
        */
        (request: request, options?: Object): dojo.Deferred<any>;
        /**
        *Define a callback function that will be called just before esri.request calls into dojo IO functions such as dojo.rawXhrPost and dojo.io.script.get. It provides developers an opportunity to modify the request.
        *@param callbackFunction 
        *@returns void
        */
	    setRequestPreCallback(callbackFunction : Function): void;
    }

    /**
    *Utility methods related to working with a DOM.
    */
	class domUtils {
        constructor();    
        /**
        *Represents the size of the client side window or document at first load. The size contains width and height properties, and these do not change on window resize. (Added at v1.3)
        */
        documentBox: Object;
        /**
        *Hides an HTML element such as a DIV or TABLE.
        *@param element The name of the HTML element.
        *@returns void
        */
        hide(element: Element): void;
        /**
        *If an HTML element is currently visible, the element is hidden. If the element is hidden, it becomes visible.
        *@param element The name of the HTML element.
        *@returns void
        */
        toggle(element: Element): void;
        /**
        *Shows an HTML element such as a DIV or TABLE.
        *@param element The name of the HTML element.
        *@returns void
        */
	    show(element : Element): void;
	}

    /**
    *Utility methods for working with strings, arrays and objects.
    */
    interface esriLang {
        /**
        *Creates a new object with all properties that pass the test implemented by the filter provided in the function
        *@param object Object to filter.
        *@param callback Function or string implementing the filtering.
        *@param thisObject Optional object used to scope the call to the callback.
        */
	    filter(object: Object, callback: Function, thisObject: Object): Object;
        /**
        *A wrapper around dojo.string.substitute that can also handle wildcard substitution. A wildcard uses the format of ${*}. If no template is provided, it is assumed to be a wildcard. This method is useful if you are not using Graphic or an InfoTemplate, but you want to embed result values in HTML, for example.
        *@param data The data object used in the substitution.
        *@param template The template used for the substitution. Can be any valid HTML. If no template is included, the wildcard template is used.
        *@param first When true, returns only the first property found in the data object. The default is false.
        *@returns void
        */
        substitute(data: Object, template?: string, first?: boolean): void;
        /**
        *Iterates through the argument array and searches for the identifier to which the argument value matches. Returns null if no matching identifier is found.
        *@param array The argument array for testing.
        *@param value The value used in the search. If the value is a String, the value is case sensitive.
        */
        valueOf(array: Array<Object>, value: Object): Object;
        /**
        *Returns true when the value is neither null or undefined. Otherwise false. (Added at v3.3)
        *@param value The value to test. 
        */
	    isDefined(value : Object): boolean;
	}

    interface ProxyRule {
        /**
        *URL for the proxy.
        */
		proxyUrl : string;
        /**
        *URL prefix for resources that need to be accessed through the given proxy.
        */
        urlPrefix: string;
	}

	/**
    *Utility methods for working with URLs.
    */
    interface urlUtils {
        /**
        *Converts the URL arguments to an object representation. The object format is: {path: <String>, query:{key:<Object>}}
        *@param url The input URL.
        */
        urlToObject(url: string): Object;
        /**
        *Adds the given proxy rule to the proxy rules list: esri.config.defaults.io.proxyRules (Added at v3.4)
        *@param rule Proxy rule.
        */
        addProxyRule(rule: ProxyRule): number;
        /**
        *Returns the proxy rule that matches the given url. (Added at v3.4)
        *@param url URL to return its proxy rule.
        */
	    getProxyRule(url : string): ProxyRule;
	}

    /**
    *The Credential class represents a credential object used to access a secure ArcGIS resource.
    */
    export class Credential {
        /**
        *Token expiration time specified as number of milliseconds since 1 January 1970 00:00:00 UTC
        */
        expires: string;
        /**
        *Indicates whether this credential belongs to a user with admin privileges
        */
        isAdmin: boolean;
        /**
        *The server url
        */
        server: string;
        /**
        *Indicates whether the resources accessed using this credential should be fetched over HTTPS protocol
        */
        ssl: boolean;
        /**
        *Token generated by the token service using the specified userId and password
        */
        token: string;
        /**
        *	User associated wth the Credential object
        */
        userId: string;
        /**
        *Destroy a credential.
        *@returns void
        */
        destroy(): void;
        /**
        *Generate a new token and update the Credential's token property with the newly acquired token.
        */
        refreshToken(): dojo.Deferred<any>;
        /**
        *Return the properties of this object in JSON
        */
        toJson(): Object;
        /**
        *Fired when a credential object is destroyed.
        *@returns void
        */
        onDestroy(): void;
        /**
        *Fired when the token associated with the credential is updated or changed
        *@returns void
        */
        onTokenChange(): void;
    }

    /**
    *A Graphic can contain geometry, a symbol, attributes, or an infoTemplate. A Graphic is displayed in the GraphicsLayer. The GraphicsLayer allows you to listen for events on Graphics.
    */
    export class Graphic {
        /**
        *Creates a new Graphic object. Specify parameters in the given order using null if you aren't providing a value for an option.
        *@param geometry The geometry that defines the graphic.
        *@param symbol Symbol used for drawing the graphic.
        *@param attributes Name value pairs of fields and field values associated with the graphic.
        *@param infoTemplate The content for display in an InfoWindow.
        */
        constructor(geometry: esri.geometry.Geometry, symbol: esri.symbol.Symbol, attributes: Object, infoTemplate: esri.InfoTemplate);
        /**
        *Creates a new Graphic object using a JSON object.
        *@param json JSON object representing the graphic.
        */
        constructor(json: Object);
        /**
        *Name value pairs of fields and field values associated with the graphic
        */
        attributes: Object;
        /**
        *The geometry that defines the graphic
        */
        geometry: esri.geometry.Geometry;
        /**
        *The content for display in an InfoWindow
        */
        infoTemplate: InfoTemplate;
        /**
        *The symbol for the graphic
        */
        symbol: esri.symbol.Symbol;
        /**
        *Indicate the visibility of the graphic.
        */
        visible: boolean;
        /**
        *Returns the content string based on attributes and infoTemplate values
        */
        getContent(): string;
        // getDojoShape(): Dojo.gfx.shape.Shape;
        /**
        *Returns the info template associated with the graphic.
        */
        getInfoTemplate(): esri.InfoTemplate;
        /**
        *Returns the graphics layer that contains the graphic.
        */
        getLayer(): esri.layers.GraphicsLayer;
        /**
        *Returns the title string based on attributes and infoTemplate values
        */
        getTitle(): string;
        /**
        *Hides the graphic
        *@returns void
        */
        hide(): void;
        /**
        *Defines the attributes of the graphic
        */
        setAttributes(attributes: Object): Graphic;
        /**
        *Defines the geometry of the graphic
        */
        setGeometry(geometry: esri.geometry.Geometry): Graphic;
        /**
        *Defines the InfoTemplate for the InfoWindow of the graphic.
        */
        setInfoTemplate(infoTemplate: esri.InfoTemplate): Graphic;
        /**
        *Sets the symbol of the graphic
        */
        setSymbol(symbol: esri.symbol.Symbol): Graphic;
        /**
        *Shows the graphic
        *@returns void
        */
        show(): void;
        /**
        *Converts object to its ArcGIS Server JSON representation
        */
        toJson(): Object;
    }

	/**
    *This class provides the framework and helper methods required to implement a solution for managing user credentials for the following resources:
    - ArcGIS Server resources secured using token-based authentication. Note that only ArcGIS Server versions 10 SP 1 and greater are supported.
    - Secured ArcGIS.com resources (i.e. web maps).
    This class is not typically used by itself and does not include a user interface to obtain user input. The esri.IdentityManager class provides a complete out-of-the-box implementation.
    */
    export class IdentityManagerBase {
        /**
        *The suggested lifetime of the token in minutes.
        */
        tokenValidity: number;
        /**
        *Returns the credential for the resource identified by the specified url. Optionally you can provide a userId to find credentials for a specific user.
        *@param url The url to a server.
        *@param userId The userId for which you want to obtain credentials.
        */
        findCredential(url: string, userId?: string): Credential;
        /**
        *Returns information about the server that is hosting the specified url.
        *@param url The url to a server.
        */
        findServerInfo(url: string): esri.ServerInfo;
        /**
        *Returns an object containing a token and its expiration time. You need to provide the ServerInfo object that contains token service URL and a user info object containing username and password. This is a helper method typically called by sub-classes to generate tokens.
        *@param serverInfo A ServerInfo object that contains a token service URL.
        *@param userInfo A user info object containing a user name and password.
        *@param options Optional parameters. (As of 3.0). 
        <Boolean> isAdmin 	Indicate that the token should be generated using the token service deployed with the ArcGIS Server Admin API. The default value is false.
        */
        generateToken(serverInfo: esri.ServerInfo, userInfo: Object, options?: Object): dojo.Deferred<any>;
        /**
        *Returns a Credential object that can be used to access the secured resource identified by the input url. If required the user will be challenged for a username and password which is used to generate a token. Note: The IdentityManager sets up a timer to update the Credential object with a new token prior to the expiration time. This method is typically called by esri.request when a request fails due to an "invalid credentials" error.
        *@param url The url for the secure resource.
        *@param options Optional parameters. (As of 3.0). 
        <Boolean> retry 	Determines if the method should make additional attempts to get the credentials after a failure.
        <String> token 	Token used for a previous unsuccessful attempt to fetch the given url
        <Error> error 	Error object returned by the server from a previous attempt to fetch the given url.
        */
        getCredential(url: string, options?: Object): dojo.Deferred<any>;
        /**
        *Call this method (during your application initialization) with JSON previously obtained from toJson method to re-hydrate the state of identity manager. (Added at v2.8)
        *@param json The JSON obtained from the toJson method.
        */
        initialize(json: Object): Object;
        /**
        *Returns true if the identity manager is busy accepting user input, i.e. the user has invoked signIn and is waiting for a response.
        */
        isBusy(): boolean;
        /**
        *Register secure servers and the token endpoints.
        *@param serverInfos A ServerInfos object that defines the secure service and token endpoint. The Identity Manager makes its best guess to determine the locatation of the secure server and token endpoint so in most cases calling registerServers is not necessary. However if the location of your server or token endpoint is non-standard use this method to register the location.
        *@returns void
        */
        registerServers(serverInfos: esri.ServerInfo[]): void;
        /**
        *Registers the given OAuth2 access token with the identity manager.
An access token can be obtained after the user logs in to ArcGIS Online through your application. This process is described in the User logins via JavaScript apps help topic and demonstrated in this sample application.
Once registered with the identity manager, the access token will be passed along with all AJAX requests made by the application (on behalf of the logged in user) to access WebMaps and other items stored in ArcGIS Online. (Added at v3.4)
        *@param properties An object with the following properties:
        <String> server	This is the root URL for the ArcGIS Online REST API http://www.arcgis.com/sharing/rest
        <String> token	The access token.
        <String> userId	The id for the user who owns the access token.
        <Number> expires	Token expiration time specified as number of milliseconds since 1 January 1970 00:00:00 URC.
        <Boolean> ssl	Set this to true if the user has an ArcGIS Online Organizational Account and the organization is configured to allow access to resources only through SSL. 
        *@returns void
        */
        registerToken(properties: Object): void;
        /**
        * When accessing secured resources, identity manager may prompt for username and password and send them to the server using a secure connection. Due to browser limitations under certain conditions, it may not be possible to establish a secure connection with the server if the application is being run over HTTP protocol (you can identify the protocol by looking at the URL bar in any browser). In such cases, the Identity Manager will abort the request to fetch the secured resource. Read the documentation for more info.
        *@param handlerFunction The function to call when the protocol is mismatched. This function will be called with an object with the following properties:
        <String> resourceUrl 	The secure resource URL.
        <ServerInfo>ServerInfo 	Object describing the server where the secure resource is hosted. 
        *@returns void
        */
        setProtocolErrorHandler(handlerFunction: Function): void;
        /**
        * When accessing secure resources from ArcGIS.com or one of its sub-domains the IdentityManager redirects the user to the ArcGIS.com sign-in page. Once the user successfully logs-in they are redirected back to the application. Use this method if the application needs to execute custom logic before the page is redirected by creating a custom redirection handler. The IdentityManager calls the custom handler function with an object containing the redirection properties. (Added at v2.6)
        *@param handler An object containing the following redirection properties: 
        <String> resourceUrl 	The URL of the secure resource that triggers the redirection to the ArcGIS.com sign-in page.
        <ServerInfo> serverInfo 	ServerInfo object describing the server where the secure resource is hosted.
        <String> signInPage 	URL of the sign-in page where users will be redirected.
        <String> returnUrlParamName 	The application URL where the sign-in page redirects after a successful log-in. To create the return URL append the application's URL to signInPage as a parameter. returnUrlParamName contains the name of the parameter. 
        *@returns void
        */
        setRedirectionHandler(handler: Object): void;
        /**
        * Sub-classes must implement this method to create and manager the user interface that is used to obtain a username and password from the end-user. It should perform the following tasks:
        Challenge the user for a username and password.
        Generate a token and return it to the caller via Deferred object.
        *@param url Url for the secure resource.
        *@param serverInfo A ServerInfo object that contains the token service url.
        *@param options Optional parameters. (As of 3.0). 
        <Error> error 	Error object returned by the server from a previous attempt to fetch the given url.
        <Boolean> isAdmin 	Indicate that the token should be generated using the token service deployed with the ArcGIS Server Admin API. The default value is false.
        <String> token 	Token used for previous unsuccessful attempts to fetch the given url
        */
        signIn(url: string, serverInfo: esri.ServerInfo, options: Object): dojo.Deferred<any>;
        /**
        * Return properties of this object in JSON.It can be stored in a Cookie or persisted in HTML5 LocalStorage and later used to:
        Initialize the IdentityManager the next time user opens your application.
        Share the state of identity manager between multiple web pages of your website.
        This way your users won't be asked to sign in repeatedly when they launch your app multiple times or when navigating between multiple web pages in your website.
        */
        toJson(): Object;
    }


    /**
    *This singleton class is automatically instantiated into esri.id when the module containing this class is imported into the application. This class extends esri.IdentityManagerBase and inherits the base class properties and methods. This class provides the framework and helper methods required to implement a solution for managing user credentials for the following resources:
        ArcGIS Server resources secured using token-based authentication. Note that only ArcGIS Server versions 10 SP 1 and greater are supported.
        Secured ArcGIS.com resources (i.e. web maps).
    */
    export class IdentityManager extends IdentityManagerBase {
        /**
        *
        */
        esriSignInDialog: string;
        /**
        *Dialog box widget used to challenge the user for their credentials when the application attempts to access a secure resource.
        */
        dialog: any; //dijit.Dialog;
        /**
        *Fired when the user clicks the cancel button on the dialog box widget.
        *@param info An object with the following properties: <String> resourceUrl URL of the secured resource for which the sign-in process was cancelled. <ServerInfo> serverInfo A ServerInfo object describing the server where the secure resource is hosted.
        *@returns void
        */
        onDialogCancel(info: Object): void;
        /**
        *Fired when the dialog box widget, used to prompt users for their credentials, is created
        *@returns void
        */
        onDialogCreate(): void;
        //dialogcancel: Object; // Event
        //dialogcreate: void;


    }

    /**
    *An InfoTemplate contains a title and content template string used to transform Graphic.attributes into an HTML representation. The Dojo syntax ${<key>} performs the parameter substitution. In addition, a wildcard ${*} can be used as the template string. The wildcard prints out all of the attribute's name value pairs. The default behavior on a Graphic is to show the Map's InfoWindow after a click on the Graphic. An InfoTemplate is required for this default behavior. 
    */
    export class InfoTemplate {
        /**
        * Creates a new empty InfoTemplate object.
        */
        constructor();
        /** 
        * Creates a new InfoTemplate object.
        *@param title The template for defining how to format the title used in an InfoWindow.
        *@param content The template for defining how to format the content used in an InfoWindow.
        */
        constructor(title: string, content: string);
        /**
        * Creates a new InfoTemplate object using a JSON object.
        *@param json JSON object representing the InfoTemplate.
        {title:"Test Title", content:"Test Content"}
        */
        constructor(json: Object);
        /**
        * The template for defining how to format the content used in an InfoWindow.
        */
        content: any; // String|Function
        /**
        * The template for defining how to format the title used in an InfoWindow.You can format the title by specifying either a string value or a function.
        */
        title: any; // String|Function
        /**
        * Sets the content template. View the Format Info Window Content help topic for more details.
        *@param template The template for the content.
        */
        setContent(template: string): esri.InfoTemplate;
        /**
        * Sets the content template. View the Format Info Window Content help topic for more details.
        *@param template The template for the content.
        */
        setContent(template: Function): esri.InfoTemplate;
        /**
        * Sets the title template. View the Format Info Window Content help topic for more details.
        *@param template 
        */
        setTitle(template: string): esri.InfoTemplate;
        /**
        * Sets the title template. View the Format Info Window Content help topic for more details.
        *@param template 
        */
        setTitle(template: Function): esri.InfoTemplate;
        /**
        * Converts object to its ArcGIS Server JSON representation.
        */
        toJson(): Object;
    }

	/**
    *The base class for the out-of-the-box InfoWindow. To create a custom info window, extend this class and adhere to the following requirements:
    Provide implementation for the listed methods
    Expose listed properties
    Fire listed events
    */
    export class InfoWindowBase {
        /**
        *The reference to a DOM node where the info window is constructed.
        */
        domNode: Object;
        /**
        *Indicates if the info window is visible.
        */
        isShowing: boolean;
        /**
        *Helper method. Call destroy on dijits that are embedded into the specified node. Sub-classes may need to call this method before executing setContent logic to finalize the destruction of any embedded dijits in the previous content.
        *@returns void
        */
        destroyDijits(): void;
        /**
        *Hide the info window. Fire the onHide event at the end of your implementation of this method to hide the info window.
        Sub-classes should implement this method.
        *@returns void
        */
        hide(): void;
        /**
        *Helper method. Place the HTML value as a child of the specified parent node.
        *@param value A string with HTML tags.
        *@param parentNode The parent node where the value will be placed.
        *@returns void
        */
        place(value: string, parentNode: any): void;
        /**
        *Helper method. Place the HTML value as a child of the specified parent node.
        *@param value A DOM node.
        *@param parentNode The parent node where the value will be placed.
        *@returns void
        */
        place(value: any, parentNode: any): void;
        /**
        *Resize the info window to the specified width and height (in pixels).
        Sub-classes should implement this method.
        *@param width The new width of the InfoWindow in pixels.
        *@param height The new height of the InfoWindow in pixels.
        *@returns void
        */
        resize(width: number, height: number): void;
        /**
        *Define the info window content. Sub-classes should implement this method.
        *@param content Text to display in the info window, can include HTML tags to format and organize the content.
        *@returns void
        */
        setContent(content: string): void;
        /**
        *Define the info window content. Sub-classes should implement this method.
        *@param content The content argument can be any of the following. See the Info Template content property for details.
        - Reference to an HTML element
        See the Info Window content property for details.
        - Deferred object
        A deferred object represents a value that may not be immediately available. Your implementation should wait for the results to become available by assigning a callback function to the deferred object.
        *@returns void
        */
        setContent(content: Object): void;
        /**
        *This method is called by the map when the object is set as its info window. The default implementation provided by InfoWindowBase stores the argument to this object in a property named map and is sufficient for most use cases.
        *@param map The map object.
        *@returns void
        */
        setMap(map: esri.Map): void;
        /**
        *Set the input value as the title for the info window. Sub-classes should implement this method.
        *@param title string value.
        *@returns void
        */
        setTitle(title: string): void;
        /**
        *Set the input value as the title for the info window. Sub-classes should implement this method.
        *@param title The title argument can be any of the following. See the Info Template content property for details.
        - Reference to an HTML element
        See the Info Window content property for details.
        - Deferred object
        A deferred object represents a value that may not be immediately available. Your implementation should wait for the results to become available by assigning a callback function to the deferred object.
        *@returns void
        */
        setTitle(title: Object): void;
        /**
        *Display the info window at the specified location. Location is an instance of esri.geometry.Point. Fire the onShow event at the end of your implementation of this method to display the info window.
        It is entirely up to you, the developer, how to display the info window. You can emulate the out-of-the-box behavior of displaying the entire info window at once. Or you can create a custom implementation that displays a portion of the window, perhaps the title, initially then animates the content area.
        Subclasses should implement this method.
        *@param location Location is an instance of esri.geometry.Point. If the location has a spatial reference, it is assumed to be in map coordinates otherwise screen coordinates are used. Screen coordinates are measured in pixels from the top-left corner of the map control. To convert between map and screen coordinates use Map.toMap and Map.toScreen.
        *@returns void
        */
        show(location: esri.geometry.Point): void;
        /**
        *Helper method. Call startup on dijits that are embedded into the specified node. Sub-classes may need to call this method right after displaying the info window, passing in a reference to the content node.
        *@returns void
        */
        startupDijits(): void;
        /**
        *This method is called by the map when the object is no longer the map's info window. The default implementation provided by InfoWindowBase clears the argument property "map" from the object and is sufficient for most use cases.
        *@param map The map object.
        *@returns void
        */
        unsetMap(map: esri.Map): void;
        /**
        *Fires after the info window is hidden. Sub-classes typically fire this event at the end of the hide method logic.
        *@returns void
        */
        onHide(): void;
        /**
        *Fires after the info window becomes visible. Sub-classes typically fire this event at the end of the show method logic. If your implementation of the info window animates the DOM node into visibility, fire this event at the end of the animation.
        *@returns void
        */
        onShow(): void;
    }



	interface ExtentEvent extends Event {
		
        // onExtentChange(extent: esri.geometry.Extent, delta: esri.geometry.Point, levelChange: boolean, lod : esri.layers.LOD): void;
		extent : esri.geometry.Extent;
		delta : esri.geometry.Point;
		levelChange : boolean;
		lod : esri.layers.LOD;

    }


    interface MouseEvent2 extends MouseEvent {
        // Cf. https://developers.arcgis.com/en/javascript/jsapi/map.html#click
        // 	"A standard DOM MouseEvent with additional properties such as mapPoint and screenPoint"
        mapPoint: esri.geometry.Point;
        screenPoint: esri.geometry.Point;
    }


    /**
    *The esri.Map class creates a container and required DOM structure for adding layers, graphics, an info window, and other navigation controls.
    Typically, a map is added to a page using a DIV. The map's width and height are initialized to those of the DIV container. 

    CSS Classes
    esriAttribution: Represents the map attribution node.
    esriAttributionOpen: Represents the map attribution node when it is open i.e., it is clicked. Use this class to define CSS rules that apply to the attribution only when it is open.
    */
    export class Map { // we can't extends the dijit._Widget because of a compiler bug, see : https://github.com/schungx/Dojo-TypeScript/issues/2
		// in that case, we have to define the base methods
        /**
        *Creates a new map inside of the given HTML container, which is often a DIV element.
        *@param divId Container id for the referencing map. Required.
        *@param options Optional parameters. See options list.
        <Number> attributionWidth 	
        <Boolean> autoResize 	
        <String> basemap 	Specify a basemap for the map. The following are valid options: "streets" , "satellite" , "hybrid", "topo", "gray", "oceans", "national-geographic", "osm".
        <Number[] | Point> center 	
        <Boolean> displayGraphicsOnPan 	
        <Extent> extent 	
        <Boolean> fadeOnZoom 	
        <Boolean> fitExtent 	
        <Boolean> force3DTransforms 	
        <InfoWindowBase> infoWindow 	
        <LOD[]> lods 	
        <Boolean> logo 	Display the esri logo on the map.
        <Number> maxScale 	
        <Number> maxZoom 	
        <Number> minScale 	
        <Number> minZoom 	
        <Boolean> nav 	
        <String> navigationMode 	
        <Boolean> optimizePanAnimation 	
        <Number> resizeDelay 	
        <Number> scale 	Initial map scale.
        <Boolean> showAttribution
        <Boolean> showInfoWindowOnClick
        <Boolean> slider
        <String[]> sliderLabels
        <String> sliderOrientation
        <String> sliderPosition
        <String> sliderStyle
        <Boolean> wrapAround180
        <Number> zoom
        */
        constructor(divId, options?: Object);
        /**
        *Reference to the attribution widget created by the map when map attribution is enabled. (Added at v3.1)
        */
        esriAttribution: string;
        /**
        *Reference to the attribution widget created by the map when map attribution is enabled. (Added at v3.1)
        */
        esriAttributionOpen: string;
        /**
        *Reference to the attribution widget created by the map when map attribution is enabled. (Added at v3.1)
        */
        attribution: esri.dijit.Attribution;
        /**
        *Value is true when the map automatically resizes if the browser window or ContentPane widget enclosing the map is resized. Otherwise false. Added at v.3.3.
        */
        autoResize: boolean;
        /**
        *The current extent of the map in map units. See Setting and using extents in a map for more information about extents.
        */
        extent: esri.geometry.Extent;
        /**
        *Indicates if the fade effect is enabled while zooming. Only applicable when navigationMode is set to 'css-transforms'. The default value is true. (Added at v2.6)
        */
        fadeOnZoom: boolean;
        /**
        *When the mapNavigation mode is set to 'css-transforms', CSS3 transforms will be used for map navigation when supported by the browser. It is recommended that you let the map determine when to enable transformations to avoid running into a known issue (http://code.google.com/p/chromium/issues/detail?id=105227) with scrollbar rendering on Chrome on Windows XP. (Added at v2.6)
        */
        force3DTransforms: boolean;
        /**
        *The extent (or bounding box) of the map in geographic coordinates. Available only when the map's spatial reference is Web Mercator or Geographic (wkid 4326).  (Added at v3.3)
        */
        geographicExtent: esri.geometry.Extent;
        /**
        *Provides access to the Map's GraphicsLayer. The graphics object is available to use after the Map.onLoad event.
        */
        graphics: esri.layers.GraphicsLayer;
        /**
        *An array of the current GraphicsLayers in the map. (Added at v1.4)
        */
        graphicsLayerIds: string[];
        /**
        *Current height of the map in screen pixels. This property is read-only. The height and width of the map are normally set in the HTML DIV or other HTML element containing the map container.
        */
        height: number;
        /**
        *Reference to HTML DIV or other element where the map is placed on the page. This property is set in the Map constructor.
        */
        id: string;
        /**
        *Displays the InfoWindow on a map.
        */
        infoWindow: esri.dijit.Popup;
        /**
        *When true, the key sequence of shift then click to recenter the map is enabled. See Map navigation for more details.
        */
        isClickRecenter: boolean;
        /**
        *When true, double click zoom is enabled. This allows a user to zoom and recenter the map by double clicking the mouse. See Map navigation for more details.
        */
        isDoubleClickZoom: boolean;
        /**
        *When true, keyboard navigation is enabled. This allows users to pan the keyboard using the arrow keys and to zoom using the + and - keys. See Map navigation for more details.
        */
        isKeyboardNavigation: boolean;
        /**
        *When true, map panning is enabled using the mouse. See Map navigation for more details.
        */
        isPan: boolean;
        /**
        *When true, pan arrows are displayed around the edge of the map. See Map navigation for more details.
        */
        isPanArrows: boolean;
        /**
        *When true, rubberband zoom is enabled. This allows users to draw a bounding box zoom area using the mouse. See Map navigation for more details.
        */
        isRubberBandZoom: boolean;
        /**
        *When true, the mouse scroll wheel zoom is enabled. See Map navigation for more details.
        */
        isScrollWheelZoom: boolean;
        /**
        *When true, shift double click zoom is enabled. This allows a user to zoom and recenter the map by shift + double clicking the mouse. See Map navigation for more details. (Added at v1.2)
        */
        isShiftDoubleClickZoom: boolean;
        /**
        *When true, the zoom slider is displayed on the map. See Map navigation for more details.
        */
        isZoomSlider: boolean;
        /**
        *Array of current TiledMapServiceLayers and DynamicMapServiceLayers added to the map.
        */
        layerIds: string[];
        /**
        *After the first layer is loaded, the value is set to true.
        */
        loaded: boolean;
        /**
        *Indicates whether the map uses CSS3 transformations when panning and zooming. In 'css-transform' mode the map will use CSS3 transformations, if supported by the browser, to provide a smoother experience while panning and zooming the map. (Added at v2.6)
        */
        navigationMode: string;
        /**
        *This point geometry in screen coordinates represent the top-left corner of the map container. This coordinate also acts as the origin for all screen coordinates returned by Map and GraphicsLayer events. (Added at v1.3)
        */
        position: esri.geometry.Point;
        /**
        *The DOM node that contains the container of layers, build-in info window, logo and slider. (Added at v2.2)
        */
        root: any; //DOMNode;
        /**
        *When true, map attribution is enabled. (Added at v3.1)
        */
        showAttribution: boolean;
        /**
        *If snapping is enabled on the map using map.enableSnapping() this property provides access to the SnappingManager. The snapping manager's setLayerInfo method can be used to modify the target snapping layers. (Added at v2.3)
        */
        snappingManager: esri.SnappingManager;
        /**
        *The spatial reference of the map. See Projected Coordinate Systems and Geographic Coordinate Systems for the list of supported spatial references.
        */
        spatialReference: esri.SpatialReference;
        /**
        *The current TimeExtent for the map. Use the setTimeExtent method to modify the time extent. (Added at v2.0)
        */
        timeExtent: esri.TimeExtent;
        /**
        *Current width of the map in screen pixels. This property is read-only. The height and width of the map are normally set in the HTML DIV or other HTML element containing the map container.
        */
        width: number;
        /**
        *Adds an ESRI Layer to the map.
        *@param layer Layer to be added to the map.
        *@param index A layer can be added at a specified index in the map. If no index is specified or the index specified is greater than the current number of layers, the layer is automatically appended to the list of layers in the map and the index is normalized. (As of v1.3) 
        * @returns The 0 return object of Layer was added at v1.4. This is a new method.
        */
        addLayer(layer: esri.layers.Layer, index?: number): esri.layers.Layer;
        /**
        *Adds multiple layers to a map. The array order corresponds to the layer order in the client side map. The onLayerAddResult event fires for each layer that is added. Once all the layers are added to the map the onLayersAddResult fires.
        *@param layers Layers to be added to the map.
        *@returns void
        */
        addLayers(layers: esri.layers.Layer[]): void;
        /**
        *Centers and zooms the map. 
        *@param mapPoint Centers the map on the specified x,y location. Starting at version 3.3, the mapPoint can be an array of longitude/latitude pairs. 
        *@param levelOrFactor When using an ArcGISTiledMapServiceLayer, the map is zoomed to the level specified. When using a DynamicMapServiceLayer, the map is zoomed in or out by the specified factor. For example, use 0.5 to zoom in twice as far and 2.0 to zoom out twice as far.
        * @returns At version 3.4, this method returns a deferred object. You can add a callback to the deferred object and get notified after the operation is completed. (Added at v1.2)
        */
        centerAndZoom(mapPoint: esri.geometry.Point, levelOrFactor: number): dojo.Deferred<any>;
        /**
        *Centers the map based on map coordinates as the center point. 
        *@param mapPoint Centers the map on the specified x,y location. Starting at version 3.3 this value can be an array of longitude/latitude pairs. 
        * @returns At version 3.4, this method returns a deferred object. You can add a callback to the deferred object and get notified after the map has been re-centered to the given point.
        */
        centerAt(mapPoint: esri.geometry.Point): dojo.Deferred<any>;
        /**
        *Destroys the map instance. After the map is destroyed it is no longer valid however you can re-use the div element of the map to create a new map instance. (Added at v2.0)
        *@returns void
        */
        destroy(): void;
        /**
        *Disallows clicking on a map to center it. See Map navigation for more details.
        *@returns void
        */
        disableClickRecenter(): void;
        /**
        *Disallows double clicking on a map to zoom in a level and center the map. See Map navigation for more details.
        *@returns void
        */
        disableDoubleClickZoom(): void;
        /**
        *Disallows panning and zooming using the keyboard. See Map navigation for more details.
        *@returns void
        */
        disableKeyboardNavigation(): void;
        /**
        *Disallows all map navigation except the slider and pan arrows. See Map navigation for more details.
        *@returns void
        */
        disableMapNavigation(): void;
        /**
        *Disallows panning a map using the mouse. See Map navigation for more details.
        *@returns void
        */
        disablePan(): void;
        /**
        *Disallows zooming in or out on a map using a bounding box. See Map navigation for more details.
        *@returns void
        */
        disableRubberBandZoom(): void;
        /**
        *Disallows zooming in or out on a map using the mouse scroll wheel. See Map navigation for more details.
        *@returns void
        */
        disableScrollWheelZoom(): void;
        /**
        *Disallows shift double clicking on a map to zoom in a level and center the map. See Map navigation for more details. (Added at v1.2)
        *@returns void
        */
        disableShiftDoubleClickZoom(): void;
        /**
        *Disables snapping on the map. (Added at v2.3)
        *@returns void
        */
        disableSnapping(): void;
        /**
        *Permits users to click on a map to center it. See Map navigation for more details.
        *@returns void
        */
        enableClickRecenter(): void;
        /**
        *Permits users to double click on a map to zoom in a level and center the map. See Map navigation for more details.
        *@returns void
        */
        enableDoubleClickZoom(): void;
        /**
        *Permits users to pan and zoom using the keyboard. See Map navigation for more details.
        *@returns void
        */
        enableKeyboardNavigation(): void;
        /**
        *Allows all map navigation. See Map navigation for more details.
        *@returns void
        */
        enableMapNavigation(): void;
        /**
        *Permits users to pan a map using the mouse. See Map navigation for more details.
        *@returns void
        */
        enablePan(): void;
        /**
        *Permits users to zoom in or out on a map using a bounding box. See Map navigation for more details.
        *@returns void
        */
        enableRubberBandZoom(): void;
        /**
        *Permits users to zoom in or out on a map using the mouse scroll wheel. See Map navigation for more details.
        *@returns void
        */
        enableScrollWheelZoom(): void;
        /**
        *Permits users to shift double click on a map to zoom in a level and center the map. See Map navigation for more details. (Added at v1.2)
        *@returns void
        */
        enableShiftDoubleClickZoom(): void;
        /**
        *Enable snapping on the map when working with the Editor, Measurement widget or the Draw and Edit toolbars. If no snapOptions are provided all graphics layers, including feature layers, will be set as snap targets. Call this method after the layers are loaded. (Added at v2.3)
        *@param snapOptions Options object include:
            <Number> tolerance 	Specify the radius of the snapping circle in pixels. The default value is 15 pixels.
            <Object> layerInfos 	An array of layerInfo objects that define the snapping target layers. All values are optional. If no snapping options are set the default values will be used.
                <Layer> layer 	Reference to a feature or graphics layer that will be a target snapping layer. The default option is to set all feature and graphics layers in the map to be target snapping layers.
                <Boolean> snapToPoint 	Default is true. When true snapping to points will be enabled for layers with point geometry.
                <Boolean> snapToVertex 	Default is true. When true snapping to vertices will be enabled for layers with polyline or polygon geometry.
                <Boolean> snapToEdge 	Default is true. When true snapping to edges will be enabled for layers with polyline or polygon geometry.
            <SimpleMarkerSymbol> snapPointSymbol 	Define a symbol for the snapping location. The default symbol is a simple marker symbol with the following properties: size:15px,color:cyan,style:STYLE_CROSS.
            <Boolean> alwaysSnap 	When true, snapping is always enabled. When false users press the snapKey to enable snapping. The default value is false.
            <dojo.key> snapKey 	When alwaysSnap is set to false use this option to define the key users press to enable snapping. The default values is the CTRL key. 
        * @returns SnappingManager
        */
        enableSnapping(snapOptions: Object): SnappingManager;
        /**
        *Returns the name of the current basemap.  (Added at v3.3)
        * @returns String 
        */
        getBasemap(): string;
        /**
        *
        *@param screenCoords 
        * @returns 
        */
        getInfoWindowAnchor(screenCoords: esri.geometry.Point): string;
        /**
        *Returns an individual layer of a map.
        *@param id ID assigned to the layer.
        * @returns Layer
        */
        getLayer(id: string): esri.layers.Layer;
        /**
        *Return an array of layers visible at the current scale. (Added at v3.1)
        *@param scale Scale at which to return list of layers.
        * @returns Layer[]
        */
        getLayersVisibleAtScaleRange(scale: number): esri.layers.Layer[];
        /**
        *Gets the current level of detail for the map. Valid only with an ArcGISTiledMapService layer.
        * @returns Number
        */
        getLevel(): number;
        /**
        *Returns the maximum visible scale of the map. You cannot zoom-in beyond this scale. A value of 0 indicates that the map does not have a maximum scale constraint.  (Added at v3.3)
        * @returns Number
        */
        getMaxScale(): number;
        /**
        *Returns the maximum zoom level of the map. You cannot zoom in beyond this value. A value of -1 indicates that the map does not have pre-defined zoom levels. (Added at v3.3)
        * @returns Number
        */
        getMaxZoom(): number;
        /**
        *Returns the minimum visible scale of the map. You cannot zoom out beyond this scale. A value of 0 indicates that the map does not have a maximum scale constraint.  (Added at v3.3)
        * @returns Number
        */
        getMinScale(): number;
        /**
        *Returns the minimum zoom level of the map.You cannot zoom out beyond this value.  A value of -1 indicates that the map does not have pre-defined zoom levels.  (Added at v3.3)
        * @returns Number
        */
        getMinZoom(): number;
        /**
        *Returns the current map scale. (Added at v3.1)
        * @returns Number
        */
        getScale(): number;
        /**
        *Returns the current zoom level of the map. A value of -1 indicates that the map does not have pre-defined zoom levels. (Added at v3.3)
        * @returns Number
        */
        getZoom(): number;
        /**
        *Hides the pan arrows from the map. See Map navigation for more details.
        *@returns void
        */
        hidePanArrows(): void;
        /**
        *Hides the zoom slider from the map. See Map navigation for more details.
        *@returns void
        */
        hideZoomSlider(): void;
        /**
        *Pans the map south. At version 3.4, this method returns a deferred object. You can add a callback to the deferred object and get notified after the pan operation is completed.
        * @returns Deferred
        */
        panDown(): dojo.Deferred<any>;
        /**
        *Pans the map west. At version 3.4, this method returns a deferred object. You can add a callback to the deferred object and get notified after the pan operation is completed. 
        * @returns Deferred
        */
        panLeft(): dojo.Deferred<any>;
        /**
        *Pans the map southwest. At version 3.4, this method returns a deferred object. You can add a callback to the deferred object and get notified after the pan operation is completed.
        * @returns Deferred
        */
        panLowerLeft(): dojo.Deferred<any>;
        /**
        *Pans the map southeast. At version 3.4, this method returns a deferred object. You can add a callback to the deferred object and get notified after the pan operation is completed.
        * @returns Deferred
        */
        panLowerRight(): dojo.Deferred<any>;
        /**
        *Pans the map east. At version 3.4, this method returns a deferred object. You can add a callback to the deferred object and get notified after the pan operation is completed.
        * @returns Deferred
        */
        panRight(): dojo.Deferred<any>;
        /**
        *Pans the map north. At version 3.4, this method returns a deferred object. You can add a callback to the deferred object and get notified after the pan operation is completed.
        * @returns Deferred
        */
        panUp(): dojo.Deferred<any>;
        /**
        *Pans the map northwest. At version 3.4, this method returns a deferred object. You can add a callback to the deferred object and get notified after the pan operation is completed.
        * @returns Deferred
        */
        panUpperLeft(): dojo.Deferred<any>;
        /**
        *Pans the map northeast. At version 3.4, this method returns a deferred object. You can add a callback to the deferred object and get notified after the pan operation is completed.
        * @returns Deferred
        */
        panUpperRight(): dojo.Deferred<any>;
        /**
        *Removes all layers from the map. 
        *@returns void
        */
        removeAllLayers(): void;
        /**
        *Removes the specified layer from the map. (Added at v1.3)
        *@param layer Layer to be removed from the map. 
        *@returns void
        */
        removeLayer(layer: esri.layers.Layer): void;
        /**
        *Changes the layer order in the map. Note that the first layer added is always the base layer, even if its order is changed.
        *@param layer The layer to be moved. (As of v1.4) Beginning with version 1.4, use this parameter in place of "layerId".
        *@param index Refers to the location for placing the layer. The bottom most layer has an index of 0.
        *@returns void
        */
        reorderLayer(layer: esri.layers.Layer, index: number): void;
        /**
        *Repositions the map DIV on the page. This method should be used after the map DIV has been repostioned.
        *@returns void
        */
        reposition(): void;
        /**
        *Resizes the map DIV. This method should be used after the map DIV has been resized.
        *@param immediate By default, the actual resize logic is delayed internally in order to throttle spurious resize events dispatched by some browsers. In cases where you explicitly call this method in a one-and-done situation, you can use the boolean immediate argument to indicate that the resize logic should be applied immediately without any delay.
        *@returns void
        */
        resize(immediate?: boolean): void;
        /**
        *Change the map's current basemap.  (Added at v3.3)
        *@param basemap A valid basemap name. Valid values are: "streets" , "satellite" , "hybrid", "topo", "gray", "oceans", "national-geographic", "osm". 
        *@returns void
        */
        setBasemap(basemap: string): void;
        /**
        *Sets the extent of the map. The extent must be in the same spatial reference as the map.
        *@param extent Sets the minx, miny, maxx, and maxy for a map.
        *@param fit When true, for maps that contain tiled map service layers, you are guaranteed to have the input extent shown completely on the map. The default value is false. (As of v1.3) 
        * @returns At version 3.4, this method returns a deferred object. You can add a callback to the deferred object and get notified after the extent change has been committed by the map.
        */
        setExtent(extent: esri.geometry.Extent, fit?: boolean): dojo.Deferred<any>;
        /**
        *Sets the map to the specified level. Zooms to the new level based on the current map center point. Valid only with an ArcGISTiledMapService layer.
        *@param level The level ID.
        *@returns void
        */
        setLevel(level: number): void;
        /**
        *Sets the default cursor for the map. This cursor is shown whenever the mouse is pointed over the map, except when panning by dragging the map or using SHIFT+Drag to zoom. If not set, the map uses the platform-dependent default cursor, usually an arrow. (Added at v1.5)
        *@param cursor A standard CSS cursor value. Some common values include "default", "pointer", "crosshair", "text", "help", and "wait".
        *@returns void
        */
        setMapCursor(cursor: string): void;
        /**
        *Sets the map scale to the specified value. The value must be greater than 0. 
        *@param scale A map scale value greater than 0. 
        */
        setScale(scale): dojo.Deferred<any>;
        /**
        *Sets the TimeExtent for the map. When the time extent is changed the onTimeExtentChange event fires. Time aware layers listen for this event and update to only display content for the current time extent. (Added at v2.0)
        *@param timeExtent Set the time extent for which data is displayed on the map.
        *@returns void
        */
        setTimeExtent(timeExtent: esri.TimeExtent): void;
        /**
        *Set the time slider associated with the map.
        *@param timeSlider The time slider dijit to associate with the map.
        *@returns void
        */
        setTimeSlider(timeSlider: esri.dijit.TimeSlider): void;
        /**
        *Set the map zoom level to the given value.
        *@param zoom  	A valid zoom level value. 
        * @returns At version 3.4, this method returns a deferred object. You can add a callback to the deferred object and get notified after the zoom level has been changed. (Added at v3.3)
        */
        setZoom(zoom: number): dojo.Deferred<any>;
        /**
        *Shows the pan arrows on the map. See Map navigation for more details.
        *@returns void
        */
        showPanArrows(): void;
        /**
        *Shows the zoom slider on the map. See Map navigation for more details.
        *@returns void
        */
        showZoomSlider(): void;
        // toMap(screenPoint: esri.geometry.Point): esri.geometry.Point; // deprecated since version 3.3
        /**
        *Converts a single screen point or an array of screen points to map coordinates.
        *@param screenPoint Converts screen coordinates to map coordinates. Starting at version 3.3, screenPoint should be an instance of ScreenPoint. 
        * @returns Point
        */
        toMap(screenPoint: esri.geometry.ScreenPoint): esri.geometry.Point;
        /**
        *Converts a single map point or an array of map points to screen coordinates.
        *@param mapPoint Converts map coordinates to screen coordinates.
        * @returns Point
        */
        toScreen(mapPoint: esri.geometry.Point): esri.geometry.ScreenPoint; // fleray : ESRI documentation has errors here I suppose... (Point is mentionned instead of ScreenPoint)
        /**
        *Fired when the map's basemap is changed.  (Added at v3.3)
        *@returns void
        */
        onBasemapChange(): void;
        /**
        *Fires when a user single clicks on the map using the mouse and the mouse pointer is within the map region of the HTML page.
        *@param event The result can be any JavaScript MouseEvent, or the x and y coordinates of screenPoint or mapPoint.
        *@returns void
        */
        onClick(event: Object): void;
        /**
        *Fires when a user double clicks on the map using the mouse and the mouse pointer is within the map region of the HTML page.
        *@param event The result can be any JavaScript MouseEvent, or the x and y coordinates of screenPoint or mapPoint.
        *@returns void
        */
        onDblClick(event: Object): void;
        /**
        *Fires when the extent of the map has changed.
        *@param extent Gets the extent when after the extent has changed.
        *@param delta The change in the x and y values from the previous extent. The Point x and y values are in screen units. This point acts as an anchor point, and this part of the map stays within the map region during the zoom process.
        *@param levelChange When using ArcGIS Server tiled map services, the value is "true" when the user zooms to a new level. The value remains "false" during pan operations.
        *@param lod When using ArcGIS Server tiled map services, this argument returns characteristics about the level of detail.
        *@returns void
        */
        onExtentChange(extent: esri.geometry.Extent, delta: esri.geometry.Point, levelChange: boolean, lod: esri.layers.LOD): void;
        /**
        *Fires when a keyboard key is pressed.
        *@param keyEvent The keyCode is the Unicode number representing the pressed key. See http://msdn2.microsoft.com/en-us/library/ms536938.aspx.
        *@returns void
        */
        onKeyDown(keyEvent: Object): void;
        /**
        *Fires when a keyboard key is released.
        *@param keyEvent The keyCode is the Unicode number representing the pressed key.
        *@returns void
        */
        onKeyUp(keyEvent: Object): void;
        /**
        *Fires any time a layer is added to the map.
        *@param layer The layer added to the map.
        *@returns void
        */
        onLayerAdd(layer: esri.layers.Layer): void;
        /**
        *Fires after specified layer has been added to the map. (Added at v2.0)
        *@param layer The layer added to the map.
        *@param error Optional argument, available when an error occurs during the update.
        *@returns void
        */
        onLayerAddResult(layer: esri.layers.Layer, error: Error): void;
        /**
        *Fires after the layer has been removed. (Added at v1.3)
        *@returns void
        */
        onLayerRemove(): void;
        /**
        *Fires when the map layer order has been changed.
        *@param layer The reordered layer.
        *@param index The index of the reordered layer.
        *@returns void
        */
        onLayerReorder(layer: esri.layers.Layer, index: number): void;
        /**
        *Fires when a map layer resumes drawing. (Added at v3.1)
        *@param layer The layer that has resumed drawing.
        *@returns void
        */
        onLayerResume(layer: esri.layers.Layer): void;
        /**
        *Fires when a map layer suspends drawing. A layer is considered suspended when one of the following is true:
            - The layer is hidden.
            - The layer is not visible at the current map scale.
            - The layer is explicitly suspended by calling the Layer.suspend method.
        *@param layer The layer that has suspended drawing.
        *@returns void
        */
        onLayerSuspend(layer: esri.layers.Layer): void;
        /**
        *Fires after all layers are added to the map using the map.addLayers method. (Added at v2.0)
        *@param results Array of result objects with the following properties
            <Layer> layer 	Layer added to the map.
            <Boolean> success 	True if the layer was successfully added.
            <Error> error 	Error message if the map was unable to add the layer.
        *@returns void
        */
        onLayersAddResult(results: Object[]): void;
        /**
        *Fires after all the layers have been removed. (Added at v1.3)
        *@returns void
        */
        onLayersRemoved(): void;
        /**
        *Fires when all the layers have been reordered. (Added at v1.1)
        *@param layerIds  	Gets the extent during the zoom event.
        *@returns void
        */
        onLayersReordered(layerIds: string[]): void;
        /**
        *Fires when the first or base layer has been successfully added to the map.
        *@param map Specifies the map to load.
        *@returns void
        */
        onLoad(map: esri.Map): void;
        /**
        *Fires when a mouse button is pressed down and the mouse cursor is in the map region of the HTML page.
        *@param event The result can be any JavaScript MouseEvent, or the x and y coordinates of screenPoint or mapPoint.
        *@returns void
        */
        onMouseDown(event: Object): void;
        /**
        *Fires while the mouse is being dragged until the mouse button is released.
        *@param event The result can be any JavaScript MouseEvent, or the x and y coordinates of screenPoint or mapPoint.
        *@returns void
        */
        onMouseDrag(event: Object): void;
        /**
        *Fires when a mouse button is released and the user stops dragging the mouse.
        *@param event The result can be any JavaScript MouseEvent, or the x and y coordinates of screenPoint or mapPoint.
        *@returns void
        */
        onMouseDragEnd(event: Object): void;
        /**
        *Fires when a mouse button is pressed down and the user starts to drag the mouse.
        *@param event The result can be any JavaScript MouseEvent, or the x and y coordinates of screenPoint or mapPoint.
        *@returns void
        */
        onMouseDragStart(event: Object): void;
        /**
        *Fires any time the mouse pointer moves over the map region. A common use for this event is to show the current x,y coordinate of the map as the user moves the mouse pointer.
        *@param event The result can be any JavaScript MouseEvent, or the x and y coordinates of screenPoint or mapPoint.
        *@returns void
        */
        onMouseMove(event: Object): void;
        /**
        *Fires when the mouse moves out of the map region of the HTML page.
        *@param event The result can be any JavaScript MouseEvent, or the x and y coordinates of screenPoint or mapPoint.
        *@returns void
        */
        onMouseOut(event: Object): void;
        /**
        *Fires when the mouse moves into the map region of the HTML page.
        *@param event The result can be any JavaScript MouseEvent, or the x and y coordinates of screenPoint or mapPoint.
        *@returns void
        */
        onMouseOver(event: Object): void;
        /**
        *Fires when the mouse button is released and the mouse pointer is within the map region of the HTML page.
        *@param event The result can be any JavaScript MouseEvent, or the x and y coordinates of screenPoint or mapPoint.
        *@returns void
        */
        onMouseUp(event: Object): void;
        /**
        *Fires when the mouse wheel is scrolled.
        *@param event The returned object contains screenPoint, mapPoint, and Graphic.
        *@returns void
        */
        onMouseWheel(event: Object): void;
        /**
        *Fires during the pan process.
        *@param extent The current extent of the map as the map is panning.
        *@param delta The change in x,y values in screen units as the map is panning.
        *@returns void
        */
        onPan(extent: esri.geometry.Extent, delta: esri.geometry.Point): void;
        /**
        *Fires when the pan is complete.
        *@param extent The current extent of the map as the map is panning.
        *@param delta The change in x,y values in screen units from the starting screen point once the map is finished panning.
        *@returns void
        */
        onPanEnd(extent: esri.geometry.Extent, delta: esri.geometry.Point): void;
        /**
        *Fires when a user commences panning.
        *@param extent The current extent of the map as the map is panning.
        *@param startPoint When using a mouse, the starting point in screen units where the mouse was clicked. If the keyboard is used, the starting point is 0,0.
        *@returns void
        */
        onPanStart(extent: esri.geometry.Extent, startPoint: esri.geometry.Point): void;
        /**
        *Fires when the map DIV is repositioned.
        *@param x X-coordinate in screen units.
        *@param y Y-coordinate in screen units.
        *@returns void
        */
        onReposition(x: number, y: number): void;
        /**
        *Fires when the map's container has been resized.
        *@param extent The extent of the map.
        *@param width The width of the map in pixels.
        *@param height The height of the map in pixels.
        *@returns void
        */
        onResize(extent, width: number, height: number): void;
        /**
        *Fires when the map's timeExtent property is set. (Added at v2.0)
        *@param timeExtent Fires when the map's timeExtent property is changed. Time aware layers listen for this event and update to only display content for the map's specified time extent.
        *@returns void
        */
        onTimeExtentChange(timeExtent: esri.TimeExtent): void;
        /**
        *Fires when the page is refreshed. 
        *@param map Specified the map to unload.
        *@returns void
        */
        onUnload(map: esri.Map): void;
        /**
        *Fires after layers that are updating their content have completed. This event is often used in combination with onUpdateStart to display a "Map is busy" or "Loading..." message as visual feedback to the end-user. (Added at v2.2)
        *@returns void
        */
        onUpdateEnd(): void;
        /**
        *Fires when one or more layers being updating their content. This event is often used in combination with onUpdateEnd to display a "Map is busy" or "Loading..." message as visual feedback to the end-user. (Added at v2.2)
        *@returns void
        */
        onUpdateStart(): void;
        /**
        *Fires during the zoom process.
        *@param extent Gets the extent during the zoom event.
        *@param zoomFactor The scale factor represents the amount as a percentage that the map zoomed in or out from the previous extent. A value of 2 means the map was zoomed in twice as far as the previous extent. A value of 0.5 means the map zoomed out twice as far as previously.
        *@param anchor The location of the mouse pointer. The Point x and y values are in screen units. This point acts as an anchor point, and this part of the map stays within the map region during the zoom process.
        *@returns void
        */
        onZoom(extent: esri.geometry.Extent, zoomFactor: number, anchor: esri.geometry.Point): void;
        /**
        *Fires when the zoom is complete.
        *@param extent Gets the extent when the zoom event ends.
        *@param zoomFactor The scale factor represents the amount as a percentage that the map zoomed in or out from the previous extent. A value of 2 means the map was zoomed in twice as far as the previous extent. A value of 0.5 means the map zoomed out twice as far as previously.
        *@param anchor The location of the mouse pointer. The Point x and y values are in screen units. This point acts as an anchor point, and this part of the map stays within the map region during the zoom process.
        *@param level Level of an ArcGISTiledMapServiceLayer after zoom is complete.
        *@returns void
        */
        onZoomEnd(extent: esri.geometry.Extent, zoomFactor: number, anchor: esri.geometry.Point, level: number): void;
        /**
        *Fires when a user commences zooming.
        *@param extent Gets the extent when the zoom event starts.
        *@param zoomFactor The scale factor represents the amount as a percentage that the map zoomed in or out from the previous extent. A value of 2 means the map was zoomed in twice as far as the previous extent. A value of 0.5 means the map zoomed out twice as far as previously.
        *@param anchor The location of the mouse pointer. The Point x and y values are in screen units. This point acts as an anchor point, and this part of the map stays within the map region during the zoom process.
        *@param level Level of an ArcGISTiledMapServiceLayer before the zoom commences.
        *@returns void
        */
        onZoomStart(extent: esri.geometry.Extent, zoomFactor: number, anchor: esri.geometry.Point, level: number): void;
        //basemap-change : void;
        //click : <MouseEvent> <MouseEvent>;
        //dbl-click : <MouseEvent> <MouseEvent>;
        //extent-change : esri.geometry.Extent;
        on(name: "dbl-click", listener: Dojo.EventListener<MouseEvent2>): Dojo.RemovableHandle;
		on(name : "extent-change", listener : Dojo.EventListener<ExtentEvent>):Dojo.RemovableHandle;
        //key-down : <KeyboardEvent> <KeyboardEvent>;
        //key-up : <KeyboardEvent> <KeyboardEvent>;
        //layer-add : Layer;
        //layer-add-result : Layer;
        //layer-add-result : Layer;
        //layer-remove : Layer;
        //layer-reorder : Layer;
        //layer-resume : Layer;
        //layers-add-result : void;
        //layers-removed : void;
        //layers-reordered : <number[]> layerIds;
        //load : Map;
        //mouse-down : <MouseEvent> <MouseEvent>;
        //mouse-drag : <MouseEvent> <MouseEvent>;
        //mouse-drag-end : <MouseEvent> <MouseEvent>;
        //mouse-drag-start : <MouseEvent> <MouseEvent>;
        //mouse-move : <MouseEvent> <MouseEvent>;
        //mouse-out : <MouseEvent> <MouseEvent>;
        //mouse-over : <MouseEvent> <MouseEvent>;
        //mouse-up : <MouseEvent> <MouseEvent>;
        //mouse-wheel : <MouseEvent> <MouseEvent>;
        //pan : esri.geometry.Extent;
        //pan-end : esri.geometry.Point;
        //pan-start : esri.geometry.Extent;
        //reposition : <number> x;
        //resize : esri.geometry.Extent;
        //time-extent-change : TimeExtent;
        //unload : Map;
        //update-end : <Error> error;
        //update-start : void;
        //zoom : esri.geometry.Extent;
        //zoom-end : esri.geometry.Extent;
        //zoom-start : esri.geometry.Extent;
		on(type: string, listener: Dojo.Action): Dojo.RemovableHandle;
		on(type: string, listener: EventListener): Dojo.RemovableHandle;
    }

    /**
    *The OperationBase class defines operations that can be added to the UndoManager. Extend this class to create custom operations. The following edit operations in the esri.dijit.editing namespace inherit from this class. 
    */
    export class OperationBase {
        /**
        *Creates a new OperationBase object
        *@param params See options list for parameters:
        <String> label 	Provide information about the operation.
        <String> type 	Specify the type of operation, for example: "edit" or "navigation".
        */
        constructor(params: Object);
        /**
        *Details about the operation, for example: "Update" may be the label for an edit operation that updates features.
        */
        label: string;
        /**
        *The type of operation, for example: "edit" or "navigation".
        */
        type: string;
        /**
        *Re-perform the last undo operation. When inherting from OperationBase provide a custom implementation for this method.
        *@returns void
        */
        performRedo(): void;
        /**
        *Reverse the operation. When inheriting from OperationBase provide a custom implementation for this method.
        *@returns void
        */
        performUndo(): void;
    }

    /**
    *This class contains information about an ArcGIS Server and its token endpoint. 
    */
    export class ServerInfo {
        /**
        *The token service URL used to generate tokens for ArcGIS Server Admin resources
        */
        adminTokenServiceUrl: string;
        /**
        *Version of the ArcGIS Server REST API deployed on this server.
        */
        currentVersion: number;
        /**
        *Server URL in the following format:
         scheme://host[:port]
        */
        server: string;
        /**
        *Validity of short-lived token in minutes
        */
        shortLivedTokenValidity: number;
        /**
        *The token service URL used to generate tokens for the secured resources on the server
        */
        tokenServiceUrl: string;
        /**
        *Return the properties of this object in JSON
        */
        toJson(): Object;
    }

    /**
    *The SnappingManager is used to add snapping capability to the Editor, Measurement Widget, Draw toolbar and Edit toolbar.
    */
    export class SnappingManager {
        /**
        *Create a new SnappingManager object.
        *@param options Optional parameters. See options list.
        <Boolean> alwaysSnap 	When true, snapping is always enabled. When false users press the snapKey to enable snapping. Default value is false.
        <Object[]> layerInfos 	Specify an array of layerInfo objects.
        <Object> layerInfos 	Optional 	An array of layerInfo objects that define the snapping target layers. All values are optional. If no snapping options are set the default values will be used.
        <Layer> layer 	Reference to a feature or graphics layer that will be a target snapping layer. The default option is to set all feature and graphics layers in the map to be target snapping layers.
        <Boolean> snapToPoint 	Default is true. When true snapping to points will be enabled for layers with point geometry.
        <Boolean> snapToVertex 	Default is true. When true snapping to vertices will be enabled for layers with polyline or polygon geometry.
        <Boolean> snapToEdge 	Default is true. When true snapping to edges will be enabled for layers with polyline or polygon geometry.
        <Map> map 	Reference to the map. Required parameter.
        <dojo.keys> snapKey 	When alwaysSnap is set to false use this option to define the key users press to enable snapping. The default value is the dojo.copyKey. The dojo.copyKey is a virtual key that maps to CTRL on Windows and the Command key on mac.
        <SimpleMarkerSymbol> snapPointSymbol 	Define a symbol for the snapping location. The default symbol is a simple marker symbol with the following properties: size:15px, color:cyan, style:STYLE_CROSS.
        <Number> tolerance 	Specify the radius of the snapping circle in pixels. The default value is 15 pixels.
        */
        constructor(options?: Object);
        /**
        *Destroy the SnappingManager object. All related objects will be set to null.
        *@returns void
        */
        destroy(): void;
        /**
        *Returns a deferred object, which can be added to a callback to find the snap point.
        *@param screenPoint The input screen point for which to find the snapping location.
		*@returns 
        */
        getSnappingPoint(screenPoint: esri.geometry.ScreenPoint): dojo.Deferred<any>;
        /**
        *An array of layerInfo objects used to specify the target snapping layers.
        *@param layerInfos An array of layerInfo objects that define the snapping target layers. All values are optional. If no snapping options are set the default values will be used.
        <Layer> layer 	Reference to a feature or graphics layer that will be a target snapping layer. The default option is to set all feature and graphics layers in the map to be target snapping layers.
        <Boolean> snapToPoint 	Default is true. When true snapping to points will be enabled for layers with point geometry.
        <Boolean> snapToVertex 	Default is true. When true snapping to vertices will be enabled for layers with polyline or polygon geometry.
        <Boolean> snapToEdge 	Default is true. When true snapping to edges will be enabled for layers with polyline or polygon geometry. 
        *@returns void
        */
        setLayerInfos(layerInfos: Object[]): void;
    }

    /**
    *The spatial reference of a map, layer, or inputs to and outputs from a task. Each projected and geographic coordinate system is defined by both a well-known ID (WKID) or a definition string (WKT). Note that pre 10 only wkid was supported. 
    */
    export class SpatialReference {
        /**
        *Creates a new SpatialReference object.
        *@param json The REST JSON representation of the spatial reference: {"wkid" : <wkid>}
        */
        constructor(json: Object);
        /**
        *Create a spatial reference object and initialize it with a well-known ID (wkid). (Added at v2.8)
        *@param wkid The well-known id (wkid) of the coordinate system.
        */
        constructor(wkid: number);
        /**
        *Create a spatial reference object and initialize it with the given well-known text (wkt). (Added at v2.8)
        *@param wkt The well-known text (wkt) of the coordinate system.
        */
        constructor(wkt: string);
        /**
        *The well-known ID of a spatial reference. 
        */
        wkid: number;
        /**
        *The well-known text that defines a spatial reference. Many browser have a limit to the length of a GET request of approximately 2048 characters. When using well-known text to specify the spatial reference you can easily exceed this limit. In these cases, you will need to setup and use a proxy page.
        */
        wkt: string;
        /**
        *Returns true if the input spatial reference object has the same wkid or wkt as this spatial reference object. Returns false otherwise.  (Added at v3.3)
        *@param sr The spatial reference to compare. 
		*@returns 
        */
        equals(sr: esri.SpatialReference): boolean;
        /**
        *Returns true if the wkid of the spatial reference object is one of the following values: 102113, 102100, 3857 (Added at v3.3)
		*@returns Boolean
        */
        isWebMercator(): boolean;
        /**
        *Returns an easily serializable object representation of the spatial reference.
		*@returns JSON Object
        */
        toJson(): Object;
    }

    /**
    *Represents the period in time within which the data was collected.
    */
    export class TimeExtent {
        /**
        *Creates a new TimeExtent object with the specifed start and end time.
        *@param startTime The start time for the specified time extent.
        *@param endTime The end time for the specified time extent.
        */
        constructor(startTime: esri.tasks.Date, endTime: esri.tasks.Date);
        /**
        *The end time for the specified time extent.
        */
        endTime: esri.tasks.Date;
        /**
        *The start time for the specified time extent.
        */
        startTime: esri.tasks.Date;
        /**
        *Returns a new time extent indicating the intersection between "this" and the argument time extent.
        *@param timeExtent The input time extent.
		*@returns esri.TimeExtent
        */
        intersection(timeExtent: number): esri.TimeExtent;
        /**
        *Returns a new time extent with the given offset from "this' time extent.
        *@param offsetValue The length of time to offset from "this" time extent.
        *@param offsetUnits The offset units, see the TimeInfo constants for a list of valid values.
		*@returns esri.TimeExtent
        */
        offset(offsetValue : number, offsetUnits : string): esri.TimeExtent;
    }

    /**
    *The Undo Manager is a utility object that allows you to easily build applications with undo/redo functionality. Use the Undo Manager to add operations (edits, navigation changes, graphics drawing) to the stack.
    */
    export class UndoManager {
        /**
        *Creates a new UndoManager object.
        *@param options See options list for parameters.
            <Number> maxOperations 	The maximum number of operations the UndoManager can perform. If a number less than or equal to zero is provided the number of operations is unlimited. The default value is 10.
        */
        constructor(options: Object);
        /**
        *When true, there are redo operations available on the stack.
        */
        canRedo: boolean;
        /**
        *When true, there are undo operations available on the stack.
        */
        canUndo: boolean;
        /**
        *The number of operations stored in the history stack.
        */
        length: number;
        /**
        *The current operation position. A position value of 0 means that no operations are available on the stack. When an undo operation is performed the position decreases by 1. When a redo occurs the position is incremented by 1.
        */
        position: number;
        /**
        *Adds an undo operation to the stack and clears the redo stack.
        *@param operation An operation to add to the stack.
		*@returns void
        */
        add(operation: esri.OperationBase): void;
        /**
        *Clear the redo stack
		*@returns void
        */
        clearRedo(): void;
        /**
        *Clear the undo stack.
		*@returns void
        */
        clearUndo(): void;
        /**
        *Destroy the operation manager. Sets the history stack to null and cleans up all references.
		*@returns void
        */
        destroy(): void;
        /**
        *Get the specified operation from the stack.
        *@param operation The operation id.
		*@returns Opertion
        */
        get(operation): esri.OperationBase;
        /**
        *Get the next redo operation from the stack
		*@returns Operation
        */
        peekRedo(): esri.OperationBase;
        /**
        *Get the next undo operation from the stack.
		*@returns Operation
        */
        peekUndo(): esri.OperationBase;
        /**
        *Moves the current position to the next redo operation and calls the operation's performRedo() method.
		*@returns void
        */
        redo(): void;
        /**
        *Remove the specified operation from the stack.
        *@param operation The operation id.
		*@returns Operation
        */
        remove(operation: esri.OperationBase): esri.OperationBase;
        /**
        *Moves the current position to the next undo operation and calls the operation's performUndo method.
		*@returns void
        */
        undo(): void;
        /**
        *Fires when the add method is called to add an operation is added to the stack.
		*@returns void
        */
        onAdd(): void;
        /**
        *Fires when the undo/redo stack changes.
		*@returns void
        */
        onChange(): void;
        /**
        *Fires when the redo method is called.
		*@returns void
        */
        onRedo(): void;
        /**
        *Fires when the undo method is called.
		*@returns void
        */
        onUndo(): void;
        //add : void; // Events
        //change : void;
        //redo : void;
        //undo : void;
    }

    /**
    *ESRI unit constants.
    */
    export class Units {
        /**
        *Units are centimeters.
        */
        static CENTIMETERS: string;
        /**
        *Units are decimal degrees.
        */
        static DECIMAL_DEGREES: string;
        /**
        *Units are decimeters.
        */
        static DECIMETERS: string;
        /**
        *Units are feet.
        */
        static FEET: string;
        /**
        *Units are inches.
        */
        static INCHES: string;
        /**
        *Units are kilometers.
        */
        static KILOMETERS: string;
        /**
        *Units are acres.
        */
        static ACRES: string;
        /**
        *Units are meters.
        */
        static METERS: string;
        /**
        *Units are ares.
        */
        static ARES: string;
        /**
        *Units are miles.
        */
        static MILES: string;
        /**
        *Units are square kilometers.
        */
        static SQUARE_KILOMETERS: string;
        /**
        *Units are square millimeters.
        */
        static MILLIMETERS: string;
        /**
        *Units are square miles.
        */
        static SQUARE_MILES: string;
        /**
        *Units are nautical miles.
        */
        static NAUTICAL_MILES: string;
        /**
        *Units are points.
        */
        static POINTS: string;
        /**
        *Units are square feet.
        */
        static SQUARE_FEET: string;
        /**
        *Units are unknown.
        */
        static UNKNOWN: string;
        /**
        *Units are square meters.
        */
        static SQUARE_METERS: string;
        /**
        *Units are square yards.
        */
        static YARDS: string;
        /**
        *Units are hectares.
        */
        static HECTARES: string;
        /**
        *Units are square yards.
        */
        static SQUARE_YARDS: string;
        /**
        *Units are square inches.
        */
        static SQUARE_INCHES: string;
        /**
        *Units are square millimeters.
        */
        static SQUARE_MILLIMETERS: string;
        /**
        *Units are square centimeters.
        */
        static SQUARE_CENTIMETERS: string;
        /**
        *Units are square deciemeters.
        */
        static SQUARE_DECIMETERS: string;
    }
}

/**
*Utility methods for retrieving API version.
*/
declare module "esri/kernel" {
	var i : esri.esriNS;
	export = i;
}

/**
*Utility methods for working with strings, arrays and objects.
*/
declare module "esri/lang" {
	var i : esri.esriLang;
	export = i;
}

/**
*Utility methods for working with graphics.
*/
declare module "esri/graphicsUtils" {
	var i : esri.graphicsUtils;
	export = i;
}

/**
*Utility methods for working with URLs.
*/
declare module "esri/urlUtils" {
	var i : esri.urlUtils;
	export = i;
}

/**
*Retrieve data from a remote server or upload a file.
*/
declare module "esri/request" {
	var i : esri.esriRequest;
	export = i;
}

/**
*Utility methods related to working with a DOM.
*/
declare module "esri/domUtils" {
	var i : esri.domUtils;
	export = i;
}


declare module esri {

    /**
    * IO default configurations.
    */
    interface esriConfigIo {
        /**
        *Whether or not to always use the proxy for communication to a REST endpoint. 
        Default: False
        */
        alwaysUseProxy: boolean;
        /**
        *Whether or not to detect support for cross-origin resource sharing (CORS). Setting this to false will stop the API from sending requests that result in "XMLHttpRequest cannot load http://some.url.com/ArcGIS/rest/info?f=json. Origin http://yourapp.com is not allowed by Access-Control-Allow-Origin." messages in browser developer tools but it will also prevent the API from discovering that a resource supports CORS if it is not explicitly added to. Default: True
        */
        corsDetection: boolean;
        /**
        *Add URLs for servers with cross-origin resource sharing enabled to this array. Cross-Origin Resource Sharing (CORS) allows web applications to bypass the browser's same origin policy file and access resources or services on different servers/domains. When both the web server and browser support CORS, esri.request will not use a proxy to perform cross-domain requests. The API includes some Esri servers by default so it's important to push items on to this array rather than overwriting it. 
        */
        corsEnabledServers: Array<string>;
        /**
        *A proxy rule defines a proxy for set of resources with identical URL prefix. When using esri/request, if a target URL matches a rule, then the request will be sent to the specified proxy. Rather than populating this array directly, use the API's addProxyRule method. Rule objects have the following properties:
            - proxyUrl: URL for the proxy.
            - urlPrefix: URL prefix for resources that need to be accessed through a specific proxy.
        */
        proxyRules: Array<ProxyRule>;
        /**
        *The location of the proxy url that should be used when posting large payloads to an endpoint. This must reside on the same domain as the HTML application. 
        Default: null
        */
        proxyUrl: string;
        /**
        *Each request through esri.request is allowed up to 60 seconds to respond. If no response is returned or a server-side error is returned, the esri.Error and error back handlers are called, in that order. (As of 1.3). 
        Default: 60 seconds
        */
        timeout: number;
        /**
        *Whether or not requests made via esri/request should try to use CORS. 
        Default: True
        */
        useCors: boolean;
	}

    /**
    * Map default configurations.
    */
    interface esriConfigMap {
        /**
        *Object with name and information for default basemaps available in the API. Inspect this object in your browser's developer tools for more information.
        */
        basemaps: any;
        /**
        *The length of time in milliseconds that the map will take to pan from one extent to another. 
        Default: 350
        */
        panDuration: number;
        /**
        *The length of time in milliseconds that the map will refresh as it pans to the next extent. 
        Default: 50
        */
        panRate: number;
        /**
        *The parameters that define the location, size, and orientation of the slider. 
        Default: {left:"30px",top:"30px",width:null,height:"200px"}
        */
        slider: Object;
        /**
        *The parameters that define the slider tick and accompanying tick label. If this is null then the slider will not show tick marks.
            Default: {tick:5,labels:null,style:"width:2em; font-family:Verdana; font-size:75%;"}
        */
        sliderLabel: Object;
        /**
        *The length of time in milliseconds that the map will take to zoom from one extent to another.
        Default: 500
        */
        zoomDuration: number;
        /**
        *The length of time in milliseconds that the map will refresh as it zooms to the next extent.
        Default: 50
        */
        zoomRate: number;
        /**
        *The SimpleFillSymbol to use to represent the color, fill, and outline properties of the RubberBand zoom. This is the JSON representation of the SimpleFillSymbol.
        Default: {color:[0,0,0,64],outline:{color:[255,0,0,255],width:1.5,style:"esriSLSSolid"},style:"esriSFSSolid"}
        */
        zoomSymbol: esri.symbol.SimpleFillSymbol;
	}

    /**
    * Esri default configurations.
    */
	interface esriConfigDefaults {
        /**
        * GeometryService default configurations.
        */
        geometryService: esri.tasks.GeometryService;
        /**
        * IO default configurations.
        */
        io: esriConfigIo;
        /**
        * Map default configurations.
        */
        map: esriConfigMap;	
	}

    /**
    * Esri configurations.
    */
	interface esriConfig {
        /**
        * Default configurations.
        */
        defaults: esriConfigDefaults;
	}
}


declare module "esri/config" { // not typed for the moment
	var i : esri.esriConfig;
	export = i;
}

declare module "esri/units" {
	var i : esri.Units;
	export = i;
}

declare module "esri/geometry/webMercatorUtils" {
	var i : esri.geometry.webMercatorUtils;
	export = i;
}

declare module "esri/geometry/scaleUtils" {
	var i : esri.geometry.scaleUtils;
	export = i;
}

declare module "esri/geometry/jsonUtils" {
	var i : esri.geometry.jsonUtils;
	export = i;
}

declare module "esri/geometry/screenUtils" {
	var i : esri.geometry.screenUtils;
	export = i;
}

declare module "esri/geometry/mathUtils" {
	var i : esri.geometry.mathUtils;
	export = i;
}

declare module "esri/geometry/geodesicUtils" {
	var i : esri.geometry.geodesicUtils;
	export = i;
}

declare module "esri/geometry/normalizeUtils" {
	var i : esri.geometry.normalizeUtils;
	export = i;
}

declare module "esri/symbols/jsonUtils" {
	var i : esri.symbol.jsonUtils;
	export = i;
}

declare module "esri/renderers/jsonUtils" {
	var i : esri.renderer.jsonUtils;
	export = i;
}


declare module "esri/arcgis/utils" {
	var i : esri.arcgis.utils;
	export = i;

}

/**
* ArcGIS Namespace.
*/
declare module esri.arcgis {

    /**
    *Utility methods to work with content from ArcGIS.com.
    */
    export class utils {
        /**
        *
        */
        arcgisUrl: string;
        /**
        *Create a map using information from an ArcGIS.com item. The information included in the response object returned to the callback depends on the version. 
        *@param itemId An itemId for an ArcGIS.com item. You can discover the item's unique ID by browsing to the item in ArcGIS.com then extracting the id from the item's URL.
        *@param mapDiv Container ID for referencing map.
        *@param options Optional parameters that define the map functionality:
            <Object> mapOptions 	See the optional parameters for the esri.map constructor for more details.
            <String> bingMapsKey 	The Bing Maps Key, required if working with Microsoft Bing Maps.
            <Boolean> ignorePopups 	When true, webmap defined popups will not display.
            <String> geometryServiceURL 	URL to the ArcGIS Server REST resource that represents a geometry service. For more information on constructing a URL, see The Services Directory and the REST API. 
		*@returns dojo.Deferred
        */
        createMap(itemId: string, mapDiv: string, options?: Object): dojo.Deferred<any>;
        /**
        *Create a map using information from an ArcGIS.com item. The information included in the response object returned to the callback depends on the version. 
        *@param itemId The response object obtained from calling the esri.arcgis.utils.getItem method. You can discover the item's unique ID by browsing to the item in ArcGIS.com then extracting the id from the item's URL.
        *@param mapDiv Container ID for referencing map.
        *@param options Optional parameters that define the map functionality:
            <Object> mapOptions 	See the optional parameters for the esri.map constructor for more details.
            <String> bingMapsKey 	The Bing Maps Key, required if working with Microsoft Bing Maps.
            <Boolean> ignorePopups 	When true, webmap defined popups will not display.
            <String> geometryServiceURL 	URL to the ArcGIS Server REST resource that represents a geometry service. For more information on constructing a URL, see The Services Directory and the REST API. 
		*@returns dojo.Deferred
        */
        createMap(itemInfo: Object, mapDiv: string, options?: Object): dojo.Deferred<any>;
        /**
        *Get details about the input ArcGIS.com item. An object with the following specification is passed to the callback:
            {
                item: <Object>,
                itemData: <Object>
            }
        *@param itemId The itemId for a publicly shared ArcGIS.com item. You can discover the item's unique ID by browsing to the item in ArcGIS.com then extracting the id from the item's URL.
		*@returns dojo.Deferred
        */
        getItem(itemId: string): dojo.Deferred<any>;
        /**
        *Can be used with esri.dijit.Legend to get the layerInfos list to be passed into the Legend constructor. It will honor show/hide legend settings of each layer and will not include the basemap layers. (Added at v3.4)
        *@returns Layer[]
        */
        getLegendLayers(): Array<esri.layers.Layer>;
    }

    /**
    *The Portal class is part of the ArcGIS Portal API which provides a way to build applications that work with content from ArcGIS Online or an ArcGIS Portal. ArcGIS Portal is software technology from Esri that customers can deploy either on premise or in the cloud. 
    */
    export class Portal {
        /**
        *Creates a new Portal object.
        *@param url The url to the ArcGIS.com site or in-house portal.
        */
        constructor(url: string);
        /**
        *The access level of the organization. When public, anonymous users can access the organization. When private access is restricted to only members of the organization.
        Known values: public | private
        */
        access: string;
        /**
        *When true, access to the organization's Portal resources must occur over SSL.
        */
        allSSL: boolean;
        /**
        *The query that defines the basemaps that are displayed in the Basemap Gallery.
        */
        basemapGalleryGroupQuery: string;
        /**
        *When true, the organization's public items, groups and users are included in search queries. When false, no public items outside of the organization are included. However, public items which are part of the organization are included.
        */
        canSearchPublic: boolean;
        /**
        *When true, members of the organization can share resources outside the organization.
        */
        canSharePublic: boolean;
        /**
        *Date the organization was created.
        */
        created: Date;
        /**
        *The default locale (language and country) information.
        */
        culture: string;
        /**
        *The default basemap the portal displays in the map viewer. Returns an object that provides the url and title to the default basemap service.
        */
        defaultBasemap: Object;
        /**
        *The default extent for the map the portal displays in the map viewer. The extent will be in the default basemap's spatial reference.
        */
        defaultExtent: Object;
        /**
        *A description of the organization / portal.
        */
        description: string;
        /**
        *The featured groups for the portal. Returns an array of objects that provide access to the owner and title for each featured group.
        */
        featuredGroups: Object[];
        /**
        *The query that defines the featured group. If null, then the most viewed items in the organization will be the featured items.
        */
        featuredItemsGroupQuery: string;
        /**
        *The id of the organization that owns this portal. If null then this is the default portal for anonymous and non organizational users.
        */
        id: string;
        /**
        *Indicates if the portal is an organization.
        */
        isOrganization: boolean;
        /**
        *The query that defines the collection of editable layer templates.
        */
        layerTemplatesGroupQuery: string;
        /**
        *Date the organization was last modified.
        */
        modified: Date;
        /**
        *The Name of the organization / portal.
        */
        name: string;
        /**
        *Denotes multitenant or singletenant.
        */
        portalMode: string;
        /**
        *The name of the portal i.e. ArcGIS Online.
        */
        portalName: string;
        /**
        *The query that defines the symbols sets used by the map viewer.
        */
        symbolSetsGroupQuery: string;
        /**
        *The query that defines the collection of templates that will appear in the template gallery.
        */
        templatesGroupQuery: string;
        /**
        *The url to the thumbnail of the organization.
        */
        thumbnailUrl: string;
        /**
        *The portal url.
        */
        url: string;
        /**
        *Returns a PortalUser object that describes the user currently signed in to the portal.  (Added at v3.3)
		*@returns PortalUser
        */
        getPortalUser(): PortalUser;
        /**
        *Execute a query against the Portal to return a deferred that when resolved returns PortalQueryResult that contain a results array of PortalGroup objects for all the groups that match the input query.
        *@param queryParams The input query parameters.
		*@returns dojo.Deferred
        */
        queryGroups(queryParams: esri.arcgis.PortalQueryParams): dojo.Deferred<any>;
        /**
        *Execute a query against the Portal to return a deferred that when resolved returns PortalQueryResult that contain a results array of PortalItem objects that match the input query.
        *@param queryParams The input query parameters.
		*@returns dojo.Deferred
        */
        queryItems(queryParams: esri.arcgis.PortalQueryParams): dojo.Deferred<any>;
        /**
        *Execute a query against the Portal to return a deferred that when resolved returns PortalQueryResult that contain a results array of PortalUser objects that match the input query.
        *@param queryParams The input query parameters.
		*@returns dojo.Deferred
        */
        queryUsers(queryParams: esri.arcgis.PortalQueryParams): dojo.Deferred<any>;
        /**
        *Prompts the user using the IdentityManager and returns a deferred that when resolved returns the PortalUser for the input credentials.
		*@returns dojo.Deferred
        */
        signIn(): dojo.Deferred<any>;
        /**
        *Sign out of the Portal which resets the Portal and disables identity checking.
		*@returns Portal
        */
        signOut(): Portal;
        /**
        *Fired when the portal has loaded. Once the portal has loaded the properties and methods of the Portal class are available.
		*@returns void
        */
        onLoad(): void;
    }

    /**
    *Details about a comment on a Portal item.View the ArcGIS Portal API REST documentation for the item comment for more details.
    */
    export class PortalComment {
        /**
        *The comment text
        */
        comment: string;
        /**
        *The date and time the comment was created
        */
        created: string;
        /**
        *The comment id
        */
        id: string;
        /**
        *The user name of the user who created the comment
        */
        owner: string;
    }

    /**
    *The PortalFolder class provides information about folders used to organize content in a portal. Folders are only visible to the user and are used for organizing content within the user's content space.
    */
    export class PortalFolder {
        /**
        *The date the folder was created
        */
        created: Date;
        /**
        *The id of the folder
        */
        id: string;
        /**
        *The portal for the folder
        */
        portal: Portal;
        /**
        *The title of the folder
        */
        title: string;
        /**
        *The url to to the folder
        */
        url: string;
        /**
        *Find all the items in the folder.
		*@returns dojo.Deferred
        */
        getItems(): dojo.Deferred<any>;
    }

    /**
    *The group resource represents a group within the Portal. A group resource represents a group (e.g., "San Bernardino Fires"). The visibility of the group to other users is deteremined by the access property. If the group is private no one except the administrators and the members of the group will be able to see it. If the group is shared with an organization, then all members of the organization will be able to find the group. View the ArcGIS Portal API REST documentation for the Group for more details. 
    */
    export class PortalGroup {
        /**
        *The access privileges on the group which determines who can see and access the group.
        */
        access: string;
        /**
        *The date the group was created
        */
        created: Date;
        /**
        *A detailed description of the group
        */
        description: string;
        /**
        *The id for the group
        */
        id: string;
        /**
        *If this is set to true, then users will not be able to apply to join the group
        */
        isInvitationOnly: boolean;
        /**
        *Denotes a view only group where members are not able to share items.
        */
        isViewOnly: boolean;
        /**
        *The date the group was last modified
        */
        modified: Date;
        /**
        *The username of the group's owner
        */
        owner: Portal;
        /**
        *The portal for the group
        */
        portal: Portal;
        /**
        *A short summary that describes the group
        */
        snippet: string;
        /**
        *User defined tags that describe the group
        */
        tags: string;
        /**
        *The url to the thumbnail used for the group
        */
        thumbnailUrl: string;
        /**
        *The title for the group.
        */
        title: string;
        /**
        *The url to the group
        */
        url: string;
        /**
        *Get the current members for the group.
		*@returns dojo.Deferred
        */
        getMembers(): dojo.Deferred<any>;
        /**
        *Execute a query against the group to return a deferred that when resolved returns PortalQueryResults that contain a results array of PortalItem objects that match the input query
        *@param queryParams The input query parameters.
		*@returns dojo.Deferred
        */
        queryItems(queryParams?: esri.arcgis.PortalQueryParams): dojo.Deferred<any>;
    }

    /**
    *List the users, owner and administrator of a group. Only available to members or administrators of the group. View the ArcGIS Portal API REST documentation for the Group Users for more details.
    */
    export class PortalGroupMembers {
        /**
        *An array containing the user names for each administrator of the group
        */
        admins: string[];
        /**
        *The user name of the owner of the group
        */
        owner: string;
        /**
        *An array containing the user names for each user in the group
        */
        users: string[];
    }

    /**
    *An item (a unit of content) in the Portal. Each item has a unique identifier and a well known url that is independent of the user owning the item. An item may have associated binary or textual data which is available via the item data resource. View the ArcGIS Portal API REST documentation for the item for more details. 
    */
    export class PortalItem {
        /**
        *Indicates the level of access: private, shared, org, or public
        */
        access: string;
        /**
        *Information on the source of the item
        */
        accessInformation: string;
        /**
        *Average rating.
        */
        avgRating: number;
        /**
        *The date the item was created
        */
        created: Date;
        /**
        *The item locale information (language and country)
        */
        culture: string;
        /**
        *The detailed description of the item
        */
        description: string;
        /**
        *The bounding rectangle of the item returned as an extent object with the following format:
            "extent": [  [ minX, minY ], [ maxX, maxY ] ]
        */
        extent: Object;
        /**
        *The unique id for this item
        */
        id: string;
        /**
        *The url to the data resource associated with the item
        */
        itemDataUrl: string;
        /**
        *The url to the item
        */
        itemUrl: string;
        /**
        *Any license information or restrictions
        */
        licenseInfo: string;
        /**
        *Date the item was last modified
        */
        modified: Date;
        /**
        *The name of the item
        */
        name: string;
        /**
        *Number of comments on the item
        */
        numComments: number;
        /**
        *Number of ratings on the item
        */
        numRatings: number;
        /**
        *Number of views on the item
        */
        numViews: number;
        /**
        *The username of the user who owns this item
        */
        owner: string;
        /**
        *The portal that contains the item
        */
        portal: Portal;
        /**
        *The size of the item
        */
        size: number;
        /**
        *A summary description of the item
        */
        snippet: string;
        /**
        *The item's coordinate system
        */
        spatialReference: string;
        /**
        *User defined tags that describe the item
        */
        tags: string[];
        /**
        *The url to the thumbnail used for the item
        */
        thumbnailUrl: string;
        /**
        *The title for the item.
        */
        title: string;
        /**
        *The gis content type of this item.
        */
        type: string;
        /**
        *A set of keywords that further describes the type of this item.
        */
        typeKeywords: string[];
        /**
        *The url for the resource represented by the item
        */
        url: string;
        /**
        *The url to the user item
        */
        userItemUrl: string;
        /**
        *Add a comment to the item.Only available for authenticated users who have access to the item.
        *@param comment The text for the comment.
		*@returns dojo.Deferred
        */
        addComment(comment: string): dojo.Deferred<any>;
        /**
        *Add a rating to an item that you have access to. Only 1 rating can be given to an item per user. If this call is made on an already rated item, the new rating will overwrite the current one. A user cannot rate their own item. Available only to authenticated users. Returns a deferred that when resolved provides access to a PortalRating object.
        *@param rating Rating to set for the item. Rating must be a number between 1.0 and 5.0.
		*@returns void
        */
        addRating(rating: number): void;
        /**
        *Deletes an item comment. Only available to the authenticated user who created the comment.
        *@param comment The PortalComment to delete.
		*@returns dojo.Deferred
        */
        deleteComment(comment: string): void;
        /**
        *Delete a rating that you created for the specified item. Returns a deferred that when resolved provides access to a PortalRating object.
        *@param rating Rating to delete.
		*@returns dojo.Deferred
        */
        deleteRating(rating: esri.arcgis.PortalRating): dojo.Deferred<any>;
        /**
        *Get the comments associated with the item. Returns a deferred that when resolved provides access to an array of PortalComment objects.
		*@returns dojo.Deferred
        */
        getComments(): dojo.Deferred<any>;
        /**
        *Returns the rating (if any) given to the item. Returns a deferred that when resolved provides access to a PortalRating object.
		*@returns dojo.Deferred
        */
        getRating(): dojo.Deferred<any>;
        /**
        *Updates an item comment. Only available to the authenticated user who created the comment.
        *@param comment A PortalComment that contains the comment updates.
		*@returns void
        */
        updateComment(comment: esri.arcgis.PortalComment): void;
    }

    /**
    *Define parameters to use when querying. View the ArcGIS Portal API REST documentation for details. 
    */
    export class PortalQueryParams {
        /**
        *The maximum number of results to be included in the result set response. The default value is 10 and the maximum allowed value is 100. The start parameter combined with the num parameter can be used to paginate the search results. Note that the actual number of returned results may be less than num if the number of results remaining after start is less than num
        */
        num: string;
        /**
        *The query string to search with.
        */
        q: string;
        /**
        *A comma seperated list of field(s) to sort by. Valid fields are: title, created, type, owner, avgRating, numRatings, numComments and numViews.
        */
        sortField: string;
        /**
        *The number of the first entry in the result set response. The index number is 1-based. The start parameter, along with the num parameter can be used to paginate the search results.
        */
        start: string;
    }

    /**
    *Details about the result of a query.
    */
    export class PortalQueryResult {
        /**
        *The query parameters for the next set of results
        */
        nextQueryParams: esri.arcgis.PortalQueryParams;
        /**
        *The query parameters for the first set of results
        */
        queryParams: esri.arcgis.PortalQueryParams;
        /**
        *An array of result item objects
        */
        results: Object[];
        /**
        *The total number of results. The maximum number of results is limited to 1000.
        */
        total: number;
    }

    /**
    *Details about the rating associated with a Portal item. View the ArcGIS Portal API REST documentation for the Item Rating for more details. 
    */
    export class PortalRating {
        /**
        *Date the rating was added to the item
        */
        created: Date;
        /**
        *A rating between 1.0 and 5.0 for the item.
        */
        rating: number;
    }

    /**
    *Represents a registered user of the Portal. Personal details of the user, such as email and groups, are returned only to the user or the administrator of the user's organization. A user is not visible to any other users (except their organization's administrator) if their access setting is set to 'private'.View the ArcGIS Portal API REST documentation for the user for more details.
    */
    export class PortalUser {
        /**
        *The access level for the user: private, org or public. If private, the users descriptive information will not be available and the user name will not be searchable. Available only if the user is signed-in. Known values: private | org | public
        */
        access: string;
        /**
        *The date the user was created.
        */
        created: Date;
        /**
        *The default culture for the user.
        */
        culture: string;
        /**
        *Description of the user.
        */
        description: string;
        /**
        *The user's email address. Available only if the user is signed-in.
        */
        email: string;
        /**
        *The user's full name.
        */
        fullName: string;
        /**
        *The date the user was modified.
        */
        modified: Date;
        /**
        *The id of the organization the user belongs to.
        */
        orgId: string;
        /**
        *The portal.
        */
        portal: Portal;
        /**
        *The user's preferred view for content, either Web or GIS. Available only if the user is signed-in.
        */
        preferredView: string;
        /**
        *The user's preferred region, used to set the featured maps on the portal home page, content in the gallery and the default extent for new maps in the Viewer.
        */
        region: string;
        /**
        *The user's role in the organization: administrator (org_admin), publisher (org_publisher), or user (org_user).
        */
        role: string;
        /**
        *User-defined tags that describe the user.
        */
        tags: string[];
        /**
        *The url to the thumbnail image for the user.
        */
        thumbnailUrl: string;
        /**
        *The url for the user content. (Added at v3.2)
        */
        userContentUrl: string;
        /**
        *The username for the user.
        */
        username: string;
        /**
        *Find folders for the portal user. Returns a deferred that when resolved provides access to an array of PortalFolder objects.
		*@returns dojo.Deferred
        */
        getFolders(): dojo.Deferred<any>;
        /**
        *Provides access to the group invitations for the portal user. Returns a deferred that when resolved provides access to the results as json. View the REST API documentation for details on the result format.
		*@returns dojo.Deferred
        */
        getGroupInvitations(): dojo.Deferred<any>;
        /**
        *Find all the groups that the portal user has permissions to access. Returns a deferred that when resolved provides access to an array of PortalGroup objects.
		*@returns dojo.Deferred
        */
        getGroups(): dojo.Deferred<any>;
        /**
        *Get the portal item along with folder info for the input item id. (Added at v3.4)
        *@param itemId The id of the item.
		*@returns PortalItem
        */
        getItem(itemId): PortalItem;
        /**
        *Retrieve all the items in the specified folder. Returns a deferred that when resolved provides access to an array of PortalItem objects
        *@param folderId The id of the folder that contains the items to retrieve.
		*@returns dojo.Deferred
        */
        getItems(folderId): dojo.Deferred<any>;
        /**
        *Get information about any notifications for the portal user. Returns a deferred that when resolved provides access to the results as json. View the REST API documentation for details on the result format.
		*@returns dojo.Deferred
        */
        getNotifications(): dojo.Deferred<any>;
        /**
        *Access the tag objects that have been created by the portal user. Returns a deferred that when resolved provides access to an array of tag objects used by the user. Each tag object contains a tag property with the name of the tag along with a count that reports the number of times the tag was used.
		*@returns dojo.Deferred
        */
        getTags(): dojo.Deferred<any>;
    }
}

/**
* Dijit.Editing Namespace.
*/
declare module esri.dijit.editing {

    /**
    * Widget that supports viewing attachments for feature layers that have attachments enabled. If the feature layers are from a feature service then the attachment editor will include the ability to create, view and delete attachments.
    */
    export class AttachmentEditor {
        /**
		* Creates a new AttachmentEditor object.
		*@params params No parameter options.
		*@params srcNodeRef HTML element where the widget is rendered.
		*/
        constructor(params: Object, srcNodeRef: string);
        /**
		* Creates a new AttachmentEditor object.
		*@params params No parameter options.
		*@params domNode DOM element.
		*/
        constructor(params: Object, domNode: HTMLElement);
        /**
		* Display the attachment editor.
		*@params graphic Graphic, with attachments, to display in the attachment editor.
		*@params featureLayer The feature layer to display attachments for. The feature layer must have attachments enabled.
		*/
        showAttachments(graphic: esri.Graphic, featureLayer: esri.layers.FeatureLayer): void;
        /**
		* Finalizes the creation of the attachment editor. Call startup() after creating the widget when you are ready for user interaction.
		*@returns void
		*/
        startup(): void;
    }

    /**
    * Load the Editor using one of the dojo.require statements below.
        dojo.require("esri.dijit.editing.Editor-all");
        or
        dojo.require("esri.dijit.editing.Editor");
    */
    export class Editor {
        /**
		* Creates a new Editor object.
		*@params params Parameters that define the functionality of the editor widget. Create a new settings object to pass to the widget (see options).
        <Object> settings 	Create a new settings object that defines the capabilities of the widget.
            <Object> createOptions: Specify the polygon and polyline draw tools to include on the toolbar. Only applicable when toolbarVisible is true. This object has following properties:
                <String[]> polylineDrawTools: See the constants list for valid options.
                <String[]> polygonDrawTools: See the constants list for valid options.
            <Boolean> enableUndoRedo: Default is false. When true enable undo/redo behavior.
            <String> geometryService: Reference to the geometry service. Alternatively, you can set the geometry service using esri.config.defaults.geometryService (Required).
            <Map> map: Reference to the map (Required).
            <Number> maxUndoRedoOperations: When undo/redo is enabled, specify the maximum number of undo/redo operations to maintain. The default value is 10.
            <TemplatePicker> templatePicker: Reference to the TemplatePicker. Use this option if you want to modify the appearance of the template picker, for example set the number of rows and columns.
            <Object> toolbarOptions: Specify the tools to include on the toolbar. Only applicable when toolbarVisible is true. This object has following properties:
                <Boolean> mergeVisible: If true show the merge tool.
                <Boolean> cutVisible: If true show the cut tool.
                <Boolean> reshapeVisible: If true show the reshape tool.
            <Boolean> toolbarVisible: If true display the editing toolbar.
            <UndoManager> undoManager: Specify an instance of the UndoManager for the Editor.
            <Object> layerInfos: Feature layer information. This object has following properties:
                <FeatureLayer> featureLayer: Reference to the feature layer.
                <String> userId: Provide a userId for the currently logged-in user. If the application is using the IdentityManager it is not necessary to specify a userId since the feature layer has access to the credential object which contains this information. Requires ArcGIS Server feature service version 10.1 or greater. (As of 2.6)
                <Boolean> disableGeometryUpdate: When true,the geometry is not editable. The default value is false. Requires ArcGIS Server feature service version 10.1 or greater. (As of 2.6)
                <Boolean> showObjectID: Default is false. When true display the ObjectID field in the attribute inspector.
                <Boolean> showGlobalID: Default is false. When true display the GlobalID field in the attribute inspector.
                <Object[]> fieldInfos: Customize how fields appear in the attribute inspector. If nothing is specified all fields, except the ObjectId and GlobalId are displayed. Specify FieldInfos to explicitly define the fields that are displayed and the field order. Added at version 2.2. See the sample section below for properties.
                <Boolean> disableAttributeUpdate: If true, attributeInspector won't pop up when features in this featureLayer are selected. When adding a new feature, attributeInspector won't pop up either.
            <String[]> htmlFields: Specify which fields to display as a rich text editor.
		*@params srcNodeRef HTML element where the widget should be rendered.
		*/
        constructor(params: Object, srcNodeRef: Object);
        /**
		* Freehand polygon tool
		*/
        static CREATE_TOOL_FREEHAND_POLYGON: string;
        /**
		* Polygon tool
		*/
        static CREATE_TOOL_POLYGON: string;
        /**
		* Autocomplete polygon tool
		*/
        static CREATE_TOOL_AUTOCOMPLETE: string;
        /**
		* Freehand polyline tool
		*/
        static CREATE_TOOL_FREEHAND_POLYLINE: string;
        /**
		* Polyline tool
		*/
        static CREATE_TOOL_POLYLINE: string;
        /**
		* Arrow tool
		*/
        static CREATE_TOOL_ARROW: string;
        /**
		* Triangle tool
		*/
        static CREATE_TOOL_TRIANGLE: string;
        /**
		* Rectangle tool
		*/
        static CREATE_TOOL_RECTANGLE: string;
        /**
		* Circle tool
		*/
        static CREATE_TOOL_CIRCLE: string;
        /**
		* Ellipse tool
		*/
        static CREATE_TOOL_ELLIPSE: string;
    }

    /**
    * Load the TemplatePicker using one of the dojo.require statements below. See the Coding Guidelines help topic for details.
        dojo.require("esri.dijit.editing.TemplatePicker-all");
        or
        dojo.require("esri.dijit.editing.TemplatePicker");
    * CSS Elements:
    grid	Define styles for the grid node that displays the templates.
    groupLabel	Define styles for the group labels. Only applicable when grouping is enabled.
    item	Define styles for the node that contains the template label and symbol.
    itemLabel	Define styles for the template labels.    
        .itemLabel{color:#266A2E;}
    itemSymbol	Define styles for the node that contains the template symbol.
    selectedItem	Define styles for the node that contains the template symbol.
    templatePicker	Define styles for the template picker.
    tooltip	Define styles for the template tooltips. Only applicable when tooltips are enabled.
    */
    export class TemplatePicker {
        /**
		* Creates a new TemplatePicker object that displays a gallery of templates from the input feature layers or items. A symbol and label is displayed for each template. The symbol is defined by the template's feature type. The label is the template's name.
		*@params params FeatureLayers or items are required all other parameters are optional. See options list.
		*@params srcNodeRef HTML element where the TemplatePicker will be rendered. Specify the HTML element using the "id" or a reference to the element.
		*/
        constructor(params: Object, srcNodeRef: string);
        /**
		* Creates a new TemplatePicker object that displays a gallery of templates from the input feature layers or items. A symbol and label is displayed for each template. The symbol is defined by the template's feature type. The label is the template's name.
		*@params params FeatureLayers or items are required all other parameters are optional. See options list.
		*@params domNode HTML element where the TemplatePicker will be rendered. Specify the HTML element using a reference to the element.
		*/
        constructor(params: Object, domNode: HTMLElement);
        /**
		* 
		*/
        templatePicker: string;
        // grid : string; // TODO FLE : remove all CSS stuff !!!
        /**
		* 
		*/
        groupLabel: string;
        /**
		* 
		*/
        item: string;
        /**
		* 
		*/
        itemLabel: string;
        /**
		* 
		*/
        itemSymbol: string;
        /**
		* 
		*/
        selectedItem: string;
        // tooltip : string; // TODO FLE : remove all CSS stuff !!!
        // grid: Dojo.grid.DataGrid;
        /**
		* 
		*/
        tooltip: any; //div;
        /**
		* Get or set the properties of the template picker. See the dojo documentation for more details about this method.
		*@params name Name of the attribute of interest.
		*@params value Value for the specified attribute.
		*@returns void
		*/
        attr(name: string, value?: Object): void;
        /**
		* Clears the current selection.
		*@returns void
		*/
        clearSelection(): void;
        /**
		* Destroys the template picker. Call destroy() when the widget is no longer needed by the application.
		*@returns void
		*/
        destroy(): void;
        /**
		* Gets the selected item picked by the user. 
		*@returns Object
		*/
        getSelected(): Object;
        /**
		* Finalizes the creation of the template picker. Call startup() after creating the widget when you are ready for user interaction.
		*@returns void
		*/
        startup(): void;
        /**
		* Updates the templatePicker after modifying the properties of the widget.
		*@returns void
		*/
        update(): void;
        /**
		* Fires when an item is selected or unselected in the template picker. You can retrieve the selected item using the getSelected() method.
		*@returns void
		*/
        onSelectionChange(): void;
    }
}

/**
* Dijit Namespace.
*/
declare module esri.dijit {
    export class AttributeInspector {
        constructor(params: Object, srcNodeRef: string);
        constructor(params: Object, domNode: HTMLElement);
        static STRING_FIELD_OPTION_TEXTBOX: string;
        static STRING_FIELD_OPTION_TEXTAREA: string;
        static STRING_FIELD_OPTION_RICHTEXT: string;
        esriAttributeInspector: string;
        atiLayerName: string;
        atiField: string;
        atiLabel: string;
        atiNavMessage: string;
        atiButtons: string;
        atiNavButtons: string;
        atiButton: string;
        Icons: string;
        attachmentEditor: string;
        atiRichTextField: string;
        atiTextAreaField: string;
        atiEditorTrackingInfo: string;
        destroy(): void;
        first(): void;
        last(): void;
        next(): void;
        previous(): void;
        refresh(): void;
        onAttributeChange(feature : esri.Graphic, fieldName : string, fieldValue : string): void;
        onDelete(feature : esri.Graphic): void;
        onNext(feature : esri.Graphic): void;
    }
    export class Attribution {
        constructor(params: Object, srcNodeRef: string);
        constructor(params: Object, domNode: HTMLElement);
        esriAttributionList: string;
        esriAttributionItem: string;
        esriAttributionLastItem: string;
        esriAttributionDelim: string;
        itemDelimiter: string;
        itemNodes: HTMLSpanElement;
        listNode: HTMLSpanElement;
        map: esri.Map;
        destroy(): void;
    }
    export class Basemap {
        constructor(params? : Object);
        id: string;
        thumbnailUrl: string;
        title: string;
        getLayers(): BasemapLayer[];
    }
    export class BasemapGallery {
        constructor(params: Object, srcNodeRef?: string);
        constructor(params: Object, domNode: HTMLElement);
        esriBasemapGallery: string;
        esriBasemapGalleryNode: string;
        esriBasemapGallerySelectedNode: string;
        esriBasemapGalleryThumbnail: string;
        basemaps: Basemap[];
        loaded: boolean;
        add(basemap : esri.dijit.Basemap): boolean;
        destroy(): void;
        get(id : string): Basemap;
        getSelected(): Basemap;
        remove(id : string): Basemap;
        select(id : string): Basemap;
        startup(): void;
        onAdd(basemap : esri.dijit.Basemap): void;
        onError(): void;
        onLoad(): void;
        onRemove(basemap: esri.dijit.Basemap): void;
        onSelectionChange(): void;
    }
    export class BasemapLayer {
        constructor(params? : Object);
		copyright : string;
		fullExtent : esri.geometry.Extent;
		initialExtent : esri.geometry.Extent;
		subDomains : string[];
		tileInfo : esri.layers.TileInfo;
		tileServer : string[];
		type : string;
    }
// New 3.7
    export class BasemapToggle {
        constructor(params: Object, srcNodeRef: string);
        constructor(params: Object, domNode: HTMLElement);
		basemapContainer : string;
		toggleButton : string;
		basemapImage : string;
		basemapTitle : string;
		basemap : string;
		basemaps : Object;
		loaded : boolean;
		map : esri.Map;
		theme : string;
		visible : boolean;
		destroy() : void;
		hide() : void;
		show() : void;
		startup() : void;
		toggle() : void;
		// load : void;
		// toggle : <String> previousBasemap;
    }
    export class BookmarkItem {
        constructor(name : string, extent : esri.geometry.Extent);
    }
    export class Bookmarks {
        constructor(params: Object, srcNodeRef: string);
        constructor(params: Object, domNode: HTMLElement);
        esriBookmarks: string;
        esriBookmarkTable: string;
        esriBookmarkItem: string;
        esriBookmarkLabel: string;
        esriBookmarkRemoveImage: string;
        esriBookmarkEditImage: string;
        esriBookmarkEditBox: string;
        esriAddBookmark: string;
        esriBookmarkHighlight: string;
        bookmarks: BookmarkItem;
        addBookmark(bookmarkItem : esri.dijit.BookmarkItem): void;
        destroy(): void;
        hide(): void;
        removeBookmark(bookmarkName : string): void;
        show(): void;
        toJson(): Object;
        onClick(): void;
        onEdit(): void;
        onRemove(): void;
    }
    export class Directions {
        constructor(params: Object, srcNodeRef: string);
        constructor(params: Object, domNode: HTMLElement);
        esriDirectionsContainer: string;
        esriStopsContainer: string;
        esriStopsReverse: string;
        esriStopsAdd: string;
        esriStops: string;
        esriStopsRemovable: string;
        esriStopsButtons: string;
        esriStopsAddDestination: string;
        esriStopsGetDirectionsContainer: string;
        esriStopsGetDirections: string;
        esriStop: string;
        esriStopsOptionsEnabled: string;
        esriStopsOptionsMenu: string;
        esriFindOptimalOrderOption: string;
        esriStopOrigin: string;
        esriStopDestination: string;
        esriStopGeocoderColumn: string;
        esriStopReverseColumn: string;
        esriStopIconColumn: string;
        esriStopIcon: string;
        esriStopIconRemoveColumn: string;
        esriStopIconRemove: string;
        esriResultsContainer: string;
        esriResultsLoading: string;
        esriResultsPrint: string;
        esriResultsSummary: string;
        esriResultsViewFullRoute: string;
        esriResultsRouteName: string;
        esriResultsButtonsContainer: string;
        esriRoutesContainer: string;
        esriRoutes: string;
        esriRoutesError: string;
        esriRoute: string;
        esriRouteTextColumn: string;
        esriRouteText: string;
        esriRouteLength: string;
        esriRouteOrigin: string;
        esriRouteInfo: string;
        esriRouteIconColumn: string;
        esriRouteIcon: string;
        esriInfoWindowRoute: string;
        esriPrintPage: string;
        esriPrintBar: string;
        esriPrintButton: string;
        esriPrintMain: string;
        esriPrintHeader: string;
        esriPrintLogo: string;
        esriPrintName: string;
        esriPrintFooter: string;
        directions: esri.tasks.DirectionsFeatureSet;
        geocoderResults: Object[];
        maxStopsReached: boolean;
        mergedRouteGraphic: esri.Graphic;
        stops: Graphic[];
        theme: string;
        addStop(stop :string, index : number): dojo.Deferred<any>;
        addStop(stop :Array<string>, index : number): dojo.Deferred<any>;
        addStop(stop : esri.geometry.Point, index : number): dojo.Deferred<any>;
        addStops(stops : Array<string>, index: number): dojo.Deferred<any>; // An array of strings or point that defines the input stops.
        addStops(stops : Array<esri.geometry.Point>, index: number): dojo.Deferred<any>; // An array of strings or point that defines the input stops.
        centerAtSegmentStart(index : number): void;
        clearDirections(): void;
        destroy(): void;
        getDirections(): dojo.Deferred<any>;
        highlightSegment(index : number): void;
        removeStop(index : number): dojo.Deferred<any>;
        removeStops(): void;
        reset(): void;
        startup(): void;
        unhighlightSegment(): void;
        updateStop(stop : string, index: number): dojo.Deferred<any>;
        updateStop(stop : esri.geometry.Point, index: number): dojo.Deferred<any>;
        updateStops(stops: Array<esri.geometry.Point>): dojo.Deferred<any>;
        zoomToFullRoute(): void;
        zoomToSegment(index : number): void;
        onDirectionsClear(): void;
        onDirectionsFinish(result : esri.tasks.RouteResult): void;
        onDirectionsStart(): void;
        onLoad(): void;
        onSegmentHighlight(graphic : esri.Graphic): void;
        onSegmentSelect(graphic : esri.Graphic): void;
    }
    export class Gallery {
        constructor(params: Object, srcNodeRef: string);
        constructor(params: Object, domNode: HTMLElement);
        esriMobileGallery: string;
        //esriMobileGallery.galleryLandscape : string; // TODO FLE : remove CSS Stuff
        //esriMobileGallery.thumbnailContainer : string;
        //esriMobileGallery .thumbnailContainer.small : string;
        //esriMobileGallery .thumbnail : string;
        //esriMobileGallery.thumbnail.selected : string;
        //esriMobileGallery .thumbnail.small : string;
        //esriMobileGallery.thumbnail.small.selected : string;
        //esriMobileGallery.title : string;
        //esriMobileGallery.title.small : string;
        destroy(): void;
        getFocusedItem(): Object;
        getSelectedItem(): Object;
        next(): void;
        previous(): void;
        select(item : Object): void;
        setFocus(item : Object): void;
        startup(): void;
        onFocus(item : Object): void;
        onSelect(item : Object): void;
    }
    export class Gauge {
        constructor(params: Object, srcNodeRef: string);
        constructor(params: Object, domNode: HTMLElement);
        gaugeContainer: string;
        destroy(): void;
        get(): any; //varies;
        set(): any; //varies;
        startup(): void;
    }
    export class Geocoder {
        constructor(params: Object, srcNodeRef: string);
        constructor(params: Object, domNode: HTMLElement);
        esriGeocoder: string;
        esriGeocoderMultiple: string;
        esriGeocoderContainer: string;
        esriGeocoderIcon: string;
        esriGeocoderActive: string;
        esriGeocoderLoading: string;
        esriGeocoderResults: string;
        esriGeocoderResult: string;
        esriGeocoderResultEven: string;
        esriGeocoderResultOdd: string;
        esriGeocoderResultFirst: string;
        esriGeocoderResultLast: string;
        esriGeocoderResultPartial: string;
        esriGeocoderSearch: string;
        esriGeocoderReset: string;
        esriGeocoderMenu: string;
        esriGeocoderMenuHeader: string;
        esriGeocoderMenuClose: string;
        esriGeocoderMenuActive: string;
        esriGeocoderMenuArrow: string;
        esriGeocoderSelected: string;
        esriGeocoderSelectedCheck: string;
        esriGeocoderClearFloat: string;
        esriGeocoderHasValue: string;
        activeGeocoder: Object;
        activeGeocoderIndex: number;
        autoComplete: boolean;
        autoNavigate: boolean;
        geocoder: Object[];
        geocoderMenu: boolean;
        maxLocations: number;
        minCharacters: number;
        results: Object[];
        searchDelay: number;
        showResults: boolean;
        theme: string;
        value: string;
        blur(): void;
        clear(): void;
        destroy(): void;
        find(): dojo.Deferred<any>;
        focus(): void;
        hide(): void;
        select(result : Object): void;
        show(): void;
        startup(): void;
        onAutoComplete(results : Object): void;
        onClear(): void;
        onFindResults(results: Object): void;
        onGeocoderSelect(geocoder: Object): void;
        onSelect(results: Object): void;
    }
// New 3.7
   export class HistogramTimeSlider {
       constructor(params: Object, srcNodeRef: string);
       constructor(params: Object, domNode: HTMLElement);
		// histogram-timeslider : string;
		// histogram-timeslider #histogram-range : string;
		destroy() : void;
		// time-extent-change : void;
		update : void;
		onTimeExtentChange() : void;
		onUpdate() : void;
    }
// New 3.7
    export class HomeButton {
        constructor(params: Object, srcNodeRef: string);
        constructor(params: Object, domNode: HTMLElement);
		homeContainer : string;
		home : string;
		loading : string;
		extent : esri.geometry.Extent;
		loaded : boolean;
		map : esri.Map;
		theme : string;
		visible : boolean;
		destroy() : void;
		hide() : void;
		// home() : void;
		show() : void;
		startup() : void;
		// home : esri.geometry.Extent;
		// load : void;
    }
    export class InfoWindow extends InfoWindowBase {
        constructor(params: Object, srcNodeRef: string);
        constructor(params: Object, srcNodeRef: HTMLElement);
        static ANCHOR_UPPERRIGHT: string;
        static ANCHOR_LOWERRIGHT: string;
        static ANCHOR_LOWERLEFT: string;
        static ANCHOR_UPPERLEFT: string;
        anchor: string;
        coords: esri.geometry.Point;
        domNode: Object;
        fixedAnchor: string;
        isShowing: boolean;
        destroyDijits(): void;
        hide(): void;
        move(point : esri.geometry.Point): void;
        place(value: string, parentNode: Node): void;
        place(value: Node, parentNode: Node): void;
        resize(width : number, height : number): void;
        setContent(content: string): InfoWindow;
        setContent(content: Object): InfoWindow;
        setFixedAnchor(anchor : string): void;
        setMap(map : esri.Map): void;
        setTitle(title: string): InfoWindow;
        setTitle(title: Object): InfoWindow;
        show(point: esri.geometry.Point): void;
        show(point: esri.geometry.Point, location : esri.geometry.Point, placement? : string): void;
        startupDijits(): void;
        unsetMap(map : esri.Map): void;
        onHide(): void;
        onShow(): void;
   }
    export class InfoWindowLite extends InfoWindowBase {
		anchor : string;
		coords : esri.geometry.Point;
		domNode : Object;
		fixedAnchor : string;
		isShowing : boolean;
		destroyDijits() : void;
		hide() : void;
		move(point : esri.geometry.Point) : void;
		place(value : any,parentNode : Object) : void;
		resize(width : number, height : number) : void;
		setContent(content : Object) : void;
		setFixedAnchor(anchor : string) : void;
		setMap(map : esri.Map) : void;
		setTitle(title : string) : InfoWindow;
		show(point : esri.geometry.Point, placement? : string) : void;
		startupDijits() : void;
		unsetMap(map : esri.Map) : void;
		// hide : void;
		// show : void;
		onHide() : void;
		onShow() : void;
    }
	// New 3.7
    export class LayerSwipe {
        constructor(params: Object, srcNodeRef: string);
        constructor(params: Object, domNode: HTMLElement);
		handleContainer : string;
		handle : string;
		clip : number;
		enabled : boolean;
		layers : esri.layers.Layer[];
		left : number;
		loaded : boolean;
		map : esri.Map;
		theme : string;
		top : number;
		type : string;
		visible : boolean;
		destroy() : void;
		disable() : void;
		enable() : void;
		startup() : void;
		swipe() : void;
		// load : void;
		// swipe : <Object[]> layers;
    }
    export class Legend {
        constructor(params : Object,srcNodeRef : string ); 
        constructor(params: Object, domNode: HTMLElement); // TO CHECK : in esri code sample parameters are inverted..??
        esriLegendService: string;
        esriLegendServiceLabel: string;
        esriLegendGroupLayer: string;
        esriLegendLayerLabel: string;
        esriLegendLayer: string;
        destroy(): void;
        refresh(): void;
        startup(): void;
    }
	// New 3.7
    export class LocateButton {
        constructor(params: Object, srcNodeRef: string);
        constructor(params: Object, domNode: HTMLElement);
		locateContainer : string;
		zoomLocateButton : string;
		loading : string;
		geolocationOptions : void;
		highlightLocation : boolean;
		infoTemplate : esri.InfoTemplate;
		loaded : boolean;
		map : esri.Map;
		scale : number;
		symbol : esri.symbol.Symbol;
		theme : string;
		visible : boolean;
		clear() : void;
		destroy() : void;
		hide() : void;
		locate() : dojo.Deferred<any>;
		show() : void;
		startup() : void;
		// load : void;
		// locate : esri.Graphic;
    }
    export class Measurement {
        constructor(params: Object, srcNodeRef: string);
        constructor(params: Object, domNode: HTMLElement);
        distanceIcon: string;
        areaIcon: string;
        locationIcon: string;
        unitDropDown: string;
        resultLabel: string;
        result: string;
        clearResult(): void;
        destroy(): void;
        hide(): void;
        hideTool(toolName : string): void;
        setTool(toolName : string, activate : boolean): void;
        show(): void;
        showTool(toolName : string): void;
        startup(): void;
        onMeasureEnd(activeToolName : string, geometry : esri.geometry.Geometry): void;
    }


    export class OverviewMap {
        constructor(params: Object, srcNodeRef: string);
        constructor(params: Object, domNode: HTMLElement);
        destroy(): void;
        hide(): void;
        show(): void;
        startup(): void;
    }
    export class Popup extends esri.InfoWindowBase {
        constructor(params: Object, srcNodeRef: string);
        constructor(params: Object, domNode: HTMLElement);
        count: number;
        deferreds: dojo.Deferred<esri.Graphic>[];
        domNode: Object;
        features: esri.Graphic[];
        isShowing: boolean;
        selectedIndex: number;
        clearFeatures(): void;
        destroy(): void;
        destroyDijits(): void;
        getSelectedFeature(): esri.Graphic;
        hide(): void;
        maximize(): void;
        place(value : string, parentNode : Node): void;
        place(value : Node, parentNode : Node): void;
        reposition(): void;
        resize(width: number, height: number): void;
        restore(): void;
        select(index : number): void;
        setContent(content: string): void;
        setContent(content: Object): void;
        setContent(content: Function): void;
        setFeatures(features : esri.Graphic[]): esri.Graphic[];
        setFeatures(features : dojo.Deferred<esri.Graphic>[]): dojo.Deferred<esri.Graphic>[];
        setMap(map : esri.Map): void;
        setTitle(title: string): void;
        show(location : esri.geometry.Point, options?: Object): void;
        startupDijits(): void;
        unsetMap(map : esri.Map): void;
        onClearFeatures(): void;
        onHide(): void;
        onMaximize(): void;
        onRestore(): void;
        onSelectionChange(): void;
        onSetFeatures(): void;
        onShow(): void;
    }
    export class PopupMobile extends InfoWindowBase {
        constructor(params: Object, srcNodeRef: string);
        constructor(params: Object, domNode: HTMLElement);
        titlePane: string;
        //pointer.top : string;
        //pointer.bottom : string;
        //esriMobileNavigationBar: string;
        clearFeatures(): void;
        destroy(): void;
        getSelectedFeature(): esri.Graphic;
        hide(): void;
        select(index): void;
        setContent(content : string): void;
        setContent(content : Function): void;
        setFeatures(features : esri.Graphic[]): esri.Graphic[];
        setFeatures(features : dojo.Deferred<esri.Graphic>[]): dojo.Deferred<esri.Graphic>[];
        setTitle(title : string): void;
        show(location : esri.geometry.Point): void;
        onClearFeatures(): void;
        onHide(): void;
        onSelectionChange(): void;
        onSetFeatures(): void;
        onShow(): void;
    }
    export class PopupTemplate extends esri.InfoTemplate {
        constructor(popupInfo : Object, options? : Object);
        info: Object;
    }
    export class Print {
        constructor(params: Object, srcNodeRef: string);
        constructor(params: Object, domNode: HTMLElement);
        esriPrint: string;
        esriPrintButton: string;
        esriPrintout: string;
        destroy(): void;
        hide(): void;
        show(): void;
        startup(): void;
        onError(error): void;
        onPrintComplete(value : Object): void;
        onPrintStart(): void;
    }
    export class Scalebar {
        constructor(params: Object, srcNodeRef? : string);
        constructor(params: Object, domNode? : HTMLElement);
        esriScalebar: string;
        esriScalebarRuler: string;
        esriScalebarLabel: string;
        esriScalebarRulerBlock: string;
        esriScalebarLine: string;
        destroy(): void;
        hide(): void;
        show(): void;
    }
    export class TimeSlider {
        constructor(params: Object, srcNodeRef: string);
        constructor(params: Object, domNode: HTMLElement);
        loop: boolean;
        playing: boolean;
        thumbCount: number;
        thumbMovingRate: number;
        timeStops: Date[];
        createTimeStopsByCount(timeExtent: esri.TimeExtent, count?: number): void;
        createTimeStopsByTimeInterval(timeExtent: esri.TimeExtent, timeInterval?: number, timeIntervalUnits?: string): void;
        getCurrentTimeExtent(): TimeExtent;
        next(): void;
        pause(): void;
        play(): void;
        previous(): void;
        setLabels(labels: string[]): void;
        setLoop(loop: boolean): void;
        setThumbCount(thumbCount: number): void;
        setThumbIndexes(indexes: Array<number>): void;
        setThumbMovingRate(thumbMovingRate: number): void;
        setTickCount(count: number): void;
        setTimeStops(timeStops: Date[]): void;
        singleThumbAsTimeInstant(createTimeInstants : boolean): void;
        onTimeExtentChange(timeExtent : esri.TimeExtent): void;
    }
}

/**
* Dijit.Analysis Namespace.
*/
declare module esri.dijit.analysis {
    export class AnalysisBase {
		cancel(jobInfo : Object) : void;
		execute(params : string) : void;
		getCreditsEstimate(toolName : string, jobParams : Object) : dojo.Deferred<any>; // ESRI doc is wrong (string specified for params
		//close : void;
		//drawtool-activate : void;
		//drawtool-deactivate : void;
		//job-cancel : <Object> response;
		//job-fail : <Object> error;
		//job-result : <Object> result;
		//job-status : <Object> jobInfo;
		//job-submit : <Object> params;
		//job-success : <Object> jobInfo;
		//start : <Object> params;
		onClose() : void;
		onExecute(params : Object) : void;
		onJobCancel(response : Object) : void;
		onJobFailed(error : Error) : void;
		onJobResult(result : Object) : void;
		onJobStatus(jobInfo : Object) : void;
		onJobSubmit(params : Object) : void;
		onJobSuccess(jobInfo : Object) : void;
		onSave() : void;
    }
    export class AggregatePoints extends esri.dijit.analysis.AnalysisBase {
        constructor(params: Object, srcNodeRef: string);
        constructor(params: Object, domNode: HTMLElement);
		analysisGpServer : string;
		groupByField : string;
		keepBoundariesWithNoPoints : boolean;
		map : esri.Map;
		outputLayerName : string;
		pointLayer : esri.layers.FeatureLayer;
		polygonLayer : esri.layers.FeatureLayer;
		polygonLayers : esri.layers.FeatureLayer[];
		portalUrl : string;
		returnFeatureCollection : boolean;
		showChooseExtent : boolean;
		showCredits : boolean;
		showHelp : boolean;
		showSelectFolder : boolean;
		summaryFields : string[];
		cancel(jobInfo : Object) : void;
		execute(params : Object) : void; // ESRI doc is wrong (string specified for params
		getCreditsEstimate(toolName : string,jobParams : Object) : dojo.Deferred<any>;
		//close : void;
		//drawtool-activate : void;
		//drawtool-deactivate : void;
		//job-cancel : <Object> response;
		//job-fail : <Object> error;
		//job-result : <Object> result;
		//job-status : <Object> jobInfo;
		//job-submit : <Object> params;
		//job-success : <Object> jobInfo;
		//start : <Object> params;
		onClose() : void;
		onExecute(params : Object) : void;
		onJobCancel(response : Object) : void;
		onJobFailed(error : Error) : void;
		onJobResult(result : Object) : void;
		onJobStatus(jobInfo : Object) : void;
		onJobSubmit(params : Object) : void;
		onJobSuccess(jobInfo : Object) : void;
		onSave() : void;
    }
    export class CreateBuffers extends esri.dijit.analysis.AnalysisBase {
        constructor(params: Object, srcNodeRef: string);
        constructor(params: Object, domNode: Element);
		analysisGpServer : string;
		bufferDistance : string;
		inputLayer : esri.layers.FeatureLayer;
		map : esri.Map;
		outputLayerName : string;
		portalUrl : string;
		returnFeatureCollection : boolean;
		showChooseExtent : boolean;
		showCredits : string;
		showHelp : boolean;
		showSelectFolder : boolean;
		cancel(jobInfo : Object) : void;
		execute(params : Object) : void; // ESRI doc is wrong (string specified for params
		getCreditsEstimate(toolName : string,jobParams : Object) : dojo.Deferred<any>;
		//close : void;
		//drawtool-activate : void;
		//drawtool-deactivate : void;
		//job-cancel : <Object> response;
		//job-fail : <Object> error;
		//job-result : <Object> result;
		//job-status : <Object> jobInfo;
		//job-submit : <Object> params;
		//job-success : <Object> jobInfo;
		//start : <Object> params;
		onClose() : void;
		onExecute(params : Object) : void;
		onJobCancel(response : Object) : void;
		onJobFailed(error : Error) : void;
		onJobResult(result : Object) : void;
		onJobStatus(jobInfo : Object) : void;
		onJobSubmit(params : Object) : void;
		onJobSuccess(jobInfo : Object) : void;
		onSave() : void;
    }
    export class CreateDriveTimeAreas extends esri.dijit.analysis.AnalysisBase {
        constructor(params: Object, srcNodeRef: string);
        constructor(params: Object, domNode: Element);
		analysisGpServer : string;
		breakUnits : string;
		breakValues : number[];
		inputLayer : esri.layers.FeatureLayer;
		inputType : string;
		map : esri.Map;
		outputLayerName : string;
		overlapPolicy : string;
		portalUrl : string;
		returnFeatureCollection : boolean;
		showChooseExtent : boolean;
		showCredits : boolean;
		showHelp : boolean;
		showSelectFolder : boolean;
		cancel(jobInfo : Object) : void;
		execute(params : Object) : void; // ESRI doc is wrong (string specified for params
		getCreditsEstimate(toolName : string,jobParams : Object) : dojo.Deferred<any>;
		//close : void;
		//drawtool-activate : void;
		//drawtool-deactivate : void;
		//job-cancel : <Object> response;
		//job-fail : <Object> error;
		//job-result : <Object> result;
		//job-status : <Object> jobInfo;
		//job-submit : <Object> params;
		//job-success : <Object> jobInfo;
		//start : <Object> params;
		onClose() : void;
		onExecute(params : Object) : void;
		onJobCancel(response : Object) : void;
		onJobFailed(error : Error) : void;
		onJobResult(result : Object) : void;
		onJobStatus(jobInfo : Object) : void;
		onJobSubmit(params : Object) : void;
		onJobSuccess(jobInfo : Object) : void;
		onSave() : void;
    }
    export class DissolveBoundaries extends esri.dijit.analysis.AnalysisBase {
        constructor(params: Object, srcNodeRef: string);
        constructor(params: Object, domNode: Element);
		analysisGpServer : string;
		dissolveFields : String[];
		inputLayer : esri.layers.FeatureLayer;
		map : esri.Map;
		outputLayerName : string;
		portalUrl : string;
		returnFeatureCollection : boolean;
		showChooseExtent : boolean;
		showCredits : boolean;
		showHelp : boolean;
		showSelectFolder : boolean;
		summaryFields : String[];
		cancel(jobInfo : Object) : void;
		execute(params : Object) : void; // ESRI doc is wrong (string specified for params
		getCreditsEstimate(toolName : string,jobParams : Object) : dojo.Deferred<any>;
		//close : void;
		//drawtool-activate : void;
		//drawtool-deactivate : void;
		//job-cancel : <Object> response;
		//job-fail : <Object> error;
		//job-result : <Object> result;
		//job-status : <Object> jobInfo;
		//job-submit : <Object> params;
		//job-success : <Object> jobInfo;
		//start : <Object> params;
		onClose() : void;
		onExecute(params : Object) : void;
		onJobCancel(response : Object) : void;
		onJobFailed(error : Error) : void;
		onJobResult(result : Object) : void;
		onJobStatus(jobInfo : Object) : void;
		onJobSubmit(params : Object) : void;
		onJobSuccess(jobInfo : Object) : void;
		onSave() : void;
    }
    export class EnrichLayer extends esri.dijit.analysis.AnalysisBase {
        constructor(params: Object, srcNodeRef: string);
        constructor(params: Object, domNode: Element);
		analysisGpServer : string;
		distance : number;
		inputLayer : esri.layers.FeatureLayer;
		map : esri.Map;
		outputLayerName : string;
		portalUrl : string;
		returnFeatureCollection : boolean;
		showChooseExtent : boolean;
		showCredits : boolean;
		showHelp : boolean;
		showSelectFolder : boolean;
		showTrafficWidget : boolean;
		cancel(jobInfo : Object) : void;
		execute(params : Object) : void; // ESRI doc is wrong (string specified for params
		getCreditsEstimate(toolName : string,jobParams : Object) : dojo.Deferred<any>;
		//close : void;
		//drawtool-activate : void;
		//drawtool-deactivate : void;
		//job-cancel : <Object> response;
		//job-fail : <Object> error;
		//job-result : <Object> result;
		//job-status : <Object> jobInfo;
		//job-submit : <Object> params;
		//job-success : <Object> jobInfo;
		//start : <Object> params;
		onClose() : void;
		onExecute(params : Object) : void;
		onJobCancel(response : Object) : void;
		onJobFailed(error : Error) : void;
		onJobResult(result : Object) : void;
		onJobStatus(jobInfo : Object) : void;
		onJobSubmit(params : Object) : void;
		onJobSuccess(jobInfo : Object) : void;
		onSave() : void;
    }
    export class ExtractData extends esri.dijit.analysis.AnalysisBase {
        constructor(params: Object, srcNodeRef: string);
        constructor(params: Object, domNode: Element);
		analysisGpServer : string;
		clip : boolean;
		dataFormat : string;
		featureLayers : esri.layers.FeatureLayer[];
		inputLayers : esri.layers.FeatureLayer[];
		map : esri.Map;
		outputLayerName : string;
		portalUrl : string;
		returnFeatureCollection : boolean;
		showChooseExtent : boolean;
		showCredits : boolean;
		showHelp : boolean;
		showSelectFolder : boolean;
		cancel(jobInfo : Object) : void;
		execute(params : Object) : void; // ESRI doc is wrong (string specified for params)
		getCreditsEstimate(toolName : string,jobParams : Object) : dojo.Deferred<any>;
		//close : void;
		//drawtool-activate : void;
		//drawtool-deactivate : void;
		//job-cancel : <Object> response;
		//job-fail : <Object> error;
		//job-result : <Object> result;
		//job-status : <Object> jobInfo;
		//job-submit : <Object> params;
		//job-success : <Object> jobInfo;
		//start : <Object> params;
		onClose() : void;
		onExecute(params : Object) : void;
		onJobCancel(response : Object) : void;
		onJobFailed(error : Error) : void;
		onJobResult(result : Object) : void;
		onJobStatus(jobInfo : Object) : void;
		onJobSubmit(params : Object) : void;
		onJobSuccess(jobInfo : Object) : void;
		onSave() : void;
    }
    export class FindHotSpots extends esri.dijit.analysis.AnalysisBase {
        constructor(params: Object, srcNodeRef: string);
        constructor(params: Object, domNode: Element);
		aggregationPolygonLayers : esri.layers.FeatureLayer[];
		analysisField : string;
		analysisGpServer : string;
		analysisLayer : esri.layers.FeatureLayer;
		boundingPolygonLayers : esri.layers.FeatureLayer[];
		map : esri.Map;
		outputLayerName : string;
		portalUrl : string;
		returnFeatureCollection : boolean;
		showChooseExtent : boolean;
		showCredits : boolean;
		showHelp : boolean;
		showSelectFolder : boolean;
		cancel(jobInfo : Object) : void;
		execute(params : Object) : void; // ESRI doc is wrong (string specified for params
		getCreditsEstimate(toolName : string,jobParams : Object) : dojo.Deferred<any>;
		//close : void;
		//drawtool-activate : void;
		//drawtool-deactivate : void;
		//job-cancel : <Object> response;
		//job-fail : <Object> error;
		//job-result : <Object> result;
		//job-status : <Object> jobInfo;
		//job-submit : <Object> params;
		//job-success : <Object> jobInfo;
		//start : <Object> params;
		onClose() : void;
		onExecute(params : Object) : void;
		onJobCancel(response : Object) : void;
		onJobFailed(error : Error) : void;
		onJobResult(result : Object) : void;
		onJobStatus(jobInfo : Object) : void;
		onJobSubmit(params : Object) : void;
		onJobSuccess(jobInfo : Object) : void;
		onSave() : void;
    }
    export class FindNearest extends esri.dijit.analysis.AnalysisBase {
        constructor(params: Object, srcNodeRef: string);
        constructor(params: Object, domNode: Element);
		analysisGpServer : string;
		analysisLayer : esri.layers.FeatureLayer;
		map : esri.Map;
		maxCount : number;
		nearLayer : esri.layers.FeatureLayer;
		nearLayers : esri.layers.FeatureLayer[];
		outputLayerName : string;
		portalUrl : string;
		returnFeatureCollection : boolean;
		searchCutoff : number;
		searchCutoffUnits : string;
		showChooseExtent : boolean;
		showCredits : boolean;
		showHelp : boolean;
		showSelectFolder : boolean;
		cancel(jobInfo : Object) : void;
		execute(params : Object) : void; // ESRI doc is wrong (string specified for params
		getCreditsEstimate(toolName : string,jobParams : Object) : dojo.Deferred<any>;
		//close : void;
		//drawtool-activate : void;
		//drawtool-deactivate : void;
		//job-cancel : <Object> response;
		//job-fail : <Object> error;
		//job-result : <Object> result;
		//job-status : <Object> jobInfo;
		//job-submit : <Object> params;
		//job-success : <Object> jobInfo;
		//start : <Object> params;
		onClose() : void;
		onExecute(params : Object) : void;
		onJobCancel(response : Object) : void;
		onJobFailed(error : Error) : void;
		onJobResult(result : Object) : void;
		onJobStatus(jobInfo : Object) : void;
		onJobSubmit(params : Object) : void;
		onJobSuccess(jobInfo : Object) : void;
		onSave() : void;
    }
    export class MergeLayers extends esri.dijit.analysis.AnalysisBase {
        constructor(params: Object, srcNodeRef: string);
        constructor(params: Object, domNode: Element);
		analysisGpServer : string;
		inputLayer : esri.layers.FeatureLayer;
		map : esri.Map;
		mergeLayers : esri.layers.FeatureLayer[];
		mergingAttributes : String[];
		outputLayerName : string;
		portalUrl : string;
		returnFeatureCollection : boolean;
		showChooseExtent : boolean;
		showCredits : boolean;
		showHelp : boolean;
		showSelectFolder : boolean;
		cancel(jobInfo : Object) : void;
		execute(params : Object) : void; // ESRI doc is wrong (string specified for params
		getCreditsEstimate(toolName : string,jobParams : Object) : dojo.Deferred<any>;
		//close : void;
		//drawtool-activate : void;
		//drawtool-deactivate : void;
		//job-cancel : <Object> response;
		//job-fail : <Object> error;
		//job-result : <Object> result;
		//job-status : <Object> jobInfo;
		//job-submit : <Object> params;
		//job-success : <Object> jobInfo;
		//start : <Object> params;
		onClose() : void;
		onExecute(params : Object) : void;
		onJobCancel(response : Object) : void;
		onJobFailed(error : Error) : void;
		onJobResult(result : Object) : void;
		onJobStatus(jobInfo : Object) : void;
		onJobSubmit(params : Object) : void;
		onJobSuccess(jobInfo : Object) : void;
		onSave() : void;
    }
    export class OverlayLayers extends esri.dijit.analysis.AnalysisBase {
        constructor(params: Object, srcNodeRef: string);
        constructor(params: Object, domNode: Element);
		analysisGpServer : string;
		inputLayer : esri.layers.FeatureLayer;
		map : esri.Map;
		outputLayerName : string;
		overlayLayer : esri.layers.FeatureLayer[];
		overlayType : string;
		portalUrl : string;
		returnFeatureCollection : boolean;
		showChooseExtent : boolean;
		showCredits : boolean;
		showHelp : boolean;
		showSelectFolder : boolean;
		snapToInput : boolean;
		tolerance : number;
		cancel(jobInfo : Object) : void;
		execute(params : Object) : void; // ESRI doc is wrong (string specified for params
		getCreditsEstimate(toolName : string,jobParams : Object) : dojo.Deferred<any>;
		//close : void;
		//drawtool-activate : void;
		//drawtool-deactivate : void;
		//job-cancel : <Object> response;
		//job-fail : <Object> error;
		//job-result : <Object> result;
		//job-status : <Object> jobInfo;
		//job-submit : <Object> params;
		//job-success : <Object> jobInfo;
		//start : <Object> params;
		onClose() : void;
		onExecute(params : Object) : void;
		onJobCancel(response : Object) : void;
		onJobFailed(error : Error) : void;
		onJobResult(result : Object) : void;
		onJobStatus(jobInfo : Object) : void;
		onJobSubmit(params : Object) : void;
		onJobSuccess(jobInfo : Object) : void;
		onSave() : void;
    }
    export class SummarizeNearby extends esri.dijit.analysis.AnalysisBase {
        constructor(params: Object, srcNodeRef: string);
        constructor(params: Object, domNode: Element);
		analysisGpServer : string;
		distance : number[];
		groupByField : string;
		map : esri.Map;
		nearType : string;
		outputLayerName : string;
		portalUrl : string;
		returnFeatureCollection : boolean;
		shapeUnits : string;
		showChooseExtent : boolean;
		showCredits : boolean;
		showHelp : boolean;
		showSelectFolder : boolean;
		sumNearbyLayer : esri.layers.FeatureLayer;
		sumShape : boolean;
		summaryFields : String[];
		summaryLayer : esri.layers.FeatureLayer;
		summaryLayers : esri.layers.FeatureLayer[];
		units : string;
		cancel(jobInfo : Object) : void;
		execute(params : Object) : void; // ESRI doc is wrong (string specified for params
		getCreditsEstimate(toolName : string,jobParams : Object) : dojo.Deferred<any>;
		//close : void;
		//drawtool-activate : void;
		//drawtool-deactivate : void;
		//job-cancel : <Object> response;
		//job-fail : <Object> error;
		//job-result : <Object> result;
		//job-status : <Object> jobInfo;
		//job-submit : <Object> params;
		//job-success : <Object> jobInfo;
		//start : <Object> params;
		onClose() : void;
		onExecute(params : Object) : void;
		onJobCancel(response : Object) : void;
		onJobFailed(error : Error) : void;
		onJobResult(result : Object) : void;
		onJobStatus(jobInfo : Object) : void;
		onJobSubmit(params : Object) : void;
		onJobSuccess(jobInfo : Object) : void;
		onSave() : void;
    }
    export class SummarizeWithin extends esri.dijit.analysis.AnalysisBase {
        constructor(params: Object, srcNodeRef: string);
        constructor(params: Object, domNode: Element);
		analysisGpServer : string;
		groupByField : string;
		map : esri.Map;
		outputLayerName : string;
		portalUrl : string;
		returnFeatureCollection : boolean;
		showChooseExtent : boolean;
		showCredits : boolean;
		showHelp : boolean;
		showSelectFolder : boolean;
		sumWithinLayer : esri.layers.FeatureLayer;
		summaryFields : string;
		summaryLayer : esri.layers.FeatureLayer;
		summaryLayers : esri.layers.FeatureLayer[];
		cancel(jobInfo : Object) : void;
		execute(params : Object) : void; // ESRI doc is wrong (string specified for params
		getCreditsEstimate(toolName : string,jobParams : Object) : dojo.Deferred<any>;
		//close : void;
		//drawtool-activate : void;
		//drawtool-deactivate : void;
		//job-cancel : <Object> response;
		//job-fail : <Object> error;
		//job-result : <Object> result;
		//job-status : <Object> jobInfo;
		//job-submit : <Object> params;
		//job-success : <Object> jobInfo;
		//start : <Object> params;
		onClose() : void;
		onExecute(params : Object) : void;
		onJobCancel(response : Object) : void;
		onJobFailed(error : Error) : void;
		onJobResult(result : Object) : void;
		onJobStatus(jobInfo : Object) : void;
		onJobSubmit(params : Object) : void;
		onJobSuccess(jobInfo : Object) : void;
		onSave() : void;
    }
}

/**
* Dijit.GeoEnrichment Namespace.
*/
declare module esri.dijit.geoenrichment {
    export class Infographic {
        constructor(params: Object, srcNodeRef: string);
        constructor(params: Object, domNode: Element);
		cacheLimit : number;
		countryID : string;
		datasetID : string;
		expanded : boolean;
		returnGeometry : boolean;
		studyArea : esri.tasks.geoenrichment.GeometryStudyArea;
		studyAreaOptions : esri.tasks.geoenrichment.RingBuffer;
		subtitle : string;
		title : string;
		type : string;
		variables : string[];
		setData(data : esri.tasks.FeatureSet, metadata? : Object) : void;
		startup() : void;
		//data-error : <Object> error;
		//data-load : void;
		//data-ready : <Object> provider;
		//data-request : void;
		resize : number[];
		onDataError(error : Object) : void; // doc says : <Object> error "The error message returned by the GeoEnrichment service."
		onDataLoad() : void;
		onDataReady(provider : Object) : void;
		onDataRequest() : void;
		onResize(size : number[]) : void;
    }
    export class InfographicsOptions {
        constructor(json?: Object);
        studyAreaOptions: esri.tasks.geoenrichment.RingBuffer;
        theme: string;
        getItems(countryID: string): dojo.Deferred<any>;
        toJson(): Object;
	}
	
    export class Item {
        constructor(type : string, variables : string[]);
        datasetID : string;
        isVisible : boolean;
        title : string;
        type : string;
        variables: string[];
    }

    export class InfographicsCarousel {
        constructor(params: Object, srcNodeRef: string);
        constructor(params: Object, domNode: Element);
		expanded : boolean;
        options: any; //esri.dijit.geoenrichment.InfographicsOptions;
		returnGeometry : boolean;
		selectedIndex : number;
		studyArea : esri.tasks.geoenrichment.GeometryStudyArea;
		studyAreaTitle : string;
		startup() : void;
		//data-error : <Object> error;
		//data-load : void;
		//data-ready : <Object> provider;
		//resize : <number[]> size;
		onDataError(error : Object) : void; // doc says : <Object> error "The error message returned by the GeoEnrichment service."
		onDataLoad() : void;
		onDataReady(provider : Object) : void;
        onResize(size: number[]): void;
    }
}

/**
* Geometry Namespace.
*/
declare module esri.geometry {

	interface webMercatorUtils {
		lngLatToXY(long : number,lat : number,isLinear : boolean) : number[];
		webMercatorToGeographic(geometry: esri.geometry.Geometry) : esri.geometry.Geometry;
		xyToLngLat(long : number,lat : number) : number[];
		geographicToWebMercator(geometry : esri.geometry.Geometry) : esri.geometry.Geometry;
	}

	interface scaleUtils {
		getScale(map : esri.Map) : number;
		getExtentForScale(map : esri.Map, scale : number) : esri.geometry.Extent;
	}

	interface jsonUtils {
		getJsonType(geometry : esri.geometry.Geometry) : string;
		fromJson(json : Object) : Object;
	}

	interface screenUtils {
		toMapGeometry(extent : esri.geometry.Extent,width : number,height : number,mapGeometry: esri.geometry.Geometry) : esri.geometry.Geometry;
		//toMapPoint(extent: esri.geometry.Extent,width : number,height : number,screenPoint : esri.geometry.ScreenPoint) : esri.geometry.Point; // Deprecated since 1.1, use toMapGeometry
		toScreenGeometry(extent: esri.geometry.Extent, width: number, height: number, screenGeometry : esri.geometry.Geometry) : esri.geometry.Geometry;
		toScreenPoint(extent: esri.geometry.Extent, width: number, height: number,mapPoint : esri.geometry.Point) : ScreenPoint;
	}

	interface mathUtils {
		getLength(point1: esri.geometry.Point, point2 : esri.geometry.Point) : number;
		getLineIntersection(line1start: esri.geometry.Point, line1end: esri.geometry.Point, line2start: esri.geometry.Point, line2end: esri.geometry.Point) : esri.geometry.Point;
	}

	interface geodesicUtils {

		geodesicAreas(polygons : esri.geometry.Geometry[], areaUnit : esri.Units) : number[];
		geodesicDensify(geometry : esri.geometry.Geometry, maxSegmentLength : number) : esri.geometry.Geometry;
		geodesicLengths(polylines : esri.geometry.Polyline[], lengthUnit : esri.Units) : number[];
	}
	
	interface normalizeUtils {
		normalizeCentralMeridian(geometries: esri.geometry.Geometry[], geometryService : esri.tasks.GeometryService, callback : Function,errback: Function) : dojo.Deferred<any>;
	}

	// TODO thoses 2 functions are associated in documentation to Polygon class, but have the same module as Polygon ??? is it a doc issue or the Polygon class must be augmented by there 2 functions ?

    export function isClockwise(ring : any) : boolean; // any for Ring
    export function polygonSelfIntersecting(polygon : esri.geometry.Polygon) : boolean;

    export class Extent extends Geometry {
        constructor(xmin: number, ymin: number, xmax: number, ymax: number, spatialReference : esri.SpatialReference);
        constructor(json : Object);
        spatialReference: esri.SpatialReference;
        type: string;
        xmax: number;
        xmin: number;
        ymax: number;
        ymin: number;
        static centerAt(point : esri.geometry.Point): esri.geometry.Extent;
        contains(geometry: esri.geometry.Geometry): boolean;
        expand(factor : number): esri.geometry.Extent;
        getCenter(): esri.geometry.Point;
        getHeight(): number;
        getWidth(): number;
        intersects(geometry: esri.geometry.Geometry): boolean;
        intersects(extent: esri.geometry.Extent): esri.geometry.Extent;
        offset(dx: number, dy : number): esri.geometry.Extent;
        setSpatialReference(sr : esri.SpatialReference): esri.geometry.Geometry;
        toJson(): Object;
        union(extent : esri.geometry.Extent): esri.geometry.Extent;
        update(xmin: number, ymin: number, xmax: number, ymax: number, spatialReference : esri.SpatialReference): esri.geometry.Extent;
    }
    export class Geometry {
        spatialReference: esri.SpatialReference;
        type: string;
        setSpatialReference(sr : esri.SpatialReference): esri.geometry.Geometry;
        toJson(): Object;
    }
    export class Multipoint extends Geometry {
        constructor(spatialReference: esri.SpatialReference);
        constructor(json: string);
        points: number[][];
        spatialReference: SpatialReference;
        type: string;
        addPoint(point : esri.geometry.Point): Multipoint;
        getExtent(): esri.geometry.Extent;
        getPoint(index : number): esri.geometry.Point;
        removePoint(index : number): esri.geometry.Point;
        setPoint(index : number, point : esri.geometry.Point): Multipoint;
        setSpatialReference(sr : esri.SpatialReference): esri.geometry.Geometry;
        toJson(): Object;
    }
    export class Point extends Geometry {
        constructor(x: number, y: number, spatialReference: esri.SpatialReference);
        constructor(xy: number[], spatialReference: esri.SpatialReference);
        constructor(json: Object);
        constructor(long: number, lat: number);
        constructor(pointXY : number[]);
        constructor(point: esri.geometry.Point);
        spatialReference: esri.SpatialReference;
        type: string;
        x: number;
        y: number;
        getLatitude(): number;
        getLongitude(): number;
        offset(dx : number, dy : number): esri.geometry.Point;
        setLatitude(lat : number): esri.geometry.Point;
        setLongitude(lon : number): esri.geometry.Point;
        setSpatialReference(sr : esri.SpatialReference): esri.geometry.Geometry;
        setX(x : number): esri.geometry.Point;
        setY(y : number): esri.geometry.Point;
        toJson(): Object;
        update(x : number, y : number): esri.geometry.Point;
    }
    export class Polygon extends Geometry {
        constructor(spatialReference: esri.SpatialReference);
        constructor(json: Object);
        rings: number[][][];
        spatialReference: esri.SpatialReference;
        type: string;
        addRing(ringAsArrayOfLatLon : number[][]): esri.geometry.Polygon;
        addRing(ringAsArrayOfPoints : esri.geometry.Point[]): esri.geometry.Polygon;
        addRing(json : Object): esri.geometry.Polygon;
        contains(point : esri.geometry.Point): boolean;
        getExtent(): esri.geometry.Extent;
        getPoint(ringIndex : number, pointIndex : number): esri.geometry.Point;
        insertPoint(ringIndex : number, pointIndex : number, point : esri.geometry.Point): esri.geometry.Polygon;
        removePoint(ringIndex : number, pointIndex : number): esri.geometry.Point;
        removeRing(ringIndex : number): esri.geometry.Point[];
        setPoint(ringIndex: number, pointIndex: number, point : esri.geometry.Point): esri.geometry.Polygon;
        setSpatialReference(sr : esri.SpatialReference): esri.geometry.Geometry;
        toJson(): Object;
    }
    export class Polyline extends Geometry {
        constructor(spatialReference: esri.SpatialReference);
        constructor(json: Object);
        paths: number[][][];
        spatialReference: esri.SpatialReference;
        type: string;
        addPath(pathAsArrayOfLatLon: number[][]): esri.geometry.Polyline;
        addPath(pathAsArrayOfPoints: esri.geometry.Point[]): esri.geometry.Polyline;
        addPath(json: Object): esri.geometry.Polygon;
        getExtent(): esri.geometry.Extent;
        getPoint(pathIndex : number, pointIndex : number): esri.geometry.Point;
        insertPoint(pathIndex: number, pointIndex: number, point : esri.geometry.Point): esri.geometry.Polyline;
        removePath(pathIndex: number): esri.geometry.Point[];
        removePoint(pathIndex: number, pointIndex: number): esri.geometry.Point;
        setPoint(pathIndex: number, pointIndex: number, point : esri.geometry.Point): esri.geometry.Polyline;
        setSpatialReference(sr : esri.SpatialReference): esri.geometry.Geometry;
        toJson(): Object;
    }
    export class ScreenPoint extends Point {
    }
}

/**
* Layers Namespace.
*/
declare module esri.layers {
    export class ArcGISDynamicMapServiceLayer extends DynamicMapServiceLayer {
        constructor(url : string, options? : Object);
        attributionDataUrl: string;
        capabilities: string;
        copyright: string;
        credential: Credential;
        description: string;
        disableClientCaching: boolean;
        dpi: number;
        dynamicLayerInfos: DynamicLayerInfo[];
        fullExtent: esri.geometry.Extent;
        hasAttributionData: boolean;
        id: string;
        imageFormat: string;
        imageTransparency: boolean;
        initialExtent: esri.geometry.Extent;
        layerDefinitions: string[];
        layerDrawingOptions: esri.layers.LayerDrawingOptions[];
        layerInfos: esri.layers.LayerInfo[];
        layerTimeOptions: esri.layers.LayerTimeOptions[];
        loaded: boolean;
        maxImageHeight: number;
        maxImageWidgth: number;
        maxRecordCount: number;
        maxScale: number;
        minScale: number;
        opacity: number;
		refreshInterval : number;
        showAttribution: boolean;
        spatialReference: esri.SpatialReference;
        suspended: boolean;
        timeInfo: esri.layers.TimeInfo;
        units: string;
        url: string;
        useMapImage: boolean;
        version: number;
        visible: boolean;
        visibleAtMapScale: boolean;
        visibleLayers: number[];
		attr(name : string, value : any) : Layer;
        createDynamicLayerInfosFromLayerInfos(): DynamicLayerInfo[];
        exportMapImage(imageParameters: esri.layers.ImageParameters, callback : Function): void;
        getAttributionData(): dojo.Deferred<any>;
        getImageUrl(extent : esri.geometry.Extent, width : number, height : number, callback : Function): string;
		getMap() : esri.Map;
        getNode(): HTMLElement; // return HTMLElement
        hide(): void;
        isVisibleAtScale(scale : number): boolean;
        refresh(): void;
        resume(): void;
        setDPI(dpi : number, doNotRefresh? : boolean): void;
        setDefaultLayerDefinitions(doNotRefresh?: boolean): void;
        setDefaultVisibleLayers(doNotRefresh?: boolean): void;
        setDisableClientCaching(disable: boolean): void;
        setDynamicLayerInfos(dynamicLayerInfos: esri.layers.DynamicLayerInfo[], doNotRefresh?: boolean): void;
        setGDBVersion(gdbVersion : string, doNotRefresh?: boolean): void;
        setImageFormat(imageFormat: string, doNotRefresh?: boolean): void;
        setImageTransparency(transparent: boolean, doNotRefresh?: boolean): void;
        setLayerDefinitions(layerDefinitions: string[], doNotRefresh?: boolean): void;
        setLayerDrawingOptions(layerDrawingOptions : esri.layers.LayerDrawingOptions[], doNotRefresh?: boolean): void;
        setLayerTimeOptions(options : esri.layers.LayerTimeOptions[], doNotRefresh?: boolean): void;
        setMaxScale(scale : number): void;
        setMinScale(scale : number): void;
        setOpacity(valueBetweenZeroAndOne: number): void;
		setRefreshInterval(interval : number) : esri.layers.Layer; //	Refresh interval of the layer in minutes. Non-zero value indicates automatic layer refresh at the specified interval. Value of 0 indicates auto refresh is not enabled.
        setScaleRange(minScale: number, maxScale: number): void;
        setUseMapTime(update : boolean): void;
        setVisibility(isVisible : boolean): void;
        setVisibleLayers(ids: number[], doNotRefresh?: boolean): void;
        show(): void;
        suspend(): void;
        onError(error: Error): void;
        onGDBVersionChange(): void;
        onLoad(layer : esri.layers.Layer): void;
        onMapImageExport(mapImage : esri.layers.MapImage): void;
        onOpacityChange(valueBetweenZeroAndOne: number): void;
		onRefreshIntervalChange() : void;
        onResume(): void;
        onScaleRangeChange(): void;
        onScaleVisibilityChange(): void;
        onSuspend(): void;
        onUpdate(): void;
        onUpdateEnd(error : Error): void;
        onUpdateStart(): void;
        onVisibilityChange(visibility : boolean): void;
        //error : <Error> error;
        //gdb-version-change : void;
        //load : Layer;
        //map-image-export : MapImage;
        //opacity-change : <number> opacity;
        //resume : void;
        //scale-range-change : void;
        //scale-visibility-change : void;
        //suspend : void;
        //update-end : <Error> error;
        //update-start : void;
        //visibility-change : <boolean> visible;
    }
    export class ArcGISImageServiceLayer extends DynamicMapServiceLayer {
        constructor(url : string, options? : Object);
        attributionDataUrl: string;
        bandCount: number;
        bandIds: number[];
        bands: Object[];
        compressionQuality: number;
        copyrightText: string;
        credential: Credential;
        defaultMosaicRule: MosaicRule;
        description: string;
        disableClientCaching: boolean;
        format: string;
        fullExtent: esri.geometry.Extent;
        hasAttributionData: boolean;
        id: string;
        initialExtent: esri.geometry.Extent;
        interpolation: string;
        loaded: boolean;
        maxImageHeight: number;
        maxImageWidgth: number;
        maxRecordCount: number;
        maxScale: number;
        minScale: number;
        mosaicRule: MosaicRule;
        opacity: number;
        pixelSizeX: number;
        pixelSizeY: number;
        pixelType: number;
		refreshInterval : number;
        renderingRule: RasterFunction;
        showAttribution: boolean;
        spatialReference: SpatialReference;
        suspended: boolean;
        timeInfo: TimeInfo;
        url: string;
        version: number;
        visible: boolean;
        visibleAtMapScale: boolean;
		attr(name : string, value : any) : Layer;
        exportMapImage(imageServiceParameters : esri.layers.ImageServiceParameters, callback : Function): void;
        getAttributionData(): dojo.Deferred<any>;
        getImageUrl(extent : esri.geometry.Extent, width : number, height : number, callback : Function): string;
        getKeyProperties(): dojo.Deferred<any>;
		getMap() : esri.Map;
		getNode() : HTMLElement; // return HTMLElement
		getRasterAttributeTable() : dojo.Deferred<any>;
		getVisibleRasters() : esri.Graphic[];
        hide(): void;
        isVisibleAtScale(scale : number): boolean;
		queryVisibleRasters(query : esri.tasks.Query, options? : Object, callback? : Function, errback? : Function) : void;
        refresh(): void;
        resume(): void;
        setBandIds(bandIds : number[], doNotRefresh? : boolean): void;
        setCompressionQuality(quality : number, doNotRefresh? : boolean): void;
		setDefinitionExpression(expression : string, doNotRefresh : boolean) : void; // Added at 3.6
        setDisableClientCaching(disable : boolean): void;
        setImageFormat(imageFormat : string, doNotRefresh? : boolean): void;
        setInterpolation(interpolation : string, doNotRefresh?: boolean): void;
        setMaxScale(scale : number): void;
        setMinScale(scale : number): void;
        setMosaicRule(mosaicRule: MosaicRule, doNotRefresh?: boolean): MosaicRule;
        setOpacity(valueBetweenZeroAndOne : number): void;
		setRefreshInterval(interval : number) : esri.layers.Layer;
        setRenderingRule(renderingRule : RasterFunction, doNotRefresh : boolean): RasterFunction;
        setScaleRange(minScale : number, maxScale : number): void;
        setUseMapTime(update : boolean): void;
        setVisibility(isVisible : boolean): void;
        show(): void;
        suspend(): void;
        OnRenderingChange(): void;
        onError(error : Error): void;
        onLoad(layer : esri.layers.Layer): void;
        onMapImageExport(mapImage : esri.layers.MapImage): void;
        onOpacityChange(opacity : number): void;
		onRefreshIntervalChange() : void;
		onRenderingChange() : void;
        onResume(): void;
        onScaleRangeChange(): void;
        onScaleVisibilityChange(): void;
        onSuspend(): void;
        onUpdate(): void;
        onUpdateEnd(error : Error): void;
        onUpdateStart(): void;
        onVisibilityChange(visibility : boolean): void;
        //error : <Error> error;
        //gdb-version-change : void;
        //load : Layer;
        //map-image-export : MapImage;
        //opacity-change : <number> opacity;
        //rendering-change : void;
        //resume : void;
        //scale-range-change : void;
        //scale-visibility-change : void;
        //suspend : void;
        //update-end : <Error> error;
        //update-start : void;
        //visibility-change : <boolean> visible;
    }

    export class ArcGISTiledMapServiceLayer extends TiledMapServiceLayer {
        constructor(url : string, options? : Object);
        attributionDataUrl: string;
        capabilities: string;
        copyright: string;
        credential: Credential;
        description: string;
        fullExtent: esri.geometry.Extent;
        hasAttributionData: boolean;
        id: string;
        initialExtent: esri.geometry.Extent;
        layerInfos: LayerInfo[];
        loaded: boolean;
        maxImageHeight: number;
        maxImageWidgth: number;
        maxRecordCount: number;
        maxScale: number;
        minScale: number;
        opacity: number;
		refreshInterval : number;
        showAttribution: boolean;
        spatialReference: esri.SpatialReference;
        suspended: boolean;
        tileInfo: TileInfo;
        timeInfo: TimeInfo;
        units: string;
        url: string;
        version: number;
        visible: boolean;
        visibleAtMapScale: boolean;
		attr(name : string, value : any) : esri.layers.Layer;
        getAttributionData(): dojo.Deferred<any>;
		getMap() : esri.Map;
		getNode() : HTMLElement; // Return HTMLElement
        getTileUrl(level: number, row: number, column: number): string;
        hide(): void;
        isVisibleAtScale(scale: number): boolean;
        refresh(): void;
        resume(): void;
        setMaxScale(scale: number): void;
        setMinScale(scale: number): void;
        setOpacity(valueBetweenZeroAndOne : number): void;
		setRefreshInterval(interval : number) : Layer;
        setScaleRange(minScale: number, maxScale: number): void;
        setVisibility(isVisible:boolean): void;
        show(): void;
        suspend(): void;
        onError(error: Error): void;
        onLoad(layer : esri.layers.Layer): void;
        onOpacityChange(opacity : number): void;
		onRefreshIntervalChange() : void;
        onResume(): void;
        onScaleRangeChange(): void;
        onScaleVisibilityChange(): void;
        onSuspend(): void;
        onUpdate(): void;
        onUpdateEnd(error: Error): void;
        onUpdateStart(): void;
        onVisibilityChange(visibility : boolean): void;
        //error : <Error> error;
        load: Layer;
        //opacity-change : <number> opacity;
        //resume : void;
        //scale-range-change : void;
        //scale-visibility-change : void;
        //suspend : void;
        //update-end : <Error> error;
        //update-start : void;
        //visibility-change : <boolean> visible;
    }
    export class CodedValueDomain extends Domain {
        codedValues: Object[];
    }
    export class Domain {
        name: string;
        type: string;
        toJson(): Object;
    }
    export class DynamicLayerInfo extends LayerInfo {
        constructor(json? : Object);
        defaultVisibility: boolean;
        id: number;
        maxScale: number;
        minScale: number;
        name: string;
        parentLayerId: number;
        source: any; // LayerMapSource or LayerDataSource
        subLayerIds: number[];
        toJson(): Object;
    }
    export class DynamicMapServiceLayer extends Layer {
        // Note : DynamicMapServiceLayer has no constructor. Use ArcGISDynamicMapServiceLayer and ArcGISImageServiceLayer.htm instead. (As of v1.2)
        attributionDataUrl: string;
        credential: Credential;
        fullExtent: esri.geometry.Extent;
        hasAttributionData: boolean;
        id: string;
        initialExtent: esri.geometry.Extent;
        loaded: boolean;
        maxScale: number;
        minScale: number;
        opacity: number;
		refreshInterval : number;
        showAttribution: boolean;
        spatialReference: SpatialReference;
        suspended: boolean;
        url: string;
        visible: boolean;
        visibleAtMapScale: boolean;
		attr(name : string, value : any) : esri.layers.Layer;
        getAttributionData(): dojo.Deferred<any>;
        getImageUrl(extent : esri.geometry.Extent, width : number, height : number, callback: Function): string;
		getMap() : esri.Map;
		getNode() : HTMLElement; // Return HTMLElement
        hide(): void;
        isVisibleAtScale(scale: number): boolean;
        refresh(): void;
        resume(): void;
        setMaxScale(scale: number): void;
        setMinScale(scale: number): void;
        setOpacity(valueBetweenZeroAndOne : number): void;
		setRefreshInterval(interval : number) : esri.layers.Layer;
        setScaleRange(minScale: number, maxScale: number): void;
        setVisibility(isVisible: boolean): void;
        show(): void;
        suspend(): void;
        onError(error: Error): void;
        onLoad(layer : esri.layers.Layer): void;
        onOpacityChange(opacity: number): void;
		onRefreshIntervalChange() : void;
        onResume(): void;
        onScaleRangeChange(): void;
        onScaleVisibilityChange(): void;
        onSuspend(): void;
        onUpdate(): void;
        onUpdateEnd(error: Error): void;
        onUpdateStart(): void;
        onVisibilityChange(visibility: boolean): void;
        //error : <Error> error;
        //gdb-version-change : void;
        load: Layer;
        //map-image-export : MapImage;
        //opacity-change : <number> opacity;
        //resume : void;
        //scale-range-change : void;
        //scale-visibility-change : void;
        //suspend : void;
        //update-end : <Error> error;
        //update-start : void;
        //visibility-change : <boolean> visible;
    }
    export class FeatureEditResult {
        attachmentId: number;
        error: Error;
        objectId: number;
        success: boolean;
    }
    export class FeatureLayer extends GraphicsLayer {
        constructor(url: string, options? : Object);
        constructor(featureCollectionObject: Object, options? : Object);
        static SELECTION_SUBTRACT: string;
        static MODE_SNAPSHOT: string;
        static MODE_ONDEMAND: string;
        static MODE_SELECTION: string;
        static POPUP_NONE: string;
        static POPUP_HTML_TEXT: string;
        static POPUP_URL: string;
        static SELECTION_ADD: string;
        static SELECTION_NEW: string;
        allowGeometryUpdates: boolean;
        attributionDataUrl: string;
        capabilities: string;
        copyright: string;
		credential : esri.Credential;
		dataAttributes : any; // NEw 3.7 : String or String[];
        defaultDefinitionExpression: string;
        defaultVisibility: boolean;
        description: string;
        displayField: string;
        editFieldsInfo: Object;
        fields: Field[];
        fullExtent: esri.geometry.Extent;
        geometryType: string;
        globalIdField: string;
        graphics: Graphic[];
        hasAttachments: boolean;
        hasAttributionData: boolean;
        htmlPopupType: string;
		id : string;
        layerId: number;
        maxRecordCount: number;
        maxScale: number;
        minScale: number;
        name: string;
        objectIdField: string;
		opacity : number;
        ownershipBasedAccessControlForFeatures: Object;
		refreshInterval : number;
        relationships: Object[];
        renderer: esri.renderer.Renderer;
        showAttribution: boolean;
        source: any; // <LayerMapSource or LayerDataSource> source
		styling : boolean;
        supportsAdvancedQueries: boolean;
        supportsStatistics: boolean;
        suspended: boolean;
        templates: FeatureTemplate[];
        timeInfo: TimeInfo;
        type: string;
        typeIdField: string;
        types: FeatureType[];
        version: number;
		visible : boolean;
        visibleAtMapScale: boolean;
		add(graphic : esri.Graphic) : esri.Graphic;
        addAttachment(objectId : number, formNode : HTMLFormElement, callback?: Function, errback?: Function): dojo.Deferred<any>;
        applyEdits(adds: esri.Graphic[], updates: esri.Graphic[], deletes: esri.Graphic[], callback?: Function, errback?: Function): dojo.Deferred<any>;
		attr(name : string, value : any) : esri.layers.Layer;
		clear() : void;
        clearSelection(): esri.layers.FeatureLayer;
        deleteAttachments(objectId: number, attachmentIds: number[], callback?: Function, errback?: Function): dojo.Deferred<any>;
		disableMouseEvents() : void;
		enableMouseEvents() : void;
        getAttributionData(): dojo.Deferred<any>;
        getDefinitionExpression(): string;
        getEditCapabilities(options : Object): Object;
        getEditInfo(feature : esri.Graphic, options?: Object): any; //Object or Undefined;
        getEditSummary(feature : esri.Graphic, options?: Object): string;
		getMap() : esri.Map;
        getMaxAllowableOffset(): number;
		getNode() : HTMLElement; // Return HTMLElement
        getSelectedFeatures(): esri.Graphic[];
        getSelectionSymbol(): esri.symbol.Symbol;
        getTimeDefinition(): TimeExtent;
		hide() : void;
        isEditable(): boolean;
        isVisibleAtScale(scale: number): boolean;
        queryAttachmentInfos(objectId: number, callback?: Function, errback?: Function): dojo.Deferred<any>;
        queryCount(query: esri.tasks.Query, callback?: Function, errback?: Function): dojo.Deferred<any>;
        queryFeatures(query: esri.tasks.Query, callback?: Function, errback?: Function): dojo.Deferred<any>;
        queryIds(query: esri.tasks.Query, callback?: Function, errback?: Function): dojo.Deferred<any>;
        queryRelatedFeatures(relQuery: esri.tasks.RelationshipQuery, callback?: Function, errback?: Function): dojo.Deferred<any>;
        redraw(): void;
        refresh(): void;
		remove(graphic : esri.Graphic) : esri.Graphic;
        resume(): void;
        selectFeatures(query: esri.tasks.Query, selectionMethod? : number, callback?: Function, errback?: Function): dojo.Deferred<any>;
        setAutoGeneralize(enable: boolean): esri.layers.FeatureLayer;
        setDefinitionExpression(expression: string): esri.layers.FeatureLayer;
        setEditable(editable: boolean): esri.layers.FeatureLayer;
        setGDBVersion(versionName: string): esri.layers.FeatureLayer;
        setInfoTemplate(infoTemplate : esri.InfoTemplate): void;
        setMaxAllowableOffset(offset : number): void;
        setMaxScale(scale: number): void;
        setMinScale(scale: number): void;
        setOpacity(opacity: number): void;
		setRefreshInterval(interval : number) : Layer;
        setRenderer(renderer : esri.renderer.Renderer): void;
        setScaleRange(minScale: number, maxScale: number): void;
        setSelectionSymbol(symbol : esri.symbol.Symbol): esri.layers.FeatureLayer;
        setTimeDefinition(definition: esri.TimeExtent): esri.layers.FeatureLayer;
        setTimeOffset(offsetValue : number, offsetUnits : string): esri.layers.FeatureLayer;
        setUseMapTime(update: boolean): void;
		setVisibility(isVisible) : void;
		show() : void;
        suspend(): void;
        toJson(): Object;
        onAddAttachmentComplete(result: esri.layers.FeatureEditResult): void;
        onBeforeApplyEdits(adds: esri.Graphic[], updates: esri.Graphic[], deletes: esri.Graphic[]): void;
        onCapabilitiesChange(): void;
		onClick(event : Object) : void;
        onDblClick(event : Object): void;
        onDeleteAttachmentsComplete(results: esri.layers.FeatureEditResult[]): void;
        onEditsComplete(addResults: esri.layers.FeatureEditResult[], updateResults: esri.layers.FeatureEditResult[], deleteResults: esri.layers.FeatureEditResult[]): void;
		onError(error : Error) : void;
		onGraphicAdd(graphic : esri.Graphic) : void;
		onGraphicDraw(evt : Object) : void;
		onGraphicNodeAdd(evt : Object) : void;
		onGraphicNodeRemove(evt : Object) : void;
		onGraphicRemove(graphic : esri.Graphic) : void;
		onGraphicsClear() : void;
		onLoad(layer : esri.layers.Layer) : void;
		onMouseDown(event : Object) : void;
		onMouseDrag(event : Object) : void;
		onMouseMove(event : Object) : void;
		onMouseOut(event : Object) : void;
		onMouseOver(event : Object) : void;
		onMouseUp(event : Object) : void;
		onOpacityChange(opacity : number) : void;
        onQueryAttachmentInfosComplete(attachmentInfos : Object[]): void;
        onQueryCountComplete(count: number): void;
        onQueryFeaturesComplete(featureSet: esri.tasks.FeatureSet): void;
        onQueryIdsComplete(ids: number[]): void;
        onQueryLimitExceeded(): void;
        onQueryRelatedFeaturesComplete(relatedFeatures : Object): void;
		onRefreshIntervalChange() : void;
        onResume(): void;
        onScaleRangeChange(): void;
        onScaleVisibilityChange(): void;
        onSelectionClear(): void;
        onSelectionComplete(features: esri.Graphic[], selectionMethod: number): void;
        onSuspend(): void;
        onUpdateEnd(error: Error, info?: Object): void;
		onUpdate(message : Object) : void;
		onUpdateEnd(error : Error, info : Object) : void;
        onUpdateStart(): void;
		onVisibilityChange(visbility) : void;
        //add-attachment-complete : FeatureEditResult;
        //before-apply-edits : Graphic[];
        //capabilities-change : void;
        //delete-attachments-complete : <Object[]> results;
        //edits-complete : FeatureEditResult[];
        //query-attachment-infos-complete : <Object[]> info;
        //query-count-complete : <number> count;
        //query-features-complete : FeatureSet;
        //query-ids-complete : <number[]> objectIds;
        //query-limit-exceeded : void;
        //query-related-features-complete : <Object> relatedFeatures;
        //scale-range-change : void;
        //scale-visibility-change : void;
        //selection-clear : void;
        //selection-complete : <;
        //update-end : <Error> error;
    }


    export class FeatureTemplate {
        static TOOL_AUTO_COMPLETE_POLYGON: string;
        static TOOL_CIRCLE: string;
        static TOOL_ELLIPSE: string;
        static TOOL_FREEHAND: string;
        static TOOL_LINE: string;
        static TOOL_NONE: string;
        static TOOL_POINT: string;
        static TOOL_POLYGON: string;
        static TOOL_RECTANGLE: string;
        static TOOL_ARROW: string;
        static TOOL_TRIANGLE: string;
        description: string;
        drawingTool: string;
        name: string;
        prototype: esri.Graphic;
        toJson(): Object;
    }
    export class FeatureType {
        domains: Object;
        id: number;
        name: string;
        templates: FeatureTemplate[];
        toJson(): Object;
    }
    export class Field {
        alias: string;
        domain: Domain;
        editable: boolean;
        length: number;
        name: string;
        nullable: boolean;
        type: string;
    }
    export class GeoRSSLayer {
        constructor(url : string, options? : Object);
        copyright: string;
        defaultVisibility: boolean;
        description: string;
        items: Graphic[];
        name: string;
        getFeatureLayers(): esri.layers.FeatureLayer[];
        onRefresh(): void;
    }
    export class GraphicsLayer extends Layer {
        constructor();
        constructor(options?: Object);
        attributionDataUrl: string;
        credential: Credential;
		dataAttributes : any; // String or String[];
        graphics: Graphic[];
        hasAttributionData: boolean;
        id: string;
        loaded: boolean;
        maxScale: number;
        minScale: number;
        opacity: number;
		refreshInterval : number;
        renderer: esri.renderer.Renderer;
        showAttribution: boolean;
		styling : boolean;
        suspended: boolean;
        url: string;
        visible: boolean;
        visibleAtMapScale: boolean;
        add(graphic: esri.Graphic): esri.Graphic;
		attr(name : string, value : any) : Layer;
        clear(): void;
        disableMouseEvents(): void;
        enableMouseEvents(): void;
        getAttributionData(): dojo.Deferred<any>;
		getMap() : esri.Map;
		getNode() : HTMLElement; // Return HTMLElement
        hide(): void;
        isVisibleAtScale(scale: number): boolean;
        redraw(): void;
        remove(graphic: esri.Graphic): esri.Graphic;
        resume(): void;
        setInfoTemplate(infoTemplate : esri.InfoTemplate): void;
        setMaxScale(scale : number): void;
        setMinScale(scale: number): void;
        setOpacity(valueBetweenZeroAndOne : number): void;
        setRefreshInterval(interval: number): esri.layers.Layer;
        setRenderer(renderer : esri.renderer.Renderer): void;
        setScaleRange(minScale: number, maxScale: number): void;
        setVisibility(isVisible: boolean): void;
        show(): void;
        suspend(): void;
        onClick(event : Object): void;
        onDblClick(event : Object): void;
        onError(error: Error): void;
        onGraphicAdd(graphic: esri.Graphic): void;
		onGraphicDraw(evt : Object) : void;
		onGraphicNodeAdd(evt : Object) : void;
		onGraphicNodeRemove(evt : Object) : void;
        onGraphicRemove(graphic: esri.Graphic): void;
        onGraphicsClear(): void;
        onLoad(layer : esri.layers.Layer): void;
        onMouseDown(event : Object): void;
        onMouseDrag(event : Object): void;
        onMouseMove(event : Object): void;
        onMouseOut(event : Object): void;
        onMouseOver(event : Object): void;
        onMouseUp(event : Object): void;
        onOpacityChange(opacity): void;
		onRefreshIntervalChange() : void;
        onResume(): void;
        onScaleRangeChange(): void;
        onScaleVisibilityChange(): void;
        onSuspend(): void;
        onUpdate(message: Object): void;
        onUpdateEnd(error : Error): void;
        onUpdateStart(): void;
        onVisibilityChange(visibility: boolean): void;
        //click: void;
        //dbl-click : void;
        //error : <Error> error;
        //graphic-add : esri.Graphic;
        //graphic-remove : esri.Graphic;
        //graphics-clear : void;
        // load : Layer;
        //mouse-down : <MouseEvent> <MouseEvent>;
        //mouse-drag : <MouseEvent> <MouseEvent>;
        //mouse-move : <MouseEvent> <MouseEvent>;
        //mouse-out : <MouseEvent> <MouseEvent>;
        //mouse-over : <MouseEvent> <MouseEvent>;
        //mouse-up : <MouseEvent> <MouseEvent>;
        //opacity-change : <number> opacity;
        // resume : void;
        //scale-range-change : void;
        //scale-visibility-change : void;
        //suspend : void;
        //update-end : <Error> error;
        //update-start : void;
        //visibility-change : <boolean> visible;
    }
    export class ImageParameters {
        constructor();
        static LAYER_OPTION_SHOW: string;
        static LAYER_OPTION_HIDE: string;
        static LAYER_OPTION_INCLUDE: string;
        static LAYER_OPTION_EXCLUDE: string;
        bbox: esri.geometry.Extent;
        dpi: void;
        format: string;
        height: number;
        imageSpatialReference: SpatialReference;
        layerDefinitions: string[];
        layerIds: void;
        layerOption: string;
        layerTimeOptions: LayerTimeOptions[];
        timeExtent: TimeExtent;
        transparent: boolean;
        width: number;
    }
    export class ImageServiceParameters {
        constructor();
        static INTERPOLATION_BILINEAR: string;
        static INTERPOLATION_CUBICCONVOLUTION: string;
        static INTERPOLATION_MAJORITY: string;
        static INTERPOLATION_NEARESTNEIGHBOR: string;
        bandIds: number[];
        compressionQuality: number;
        extent: esri.geometry.Extent;
        format: string;
        height: number;
        interpolation: string;
        mosaicRule: MosaicRule;
        noData: number;
        renderingRule: RasterFunction;
        timeExtent: TimeExtent;
        width: number;
    }
    export class InheritedDomain extends Domain {
    }
    export class JoinDataSource extends DataSource {
        constructor(json? : Object);
        joinType: string;
        leftTableKey: string;
        leftTableSource: DataSource; // LayerMapSource or LayerDataSource
        rightTableKey: string;
        rightTableSource: DataSource; // LayerMapSource or LayerDataSource
        toJson(): Object;
    }
    export class KMLFolder {
        description: string;
        featureInfos: Object[];
        id: number;
        name: string;
        parentFolderId: number;
        snippet: string;
        subFolderIds: number[];
        visibility: number;
    }
    export class KMLGroundOverlay {
        Snippet: string;
        description: string;
        extent: esri.geometry.Extent;
        height: number;
        href: string;
        id: number;
        name: string;
        scale: number;
        visibility: number;
        width: number;
    }
    export class KMLLayer extends Layer {
        constructor(id: string, url: string, options?: Object);
        attributionDataUrl: string;
        credential: Credential;
        featureInfos: Object[];
        folders: KMLFolder[];
        hasAttributionData: boolean;
        id: string;
        linkInfo: Object;
        loaded: boolean;
        maxScale: number;
        minScale: number;
        opacity: number;
		refreshInterval : number;
        showAttribution: boolean;
        suspended: boolean;
        url: string;
        visible: boolean;
        visibleAtMapScale: boolean;
		attr(name : string, value : any) : esri.layers.Layer;
        getAttributionData(): dojo.Deferred<any>;
        getFeature(featureInfo : any): Object;
        getLayers(): Layer[];
		getMap() : esri.Map;
        getNode(): HTMLElement; // return HTMLElement
        hide(): void;
        isVisibleAtScale(scale : number): boolean;
        resume(): void;
        setFolderVisibility(folder: esri.layers.KMLFolder, visibility: boolean): void;
        setMaxScale(scale: number): void;
        setMinScale(scale: number): void;
        setOpacity(valueBetweenZeroAndOne: number): void;
		setRefreshInterval(interval : number) : esri.layers.Layer;
        setScaleRange(minScale: number, maxScale: number): void;
        setVisibility(isVisible: boolean): void;
        show(): void;
        suspend(): void;
        onError(error: Error): void;
        onLoad(layer : esri.layers.Layer): void;
        onOpacityChange(opacity: number): void;
        onRefresh(): void;
		onRefreshIntervalChange() : void;
        onResume(): void;
        onScaleRangeChange(): void;
        onScaleVisibilityChange(): void;
        onSuspend(): void;
        onUpdate(): void;
        onUpdateEnd(error: Error): void;
        onUpdateStart(): void;
        onVisibilityChange(visibility: boolean): void;
        //error : <Error> error;
        //load : Layer;
        //opacity-change : <number> opacity;
        //resume : void;
        //scale-range-change : void;
        //scale-visibility-change : void;
        //suspend : void;
        //update-end : <Error> error;
        //update-start : void;
        //visibility-change : <boolean> visible;
    }

    export class LabelClass {
        constructor(json?: Object);
        labelExpression: string;
        labelPlacement: string;
        maxScale: number;
        minScale: number;
        symbol: esri.symbol.TextSymbol;
        useCodedValues: boolean;
        where: string;
    }

    export class LabelLayer {
        constructor(json?: Object);
        addFeatureLayer(featureLayer: esri.layers.FeatureLayer, renderer: esri.renderer.Renderer,
            textExpression: string, labelOptions?: Object): void;
        getFeatureLayer(index: number): esri.layers.FeatureLayer;
    }

    export class Layer {
        constructor(options?: Object);
        attributionDataUrl: string;
        credential: Credential;
        hasAttributionData: boolean;
        id: string;
        loaded: boolean;
        maxScale: number;
        minScale: number;
        opacity: number;
		refreshInterval : number;
        showAttribution: boolean;
        suspended: boolean;
        url: string;
        visible: boolean;
        visibleAtMapScale: boolean;
		attr(name : string, value : any) : esri.layers.Layer;
        getAttributionData(): dojo.Deferred<any>;
		getMap() : esri.Map;
		getNode() : HTMLElement; // Return HTMLElement
        hide(): void;
        isVisibleAtScale(scale: number): boolean;
        resume(): void;
        setMaxScale(scale: number): void;
        setMinScale(scale: number): void;
        setOpacity(valueBetweenZeroAndOne : number): void;
		setRefreshInterval(interval : number) : esri.layers.Layer;
        setScaleRange(minScale: number, maxScale: number): void;
        setVisibility(isVisible : boolean): void;
        show(): void;
        suspend(): void;
        onError(error : Error): void;
        onLoad(layer : esri.layers.Layer): void;
        onOpacityChange(opacity: number): void;
		onRefreshIntervalChange() : void;
        onResume(): void;
        onScaleRangeChange(): void;
        onScaleVisibilityChange(): void;
        onSuspend(): void;
        onUpdate(message: Object): void;
        onUpdateEnd(error: Error): void;
        onUpdateStart(): void;
        onVisibilityChange(visibility: boolean): void;
        //error : <Error> error;
        //load : Layer;
        //opacity-change : <number> opacity;
        //resume : void;
        //scale-range-change : void;
        //scale-visibility-change : void;
        //suspend : void;
        //update-end : <Error> error;
        //update-start : void;
        //visibility-change : <boolean> visible;
    }


	export class DataSource { // abstract class used for specify the datasources
		constructor(json?);
	}


    export class LayerDataSource extends DataSource {
        constructor(json?);
        dataSource: Object;
        toJson(): Object;
    }
    export class LayerDrawingOptions {
        constructor(json? : Object);
		labelingInfo : esri.layers.LabelClass[]; // Added at v3.6
        renderer: esri.renderer.Renderer;
        scaleSymbols: boolean;
        showLabels: boolean;
        transparency: number;
        toJson(): Object;
    }
    export class LayerInfo {
        defaultVisibility: boolean;
        id: number;
        maxScale: number;
        minScale: number;
        name: string;
        parentLayerId: number;
        subLayerIds: number[];
    }
    export class LayerMapSource {
        constructor(json? : Object);
        gdbVersion: string;
        mapLayerId: number;
        toJson(): Object;
    }
    export class LayerTimeOptions {
        timeDataCumulative: boolean;
        timeOffset: void;
        timeOffsetUnits: void;
        useTime: boolean;
    }
    export class LOD {
        level: number;
        levelValue: string;
        resolution: number;
        scale: number;
    }
    export class MapImage {
        constructor(options : Object);
        extent: esri.geometry.Extent;
        height: number;
        href: string;
        scale: number;
        width: number;
    }
    export class MapImageLayer extends Layer {
        constructor(options?: Object);
        attributionDataUrl: string;
        credential: Credential;
        hasAttributionData: boolean;
        id: string;
        loaded: boolean;
        maxScale: number;
        minScale: number;
        opacity: number;
		refreshInterval : number;
        showAttribution: boolean;
        suspended: boolean;
        url: string;
        visible: boolean;
        visibleAtMapScale: boolean;
        addImage(mapImage): void;
		attr(name : string, value : any) : esri.layers.Layer;
        getAttributionData(): dojo.Deferred<any>;
        getImages(): esri.layers.MapImage[];
		getMap() : esri.Map;
		getNode() : HTMLElement; // Return HTMLElement
        hide(): void;
        isVisibleAtScale(scale): boolean;
        removeAllImages(): void;
        removeImage(mapImage: esri.layers.MapImage): void;
        resume(): void;
        setMaxScale(scale: number): void;
        setMinScale(scale: number): void;
        setOpacity(): void;
		setRefreshInterval(interval : number) : esri.layers.Layer;
        setScaleRange(minScale: number, maxScale: number): void;
        setVisibility(isVisible: boolean): void;
        show(): void;
        suspend(): void;
        onError(error): void;
        onLoad(layer : esri.layers.Layer): void;
        onOpacityChange(valueBetweenZeroAndOne: number): void;
		onRefreshIntervalChange() : void;
        onResume(): void;
        onScaleRangeChange(): void;
        onScaleVisibilityChange(): void;
        onSuspend(): void;
        onUpdate(): void;
        onUpdateEnd(error): void;
        onUpdateStart(): void;
        onVisibilityChange(visibility: boolean): void;
        //error : <Error> error;
        //load : Layer;
        //opacity-change : <number> opacity;
        //resume : void;
        //scale-range-change : void;
        //scale-visibility-change : void;
        //suspend : void;
        //update-end : <Error> error;
        //update-start : void;
        //visibility-change : <boolean> visible;
    }
    export class MosaicRule {
        constructor();
        static METHOD_NONE: string;
        static METHOD_CENTER: string;
        static METHOD_NADIR: string;
        static METHOD_VIEWPOINT: string;
        static METHOD_ATTRIBUTE: string;
        static METHOD_LOCKRASTER: string;
        static METHOD_NORTHWEST: string;
        static METHOD_SEAMLINE: string;
        static OPERATION_FIRST: string;
        static OPERATION_LAST: string;
        static OPERATION_MIN: string;
        static OPERATION_MAX: string;
        static OPERATION_MEAN: string;
        static OPERATION_BLEND: string;
        ascending: boolean;
        lockRasterIds: number[];
        method: string;
        objectIds: number[];
        operation: string;
        sortField: string;
        sortValue: string;
        viewpoint: esri.geometry.Point;
        where: string;
        toJson(): Object;
    }
    export class OpenStreetMapLayer {
        constructor(options? : Object);
        copyright: string;
    }
    export class QueryDataSource extends DataSource {
        constructor(json?: Object);
        geometryType: string;
        oidFields: string[];
        query: string;
        spatialReference: SpatialReference;
        workspaceId: string;
        toJson(): Object;
    }
    export class RangeDomain {
        maxValue: number;
        minValue: number;
    }
    export class RasterDataSource extends DataSource {
        constructor(json?: Object);
        dataSourceName: string;
        workspaceId: string;
        toJson(): Object;
    }
    export class RasterFunction {
        constructor();
        arguments: Object;
        functionName: string;
        variableName: string;
        toJson(): Object;
    }
    export class StreamLayer extends esri.layers.FeatureLayer { // Class added 3.6
		constructor(url :string, options? : Object);
		constructor(featureCollectionObject : Object,options? : Object);
		allowGeometryUpdates : boolean;
		attributionDataUrl : string;
		capabilities : string;
		className : void;
		copyright : string;
		credential : esri.Credential;
		dataAttributes : any; // String or String[];
		defaultDefinitionExpression : string;
		defaultVisibility : boolean;
		description : string;
		displayField : string;
		editFieldsInfo : Object;
		fields : esri.layers.Field[];
		fullExtent : esri.geometry.Extent;
		geometryType : string;
		globalIdField : string;
		graphics : esri.Graphic[];
		hasAttachments : boolean;
		hasAttributionData : boolean;
		htmlPopupType : string;
		id : string;
		layerId : number;
		loaded : boolean;
		maxRecordCount : number;
		maxScale : number;
		minScale : number;
		name : string;
		objectIdField : string;
		opacity : number;
		ownershipBasedAccessControlForFeatures : Object;
		refreshInterval : number;
		relationships : Object[];
		renderer : esri.renderer.Renderer;
		showAttribution : boolean;
		socket : Object;
		socketUrl : string;
		source : esri.layers.LayerMapSource;
		styling : boolean;
		supportsAdvancedQueries : boolean;
		supportsStatistics : boolean;
		surfaceType : string;
		suspended : boolean;
		templates : esri.layers.FeatureTemplate[];
		timeInfo : esri.layers.TimeInfo;
		type : string;
		typeIdField : string;
		types : esri.layers.FeatureType[];
		url : string;
		version : number;
		visible : boolean;
		visibleAtMapScale : boolean;
		add(graphic : esri.Graphic) : esri.Graphic;
		addAttachment(objectId : number, formNode : any, callback? : Function, errback? : Function) : dojo.Deferred<any>;
		applyEdits(adds? : esri.Graphic[],updates? : esri.Graphic[],deletes? : esri.Graphic[], callback? : Function, errback? : Function) : dojo.Deferred<any>;
		attr(name : string,value : any) : esri.layers.Layer;
		clear() : void;
		clearSelection() : esri.layers.FeatureLayer;
		connect(callback?) : void;
		deleteAttachments(objectId : number, attachmentIds : number[], callback? : Function,errback? : Function) : dojo.Deferred<any>;
		disableMouseEvents() : void;
		disconnect(callback? : Function) : void;
		enableMouseEvents() : void;
		getAttributionData() : dojo.Deferred<any>;
		getDefinitionExpression() : string;
		getEditCapabilities(options? : Object) : Object;
		getEditInfo(feature,options? : Object) : any; //Object or Undefined;
		getEditSummary(feature,options?) : string;
		getMap() : esri.Map;
		getMaxAllowableOffset() : number;
		getNode() : HTMLElement; // return HTMLElement
		getSelectedFeatures() : esri.Graphic[];
		getSelectionSymbol() : esri.symbol.Symbol;
		getTimeDefinition() : esri.TimeExtent;
		hide() : void;
		isEditable() : boolean;
		isVisibleAtScale(scale : number) : boolean;
		queryAttachmentInfos(objectId : number,callback? : Function, errback? : Function) : dojo.Deferred<any>;
		queryCount(query : esri.tasks.Query, callback? : Function, errback? : Function) : dojo.Deferred<any>;
		queryFeatures(query : esri.tasks.Query, callback? : Function, errback? : Function) : dojo.Deferred<any>;
		queryIds(query : esri.tasks.Query, callback? : Function, errback? : Function) : dojo.Deferred<any>;
		queryRelatedFeatures(relQuery : esri.tasks.RelationshipQuery, callback? : Function,errback? : Function) : dojo.Deferred<any>;
		redraw() : void;
		refresh() : void;
		remove(graphic : esri.Graphic) : esri.Graphic;
		resume() : void;
		selectFeatures(query : esri.tasks.Query,selectionMethod? : number, callback? : Function, errback? : Function) : dojo.Deferred<any>;
		setAutoGeneralize(enable : boolean) : esri.layers.FeatureLayer;
		setDefinitionExpression(expression : string) : esri.layers.FeatureLayer;
		setEditable(editable : boolean) : esri.layers.FeatureLayer;
		setGDBVersion(versionName : string) : esri.layers.FeatureLayer;
		setInfoTemplate(infoTemplate : esri.InfoTemplate) : void;
		setMaxAllowableOffset(offset : number) : void;
		setMaxScale(scale : number) : void;
		setMinScale(scale : number) : void;
		setOpacity(opacity : number) : void;
		setRefreshInterval(interval : number) : esri.layers.Layer;
		setRenderer(renderer : esri.renderer.Renderer) : void;
		setScaleRange(minScale : number, maxScale : number) : void;
		setSelectionSymbol(symbol : esri.symbol.Symbol) : esri.layers.FeatureLayer;
		setTimeDefinition(definition : esri.TimeExtent) : esri.layers.FeatureLayer;
		setTimeOffset(offsetValue,offsetUnits) : esri.layers.FeatureLayer;
		setUseMapTime(update : boolean) : void;
		setVisibility(isVisible : boolean) : void;
		show() : void;
		suspend() : void;
		toJson() : Object;
		//add-attachment-complete : FeatureEditResult;
		//before-apply-edits : Graphic[];
		//capabilities-change : void;
		//click : void;
		//connect : void;
		//dbl-click : <Object> event;
		//delete-attachments-complete : <Object[]> results;
		//disconnect : void;
		//edits-complete : FeatureEditResult[];
		//error : <Error> error;
		//graphic-add : Graphic;
		//graphic-draw : Graphic;
		//graphic-node-add : Graphic;
		//graphic-node-remove : Graphic;
		//graphic-remove : Graphic;
		//graphics-clear : void;
		//load : Layer;
		//message : <;
		//mouse-down : <MouseEvent> mouseEvent;
		//mouse-drag : <MouseEvent> mouseEvent;
		//mouse-move : <MouseEvent> mouseEvent;
		//mouse-out : <MouseEvent> mouseEvent;
		//mouse-over : <MouseEvent> mouseEvent;
		//mouse-up : <MouseEvent> mouseEvent;
		//opacity-change : <Number> opacity;
		//query-attachment-infos-complete : <Object[]> info;
		//query-count-complete : <Number> count;
		//query-features-complete : FeatureSet;
		//query-ids-complete : <Number[]> objectIds;
		//query-limit-exceeded : void;
		//query-related-features-complete : <Object> relatedFeatures;
		//refresh-interval-change : void;
		//remove : Graphic;
		//resume : void;
		//scale-range-change : void;
		//scale-visibility-change : void;
		//selection-clear : void;
		//selection-complete : <;
		//suspend : void;
		//update : Graphic;
		//update-end : <Error> error;
		//update-start : void;
		//visibility-change : <Boolean> visible;
		onAddAttachmentComplete(result : esri.layers.FeatureEditResult) : void;
		onBeforeApplyEdits(adds : esri.Graphic[], updates : esri.Graphic[], deletes : esri.Graphic[]) : void;
		onCapabilitiesChange() : void;
		onClick(event : Object) : void;
		onConnect() : void;
		onDblClick(event : Object) : void;
		onDeleteAttachmentsComplete(results : esri.layers.FeatureEditResult[]) : void;
		onDisconnect() : void;
		onEditsComplete(addResults : esri.layers.FeatureEditResult[], updateResults : esri.layers.FeatureEditResult[], deleteResults : esri.layers.FeatureEditResult[]) : void;
		onError(error : Error) : void;
		onGraphicAdd(graphic : esri.Graphic) : void;
		onGraphicDraw(evt : Object) : void;
		onGraphicNodeAdd(evt : Object) : void;
		onGraphicNodeRemove(evt : Object) : void;
		onGraphicRemove(graphic : esri.Graphic) : void;
		onGraphicsClear() : void;
		onLoad(layer : esri.layers.Layer) : void;
		onMessage(message : Object) : void;
		onMouseDown(event : Object) : void;
		onMouseDrag(event : Object) : void;
		onMouseMove(event : Object) : void;
		onMouseOut(event : Object) : void;
		onMouseOver(event : Object) : void;
		onMouseUp(event : Object) : void;
		onOpacityChange(opacity : number) : void;
		onQueryAttachmentInfosComplete(attachmentInfos : Object[]) : void;
		onQueryCountComplete(count : number) : void;
		onQueryFeaturesComplete(featureSet : esri.tasks.FeatureSet) : void;
		onQueryIdsComplete(ids : number[]) : void;
		onQueryLimitExceeded() : void;
		onQueryRelatedFeaturesComplete(relatedFeatures : Object) : void;
		onRefreshIntervalChange() : void;
		onRemove(message : Object) : void;
		onResume() : void;
		onScaleRangeChange() : void;
		onScaleVisibilityChange() : void;
		onSelectionClear() : void;
		onSelectionComplete(features : esri.Graphic[], selectionMethod : number) : void;
		onSuspend() : void;
		onUpdate(message : Object) : void;
		onUpdateEnd(error :Error, info? : Object) : void;
		onUpdateStart() : void;
		onVisibilityChange(visbility : boolean) : void;
    }
    export class TableDataSource {
        constructor(json?: Object);
        dataSourceName: string;
        gdbVersion: string;
        workspaceId: string;
        toJson(): Object;
    }
    export class TileInfo {
        constructor(properties: Object);
        dpi: number;
        format: string;
        height: number;
        lods: LOD[];
        origin: esri.geometry.Point;
        spatialReference: SpatialReference;
        width: number;
        toJson(): Object;
    }


    export class TiledMapServiceLayer extends esri.layers.Layer {
        attributionDataUrl: string;
        credential: Credential;
        fullExtent: esri.geometry.Extent;
        hasAttributionData: boolean;
        id: string;
        initialExtent: esri.geometry.Extent;
        loaded: boolean;
        maxScale: number;
        minScale: number;
        opacity: number;
		refreshInterval : number;
        showAttribution: boolean;
        spatialReference: SpatialReference;
        suspended: boolean;
        tileInfo: TileInfo;
        url: string;
        visible: boolean;
        visibleAtMapScale: boolean;
		attr(name : string,value : any) : esri.layers.Layer;
        getAttributionData(): dojo.Deferred<any>;
		getMap() : esri.Map;
		getNode() : HTMLElement; // return HTMLElement
        getTileUrl(level: number, row: number, column: number): string;
        hide(): void;
        isVisibleAtScale(scale: number): boolean;
        refresh(): void;
        resume(): void;
        setMaxScale(scale: number): void;
        setMinScale(scale: number): void;
        setOpacity(valueBetweenZeroAndOne : number): void;
		setRefreshInterval(interval : number) : esri.layers.Layer;
        setScaleRange(minScale: number, maxScale: number): void;
        setVisibility(isVisible: boolean): void;
        show(): void;
        suspend(): void;
        onError(error : Error): void;
        onLoad(layer : esri.layers.Layer): void;
        onOpacityChange(opacity: number): void;
		onRefreshIntervalChange() : void;
        onResume(): void;
        onScaleRangeChange(): void;
        onScaleVisibilityChange(): void;
        onSuspend(): void;
        onUpdate(): void;
        onUpdateEnd(error : Error): void;
        onUpdateStart(): void;
        onVisibilityChange(visibility: boolean): void;
        //error : <Error> error;
        //load : Layer;
        //opacity-change : <number> opacity;
        //resume : void;
        //scale-range-change : void;
        //scale-visibility-change : void;
        //suspend : void;
        //update-end : <Error> error;
        //update-start : void;
        //visibility-change : <boolean> visible;
    }
    export class TimeInfo {
        static esriTimeUnitsCenturies: string;
        static esriTimeUnitsDays: string;
        static esriTimeUnitsDecades: string;
        static esriTimeUnitsHours: string;
        static esriTimeUnitsMilliseconds: string;
        static esriTimeUnitsMinutes: string;
        static esriTimeUnitsMonths: string;
        static esriTimeUnitsSeconds: string;
        static esriTimeUnitsUnknown: string;
        static esriTimeUnitsWeeks: string;
        static esriTimeUnitsYears: string;
        endTimeField: string;
        exportOptions: esri.layers.LayerTimeOptions;
        startTimeField: string;
        timeExtent: esri.TimeExtent;
        timeInterval: number;
        timeIntervalUnits: string;
        timeReference: esri.layers.TimeReference;
        trackIdField: string;
    }
    export class TimeReference {
        respectsDaylightSaving: boolean;
        timeZone: string;
    }
    export class WMSLayer {
        constructor(url: string, options? : Object);
        copyright: string;
        description: string;
        extent: esri.geometry.Extent;
        getMapUrl: string;
        imageFormat: string;
        layerInfos: esri.layers.WMSLayerInfo[];
        maxHeight: number;
        maxWidth: number;
        spatialReference: esri.SpatialReference;
        title: string;
        version: string;
        setImageFormat(format: string): void;
        setImageTransparency(backgroundTransparency: boolean): void;
        setVisibleLayers(layers: string[]): void;
    }
    export class WMSLayerInfo {
        constructor(layer : esri.layers.Layer);
        description: string;
        extent: esri.geometry.Extent;
        name: string;
        title: string;
    }
    export class WMTSLayer {
        constructor(url : string, options? : Object);
        copyright: string;
        description: string;
        format: string;
        fullExtent: esri.geometry.Extent;
        initialExtent: esri.geometry.Extent;
        layerInfos: Object[];
        serviceMode: string;
        spatialReference: esri.SpatialReference;
        tileInfo: Object;
        title: string;
        version: string;
        setActiveLayer(wmtsLayerInfo : esri.layers.WMTSLayerInfo): void;
    }
    export class WMTSLayerInfo {
        constructor(options : Object);
    }
    export class WebTiledLayer {
        constructor(urlTemplate: string, options?: Object);
        copyright: string;
        fullExtent: esri.geometry.Extent;
        initialExtent: esri.geometry.Extent;
        spatialReference: esri.SpatialReference;
        tileInfo: esri.layers.TileInfo;
        tileServers: string[];
    }
}

/**
* Renderer Namespace.
*/
declare module esri.renderer {

	interface jsonUtils {
		fromJson(json: Object): Renderer; // return the renderer
	}


    export class ClassBreaksRenderer extends Renderer {
        constructor(defaultSymbol: Object, attributeField: string);
        constructor(json : Object);
        attributeField: string;
        breaks: Object[]; // Deprecated at v2.0, use infos instead. A 2-D array representing defined breaks. The array consists of [minValue,maxValue] pairs.
        classificationMethod: string;
        defaultSymbol: esri.symbol.Symbol;
        infos: Object[];
        normalizationField: string;
        normalizationTotal: number;
        normalizationType: string;
        addBreak(minValueOrInfo: number, maxValue? : number, symbol? : esri.symbol.Symbol): void;
        clearBreaks(): void;
		getBreakIndex(graphic : esri.Graphic) : number;
		getBreakInfo(graphic : esri.Graphic) : Object;
		getRotationAngle(graphic : esri.Graphic) : number;
		getSize(graphic : esri.Graphic) : number;
        getSymbol(graphic: esri.Graphic): esri.symbol.Symbol;
        removeBreak(minValue: number, maxValue: number): void;
        setMaxInclusive(enable: boolean): void;
		setProportionalSymbolInfo(info : Object) : esri.renderer.Renderer;
		setRotationInfo(info : Object) : esri.renderer.Renderer;
        toJson(): Object;
    }
    export class DotDensityRenderer { // extends Renderer ??? Documentation says no : strange...
		constructor(parameters : Object);
		backgroundColor : Dojo.Color;
		dotShape : string;
		dotSize : number;
		dotValue : number;
		fields : Object[];
		outline : esri.symbol.LineSymbol;
		setBackgroundColor(color : Dojo.Color) : void;
		setDotSize(size : number) : void;
		setDotValue(value : number) : void;
		setOutline(outline : esri.symbol.LineSymbol) : void;
    }
    export class Renderer {
        defaultSymbol: esri.symbol.Symbol;
		proportionalSymbol : Object;
		rotationInfo : Object;
		getRotationAngle(graphic : esri.Graphic) : number;
		getSize(graphic : esri.Graphic) : number;
        getSymbol(graphic: esri.Graphic): esri.symbol.Symbol;
		setProportionalSymbolInfo(info : Object) : Renderer;
		setRotationInfo(info : Object) : Renderer;
        toJson(): Object;
    }
    export class ScaleDependentRenderer { // extends Renderer ??? Documentation says no : strange...
		constructor(params : Object);
		rangeType : string;
		rendererInfos : Object;
		addRendererInfo(info : Object) : esri.renderer.ScaleDependentRenderer;
		getRenderInfoByZoom(zoom : number) : Object;
		getRendererInfo(graphic : esri.Graphic) : Object;
		getRendererInfoByScale(scale : number) : Object;
		setRendererInfos(infos : Object) : esri.renderer.ScaleDependentRenderer;
    }
    export class SimpleRenderer extends Renderer {
        constructor(defaultSymbol: esri.symbol.Symbol);
        constructor(json: Object);
        defaultSymbol: esri.symbol.Symbol;
        description: string;
        label: string;
		proportionalSymbol : Object;
		rotationInfo : Object;
        symbol: esri.symbol.Symbol;
		getRotationAngle(graphic : esri.Graphic) : number;
		getSize(graphic : esri.Graphic) : number;
        getSymbol(graphic: esri.Graphic): esri.symbol.Symbol;
		setProportionalSymbolInfo(info : Object) : Renderer;
		setRotationInfo(info : Object) : Renderer;
        toJson(): Object;
    }
    export class SymbolAger {
        getAgedSymbol(symbol: esri.symbol.Symbol, graphic: esri.Graphic): esri.symbol.Symbol;
    }
    export class TemporalRenderer {
// extends Renderer ??? Documentation says no : strange...
        constructor(observationRenderer: esri.renderer.Renderer, latestObservationRenderer?: esri.renderer.Renderer,
            trackRenderer?: esri.renderer.Renderer, observationAger?: esri.renderer.SymbolAger);
        getSymbol(graphic: esri.Graphic): esri.symbol.Symbol;
    }
    export class TimeClassBreaksAger {
// extends SymbolAger {
// extends SymbolAger ??? Previous documentation says yes : now no, strange...
        constructor(infos: Object[]);
        static UNIT_DAYS: string;
        static UNIT_HOURS: string;
        static UNIT_MILLISECONDS: string;
        static UNIT_MINUTES: string;
        static UNIT_MONTHS: string;
        static UNIT_SECONDS: string;
        static UNIT_WEEKS: string;
        static UNIT_YEARS: string;
        getAgedSymbol(symbol: esri.symbol.Symbol, graphic: esri.Graphic): esri.symbol.Symbol;
    }
    export class TimeRampAger {
// extends SymbolAger {
// extends SymbolAger ??? Previous documentation says yes : now no, strange...
        constructor(colorRange?: Dojo.Color, sizeRange?: number[], alphaRange?: number[]);
        getAgedSymbol(symbol: esri.symbol.Symbol, graphic: esri.Graphic): esri.symbol.Symbol;
    }
    export class UniqueValueRenderer extends Renderer { 
        constructor(defaultSymbol: esri.symbol.Symbol, attributeField: string,
            attributeField2?: string, attributeField3?: string, fieldDelimeter?: string);
        constructor(json : Object);
        attributeField: string;
        attributeField2: string;
        attributeField3: string;
        defaultLabel: string;
        defaultSymbol: esri.symbol.Symbol;
        fieldDelimiter: string;
        infos: Object[];
		proportionalSymbol : Object;
		rotationInfo : Object;
        values: string[];
        addValue(valueOrInfo: string, symbol: esri.symbol.Symbol): void;
        // addValue(valueAndSymbolAndLabelAndDescription: Object): void;
		getRotationAngle(graphic : esri.Graphic) : number;
		getSize(graphic : esri.Graphic) : number;
        getSymbol(graphic : esri.Graphic): esri.symbol.Symbol;
		getUniqueValueInfo(graphic : esri.Graphic) : Object;
        removeValue(value: string): void;
		setProportionalSymbolInfo(info : Object) : Renderer;
		setRotationInfo(info : Object) : Renderer;
        toJson(): Object;
    }
}

/**
* Symbol Namespace.
*/
declare module esri.symbol {

	interface jsonUtils {
		fromJson(json : Object): esri.symbol.Symbol;
		getShapeDescriptors(symbol : esri.symbol.Symbol): Object;
	}

    export class CartographicLineSymbol extends SimpleLineSymbol{
        constructor();
        constructor(style?: string, color?: Dojo.Color, width?: number, cap?: string, join?: string, miterLimit?: string);
        constructor(json : Object);
        static CAP_BUTT: string;
        static CAP_ROUND: string;
        static CAP_SQUARE: string;
        static JOIN_MITER: string;
        static JOIN_ROUND: string;
        static JOIN_BEVEL: string;
        static STYLE_SHORTDASH: string;
        static STYLE_SHORTDOT: string;
        static STYLE_SHORTDASHDOT: string;
        static STYLE_SHORTDASHDOTDOT: string;
        static STYLE_LONGDASH: string;
        static STYLE_LONGDASHDOT: string;
        cap: string;
        color: Dojo.Color;
        join: string;
        miterLimit: string;
        style: string;
        type: string;
        width: number;
        setCap(cap: string): CartographicLineSymbol;
        setColor(color: Dojo.Color): esri.symbol.Symbol;
        setJoin(join: string): CartographicLineSymbol;
        setMiterLimit(miterLimit: string): CartographicLineSymbol;
        setStyle(style: string): esri.symbol.SimpleLineSymbol;
        setWidth(width: number): LineSymbol;
        toJson(): Object;
    }
    export class FillSymbol extends Symbol {
        color: Dojo.Color;
        outline: esri.symbol.SimpleLineSymbol;
        type: string;
        setColor(color : Dojo.Color): esri.symbol.Symbol;
        setOutline(outline : esri.symbol.SimpleLineSymbol): esri.symbol.FillSymbol;
        toJson(): Object;
    }
    export class Font {
        constructor();
        constructor(size: number, style: string, variant: string, weight: string, family: string);
		// string for the size, to allow 20pt or 5em size definition
        constructor(size: string, style: string, variant: string, weight: string, family: string);
        constructor(json : Object);
        static STYLE_NORMAL: string;
        static STYLE_ITALIC: string;
        static STYLE_OBLIQUE: string;
        static VARIANT_NORMAL: string;
        static VARIANT_SMALLCAPS: string;
        static WEIGHT_NORMAL: string;
        static WEIGHT_BOLD: string;
        static WEIGHT_BOLDER: string;
        static WEIGHT_LIGHTER: string;
        family: string;
        size: string;
        style: string;
        variant: string;
        weight: string;
        setFamily(): Font;
        setSize(): Font;
        setStyle(): Font;
        setVariant(): Font;
        setWeight(): Font;
    }
    export class LineSymbol extends Symbol {
        color: Dojo.Color;
        type: string;
        width: number;
        setColor(color: Dojo.Color): esri.symbol.Symbol;
        setWidth(width: number): LineSymbol;
        toJson(): Object;
    }
    export class MarkerSymbol extends Symbol {
        angle: number;
        color: Dojo.Color;
        size: number;
        type: string;
        xoffset: number;
        yoffset: number;
        setAngle(angle: number): esri.symbol.MarkerSymbol;
        setColor(color: Dojo.Color): esri.symbol.Symbol;
        setOffset(x: number, y: number): esri.symbol.MarkerSymbol;
        setSize(size: number): esri.symbol.MarkerSymbol;
        toJson(): Object;
    }
    export class PictureFillSymbol extends FillSymbol {
        constructor(url: string, outline : esri.symbol.SimpleLineSymbol, width : number, height : number);
        constructor(json : Object);
        color: Dojo.Color;
        height: number;
        outline: esri.symbol.SimpleLineSymbol;
        type: string;
        url: string;
        width: number;
        xoffset: number;
        xscale: number;
        yoffset: number;
        yscale: number;
        setColor(color: Dojo.Color): esri.symbol.Symbol;
        setHeight(height: number): esri.symbol.PictureFillSymbol;
        setOffset(x: number, y: number): esri.symbol.PictureFillSymbol;
        setOutline(outline: esri.symbol.SimpleLineSymbol): esri.symbol.FillSymbol;
        setUrl(url : string): esri.symbol.PictureFillSymbol;
        setWidth(width: number): esri.symbol.PictureFillSymbol;
        setXScale(scale: number): esri.symbol.PictureFillSymbol;
        setYScale(scale: number): esri.symbol.PictureFillSymbol;
        toJson(): Object;
    }
    export class PictureMarkerSymbol extends MarkerSymbol {
        constructor(url: string, width : number, height : number);
        constructor(json : Object);
        angle: number;
        color: Dojo.Color;
        height: number;
        size: number;
        type: string;
        url: string;
        width: number;
        xoffset: number;
        yoffset: number;
        setAngle(angle: number): esri.symbol.MarkerSymbol;
        setColor(color: Dojo.Color): esri.symbol.Symbol;
        setHeight(height: number): esri.symbol.PictureMarkerSymbol;
        setOffset(x: number, y: number): esri.symbol.MarkerSymbol;
        setSize(size: number): esri.symbol.MarkerSymbol;
        setUrl(url : string): esri.symbol.PictureMarkerSymbol;
        setWidth(width: number): esri.symbol.PictureMarkerSymbol;
        toJson(): Object;
    }
    export class SimpleFillSymbol extends FillSymbol {
        constructor();
        constructor(style: string, outline: esri.symbol.SimpleLineSymbol, color: Dojo.Color);
        constructor(json : Object);
        static STYLE_SOLID: string;
        static STYLE_NULL: string;
        static STYLE_HORIZONTAL: string;
        static STYLE_VERTICAL: string;
        static STYLE_FORWARD_DIAGONAL: string;
        static STYLE_BACKWARD_DIAGONAL: string;
        static STYLE_CROSS: string;
        static STYLE_DIAGONAL_CROSS: string;
        color: Dojo.Color;
        outline: esri.symbol.SimpleLineSymbol;
        style: string;
        type: string;
        setColor(color: Dojo.Color): esri.symbol.Symbol;
        setOutline(outline : esri.symbol.SimpleLineSymbol): esri.symbol.FillSymbol;
        setStyle(style: string): esri.symbol.SimpleFillSymbol;
        toJson(): Object;
    }
    export class SimpleLineSymbol extends LineSymbol {
        constructor();
        constructor(style: string, color: Dojo.Color, width: number);
        constructor(json : Object);
        static STYLE_SOLID: string;
        static STYLE_DASH: string;
        static STYLE_DOT: string;
        static STYLE_DASHDOTDOT: string;
        static STYLE_NULL: string;
        static STYLE_DASHDOT: string;
        static STYLE_SHORTDASH: string;
        static STYLE_SHORTDOT: string;
        static STYLE_SHORTDASHDOTDOT: string;
        static STYLE_SHORTDASHDOT: string;
        static STYLE_LONGDASH: string;
        static STYLE_LONGDASHDOT: string;
        color: Dojo.Color;
        style: string;
        type: string;
        width: number;
        setColor(color: Dojo.Color): esri.symbol.Symbol;
        setStyle(style: string): esri.symbol.SimpleLineSymbol;
        setWidth(width: number): esri.symbol.LineSymbol;
        toJson(): Object;
    }
    export class SimpleMarkerSymbol extends MarkerSymbol {
        constructor();
        constructor(style: string, size: number, outline: esri.symbol.SimpleLineSymbol, color: Dojo.Color);
        constructor(json : Object);
        static STYLE_CIRCLE: string;
        static STYLE_SQUARE: string;
        static STYLE_CROSS: string;
        static STYLE_X: string;
        static STYLE_DIAMOND: string;
        static STYLE_PATH: string;
        angle: number;
        color: Dojo.Color;
        outline: esri.symbol.SimpleLineSymbol;
        size: number;
        style: string;
        type: string;
        xoffset: number;
        yoffset: number;
        setAngle(angle: number): MarkerSymbol;
        setColor(color: Dojo.Color): esri.symbol.Symbol;
        setOffset(x: number, y: number): MarkerSymbol;
        setOutline(outline: esri.symbol.SimpleLineSymbol): esri.symbol.SimpleMarkerSymbol;
        setPath(path: string): esri.symbol.SimpleMarkerSymbol;
        setSize(size: number): MarkerSymbol;
        setStyle(style: string): esri.symbol.SimpleMarkerSymbol;
        toJson(): Object;
    }
    export class Symbol {
        color: Dojo.Color;
        type: string;
        setColor(color: Dojo.Color): esri.symbol.Symbol;
        toJson(): Object;
    }
    export class TextSymbol extends Symbol {
        constructor(text: string);
        constructor(text: string, font: esri.symbol.Font, color: Dojo.Color);
        constructor(json: Object);
        static ALIGN_START: string;
        static ALIGN_MIDDLE: string;
        static ALIGN_END: string;
        static DECORATION_NONE: string;
        static DECORATION_UNDERLINE: string;
        static DECORATION_OVERLINE: string;
        static DECORATION_LINETHROUGH: string;
        align: string;
        angle: number;
        color: Dojo.Color;
        decoration: string;
        font: Font;
        kerning: boolean;
        rotated: boolean;
        text: string;
        type: string;
        xoffset: number;
        yoffset: number;
        setAlign(align: string): esri.symbol.TextSymbol;
        setAngle(angle: number): esri.symbol.TextSymbol;
        setColor(color: Dojo.Color): esri.symbol.Symbol;
        setDecoration(decoration: string): esri.symbol.TextSymbol;
        setFont(font: esri.symbol.Font): esri.symbol.TextSymbol;
        setKerning(kerning: boolean): esri.symbol.TextSymbol;
        setOffset(x: number, y: number): esri.symbol.TextSymbol;
        setRotated(rotated: boolean): esri.symbol.TextSymbol;
        setText(text: string): esri.symbol.TextSymbol;
        toJson(): Object;
    }
}

/**
* Tasks Namespace.
*/
declare module esri.tasks {
    export class AddressCandidate {
        address: Object;
        attributes: Object;
        location: esri.geometry.Point;
        score: number;
    }
    export class AlgorithmicColorRamp extends ColorRamp {
        constructor();
        algorithim: string;
        fromColor: Dojo.Color;
        toColor: Dojo.Color;
        toJson(): Object;
    }
    export class AreasAndLengthsParameters {
        constructor();
        areaUnit: string; // esri.tasks.GeometryService;
        calculationType: string;
        lengthUnit: string; // esri.tasks.GeometryService;
        polygons: esri.geometry.Geometry[];
    }
    export class BufferParameters {
        constructor();
        bufferSpatialReference: esri.SpatialReference;
        distances: number[];
        geodesic: boolean;
        geometries: esri.geometry.Geometry[];
        outSpatialReference: esri.SpatialReference;
        unionResults: boolean;
        unit: string;
    }
    export class ClassBreaksDefinition {
        constructor();
        baseSymbol: esri.symbol.Symbol;
        breakCount: number;
        classificationField: string;
        classificationMethod: string;
        colorRamp: any; //AlgorithmicColorRamp || MultipartColorRamp;
        normalizationField: string;
        normalizationType: string;
        standardDeviationInterval: number;
        toJson(): Object;
    }
    export class ClassificationDefinition {
        baseSymbol: esri.symbol.Symbol;
        colorRamp: any; //AlgorithmicColorRamp || MultipartColorRamp;
        type: string;
    }
    export class ClosestFacilityParameters {
        constructor();
        accumulateAttributes: string[];
        attributeParameterValues: Object[];
        defaultCutoff: number;
        defaultTargetFacilityCount: number;
        directionsLanguage: string;
        directionsLengthUnits: string;
        directionsOutputType: string;
        directionsStyleName: string;
        directionsTimeAttribute: string;
        doNotLocateOnRestrictedElements: boolean;
        facilities: Object;
        impedenceAttribute: string;
        incidents: Object;
        outSpatialReference: esri.SpatialReference;
        outputGeometryPrecision: number;
        outputGeometryPrecisionUnits: string;
        outputLines: string;
        pointBarriers: Object;
        polygonBarriers: Object;
        polylineBarriers: Object;
        restrictUTurns: string;
        restrictionAttributes: string[];
        returnDirections: boolean;
        returnFacilities: boolean;
        returnIncidents: boolean;
        returnPointBarriers: boolean;
        returnPolygonBarriers: boolean;
        returnPolylineBarriers: boolean;
        returnRoutes: boolean;
        timeOfDay: esri.tasks.Date;
        timeOfDayUsage: string;
        travelDirection: string;
        useHierarchy: boolean;
    }
    export class ClosestFacilitySolveResult {
        directions: esri.tasks.DirectionsFeatureSet;
        facilities: esri.geometry.Point[];
        incidents: esri.geometry.Point[];
        messages: esri.tasks.NAMessage;
        pointBarriers: esri.geometry.Point[];
        polygonBarriers: esri.geometry.Polygon[];
        polylineBarriers: esri.geometry.Polyline[];
        routes: esri.Graphic[];
    }
    export class ClosestFacilityTask {
        constructor(url?: string);
        solve(params: esri.tasks.ClosestFacilityParameters, callback?: Function, errback?: Function): dojo.Deferred<any>;
        onSolveComplete(closestFacilitySolveResult: esri.tasks.ClosestFacilitySolveResult): void;
        // solve-complete : <ClosestFacilityResult> result;
    }
    export class DataFile {
        constructor();
        itemID: string;
        url: string;
    }
    export class DataLayer {
        constructor();
        static SPATIAL_REL_INTERSECTS: string;
        static SPATIAL_REL_CONTAINS: string;
        static SPATIAL_REL_CROSSES: string;
        static SPATIAL_REL_ENVELOPEINTERSECTS: string;
        static SPATIAL_REL_INDEXINTERSECTS: string;
        static SPATIAL_REL_OVERLAPS: string;
        static SPATIAL_REL_TOUCHES: string;
        static SPATIAL_REL_WITHIN: string;
        geometry: esri.geometry.Geometry;
        name: string;
        spatialRelationship: string;
        where: string;
    }
    export class Date {
        constructor();
        date: esri.tasks.Date;
        format: string;
    }
    export class DirectionsFeatureSet extends FeatureSet {
        displayFieldName: string;
        exceededTransferLimit: number;
        extent: esri.geometry.Extent;
        features: Graphic[];
        fieldAliases: Object;
        geometryType: string;
        mergedGeometry: esri.geometry.Polyline;
        routeId: string;
        routeName: string;
        spatialReference: esri.SpatialReference;
        strings: Object[];
        totalDriveTime: number;
        totalLength: number;
        totalTime: number;
    }
    export class DistanceParameters {
        constructor();
        distanceUnit: string; // esri.tasks.GeometryService Constant.
        geodesic: boolean;
        geometry1: esri.geometry.Geometry;
        geometry2: esri.geometry.Geometry;
    }
    export class FeatureSet {
        constructor();
        constructor(json : Object);
        displayFieldName: string;
        exceededTransferLimit: number;
        features: esri.Graphic[];
        fieldAliases: Object;
        geometryType: string;
        spatialReference: esri.SpatialReference;
    }
    export class FindParameters {
        constructor();
        contains: boolean;
        dynamicLayerInfos: esri.layers.DynamicLayerInfo[];
        layerDefinitions: string[];
        layerIds: number[];
        maxAllowableOffset: number;
        outSpatialReference: esri.SpatialReference;
        returnGeometry: boolean;
        searchFields: string[];
        searchText: string;
    }
    export class FindResult {
        displayFieldName: string;
        feature: esri.Graphic;
        foundFieldName: string;
        layerId: number;
        layerName: string;
    }
    export class FindTask {
        constructor(url: string, options?: Object);
        url: string;
        execute(findParameters: esri.tasks.FindParameters, callback?: Function, errback?: Function): dojo.Deferred<any>;
        onComplete(findResults: esri.tasks.FindResult[]): void;
        onError(error: Error): void;
        //complete: FindResult[];
    }
    export class GPMessage {
        static TYPE_ABORT: string;
        static TYPE_EMPTY: string;
        static TYPE_ERROR: string;
        static TYPE_INFORMATIVE: string;
        static TYPE_PROCESS_DEFINITION: string;
        static TYPE_PROCESS_START: string;
        static TYPE_PROCESS_STOP: string;
        static TYPE_WARNING: string;
        description: string;
        type: number;
    }
    export class GeneralizeParameters {
        constructor();
        deviationUnit: string; // esri.tasks.GeometryService Constant.
        geometries: esri.geometry.Geometry[];
        maxDeviation: number;
    }
    export class GenerateRendererParameters {
        constructor();
        classificationDefinition: esri.tasks.ClassificationDefinition;
        where: string;
    }
    export class GenerateRendererTask {
        constructor(url: string, options?: Object);
        execute(generateRendererParameters : esri.tasks.GenerateRendererParameters, callback?: Function, errback?: Function): dojo.Deferred<any>;
        onComplete(renderer : esri.renderer.Renderer): void;
        onError(error: Error): void;
        // complete: esri.renderer.Renderer;
    }
    export class GeometryService {
        constructor(url : string);
        static UNIT_FOOT: string;
        static UNIT_KILOMETER: string;
        static UNIT_METER: string;
        static UNIT_NAUTICAL_MILE: string;
        static UNIT_STATUTE_MILE: string;
        static UNIT_US_NAUTICAL_MILE: string;
        static UNIT_SQUARE_INCHES: string;
        static UNIT_SQUARE_FEET: string;
        static UNIT_SQUARE_YARDS: string;
        static UNIT_ACRES: string;
        static UNIT_SQUARE_MILES: string;
        static UNIT_SQUARE_MILLIMETERS: string;
        static UNIT_SQUARE_CENTIMETERS: string;
        static UNIT_SQUARE_DECIMETERS: string;
        static UNIT_SQUARE_METERS: string;
        static UNIT_ARES: string;
        static UNIT_HECTARES: string;
        static UNIT_SQUARE_KILOMETERS: string;
        url: string;
        areasAndLengths(areasAndLengthsParameters: esri.tasks.AreasAndLengthsParameters, callback?: Function, errback?: Function): dojo.Deferred<any>;
        autoComplete(polygons: esri.geometry.Polygon[], polylines: esri.geometry.Polyline[], callback?: Function, errback?: Function): dojo.Deferred<any>;
        buffer(bufferParameter: esri.tasks.BufferParameters, callback?: Function, errback?: Function): dojo.Deferred<any>;
        convexHull(geometries: esri.geometry.Geometry[], callback?: Function, errback?: Function): dojo.Deferred<any>;
        cut(geometries: esri.geometry.Geometry[], cutterGeometry: esri.geometry.Geometry, callback?: Function, errback?: Function): dojo.Deferred<any>;
        difference(geometries: esri.geometry.Geometry[], geometry: esri.geometry.Geometry, callback?: Function, errback?: Function): dojo.Deferred<any>;
        distance(params: esri.tasks.DistanceParameters, callback?: Function, errback?: Function): dojo.Deferred<any>;
        generalize(params:esri.tasks.GeneralizeParameters, callback?: Function, errback?: Function): dojo.Deferred<any>;
        intersect(geometries: esri.geometry.Geometry[], geometry: esri.geometry.Geometry, callback?: Function, errback?: Function): dojo.Deferred<any>;
        labelPoints(polygons: esri.geometry.Geometry[], callback?: Function, errback?: Function): dojo.Deferred<any>;
        lengths(lengthsParameter: esri.tasks.LengthsParameters, callback?: Function, errback?: Function): dojo.Deferred<any>;
        offset(params: esri.tasks.OffsetParameters, callback?: Function, errback?: Function): dojo.Deferred<any>;
        project(params: esri.tasks.ProjectParameters, callback?: Function, errback?: Function): dojo.Deferred<any>;
        relation(relationParameters: esri.tasks.RelationParameters, callback?: Function, errback?: Function): dojo.Deferred<any>;
        reshape(targetGeometry: esri.geometry.Geometry, reshaperGeometry: esri.geometry.Geometry, callback?: Function, errback?: Function): dojo.Deferred<any>;
        simplify(geometries: esri.geometry.Geometry[], callback?: Function, errback?: Function): dojo.Deferred<any>;
        trimExtend(params: esri.tasks.TrimExtendParameters, callback?: Function, errback?: Function): dojo.Deferred<any>;
        union(geometries: esri.geometry.Geometry[], callback?: Function, errback?: Function): dojo.Deferred<any>;
        onAreasAndLengthsComplete(areasAndLengths: Object): void;
        onAutoCompleteComplete(polygons: esri.geometry.Polygon[]): void;
        onBufferComplete(geometries: esri.geometry.Geometry[]): void;
        onConvexHullComplete(geometry: esri.geometry.Geometry): void;
        onCutComplete(results: Object): void;
        onDifferenceComplete(geometries: esri.geometry.Geometry[]): void;
        onDistanceComplete(distance: number): void;
        onError(error: Error): void;
        onGeneralizeComplete(geometries: esri.geometry.Geometry[]): void;
        onIntersectComplete(geometries: esri.geometry.Geometry[]): void;
        onLabelPointsComplete(labelPoints: esri.geometry.Geometry[]): void;
        onLengthsComplete(lengths: Object): void;
        onOffsetComplete(geometries: esri.geometry.Geometry[]): void;
        onProjectComplete(geometries: esri.geometry.Geometry[]): void;
        onRelationComplete(relationships: Object[]): void;
        onReshapeComplete(geometry: esri.geometry.Geometry): void;
        onSimplifyComplete(geometries: esri.geometry.Geometry[]): void;
        onTrimExtendComplete(geometries: esri.geometry.Geometry[]): void;
        onUnionComplete(geometry: esri.geometry.Geometry): void;
        //    areas-and - lengths-complete : <Object> result;
        //auto - complete-complete : esri.geometry.Polygon[];
        //convex - hull-complete : esri.geometry.Geometry;
        //		cut-complete : <Object> result;
        //		difference-complete : esri.geometry.Geometry[];
        //		distance-complete : <number> distance;
        //error: void;
        //		generalize-complete : esri.geometry.Geometry[];
        //		intersect-complete : esri.geometry.Geometry[];
        //label - points-complete  : esri.geometry.Geometry[];
        //		lengths-complete : <Object> result;
        //		offset-complete : esri.geometry.Geometry[];
        //		relation-complete : void;
        //		reshape-complete : esri.geometry.Geometry;
        //		simplify-complete : esri.geometry.Geometry[];
        //trim - extend-complete : esri.geometry.Geometry[];
        //		union-complete : esri.geometry.Geometry;
    }

    export class Geoprocessor {
        constructor(url : string);
        outSpatialReference: esri.SpatialReference;
        outputSpatialReference: esri.SpatialReference; // depracted since 2.0 => use outSpatialReference instead.
        processSpatialReference: esri.SpatialReference;
        updateDelay: number;
        url: string;
        cancelJob(jobId: string, callback: Function, errback: Function): dojo.Deferred<any>;
        cancelJobStatusUpdates(jobId: string): void;
        checkJobStatus(jobId: string, callback?: Function, errback?: Function): void;
        execute(inputParameters: Object, callback?: Function, errback?: Function): dojo.Deferred<any>;
        getResultData(jobId: string, parameterName: string, callback?: Function, errback?: Function): dojo.Deferred<any>;
        getResultImage(jobId: string, parameterName: string, imageParameters: esri.tasks.IdentifyParameters, callback?: Function, errback?: Function): dojo.Deferred<any>;
        getResultImageLayer(jobId: string, parameterName: string, imageParameters: esri.tasks.IdentifyParameters, callback?: Function, errback?: Function): void;
        setOutSpatialReference(spatialReference: esri.SpatialReference): void;
        setOutputSpatialReference(spatialReference: esri.SpatialReference): void;
        setProcessSpatialReference(spatialReference: esri.SpatialReference): void;
        setUpdateDelay(delay: number): void;
        submitJob(inputParameters: Object, callback?: Function, statuscallback?: Function, errback?: Function): void;
        onError(error: Error): void;
        onExecuteComplete(results: esri.tasks.ParameterValue[], messages: esri.tasks.GPMessage[]): void;
        onGetResultDataComplete(result: esri.tasks.ParameterValue): void;
        onGetResultImageComplete(mapImage: esri.layers.MapImage): void;
        onGetResultImageLayerComplete(AGSDynamicMapServiceLayer: esri.layers.Layer): void;
        onJobCancel(status: Object): void;
        onJobComplete(status: esri.tasks.JobInfo): void;
        onStatusUpdate(status: esri.tasks.JobInfo): void;
        //execute-complete : ParameterValue[]; // TODO : remove all CSS stuff
        //		get - result - data-complete : ParameterValue;
        //get - result - image-complete : MapImage;
        //get - result - image - layer-complete : void;
        //		job-cancel : void;
        //		job-complete : void;
        //		status-update : void;
    }
    export class IdentifyParameters {
        constructor();
        static LAYER_OPTION_TOP: string;
        static LAYER_OPTION_VISIBLE: string;
        static LAYER_OPTION_ALL: string;
        dpi: number;
        dynamicLayerInfos: esri.layers.DynamicLayerInfo[];
        geometry: esri.geometry.Geometry;
        height: number;
        layerDefinitions: string[];
        layerIds: number[];
        layerOption: string;
        layerTimeOptions: esri.layers.LayerTimeOptions[];
        mapExtent: esri.geometry.Extent;
        maxAllowableOffset: number;
        returnGeometry: boolean;
        spatialReference: esri.SpatialReference;
        timeExtent: esri.TimeExtent;
        tolerance: number;
        width: number;
    }
    export class IdentifyResult {
        displayFieldName: string;
        feature: esri.Graphic;
        layerId: number;
        layerName: string;
    }
    export class IdentifyTask {
        constructor(url: string, options?: Object);
        url: string;
        execute(identifyParameters: esri.tasks.IdentifyParameters, callback?: Function, errback?: Function): dojo.Deferred<any>;
        onComplete(identifyResults: esri.tasks.IdentifyResult[]): void;
        onError(error: Error): void;
        // complete: IdentifyResult[];
    }
    export class ImageServiceIdentifyParameters {
        constructor();
        geometry: esri.geometry.Geometry;
        mosaicRule: esri.layers.MosaicRule;
		noData : any; // String | Number;
		noDataInterpretation : string; // Added at v3.6
        pixelSize: esri.symbol.Symbol;
        pixelSizeX: number;
        pixelSizeY: number;
		renderingRule : esri.layers.RasterFunction;
		returnCatalogItems : boolean;
        returnGeometry: boolean;
        timeExtent: esri.TimeExtent;
    }
    export class ImageServiceIdentifyResult {
        catalogItemVisibilities: number[];
        catalogItems: esri.tasks.FeatureSet;
        location: esri.geometry.Point;
        name: string;
        objectId: number;
        properties: Object;
        value: string;
    }
    export class ImageServiceIdentifyTask {
        constructor(url: string);
        execute(params: esri.tasks.ImageServiceIdentifyParameters, callback?: Function, errback?: Function): dojo.Deferred<any>;
        onComplete(imageServiceIdentifyResult: esri.tasks.ImageServiceIdentifyResult): void;
        // complete: ImageServiceIdentifyResult; // Event to remove TODO : F.Leray
    }
    export class JobInfo {
        esriJobCancelled: string;
        esriJobCancelling: string;
        esriJobDeleted: string;
        esriJobDeleting: string;
        esriJobExecuting: string;
        esriJobFailed: string;
        esriJobNew: string;
        esriJobSubmitted: string;
        esriJobSucceeded: string;
        esriJobTimedOut: string;
        esriJobWaiting: string;
        jobId: string;
        jobStatus: string;
        messages: esri.tasks.GPMessage[];
    }
    export class LegendLayer {
        constructor();
        layerId: string;
        subLayerIds: string[];
    }
    export class LengthsParameters {
        constructor();
        calculationType: string; // planar, geodesic or preserveShape.
        geodesic: boolean; // Note:If you are using an ArcGIS Server 10.1 or greater then use the calculationType property instead.
        lengthUnit: string; // esri.tasks.GeometryService constant; Sample value : esri.tasks.GeometryService.UNIT_METER;
        polylines: esri.geometry.Geometry[];
    }
    export class LinearUnit {
        constructor();
        distance: number;
        units: string; // esriMeters, esriMiles or esriKilometers
    }
    export class Locator {
        constructor(url: string);
        outSpatialReference: SpatialReference;
        url: string;
        addressToLocations(params: Object, callback?: Function, errback?: Function): dojo.Deferred<any>;
        addressesToLocations(params: Object, callback?: Function, errback?: Function): dojo.Deferred<any>;
        locationToAddress(location : esri.geometry.Point, distance: number, callback?: Function, errback?: Function): dojo.Deferred<any>;
        setOutSpatialReference(spatialReference: esri.SpatialReference): void;
        onAddressToLocationsComplete(addressCandidates: esri.tasks.AddressCandidate[]): void;
        onAddressesToLocationsComplete(addressCandidates: esri.tasks.AddressCandidate[]): void;
        onError(error: Error): void;
        onLocationToAddressComplete(addressCandidate: esri.tasks.AddressCandidate): void;
        //address-to - locations-complete : AddressCandidate[]; // TODO : remove all CSS stuff
        //addresses-to - locations-complete : AddressCandidate[];
        //location-to - address-complete : AddressCandidate;
    }

	export class ColorRamp {
		constructor();
	}

    export class MultipartColorRamp extends ColorRamp {
        constructor();
        colorRamps: esri.tasks.AlgorithmicColorRamp[];
        toJson(): Object;
    }
    export class NAMessage {
        static TYPE_ABORT: string;
        static TYPE_EMPTY: string;
        static TYPE_ERROR: string;
        static TYPE_INFORMATIVE: string;
        static TYPE_PROCESS_DEFINITION: string;
        static TYPE_PROCESS_START: string;
        static TYPE_PROCESS_STOP: string;
        static TYPE_WARNING: string;
        description: string;
        type: number;
    }
    export class NAOutputLine {
        static NONE: string;
        static STRAIGHT: string;
        static TRUE_SHAPE: string;
        static TRUE_SHAPE_WITH_MEASURE: string;
    }
    export class NAOutputPolygon {
        static NONE: string;
        static SIMPLIFIED: string;
        static DETAILED: string;
    }
    export class NATravelDirection {
        static FROM_FACILITY: string;
        static TO_FACILITY: string;
    }
    export class NAUTurn {
        static ALLOW_BACKTRACK: string;
        static AT_DEAD_ENDS_ONLY: string;
        static NO_BACKTRACK: string;
        static AT_DEAD_ENDS_AND_INTERSECTIONS: string;
    }
    export class OffsetParameters {
        constructor();
        bevelRatio: number;
        geometries: esri.geometry.Geometry[];
        offsetDistance: number;
        offsetHow: string; // esriGeometryOffsetBevelled, esriGeometryOffsetMitered or esriGeometryOffsetRounded.
        offsetUnit: string;
    }
    export class ParameterValue {
        dataType: string;
        paramName: string;
        value: Object;
    }
    export class PrintParameters {
        constructor();
        extraParameters: Object;
        map: esri.Map;
        outSpatialReference: esri.SpatialReference;
        template: esri.tasks.PrintTemplate;
    }
    export class PrintTask {
        constructor(url: string, params: Object);
        url: string;
        execute(printParameters: esri.tasks.PrintParameters, callback?: Function, errback?: Function): dojo.Deferred<any>;
        onComplete(result: Object): void;
        onError(error: Error): void;
        // complete: <String> url;
    }
    export class PrintTemplate {
        constructor();
        exportOptions: Object;
        format: string;
        label: string;
        layout: string;
        layoutOptions: Object;
        preserveScale: boolean;
        showAttribution: boolean;
    }
    export class ProjectParameters {
        constructor();
        geometries: esri.geometry.Geometry[];
        outSR: esri.SpatialReference;
        transformation: Object;
        transformationForward: boolean;
    }
    export class Query {
        constructor();
        static SPATIAL_REL_INTERSECTS: string;
        static SPATIAL_REL_CONTAINS: string;
        static SPATIAL_REL_CROSSES: string;
        static SPATIAL_REL_ENVELOPEINTERSECTS: string;
        static SPATIAL_REL_INDEXINTERSECTS: string;
        static SPATIAL_REL_OVERLAPS: string;
        static SPATIAL_REL_TOUCHES: string;
        static SPATIAL_REL_WITHIN: string;
        static SPATIAL_REL_RELATION: string;
        geometry: esri.geometry.Geometry;
        geometryPrecision: number;
        groupByFieldsForStatistics: string[];
        maxAllowableOffset: number;
        objectIds: number[];
        orderByFields: string[];
        outFields: string[];
        outSpatialReference: esri.SpatialReference;
        outStatistics: esri.tasks.StatisticDefinition[];
        pixelSize: esri.symbol.Symbol;
        relationParam: string;
        returnGeometry: boolean;
        spatialRelationship: string;
        text: string;
        timeExtent: TimeExtent;
        where: string;
    }
    export class QueryTask {
        constructor(url: string, options?: Object);
        url: string;
        execute(parameters: esri.tasks.Query, callback?: Function, errback?: Function): dojo.Deferred<any>;
        executeForCount(query: esri.tasks.Query, callback?: Function, errback?: Function): dojo.Deferred<any>;
        executeForIds(parameters: esri.tasks.Query, callback?: Function, errback?: Function): dojo.Deferred<any>;
        executeRelationshipQuery(parameters: esri.tasks.RelationshipQuery, callback?: Function, errback?: Function): dojo.Deferred<any>;
        onComplete(featureSet: esri.tasks.FeatureSet): void;
        onError(error: Error): void;
        onExecuteForCountComplete(count: number): void;
        onExecuteForIdsComplete(featureIds: number[]): void;
        onExecuteRelationshipQueryComplete(relatedFeatureSets: Object): void;
        //    complete: FeatureSet;
        //    execute-for-count-complete : <number> count;
        //		execute-for-ids-complete : <number[]> objectIds;
        //execute - relationship - query-complete : FeatureSet[];
    }
    export class RasterData {
        constructor();
        format: string;
        itemID: string;
        url: string;
    }
    export class RelationParameters {
        constructor();
        static SPATIAL_REL_COINCIDENCE: string;
        static SPATIAL_REL_CROSS: string;
        static SPATIAL_REL_DISJOINT: string;
        static SPATIAL_REL_IN: string;
        static SPATIAL_REL_INTERIORINTERSECTION: string;
        static SPATIAL_REL_INTERSECTION: string;
        static SPATIAL_REL_LINETOUCH: string;
        static SPATIAL_REL_OVERLAP: string;
        static SPATIAL_REL_POINTTOUCH: string;
        static SPATIAL_REL_RELATION: string;
        static SPATIAL_REL_TOUCH: string;
        static SPATIAL_REL_WITHIN: string;
        geometries1: esri.geometry.Geometry[];
        geometries2: esri.geometry.Geometry[];
        relation: esri.tasks.RelationParameters;
        relationParam: string;
    }
    export class RelationshipQuery {
        constructor();
        definitionExpression: string;
        geometryPrecision: number;
        maxAllowableOffset: number;
        objectIds: number[];
        outFields: string[];    
        outSpatialReference: esri.SpatialReference;
        relationshipId: number;
        returnGeometry: boolean;
    }
    export class RouteParameters {
        constructor();
        accumulateAttributes: string[];
        attributeParameterValues: Object[];
        barriers: Object;
        directionsLanguage: string;
        directionsLengthUnits: string;
        directionsOutputType: string;
        directionsStyleName: string;
        directionsTimeAttribute: string;
        doNotLocateOnRestrictedElements: boolean;
        findBestSequence: boolean;
        ignoreInvalidLocations: boolean;
        impedanceAttribute: string;
        outSpatialReference: esri.SpatialReference;
        outputGeometryPrecision: number;
        outputGeometryPrecisionUnits: string;
        outputLines: string;
        polygonBarriers: Object;
        polylineBarriers: Object;
        preserveFirstStop: boolean;
        preserveLastStop: boolean;
        restrictUTurns: string;
        restrictionAttributes: string[];
        returnBarriers: boolean;
        returnDirections: boolean;
        returnPolygonBarriers: boolean;
        returnPolylineBarriers: boolean;
        returnRoutes: boolean;
        returnStops: boolean;
        startTime: esri.tasks.Date;
        stops: Object;
        useHierarchy: boolean;
        useTimeWindows: boolean;
    }
    export class RouteResult {
        directions: esri.tasks.DirectionsFeatureSet;
        route: esri.Graphic;
        routeName: string;
        stops: esri.Graphic[];
    }
    export class RouteTask {
        constructor(url: string);
        url: string;
        solve(params: esri.tasks.RouteParameters, callback?: Function, errback?: Function): dojo.Deferred<any>;
        onError(error: Error): void;
        onSolveComplete(solveResults: Object): void;
        // solve-complete : <Object> result;
    }
    export class ServiceAreaParameters {
        constructor();
        accumulateAttributes: string[];
        attributeParameterValues: Object[];
        defaultBreaks: number[];
        doNotLocateOnRestrictedElements: boolean;
        excludeSourcesFromPolygons: string[];
        facilities: Object;
        impedanceAttribute: string;
        mergeSimilarPolygonRanges: boolean;
        outSpatialReference: esri.SpatialReference;
        outputGeometryPrecision: number;
        outputGeometryPrecisionUnits: string;
        outputLines: string;
        outputPolygons: string;
        overlapLines: boolean;
        overlapPolygons: boolean;
        pointBarriers: Object;
        polygonBarriers: Object;
        polylineBarriers: Object;
        restrictUTurns: string;
        restrictionAttributes: string[];
        returnFacilities: boolean;
        returnPointBarriers: boolean;
        returnPolygonBarriers: boolean;
        returnPolylineBarriers: boolean;
        splitLinesAtBreaks: boolean;
        splitPolygonsAtBreaks: boolean;
        timeOfDay: esri.tasks.Date;
        travelDirection: string;
        trimOuterPolygon: boolean;
        trimPolygonDistance: number;
        trimPolygonDistanceUnits: string;
        useHierarchy: boolean;
    }
    export class ServiceAreaSolveResult {
        facilities: esri.geometry.Point[];
        messages: esri.tasks.NAMessage;
        pointBarriers: esri.geometry.Point[];
        polygonBarriers: esri.geometry.Polygon[];
        polylineBarriers: esri.geometry.Polyline[];
        serviceAreaPolygons: esri.Graphic[];
        serviceAreaPolylines: esri.Graphic[];
    }
    export class ServiceAreaTask {
        constructor();
        solve(params: esri.tasks.ServiceAreaParameters, callback?: Function, errback?: Function): dojo.Deferred<any>;
        onSolveComplete(serviceAreaSolveResult: esri.tasks.ServiceAreaSolveResult): void;
        //solve-complete : <ServiceAreaResult> result;
    }
    export class StatisticDefinition {
        constructor();
        onStatisticField: string;
        outStatisticFieldName: string;
        statisticType: string;
    }
    export class TrimExtendParameters {
        constructor();
        extendHow: string;
        polylines: esri.geometry.Polyline[];
        trimExtendTo: esri.geometry.Polyline;
    }
    export class UniqueValueDefinition {
        constructor();
        attributeField: string;
        attributeField2: string;
        attributeField3: string;
        baseSymbol: esri.symbol.Symbol;
        colorRamp: any; //AlgorithmicColorRamp || MultiFieldColorRamp;
        toJson(): Object;
    }
}

/**
* Tasks.GeoEnrichment Namespace.
*/
declare module esri.tasks.geoenrichment {
    export class DriveBuffer {
		constructor(params : Object);
		radius : number[];
		units : any; // string or DriveUnits;
    }
    export class DriveUnits {
		static ACRES : string;
		static ARES : string;
		static CENTIMETERS : string;
		static DECIMAL_DEGREES : string;
		static DECIMETERS : string;
		static DEGREE_MINUTE_SECONDS : string;
		static FEET : string;
		static HECTARES : string;
		static INCHES : string;
		static KILOMETERS : string;
		static METERS : string;
		static MILES : string;
		static MILLIMETERS : string;
		static MINUTES : string;
		static NAUTICAL_MILES : string;
		static POINTS : string;
		static SQUARE_CENTIMETERS : string;
		static SQUARE_DECIMETERS : string;
		static SQUARE_FEET : string;
		static SQUARE_INCHES : string;
		static SQUARE_KILOMETERS : string;
		static SQUARE_METERS : string;
		static SQUARE_MILES : string;
		static SQUARE_MILLIMETERS : string;
		static SQUARE_YARDS : string;
		static UNKNOWN : string;
		static YARDS : string;
    }
    export class GeographyLevel { // Class added 3.6
		constructor(json? : Object);
		countryID : string;
		datasetID : string;
		layerID : string;
    }
    export class GeometryStudyArea {
		constructor(json : Object);
		attributes : string;
		comparisonGeographyLevels : esri.tasks.geoenrichment.GeographyLevel[];
		geometry : esri.geometry.Geometry;
		options : esri.tasks.geoenrichment.RingBuffer;
		returnGeometry : boolean;
		toJson() : Object;
    }
    export class IntersectingGeographies {
		levels : esri.tasks.geoenrichment.GeographyLevel[];
    }
    export class RingBuffer {
		constructor(params : Object);
		radii : number[];
		units : esri.Units;
    }
}

/**
* Toolbars Namespace.
*/
declare module esri.toolbars {
    export class Draw {
        constructor(map: esri.Map, options: Object);
        static POINT: string;
        static LINE: string;
        static EXTENT: string;
        static POLYLINE: string;
        static POLYGON: string;
        static FREEHAND_POLYLINE: string;
        static FREEHAND_POLYGON: string;
        static MULTI_POINT: string;
        static ARROW: string;
        static TRIANGLE: string;
        static CIRCLE: string;
        static ELLIPSE: string;
        static RECTANGLE: string;
        static LEFT_ARROW: string;
        static RIGHT_ARROW: string;
        static UP_ARROW: string;
        static DOWN_ARROW: string;
        fillSymbol: esri.symbol.SimpleFillSymbol;
        lineSymbol: esri.symbol.SimpleLineSymbol;
        markerSymbol: esri.symbol.SimpleMarkerSymbol;
        respectDrawingVertexOrder: boolean;
        activate(geometryType: string, options?: Object): void;
        deactivate(): void;
        finishDrawing(): void;
        setFillSymbol(fillSymbol: esri.symbol.FillSymbol): void;
        setLineSymbol(lineSymbol: esri.symbol.LineSymbol): void;
        setMarkerSymbol(markerSymbol: esri.symbol.MarkerSymbol): void;
        setRespectDrawingVertexOrder(respectDrawingVertexOrder: boolean): void;
        onDrawComplete(event: Event): void; // TODO F.Leray : to check again : documentation is missing about the type of argument passed to this method.
        onDrawEnd(geometry: esri.geometry.Geometry): void;
    }
    export class Edit {
        constructor(map: esri.Map, options?: Object);
        static EDIT_VERTICES: string;
        static MOVE: string;
        static SCALE: string;
        static ROTATE: string;
        activate(tool: string, graphic: esri.Graphic, options? : Object): void;
        deactivate(): void;
        getCurrentState(): Object;
        refresh(): void;
        onActivate(tool: string, graphic: esri.Graphic): void;
        onDeactivate(tool: string, graphic: esri.Graphic, info: Object): void;
        onGraphicClick(graphic: esri.Graphic, info: Object): void;
        onGraphicFirstMove(graphic: esri.Graphic): void;
        onGraphicMove(graphic: esri.Graphic, transform: Object): void;
        onGraphicMoveStart(graphic: esri.Graphic): void;
        onGraphicMoveStop(graphic, transform): void;
        onRotate(graphic: esri.Graphic, info: Object): void;
        onRotateFirstMove(graphic: esri.Graphic): void;
        onRotateStart(graphic: esri.Graphic): void;
        onRotateStop(graphic: esri.Graphic, info: Object): void;
        onScale(graphic, info): void;
        onScaleFirstMove(graphic: esri.Graphic): void;
        onScaleStart(graphic: esri.Graphic): void;
        onScaleStop(graphic: esri.Graphic, info: Object): void;
        onVertexAdd(graphic: esri.Graphic, vertexInfo: Object): void;
        onVertexClick(graphic: esri.Graphic, vertexInfo: Object): void;
        onVertexDelete(graphic: esri.Graphic, vertexInfo: Object): void;
        onVertexFirstMove(graphic: esri.Graphic, vertexInfo: Object): void;
        onVertexMouseOut(graphic: esri.Graphic, vertexInfo: Object): void;
        onVertexMouseOver(graphic: esri.Graphic, vertexInfo: Object): void;
        onVertexMove(graphic: esri.Graphic, vertexInfo: Object, transform: Object): void;
        onVertexMoveStart(graphic: esri.Graphic, vertexInfo: Object): void;
        onVertexMoveStop(graphic: esri.Graphic, vertexInfo: Object, transform: Object): void;
    }
    export class Navigation {
        constructor(map: esri.Map);
        static ZOOM_IN: string;
        static ZOOM_OUT: string;
        static PAN: string;
        activate(navType: string): void;
        deactivate(): void;
        isFirstExtent(): boolean;
        isLastExtent(): boolean;
        setZoomSymbol(symbol : esri.symbol.Symbol): void;
        zoomToFullExtent(): void;
        zoomToNextExtent(): void;
        zoomToPrevExtent(): void;
        onExtentHistoryChange(): void;
    }
}

/**
* VirtualEarth Namespace.
*/
declare module esri.virtualearth {
    export class VEAddress {
        addressLine: string;
        adminDistrict: string;
        countryRegion: string;
        district: string;
        formattedAddress: string;
        locality: string;
        postalCode: string;
        postalTown: string;
    }
    export class VEGeocodeResult {
        address: esri.virtualearth.VEAddress;
        bestView: esri.geometry.Extent;
        calculationMethod: string;
        confidence: string;
        displayName: string;
        entityType: string;
        location: esri.geometry.Point;
        matchCodes: string;
    }
    export class VEGeocoder {
        constructor(options : Object);
        culture: string;
        addressToLocations(query: string, callback?: Function, errback?: Function): dojo.Deferred<any>;
        setCulture(culture): string;
        onAddressToLocationsComplete(geocodeResults: esri.virtualearth.VEGeocodeResult[]): void;
        onError(error: Error): void;
    }
    export class VETiledLayer extends esri.layers.TiledMapServiceLayer {
        constructor(options: Object);
        static MAP_STYLE_AERIAL: string;
        static MAP_STYLE_AERIAL_WITH_LABELS: string;
        static MAP_STYLE_ROAD: string;
        attributionDataUrl: string;
        copyright: string;
        credential: Credential;
        culture: string;
        fullExtent: esri.geometry.Extent;
        hasAttributionData: boolean;
        id: string;
        initialExtent: esri.geometry.Extent;
        loaded: boolean;
        mapStyle: string;
        maxScale: number;
        minScale: number;
        opacity: number;
		refreshInterval : number;
        showAttribution: boolean;
        spatialReference: esri.SpatialReference;
        suspended: boolean;
        tileInfo: esri.layers.TileInfo;
        url: string;
        visible: boolean;
        visibleAtMapScale: boolean;
		attr(name : string, value : any) : esri.layers.Layer;
        getAttributionData(): dojo.Deferred<any>;
		getMap() : esri.Map;
		getNode() : HTMLElement; // return HTMLElement
        getTileUrl(level: number, row: number, column: number): string;
        hide(): void;
        isVisibleAtScale(scale: number): boolean;
        refresh(): void;
        resume(): void;
        setCulture(culture: string): void;
        setMapStyle(style: string): void;
        setMaxScale(scale: number): void;
        setMinScale(scale: number): void;
        setOpacity(valueBetweenZeroAndOne : number): void;
		setRefreshInterval(interval : number) : esri.layers.Layer;
        setScaleRange(minScale: number, maxScale: number): void;
        setVisibility(isVisible: boolean): void;
        show(): void;
        suspend(): void;
        onError(error: Error): void;
        onLoad(layer : esri.layers.Layer): void;
        onMapStyleChange(): void;
        onOpacityChange(opacity: number): void;
		onRefreshIntervalChange() : void;
        onResume(): void;
        onScaleRangeChange(): void;
        onScaleVisibilityChange(): void;
        onSuspend(): void;
        onUpdate(): void;
        onUpdateEnd(error: Error): void;
        onUpdateStart(): void;
        onVisibilityChange(visibility: boolean): void;
        //    error: <Error> error;
        //    load: Layer;
        //    opacity-change : <number> opacity;
        //resume: void;
        //scale - range-change : void;
        //scale - visibility-change : void;
        //suspend: void;
        //	update-end : <Error> error;
        //	update-start : void;
        //	visibility-change : <boolean> visible;
    }


}

//class,esri/IdentityManager,IdentityManager
declare module "esri/IdentityManager" {
	var i : esri.IdentityManager;
	export = i;
}
//class,esri/IdentityManagerBase,IdentityManagerBase
declare module "esri/IdentityManagerBase" {
	var i : typeof esri.IdentityManagerBase;
	export = i;
}
//class,esri/InfoTemplate,InfoTemplate
declare module "esri/InfoTemplate" {
	var i : typeof esri.InfoTemplate;
	export = i;
}
//class,esri/InfoWindowBase,InfoWindowBase
declare module "esri/InfoWindowBase" {
	var i : typeof esri.InfoWindowBase;
	export = i;
}
//class,esri/OperationBase,OperationBase
declare module "esri/OperationBase" {
	var i : typeof esri.OperationBase;
	export = i;
}

//class,esri/ServerInfo,ServerInfo
declare module "esri/ServerInfo" {
	var i : typeof esri.ServerInfo;
	export = i;
}
//class,esri/SnappingManager,SnappingManager
declare module "esri/SnappingManager" {
	var i : typeof esri.SnappingManager;
	export = i;
}
//class,esri/SpatialReference,SpatialReference
declare module "esri/SpatialReference" {
	var i : typeof esri.SpatialReference;
	export = i;
}
//class,esri/TimeExtent,TimeExtent
declare module "esri/TimeExtent" {
	var i : typeof esri.TimeExtent;
	export = i;
}
//class,esri/arcgis/Portal,esriPortal
declare module "esri/arcgis/Portal" {
	var i : typeof esri.arcgis.Portal;
	export = i;
}

//class,esri/dijit/AttributeInspector,AttributeInspector
declare module "esri/dijit/AttributeInspector" {
	var i : esri.dijit.AttributeInspector;
	export = i;
}
//class,esri/dijit/Attribution,Attribution
declare module "esri/dijit/Attribution" {
	var i : esri.dijit.Attribution;
	export = i;
}
//class,esri/dijit/Basemap,Basemap
declare module "esri/dijit/Basemap" {
	var i : esri.dijit.Basemap;
	export = i;
}
//class,esri/dijit/BasemapGallery,BasemapGallery
declare module "esri/dijit/BasemapGallery" {
	var i : esri.dijit.BasemapGallery;
	export = i;
}
//class,esri/dijit/BookmarkItem,BookmarkItem
declare module "esri/dijit/BookmarkItem" {
	var i : esri.dijit.BookmarkItem;
	export = i;
}
//class,esri/dijit/Bookmarks,Bookmarks
declare module "esri/dijit/Bookmarks" {
	var i : esri.dijit.Bookmarks;
	export = i;
}
//class,esri/dijit/Directions,Directions
declare module "esri/dijit/Directions" {
	var i : esri.dijit.Directions;
	export = i;
}
//class,esri/dijit/Gallery,Gallery
declare module "esri/dijit/Gallery" {
	var i : esri.dijit.Gallery;
	export = i;
}
//class,esri/dijit/Geocoder,Geocoder
declare module "esri/dijit/Geocoder" {
	var i : esri.dijit.Geocoder;
	export = i;
}
//class,esri/dijit/Gauge,Gauge
declare module "esri/dijit/Gauge" {
    var i: esri.dijit.Gauge;
    export = i;
}

//class,esri/dijit/HistogramTimeSlider,HistogramTimeSlider
declare module "esri/dijit/HistogramTimeSlider" {
	var i : esri.dijit.HistogramTimeSlider;
	export = i;
}
//class,esri/dijit/InfoWindow,InfoWindow
declare module "esri/dijit/InfoWindow" {
	var i : esri.dijit.InfoWindow;
	export = i;
}
//class,esri/dijit/InfoWindowLite,InfoWindowLite
declare module "esri/dijit/InfoWindowLite" {
	var i : esri.dijit.InfoWindowLite;
	export = i;
}
//class,esri/dijit/Legend,Legend
declare module "esri/dijit/Legend" {
	var i : esri.dijit.Legend;
	export = i;
}
//class,esri/dijit/Measurement,Measurement
declare module "esri/dijit/Measurement" {
	var i : esri.dijit.Measurement;
	export = i;
}
//class,esri/dijit/OverviewMap,OverviewMap
declare module "esri/dijit/OverviewMap" {
	var i : esri.dijit.OverviewMap;
	export = i;
}
//class,esri/dijit/Popup,Popup
declare module "esri/dijit/Popup" {
	var i : esri.dijit.Popup;
	export = i;
}
//class,esri/dijit/PopupMobile,PopupMobile
declare module "esri/dijit/PopupMobile" {
	var i : esri.dijit.PopupMobile;
	export = i;
}
//class,esri/dijit/PopupTemplate,PopupTemplate
declare module "esri/dijit/PopupTemplate" {
	var i : esri.dijit.PopupTemplate;
	export = i;
}
//class,esri/dijit/Print,Print
declare module "esri/dijit/Print" {
	var i : esri.dijit.Print;
	export = i;
}
//class,esri/dijit/Scalebar,Scalebar
declare module "esri/dijit/Scalebar" {
	var i : esri.dijit.Scalebar;
	export = i;
}
//class,esri/dijit/TimeSlider,TimeSlider
declare module "esri/dijit/TimeSlider" {
	var i : esri.dijit.TimeSlider;
	export = i;
}

//class,esri/dijit/analysis/AnalysisBase,AnalysisBase
declare module "esri/dijit/analysis/AnalysisBase" {
	var i : esri.dijit.analysis.AnalysisBase;
	export = i;
}
//class,esri/dijit/analysis/AggregatePoints,AggregatePoints
declare module "esri/dijit/analysis/AggregatePoints" {
	var i : esri.dijit.analysis.AggregatePoints;
	export = i;
}
//class,esri/dijit/analysis/CreateBuffers,CreateBuffers
declare module "esri/dijit/analysis/CreateBuffers" {
    var i: esri.dijit.analysis.CreateBuffers;
    export = i;
}
//class,esri/dijit/analysis/CreateDriveTimeAreas,CreateDriveTimeAreas
declare module "esri/dijit/analysis/CreateDriveTimeAreas" {
	var i : esri.dijit.analysis.CreateDriveTimeAreas;
	export = i;
}
//class,esri/dijit/analysis/DissolveBoundaries,DissolveBoundaries
declare module "esri/dijit/analysis/DissolveBoundaries" {
	var i : esri.dijit.analysis.DissolveBoundaries;
	export = i;
}
//class,esri/dijit/analysis/EnrichLayer,EnrichLayer
declare module "esri/dijit/analysis/EnrichLayer" {
	var i : esri.dijit.analysis.EnrichLayer;
	export = i;
}
//class,esri/dijit/analysis/ExtractData,ExtractData
declare module "esri/dijit/analysis/ExtractData" {
	var i : esri.dijit.analysis.ExtractData;
	export = i;
}
//class,esri/dijit/analysis/FindHotSpots,FindHotSpots
declare module "esri/dijit/analysis/FindHotSpots" {
	var i : esri.dijit.analysis.FindHotSpots;
	export = i;
}
//class,esri/dijit/analysis/FindNearest,FindNearest
declare module "esri/dijit/analysis/FindNearest" {
	var i : esri.dijit.analysis.FindNearest;
	export = i;
}
//class,esri/dijit/analysis/MergeLayers,MergeLayers
declare module "esri/dijit/analysis/MergeLayers" {
	var i : esri.dijit.analysis.MergeLayers;
	export = i;
}
//class,esri/dijit/analysis/OverlayLayers,OverlayLayers
declare module "esri/dijit/analysis/OverlayLayers" {
	var i : esri.dijit.analysis.OverlayLayers;
	export = i;
}
//class,esri/dijit/analysis/SummarizeNearby,SummarizeNearby
declare module "esri/dijit/analysis/SummarizeNearby" {
	var i : esri.dijit.analysis.SummarizeNearby;
	export = i;
}
//class,esri/dijit/analysis/SummarizeWithin,SummarizeWithin
declare module "esri/dijit/analysis/SummarizeWithin" {
	var i : esri.dijit.analysis.SummarizeWithin;
	export = i;
}

//class,esri/dijit/editing/AttachmentEditor,AttachmentEditor
declare module "esri/dijit/editing/AttachmentEditor" {
	var i : esri.dijit.editing.AttachmentEditor;
	export = i;
}
//class,esri/dijit/editing/Editor,Editor
declare module "esri/dijit/editing/Editor" {
	var i : esri.dijit.editing.Editor;
	export = i;
}
//class,esri/dijit/editing/TemplatePicker,TemplatePicker
declare module "esri/dijit/editing/TemplatePicker" {
	var i : esri.dijit.editing.TemplatePicker;
	export = i;
}

//class,esri/dijit/geoenrichment/Infographic,Infographic
declare module "esri/dijit/geoenrichment/Infographic" {
	var i : esri.dijit.geoenrichment.Infographic;
	export = i;
}

//class,esri/dijit/geoenrichment/InfographicsCarousel,InfographicsCarousel
declare module "esri/dijit/geoenrichment/InfographicsCarousel" {
	var i : esri.dijit.geoenrichment.InfographicsCarousel;
	export = i;
}

//class,esri/dijit/geoenrichment/InfographicsOptions,InfographicsOptions
declare module "esri/dijit/geoenrichment/InfographicsOptions" {
	var i : esri.dijit.geoenrichment.InfographicsOptions;
	export = i;
}

//class,esri/dijit/geoenrichment/Item,Item
declare module "esri/dijit/geoenrichment/Item" {
    var i : esri.dijit.geoenrichment.Item;
    export = i;
}

//class,esri/geometry/Extent,Extent
declare module "esri/geometry/Extent" {
	var i : typeof esri.geometry.Extent;
	export = i;
}
//class,esri/geometry/Geometry,Geometry
declare module "esri/geometry/Geometry" {
	var i : typeof esri.geometry.Geometry;
	export = i;
}
//class,esri/geometry/Multipoint,Multipoint
declare module "esri/geometry/Multipoint" {
	var i : typeof esri.geometry.Multipoint;
	export = i;
}
//class,esri/geometry/Point,Point
declare module "esri/geometry/Point" {
	var i : typeof esri.geometry.Point;
	export = i;
}
//class,esri/geometry/Polygon,Polygon
declare module "esri/geometry/Polygon" {
	var i : typeof esri.geometry.Polygon;
	export = i;
}
//class,esri/geometry/Polyline,Polyline
declare module "esri/geometry/Polyline" {
	var i : typeof esri.geometry.Polyline;
	export = i;
}

//class,esri/geometry/ScreenPoint,ScreenPoint
declare module "esri/geometry/ScreenPoint" {
	var i : typeof esri.geometry.ScreenPoint;
	export = i;
}
//class,esri/graphic,Graphic
declare module "esri/graphic" {
	var i : typeof esri.Graphic;
	export = i;
}
//class,esri/layers/ArcGISDynamicMapServiceLayer,ArcGISDynamicMapServiceLayer
declare module "esri/layers/ArcGISDynamicMapServiceLayer" {
	var i : typeof esri.layers.ArcGISDynamicMapServiceLayer;
	export = i;
}
//class,esri/layers/ArcGISImageServiceLayer,ArcGISImageServiceLayer
declare module "esri/layers/ArcGISImageServiceLayer" {
	var i : typeof esri.layers.ArcGISImageServiceLayer;
	export = i;
}

//class,esri/layers/ArcGISTiledMapServiceLayer,ArcGISTiledMapServiceLayer
declare module "esri/layers/ArcGISTiledMapServiceLayer" {
	var i : typeof esri.layers.ArcGISTiledMapServiceLayer;
	export = i;
}
//class,esri/layers/CodedValueDomain,CodedValueDomain
declare module "esri/layers/CodedValueDomain" {
	var i : typeof esri.layers.CodedValueDomain;
	export = i;
}
//class,esri/layers/DataSource,DataSource
declare module "esri/layers/DataSource" {
	var i : typeof esri.layers.DataSource;
	export = i;
}
//class,esri/layers/Domain,Domain
declare module "esri/layers/Domain" {
	var i : typeof esri.layers.Domain;
	export = i;
}
//class,esri/layers/DynamicLayerInfo,DynamicLayerInfo
declare module "esri/layers/DynamicLayerInfo" {
	var i : typeof esri.layers.DynamicLayerInfo;
	export = i;
}
//class,esri/layers/DynamicMapServiceLayer,DynamicMapServiceLayer
declare module "esri/layers/DynamicMapServiceLayer" {
	var i : typeof esri.layers.DynamicMapServiceLayer;
	export = i;
}
//class,esri/layers/FeatureEditResult,FeatureEditResult
declare module "esri/layers/FeatureEditResult" {
	var i : typeof esri.layers.FeatureEditResult;
	export = i;
}
//class,esri/layers/FeatureLayer,FeatureLayer
declare module "esri/layers/FeatureLayer" {
	var i : typeof esri.layers.FeatureLayer;
	export = i;
}
//class,esri/layers/FeatureTemplate,FeatureTemplate
declare module "esri/layers/FeatureTemplate" {
	var i : typeof esri.layers.FeatureTemplate;
	export = i;
}
//class,esri/layers/FeatureType,FeatureType
declare module "esri/layers/FeatureType" {
	var i : typeof esri.layers.FeatureType;
	export = i;
}
//class,esri/layers/Field,Field
declare module "esri/layers/Field" {
	var i : typeof esri.layers.Field;
	export = i;
}
//class,esri/layers/GeoRSSLayer,GeoRSSLayer
declare module "esri/layers/GeoRSSLayer" {
	var i : typeof esri.layers.GeoRSSLayer;
	export = i;
}
//class,esri/layers/GraphicsLayer,GraphicsLayer
declare module "esri/layers/GraphicsLayer" {
	var i : typeof esri.layers.GraphicsLayer;
	export = i;
}
//class,esri/layers/ImageParameters,ImageParameters
declare module "esri/layers/ImageParameters" {
	var i : typeof esri.layers.ImageParameters;
	export = i;
}
//class,esri/layers/ImageServiceParameters,ImageServiceParameters
declare module "esri/layers/ImageServiceParameters" {
	var i : typeof esri.layers.ImageServiceParameters;
	export = i;
}
//class,esri/layers/InheritedDomain,InheritedDomain
declare module "esri/layers/InheritedDomain" {
	var i : typeof esri.layers.InheritedDomain;
	export = i;
}
//class,esri/layers/JoinDataSource,JoinDataSource
declare module "esri/layers/JoinDataSource" {
	var i : typeof esri.layers.JoinDataSource;
	export = i;
}
//class,esri/layers/KMLFolder,KMLFolder
declare module "esri/layers/KMLFolder" {
	var i : typeof esri.layers.KMLFolder;
	export = i;
}
//class,esri/layers/KMLGroundOverlay,KMLGroundOverlay
declare module "esri/layers/KMLGroundOverlay" {
	var i : typeof esri.layers.KMLGroundOverlay;
	export = i;
}
//class,esri/layers/KMLLayer,KMLLayer
declare module "esri/layers/KMLLayer" {
	var i : typeof esri.layers.KMLLayer;
	export = i;
}
//class,esri/layers/LOD,LOD
declare module "esri/layers/LOD" {
	var i : typeof esri.layers.LOD;
	export = i;
}
//class,esri/layers/Layer,Layer
declare module "esri/layers/Layer" {
	var i : typeof esri.layers.Layer;
	export = i;
}
//class,esri/layers/LayerDataSource,LayerDataSource
declare module "esri/layers/LayerDataSource" {
	var i : typeof esri.layers.LayerDataSource;
	export = i;
}
//class,esri/layers/LayerDrawingOptions,LayerDrawingOptions
declare module "esri/layers/LayerDrawingOptions" {
	var i : typeof esri.layers.LayerDrawingOptions;
	export = i;
}
//class,esri/layers/LayerInfo,LayerInfo
declare module "esri/layers/LayerInfo" {
	var i : typeof esri.layers.LayerInfo;
	export = i;
}
//class,esri/layers/LayerMapSource,LayerMapSource
declare module "esri/layers/LayerMapSource" {
	var i : typeof esri.layers.LayerMapSource;
	export = i;
}

/*
    not found
	TODO

//class,esri/layers/LayerSource,LayerSource
declare module "esri/layers/LayerSource" {
	var i : esri.layers.LayerSource;
	export = i;
}
*/

//class,esri/layers/LayerTimeOptions,LayerTimeOptions
declare module "esri/layers/LayerTimeOptions" {
	var i : typeof esri.layers.LayerTimeOptions;
	export = i;
}
//class,esri/layers/MapImage,MapImage
declare module "esri/layers/MapImage" {
	var i : typeof esri.layers.MapImage;
	export = i;
}
//class,esri/layers/MapImageLayer,MapImageLayer
declare module "esri/layers/MapImageLayer" {
	var i : typeof esri.layers.MapImageLayer;
	export = i;
}
//class,esri/layers/MosaicRule,MosaicRule
declare module "esri/layers/MosaicRule" {
	var i : typeof esri.layers.MosaicRule;
	export = i;
}
//class,esri/layers/OpenStreetMapLayer,OpenStreetMapLayer
declare module "esri/layers/OpenStreetMapLayer" {
	var i : typeof esri.layers.OpenStreetMapLayer;
	export = i;
}
//class,esri/layers/QueryDataSource,QueryDataSource
declare module "esri/layers/QueryDataSource" {
	var i : typeof esri.layers.QueryDataSource;
	export = i;
}
//class,esri/layers/RangeDomain,RangeDomain
declare module "esri/layers/RangeDomain" {
	var i : typeof esri.layers.RangeDomain;
	export = i;
}
//class,esri/layers/RasterDataSource,RasterDataSource
declare module "esri/layers/RasterDataSource" {
	var i : typeof esri.layers.RasterDataSource;
	export = i;
}

//class,esri/layers/StreamLayer,StreamLayer
declare module "esri/layers/StreamLayer" {
	var i : esri.layers.StreamLayer;
	export = i;
}

//class,esri/layers/TableDataSource,TableDataSource
declare module "esri/layers/TableDataSource" {
	var i : typeof esri.layers.TableDataSource;
	export = i;
}
//class,esri/layers/TileInfo,TileInfo
declare module "esri/layers/TileInfo" {
	var i : typeof esri.layers.TileInfo;
	export = i;
}
//class,esri/layers/TiledMapServiceLayer,TiledMapServiceLayer
declare module "esri/layers/TiledMapServiceLayer" {
	var i : typeof esri.layers.TiledMapServiceLayer;
	export = i;
}
//class,esri/layers/TimeInfo,TimeInfo
declare module "esri/layers/TimeInfo" {
	var i : typeof esri.layers.TimeInfo;
	export = i;
}
//class,esri/layers/TimeReference,TimeReference
declare module "esri/layers/TimeReference" {
	var i : typeof esri.layers.TimeReference;
	export = i;
}
//class,esri/layers/WMSLayer,WMSLayer
declare module "esri/layers/WMSLayer" {
	var i : typeof esri.layers.WMSLayer;
	export = i;
}
//class,esri/layers/WMSLayerInfo,WMSLayerInfo
declare module "esri/layers/WMSLayerInfo" {
	var i : typeof esri.layers.WMSLayerInfo;
	export = i;
}
//class,esri/layers/WMTSLayer,WMTSLayer
declare module "esri/layers/WMTSLayer" {
	var i : typeof esri.layers.WMTSLayer;
	export = i;
}
//class,esri/layers/WMTSLayerInfo,WMTSLayerInfo
declare module "esri/layers/WMTSLayerInfo" {
	var i : typeof esri.layers.WMTSLayerInfo;
	export = i;
}
//class,esri/layers/WebTiledLayer,WebTiledLayer
declare module "esri/layers/WebTiledLayer" {
	var i : typeof esri.layers.WebTiledLayer;
	export = i;
}
//class,esri/map,Map
declare module "esri/map" {
	var i : typeof esri.Map;
	export = i;
}
//class,esri/renderer/ClassBreaksRenderer,ClassBreaksRenderer
declare module "esri/renderers/ClassBreaksRenderer" {
	var i : typeof esri.renderer.ClassBreaksRenderer;
	export = i;
}
//class,esri/renderer/Renderer,Renderer
declare module "esri/renderers/Renderer" {
	var i : typeof esri.renderer.Renderer;
	export = i;
}
//class,esri/renderer/SimpleRenderer,SimpleRenderer
declare module "esri/renderers/SimpleRenderer" {
	var i : typeof esri.renderer.SimpleRenderer;
	export = i;
}
//class,esri/renderer/SymbolAger,SymbolAger
declare module "esri/renderers/SymbolAger" {
	var i : typeof esri.renderer.SymbolAger;
	export = i;
}
//class,esri/renderer/TemporalRenderer,TemporalRenderer
declare module "esri/renderers/TemporalRenderer" {
	var i : typeof esri.renderer.TemporalRenderer;
	export = i;
}
//class,esri/renderer/TimeClassBreaksAger,TimeClassBreaksAger
declare module "esri/renderers/TimeClassBreaksAger" {
	var i : typeof esri.renderer.TimeClassBreaksAger;
	export = i;
}
//class,esri/renderer/TimeRampAger,TimeRampAger
declare module "esri/renderers/TimeRampAger" {
	var i : typeof esri.renderer.TimeRampAger;
	export = i;
}
//class,esri/renderer/UniqueValueRenderer,UniqueValueRenderer
declare module "esri/renderers/UniqueValueRenderer" {
	var i : typeof esri.renderer.UniqueValueRenderer;
	export = i;
}
//class,esri.symbol.CartographicLineSymbol,CartographicLineSymbol
declare module "esri/symbols/CartographicLineSymbol" {
	var i : typeof esri.symbol.CartographicLineSymbol;
	export = i;
}
//class,esri.symbol.FillSymbol,FillSymbol
declare module "esri/symbols/FillSymbol" {
	var i : typeof esri.symbol.FillSymbol;
	export = i;
}
//class,esri.symbol.Font,Font
declare module "esri/symbols/Font" {
	var i : typeof esri.symbol.Font;
	export = i;
}
//class,esri.symbol.LineSymbol,LineSymbol
declare module "esri/symbols/LineSymbol" {
	var i : typeof esri.symbol.LineSymbol;
	export = i;
}
//class,esri.symbol.MarkerSymbol,MarkerSymbol
declare module "esri/symbols/MarkerSymbol" {
	var i : typeof esri.symbol.MarkerSymbol;
	export = i;
}
//class,esri.symbol.PictureFillSymbol,PictureFillSymbol
declare module "esri/symbols/PictureFillSymbol" {
	var i : typeof esri.symbol.PictureFillSymbol;
	export = i;
}
//class,esri.symbol.PictureMarkerSymbol,PictureMarkerSymbol
declare module "esri/symbols/PictureMarkerSymbol" {
	var i : typeof esri.symbol.PictureMarkerSymbol;
	export = i;
}
//class,esri.symbol.SimpleFillSymbol,SimpleFillSymbol
declare module "esri/symbols/SimpleFillSymbol" {
	var i : typeof esri.symbol.SimpleFillSymbol;
	export = i;
}
//class,esri.symbol.SimpleLineSymbol,SimpleLineSymbol
declare module "esri/symbols/SimpleLineSymbol" {
	var i : typeof esri.symbol.SimpleLineSymbol;
	export = i;
}
//class,esri.symbol.SimpleMarkerSymbol,SimpleMarkerSymbol
declare module "esri/symbols/SimpleMarkerSymbol" {
	var i : typeof esri.symbol.SimpleMarkerSymbol;
	export = i;
}
//class,esri.symbol.Symbol,Symbol
declare module "esri/symbols/Symbol" {
	var i : typeof esri.symbol.Symbol;
	export = i;
}
//class,esri.symbol.TextSymbol,TextSymbol
declare module "esri/symbols/TextSymbol" {
	var i : typeof esri.symbol.TextSymbol;
	export = i;
}
//class,esri/tasks/AddressCandidate,AddressCandidate
declare module "esri/tasks/AddressCandidate" {
	var i : typeof esri.tasks.AddressCandidate;
	export = i;
}
//class,esri/tasks/AlgorithmicColorRamp,AlgorithmicColorRamp
declare module "esri/tasks/AlgorithmicColorRamp" {
	var i : typeof esri.tasks.AlgorithmicColorRamp;
	export = i;
}
//class,esri/tasks/AreasAndLengthsParameters,AreasAndLengthsParameters
declare module "esri/tasks/AreasAndLengthsParameters" {
	var i : typeof esri.tasks.AreasAndLengthsParameters;
	export = i;
}
//class,esri/tasks/BufferParameters,BufferParameters
declare module "esri/tasks/BufferParameters" {
	var i : typeof esri.tasks.BufferParameters;
	export = i;
}
//class,esri/tasks/ClassBreaksDefinition,ClassBreaksDefinition
declare module "esri/tasks/ClassBreaksDefinition" {
	var i : typeof esri.tasks.ClassBreaksDefinition;
	export = i;
}
//class,esri/tasks/ClassificationDefinition,ClassificationDefinition
declare module "esri/tasks/ClassificationDefinition" {
	var i : typeof esri.tasks.ClassificationDefinition;
	export = i;
}
//class,esri/tasks/ClosestFacilityParameters,ClosestFacilityParameters
declare module "esri/tasks/ClosestFacilityParameters" {
	var i : typeof esri.tasks.ClosestFacilityParameters;
	export = i;
}
//class,esri/tasks/ClosestFacilitySolveResult,ClosestFacilitySolveResult
declare module "esri/tasks/ClosestFacilitySolveResult" {
	var i : typeof esri.tasks.ClosestFacilitySolveResult;
	export = i;
}
//class,esri/tasks/ClosestFacilityTask,ClosestFacilityTask
declare module "esri/tasks/ClosestFacilityTask" {
	var i : typeof esri.tasks.ClosestFacilityTask;
	export = i;
}
//class,esri/tasks/ColorRamp,ColorRamp
declare module "esri/tasks/ColorRamp" {
	var i : typeof esri.tasks.ColorRamp;
	export = i;
}
//class,esri/tasks/DataFile,DataFile
declare module "esri/tasks/DataFile" {
	var i : typeof esri.tasks.DataFile;
	export = i;
}
//class,esri/tasks/DataLayer,DataLayer
declare module "esri/tasks/DataLayer" {
	var i : typeof esri.tasks.DataLayer;
	export = i;
}
//class,esri/tasks/Date,EsriDate
declare module "esri/tasks/Date" {
	var i : typeof esri.tasks.Date;
	export = i;
}

/* new class TODO

//class,esri/tasks/DensifyParameters,DensifyParameters
declare module "esri/tasks/DensifyParameters" {
	var i : esri.tasks.DensifyParameters;
	export = i;
}
*/

//class,esri/tasks/DirectionsFeatureSet,DirectionsFeatureSet
declare module "esri/tasks/DirectionsFeatureSet" {
	var i : typeof esri.tasks.DirectionsFeatureSet;
	export = i;
}
//class,esri/tasks/DistanceParameters,DistanceParameters
declare module "esri/tasks/DistanceParameters" {
	var i : typeof esri.tasks.DistanceParameters;
	export = i;
}
//class,esri/tasks/FeatureSet,FeatureSet
declare module "esri/tasks/FeatureSet" {
	var i : typeof esri.tasks.FeatureSet;
	export = i;
}
//class,esri/tasks/FindParameters,FindParameters
declare module "esri/tasks/FindParameters" {
	var i : typeof esri.tasks.FindParameters;
	export = i;
}
//class,esri/tasks/FindResult,FindResult
declare module "esri/tasks/FindResult" {
	var i : typeof esri.tasks.FindResult;
	export = i;
}
//class,esri/tasks/FindTask,FindTask
declare module "esri/tasks/FindTask" {
	var i: typeof esri.tasks.FindTask;
	export = i;
}
//class,esri/tasks/GPMessage,GPMessage
declare module "esri/tasks/GPMessage" {
	var i: typeof esri.tasks.GPMessage;
	export = i;
}
//class,esri/tasks/GeneralizeParameters,GeneralizeParameters
declare module "esri/tasks/GeneralizeParameters" {
	var i: typeof esri.tasks.GeneralizeParameters;
	export = i;
}
//class,esri/tasks/GenerateRendererParameters,GenerateRendererParameters
declare module "esri/tasks/GenerateRendererParameters" {
	var i: typeof esri.tasks.GenerateRendererParameters;
	export = i;
}
//class,esri/tasks/GenerateRendererTask,GenerateRendererTask
declare module "esri/tasks/GenerateRendererTask" {
	var i: typeof esri.tasks.GenerateRendererTask;
	export = i;
}
//class,esri/tasks/GeometryService,GeometryService
declare module "esri/tasks/GeometryService" {
	var i: typeof esri.tasks.GeometryService;
	export = i;
}
//class,esri/tasks/Geoprocessor,Geoprocessor
declare module "esri/tasks/Geoprocessor" {
	var i: typeof esri.tasks.Geoprocessor;
	export = i;
}
//class,esri/tasks/IdentifyParameters,IdentifyParameters
declare module "esri/tasks/IdentifyParameters" {
	var i: typeof esri.tasks.IdentifyParameters;
	export = i;
}
//class,esri/tasks/IdentifyResult,IdentifyResult
declare module "esri/tasks/IdentifyResult" {
	var i: typeof esri.tasks.IdentifyResult;
	export = i;
}
//class,esri/tasks/IdentifyTask,IdentifyTask
declare module "esri/tasks/IdentifyTask" {
	var i: typeof esri.tasks.IdentifyTask;
	export = i;
}
//class,esri/tasks/ImageServiceIdentifyParameters,ImageServiceIdentifyParameters
declare module "esri/tasks/ImageServiceIdentifyParameters" {
	var i: typeof esri.tasks.ImageServiceIdentifyParameters;
	export = i;
}
//class,esri/tasks/ImageServiceIdentifyResult,ImageServiceIdentifyResult
declare module "esri/tasks/ImageServiceIdentifyResult" {
	var i: typeof esri.tasks.ImageServiceIdentifyResult;
	export = i;
}
//class,esri/tasks/ImageServiceIdentifyTask,ImageServiceIdentifyTask
declare module "esri/tasks/ImageServiceIdentifyTask" {
	var i: typeof esri.tasks.ImageServiceIdentifyTask;
	export = i;
}
//class,esri/tasks/JobInfo,JobInfo
declare module "esri/tasks/JobInfo" {
	var i: typeof esri.tasks.JobInfo;
	export = i;
}
//class,esri/tasks/LegendLayer,LegendLayer
declare module "esri/tasks/LegendLayer" {
	var i: typeof esri.tasks.LegendLayer;
	export = i;
}
//class,esri/tasks/LengthsParameters,LengthsParameters
declare module "esri/tasks/LengthsParameters" {
	var i: typeof esri.tasks.LengthsParameters;
	export = i;
}
//class,esri/tasks/LinearUnit,LinearUnit
declare module "esri/tasks/LinearUnit" {
	var i: typeof esri.tasks.LinearUnit;
	export = i;
}
//class,esri/tasks/Locator,Locator
declare module "esri/tasks/Locator" {
	var i: typeof esri.tasks.Locator;
	export = i;
}
//class,esri/tasks/MultipartColorRamp,MultipartColorRamp
declare module "esri/tasks/MultipartColorRamp" {
	var i: typeof esri.tasks.MultipartColorRamp;
	export = i;
}
//class,esri/tasks/NAMessage,NAMessage
declare module "esri/tasks/NAMessage" {
	var i: typeof esri.tasks.NAMessage;
	export = i;
}
//class,esri/tasks/OffsetParameters,OffsetParameters
declare module "esri/tasks/OffsetParameters" {
	var i: typeof esri.tasks.OffsetParameters;
	export = i;
}
//class,esri/tasks/ParameterValue,ParameterValue
declare module "esri/tasks/ParameterValue" {
	var i: typeof esri.tasks.ParameterValue;
	export = i;
}
//class,esri/tasks/PrintParameters,PrintParameters
declare module "esri/tasks/PrintParameters" {
	var i: typeof esri.tasks.PrintParameters;
	export = i;
}
//class,esri/tasks/PrintTask,PrintTask
declare module "esri/tasks/PrintTask" {
	var i: typeof esri.tasks.PrintTask;
	export = i;
}
//class,esri/tasks/PrintTemplate,PrintTemplate
declare module "esri/tasks/PrintTemplate" {
	var i: typeof esri.tasks.PrintTemplate;
	export = i;
}
//class,esri/tasks/ProjectParameters,ProjectParameters
declare module "esri/tasks/ProjectParameters" {
	var i: typeof esri.tasks.ProjectParameters;
	export = i;
}
//class,esri/tasks/QueryTask,QueryTask
declare module "esri/tasks/QueryTask" {
	var i: typeof esri.tasks.QueryTask;
	export = i;
}
//class,esri/tasks/RasterData,RasterData
declare module "esri/tasks/RasterData" {
	var i: typeof esri.tasks.RasterData;
	export = i;
}
//class,esri/tasks/RelationParameters,RelationParameters
declare module "esri/tasks/RelationParameters" {
	var i: typeof esri.tasks.RelationParameters;
	export = i;
}
//class,esri/tasks/RelationshipQuery,RelationshipQuery
declare module "esri/tasks/RelationshipQuery" {
	var i: typeof esri.tasks.RelationshipQuery;
	export = i;
}
//class,esri/tasks/RouteParameters,RouteParameters
declare module "esri/tasks/RouteParameters" {
	var i: typeof esri.tasks.RouteParameters;
	export = i;
}
//class,esri/tasks/RouteResult,RouteResult
declare module "esri/tasks/RouteResult" {
	var i: typeof esri.tasks.RouteResult;
	export = i;
}
//class,esri/tasks/RouteTask,RouteTask
declare module "esri/tasks/RouteTask" {
	var i: typeof esri.tasks.RouteTask;
	export = i;
}
//class,esri/tasks/ServiceAreaParameters,ServiceAreaParameters
declare module "esri/tasks/ServiceAreaParameters" {
	var i: typeof esri.tasks.ServiceAreaParameters;
	export = i;
}
//class,esri/tasks/ServiceAreaSolveResult,ServiceAreaSolveResult
declare module "esri/tasks/ServiceAreaSolveResult" {
	var i: typeof esri.tasks.ServiceAreaSolveResult;
	export = i;
}
//class,esri/tasks/ServiceAreaTask,ServiceAreaTask
declare module "esri/tasks/ServiceAreaTask" {
	var i: typeof esri.tasks.ServiceAreaTask;
	export = i;
}
//class,esri/tasks/StatisticDefinition,StatisticDefinition
declare module "esri/tasks/StatisticDefinition" {
	var i: typeof esri.tasks.StatisticDefinition;
	export = i;
}
//class,esri/tasks/TrimExtendParameters,TrimExtendParameters
declare module "esri/tasks/TrimExtendParameters" {
	var i: typeof esri.tasks.TrimExtendParameters;
	export = i;
}
//class,esri/tasks/UniqueValueDefinition,UniqueValueDefinition
declare module "esri/tasks/UniqueValueDefinition" {
	var i: typeof esri.tasks.UniqueValueDefinition;
	export = i;
}
//class,esri/tasks/query,Query0
declare module "esri/tasks/query" {
	var i: typeof esri.tasks.Query;
	export = i;
}
//class,esri/toolbars/draw,Draw
declare module "esri/toolbars/draw" {
	var i: typeof esri.toolbars.Draw;
	export = i;
}
//class,esri/toolbars/edit,Edit
declare module "esri/toolbars/edit" {
	var i: typeof esri.toolbars.Edit;
	export = i;
}
//class,esri/toolbars/navigation,Navigation
declare module "esri/toolbars/navigation" {
	var i: typeof esri.toolbars.Navigation;
	export = i;
}
//class,esri/undoManager,UndoManager
declare module "esri/undoManager" {
	var i: typeof esri.UndoManager;
	export = i;
}
//class,esri/virtualearth/VEAddress,VEAddress
declare module "esri/virtualearth/VEAddress" {
	var i: typeof esri.virtualearth.VEAddress;
	export = i;
}
//class,esri/virtualearth/VEGeocodeResult,VEGeocodeResult
declare module "esri/virtualearth/VEGeocodeResult" {
	var i: typeof esri.virtualearth.VEGeocodeResult;
	export = i;
}
//class,esri/virtualearth/VEGeocoder,VEGeocoder
declare module "esri/virtualearth/VEGeocoder" {
	var i: typeof esri.virtualearth.VEGeocoder;
	export = i;
}
//class,esri/virtualearth/VETiledLayer,VETiledLayer
declare module "esri/virtualearth/VETiledLayer" {
	var i: typeof esri.virtualearth.VETiledLayer;
	export = i;
}
