import express from "express";
import webpack from "webpack";
import path from "path";
import config from "../webpack.config.dev";
import open from "open";

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require("webpack-dev-middleware")(compiler, {
    publicPath: config.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../src/index.htmL"));
});

app.listen(port, function(err) {
    if (err) {
        /* eslint-disable no-console */
        console.log(err);
    } else {
        open(`http://localhost:${port}`);
    }
});