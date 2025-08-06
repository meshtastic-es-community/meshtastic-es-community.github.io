import React from 'react';
import {CookieConsent, OPTIONS} from "react-cookie-consent";
import Link from "@docusaurus/Link";

// Default implementation, that you can customize
export default function Root({children}) {
    return <>
        {/* Cookie consent tracking inspired by
        https://medium.com/@fokke_79992/cookie-consent-and-docusaurus-932aaef27d61
        */}
        <CookieConsent
            disableStyles={true}
            location={OPTIONS.NONE}
            containerClasses="alert alert--secondary cookieBanner__container"
            contentClasses="cookieBanner__content"
            buttonText="Aceptar"
            ariaAcceptLabel="Aceptar"
            buttonClasses="button button--outline button--secondary cookieBanner__button"
            setDeclineCookie>
            Este sitio web utiliza cookies para mejorar la experiencia del usuario. Al continuar navegando, aceptas el uso de cookies.
            &nbsp;<Link to="/politica-de-cookies" className="cookieBanner__link">Política de cookies</Link>
        </CookieConsent>

        {children}
    </>;
}
