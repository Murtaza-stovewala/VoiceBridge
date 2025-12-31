import { Chat } from './components/Chat';

export default function TalkToAssistantPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6">
      <div className="flex flex-col items-center justify-center">
        <Chat />
      </div>
    </div>
  );
}
