// pages/api/stories.ts
import { db } from '@/config/db';
import { StoryData } from '@/config/schema';
import { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log('Fetching stories...');
    // Fetch all stories from the database
    const allStories = await db.select().from(StoryData);

    console.log('Fetched stories:', allStories);
    res.status(200).json(allStories);
  } catch (error) {
    console.error('Error fetching stories:', error);
    res.status(500).json({ error: 'Unable to fetch stories' });
  }
}
