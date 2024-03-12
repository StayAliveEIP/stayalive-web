"use client";
import React, { useState } from 'react';
import type { NextPage } from 'next';

interface DocumentCategory {
  id: string;
  name: string;
}

const documentCategories: DocumentCategory[] = [
  { id: 'identity-card', name: 'Carte d\'identité' },
  { id: 'diploma', name: 'Formation/Diplôme' },
];

interface FileWithPreviewAndCategory {
  file: File;
  preview: string;
  category: string;
}

const DocumentVerification: NextPage = () => {
  const [selectedFiles, setSelectedFiles] = useState<FileWithPreviewAndCategory[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, categoryId: string) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const updatedFile = {
        file,
        preview: URL.createObjectURL(file),
        category: categoryId,
      };

      const filteredFiles = selectedFiles.filter(file => file.category !== categoryId);
      setSelectedFiles([...filteredFiles, updatedFile]);
    }
  };

  const uploadDocument = async (fileWithCategory: FileWithPreviewAndCategory) => {
    const formData = new FormData();
    formData.append("file", fileWithCategory.file);
    formData.append("category", fileWithCategory.category);

    try {
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer`, // Assume you handle auth
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Server responded with an error');
      }

      // Handle server response for a successful file upload
      const result = await response.json();
      console.log(result.message);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    selectedFiles.forEach(uploadDocument);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Vérification des documents</h1>
      <form onSubmit={handleSubmit}>
        {documentCategories.map(category => (
          <div key={category.id} className="mb-6">
            <h2 className="mb-2 font-semibold">{category.name}</h2>
            <input
              type="file"
              onChange={(e) => handleFileChange(e, category.id)}
              className="mb-4"
            />
          </div>
        ))}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {selectedFiles.map((file, index) => (
            <div key={index} className="border p-2">
              <p>{file.file.name}</p>
              <p>Catégorie: {documentCategories.find(c => c.id === file.category)?.name}</p>
              <img src={file.preview} alt="Aperçu du document" className="max-w-full h-auto" />
            </div>
          ))}
        </div>
        {selectedFiles.length > 0 && (
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Soumettre les documents
          </button>
        )}
      </form>
    </div>
  );
};

export default DocumentVerification;
