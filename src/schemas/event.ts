import { z } from 'astro:content';

export const discordEventSchema = z.object({
	id: z.string(),
	guild_id: z.string(),
	name: z.string(),
	description: z.string(),
	creator_id: z.string(),
	creator: z.object({
		username: z.string(),
		avatar: z.string(),
	}),
	image: z.string().nullable(),
	privacy_level: z.number(),
	entity_metadata: z.object({
		location: z.string(),
	}),
	scheduled_start_time: z.coerce.date(),
	scheduled_end_time: z.coerce.date(),
});

export type DiscordEvent = z.infer<typeof discordEventSchema>;
