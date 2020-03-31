import React, { useState } from "react";

/* == node libraries */
import { API } from "aws-amplify";
import { Elements, StripeProvider } from "react-stripe-elements";

/* == components */
import BillingForm from "../components/BillingForm";

/* == config */
import config from "../config";

/* == styles */
import "./Settings.css";

export default function Settings(props) {
    const [isLoading, setIsLoading] = useState(false);

    function billUser(details) {
        return API.post("notes", "/billing", {
            body: details,
        });
    }

    async function handleFormSubmit(storage, { token, error }) {
        if (error) {
            alert(error);
            return;
        }

        setIsLoading(true);

        try {
            await billUser({
                storage,
                source: token.id,
            });

            alert("Your card has been charged successfully!");
            props.history.push("/");
        } catch (e) {
            alert(e);
            setIsLoading(false);
        }
    }

    return (
        <div className="Settings">
            <StripeProvider apiKey={config.STRIPE_KEY}>
                <Elements>
                    <BillingForm
                        isLoading={isLoading}
                        onSubmit={handleFormSubmit}
                    />
                </Elements>
            </StripeProvider>
        </div>
    );
}
