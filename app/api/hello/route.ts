import { NextResponse } from 'next/server';

export function GET() {
    return NextResponse.json({
        name: "Haresh",
        age: "28",
        surname: "Chauhan Haresh Sureshbhai"
    });
}

export async function POST(request: Request) {
    const formData = await request.formData();
    return NextResponse.json({
        name: formData.get('name'),
        email: formData.get('email'),
        mobile: formData.get('mobile')
    })
}