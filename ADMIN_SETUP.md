# INSIGHT Admin Panel Setup Guide

## Quick Start

Your INSIGHT platform now has a fully functional admin panel where you can manage all opportunities!

### How to Access (After Publishing)

1. Visit: `your-app-url/admin-login`
2. Enter your admin password
3. Manage your opportunities!

---

## Setting Your Admin Password

### For Development (Testing Now)
The default password is `admin123` - you can use this to test the admin panel right now!

### For Production (After Publishing)

**IMPORTANT:** Before publishing, you MUST set a secure admin password!

#### Steps to Set Your Password:

1. **Open Replit Secrets**
   - Click on "Secrets" in the left sidebar (looks like a lock icon)
   
2. **Add Admin Password**
   - Click "Add new secret"
   - Key: `ADMIN_PASSWORD`
   - Value: Your chosen secure password (make it strong!)
   - Click "Add secret"

3. **Publish Your Site**
   - The admin panel will now use YOUR password instead of "admin123"

---

## Using the Admin Panel

### Login
1. Go to `/admin-login`
2. Enter your password
3. Click "Login"

### Dashboard Features

#### View All Opportunities
- See all your opportunities in a table
- Quickly see title, organization, country, deadline, funding, and status

#### Add New Opportunity
1. Click "Add Opportunity" button
2. Fill in the form:
   - **Title**: Program name (e.g., "Summer STEM Camp")
   - **Organization**: Who runs it (e.g., "MIT")
   - **Description**: What students will do
   - **Location**: Where it happens (e.g., "Boston, USA" or "Virtual")
   - **Country**: Main country (for filtering)
   - **Website URL**: The actual application link
   - **Deadline**: When applications close (e.g., "March 15, 2025")
   - **Deadline Status**: 
     - Open = Currently accepting applications
     - Closed = No longer accepting
     - Reopening = Will reopen later
   - **Reopen Date**: If reopening, when? (optional)
   - **Funding**: 
     - Free = No cost to students
     - Paid = Students pay
     - Fully Funded = Travel, food, everything covered
   - **Competitiveness**:
     - Low = Easy to get in
     - Medium = Moderately selective
     - High = Very competitive
   - **Languages**: English, Spanish, etc. (comma-separated: "English, Spanish")
   - **Career Areas**: STEM, Arts, Leadership, etc. (comma-separated: "STEM, Leadership")
   - **Duration**: How long (e.g., "2 weeks", "3 months")
   - **Age Range**: Who can apply (e.g., "16-24")
3. Click "Add Opportunity"

#### Edit Existing Opportunity
1. Find the opportunity in the table
2. Click the pencil (edit) icon
3. Make your changes
4. Click "Update Opportunity"

#### Delete Opportunity
1. Find the opportunity in the table
2. Click the trash (delete) icon
3. Confirm deletion
4. The opportunity is removed permanently

#### Logout
- Click "Logout" in the top right when done

---

## Tips for Managing Opportunities

### Finding Real Opportunities
- Search Google for "fully funded summer programs for students"
- Look on university websites
- Check nonprofit organization websites
- Browse scholarship databases

### Adding URLs
When you find an opportunity:
1. Copy the application page URL
2. Add it to the "Website URL" field
3. Students can click "View Details" to go directly there!

### Keeping It Updated
- Check deadlines monthly
- Update status when programs close
- Add "reopenDate" for programs that reopen annually
- Delete outdated programs

### Ecuador Section
- Set Country to "Ecuador" for local opportunities
- These automatically show in the special Ecuador section
- Great for students who can't travel abroad!

---

## Security Notes

✅ **Your password is safe**: It's stored as an environment secret
✅ **Session-based**: You stay logged in for 7 days
✅ **Protected routes**: Only you can add/edit/delete
✅ **Public viewing**: Students see opportunities without logging in

⚠️ **Important**:
- Never share your admin password
- Use a strong password (mix of letters, numbers, symbols)
- Change it periodically for security

---

## Troubleshooting

### "Invalid Password"
- Make sure you set the ADMIN_PASSWORD secret correctly
- Check for typos
- Remember it's case-sensitive

### Can't Access /admin Directly
- This is normal! You must login first at /admin-login
- The dashboard is protected for security

### Changes Not Showing
- Refresh the page
- Make sure you clicked "Add/Update Opportunity"
- Check if there were any error messages

---

## Questions?

The admin panel is designed to be simple and user-friendly. If you get stuck:
1. Try logging out and back in
2. Refresh the page
3. Check that all required fields are filled in

Happy managing! 🎉
