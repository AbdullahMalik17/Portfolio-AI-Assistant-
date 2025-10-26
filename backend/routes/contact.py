"""
Contact Form Routes
Handles contact form submissions
"""

from fastapi import APIRouter, HTTPException, BackgroundTasks
from pydantic import BaseModel, EmailStr
from typing import Optional
import logging
import os

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

router = APIRouter()


class ContactForm(BaseModel):
    name: str
    email: EmailStr
    message: str


class ContactResponse(BaseModel):
    success: bool
    message: str
    message_id: Optional[str] = None


async def send_email_notification(form: ContactForm):
    """
    Background task to send email notification
    TODO: Implement email service (SendGrid, AWS SES, etc.)
    """
    logger.info(f"📧 Email notification for: {form.email}")
    logger.info(f"From: {form.name}")
    logger.info(f"Message: {form.message}")
    
    # Here you would integrate with an email service
    # Example: sendgrid, aws ses, etc.


@router.post("/contact", response_model=ContactResponse)
async def submit_contact_form(
    form: ContactForm,
    background_tasks: BackgroundTasks
):
    """
    Submit contact form
    
    - **name**: Sender's name
    - **email**: Sender's email
    - **message**: Message content
    
    Returns success status
    """
    try:
        logger.info(f"📨 New contact form submission from: {form.name} ({form.email})")
        
        # Add email notification as background task
        background_tasks.add_task(send_email_notification, form)
        
        # Here you could save to database
        # Example: await save_to_database(form)
        
        return ContactResponse(
            success=True,
            message="Your message has been received! I'll get back to you soon.",
            message_id=f"msg_{form.email}_{len(form.message)}"
        )
    
    except Exception as e:
        logger.error(f"❌ Error processing contact form: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail="An error occurred while processing your message"
        )

