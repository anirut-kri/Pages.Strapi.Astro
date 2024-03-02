import React from "react";
import Eye from "@strapi/icons/Eye";
import { Button } from "@strapi/design-system/Button";

const Preview = () => {
    return (
        <Button
            variant="secondary"
            startIcon={<Eye />}
            onClick={() => alert("Hello World")}
        >
            Preview
        </Button>
    );
};

export default Preview;
