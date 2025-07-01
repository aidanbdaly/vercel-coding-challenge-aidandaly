export const POST = async (req: Request) => {
    const body = await req.json();

    const response = await fetch("https://sheetdb.io/api/v1/934q9o15qknrs", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            data: [
                {
                    name: body.name,
                    email: body.email,
                    message: body.message,
                },
            ],
        }),
    });

    if (!response.ok) {
        return new Response(JSON.stringify({ error: "Failed to submit the form." }), {
            status: response.status,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    return new Response(JSON.stringify({ message: "Thank you for your message!", body }), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
}