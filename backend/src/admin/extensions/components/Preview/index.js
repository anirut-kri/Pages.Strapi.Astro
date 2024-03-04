import React from "react";
import Eye from "@strapi/icons/Eye";
import { Button } from "@strapi/design-system/Button";

const Preview = () => {
    return (
        <Button
            variant="secondary"
            startIcon={<Eye />}
            onClick={() => {
                fetch(
                    "https://api.cloudflare.com/client/v4/pages/webhooks/deploy_hooks/ec332889-b526-4d8e-89a9-b20d5ab787a1",
                    {
                        method: "POST",
                    }
                );
            }}
        >
            Preview
        </Button>
    );
};

export default Preview;
