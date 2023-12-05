import { connectToDB } from "@utils/database";
import Prompt from "@models/Prompt";

export const GET = async (req, res,{params}) => {

    try {
        await connectToDB();
        const prompts = await Prompt.find({creator: params.id}).populate('creator');
        return new Response(JSON.stringify(prompts), {
            headers: { "Content-Type": "application/json" },
            status: 200});
    } catch (error) {
        return new Response("Error", { status: 500 });
    }
}