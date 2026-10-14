"use client";

export default function Footer() {
    return (
        <>
            <style jsx >
                {`
                .footer {
                    padding: 25px;
                    text-align: center;
                    color: #64748b;
                    background: #ffffff;
                    border-top: 1px solid #e2e8f0;
                }
            `}
            </style>
            <footer className="footer">
                © 2026 MyBlog. All rights reserved.
            </footer>
        </>
    )
}