import Preview from "./extensions/components/Preview";
import Publish from "./extensions/components/Publish";

export default {
    bootstrap(app) {
        app.injectContentManagerComponent("listView", "actions", {
            name: "Preview",
            Component: Preview,
        });
        app.injectContentManagerComponent("listView", "actions", {
            name: "Publish",
            Component: Publish,
        });
    },
};
