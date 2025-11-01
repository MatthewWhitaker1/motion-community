import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';

export async function POST(request: Request) {
  try {
    console.log('Starting file upload process');
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      console.error('No file provided in upload request');
      return NextResponse.json(
        { error: "No file provided" },
        { status: 400 }
      );
    }

    console.log(`Processing file: ${file.name}, size: ${file.size} bytes`);
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    const path = join(process.cwd(), 'public/uploads', file.name);
    console.log(`Saving file to: ${path}`);
    await writeFile(path, buffer);
    
    console.log('File upload completed successfully');
    return NextResponse.json({ 
      url: `/uploads/${file.name}`,
      message: "File uploaded successfully" 
    });
    
  } catch (error) {
    console.error('File upload failed:', error);
    return NextResponse.json(
      { error: "Failed to upload file" },
      { status: 500 }
    );
  }
}