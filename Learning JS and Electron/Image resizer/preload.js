const os = require('os');
const path = require('path');
const Toastify = require('toastify-js');
const { ContextBridge, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('os', {
    homedir: () => os.homedir(),
});

contextBridge.exposeInMainWorld('path', {
    join: (...args) => path.join(...args),
});

contextBridge.exposeInMainWorld('Toastify', {
    toast: (options) => Toastify(options).showToast(),
});