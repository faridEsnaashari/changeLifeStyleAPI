const axios = require("axios");

const createTemplate = require("../../../templates");

const { INTERNAL_ERR, SUCCESS_MSG } = require(`${ global.paths.tools.statusCodes }`);

const get = async(req, res) => {
    const { id, messageId: message_id, messageTime, ...data  } = req.query;

    const persianDate = new Date().toLocaleDateString('fa-IR-u-nu-latn', { year: 'numeric', month: '2-digit', day: '2-digit' });

    const preparedData = {};

    Object.entries(data).forEach(([ key, value ]) => value === "true" ? preparedData[key] = true : preparedData[key] = false);

    const text = createTemplate("report", { ...preparedData, date: persianDate, id });

    const date = new Date().toISOString().split("T")[0];
    const dawn = new Date(date);
    const dawnTime = dawn.getTime();

    try{
        
        const method = messageTime && +messageTime >= dawnTime ? "editMessageText" : "sendMessage";
        const telegramRes = await axios.post(`https://api.telegram.org/bot${ global.env.TELEGRAM.BOT_TOKEN }/${ method }`, {
            message_id,
            chat_id: global.env.TELEGRAM.CHAT_ID,
            text 
        });

        res.responser(SUCCESS_MSG, "message has been sent to the channel", {
            messageId: telegramRes.data.result.message_id,
        });
    }
    catch(err){
        console.error(err);
        res.responser(INTERNAL_ERR, "internal server error");
    }

};

module.exports = get;
