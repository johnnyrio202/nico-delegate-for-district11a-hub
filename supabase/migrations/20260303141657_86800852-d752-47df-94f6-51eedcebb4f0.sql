
-- Create table for volunteer signups
CREATE TABLE public.volunteer_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  help_details TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for campaign joins (email signups from About section)
CREATE TABLE public.campaign_joins (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for contact messages
CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.volunteer_signups ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.campaign_joins ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (public forms, no auth required)
CREATE POLICY "Anyone can submit volunteer signup"
  ON public.volunteer_signups FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can join campaign"
  ON public.campaign_joins FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can send contact message"
  ON public.contact_messages FOR INSERT
  WITH CHECK (true);
