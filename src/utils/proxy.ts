
import { setGlobalDispatcher, ProxyAgent } from 'undici';
const PROXY_ADDRESS = `http://127.0.0.1:7897`;

const useProxy = () => {
  const dispatcher = new ProxyAgent({ uri: new URL(PROXY_ADDRESS).toString() });
  setGlobalDispatcher(dispatcher);
  console.log('-----全局代理生效-----')
};

export {
    useProxy
};


