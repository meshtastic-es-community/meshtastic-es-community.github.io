import {ReactNode, useState} from "react";
import QRCode from "react-qr-code";
import Link from "@docusaurus/Link";

export const regionConfigs = [
    {"name": "Madrid", "safeName": "Madrid", "base64": "CgwaBk1hZHJpZCgBMAESEggBOANABEgBUBtoAcAGAcgGAQ"},
    {"name": "Alicante", "safeName": "Alicante", "base64": "Cg4aCEFsaWNhbnRlKAEwARISCAE4A0AESAFQG2gBwAYByAYB"},
    {"name": "Cádiz", "safeName": "Cadiz", "base64": "CgsaBUNhZGl6KAEwARISCAE4A0AESAFQG2gBwAYByAYB"},
    {"name": "Cantabria", "safeName": "Cantabria", "base64": "Cg8aCUNhbnRhYnJpYSgBMAESEggBOANABEgBUBtoAcAGAcgGAQ"},
    {"name": "Toledo", "safeName": "Toledo", "base64": "CgwaBlRvbGVkbygBMAESEggBOANABEgBUBtoAcAGAcgGAQ"},
    {"name": "Valencia", "safeName": "Valencia", "base64": "Cg4aCFZhbGVuY2lhKAEwARISCAE4A0AESAFQG2gBwAYByAYB"},
    {"name": "Asturias", "safeName": "Asturias", "base64": "Cg4aCEFzdHVyaWFzKAEwARISCAE4A0AESAFQG2gBwAYByAYB"},
    {"name": "Salamanca", "safeName": "Salamanca", "base64": "Cg8aCVNhbGFtYW5jYSgBMAESEggBOANABEgBUBtoAcAGAcgGAQ"},
    {"name": "Zaragoza", "safeName": "Zaragoza", "base64": "Cg4aCFphcmFnb3phKAEwARISCAE4A0AESAFQG2gBwAYByAYB"},
    {"name": "Euskadi", "safeName": "Euskadi", "base64": "Cg0aB0V1c2thZGkoATABEhIIATgDQARIAVAbaAHABgHIBgE"},
    {"name": "Navarra", "safeName": "Navarra", "base64": "Cg0aB05hdmFycmEoATABEhIIATgDQARIAVAbaAHABgHIBgE"},
    {"name": "La Rioja", "safeName": "LaRioja", "base64": "Cg0aB0xhUmlvamEoATABEhIIATgDQARIAVAbaAHABgHIBgE"}
]

export default function QRsProvinciales(): ReactNode {
    const [selectedRegion, setSelectedRegion] = useState(regionConfigs[0].safeName);
    const region = regionConfigs.find((region) => region.safeName === selectedRegion);
    const regionLink = "https://meshtastic.org/e/#" + region.base64;
    return <>
        <p>Código QR para añadir el canal. Escanea con la cámara dentro de Meshtastic y pulsa "Añadir".</p>

        <p>
            Selecciona una provincia o región: &nbsp;
            <select id="selectedRegion" value={selectedRegion}
                    onChange={(event) => setSelectedRegion(event.target.value)}>
                {regionConfigs.map((region) => (<option value={region.safeName}>{region.name}</option>))}
            </select>
        </p>

        <div className="container">
            <div className="row">
                <div className="col col--3">
                    <QRCode value={regionLink} size={200} className={`qr-code`}/>
                </div>
                <div className="col">
                    <p>Los datos del canal son:</p>

                    <p><strong>Nombre</strong>: <code>{region.safeName}</code> (sin espacios ni caracteres especiales)</p>

                    <p><strong>Clave / PSK</strong>: <code>AQ==</code> (En Android lo puedes dejar vacío)</p>

                    Enlace directo: <br/>
                    <Link to={regionLink}>{regionLink}</Link>
                </div>
            </div>
        </div>
    </>
}