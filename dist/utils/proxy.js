"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useProxy = void 0;
const undici_1 = require("undici");
const PROXY_ADDRESS = `http://127.0.0.1:7897`;
const useProxy = () => {
    const dispatcher = new undici_1.ProxyAgent({ uri: new URL(PROXY_ADDRESS).toString() });
    (0, undici_1.setGlobalDispatcher)(dispatcher);
    console.log('-----全局代理生效-----');
};
exports.useProxy = useProxy;
//# sourceMappingURL=proxy.js.map