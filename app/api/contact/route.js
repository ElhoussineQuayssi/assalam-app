import { NextResponse } from "next/server";
import db from "@/lib/db";

// Store a contact message
export async function POST(request) {
    const { name, email, message } = await request.json();
    db.exec(`
        INSERT INTO contact_messages (name, email, message)
        VALUES (?, ?, ?)`, [name, email, message]);
    return NextResponse.json({ message: "Contact message stored" });
}
