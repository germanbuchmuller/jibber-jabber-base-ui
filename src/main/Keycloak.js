/*
import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
 url: "http://jibberjabber.rellum.com.ar:8081/",
 realm: "JibberJabber",
 clientId: "jibberjabber-front",
});
*/

import Keycloak, {KeycloakError, KeycloakPromise} from 'keycloak-js';

const _kc = new Keycloak({
    url: "https://jibberjabber-dev.rellum.com.ar/keycloak",
    realm: "JibberJabber",
    clientId: "jibberjabber-front",
   });
// @ts-ignore
window['kc'] = _kc;
export default _kc;

//export default keycloak;