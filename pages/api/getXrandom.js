
import { createClient } from '@supabase/supabase-js'


export default async function handler(req, res) {

    const supabaseUrl = process.env.SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_KEY
    const supabase = createClient(supabaseUrl, supabaseKey)

    const xnum = 10;


    let { data, error } = await supabase
        .rpc('getXRandom', {
            xnum
        })

    if (error) console.error(error)
    else console.log(data)



    res.status(200).json(data)
}