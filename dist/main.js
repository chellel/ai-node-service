"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const proxy_1 = require("./utils/proxy");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    console.log(process.env.NODE_ENV);
    if (process.env.NODE_ENV === 'development') {
        (0, proxy_1.useProxy)();
    }
    await app.listen(8100);
}
bootstrap();
//# sourceMappingURL=main.js.map