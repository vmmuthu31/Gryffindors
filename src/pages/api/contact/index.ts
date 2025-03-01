import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type ResponseData = {
  message?: string;
  error?: string;
};

// Create a transporter using nodemailer
const transporter = nodemailer.createTransport({
  host: "smtpout.secureserver.net",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body;

    // Validate the input
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Get current date and time
    const currentDate = new Date().toLocaleString("en-US", {
      timeZone: "UTC",
      dateStyle: "full",
      timeStyle: "long",
    });

    // Email options with professional HTML template
    const mailOptions = {
      from: {
        name: "Gryffindors PVT LTD", // Replace with your company name
        address: process.env.EMAIL_USER as string,
      },
      to: {
        name: "Support Team", // Replace with recipient name
        address: process.env.EMAIL_USER as string,
      },
      subject: `New Contact Inquiry from ${name}`,
      text: `
        Contact Form Submission
        Date: ${currentDate}
        
        From:
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
        
        Best regards,
        Your Company Name
      `,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f9f9f9;
              border-radius: 5px;
            }
            .header {
              background-color: #2c3e50;
              color: white;
              padding: 20px;
              text-align: center;
              border-radius: 5px 5px 0 0;
            }
            .content {
              background-color: white;
              padding: 20px;
              border-radius: 0 0 5px 5px;
              box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            }
            .info-block {
              margin-bottom: 20px;
              padding: 15px;
              background-color: #f8f9fa;
              border-left: 4px solid #2c3e50;
            }
            .footer {
              margin-top: 20px;
              text-align: center;
              color: #666;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Form Submission</h2>
              <p style="margin: 0;">Received on ${currentDate}</p>
            </div>
            <div class="content">
              <div class="info-block">
                <h3 style="margin-top: 0;">Contact Information</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              </div>
              
              <div class="info-block">
                <h3 style="margin-top: 0;">Message</h3>
                <p style="white-space: pre-wrap;">${message}</p>
              </div>
              
              <div class="footer">
                <p>This is an automated message from your contact form.</p>
                <p>© ${new Date().getFullYear()} Your Company Name. All rights reserved.</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
}
