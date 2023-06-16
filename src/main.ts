import "dotenv/config";
import WebSocket from "ws";
if (!process.env.MISSKEY_TOKEN || !process.env.INSTANCE_HOST) throw new Error("MISSKEY_TOKEN or INSTANCE_HOST is not defined");

const ws = new WebSocket(`wss://${process.env.INSTANCE_HOST}/streaming?i=${process.env.MISSKEY_TOKEN}`);
ws.once("open", () => {
	console.log("connected");
	ws.send(JSON.stringify({
		type: "connect",
		body: {
			channel: "homeTimeline", //homeTimeline
			id: "homeTimeline"
		}
	}));
});
ws.once("closed", () => { console.log("disconnected"); });
ws.on("message", (data: Buffer) => {
	const json = JSON.parse(Buffer.from(data as any, "base64").toString("utf-8"));
	if (!json) return;

	console.log(json);
});
