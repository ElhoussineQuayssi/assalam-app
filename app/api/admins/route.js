import { NextResponse } from "next/server";
import db from "@/lib/db";

// Create a new admin
export async function POST(request) {
    const { username, passwordHash, email, role } = await request.json();
    const result = db.exec(`
        INSERT INTO admins (username, passwordHash, email, role)
        VALUES (?, ?, ?, ?)`, [username, passwordHash, email, role]);
    return NextResponse.json({ id: result.lastInsertRowid });
}

// Retrieve all admins
export async function GET() {
    const admins = db.prepare("SELECT * FROM admins").all();
    return NextResponse.json(admins);
}

// Update an admin
export async function PUT(request) {
    const { id, username, passwordHash, email, role } = await request.json();
    db.exec(`
        UPDATE admins
        SET username = ?, passwordHash = ?, email = ?, role = ?
        WHERE id = ?`, [username, passwordHash, email, role, id]);
    return NextResponse.json({ message: "Admin updated" });
}

// Delete an admin
export async function DELETE(request) {
    const { id } = await request.json();
    db.exec(`DELETE FROM admins WHERE id = ?`, [id]);
    return NextResponse.json({ message: "Admin deleted" });
}
