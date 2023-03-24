const reportTemplate = data => {
    const { 
        date,
        id,
        porn,
        sigrate,
        alcohol,
        ghand,
        water,
        reading,
        exsersize,
        sleep,
        shower,
    } = data;

    return `🗓${ date }\r\n\n
👤 @${ id }\r\n
\r\n
📍بدون پورن ${ !porn ? "❌" : "✅" }\r\n
📍بدون سیگار ${ !sigrate ? "❌" : "✅" }\r\n
📍بدون الکل ${ !alcohol ? "❌" : "✅" }\r\n
📍بدون قند مصنوعی${ !ghand ? "❌" : "✅" }\r\n
📍۱/۵ لیتر آب${ !water ? "❌" : "✅" }\r\n
📍تمرین ${ !exsersize ? "❌" : "✅" }\r\n
📍مطالعه ${ !reading ? "❌" : "✅" }\r\n
📍۸ ساعت خواب${ !sleep ? "❌" : "✅" }\r\n
📍دوش آب سرد${ !shower ? "❌" : "✅" }\r\n
`;
};

module.exports = reportTemplate;
