import openai from "@/lib/chatgpt";
import { NextResponse } from "next/server";

type Option = {
    value: string;
    label: string;
}

export async function GET(request: Request) {
    const models = await openai.listModels().then((res) => res.data.data);

    const modelsOrdered = models.sort(
        (p1, p2) => (p1.id > p2.id ) ? 1 : (p1.id < p2.id) ? -1 : 0
    );

    const modelOptions = modelsOrdered.map((model) => ({
        value: model.id,
        label:model.id
    }));

    return NextResponse.json({modelOptions});
}