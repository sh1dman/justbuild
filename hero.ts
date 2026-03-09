import { heroui } from "@heroui/react";

export default heroui({
    themes: {
        light: {
            colors: {
                background: "#f3efe6",
                foreground: "#24211d",
                primary: {
                    DEFAULT: "#d49a31",
                    foreground: "#241f18",
                },
                secondary: {
                    DEFAULT: "#c7b08a",
                    foreground: "#241f18",
                },
            },
        },
        dark: {
            colors: {
                background: "#050505",
                foreground: "#d9d6d1",
                primary: {
                    DEFAULT: "#8e8578",
                    foreground: "#050505",
                },
                secondary: {
                    DEFAULT: "#171717",
                    foreground: "#d9d6d1",
                },
            },
        },
    },
});
