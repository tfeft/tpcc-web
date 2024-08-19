import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

export const {data: events, error: appError} = await supabase.from('events').select('*, cities:city_id(id,city), locations:location_id(id, name, url)').order('id');
export const { data: all_monthyears_themes, } = await supabase.from('distinct_monthyears_themes').select('*');
export const {data: all_monthyears, } = await supabase.from('distinct_monthyears').select('*');
export const { data: upcoming_event, error } = await supabase.from('events').select('*, cities:city_id(id,city), locations:location_id(id, name, url)').gte('date', new Date().toISOString().split('T')[0]).lte('date', new Date(new Date().setDate(new Date().getDate() + 7)).toISOString().split('T')[0])
