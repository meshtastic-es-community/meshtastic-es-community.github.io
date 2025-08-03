import {ReactNode, useState} from "react";
import QRCode from "react-qr-code";
import Link from "@docusaurus/Link";

export const regionConfigs = [
    {"name": "Madrid", "channel": "Madrid", "base64": "CgwaBk1hZHJpZCgBMAESEggBOANABEgBUBtoAcAGAcgGAQ"},
    {"name": "Alicante", "channel": "Alicante", "base64": "Cg4aCEFsaWNhbnRlKAEwARISCAE4A0AESAFQG2gBwAYByAYB"},
    {"name": "Cádiz", "channel": "Cadiz", "base64": "CgsaBUNhZGl6KAEwARISCAE4A0AESAFQG2gBwAYByAYB"},
    {"name": "Cantabria", "channel": "Cantabria", "base64": "Cg8aCUNhbnRhYnJpYSgBMAESEggBOANABEgBUBtoAcAGAcgGAQ"},
    {"name": "Toledo", "channel": "Toledo", "base64": "CgwaBlRvbGVkbygBMAESEggBOANABEgBUBtoAcAGAcgGAQ"},
    {"name": "Valencia", "channel": "Valencia", "base64": "Cg4aCFZhbGVuY2lhKAEwARISCAE4A0AESAFQG2gBwAYByAYB"},
    {"name": "Asturias", "channel": "Asturias", "base64": "Cg4aCEFzdHVyaWFzKAEwARISCAE4A0AESAFQG2gBwAYByAYB"},
    {"name": "Salamanca", "channel": "Salamanca", "base64": "Cg8aCVNhbGFtYW5jYSgBMAESEggBOANABEgBUBtoAcAGAcgGAQ"},
    {"name": "Zaragoza", "channel": "Zaragoza", "base64": "Cg4aCFphcmFnb3phKAEwARISCAE4A0AESAFQG2gBwAYByAYB"},
    {"name": "Euskadi", "channel": "Euskadi", "base64": "Cg0aB0V1c2thZGkoATABEhIIATgDQARIAVAbaAHABgHIBgE"},
    {"name": "Navarra", "channel": "Navarra", "base64": "Cg0aB05hdmFycmEoATABEhIIATgDQARIAVAbaAHABgHIBgE"},
    {"name": "La Rioja", "channel": "LaRioja", "base64": "Cg0aB0xhUmlvamEoATABEhIIATgDQARIAVAbaAHABgHIBgE"}
]

export default function QRsProvinciales(): ReactNode {
    const [selectedRegion, setSelectedRegion] = useState(regionConfigs[0].channel);
    const region = regionConfigs.find((region) => region.channel === selectedRegion);
    const regionLink = "https://meshtastic.org/e/#" + region.base64;
    return <>
        <p>Código QR para añadir el canal. Escanea con la cámara dentro de Meshtastic y pulsa "Añadir".</p>

        <p>
            Selecciona una provincia o región: &nbsp;
            <select id="selectedRegion" value={selectedRegion}
                    onChange={(event) => setSelectedRegion(event.target.value)}>
                {regionConfigs.map((region) => (<option value={region.channel}>{region.name}</option>))}
            </select>
        </p>

        <div className="container">
            <div className="row">
                <div className="col" style={{flex: 0}}>
                    <QRCode value={regionLink} size={200} className={`qr-code shadow--lw`}/>
                </div>
                <div className="col">
                    <p>Los datos del canal son:</p>

                    <p><strong>Nombre</strong>: <code>{region.channel}</code> (sin espacios ni caracteres especiales)</p>

                    <p><strong>Clave / PSK</strong>: <code>AQ==</code> (En Android lo puedes dejar vacío)</p>
                </div>
            </div>
        </div>
        Enlace directo: <Link to={regionLink}>{regionLink}</Link>
    </>
}