"use client"

import { useState } from "react";
import styles from "../css/Contact.module.css"


export default function Contact() {

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.name == 'name') {
            setName(event.target.value);
        } else if (event.target.name == 'email') {
            setEmail(event.target.value);

        } else if (event.target.name == 'phone') {
            setPhone(event.target.value);

        } else if (event.target.name == 'message') {
            setMessage(event.target.value);
        }
    }

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");


    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setLoading(true);
        setStatus("");

        // const form = event.currentTarget;
        // const formData = new FormData(form);

        // const data = {
        //     name: formData.get("name"),
        //     email: formData.get("email"),
        //     phone: formData.get("phone"),
        //     message: formData.get("message"),
        // };

        const data = { name, email, phone, message };

        try {

            const res = await fetch('http://localhost:3000/api/contact', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (!result.ok) {
                throw new Error(result.message || "Failed to send message");
            }

            // if (!result.success) {

            //     setStatus(result.message);
            //     return;
            // }

            setStatus("Contact submitted successfully!");
            // form.reset();

        } catch (error) {
            setStatus(error instanceof Error
                ? error.message
                : "Something went wrong."
            );
        } finally {
            setLoading(false);

            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
        }
    }

    return (
        <>
            <div className={styles.contactContainer}>
                <form className={styles.contactForm} onSubmit={handleSubmit}>
                    <h2>Contact Us</h2>
                    <p>We'd love to hear from you. Send us a message!</p>

                    <div className={styles.formGroup}>
                        <label htmlFor="name">Full Name <span>*</span></label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your full name"
                            autoComplete="name"
                            value={name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email Address <span>*</span></label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            autoComplete="email"
                            value={email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="phone">Phone Number <span>*</span></label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Enter your phone number"
                            autoComplete="tel"
                            value={phone}
                            onChange={handleChange}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="message">Message <span>*</span></label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            placeholder="Write your message here..."
                            onChange={handleChange}
                            value={message}
                        />
                    </div>

                    <button
                        type="submit"
                        className={styles.submitBtn}
                        disabled={loading}
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>

                    {status && <p role="status" className={styles.status}>{status}</p>}
                </form>
            </div>
        </>
    );
}