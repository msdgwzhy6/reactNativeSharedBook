export const globalOptions = (global, GLOBAL) => {
  /** react-nantive debugger */
  GLOBAL.XMLHttpRequest =
    GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
  global.FormData = global.originalFormData;
};
