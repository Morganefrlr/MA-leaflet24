import { createControlComponent } from '@react-leaflet/core';
import "leaflet.locatecontrol"; 
import "leaflet.locatecontrol/dist/L.Control.Locate.min.css"; 
import L from "leaflet"; 


const { Locate } = L.Control;

function createLocateInstance() {
  const instance = new Locate();

  return instance;
}

export const LocateControl = createControlComponent(createLocateInstance);