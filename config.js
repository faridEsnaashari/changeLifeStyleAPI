const dotenv = require('dotenv');
const path = require('path');
dotenv.config();

const env = {
    GENERAL: {
        ROOT_ENDPOINT: process.env.ROOT_ENDPOINT,
        NODE_ENV: process.env.NODE_ENV,
        SERVER_PORT: process.env.PORT,
        APP_URL: process.env.APP_URL,
    },

    TELEGRAM: {
        BOT_TOKEN: process.env.BOT_TOKEN,
        CHAT_ID: process.env.CHAT_ID,
    }
};

const paths = {
    middlewares: {
        responser: path.resolve("./api/middlewares/responser"),
    },
    tools: {
        helper: path.resolve("./api/tools/helper"),
        validationTools: path.resolve("./api/tools/validationTools"),
        statusCodes: path.resolve("./api/tools/statusCodes"),
    },
    templates: {
        createTemplate: path.resolve("./api/templates/index"),
        reportTemplate: path.resolve("./api/templates/report/report"),
    },
    v1: {
        path: path.resolve("./api/v1/v1"),
        controllers: {
            report: path.resolve("./api/v1/controllers/report"),
        },
        validators: {
            report: path.resolve("./api/v1/validators/report"),
        },
        routes: {
            report: path.resolve("./api/v1/routes/report"),
        },
    },
};

module.exports.env = env;
module.exports.paths = paths;
