"use client";

import { useState } from "react";

export const ContactCard: React.FC<
    React.HTMLAttributes<HTMLFormElement>
> = ({ ...props }) => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true);

        const formData = new FormData(e.currentTarget);

        await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: formData.get("name"),
                email: formData.get("email"),
                message: formData.get("message"),
            }),
        }).then((response) => {
            if (!response.ok) {
                throw new Error("Failed to send message");
            }
            return response.json();
        }).then(() => {
            setSuccess(true);
        }).catch((err) => {
            setError(err.message);
        }).finally(() => {
            setLoading(false);
        });
    };

    return (
        <article
            className="flex flex-col gap-3 rounded-lg border border-gray-300 bg-white p-5 shadow-sm"
        >
            <header>
                <h4 className="text-lg font-semibold text-black">Contact Us</h4>
                <p className="text-sm text-gray-600">
                    If you have any questions or need assistance, drop us a message.
                </p>
            </header>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4" {...props}>
                <label className="flex flex-col gap-1 text-sm text-gray-800">
                    <span className="text-gray-600">Name</span>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </label>

                <label className="flex flex-col gap-1 text-sm text-gray-800">
                    <span className="text-gray-600">Email</span>
                    <input
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        className="rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </label>

                <label className="flex flex-col gap-1 text-sm text-gray-800">
                    <span className="text-gray-600">Message</span>
                    <textarea
                        rows={4}
                        name="message"
                        placeholder="Your message..."
                        className="rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </label>

                <button
                    type="submit"
                    disabled={loading}
                    className="rounded bg-blue-600 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                >
                    Send Message
                </button>

                {error && <p className="text-sm text-red-600">Error: {error}</p>}
                {success && <p className="text-sm text-green-600">Message sent successfully!</p>}
            </form>
        </article>
    );
};