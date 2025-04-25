import { GoogleGenAI } from '@google/genai';
import { useEffect, useState } from 'react';

export const GreetingsPage: React.FC = () => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Please utilize your API Key to get greeting response..
    const ai = new GoogleGenAI({apiKey: 'process.env.API_KEY' });

    const generateGreeting = async () => { 
        try {
          // Tried out LLM's chunked response. 
          const response = await ai.models.generateContentStream({
              model: 'gemini-2.0-flash',
              contents: 'Write a friendly greeting with a 😊',
          });

          let greeting = '';
          for await (const chunk of response) {
              greeting += chunk.text;
          }
          setMessage(greeting);
          setLoading(false);
          setError(false)
        }
        catch (e){
            console.error('Error fetching greeting:', e);
            setError(true);
            setLoading(false);
        }
    };

    generateGreeting();
  }, []);

  return (
    <>
        {loading && <div>Loading...</div>}
        {error && <div>Error loading greeting.</div>}
        {!loading && !error && message && <div>{message}</div>}
    </>
  );
};