import Credit from './Credit.js';
import defined from './defined.js';
import Resource from './Resource.js';

    var defaultTokenCredit;
    var defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwMzJhNTk5NS1lMTc5LTQ0MWMtYTc3Mi1lZmE3NjYyZWMwMzAiLCJpZCI6MjU5LCJzY29wZXMiOlsiYXNyIiwiZ2MiXSwiaWF0IjoxNTY5OTMyNDcwfQ.ifTZn9zZ4Tc3UD6yqH8yqwyU-8OgFQN2cqno6HmxWGw';
    var cesiumWebsiteToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4NjE5ZTIzYy0zN2JkLTRjNzEtYmQ5NC02NjMzZjI0MWRhOTUiLCJpZCI6MjU5LCJzY29wZXMiOlsiYXNyIiwiZ2MiXSwiaWF0IjoxNTY5OTM5MjkyfQ.JBBkmCCcbd4De9AawCQStH0IzQXIimYn0wmhZ4YD2Ts';

    /**
     * Default settings for accessing the Cesium ion API.
     * @exports Ion
     *
     * An ion access token is only required if you are using any ion related APIs.
     * A default access token is provided for evaluation purposes only.
     * Sign up for a free ion account and get your own access token at {@link https://cesium.com}
     *
     * @see IonResource
     * @see IonImageryProvider
     * @see IonGeocoderService
     * @see createWorldImagery
     * @see createWorldTerrain
     */
    var Ion = {};

    /**
     * Gets or sets the default Cesium ion access token.
     *
     * @type {String}
     */
    Ion.defaultAccessToken = cesiumWebsiteToken;

    /**
     * Gets or sets the default Cesium ion server.
     *
     * @type {String|Resource}
     * @default https://api.cesium.com
     */
    Ion.defaultServer = new Resource({ url: 'https://api.cesium.com/' });

    Ion.getDefaultTokenCredit = function(providedKey) {
        if (providedKey !== defaultAccessToken) {
            return undefined;
        }

        if (!defined(defaultTokenCredit)) {
            var defaultTokenMessage = '<b> \
            This application is using Cesium\'s default ion access token. Please assign <i>Cesium.Ion.defaultAccessToken</i> \
            with an access token from your ion account before making any Cesium API calls. \
            You can sign up for a free ion account at <a href="https://cesium.com">https://cesium.com</a>.</b>';

            defaultTokenCredit = new Credit(defaultTokenMessage, true);
        }

        return defaultTokenCredit;
    };
export default Ion;
