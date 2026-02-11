'use client';

import { useState, useEffect } from 'react';
import { Edit3, Save, X, Eye, EyeOff, Settings, Trash2, Plus } from 'lucide-react';

interface EditableSection {
  id: string;
  title: string;
  content: string;
  type: 'text' | 'heading' | 'list' | 'image' | 'component';
  difficulty: 'easy' | 'medium' | 'hard';
  lastModified: Date;
}

export default function AdminPanel() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [editableSections, setEditableSections] = useState<EditableSection[]>([
    {
      id: 'hero-title',
      title: 'Hero Title',
      content: 'Percetakan Digital Terpercaya',
      type: 'heading',
      difficulty: 'easy',
      lastModified: new Date()
    },
    {
      id: 'hero-description',
      title: 'Hero Description',
      content: 'Solusi cetak modern untuk kebutuhan bisnis Anda',
      type: 'text',
      difficulty: 'easy',
      lastModified: new Date()
    },
    {
      id: 'services-grid',
      title: 'Services Grid Layout',
      content: 'Grid layout untuk layanan dengan responsive design',
      type: 'component',
      difficulty: 'hard',
      lastModified: new Date()
    },
    {
      id: 'gallery-articles',
      title: 'Gallery Articles',
      content: 'Dynamic article content dengan images dan animations',
      type: 'component',
      difficulty: 'medium',
      lastModified: new Date()
    },
    {
      id: 'contact-form',
      title: 'Contact Form',
      content: 'Form dengan validation dan API integration',
      type: 'component',
      difficulty: 'medium',
      lastModified: new Date()
    }
  ]);

  useEffect(() => {
    // Check admin status (you can implement proper auth later)
    const checkAdmin = () => {
      const isAdminMode = localStorage.getItem('admin-mode') === 'true';
      setIsAdmin(isAdminMode);
    };
    checkAdmin();

    // Listen for admin mode toggle
    const handleKeyPress = (e: KeyboardEvent) => {
      // Ctrl+Shift+A to toggle admin mode
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        e.preventDefault();
        toggleAdminMode();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const toggleAdminMode = () => {
    const newAdminState = !isAdmin;
    setIsAdmin(newAdminState);
    localStorage.setItem('admin-mode', newAdminState.toString());
  };

  const handleSectionEdit = (sectionId: string) => {
    setSelectedSection(sectionId);
    setIsEditing(true);
  };

  const handleSectionSave = (sectionId: string, newContent: string) => {
    setEditableSections(prev =>
      prev.map(section =>
        section.id === sectionId
          ? { ...section, content: newContent, lastModified: new Date() }
          : section
      )
    );
    setSelectedSection(null);
    setIsEditing(false);
  };

  const handleSectionCancel = () => {
    setSelectedSection(null);
    setIsEditing(false);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'text': return '📝';
      case 'heading': return '📋';
      case 'list': return '📌';
      case 'image': return '🖼️';
      case 'component': return '🧩';
      default: return '📄';
    }
  };

  if (!isAdmin) {
    return (
      <div className="fixed bottom-4 left-4 z-50">
        <button
          onClick={toggleAdminMode}
          className="bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition-colors"
          title="Enable Admin Mode (Ctrl+Shift+A)"
        >
          <Settings className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex">
      <div className="bg-white w-96 h-full overflow-y-auto">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Admin Panel</h2>
            <button
              onClick={toggleAdminMode}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="text-sm text-gray-600">
            <p>🎯 Pilih bagian yang ingin diedit</p>
            <p>⚡ Klik pada section untuk mulai editing</p>
            <p>🔥 Sections dengan difficulty 'hard' butuh perhatian khusus</p>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-700">Sections List</h3>
            <div className="space-y-3">
              {editableSections.map((section) => (
                <div
                  key={section.id}
                  className={`border rounded-lg p-4 cursor-pointer transition-all hover:shadow-md ${
                    selectedSection === section.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                  }`}
                  onClick={() => handleSectionEdit(section.id)}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{getTypeIcon(section.type)}</span>
                      <h4 className="font-medium text-gray-800">{section.title}</h4>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(section.difficulty)}`}>
                      {section.difficulty}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2 line-clamp-2">{section.content}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Type: {section.type}</span>
                    <span>Last: {section.lastModified.toLocaleTimeString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {isEditing && selectedSection && (
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-700">Edit Section</h3>
              {(() => {
                const section = editableSections.find(s => s.id === selectedSection);
                if (!section) return null;

                return (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Section: {section.title}
                      </label>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(section.difficulty)}`}>
                          {section.difficulty}
                        </span>
                        <span className="text-xs text-gray-500">Type: {section.type}</span>
                      </div>
                    </div>

                    {section.type === 'text' || section.type === 'heading' ? (
                      <textarea
                        defaultValue={section.content}
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        rows={4}
                        placeholder="Edit content here..."
                      />
                    ) : (
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-600 mb-2">This is a component section.</p>
                        <p className="text-xs text-gray-500">For complex components, edit the source files directly.</p>
                        <div className="mt-3">
                          <a
                            href={`#${section.id}`}
                            className="text-blue-600 hover:text-blue-800 text-sm underline"
                          >
                            Go to section in page →
                          </a>
                        </div>
                      </div>
                    )}

                    <div className="flex space-x-3">
                      <button
                        onClick={() => {
                          const textarea = document.querySelector('textarea');
                          if (textarea) {
                            handleSectionSave(section.id, (textarea as HTMLTextAreaElement).value);
                          }
                        }}
                        className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                      >
                        <Save className="w-4 h-4" />
                        <span>Save</span>
                      </button>
                      <button
                        onClick={handleSectionCancel}
                        className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition-colors flex items-center justify-center space-x-2"
                      >
                        <X className="w-4 h-4" />
                        <span>Cancel</span>
                      </button>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
            <h4 className="font-medium text-yellow-800 mb-2">💡 Tips for Difficult Sections:</h4>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• <strong>Hard sections</strong>: Check component structure and dependencies</li>
              <li>• <strong>Medium sections</strong>: Review logic and state management</li>
              <li>• <strong>Easy sections</strong>: Simple text/content edits</li>
              <li>• Use browser DevTools for debugging</li>
              <li>• Test changes in development first</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Overlay for highlighting selected section */}
      {selectedSection && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
            <p className="text-sm">Editing: {selectedSection}</p>
          </div>
        </div>
      )}
    </div>
  );
}
