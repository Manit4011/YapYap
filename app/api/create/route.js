import { StreamChat } from "stream-chat";
import { clerkClient } from '@clerk/nextjs/server';

const api_key = "pn6ntg8sp5xc";
const api_secret = "6xyvrv3d5k5qt5hkqb9netgaa3vg7qprska2gkaqzyqysfphgtyjkd9s7dm5nm6g";
// const user_id = "user_2u34INBraLEZo1DIujGZ4V1wPVT";

export async function POST(request) {
    // Initialize a Server Client
    const serverClient = StreamChat.getInstance(api_key, api_secret);
    const user = await request.json()

    function capitalize(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    // Create User Token
    const token = serverClient.createToken(user.data.id);
    console.log("a new user has been created", token);

    const client = await clerkClient();
    await serverClient.upsertUser({id: user.data.id})

    await client.users.updateUserMetadata(user.data.id, {
        publicMetadata: {
            token: token,
        },
    })

    const slugs = ["python-chat", "js-chat", "ml-chat", "web-chat", "cyber-sec-chat", "devops-chat"];
    slugs.forEach(async(item)=>{
        const channel = serverClient.channel('messaging', item,{
            image: 'https://getstream.io/random_png/?name=react',
            name: capitalize(item) + "Discussion",
            created_by_id: user.data.id
        });
        await channel.create()
        channel.addMembers([user.data.id])
    })

    return Response.json({ message: 'Hello World' })
}