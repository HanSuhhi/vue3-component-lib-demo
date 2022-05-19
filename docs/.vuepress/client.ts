import { defineClientConfig } from "@vuepress/client";
import { createAtypical } from "../../dist/atypical.es";
import "../../dist/style.css";

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(createAtypical());
  },
});
