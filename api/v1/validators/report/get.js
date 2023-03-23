const { IsUndefinedOrNull, IsBooleanOrStringBoolean } = require(`${ global.paths.tools.validationTools }`);
const { VALIDATION_ERR } = require(`${ global.paths.tools.statusCodes }`);

const getValidator = (req, res, next) => {
    const { 
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
    } = req.query;

    if(IsUndefinedOrNull(name)){
        return res.responser(VALIDATION_ERR, "undefined field", null, { field: "name" });
    }

    if(IsUndefinedOrNull(shower)){
        return res.responser(VALIDATION_ERR, "undefined field", null, { field: "shower" });
    }

    if(IsUndefinedOrNull(sleep)){
        return res.responser(VALIDATION_ERR, "undefined field", null, { field: "sleep" });
    }

    if(IsUndefinedOrNull(exsersize)){
        return res.responser(VALIDATION_ERR, "undefined field", null, { field: "exsersize" });
    }

    if(IsUndefinedOrNull(reading)){
        return res.responser(VALIDATION_ERR, "undefined field", null, { field: "reading" });
    }

    if(IsUndefinedOrNull(water)){
        return res.responser(VALIDATION_ERR, "undefined field", null, { field: "water" });
    }

    if(IsUndefinedOrNull(ghand)){
        return res.responser(VALIDATION_ERR, "undefined field", null, { field: "ghand" });
    }

    if(IsUndefinedOrNull(alcohol)){
        return res.responser(VALIDATION_ERR, "undefined field", null, { field: "alcohol" });
    }

    if(IsUndefinedOrNull(sigrate)){
        return res.responser(VALIDATION_ERR, "undefined field", null, { field: "sigrate" });
    }

    if(IsUndefinedOrNull(porn)){
        return res.responser(VALIDATION_ERR, "undefined field", null, { field: "porn" });
    }

    if(!IsBooleanOrStringBoolean(shower)){
        return res.responser(VALIDATION_ERR, "wrong format", null, { field: "shower" });
    }

    if(!IsBooleanOrStringBoolean(sleep)){
        return res.responser(VALIDATION_ERR, "wrong format", null, { field: "sleep" });
    }

    if(!IsBooleanOrStringBoolean(exsersize)){
        return res.responser(VALIDATION_ERR, "wrong format", null, { field: "exsersize" });
    }

    if(!IsBooleanOrStringBoolean(reading)){
        return res.responser(VALIDATION_ERR, "wrong format", null, { field: "reading" });
    }

    if(!IsBooleanOrStringBoolean(water)){
        return res.responser(VALIDATION_ERR, "wrong format", null, { field: "water" });
    }

    if(!IsBooleanOrStringBoolean(ghand)){
        return res.responser(VALIDATION_ERR, "wrong format", null, { field: "ghand" });
    }

    if(!IsBooleanOrStringBoolean(alcohol)){
        return res.responser(VALIDATION_ERR, "wrong format", null, { field: "alcohol" });
    }

    if(!IsBooleanOrStringBoolean(sigrate)){
        return res.responser(VALIDATION_ERR, "wrong format", null, { field: "sigrate" });
    }

    if(!IsBooleanOrStringBoolean(porn)){
        return res.responser(VALIDATION_ERR, "wrong format", null, { field: "porn" });
    }

    next();
};

module.exports = getValidator;
