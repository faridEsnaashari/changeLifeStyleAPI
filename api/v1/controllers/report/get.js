const axios = require("axios");

const createTemplate = require("../../../templates");

const { INTERNAL_ERR, SUCCESS_MSG } = require(`${ global.paths.tools.statusCodes }`);

const get = async(req, res) => {
    const data = req.query;

    const date = new Date().toLocaleDateString('fa-IR-u-nu-latn', { year: 'numeric', month: '2-digit', day: '2-digit' });

    const preparedData = {};

    Object.entries(data).forEach(([ key, value ]) => value === "true" ? preparedData[key] = true : preparedData[key] = false);

    const text = createTemplate("report", { ...preparedData, date, id: data.id });

    try{
        await axios.post(`https://api.telegram.org/bot${ global.env.TELEGRAM.BOT_TOKEN }/sendMessage`, {
            chat_id: global.env.TELEGRAM.CHAT_ID,
            text 
        });
        res.responser(SUCCESS_MSG, "message has been sent to the channel");
    }
    catch(err){
        console.error(err);
        res.responser(INTERNAL_ERR, "internal server error");
    }

};

module.exports = get;
