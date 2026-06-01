import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { error, context, userName, userEmail } = await req.json();

    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    if (!RESEND_API_KEY) {
      console.error('Admin alert: RESEND_API_KEY not set');
      return new Response(JSON.stringify({ success: false }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const timestamp = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });

    const html = `
      <h2 style="color:#c0392b;">⚠️ Contact Form Error — Action Required</h2>
      <p><strong>Time:</strong> ${timestamp} ET</p>
      <p><strong>Error:</strong> ${error}</p>
      <p><strong>Context:</strong> ${context}</p>
      ${userName ? `<p><strong>User name:</strong> ${userName}</p>` : ''}
      ${userEmail ? `<p><strong>User email:</strong> ${userEmail}</p>` : ''}
      <hr/>
      <p style="color:#888;font-size:12px;">This is an automated alert from nicoformddelegate.com. A visitor tried to submit the contact form but encountered an error. Please check the Supabase dashboard for more details.</p>
    `;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Campaign Website <notifications@nicoformddelegate.com>',
        to: ['info@nicoformddelegate.com'],
        subject: '⚠️ Contact Form Error on nicoformddelegate.com',
        html,
      }),
    });

    if (!res.ok) {
      const data = await res.json();
      console.error('Admin alert email failed:', data);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('send-admin-alert error:', err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
