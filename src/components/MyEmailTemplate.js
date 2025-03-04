// src/components/MyEmailTemplate.js
import React from "react";

export function MyEmailTemplate({ name, message }) {
    return (
        <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
            <h1>Bonjour {name} !</h1>
            <p>{message}</p>
            <footer>
                <small>Envoyé par notre application</small>
            </footer>
        </div>
    );
}
