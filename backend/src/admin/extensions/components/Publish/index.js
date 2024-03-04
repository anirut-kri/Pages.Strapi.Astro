import React from "react";
import ArrowUp from "@strapi/icons/ArrowUp";
import { Button } from "@strapi/design-system/Button";

const Publish = () => {
    return (
        <Button
            variant="secondary"
            startIcon={<ArrowUp />}
            onClick={() => {
                fetch(
                    "https://api.cloudflare.com/client/v4/pages/webhooks/deploy_hooks/21f31d59-88c1-4226-91bd-4844ed048282",
                    {
                        method: "POST",
                    }
                );
            }}
        >
            Publish
        </Button>
    );
};

export default Publish;
