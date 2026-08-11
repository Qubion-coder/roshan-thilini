'use client';

import { useState, useEffect } from 'react';

export default function AdminPage() {
  const [prefix, setPrefix] = useState('Mr.');
  const [guestName, setGuestName] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');
  const [origin, setOrigin] = useState('');

  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  const prefixes = ['Mr.', 'Mrs.', 'Miss', 'Mr. & Mrs.', 'Family', 'Dear'];

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName) return;
    const link = `${origin}/?prefix=${encodeURIComponent(prefix)}&name=${encodeURIComponent(guestName.trim())}`;
    setGeneratedLink(link);
  };

  const fullMessage = `Dear ${prefix} ${guestName.trim()} ❤️

With joyful hearts, we warmly invite you to celebrate one of the most special days of our lives as we begin our journey together.

Please view our wedding invitation and all the event details through the link below 🌐:

${generatedLink}

Your presence would truly mean the world to us, and we would be honored to celebrate this beautiful moment together.

With love,
❤️ Ashini & Kushan`;

  const copyLink = async () => {
    if (!generatedLink) return;
    await navigator.clipboard.writeText(generatedLink);
    alert('Link copied to clipboard!');
  };

  const copyMessage = async () => {
    if (!generatedLink) return;
    await navigator.clipboard.writeText(fullMessage);
    alert('Full message copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-20 px-4">
      <div className="max-w-xl w-full bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-3xl font-serif text-gray-800 mb-6 text-center">Invitation Link Generator</h1>
        
        <form onSubmit={handleGenerate} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Prefix</label>
            <select
              value={prefix}
              onChange={(e) => setPrefix(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ed5f5f] focus:border-transparent outline-none"
            >
              {prefixes.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Guest Name</label>
            <input
              type="text"
              required
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              placeholder="e.g. Sanjaya"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ed5f5f] focus:border-transparent outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#ed5f5f] hover:bg-[#ed5f5f]/90 text-white font-medium py-3 rounded-lg transition-colors"
          >
            Generate Link
          </button>
        </form>

        {generatedLink && (
          <div className="mt-8 space-y-6 border-t pt-8">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Generated Link</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  readOnly
                  value={generatedLink}
                  className="flex-1 px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-600 outline-none"
                />
                <button
                  onClick={copyLink}
                  className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors whitespace-nowrap"
                >
                  Copy Link Only
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Generated Message</label>
              <textarea
                readOnly
                rows={12}
                value={fullMessage}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-700 outline-none resize-none"
              />
              <button
                onClick={copyMessage}
                className="w-full py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors"
              >
                Copy Full Message
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
