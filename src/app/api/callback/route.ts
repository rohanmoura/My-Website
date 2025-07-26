import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import path from 'path';

const SHEET_ID = process.env.GOOGLE_SHEET_ID;
const RANGE = 'Sheet1!A:G'; // Assuming columns A-G for Date, Name, Phone, Email, Profession, Status, Call Status

// Initialize Google Sheets API
function getGoogleSheetsInstance() {
  const serviceAccountPath = path.join(process.cwd(), 'service-account.json');
  
  const auth = new google.auth.GoogleAuth({
    keyFile: serviceAccountPath,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  return google.sheets({ version: 'v4', auth });
}

export async function POST(request: NextRequest) {
  try {
    const { phoneNumber } = await request.json();

    // Validate phone number
    if (!phoneNumber || !/^[6-9]\d{9}$/.test(phoneNumber)) {
      return NextResponse.json(
        { error: 'Invalid phone number format' },
        { status: 400 }
      );
    }

    const sheets = getGoogleSheetsInstance();

    // Get existing data to check for duplicates
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: RANGE,
    });

    const rows = response.data.values || [];
    
    // Skip header row and check for existing phone number
    const existingEntry = rows.slice(1).find((row) => row[2] === phoneNumber);

    if (existingEntry) {
      const status = existingEntry[5]; // Status column (index 5)
      
      if (status === 'No') {
        return NextResponse.json(
          { 
            error: 'duplicate',
            message: "You've already submitted this number. Please wait, we'll reach out to you soon." 
          },
          { status: 409 }
        );
      }
      // If status is 'Yes', allow new entry (fall through to add new row)
    }

    // Add new row
    const currentDate = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    const newRow = [
      currentDate,  // Date
      'None',       // Name
      phoneNumber,  // Phone number
      'None',       // Email
      'None',       // Profession
      'No',         // Status
      ''            // Call Status (empty)
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: RANGE,
      valueInputOption: 'RAW',
      requestBody: {
        values: [newRow],
      },
    });

    return NextResponse.json(
      { 
        success: true,
        message: "Thank you! We'll call you shortly." 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing callback request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}