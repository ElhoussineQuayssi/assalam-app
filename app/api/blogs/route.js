import { NextResponse } from "next/server";
import db from "@/lib/db";

// Create a new blog post
export async function POST(request) {
    const { title, content, imageUrl, adminId } = await request.json();
    const result = db.exec(`
        INSERT INTO blog_posts (title, content, imageUrl, adminId)
        VALUES (?, ?, ?, ?)`, [title, content, imageUrl, adminId]);
    return NextResponse.json({ id: result.lastInsertRowid });
}

// Retrieve all blog posts
export async function GET() {
    const posts = db.prepare("SELECT * FROM blog_posts").all();
    return NextResponse.json(posts);
}

// Update a blog post
export async function PUT(request) {
    const { id, title, content, imageUrl } = await request.json();
    db.exec(`
        UPDATE blog_posts
        SET title = ?, content = ?, imageUrl = ?
        WHERE id = ?`, [title, content, imageUrl, id]);
    return NextResponse.json({ message: "Blog post updated" });
}

// Delete a blog post
export async function DELETE(request) {
    const { id } = await request.json();
    db.exec(`DELETE FROM blog_posts WHERE id = ?`, [id]);
    return NextResponse.json({ message: "Blog post deleted" });
}
