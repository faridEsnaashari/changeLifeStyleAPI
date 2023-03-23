const reportTemplate = data => {
    const { 
        date,
        name,
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

    return `🗓${ date }
👤 ${ name }

📍بدون پورن ${ !porn ? "❌" : "✅" }
📍بدون سیگار ${ !sigrate ? "❌" : "✅" }
📍بدون الکل ${ !alcohol ? "❌" : "✅" }
📍بدون قند مصنوعی${ !ghand ? "❌" : "✅" }
📍۱/۵ لیتر آب${ !water ? "❌" : "✅" }
📍تمرین ${ !exsersize ? "❌" : "✅" }
📍مطالعه ${ !reading ? "❌" : "✅" }
📍۸ ساعت خواب${ !sleep ? "❌" : "✅" }
📍دوش آب سرد${ !shower ? "❌" : "✅" }
`;
};

module.exports = reportTemplate;
