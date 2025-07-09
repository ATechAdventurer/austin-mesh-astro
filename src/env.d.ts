interface ImportMetaEnv {
	readonly DISCORD_GUILD_ID: string;
	readonly DISCORD_BOT_TOKEN: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
