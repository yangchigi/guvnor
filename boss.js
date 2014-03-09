var Container = require("wantsit").Container,
	path = require("path");

var config = require("rc")("boss", path.resolve(__dirname, ".bossrc"));

var container = new Container();
container.register("config", config);
container.createAndRegister("boss", require("./lib/BossRPC"));
container.createAndRegister("processStarter", require("./lib/DaemonStarter"), config.process.socket, path.resolve(__dirname, "process.js"));