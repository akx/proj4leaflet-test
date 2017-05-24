import L from 'leaflet';
import {EPSG3067} from './projections';
const crs = EPSG3067();
document.write(JSON.stringify(crs));
