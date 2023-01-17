import Iframe from "sanity-plugin-iframe-pane";
import type { DefaultDocumentNodeResolver } from "sanity/desk";

export const getDefaultDocumentNode: DefaultDocumentNodeResolver = (S, { schemaType }) => {
    if (schemaType === "product") {
        return S.document().views([
            S.view.form(),

            S.view
                .component(Iframe)
                .options({
                    // Required: Accepts async function
                    // Or a STRING
                    url: `${
                        process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000"
                    }/api/preview`,
                    // Optional: Set the default size
                    defaultSize: "desktop",
                    reload: {
                        button: true, // default `undefined`
                    },
                    // Optional: Pass attributes to the underlying `iframe` element:
                    attributes: {},
                })
                .title("Preview")
        ])
    }
}