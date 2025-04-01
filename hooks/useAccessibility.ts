/**
 * Custom hook to manage accessibility settings.
 *
 * @returns {Object} An object containing the current accessibility settings,
 * a function to change the zoom level, a function to toggle accessibility options,
 * and a function to reset accessibility settings to their default values.
 *
 * @property {Object} accessibility - The current accessibility settings.
 * @property {number} accessibility.zoom - The current zoom level (default is 1).
 * @property {boolean} accessibility.grayscale - Whether grayscale mode is enabled.
 * @property {boolean} accessibility["invert-contrast"] - Whether invert contrast mode is enabled.
 * @property {boolean} accessibility["highlight-links"] - Whether highlight links mode is enabled.
 * @property {boolean} accessibility["highlight-headers"] - Whether highlight headers mode is enabled.
 * @property {boolean} accessibility["stop-animations"] - Whether stop animations mode is enabled.
 * @property {function} onZoomChange - Function to change the zoom level.
 * @param {number} dir - The direction to change the zoom level (positive to increase, negative to decrease).
 * @property {function} onChangeAccessibility - Function to toggle an accessibility option.
 * @param {keyof TAcccibility} name - The name of the accessibility option to toggle.
 * @property {function} restAccessibility - Function to reset all accessibility settings to their default values.
 */
import { TAcccibility } from "@/types/app.type";
import { useState } from "react";

const EMPTY_ACCESSIBILITY = {
  zoom: 1,
  grayscale: false,
  "invert-contrast": false,
  "highlight-links": false,
  "highlight-headers": false,
  "stop-animations": false,
};

export const useAccessibility = () => {
  const MIN_ZOOM = 1;
  const MAX_ZOOM = 3;

  const [accessibility, setAccessibility] = useState(EMPTY_ACCESSIBILITY);

  const onZoomChange = (dir: number) => {
    setAccessibility((prev) => {
      const { zoom } = prev;
      const newZoom = Number(zoom || MIN_ZOOM) + dir;
      if (newZoom > MAX_ZOOM) return prev;
      if (newZoom < MIN_ZOOM) return prev;
      return { ...prev, zoom: newZoom };
    });
  };

  const onChangeAccessibility = (name: keyof TAcccibility) => {
    setAccessibility((prev) => {
      return { ...prev, [name]: !prev[name] };
    });
  };

  const restAccessibility = () => {
    setAccessibility({ ...EMPTY_ACCESSIBILITY });
  };

  return {
    accessibility,
    onZoomChange,
    onChangeAccessibility,
    restAccessibility,
  };
};
