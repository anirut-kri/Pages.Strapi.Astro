import React from "react";
import ArrowUp from "@strapi/icons/ArrowUp";
import { Button } from "@strapi/design-system/Button";

const Publish = () => {
    return (
        <Button
            variant="secondary"
            startIcon={<ArrowUp />}
            onClick={() => alert("Hello World")}
        >
            Publish
        </Button>
    );
};

export default Publish;
