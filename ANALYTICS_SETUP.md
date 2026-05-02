# Vercel Web Analytics Setup

This project has been configured with Vercel Web Analytics for privacy-friendly, real-time traffic insights.

## What Was Installed

- **Package**: `@vercel/analytics` v1.6.1
- **Files Added**:
  - `analytics.js` - Custom analytics initialization script
  - `package.json` - Project dependencies
  - `package-lock.json` - Dependency lock file

## How It Works

The `analytics.js` script:
1. Initializes the Vercel Analytics queue (`window.va`)
2. Auto-detects the environment (development vs production)
3. Loads the Vercel Analytics tracking script in production mode
4. Disables tracking in development (localhost, 127.0.0.1, local IPs)

## Enabling Analytics

To start collecting analytics data:

1. **Enable in Vercel Dashboard**:
   - Go to your project in the [Vercel Dashboard](https://vercel.com/dashboard)
   - Navigate to Settings > Analytics
   - Click the "Enable Web Analytics" button

2. **Deploy Your Site**:
   ```bash
   git push
   ```
   Or use the Vercel CLI:
   ```bash
   vercel --prod
   ```

3. **Verify Setup**:
   - Visit your deployed site
   - Open browser DevTools > Network tab
   - Look for requests to `/_vercel/insights/*`
   - Check the Analytics tab in your Vercel Dashboard

## What Gets Tracked

### Automatic Tracking
- **Page Views**: All page navigations are automatically tracked
- **Web Vitals**: Performance metrics (LCP, FID, CLS, FCP, TTFB)
- **User Sessions**: Anonymous session data
- **Geographic Data**: Country/region of visitors
- **Device Info**: Browser, OS, device type
- **Traffic Sources**: Referrers and UTM parameters

### Custom Events (Optional)

You can track custom events using the `va()` function:

```javascript
// Track a button click
document.getElementById('contact-btn').addEventListener('click', function() {
  window.va('event', {
    name: 'contact_form_opened'
  });
});

// Track with properties
window.va('event', {
  name: 'project_viewed',
  data: {
    project: 'Portfolio Redesign',
    category: 'Web Development'
  }
});
```

## Privacy & Compliance

Vercel Web Analytics is:
- **Privacy-Friendly**: No cookies, no personal data collection
- **GDPR Compliant**: No consent banner required
- **Anonymous**: All data is aggregated and anonymous
- **No Third-Party**: Data stays on Vercel's infrastructure

## Local Development

In development mode (localhost), analytics:
- **Initializes** the queue but doesn't send data
- **Logs** a console message confirming development mode
- **Allows testing** of custom event tracking

## Troubleshooting

### Analytics Not Showing Data

1. **Verify Analytics is Enabled**: Check Vercel Dashboard > Settings > Analytics
2. **Check Deployment**: Make sure the latest code is deployed to production
3. **Browser Console**: Look for any error messages
4. **Ad Blockers**: Some ad blockers may block analytics (expected behavior)

### Testing Locally

To test the integration locally:

```bash
# Install a local server
npm install -g serve

# Run the site
serve .

# Open http://localhost:3000
```

Check the browser console for the development mode message.

## Resources

- [Vercel Analytics Documentation](https://vercel.com/docs/analytics)
- [Quickstart Guide](https://vercel.com/docs/analytics/quickstart)
- [@vercel/analytics Package](https://www.npmjs.com/package/@vercel/analytics)
- [Web Vitals Explained](https://web.dev/vitals/)

## Support

For issues or questions:
- Check the [Vercel Analytics Docs](https://vercel.com/docs/analytics)
- Visit [Vercel Community](https://github.com/vercel/vercel/discussions)
- Contact Vercel Support through your dashboard
