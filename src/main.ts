import "dotenv/config";
import WebSocket from "ws";
global.WebSocket = WebSocket;
import * as Misskey from "misskey-js";

if (!process.env.MISSKEY_TOKEN) throw new Error("MISSKEY_TOKEN is not defined");

const stream = new Misskey.Stream("https://misskey.test", { token: process.env.MISSKEY_TOKEN }, { WebSocket: WebSocket });
const mainChannel = stream.useChannel("main");
// done!
mainChannel.on("notification", notification => {
	console.log("notification received", notification);
	if (notification.type !== "mention") return;
	if ("isBot" in notification.user && notification.user.isBot) return;
	
	console.log("mention received", notification);
	// type: "mention";
	// user: User;
	// userId: User["id"];
	// note: Note;
	
	/* Note typings
		id: ID;
		createdAt: DateString;
		text: string | null;
		cw: string | null;
		user: User;
		userId: User['id'];
		reply?: Note;
		replyId: Note['id'];
		renote?: Note;
		renoteId: Note['id'];
		files: DriveFile[];
		fileIds: DriveFile['id'][];
		visibility: 'public' | 'home' | 'followers' | 'specified'; <- I think the reply should be the same visibility as the mention
		visibleUserIds?: User['id'][]; // Also maybe we should ask fedi about how it should behave with replies in general
		localOnly?: boolean;
		myReaction?: string;
		reactions: Record<string, number>;
		renoteCount: number;
		repliesCount: number;
		poll?: {
			expiresAt: DateString | null;
			multiple: boolean;
			choices: {
				isVoted: boolean;
				text: string;
				votes: number;
			}[];
		};
		emojis: {
			name: string;
			url: string;
		}[];
		uri?: string;
		url?: string;
		isHidden?: boolean;
	*/
	// there is no "type" in package.json okay	
	





	
});
