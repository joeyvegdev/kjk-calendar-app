'use client';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function Calendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const { data } = await supabase.from('jobs').select('id,title,scheduled_start,scheduled_end');
      if (data) {
        setEvents(data.map(job => ({
          id: job.id,
          title: job.title,
          start: job.scheduled_start,
          end: job.scheduled_end
        })));
      }
    };
    fetchJobs();
  }, []);

  return <FullCalendar plugins={[dayGridPlugin, interactionPlugin]} initialView="dayGridMonth" events={events} />;
}