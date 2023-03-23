const reportTemplate = require("./report/report");

const createTemplate = (template, data) => {
    switch(template){
        case "report":
            return reportTemplate(data);
    }
};

module.exports = createTemplate;
