const analizador_gramatical = require("core-nlp-wrapper");
const app_response_prototype = function (args, data) {
    return Object.assign({}, {
        app: args.app_id,
        date: new Date()
    }, data);
};

const digest_query_in_natural_language = function(query) {
    return analizador_gramatical.parse_text(query).then(data => {
        console.log(data);
        return data;
    })
};

module.exports = function(args_parameters = {}) {
    const args = Object.assign({}, {
        app_id: "Core NLP by HTTP",
        port: false,
        browser: "firefox"
    }, args_parameters);
    const child_process = require("child_process");
    const express = require("express");
    const body_parser = require("body-parser");
    const cors = require("cors");
    const app = express();
    app.use(cors());
    app.use(body_parser.urlencoded({ extended: false }));
    app.use(body_parser.json());
    app.use("/", express.static(__dirname + "/app"));
    app.get("/query", async function (request, response) {
        try {
            const consulta = request.query.q;
            if(typeof consulta !== "string") {
                throw new Error("Requests on «/query» using method GET must provide a «q» parameter in querystring");
            }
            if(!consulta.length) {
                throw new Error("Requests on «/query» using method GET must provide a non-empty «q» parameter in querystring");
            }
            const syntax_tree = await digest_query_in_natural_language(consulta);
            response.json(app_response_prototype(args, {
                query: consulta,
                status: "OK",
                result: {
                    syntax_tree: JSON.parse(syntax_tree)
                },
            }));
        } catch(error) {
            response.json(app_response_prototype(args, {
                status: "ERROR",
                error_type: error.name,
                error: error.message,
            }));
        }
    });
    const server = require("http").createServer(app);
    server.listen(args.port || 9095, function () {
        const address = server.address();
        const host = address.address === "::" ? "127.0.0.1" : address.address;
        const port = address.port;
        console.log("[*] The app «" + args.app_id + "» is listening requests on:\n - http://" + host + ":" + port);
        console.log("[*] The browser should be opened automatically now.");
        Open_by_browser: {
            try {
                child_process.execSync(`${args.browser} http://${host}:${port}`);
                break Open_by_browser;
            } catch (error) {
                try {
                    child_process.execSync(`firefox http://${host}:${port}`);
                    break Open_by_browser;
                } catch (error) {
                    try {
                        child_process.execSync(`google_chrome http://${host}:${port}`);
                        break Open_by_browser;
                    } catch (error) {
                        // @OK: no se pudo iniciar ningún browser.
                    }
                }
            }
        }
    });
};