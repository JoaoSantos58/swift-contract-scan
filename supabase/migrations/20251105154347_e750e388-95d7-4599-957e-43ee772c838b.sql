-- Create table for waitlist subscribers
CREATE TABLE public.waitlist_subscribers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for sample requests
CREATE TABLE public.sample_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  business_type TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.waitlist_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sample_requests ENABLE ROW LEVEL SECURITY;

-- Create policies to allow public inserts (for form submissions)
CREATE POLICY "Allow public to insert waitlist subscribers"
ON public.waitlist_subscribers
FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "Allow public to insert sample requests"
ON public.sample_requests
FOR INSERT
TO anon
WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX idx_waitlist_email ON public.waitlist_subscribers(email);
CREATE INDEX idx_sample_requests_email ON public.sample_requests(email);
CREATE INDEX idx_waitlist_created ON public.waitlist_subscribers(created_at DESC);
CREATE INDEX idx_sample_requests_created ON public.sample_requests(created_at DESC);