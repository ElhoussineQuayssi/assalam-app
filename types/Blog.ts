export interface Blog {
    id: number;
    title: string;
    content: string;
    imageUrl?: string; // Optional field
    adminId: number;
    createdAt: string; // ISO date string
  }