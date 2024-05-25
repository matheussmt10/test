"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNestServer = void 0;
const express = require("express");
const core_1 = require("@nestjs/core");
const platform_express_1 = require("@nestjs/platform-express");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const mongoose_zod_1 = require("mongoose-zod");
const zod_1 = require("zod");
const swagger_1 = require("@nestjs/swagger");
(0, mongoose_zod_1.setup)({ z: zod_1.z });
(0, mongoose_zod_1.setup)({ z: null });
(0, mongoose_zod_1.setup)();
const server = express();
const createNestServer = async (expressInstance) => {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(expressInstance), { cors: true });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Shelters API')
        .setDescription('Shelters details')
        .setVersion('1.0')
        .addTag('shelters')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
    }));
    app.enableCors();
    app.listen(4000);
    return app.init();
};
exports.createNestServer = createNestServer;
(0, exports.createNestServer)(server)
    .then()
    .catch((err) => console.error('Nest broken', err));
module.exports.httpHandler = server;
//# sourceMappingURL=main.js.map