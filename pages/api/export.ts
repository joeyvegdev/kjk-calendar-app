import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../lib/supabaseClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { data } = await supabase.from('jobs').select('*');
  if (!data) return res.status(404).json({ error: 'No jobs found' });
  const csvRows = [Object.keys(data[0]).join(','), ...data.map(job => Object.values(job).join(','))].join('\n');
  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', 'attachment; filename="jobs.csv"');
  res.status(200).send(csvRows);
}