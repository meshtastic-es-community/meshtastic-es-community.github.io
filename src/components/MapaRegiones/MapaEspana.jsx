import React, { useEffect, useState } from "react";
import paths from "./provinciasPaths.json";
import "./MapaEspana.css"; 

// --- Se elimina la importación local de mesh_presets.json --- 
// import localPresetsData from './mesh_presets.json'; 

const PRESETS_URL = "https://datos.meshtastic.es/provincias"; 

const presetColors = {
  //"ShortTurbo": "#f71ec0ff",   
  "ShortFast": "#ff6600ff",    
  "ShortSlow": "#FFEE93",    
  "MediumFast": "#00c4da",   
  "MediumSlow": "#fda934",   
  "LongFast": "#5cc482",     
  //"LongModerate": "#1f6639ff", 
  //"LongSlow": "#08818aff",
};
const DEFAULT_COLOR = "#ccccccff"; 
const DEFAULT_PRESET = "MediumFast";
const NO_DATA_PRESET = "Sin Datos";


const MapaEspana = () => {
  const [presets, setPresets] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [tooltip, setTooltip] = useState({
    visible: false,
    content: "",
    x: 0,
    y: 0,
  });

  

// --- Lógica para obtener los datos por HTTP ---
useEffect(() => {
    const fetchData = async () => {
        try {
            // 1. Obtener la respuesta de la URL
            const response = await fetch(PRESETS_URL);
            
            if (!response.ok) {
                // Manejar errores de respuesta HTTP (ej: 404, 500)
                throw new Error(`Error HTTP: ${response.status} (${response.statusText}).`);
            }
            
            // 2. Parsear el JSON de la respuesta
            const data = await response.json();
            
            // 3. Procesar los datos para crear el mapeo de presets
            const mapping = {};
            data.forEach((p) => {
                // Asumiendo que la estructura es la misma (objeto con 'nombre' y 'preset')
                mapping[p.nombre] = p.preset || DEFAULT_PRESET;
            });

            setPresets(mapping);
            setLoading(false); 
          
        } catch (err) {
            console.error("Fallo al obtener o procesar datos:", err);
            // Mostrar un error más descriptivo
            setError(`Fallo al obtener o procesar los datos: ${err.message}. Revisa la consola para más detalles.`);
            setLoading(false);
        }
    };
    
    fetchData();
}, []); // Se ejecuta una sola vez al montar el componente
// --- Fin de la lógica para obtener los datos por HTTP ---


  const getColor = (nombre) => {
    if (nombre === "Marco") return 'none'; 
    const preset = presets[nombre];
    return presetColors[preset] || DEFAULT_COLOR;
  };

  const handleMouseEnter = (e, nombre) => {
    if (nombre === "Marco") return;
    if (nombre === "Africa") return;
    
    var preset = presets[nombre] || NO_DATA_PRESET;
    const content = `${nombre} - ${preset}`;
    
    setTooltip({
      visible: true,
      content: content,
      x: e.clientX, 
      y: e.clientY, 
    });
  };

  const handleMouseMove = (e) => {
    if (tooltip.visible) {
      setTooltip((prev) => ({
        ...prev,
        x: e.clientX, 
        y: e.clientY, 
      }));
    }
  };

  const handleMouseLeave = () => {
    setTooltip({ visible: false, content: "", x: 0, y: 0 });
  };
  
  // Se añade un mensaje para cuando está cargando o cuando hay un error
  if (loading) {
     return <div className="contenedor">Cargando datos del mapa...</div>;
  }
  if (error) {
     return <div className="contenedor error">Error: {error}</div>;
  }

  return (
    <div className="contenedor">
        <div className="mapa-leyenda">
            <h4>Presets LoRa Meshtastic</h4>
            {Object.entries(presetColors).map(([preset, color]) => (
                <div key={preset} className="leyenda-item">
                    <span style={{ backgroundColor: color }} className="leyenda-color"></span>
                    {preset}
                </div>
            ))}
            <div key={NO_DATA_PRESET} className="leyenda-item">
                <span style={{ backgroundColor: DEFAULT_COLOR }} className="leyenda-color"></span>
                {NO_DATA_PRESET}
            </div>
        </div>

      <svg
        viewBox="0 0 780.78 713.38"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        onMouseMove={handleMouseMove} 
      >
        {Object.entries(paths).map(([nombre, d]) => {
          return (
            <path
              key={nombre}
              d={d}
              fill={getColor(nombre)}
              stroke="#333"
              strokeWidth="0.5"
              className="provincia"
              onMouseEnter={(e) => handleMouseEnter(e, nombre)}
              onMouseLeave={handleMouseLeave}
            />
          );
        })}
      </svg>
      
      <div 
          className="tooltip" 
          style={{ 
              display: tooltip.visible ? 'block' : 'none',
              left: `${tooltip.x + 10}px`, 
              top: `${tooltip.y + 10}px`,
          }}>
          {tooltip.content}
      </div>
    </div>
  );
};

export default MapaEspana;