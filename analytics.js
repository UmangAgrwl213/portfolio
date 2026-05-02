// Vercel Web Analytics Integration
// This script initializes Vercel Web Analytics for tracking page views and custom events.
// 
// Setup Instructions:
// 1. Enable Web Analytics in your Vercel Dashboard (Project Settings > Analytics)
// 2. Deploy your site to Vercel
// 3. Vercel will automatically inject the analytics tracking script
//
// This initialization ensures the analytics queue is ready before Vercel's script loads.

(function() {
  'use strict';
  
  // Initialize the analytics queue
  // This allows analytics calls to be queued before the script loads
  window.va = window.va || function() {
    (window.vaq = window.vaq || []).push(arguments);
  };

  // Auto-detect environment based on hostname
  var mode = 'production';
  try {
    var hostname = window.location.hostname;
    if (hostname === 'localhost' || 
        hostname === '127.0.0.1' || 
        hostname === '' ||
        hostname.startsWith('192.168.') ||
        hostname.startsWith('10.')) {
      mode = 'development';
    }
  } catch (e) {
    // Fallback to production if detection fails
  }
  
  // Set the mode for analytics
  window.vam = mode;

  // In development mode, log that analytics is initialized but won't track
  if (mode === 'development') {
    console.log('[Vercel Analytics] Running in development mode - tracking disabled');
  }

  // Load the Vercel Analytics script
  // This will work automatically once Analytics is enabled in the Vercel dashboard
  if (mode === 'production') {
    var script = document.createElement('script');
    script.src = '/_vercel/insights/script.js';
    script.defer = true;
    script.setAttribute('data-sdkn', '@vercel/analytics');
    script.setAttribute('data-sdkv', '1.6.1');
    
    script.onerror = function() {
      console.warn('[Vercel Analytics] Failed to load. Make sure Analytics is enabled in your Vercel Dashboard.');
    };
    
    // Add script to document
    if (document.head) {
      document.head.appendChild(script);
    } else {
      // Fallback if head is not ready
      document.addEventListener('DOMContentLoaded', function() {
        document.head.appendChild(script);
      });
    }
  }
})();
