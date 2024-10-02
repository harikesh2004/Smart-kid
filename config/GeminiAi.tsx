/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run() {
    const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "create kids story on description for 5-8 Years kids, Educational story, and all images in Paper cut style: story of boy and Magic School, give me 5 chapter, With detailed image text prompt for each of chapter and image prompt for story cover book with story name, all in JSON field format"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"story_name\": \"The Boy Who Found Magic School\",\n  \"cover_image\": {\n    \"description\": \"A boy with bright eyes and a mischievous grin stands in front of a towering, colorful castle. Magical swirls of color surround the castle, and a large, sparkling sign reads 'Magic School'.\",\n    \"style\": \"Paper cut\",\n    \"details\": {\n      \"boy\": {\n        \"hair\": \"Brown\",\n        \"shirt\": \"Blue\",\n        \"pants\": \"Green\",\n        \"expression\": \"Excited\"\n      },\n      \"castle\": {\n        \"towers\": \"Four\",\n        \"colors\": \"Red, yellow, green, blue\",\n        \"windows\": \"Circular, with rainbows inside\",\n        \"doors\": \"Arched, with golden handles\"\n      },\n      \"sign\": {\n        \"font\": \"Cursive\",\n        \"sparkles\": \"Golden\",\n        \"background\": \"Purple\"\n      }\n    }\n  },\n  \"chapters\": [\n    {\n      \"title\": \"A Day Like No Other\",\n      \"description\": \"A young boy named Leo wakes up on a sunny day, excited about the adventures that await. But as he walks to school, he stumbles upon a strange, shimmering portal in the park.\",\n      \"image\": {\n        \"description\": \"Leo, with his brown hair and blue shirt, walks through a park with trees and flowers. A shimmering portal, swirling with rainbow colors, is hidden behind a bush.\",\n        \"style\": \"Paper cut\",\n        \"details\": {\n          \"Leo\": {\n            \"expression\": \"Curious\",\n            \"backpack\": \"Red, with a blue butterfly sticker\"\n          },\n          \"portal\": {\n            \"colors\": \"Red, orange, yellow, green, blue, indigo, violet\",\n            \"shape\": \"Circular\",\n            \"sparkles\": \"Gold\"\n          }\n        }\n      }\n    },\n    {\n      \"title\": \"Welcome to Magic School\",\n      \"description\": \"Leo cautiously steps through the portal and finds himself in a magical schoolyard filled with talking animals, floating books, and a friendly, smiling wizard.\",\n      \"image\": {\n        \"description\": \"Leo stands in awe as he looks around the magical schoolyard. A cat wearing a graduation cap walks past, while a book floats through the air. A wizard with a long white beard smiles warmly at Leo.\",\n        \"style\": \"Paper cut\",\n        \"details\": {\n          \"Leo\": {\n            \"expression\": \"Amazed\"\n          },\n          \"cat\": {\n            \"color\": \"Black\",\n            \"hat\": \"Red and gold graduation cap\"\n          },\n          \"book\": {\n            \"cover\": \"Blue and silver\",\n            \"text\": \"Magic 101\",\n            \"glowing\": \"Green\"\n          },\n          \"wizard\": {\n            \"robe\": \"Purple and gold\",\n            \"hat\": \"Tall, pointed, blue\"\n          }\n        }\n      }\n    },\n    {\n      \"title\": \"Making New Friends\",\n      \"description\": \"Leo meets a friendly dragon named Sparky and a mischievous fairy named Flutter. They become fast friends, and together they explore the magical school.\",\n      \"image\": {\n        \"description\": \"Leo, Sparky the dragon, and Flutter the fairy stand together, smiling. Sparky is green with purple wings, and Flutter has sparkling blue wings and a yellow dress.\",\n        \"style\": \"Paper cut\",\n        \"details\": {\n          \"Leo\": {\n            \"expression\": \"Happy\"\n          },\n          \"Sparky\": {\n            \"wings\": \"Purple\",\n            \"eyes\": \"Yellow\"\n          },\n          \"Flutter\": {\n            \"dress\": \"Yellow\",\n            \"wings\": \"Blue with silver glitter\"\n          }\n        }\n      }\n    },\n    {\n      \"title\": \"Learning Magical Secrets\",\n      \"description\": \"Leo learns about different kinds of magic, from levitation to fire spells, and practices his new skills with his friends.\",\n      \"image\": {\n        \"description\": \"Leo, Sparky, and Flutter are in a classroom. A colorful, swirling magic book is open on a desk, and the three friends are looking at it with wonder. Leo holds a small, glowing wand.\",\n        \"style\": \"Paper cut\",\n        \"details\": {\n          \"Leo\": {\n            \"expression\": \"Concentrated\"\n          },\n          \"magic book\": {\n            \"colors\": \"Rainbow\",\n            \"text\": \"Spells and Charms\"\n          },\n          \"wand\": {\n            \"color\": \"Silver\",\n            \"glow\": \"Blue\"\n          }\n        }\n      }\n    },\n    {\n      \"title\": \"Returning Home\",\n      \"description\": \"After a magical day filled with adventures and friendships, Leo says goodbye to his new friends and steps back through the portal, returning home with a heart full of wonder.\",\n      \"image\": {\n        \"description\": \"Leo, with a wistful smile, steps through the shimmering portal back into the park. He waves goodbye to Sparky and Flutter, who stand in the magical schoolyard. Leo holds a small, glowing blue stone, a souvenir from his magical adventure.\",\n        \"style\": \"Paper cut\",\n        \"details\": {\n          \"Leo\": {\n            \"expression\": \"Sad but hopeful\"\n          },\n          \"portal\": {\n            \"colors\": \"Rainbow\",\n            \"sparkles\": \"Gold\"\n          },\n          \"stone\": {\n            \"color\": \"Blue\",\n            \"glow\": \"Pale blue\"\n          }\n        }\n      }\n    }\n  ]\n}\n```"},
          ],
        },
      ],
    });
  
    const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    console.log(result.response.text());
  }
  
  run();