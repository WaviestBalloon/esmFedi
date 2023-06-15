import "dotenv/config";
import * as Misskey from "misskey-js";

if (!process.env.MISSKEY_TOKEN) throw new Error("MISSKEY_TOKEN is not defined");

const stream = new Misskey.Stream('https://misskey.test', { token: process.env.MISSKEY_TOKEN });
const mainChannel = stream.useChannel('main');
mainChannel.on('notification', notification => {
	console.log('notification received', notification);
});
