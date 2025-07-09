import { defineCollection } from 'astro:content';
import { discordEventSchema } from './schemas/event';

const events = defineCollection({
	loader: async () => {
		const eventData = await fetch(
			`https://discord.com/api/guilds/${import.meta.env.DISCORD_GUILD_ID}/scheduled-events`,
			{
				headers: {
					Authorization: `Bot ${import.meta.env.DISCORD_BOT_TOKEN}`,
				},
			},
		);
		return await eventData.json();
	},
	schema: discordEventSchema,
});

export const collections = { events };
