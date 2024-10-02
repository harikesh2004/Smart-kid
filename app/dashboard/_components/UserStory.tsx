'use client';
import { db } from '@/config/db';
import { StoryData } from '@/config/schema';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import router from 'next/router';
import { chatSession } from '@/config/GeminiAi';

interface Story {
  id: string;
  storySubject: string;
  storyType: string;
  ageGroup: string;
  imageStyle: string;
  output: string;
  coverimage: string;
  storyId: string;
}

function UserStory() {
  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const result: any = await db.select().from(StoryData);
        setStories(result);
      } catch (error) {
        console.error('Error fetching stories:', error);
      }
    };

    fetchStories();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-center mb-10">Book Titles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {stories.map((story) => {
          let parsedOutput;
          try {
            parsedOutput = story?.output ? JSON.parse(story.output) : {};
          } catch (error) {
            console.error('Error parsing story output:', error);
            parsedOutput = {}; // Fallback to an empty object if parsing fails
          }
          return (
            <Link
              href={`/ViewStory/${story.storyId}`}
              key={story.storyId}
              className="border border-gray-300 rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <div className="text-center">
                <h2 className="text-xl font-bold mb-2">
                  {story.storySubject || 'Untitled'}
                </h2>
                <Image src={'/educational.png'} alt='coverpage' width={500} height={500}/>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default UserStory;
