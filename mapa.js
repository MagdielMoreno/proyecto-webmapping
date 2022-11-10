//Magdiel Moreno, Sergio Felix
//Cargar Mapa
var map = L.map("map").setView([24.797185138215433, -107.39737156889873], 12);

//Mapas
var base = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
  maxZoom: 19,
  attribution: '&copy <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var esriKey = 'AAPK9beea2d50df74138a879e8f5108d2b0bQXHXaF1MnfgdNgB6HfSzq7jRhlVJAxuapuG9n_TY3CVwfNyJ8lKktRConHoMN8XW'

var topografico = L.esri.Vector.vectorBasemapLayer('ArcGIS:Topographic', { apikey: esriKey });

var calles = L.esri.Vector.vectorBasemapLayer('ArcGIS:Streets', { apikey: esriKey });

var navegacion = L.esri.Vector.vectorBasemapLayer('ArcGIS:Navigation', { apikey: esriKey });

var imagenes = L.esri.Vector.vectorBasemapLayer('ArcGIS:Imagery', { apikey: esriKey });

var nova = L.esri.Vector.vectorBasemapLayer('ArcGIS:Nova', { apikey: esriKey });

var osm = L.esri.Vector.vectorBasemapLayer("OSM:Standard", { apiKey: esriKey });

//Tile
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap",
  className: "map-tiles",
}).addTo(map);

//Iconos
var autIcon = new L.icon({
  iconUrl: "icono.png",
  iconSize: [20, 20],
});

function icons(feature, layer) {
  layer.bindPopup("<h4>" + feature.properties.Nombre + "</h4>");
  layer.setIcon(autIcon);
}

//Minimap
var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib='Map data &copy; OpenStreetMap contributors';
var osm2 = new L.TileLayer(osmUrl, {minZoom: 0, maxZoom: 13, attribution: osmAttrib });
var miniMap = new L.Control.MiniMap(osm2, { toggleDisplay: true }).addTo(map);

//Datos Mapa
var d1 = L.geoJson(d1, {
  onEachFeature: icons,
});

var d2 = L.geoJson(d2, {
  onEachFeature: icons,
});

var d3 = L.geoJson(d3, {
  onEachFeature: icons,
});

var d4 = L.geoJson(d4, {
  onEachFeature: icons,
});

var d5 = L.geoJson(d5, {
  onEachFeature: icons,
});

var d6 = L.geoJson(d6, {
  onEachFeature: icons,
});

var d7 = L.geoJson(d7, {
  onEachFeature: icons,
});

var d8 = L.geoJson(d8, {
  onEachFeature: icons,
});

var d9 = L.geoJson(d9, {
  onEachFeature: icons,
});

function getColor(d) {
  return d == "Sinaloa" ? "#e5e5e5" : "#e5e5e5";
}

function estilo(feature) {
  return {
    fillColor: getColor(feature.properties.NOM_ENT),
    weight: 1,
    opacity: 1,
    color: "black",
    dashArray: 0,
    fillOpacity: 0.5,
  };
}

function popup(feature, layer) {
  if (feature.properties && feature.properties.NOM_ENT) {
    layer.bindPopup(feature.properties.NOM_ENT);
  }
}

//Poligonos
var estadosinaloa = L.geoJson(estadosinaloa, {
  style: estilo,
  onEachFeature: popup,
});

var municipios = L.geoJson(municipios, {
  style: estilo,
  onEachFeature: popup,
});

var ahome = L.geoJson(ahome, {
  style: estilo,
  onEachFeature: popup,
});

var angostura = L.geoJson(angostura, {
  style: estilo,
  onEachFeature: popup,
});

var badiraguato = L.geoJson(badiraguato, {
  style: estilo,
  onEachFeature: popup,
});

var choix = L.geoJson(choix, {
  style: estilo,
  onEachFeature: popup,
});

var concordia = L.geoJson(concordia, {
  style: estilo,
  onEachFeature: popup,
});

var cosala = L.geoJson(cosala, {
  style: estilo,
  onEachFeature: popup,
});

var culiacan = L.geoJson(culiacan, {
  style: estilo,
  onEachFeature: popup,
});

var elfuerte = L.geoJson(elfuerte, {
  style: estilo,
  onEachFeature: popup,
});

var elota = L.geoJson(elota, {
  style: estilo,
  onEachFeature: popup,
});

var escuinapa = L.geoJson(escuinapa, {
  style: estilo,
  onEachFeature: popup,
});

var guasave = L.geoJson(guasave, {
  style: estilo,
  onEachFeature: popup,
});

var mazatlan = L.geoJson(mazatlan, {
  style: estilo,
  onEachFeature: popup,
});

var mocorito = L.geoJson(mocorito, {
  style: estilo,
  onEachFeature: popup,
});

var navolato = L.geoJson(navolato, {
  style: estilo,
  onEachFeature: popup,
});

var rosario = L.geoJson(rosario, {
  style: estilo,
  onEachFeature: popup,
});

var salvadoralvarado = L.geoJson(salvadoralvarado, {
  style: estilo,
  onEachFeature: popup,
});

var sanignacio = L.geoJson(sanignacio, {
  style: estilo,
  onEachFeature: popup,
});

var sinaloa = L.geoJson(sinaloa, {
  style: estilo,
  onEachFeature: popup,
});

//Layer Control
var mapabase = {
  "Mapa Base": base,
  "Topografico" : topografico,
  "Calles" : calles,
  "Navegacion" : navegacion,
  "Imagenes" : imagenes,
  "Nova" : nova
};

var capabase = {
  "Sinaloa (Estado)" : estadosinaloa,
  "Sinaloa (Division Municipal)" : municipios,
  "Ahome" : ahome,
  "Angostura" : angostura,
  "Badiraguato" : badiraguato,
  "Choix" : choix,
  "Concordia" : concordia,
  "Cosala" : cosala,
  "Culiacan" : culiacan,
  "El Fuerte" : elfuerte,
  "Elota" : elota,
  "Escuinapa" : escuinapa,
  "Guasave" : guasave,
  "Mazatlan" : mazatlan,
  "Mocorito" : mocorito,
  "Navolato" : navolato,
  "Rosario" : rosario,
  "Salvador Alvarado" : salvadoralvarado,
  "San Ignacio" : sanignacio,
  "Sinaloa" : sinaloa,
  "Abarrotes, Alimentos, Bebidas, Hielo y Tabaco" : d1,
  "Tiendas de Autoservicio y Departamentales" : d2,
  "Productos Textiles, Bisuteria, Accesorios de Vestir y Calzado" : d3,
  "Articulos para el Cuidado de la Salud" : d4,
  "Articulos de Papeleria, Esparcimiento y otros de uso Personal" : d5,
  "Enseres Domesticos, Computadoras, Decoracion de interiores y Usados" : d6,
  "Ferreteria, Tlapaleria y Vidrios" : d7,
  "Vehiculos de Motor, Refacciones, Combustibles y Lubricantes" : d8,
  "Internet, Catalogos Impresos, Television y Similares" : d9
};

L.control.layers(mapabase, capabase).addTo(map);
