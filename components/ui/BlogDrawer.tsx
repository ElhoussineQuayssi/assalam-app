import React, { useState } from 'react';
import { Drawer, DrawerContent, DrawerHeader, DrawerFooter, DrawerTitle, DrawerClose } from './drawer'; // Adjust the import path as necessary
import { Button } from './button'; // Import Button component
import { Input } from './input'; // Import Input component
import { Textarea } from './textarea'; // Import Textarea component
import axios from 'axios';

const BlogDrawer: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await axios.post('/api/blogs', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      onClose(); // Close the drawer after submission
    } catch (error) {
      console.error('Error uploading blog:', error);
    }
  };

  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Create/Update Blog</DrawerTitle>
          <DrawerClose onClick={onClose} />
        </DrawerHeader>
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <Textarea
            placeholder="Blog Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <input type="file" onChange={handleImageChange} required />
          <DrawerFooter>
            <Button type="submit">Submit</Button>
          </DrawerFooter>
        </form>
      </DrawerContent>
    </Drawer>
  );
};

export default BlogDrawer;
