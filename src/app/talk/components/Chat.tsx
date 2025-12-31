'use client';

import { useState, useRef, useEffect } from 'react';
import { Bot, Loader2, Mic, Send, User, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getAssistance, type AssistantResponse } from '../actions';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useToast } from '@/hooks/use-toast';

type Message = {
  role: 'user' | 'assistant' | 'system' | 'error';
  content: string | string[];
};

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        "Hello! I'm here to help you with government schemes. Please tell me what problem you're facing. You can speak by tapping the microphone or type your message below.",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Auto-scroll to bottom
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  const handleSimulatedVoiceInput = () => {
    setIsListening(true);
    setInput('Listening...');

    setTimeout(() => {
      setInput("My pension application was rejected and I don't know why.");
      setIsListening(false);
    }, 2000);
  };
  
  const handleSubmit = async (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    if (!input.trim() || isLoading || isListening) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const result: AssistantResponse = await getAssistance(input);

      if (result.success && result.blocker && result.steps) {
        const assistantMessages: Message[] = [
          {
            role: 'assistant',
            content: `Okay, I've looked into it. It seems the main issue might be: **${result.blocker}**`,
          },
          {
            role: 'assistant',
            content: result.steps
          },
        ];
        setMessages((prev) => [...prev, ...assistantMessages]);
      } else {
        throw new Error(result.error || "I'm sorry, I couldn't process that. Please try again.");
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred.";
      const errorToast = toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: errorMessage,
      });
      setMessages((prev) => [
        ...prev,
        { role: 'error', content: errorMessage },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const renderMessageContent = (content: string | string[]) => {
    if (Array.isArray(content)) {
      return (
         <>
         <p className="mb-2">Here are the steps you can take to fix this:</p>
          <ul className="list-disc space-y-2 pl-5">
            {content.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ul>
         </>
      );
    }
    // A simple markdown-like renderer for **bold** text
    return content.split(/(\*\*.*?\*\*)/g).map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={index}>{part.slice(2, -2)}</strong>;
        }
        return part;
    });
  }

  return (
    <Card className="w-full max-w-3xl mx-auto h-[80vh] flex flex-col shadow-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline">
            <Bot/> Talk to Your Assistant
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col gap-4 overflow-hidden">
        <ScrollArea className="flex-1 pr-4" ref={scrollAreaRef}>
            <div className="space-y-4">
            {messages.map((message, index) => (
                <div
                key={index}
                className={cn(
                    'flex items-end gap-2',
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                )}
                >
                {message.role !== 'user' && (
                    <Avatar className="h-8 w-8">
                        <AvatarFallback>
                            {message.role === 'error' ? <AlertTriangle className="text-destructive"/> : <Bot />}
                        </AvatarFallback>
                    </Avatar>
                )}
                <div
                    className={cn(
                    'max-w-[75%] rounded-lg p-3 text-sm shadow-md',
                    message.role === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary',
                    message.role === 'error' && 'bg-destructive/10 text-destructive'
                    )}
                >
                    {renderMessageContent(message.content)}
                </div>
                {message.role === 'user' && (
                    <Avatar className="h-8 w-8">
                        <AvatarFallback><User/></AvatarFallback>
                    </Avatar>
                )}
                </div>
            ))}
            {isLoading && (
                <div className="flex items-end gap-2 justify-start">
                    <Avatar className="h-8 w-8">
                        <AvatarFallback><Bot/></AvatarFallback>
                    </Avatar>
                    <div className="max-w-[75%] rounded-lg p-3 text-sm bg-secondary flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin"/>
                        <span>Thinking...</span>
                    </div>
                </div>
            )}
            </div>
        </ScrollArea>

        <form onSubmit={handleSubmit} className="flex items-end gap-2">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your problem here..."
            className="flex-1 resize-none"
            rows={1}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit();
              }
            }}
            disabled={isLoading || isListening}
          />
          <Button type="button" size="icon" variant="outline" onClick={handleSimulatedVoiceInput} disabled={isLoading || isListening}>
            <Mic className={cn("h-5 w-5", isListening && "text-destructive animate-pulse")} />
            <span className="sr-only">Use Voice</span>
          </Button>
          <Button type="submit" size="icon" disabled={isLoading || isListening || !input.trim()}>
            <Send className="h-5 w-5" />
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
